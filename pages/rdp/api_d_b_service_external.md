---
title: D&B Service
sidebar: rdp_sidebar
permalink: api_d_b_service.html
folder: rdp
type: HowToAPI
# layout: page_api
---

D&B Rest API is used in the following **D&B Enrich** use case:Enrich simply means enhancing the data by passing the input attributes. The D&B rest API  accepts parameters like DUNS number and data blocks such as **Company Information**(related organization, address, headquarters) and **Hierarchy Connections** (four blocks such as parent organization, domestic, global and headquarters) to get enriched organizational data. Based on the inputs, a call to D&B API is made. This returns a set of attributes, which have information related to an organization, corporate connections, and so on.

* It will internally use  https://plus.dnb.com/v1/data/duns/ D&B API to fetch data based on DUNS number. User must pass block ids based on the subscription with D&B. Passing block ids in request will enhance the output and you will have a closer look on D&B attributes. 

This topic describes how to use the Restful API **{TenantURL or ID}/api/dnbservice/enrich** to enrich your data like the company information that includes organization name, organization address, and so on. 

## Scenario

Consider you wish to get complete company information based on the DUNS number that you provide.

## Header

The header of the request contains parameters to authenticate and authorize the request. The request is authenticated only if the API authentication is enabled in the tenant configuration. See Authentication Services, for more information.

To authenticate the request, you must:

* Use https and append the request with the current time-stamp in ISO_8601 format (&timeStamp="current timestamp in ISO_8601 format") 
* Generate authToken by hashing the request using the clientAuthKey with HmacSHA256 algorithm. 
* Pass the clientId, userId, and authToken in the header.

You can also pass additional parameters such as ownershipData and userRoles, in the request header to authorize the request. See Understanding the Request Headers, for more information.

## Request

To get the company details, you can use the RESTful API **{TenantURL or ID}/api/dnbservice/enrich**. In the request send the following details:

{% include callout.html content="**Note**: ‘dunsnumber’ and' ‘blockids’ are the mandatory and only parameters to call the enrich API.
" type="primary" %}

<pre>
<code>
{
  "dataObject": {
    "id": "erslNutLPQf2XwS",
    "name": "Syndigo",
    "type": "customer",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"dunsnumber": {</span>
          "values": [
            {
              "id": "46d4a191-5b26-4a7f-805e-68efe8e23f37",
              <span style="background-color: #FFFF00">"value": "037787298",</span>
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
       <span style="background-color: #FFFF00"> "blockIds": {</span>
       <span style="background-color: #FFFF00">   "values": [</span>
        <span style="background-color: #FFFF00">    {
              "id": "11_1",
              "value": "companyinfo_L1_v1",
              "locale": "nb_NO",
              "source": "internal"
            },</span>
        <span style="background-color: #FFFF00">    {
              "id": "11_1",
              "value": "hierarchyconnections_L1_v1",
              "locale": "nb_NO",
              "source": "internal"</span>
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response

Returns the complete organization details based on the DUNS number.

<pre>
<code>
{
  "dataObjectOperationRequest": {
    "returnRequest": false,
    "requestId": "2d5ce3aa-77ae-4a77-a864-b6177f95dfca",
    "taskId": "2d5ce3aa-77ae-4a77-a864-b6177f95dfca"
  },
  "dataObjectOperationResponse": {
    "status": "success",
    "totalRecords": 4,
    "dataObjects": [
      {
        "type": "customer",
        "data": {
          "attributes": {
            "dnbresponsetime": {
              "values": [
                {
                  "value": "2022-05-09T11:59:12.149Z",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbservicename": {
              "values": [
                {
                  "value": "companyinfo_L1_v1",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dunsnumber": {
              "values": [
                {
                  "value": "037787298",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunscs1streportdate": {
              "values": [
                {
                  "value": "1986-07-07",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "organizationname": {
              "values": [
                {
                  "value": "Micro Focus Software Inc.",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnborgdunsumber": {
              "values": [
                {
                  "value": "037787298",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnborgdefaultcurrency": {
              "values": [
                {
                  "value": "USD",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunscsdelistedindicator": {
              "values": [
                {
                  "value": "false",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbindustrycodeussicv4text": {
              "values": [
                {
                  "value": "7371",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnborgcountrycode": {
              "values": [
                {
                  "value": "US",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunscsmailundeliverableindicator": {
              "values": [
                {
                  "value": "false",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunscsmarketableindicator": {
              "values": [
                {
                  "value": "true",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunscsossummarycode": {
              "values": [
                {
                  "value": "9074",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunscsossummarytext": {
              "values": [
                {
                  "value": "Active",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnborgpaddpostalcode": {
              "values": [
                {
                  "value": "84606-6101",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryaddcontinentname": {
              "values": [
                {
                  "value": "North America",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryaddcountryname": {
              "values": [
                {
                  "value": "United States",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryaddcountyname": {
              "values": [
                {
                  "value": "Utah",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryaddcountrycode": {
              "values": [
                {
                  "value": "US",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryaddlocalityname": {
              "values": [
                {
                  "value": "Provo",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryaddregionshortname": {
              "values": [
                {
                  "value": "UT",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryaddregionlongname": {
              "values": [
                {
                  "value": "Utah",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbpaddstreetline1": {
              "values": [
                {
                  "value": "1800 Novell Pl",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimarybusinessname": {
              "values": [
                {
                  "value": "Micro Focus Software Inc.",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbpaddregisteredaddindicator": {
              "values": [
                {
                  "value": "false",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimaryindustrycodeussicv4code": {
              "values": [
                {
                  "value": "7371",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnborgactivities": {
              "group": [
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbactlangdescriptipon": {
                    "values": [
                      {
                        "value": "US English",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbactdescription": {
                    "values": [
                      {
                        "value": "Custom computer programing",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbactlangcode": {
                    "values": [
                      {
                        "value": "331",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "dnborgidentificationnumbers": {
              "group": [
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbidentificationnumber": {
                    "values": [
                      {
                        "value": "0D9V6",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumpreferredindicator": {
                    "values": [
                      {
                        "value": "",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumtypecode": {
                    "values": [
                      {
                        "value": "23949",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumtypedescription": {
                    "values": [
                      {
                        "value": "Commercial And Government Entity Code",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbidentificationnumber": {
                    "values": [
                      {
                        "value": "87-0393339",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumpreferredindicator": {
                    "values": [
                      {
                        "value": "true",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumtypecode": {
                    "values": [
                      {
                        "value": "6863",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumtypedescription": {
                    "values": [
                      {
                        "value": "Federal Taxpayer Identification Number (US)",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbidentificationnumber": {
                    "values": [
                      {
                        "value": "W1MKGPLLT7X4",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumpreferredindicator": {
                    "values": [
                      {
                        "value": "",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumtypecode": {
                    "values": [
                      {
                        "value": "37491",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbidentinumtypedescription": {
                    "values": [
                      {
                        "value": "US General Services Administration Unique Entity Identifier",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "dnborgwebsiteaddress": {
              "group": [
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnborgwebsiteaddressdomainname": {
                    "values": [
                      {
                        "value": "microfocus.com",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnborgwebsiteaddressurl": {
                    "values": [
                      {
                        "value": "www.microfocus.com",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "dnbtelephone": {
              "group": [
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnborgtelephonenumber": {
                    "values": [
                      {
                        "value": "8018617000",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbtelenuminternationaldialingcode": {
                    "values": [
                      {
                        "value": "1",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "dnbunspsccodes": {
              "group": [
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbunspsccode": {
                    "values": [
                      {
                        "value": "81110000",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbunspsccodepriority": {
                    "values": [
                      {
                        "value": "1",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbunspsccodetext": {
                    "values": [
                      {
                        "value": "Computer services",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      {
        "id": "037787298",
        "type": "corporatelinkage",
        "data": {
          "attributes": {
            "dnbclpostalCode": {
              "values": [
                {
                  "value": "84606-6101",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclcountryname": {
              "values": [
                {
                  "value": "United States",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclprimaryname": {
              "values": [
                {
                  "value": "Micro Focus Software Inc.",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbcladdressregionabbreviatedname": {
              "values": [
                {
                  "value": "UT",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclstreetaddressline1": {
              "values": [
                {
                  "value": "1800 Novell Pl",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbcladdresslocalityname": {
              "values": [
                {
                  "value": "Provo",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbcladdressregionname": {
              "values": [
                {
                  "value": "Utah",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclcontinentalregionname": {
              "values": [
                {
                  "value": "North America",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunsnumber": {
              "values": [
                {
                  "value": "037787298",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            }
          },
          "relationships": {
            "isdomestic": [
              {
                "relTo": {
                  "id": "erslNutLPQf2XwS",
                  "type": "customer"
                }
              }
            ]
          }
        }
      },
      {
        "id": "738803118",
        "type": "corporatelinkage",
        "data": {
          "attributes": {
            "dnbclpostalCode": {
              "values": [
                {
                  "value": "RG14 1QN",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclcountryname": {
              "values": [
                {
                  "value": "United Kingdom",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclprimaryname": {
              "values": [
                {
                  "value": "MICRO FOCUS INTERNATIONAL PLC",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclstreetaddressline1": {
              "values": [
                {
                  "value": "The Lawn",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclstreetaddressline2": {
              "values": [
                {
                  "value": "22-30 Old Bath Road",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbcladdresslocalityname": {
              "values": [
                {
                  "value": "NEWBURY",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbclcontinentalregionname": {
              "values": [
                {
                  "value": "Europe",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbdunsnumber": {
              "values": [
                {
                  "value": "738803118",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            }
          },
          "relationships": {
            "isglobal": [
              {
                "relTo": {
                  "id": "erslNutLPQf2XwS",
                  "type": "customer"
                }
              }
            ],
            "isparent": [
              {
                "relTo": {
                  "id": "erslNutLPQf2XwS",
                  "type": "customer"
                }
              },
              {
                "relTo": {
                  "id": "erslNutLPQf2XwS",
                  "type": "customer"
                }
              }
            ]
          }
        }
      },
      {
        "type": "customer",
        "data": {
          "attributes": {
            "dnbfamilytreerolesplayed": {
              "group": [
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbfamilytreeroledescription": {
                    "values": [
                      {
                        "value": "Subsidiary",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbfamilytreerolednbcode": {
                    "values": [
                      {
                        "value": "9159",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbfamilytreeroledescription": {
                    "values": [
                      {
                        "value": "Domestic Ultimate",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbfamilytreerolednbcode": {
                    "values": [
                      {
                        "value": "12774",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal",
                  "dnbfamilytreeroledescription": {
                    "values": [
                      {
                        "value": "Parent/Headquarters",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  },
                  "dnbfamilytreerolednbcode": {
                    "values": [
                      {
                        "value": "9141",
                        "locale": "en-US",
                        "src": "dnb",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "dnbclcountryisoalpha2code": {
              "values": [
                {
                  "value": "US",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dunsnumber": {
              "values": [
                {
                  "value": "037787298",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbprimarybusinessname": {
              "values": [
                {
                  "value": "Micro Focus Software Inc.",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbhierarchylevel": {
              "values": [
                {
                  "value": "2",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
                }
              ]
            },
            "dnbgufamilytreememberscount": {
              "values": [
                {
                  "value": "316",
                  "locale": "en-US",
                  "src": "dnb",
                  "source": "internal"
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

