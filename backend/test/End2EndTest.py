import requests


def fetch(loc):
    """
    Simulate the front-end to send the request to the server and test the back-end's response 
    """
    para = {'loc': loc}
    res = requests.get("http://127.0.0.1:3313/feed/refresh", params=para)
    return res.json()


res = fetch("Nassau")
print(res)
