from service import get_product_data, get_subs_of_vendor_data, get_subs_of_products_data, get_subscription_data

from fastapi import FastAPI
import uvicorn

app = FastAPI()



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
    return {"subscriptions" : resp }

#done
@app.get("/product/{product_id}/subscriptions")
def get_prod_subscription (product_id):
    resp = get_subs_of_products_data(product_id)
    return resp

#done
@app.get("/vendor/{vendor_id}/subscriptions")
def get_prod_subscription (vendor_id):
    resp = get_subs_of_vendor_data(vendor_id)
    return resp



if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")
