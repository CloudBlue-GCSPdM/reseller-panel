from config import Api_key
from connect.client import ConnectClient
from typing import Optional
from fastapi import FastAPI
import uvicorn

client = ConnectClient(Api_key)
app = FastAPI()


def get_product_data():
    resp = []
    products = client.products.filter(visibility__listing='true')
    for product in products: resp.append(product)
    return resp

def get_subscription_data():
    resp = []
    subscriptions = client.ns('subscriptions').collection('assets').all()
    for subs in subscriptions: resp.append(subs)
    return resp

def get_subs_of_products_data(prod_id):
    resp = []
    subscriptions = client.ns('subscriptions').collection('assets').filter(product__id=prod_id)
    for subs in subscriptions: resp.append(subs)
    return resp

def get_subs_of_vendor_data(vendor_id):
    resp = []
    subscriptions =client.ns('subscriptions').collection('assets').filter(connection__vendor__id=vendor_id)
    for subs in subscriptions: resp.append(subs)
    return resp


@app.get("/vendorList")
def get_vendors():
    return {"vendors": ["Sophos", "McAfee", "TrendMicro", "BitDefender", "Mimecast"]}

#done 
@app.get("/productList")
def get_products():
    resp = get_product_data()
    return {"products" : resp }

#done
@app.get("/subscriptions")
def get_products():
    resp = get_subscription_data()
    return {"subscription" : resp }

#done
@app.get("/product/{product_id}/subscriptions")
def get_prod_subscription (product_id):
    resp = get_subs_of_products_data(product_id)
    return {"data": resp}

#done
@app.get("/vendor/{vendor_id}/subscriptions")
def get_prod_subscription (vendor_id):
    resp = get_subs_of_vendor_data(vendor_id)
    return {"data" : resp}



if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")
