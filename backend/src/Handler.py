"""
The backend for Project Covid Away.
-----------------------------------

Built with Python Flask and communicate with App via RESTful API.

*How To Use This:*
 - Based on Python3
 - Dependencies::
    flask, flask-cors, pandas
 - Run command at the back::
    Python3 Handler.py

"""

import requests
from flask import Flask, request
from flask_cors import CORS
import datetime
import pandas as pd
import json


class Manager:
    """
    Store, update, and parse the cases data given the location
    """
    url = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv"
    filename = 'data.csv'
    data = None
    last_update_time = None
    __instance = None

    @staticmethod
    def get_instance():
        """
        Returns:
            instance for the singleton class Manager
        """
        if Manager.__instance is None:
            Manager()
        return Manager.__instance

    def __init__(self):
        if Manager.__instance is not None:
            raise Exception("This class is a singleton!")
        else:
            Manager.__instance = self

    def get_data(self, loc):
        """
        Args:
            loc: the target US county name
        Returns:
            up-to-date cases and deaths data of the given loc in json format
        """
        cur = self.data[self.data["county"] == loc].values.tolist()[0][4:6]
        cases = {}
        cases["cases"] = int(cur[0])
        cases["deaths"] = int(cur[1])
        json_object = json.dumps(cases)
        return json_object

    def update_dataset_if_needed(self):
        """
        Returns: Update the whole case data file if it is not latest
        """
        if self.last_update_time is not None:
            cur_date = datetime.datetime.now().strftime("%d%m%y")
            if cur_date == self.last_update_time:
                return

        with requests.get(self.url, stream=True) as r:
            self.last_update_time = datetime.datetime.now().strftime("%d%m%y")
            r.raise_for_status()
            with open(self.filename, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
        self.data = pd.read_csv(self.filename)


app = Flask("Covid_Away")
CORS(app)


@app.route('/feed/refresh', methods=['GET'])
def refresh():
    """
    listen to endpoint '/feed/refresh',
    Returns:
        Up-to-date case data
    """
    loc = request.args['loc']
    manager = Manager.get_instance()
    manager.update_dataset_if_needed()
    return manager.get_data(loc)


if __name__ == '__main__':
    app.run(port=3313, debug=False, threaded=True)