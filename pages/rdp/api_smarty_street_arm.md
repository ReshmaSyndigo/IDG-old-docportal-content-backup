---
title: Smarty Street for Address Record Management (ARM)
sidebar: rdp_sidebar
permalink: api_smarty_street_arm.html
folder: rdp
type: HowTo
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/smartystreet/get** to get the standardised address using **Smarty Street** app. This API is used for address verification, and also for address standardisation based on the inputs provided such as country, street, zip code, address, type and so on. 

There are two use cases for Smarty Street App, that is 
* **Address Enrichment** that focuses on fetching the standardised address based on given inputs and populate them in RS environment.
* **Address Auto Suggest** has auto suggested feature using which the user can select the required address based on input provided from the suggested set of addresses provided by Smarty Street API.

The following are the two API's that are used in Smarty Street:
* **Smarty Street US API**: Is triggered when country is US.
* **Smarty Street International API**: Is triggered when country is other than US.

The Smarty Street takes the input parameters and provides the standardised output in RS JSON format. You can access the Smarty Street library via
https://manage.{POD_NAME}.riversand-dataplatform.com:{WEBPORT}/{TENANT_ID}/api/smartystreet/get

## Scenario

To get address of country US and other countries (other than “US”) using Smarty Street.

{% include snippets/header.html %}

## Request

The following is the sample request with country “US”.

<pre>
<code>
{
  "dataObject": {
    "type": "customer",
    "data": {
      "attributes": {
        "country": {
          "values": [
            {
              "id": "a45a7f15-e012-4127-9d58-d9309787614a",
              "value": "United States",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "street": {
          "values": [
            {
              "id": "89e54521-676c-4c63-ae3a-1010029fbbdd",
              "value": "9 1/2 19th Ave",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "city": {
          "values": [
            {
              "id": "f96be992-029e-4c36-80a6-6c921cf1b5ac",
              "value": "Venice",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "state": {
          "values": [
            {
              "id": "377f705b-2ded-4db9-8d38-4e8aec5c3d10",
              "value": "CA",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        }
      }
    }
  },
  "params": {
    "rdpSystemParams": {
      "clientId": "rdpclient",
      "userId": "rdwadmin@riversand.com",
      "userRoles": "admin"
    }
  },
  "tenantId": "abc"
}
</code>
</pre>

## Response

If the request is successful, then the following response is received.

<pre>
<code>
{
  "dataObjectOperationRequest": {
    "returnRequest": false,
    "requestId": "afe833ec-0766-4010-b7bd-c46067f66f02",
    "taskId": "afe833ec-0766-4010-b7bd-c46067f66f02"
  },
  "dataObjectOperationResponse": {
    "status": "success",
    "totalRecords": 1,
    "dataObjects": [
      {
        "id": "935077b8-3c4d-40b2-96f4-c2bae09f3057",
        "type": "address",
        "data": {
          "attributes": {
            "ssusinput_index": {
              "values": [
                {
                  "value": "0",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdelivery_line_1": {
              "values": [
                {
                  "value": "9 1/2 19th Ave",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuslast_line": {
              "values": [
                {
                  "value": "Venice CA 90291-5498",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdelivery_point_barcode": {
              "values": [
                {
                  "value": "902915498094",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusprimary_number": {
              "values": [
                {
                  "value": "9 1/2",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssiteAddressLine1": {
              "values": [
                {
                  "value": "19th",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusstreet_suffix": {
              "values": [
                {
                  "value": "Ave",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssiteCity": {
              "values": [
                {
                  "value": "Venice",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdefault_city_name": {
              "values": [
                {
                  "value": "Venice",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusstate_abbreviation": {
              "values": [
                {
                  "value": "CA",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssitePostalCode": {
              "values": [
                {
                  "value": "90291",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusplus4_code": {
              "values": [
                {
                  "value": "5498",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdelivery_point": {
              "values": [
                {
                  "value": "09",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdelivery_point_check_digit": {
              "values": [
                {
                  "value": "4",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusrecord_type": {
              "values": [
                {
                  "value": "S",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuszip_type": {
              "values": [
                {
                  "value": "Standard",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuscounty_fips": {
              "values": [
                {
                  "value": "06037",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuscounty_name": {
              "values": [
                {
                  "value": "Los Angeles",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuscarrier_route": {
              "values": [
                {
                  "value": "C038",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuscongressional_district": {
              "values": [
                {
                  "value": "33",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusrdi": {
              "values": [
                {
                  "value": "Residential",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuselot_sequence": {
              "values": [
                {
                  "value": "0099",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuselot_sort": {
              "values": [
                {
                  "value": "A",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssiteLatitude": {
              "values": [
                {
                  "value": "33.985600",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssuslongitude": {
              "values": [
                {
                  "value": "-118.471590",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusprecision": {
              "values": [
                {
                  "value": "Zip9",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssustime_zone": {
              "values": [
                {
                  "value": "Pacific",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusutc_offset": {
              "values": [
                {
                  "value": "-8",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdst": {
              "values": [
                {
                  "value": "true",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdpv_match_code": {
              "values": [
                {
                  "value": "Y",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdpv_footnotes": {
              "values": [
                {
                  "value": "AABB",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdpv_cmra": {
              "values": [
                {
                  "value": "N",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdpv_vacant": {
              "values": [
                {
                  "value": "N",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusdpv_no_stat": {
              "values": [
                {
                  "value": "N",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssusactive": {
              "values": [
                {
                  "value": "Y",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinlatitude": {
              "values": [
                {
                  "value": "33.985600",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinlongitude": {
              "values": [
                {
                  "value": "-118.471590",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssincountry_iso_3": {
              "values": [
                {
                  "value": "USA",
                  "locale": "en-US"
                }
              ]
            },
            "validationstatus": {
              "values": [
                {
                  "value": "None",
                  "locale": "en-US"
                }
              ]
            }
          }
        }
      }
    ]
  }
}
</code>
</pre>

## Request

The following is the sample request with other internation countries (other than “US”).

<pre>
<code>
{
  "dataObject": {
    "type": "customer",
    "data": {
      "attributes": {
        "country": {
          "values": [
            {
              "id": "a45a7f15-e012-4127-9d58-d9309787614a",
              "value": "France",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "ssinaddress1": {
          "values": [
            {
              "id": "70791249-6b9e-4aad-9e4b-db04ec14ee94",
              "value": "Capitaine Jean Luc PICARD",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "ssinpostal_code": {
          "values": [
            {
              "id": "991e6425-5456-4146-be19-e525ca9302ff",
              "value": "33500",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "ssinadministrative_area": {
          "values": [
            {
              "id": "934d2b08-4f15-4484-be30-33aebf43bf6e",
              "value": "SP",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "ssinlocality": {
          "values": [
            {
              "id": "315752c9-e5ac-42cf-b1d7-f88a4877d0b8",
              "value": "Sao+Paulo",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        }
      }
    }
  },
  "params": {
    "rdpSystemParams": {
      "clientId": "rdpclient",
      "userId": "rdwadmin@riversand.com",
      "userRoles": "admin"
    }
  },
  "tenantId": "abc"
}
</code>
</pre>

## Response

If the request is successful, then the following response is received.

<pre>
<code>
{
  "dataObjectOperationRequest": {
    "returnRequest": false,
    "requestId": "9fa3e4fe-8853-48ee-94dc-be8a14c1e363",
    "taskId": "9fa3e4fe-8853-48ee-94dc-be8a14c1e363"
  },
  "dataObjectOperationResponse": {
    "totalRecords": 1,
    "dataObjects": [
      {
        "type": "customer",
        "data": {
          "attributes": {
            "rssiteAddressLine1": {
              "values": [
                {
                  "value": "Capitaine Jean Luc",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssiteAddressLine2": {
              "values": [
                {
                  "value": "Sac Postal 33500",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssiteAddressLine3": {
              "values": [
                {
                  "value": "PICARD",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssiteAddressLine4": {
              "values": [
                {
                  "value": "SAO+PAULO",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssincountry_iso_3": {
              "values": [
                {
                  "value": "FRA",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rssiteLocality": {
              "values": [
                {
                  "value": "SAO+PAULO",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssindependent_locality": {
              "values": [
                {
                  "value": "PICARD",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinthoroughfare": {
              "values": [
                {
                  "value": "Capitaine Jean Luc",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinthoroughfare_name": {
              "values": [
                {
                  "value": "Capitaine Jean Luc",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinpost_box": {
              "values": [
                {
                  "value": "Sac Postal 33500",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinpost_box_type": {
              "values": [
                {
                  "value": "Sac Postal",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinpost_box_number": {
              "values": [
                {
                  "value": "33500",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssingeocode_precision": {
              "values": [
                {
                  "value": "None",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinmax_geocode_precision": {
              "values": [
                {
                  "value": "DeliveryPoint",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinaddress_format": {
              "values": [
                {
                  "value": "thoroughfare|post_box|dependent_locality|locality",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinverification_status": {
              "values": [
                {
                  "value": "Ambiguous",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinaddress_precision": {
              "values": [
                {
                  "value": "Locality",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ssinmax_address_precision": {
              "values": [
                {
                  "value": "DeliveryPoint",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "validationstatus": {
              "values": [
                {
                  "value": "Verified",
                  "locale": "en-US"
                }
              ]
            }
          }
        }
      }
    ]
  }
}
</code>
</pre>