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
    table_response.showData = True 

    return table_response

def invalidVendor():
    
    table_response = response()
    table_response.showData = False 

    return table_response