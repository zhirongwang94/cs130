from unittest import TestCase
from src.Handler import Manager
import requests
import json


class TestRefresh(TestCase):
    cases = ["Los Angeles", "Nassau", "New York City", "Montgomery", "Philadelphia"]

    def fetch(self, loc):
        """
        Simulate the front-end to send the request to the server and test the back-end's response
        """
        para = {'loc': loc}
        res = requests.get("http://127.0.0.1:3313/feed/refresh", params=para)
        return res.json()

    def test_cases(self):
        res = str(self.fetch(self.cases[0]))
        m = Manager.get_instance()
        m.update_dataset_if_needed()
        truth = m.get_data(self.cases[0])
        res_cases = res.split(',')[0].split(':')[1]
        tru_cases = truth.split(',')[0].split(':')[1]
        self.assertEqual(res_cases, tru_cases)

    def test_deaths(self):
        res = str(self.fetch(self.cases[0]))
        m = Manager.get_instance()
        m.update_dataset_if_needed()
        truth = m.get_data(self.cases[0])
        res_deaths = res.split(',')[1].split(':')[1]
        tru_deaths = truth.split(',')[1].split(':')[1]
        self.assertEqual(res_deaths, tru_deaths)

    def test_loc(self):
        for t in self.cases:
            res = str(self.fetch(t))
            m = Manager.get_instance()
            m.update_dataset_if_needed()
            truth = m.get_data(t)
            res_cases = res.split(',')[0].split(':')[1]
            tru_cases = truth.split(',')[0].split(':')[1]
            self.assertEqual(res_cases, tru_cases)
            res_deaths = res.split(',')[1].split(':')[1]
            tru_deaths = truth.split(',')[1].split(':')[1]
            self.assertEqual(res_deaths, tru_deaths)


if __name__ == '__main__':
    TestRefresh.main()

