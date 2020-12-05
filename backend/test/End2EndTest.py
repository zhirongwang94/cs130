import requests


def fetch(loc):
    para = {'loc': loc}
    res = requests.get("http://127.0.0.1:3313/feed/refresh", params=para)
    return res.json()


res = fetch("Los Angeles")
print(res)
