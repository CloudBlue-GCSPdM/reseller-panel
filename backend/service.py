from config import Api_key
from external_api_calls import trend_micro, sophos, bit_defender, invalidVendor
from connect.client import ConnectClient

client = ConnectClient(Api_key)


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

    class productTemp:
        pass

    product_info = productTemp()

    try:  
        for sub in subscriptions:
            product_info.id = sub['product']['id']
            product_info.name = sub['product']['name']
            product_info.status = sub['product']['status']
            product_info.icon = sub['product']['icon']
            break
    except:
        query_product = client.products.filter(visibility__listing='true', id=prod_id)

        for product in query_product:
            product_info.id = product['id']
            product_info.name = product['name']
            product_info.status = product['status']
            product_info.icon = product['icon']
            break


    return {"product_info": product_info, "subscriptions": resp}

def get_subs_of_vendor_data(vendor_name):
    resp = []
    vendor_id = 'VA-589-589'

    subscriptions =client.ns('subscriptions').collection('assets').filter(connection__vendor__id=vendor_id)
    for subs in subscriptions: resp.append(subs)

    class vendorTemp:
        pass

    vendor_info = vendorTemp()

    try:
        for sub in subscriptions:
            vendor_info.id = sub['connection']['vendor']['id']
            vendor_info.name = sub['connection']['vendor']['name']
            break
    except:
        products = client.products.filter(owner__id=vendor_id)
        for producto in products:
            vendor_info.id = producto['owner']['id']
            vendor_info.name = producto['owner']['name']
            break

    
    #depending on the vendor called, return corresponding capabilities.
    #use the vendor_name here.

    class vendorSubscriptionDetails:
        pass

    vendor_details = vendorSubscriptionDetails()

    switcher = {     
        "Sophos": sophos(),
        "TrendMicro" : trend_micro(),
        "BitDefender" : bit_defender()
    }

    vendor_details = switcher.get(vendor_name, invalidVendor() )
    return {"vendor_info": vendor_info, "vendor_details": vendor_details, "subscriptions" : resp}