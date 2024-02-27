---
title: Get Entity ID
sidebar: rdp_sidebar
permalink: api_getentityid.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

GetEntityId endpoint of Connector Service API is used to get the matched entity ids along with the types, when the user clicks **View Details** in Syndication Dashboard for a given syndication channel and connector state. 

The response to this API request will be used to the next (getentitystate) request.

### Request

To get the entity ids, you can use the POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/getentityid**. 

Below are the three scenarios in which the API requests are sent.

* **New Items**

When the user clicks **View Details** of **New Items** in Syndication Dashboard for a given syndication channel, this API call is invoked.

<pre>
<code>
{
  "params": {
    "searchQueries": [
      {
        "serviceName": "connectorService",
        "searchQuery": {
          "query": {
            "contexts": [
              {
                "country": "US"
              }
            ],
            "filters": {
              "typesCriterion": [
                "connectorstate"
              ],
              "propertiesCriterion": [
                {
                  "channelid": {
                    "exacts": [
                      "76576878997896765"
                    ]
                  }
                },
                {
                  "entitytype": {
                    "exacts": [
                      "sku",
                      "product"
                    ]
                  }
                }
              ],
              "attributesCriterion": [
                {
                  "introState": {
                    "exacts": [
                      "new"
                    ]
                  }
                }
              ],
              "nonContexual": true
            }
          }
        }
      },
      {
        "serviceName": "entityappservice",
        "searchQuery": {
          "query": {
            "filters": {
              "typesCriterion": [
                "product",
                "sku"
              ]
            },
            "fields": {
              "attributes": [
                "_ALL"
              ]
            },
            "options": {
              "maxRecords": 200
            }
          }
        }
      }
    ]
  }
}
</code>
</pre>

* **Items to be fixed**

When the user clicks **View Details** of **Items failed to validate** in Syndication Dashboard for a given syndication channel, this API call is invoked.

<pre>
<code>
{
  "params": {
    "searchQueries": [
      {
        "serviceName": "connectorService",
        "searchQuery": {
          "query": {
            "contexts": [
              {
                "country": "US"
              }
            ],
            "filters": {
              "typesCriterion": [
                "connectorstate"
              ],
              "propertiesCriterion": [
                {
                  "channelid": {
                    "exacts": [
                      "76576878997896765"
                    ]
                  }
                },
                {
                  "entitytype": {
                    "exacts": [
                      "sku",
                      "product"
                    ]
                  }
                }
              ],
              "attributesCriterion": [
                {
                  "validationState": {
                    "exacts": [
                      "errored"
                    ]
                  }
                },
                {
                  "listedState": {
                    "exacts": [
                      "errored"
                    ]
                  }
                }
              ],
              "isAttributesCriterionOR": true,
              "nonContexual": true
            }
          }
        }
      },
      {
        "serviceName": "entityappservice",
        "searchQuery": {
          "query": {
            "filters": {
              "typesCriterion": [
                "product",
                "sku"
              ]
            },
            "fields": {
              "attributes": [
                "_ALL"
              ]
            },
            "options": {
              "maxRecords": 200
            }
          }
        }
      }
    ]
  }
}
</code>
</pre>

* **Published**

When the user clicks **View Details** of **Items Published** in Syndication Dashboard for a given syndication channel, this API call is invoked.

<pre>
<code>
{
  "params": {
    "searchQueries": [
      {
        "serviceName": "connectorService",
        "searchQuery": {
          "query": {
            "contexts": [
              {
                "country": "US"
              }
            ],
            "filters": {
              "typesCriterion": [
                "connectorstate"
              ],
              "propertiesCriterion": [
                {
                  "channelid": {
                    "exacts": [
                      "76576878997896765"
                    ]
                  }
                },
                {
                  "entitytype": {
                    "exacts": [
                      "sku",
                      "product"
                    ]
                  }
                }
              ],
              "attributesCriterion": [
                {
                  "listedState": {
                    "exacts": [
                      "completed"
                    ]
                  }
                }
              ],
              "nonContexual": true
            }
          }
        }
      },
      {
        "serviceName": "entityappservice",
        "searchQuery": {
          "query": {
            "filters": {
              "typesCriterion": [
                "product",
                "sku"
              ]
            },
            "fields": {
              "attributes": [
                "_ALL"
              ]
            },
            "options": {
              "maxRecords": 200
            }
          }
        }
      }
    ]
  }
}
</code>
</pre>

### Response

Response remains the same for all the above requests - **New items** ,**Items to be Fixed** and **Published** requests.

<pre>
<code>
{
    "response": {
        "entities": [
            {
                "id": "3WXrX7ziSfS6nzMs26Rd2w",
                "name": "_EMPTY",
                "type": "sku",
                "systemInfo": {
                    "tenantId": ""
                }
            },
            {
                "id": "cBgNw7TUTRur1MjyP8J3Zw",
                "name": "_EMPTY",
                "type": "sku",
                "systemInfo": {
                    "tenantId": ""
                }
            },
            {
                "id": "NQpYnwh8SkCIfJcz1EKREQ",
                "name": "_EMPTY",
                "type": "sku",
                "systemInfo": {
                    "tenantId": ""
                }
            }
        ],
        "status": "success",
        "totalRecords": 3
    }
}
</code>
</pre>


