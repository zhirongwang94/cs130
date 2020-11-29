from abc import ABCMeta, abstractmethod
from pip._vendor import requests
import datetime
import pandas as pd
import json


class Handler(metaclass=ABCMeta):
    @abstractmethod
    def read(self, json_message):
        pass

    def send(self):
        pass


class NewsFeedHandler(Handler):
    def read(self, json_message):
        pass
    
    def send(self):
        pass


class CaseDataHandler(Handler):
    def read(self, json_message):
        pass
    
    def send(self):
        pass


class Manager:
    url = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv"
    filename = 'data.csv'
    data = None
    last_update_time = None
    __instance = None

    @staticmethod
    def get_instance():
        if Manager.__instance is None:
            Manager()
        return Manager.__instance

    def __init__(self):
        if Manager.__instance is not None:
            raise Exception("This class is a singleton!")
        else:
            Manager.__instance = self

    def get_data(self, loc):
        cur = self.data[self.data["county"] == loc].values.tolist()[0][4:6]
        cases = {}
        cases["cases"] = int(cur[0])
        cases["deaths"] = int(cur[1])
        json_object = json.dumps(cases)
        return json_object

    def update_dataset_if_needed(self):
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


if __name__ == "__main__":
    manager = Manager.get_instance()
    manager.update_dataset_if_needed()
    manager.get_data("Los Angeles")