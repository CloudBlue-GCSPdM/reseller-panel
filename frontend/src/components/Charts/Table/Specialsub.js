
//what api returns
const feched_data_TM = {"paging":{"total":1,"limit":25,"page":1},"users":[{"user_id":"42dd0865-197f-4220-9ed7-e921bf8a16ba","customer_id":"2a5b09c5-727a-4092-a460-b35f295794cb","note":null,"status":1,"login_name":"IngramMicro_Cust1","first_name":"Carol","last_name":"Lin","email":"carol_y_lin@trend.com.tw","time_zone":"Eastern Standard Time","language":"en-US","emergency_email":null,"phone":{"area_code":null,"number":null,"extension":null}}]}


//unified:

const toggledOn = [        
    {
        "id": "AS-3847-9986-4069",
        "status": "active",
        "events": {
            "created": {
                "at": "2021-11-30T16:24:29+00:00"
            },
            "updated": {
                "at": "2021-11-30T16:25:10+00:00"
            }
        },
        "external_id": "G9U52IGBRU",
        "external_uid": "3ef045da-5991-41e6-8bd5-a30c72bc37ad",
        "product": {
            "id": "PRD-411-678-887",
            "name": "Mock Product",
            "status": "published",
            "icon": "/media/VA-589-589/PRD-411-678-887/media/PRD-411-678-887-logo.png"
        },
        "connection": {
            "id": "CT-8317-0606",
            "hub": {
                "id": "HB-0000-0000",
                "name": "ACME Hub"
            },
            "provider": {
                "id": "PA-030-718",
                "name": "Ingram Micro Cloud - Australia (Provider)"
            },
            "vendor": {
                "id": "VA-589-589",
                "name": "Ingram Micro Cloud - Australia"
            },
            "type": "test"
        },
        "items": [
            {
                "id": "PRD_411_678_887_0001",
                "global_id": "PRD-411-678-887-0001",
                "display_name": "Web Hosting",
                "mpn": "MPN-A",
                "item_type": "reservation",
                "period": "monthly",
                "quantity": 1.0,
                "type": "Licenses"
            }
        ],
        "params": [
            {
                "id": "Test Customer",
                "name": "customer_email",
                "description": "Customer Email Address for registration",
                "type": "text",
                "value": ""
            },
            {
                "id": "subscription_id",
                "name": "subscription_id",
                "description": "The Tenant ID",
                "type": "text",
                "value": "ertt"
            }
        ],
        "tiers": {
            "customer": {
                "id": "TA-4987-0927-6986",
                "external_id": "20599",
                "external_uid": "1fc0618a-f8dc-40c4-8991-204403cf6914",
                "name": "Test Customer",
                "tax_id": "QUP2YBWSDK",
                "contact_info": {
                    "address_line1": "Harvey Plain",
                    "address_line2": "Jones Forge",
                    "city": "Baja California",
                    "state": "Baja California",
                    "postal_code": "23600",
                    "country": "MX",
                    "contact": {
                        "first_name": "Anne",
                        "last_name": "Schoen",
                        "email": "Carolina.GimenezEscalante+Anne_Schoen@ingrammicro.com",
                        "phone_number": {
                            "country_code": "52",
                            "area_code": "200",
                            "phone_number": "1234567"
                        }
                    }
                }
            },
            "tier1": {
                "id": "TA-6759-1057-7215",
                "external_id": "22401",
                "external_uid": "e77f78ec-d16c-4552-87e8-05e2dd278133",
                "name": "Connelly, Ruecker and Leuschke",
                "tax_id": "ZNEPAIXLSM",
                "contact_info": {
                    "address_line1": "Torp Ferry",
                    "address_line2": "Jacobs Fields",
                    "city": "Adana",
                    "state": "Adana",
                    "postal_code": "01720",
                    "country": "TR",
                    "contact": {
                        "first_name": "Pink",
                        "last_name": "Heidenreich",
                        "email": "Carolina.GimenezEscalante+Pink_Heidenreich@ingrammicro.com",
                        "phone_number": {
                            "country_code": "90",
                            "area_code": "212",
                            "phone_number": "3456789"
                        }
                    }
                }
            }
        },
        "marketplace": {
            "id": "MP-02548",
            "name": "CloudBlue Sandbox Marketplace",
            "icon": ""
        },
        "contract": {
            "id": "CRD-63599-58994-92716",
            "name": "Contract of Distribution Agreement CloudBlue Test"
        },
        "billing": {
            "period": {
                "delta": 1.0,
                "uom": "monthly"
            },
            "next_date": "2022-02-28T16:25:08+00:00",
            "anniversary": {
                "day": 30
            }
        },
        "extra": {
            "paging":
            {"total":1,"limit":25,"page":1},"users":[{"user_id":"42dd0865-197f-4220-9ed7-e921bf8a16ba","customer_id":"","note":null,"status":1,"login_name":"IngramMicro_Cust1","first_name":"","last_name":"","":"carol_y_lin@trend.com.tw","time_zone":"","language":"en-US","emergency_email":null,"phone":{"area_code":null,"number":null,"extension":null}}],
            "expand" : true
    
        }
    },
    {
        "id": "",
        "status": "",
        "events": {
            "created": {
                "at": ""
            },
            "updated": {
                "at": "2021-11-30T16:25:10+00:00"
            }
        },
        "external_id": "G9U52IGBRU",
        "external_uid": "3ef045da-5991-41e6-8bd5-a30c72bc37ad",
        "product": {
            "id": "PRD-411-678-887",
            "name": "Mock Product",
            "status": "published",
            "icon": "/media/VA-589-589/PRD-411-678-887/media/PRD-411-678-887-logo.png"
        },
        "connection": {
            "id": "CT-8317-0606",
            "hub": {
                "id": "HB-0000-0000",
                "name": "ACME Hub"
            },
            "provider": {
                "id": "PA-030-718",
                "name": "Ingram Micro Cloud - Australia (Provider)"
            },
            "vendor": {
                "id": "VA-589-589",
                "name": "Ingram Micro Cloud - Australia"
            },
            "type": "test"
        },
        "items": [
            {
                "id": "PRD_411_678_887_0001",
                "global_id": "PRD-411-678-887-0001",
                "display_name": "Web Hosting",
                "mpn": "MPN-A",
                "item_type": "reservation",
                "period": "monthly",
                "quantity": 1.0,
                "type": "Licenses"
            }
        ],
        "params": [
            {
                "id": " ",
                "name": "customer_email",
                "description": "Customer Email Address for registration",
                "type": "text",
                "value": ""
            },
            {
                "id": "subscription_id",
                "name": "subscription_id",
                "description": "The Tenant ID",
                "type": "text",
                "value": "ertt"
            }
        ],
        "tiers": {
            "customer": {
                "id": "TA-4987-0927-6986",
                "external_id": "20599",
                "external_uid": "1fc0618a-f8dc-40c4-8991-204403cf6914",
                "name": "Runolfsson, Treutel and Gusikowski",
                "tax_id": "QUP2YBWSDK",
                "contact_info": {
                    "address_line1": "Harvey Plain",
                    "address_line2": "Jones Forge",
                    "city": "Baja California",
                    "state": "Baja California",
                    "postal_code": "23600",
                    "country": "MX",
                    "contact": {
                        "first_name": "Anne",
                        "last_name": "Schoen",
                        "email": "Carolina.GimenezEscalante+Anne_Schoen@ingrammicro.com",
                        "phone_number": {
                            "country_code": "52",
                            "area_code": "200",
                            "phone_number": "1234567"
                        }
                    }
                }
            },
            "tier1": {
                "id": "TA-6759-1057-7215",
                "external_id": "22401",
                "external_uid": "e77f78ec-d16c-4552-87e8-05e2dd278133",
                "name": "Connelly, Ruecker and Leuschke",
                "tax_id": "ZNEPAIXLSM",
                "contact_info": {
                    "address_line1": "Torp Ferry",
                    "address_line2": "Jacobs Fields",
                    "city": "Adana",
                    "state": "Adana",
                    "postal_code": "01720",
                    "country": "TR",
                    "contact": {
                        "first_name": "Pink",
                        "last_name": "Heidenreich",
                        "email": "Carolina.GimenezEscalante+Pink_Heidenreich@ingrammicro.com",
                        "phone_number": {
                            "country_code": "90",
                            "area_code": "212",
                            "phone_number": "3456789"
                        }
                    }
                }
            }
        },
        "marketplace": {
            "id": "MP-02548",
            "name": "CloudBlue Sandbox Marketplace",
            "icon": ""
        },
        "contract": {
            "id": "CRD-63599-58994-92716",
            "name": "Contract of Distribution Agreement CloudBlue Test"
        },
        "billing": {
            "period": {
                "delta": 1.0,
                "uom": "monthly"
            },
            "next_date": "",
            "anniversary": {
                "day": 30
            }
        },
        "extra": {
            "paging":{"total":1,"limit":25,"page":1},"users":[{"user_id":"42dd0865-197f-4220-9ed7-e921bf8a16ba","customer_id":"4F426605-CE10-41A7-8BC7-24B5E8F4C4BF","note":null,"status":1,"login_name":"IngramMicro_Cust1","first_name":"Lorem ","last_name":"Ipsum","email":`us01`,"time_zone":"Lorem laboris","language":"en-US","emergency_email":null,"phone":{"area_code":null,"number":null,"extension":null}}],
            "expand" : false
    
        }
    },
    {
        "id": "",
            "status": "",
            "events": {
                "created": {
                    "at": ""
                },
                "updated": {
                    "at": "2021-11-30T16:25:10+00:00"
                }
            },
            "external_id": "G9U52IGBRU",
            "external_uid": "3ef045da-5991-41e6-8bd5-a30c72bc37ad",
            "product": {
                "id": "PRD-411-678-887",
                "name": "Mock Product",
                "status": "published",
                "icon": "/media/VA-589-589/PRD-411-678-887/media/PRD-411-678-887-logo.png"
            },
            "connection": {
                "id": "CT-8317-0606",
                "hub": {
                    "id": "HB-0000-0000",
                    "name": "ACME Hub"
                },
                "provider": {
                    "id": "PA-030-718",
                    "name": "Ingram Micro Cloud - Australia (Provider)"
                },
                "vendor": {
                    "id": "VA-589-589",
                    "name": "Ingram Micro Cloud - Australia"
                },
                "type": "test"
            },
            "items": [
                {
                    "id": "PRD_411_678_887_0001",
                    "global_id": "PRD-411-678-887-0001",
                    "display_name": "Web Hosting",
                    "mpn": "MPN-A",
                    "item_type": "reservation",
                    "period": "monthly",
                    "quantity": 1.0,
                    "type": "Licenses"
                }
            ],
            "params": [
                {
                    "id": " ",
                    "name": "customer_email",
                    "description": "Customer Email Address for registration",
                    "type": "text",
                    "value": ""
                },
                {
                    "id": "subscription_id",
                    "name": "subscription_id",
                    "description": "The Tenant ID",
                    "type": "text",
                    "value": "ertt"
                }
            ],
            "tiers": {
                "customer": {
                    "id": "TA-4987-0927-6986",
                    "external_id": "20599",
                    "external_uid": "1fc0618a-f8dc-40c4-8991-204403cf6914",
                    "name": "Runolfsson, Treutel and Gusikowski",
                    "tax_id": "QUP2YBWSDK",
                    "contact_info": {
                        "address_line1": "Harvey Plain",
                        "address_line2": "Jones Forge",
                        "city": "Baja California",
                        "state": "Baja California",
                        "postal_code": "23600",
                        "country": "MX",
                        "contact": {
                            "first_name": "Anne",
                            "last_name": "Schoen",
                            "email": "Carolina.GimenezEscalante+Anne_Schoen@ingrammicro.com",
                            "phone_number": {
                                "country_code": "52",
                                "area_code": "200",
                                "phone_number": "1234567"
                            }
                        }
                    }
                },
                "tier1": {
                    "id": "TA-6759-1057-7215",
                    "external_id": "22401",
                    "external_uid": "e77f78ec-d16c-4552-87e8-05e2dd278133",
                    "name": "Connelly, Ruecker and Leuschke",
                    "tax_id": "ZNEPAIXLSM",
                    "contact_info": {
                        "address_line1": "Torp Ferry",
                        "address_line2": "Jacobs Fields",
                        "city": "Adana",
                        "state": "Adana",
                        "postal_code": "01720",
                        "country": "TR",
                        "contact": {
                            "first_name": "Pink",
                            "last_name": "Heidenreich",
                            "email": "Carolina.GimenezEscalante+Pink_Heidenreich@ingrammicro.com",
                            "phone_number": {
                                "country_code": "90",
                                "area_code": "212",
                                "phone_number": "3456789"
                            }
                        }
                    }
                }
            },
            "marketplace": {
                "id": "MP-02548",
                "name": "CloudBlue Sandbox Marketplace",
                "icon": ""
            },
            "contract": {
                "id": "CRD-63599-58994-92716",
                "name": "Contract of Distribution Agreement CloudBlue Test"
            },
            "billing": {
                "period": {
                    "delta": 1.0,
                    "uom": "monthly"
                },
                "next_date": "",
                "anniversary": {
                    "day": 30
                }
            },
        "extra": {
                "paging":{
                "total":1,
                "limit":25,
                "page":1
                },
                "users":[
                {
                    "user_id":"42dd0865-197f-4220-9ed7-e921bf8a16ba",
                    "customer_id":"4F426605-CE10-41A7-8BC7-24B5E8F4C4BF",
                    "note":null,
                    "status":1,
                    "login_name":"IngramMicro_Cust1",
                    "first_name":"Lorem ",
                    "last_name":"Ipsum",
                    "email": `eu02`,
                    "time_zone":"[Lorem laboris]",
                    "language":"en-US",
                    "emergency_email":null,
                    "phone":{
                        "area_code":null,
                        "number":null,
                        "extension":null
                    }
                }
                ],
            
            "expand" : false

        }
    },
]

const toggledOff = [        
    {
        "id": "AS-4530-2288-8193",
        "status": "active",
        "events": {
            "created": {
                "at": "2021-11-30T16:24:29+00:00"
            },
            "updated": {
                "at": "2021-11-30T16:25:10+00:00"
            }
        },
        "external_id": "G9U52IGBRU",
        "external_uid": "3ef045da-5991-41e6-8bd5-a30c72bc37ad",
        "product": {
            "id": "PRD-411-678-887",
            "name": "Mock Product",
            "status": "published",
            "icon": "/media/VA-589-589/PRD-411-678-887/media/PRD-411-678-887-logo.png"
        },
        "connection": {
            "id": "CT-8317-0606",
            "hub": {
                "id": "HB-0000-0000",
                "name": "ACME Hub"
            },
            "provider": {
                "id": "PA-030-718",
                "name": "Ingram Micro Cloud - Australia (Provider)"
            },
            "vendor": {
                "id": "VA-589-589",
                "name": "Ingram Micro Cloud - Australia"
            },
            "type": "test"
        },
        "items": [
            {
                "id": "PRD_411_678_887_0001",
                "global_id": "PRD-411-678-887-0001",
                "display_name": "Web Hosting",
                "mpn": "MPN-A",
                "item_type": "reservation",
                "period": "monthly",
                "quantity": 1.0,
                "type": "Licenses"
            }
        ],
        "params": [
            {
                "id": "Runolfsson, Treutel and Gusikowski",
                "name": "customer_email",
                "description": "Customer Email Address for registration",
                "type": "text",
                "value": ""
            },
            {
                "id": "subscription_id",
                "name": "subscription_id",
                "description": "The Tenant ID",
                "type": "text",
                "value": "ertt"
            }
        ],
        "tiers": {
            "customer": {
                "id": "TA-4987-0927-6986",
                "external_id": "20599",
                "external_uid": "1fc0618a-f8dc-40c4-8991-204403cf6914",
                "name": "Runolfsson, Treutel and Gusikowski",
                "tax_id": "QUP2YBWSDK",
                "contact_info": {
                    "address_line1": "Harvey Plain",
                    "address_line2": "Jones Forge",
                    "city": "Baja California",
                    "state": "Baja California",
                    "postal_code": "23600",
                    "country": "MX",
                    "contact": {
                        "first_name": "Anne",
                        "last_name": "Schoen",
                        "email": "Carolina.GimenezEscalante+Anne_Schoen@ingrammicro.com",
                        "phone_number": {
                            "country_code": "52",
                            "area_code": "200",
                            "phone_number": "1234567"
                        }
                    }
                }
            },
            "tier1": {
                "id": "TA-6759-1057-7215",
                "external_id": "22401",
                "external_uid": "e77f78ec-d16c-4552-87e8-05e2dd278133",
                "name": "Connelly, Ruecker and Leuschke",
                "tax_id": "ZNEPAIXLSM",
                "contact_info": {
                    "address_line1": "Torp Ferry",
                    "address_line2": "Jacobs Fields",
                    "city": "Adana",
                    "state": "Adana",
                    "postal_code": "01720",
                    "country": "TR",
                    "contact": {
                        "first_name": "Pink",
                        "last_name": "Heidenreich",
                        "email": "Carolina.GimenezEscalante+Pink_Heidenreich@ingrammicro.com",
                        "phone_number": {
                            "country_code": "90",
                            "area_code": "212",
                            "phone_number": "3456789"
                        }
                    }
                }
            }
        },
        "marketplace": {
            "id": "MP-02548",
            "name": "CloudBlue Sandbox Marketplace",
            "icon": ""
        },
        "contract": {
            "id": "CRD-63599-58994-92716",
            "name": "Contract of Distribution Agreement CloudBlue Test"
        },
        "billing": {
            "period": {
                "delta": 1.0,
                "uom": "monthly"
            },
            "next_date": "2022-02-28T16:25:08+00:00",
            "anniversary": {
                "day": 30
            }
        },
        "extra": {
            "paging":
            {"total":1,"limit":25,"page":1},"users":[{"user_id":"42dd0865-197f-4220-9ed7-e921bf8a16ba","customer_id":"","note":null,"status":1,"login_name":"IngramMicro_Cust1","first_name":"","last_name":"","":"carol_y_lin@trend.com.tw","time_zone":"","language":"en-US","emergency_email":null,"phone":{"area_code":null,"number":null,"extension":null}}],
            "expand" : true
    
        }
    },
    {
        "id": "",
        "status": "",
        "events": {
            "created": {
                "at": ""
            },
            "updated": {
                "at": "2021-11-30T16:25:10+00:00"
            }
        },
        "external_id": "G9U52IGBRU",
        "external_uid": "3ef045da-5991-41e6-8bd5-a30c72bc37ad",
        "product": {
            "id": "PRD-411-678-887",
            "name": "Mock Product",
            "status": "published",
            "icon": "/media/VA-589-589/PRD-411-678-887/media/PRD-411-678-887-logo.png"
        },
        "connection": {
            "id": "CT-8317-0606",
            "hub": {
                "id": "HB-0000-0000",
                "name": "ACME Hub"
            },
            "provider": {
                "id": "PA-030-718",
                "name": "Ingram Micro Cloud - Australia (Provider)"
            },
            "vendor": {
                "id": "VA-589-589",
                "name": "Ingram Micro Cloud - Australia"
            },
            "type": "test"
        },
        "items": [
            {
                "id": "PRD_411_678_887_0001",
                "global_id": "PRD-411-678-887-0001",
                "display_name": "Web Hosting",
                "mpn": "MPN-A",
                "item_type": "reservation",
                "period": "monthly",
                "quantity": 1.0,
                "type": "Licenses"
            }
        ],
        "params": [
            {
                "id": " ",
                "name": "customer_email",
                "description": "Customer Email Address for registration",
                "type": "text",
                "value": ""
            },
            {
                "id": "subscription_id",
                "name": "subscription_id",
                "description": "The Tenant ID",
                "type": "text",
                "value": "ertt"
            }
        ],
        "tiers": {
            "customer": {
                "id": "TA-4987-0927-6986",
                "external_id": "20599",
                "external_uid": "1fc0618a-f8dc-40c4-8991-204403cf6914",
                "name": "Runolfsson, Treutel and Gusikowski",
                "tax_id": "QUP2YBWSDK",
                "contact_info": {
                    "address_line1": "Harvey Plain",
                    "address_line2": "Jones Forge",
                    "city": "Baja California",
                    "state": "Baja California",
                    "postal_code": "23600",
                    "country": "MX",
                    "contact": {
                        "first_name": "Anne",
                        "last_name": "Schoen",
                        "email": "Carolina.GimenezEscalante+Anne_Schoen@ingrammicro.com",
                        "phone_number": {
                            "country_code": "52",
                            "area_code": "200",
                            "phone_number": "1234567"
                        }
                    }
                }
            },
            "tier1": {
                "id": "TA-6759-1057-7215",
                "external_id": "22401",
                "external_uid": "e77f78ec-d16c-4552-87e8-05e2dd278133",
                "name": "Connelly, Ruecker and Leuschke",
                "tax_id": "ZNEPAIXLSM",
                "contact_info": {
                    "address_line1": "Torp Ferry",
                    "address_line2": "Jacobs Fields",
                    "city": "Adana",
                    "state": "Adana",
                    "postal_code": "01720",
                    "country": "TR",
                    "contact": {
                        "first_name": "Pink",
                        "last_name": "Heidenreich",
                        "email": "Carolina.GimenezEscalante+Pink_Heidenreich@ingrammicro.com",
                        "phone_number": {
                            "country_code": "90",
                            "area_code": "212",
                            "phone_number": "3456789"
                        }
                    }
                }
            }
        },
        "marketplace": {
            "id": "MP-02548",
            "name": "CloudBlue Sandbox Marketplace",
            "icon": ""
        },
        "contract": {
            "id": "CRD-63599-58994-92716",
            "name": "Contract of Distribution Agreement CloudBlue Test"
        },
        "billing": {
            "period": {
                "delta": 1.0,
                "uom": "monthly"
            },
            "next_date": "",
            "anniversary": {
                "day": 30
            }
        },
        "extra": {
            "paging":{"total":1,"limit":25,"page":1},"users":[{"user_id":"42dd0865-197f-4220-9ed7-e921bf8a16ba","customer_id":"2a5b09c5-727a-4092-a460-b35f295794cb","note":null,"status":1,"login_name":"IngramMicro_Cust1","first_name":"Carol","last_name":"Lin","email":"carol_y_lin@trend.com.tw","time_zone":"Eastern Standard Time","language":"en-US","emergency_email":null,"phone":{"area_code":null,"number":null,"extension":null}}],
            "expand" : false
    
        }
    },
    {
        "id": "",
            "status": "",
            "events": {
                "created": {
                    "at": ""
                },
                "updated": {
                    "at": "2021-11-30T16:25:10+00:00"
                }
            },
            "external_id": "G9U52IGBRU",
            "external_uid": "3ef045da-5991-41e6-8bd5-a30c72bc37ad",
            "product": {
                "id": "PRD-411-678-887",
                "name": "Mock Product",
                "status": "published",
                "icon": "/media/VA-589-589/PRD-411-678-887/media/PRD-411-678-887-logo.png"
            },
            "connection": {
                "id": "CT-8317-0606",
                "hub": {
                    "id": "HB-0000-0000",
                    "name": "ACME Hub"
                },
                "provider": {
                    "id": "PA-030-718",
                    "name": "Ingram Micro Cloud - Australia (Provider)"
                },
                "vendor": {
                    "id": "VA-589-589",
                    "name": "Ingram Micro Cloud - Australia"
                },
                "type": "test"
            },
            "items": [
                {
                    "id": "PRD_411_678_887_0001",
                    "global_id": "PRD-411-678-887-0001",
                    "display_name": "Web Hosting",
                    "mpn": "MPN-A",
                    "item_type": "reservation",
                    "period": "monthly",
                    "quantity": 1.0,
                    "type": "Licenses"
                }
            ],
            "params": [
                {
                    "id": " ",
                    "name": "customer_email",
                    "description": "Customer Email Address for registration",
                    "type": "text",
                    "value": ""
                },
                {
                    "id": "subscription_id",
                    "name": "subscription_id",
                    "description": "The Tenant ID",
                    "type": "text",
                    "value": "ertt"
                }
            ],
            "tiers": {
                "customer": {
                    "id": "TA-4987-0927-6986",
                    "external_id": "20599",
                    "external_uid": "1fc0618a-f8dc-40c4-8991-204403cf6914",
                    "name": "Runolfsson, Treutel and Gusikowski",
                    "tax_id": "QUP2YBWSDK",
                    "contact_info": {
                        "address_line1": "Harvey Plain",
                        "address_line2": "Jones Forge",
                        "city": "Baja California",
                        "state": "Baja California",
                        "postal_code": "23600",
                        "country": "MX",
                        "contact": {
                            "first_name": "Anne",
                            "last_name": "Schoen",
                            "email": "Carolina.GimenezEscalante+Anne_Schoen@ingrammicro.com",
                            "phone_number": {
                                "country_code": "52",
                                "area_code": "200",
                                "phone_number": "1234567"
                            }
                        }
                    }
                },
                "tier1": {
                    "id": "TA-6759-1057-7215",
                    "external_id": "22401",
                    "external_uid": "e77f78ec-d16c-4552-87e8-05e2dd278133",
                    "name": "Connelly, Ruecker and Leuschke",
                    "tax_id": "ZNEPAIXLSM",
                    "contact_info": {
                        "address_line1": "Torp Ferry",
                        "address_line2": "Jacobs Fields",
                        "city": "Adana",
                        "state": "Adana",
                        "postal_code": "01720",
                        "country": "TR",
                        "contact": {
                            "first_name": "Pink",
                            "last_name": "Heidenreich",
                            "email": "Carolina.GimenezEscalante+Pink_Heidenreich@ingrammicro.com",
                            "phone_number": {
                                "country_code": "90",
                                "area_code": "212",
                                "phone_number": "3456789"
                            }
                        }
                    }
                }
            },
            "marketplace": {
                "id": "MP-02548",
                "name": "CloudBlue Sandbox Marketplace",
                "icon": ""
            },
            "contract": {
                "id": "CRD-63599-58994-92716",
                "name": "Contract of Distribution Agreement CloudBlue Test"
            },
            "billing": {
                "period": {
                    "delta": 1.0,
                    "uom": "monthly"
                },
                "next_date": "",
                "anniversary": {
                    "day": 30
                }
            },
        "extra": {
                "paging":{
                "total":1,
                "limit":25,
                "page":1
                },
                "users":[
                {
                    "user_id":"42dd0865-197f-4220-9ed7-e921bf8a16ba",
                    "customer_id":"2a5b09c5-727a-4092-a460-b3921bf8a16ba",
                    "note":null,
                    "status":1,
                    "login_name":"IngramMicro_Cust1",
                    "first_name":"Sam",
                    "last_name":"Young",
                    "email":"sam_young@trend.com.tw",
                    "time_zone":"Eastern Standard Time",
                    "language":"en-US",
                    "emergency_email":null,
                    "phone":{
                        "area_code":null,
                        "number":null,
                        "extension":null
                    }
                }
                ],
            
            "expand" : false

        }
    },
]

const sopho_endpoints = [
    {
        "endpoint_name" : "Sophos Anti-Virus",
        "tenand_id" : "4F426605-CE10-41A7-8BC7-24B5E8F4C4BF",
        "platform" : "macOS",
        "health" : "good",
        "threats" : "-"
    },
    {
        "endpoint_name" : "Sophos AutoUpdate",
        "tenand_id" : "4F426605-CE10-41A7-8BC7-24B5E8F4C4BF",
        "platform" : "macOS",
        "health" : "good",
        "threats" : "-"
    }, {
        "endpoint_name" : "Sophos Anti-Virus",
        "tenand_id" : "4F426605-CE10-41A7-8BC7-24B5E8F4C4BF",
        "platform" : "Windows 10",
        "health" : "good",
        "threats" : "-"
    }
]

const bit_data = [
    {
        "id": "AS-3847-9986-4069",
        "customerName": "Stephen Jhonson",
        "rowStatus": "active",
        "createdAt": "2021-11-30T16:24:29+00:00",
        "billingNextDate": "2022-02-28T16:25:08+00:00",
        "resellerId": "197f-4220-9ed7-e921bf8",
        "expand": true,
        "companyName": "",
        "companyId": "",
        "creationDate": "",
        "partnerType": "",
        "licenseExp": "",
        "usedSlots": ""
    },
    {
        "id": "",
        "customerName": "",
        "rowStatus": "",
        "createdAt": "",
        "billingNextDate": "",
        "resellerId": "197f-4220-9ed7-e921bf8",
        "expand": false,
        "companyName": "Initar",
        "companyId": "ae037403-7947-4f2b-b0b2-af190a8b44eb",
        "creationDate": "2021-11-30T16:24:29+00:00",
        "partnerType": "Platinum",
        "licenseExp": "2030-02-18T14:30:03",
        "usedSlots": 5
    },
    {
        "id": "",
        "customerName": "",
        "rowStatus": "",
        "createdAt": "",
        "billingNextDate": "",
        "resellerId": "197f-4220-9ed7-e921bf8",
        "expand": false,
        "companyName": "Justerip",
        "companyId": "bx037633-7947-4f2b-b0b2-af190a783eb",
        "creationDate": "2021-11-30T16:24:29+00:00",
        "partnerType": "Gold",
        "licenseExp": "2030-02-18T14:30:03",
        "usedSlots": 2
    },
]

// Table #1
// Tenant Name
// Data Region



// Table #2
// Endpoint Name
// Tenant ID
// Platform
// Health
// Threats



export {
    toggledOff,
    toggledOn,
    sopho_endpoints,
    bit_data
}