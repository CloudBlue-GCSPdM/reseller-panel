import requests
from config import bit_defender_key


class response:
    pass

def trend_micro():
    #query goes here
    table_response = response()
    table_response.showData = True
    table_response.headers = "fill this with headers"
    table_response.data = "fill this with data"

    return table_response


def sophos():
    #query goes here
    table_response = response()
    table_response.showData = True
    return table_response


def bit_defender():
    #query goes here
    table_response = response()
 
    url = 'https://cloud.gravityzone.bitdefender.com/api/v1.0/jsonrpc/companies'
    apikey = bit_defender_key
    headers = {'Content-Type': 'application/json'}
    payload = {
        'params': {
            "nameFilter": '*'
        },
        "jsonrpc": "2.0",
        "method": "findCompaniesByName",
        "id": "ae037403-7947-4f2b-b0b2-af190a8b44eb"
    }

    r = requests.post(url=url, auth=(apikey, ''), json=payload, headers=headers)

    table_response.data = r.json()
    table_response.showData = True 

    return table_response

def invalidVendor():
    
    table_response = response()
    table_response.showData = False 

    return table_response