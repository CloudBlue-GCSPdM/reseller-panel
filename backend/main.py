from config import Api_key
from connect.client import ConnectClient
from typing import Optional
from fastapi import FastAPI

client = ConnectClient(Api_key)
app = FastAPI()


# test query
def run_query():

    products = client('pricing').collection('lists').all()
    print(products)
    print(dir(products))

    # for product in products:
    #     print("item-------")
    #     print(product)


@app.get("/")
def read_root():
    return {"test": "response"}


@app.get("/products/{vendor_id}")
def read_products(vendor_id: Optional[str] = None):
    return {"vendor_id": vendor_id, "products": None}


if __name__ == '__main__':
    run_query()