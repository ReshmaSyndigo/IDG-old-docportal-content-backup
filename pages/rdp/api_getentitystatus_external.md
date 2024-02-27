---
title: Get Entity Status
sidebar: rdp_sidebar
permalink: api_getentitystatus.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

GetEntityState endpoint of Connector Service API is used to get the matched entities for the given entity ids, syndication channel and connector state along with an additional search criteria. This endpoint is the second API call in Syndication dashboard search page and input to this endpoint is obtained from the response of getentityid endpoint.

### Request

To get the entity status across syndication channels, you can use the POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/getentitystate**.

Below are the three scenarios in which the API requests are sent.

* **New Items**

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
                  "entityid": {
                    "exacts": [
                      "h3PyEG2mRUm2V2af11AX5w"
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
              "attributeCriterion": [
                {
                  "channelid": {
                    "exact": "rs-amazonsellerus-self"
                  }
                },
                {
                  "introState": {
                    "exact": "new"
                  }
                }
              ],
              "nonContexual": true
            }
          },
          "fields": {
            "attributes": [
              "_ALL"
            ]
          }
        }
      },
      {
        "serviceName": "entityappservice",
        "searchQuery": {
          "query": {
            "ids": [
              "h3PyEG2mRUm2V2af11AX5w"
            ],
            "valueContexts": [
              {
                "source": "internal",
                "locale": "en-US"
              }
            ],
            "filters": {
              "typesCriterion": [
                "sku",
                "product"
              ],
              "nonContexual": true
            }
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
    ]
  }
}
</code>
</pre>

* **Entity Error**

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
                  "entityid": {
                    "exacts": [
                      "h3PyEG2mRUm2V2af11AX5w"
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
              "attributeCriterion": [
                {
                  "channelid": {
                    "exact": "rs-amazonsellerus-self"
                  }
                },
                {
                  "listedState": {
                    "exact": "errored"
                  }
                },
                {
                  "validationState": {
                    "exact": "errored"
                  }
                }
              ],
              "nonContexual": true
            }
          },
          "fields": {
            "attributes": [
              "_ALL"
            ]
          }
        }
      },
      {
        "serviceName": "entityappservice",
        "searchQuery": {
          "query": {
            "ids": [
              "h3PyEG2mRUm2V2af11AX5w"
            ],
            "valueContexts": [
              {
                "source": "internal",
                "locale": "en-US"
              }
            ],
            "filters": {
              "typesCriterion": [
                "sku",
                "product"
              ],
              "nonContexual": true
            }
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
    ]
  }
}
</code>
</pre>

* **Published Entity**

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
                  "entityid": {
                    "exacts": [
                      "h3PyEG2mRUm2V2af11AX5w"
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
              "attributeCriterion": [
                {
                  "channelid": {
                    "exact": "rs-amazonsellerus-self"
                  }
                },
                {
                  "listedState": {
                    "exact": "errored"
                  }
                },
                {
                  "validationState": {
                    "exact": "errored"
                  }
                }
              ],
              "nonContexual": true
            }
          },
          "fields": {
            "attributes": [
              "_ALL"
            ]
          }
        }
      },
      {
        "serviceName": "entityappservice",
        "searchQuery": {
          "query": {
            "ids": [
              "h3PyEG2mRUm2V2af11AX5w"
            ],
            "valueContexts": [
              {
                "source": "internal",
                "locale": "en-US"
              }
            ],
            "filters": {
              "typesCriterion": [
                "sku",
                "product"
              ],
              "nonContexual": true
            }
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
    ]
  }
}
</code>
</pre>

### Response

The responses for the above requests are as follows:

* **New Items**

<pre>
<code>
{
  "id": "h3PyEG2mRUm2V2af11AX5w",
  "type": "sku",
  "systemInfo": {
    "tenantId": "connectorsedev"
  },
  "data": {
    "attributes": {
      "MDM ID": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "69783c56-f961-462b-a9ec-853aa6dea759",
            "value": "Test19Mar7002"
          }
        ]
      },
      "SKU Name": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "2101d857-7cec-4814-82d2-797b8d3a78ea",
            "value": "Test19Mar7002"
          }
        ]
      },
      "messageType": {
        "values": [
          {
            "value": "new item",
            "source": "internal",
            "locale": "en-US"
          }
        ]
      },
      "channelName": {
        "values": [
          {
            "value": "Amazon Seller Central",
            "source": "internal",
            "locale": "en-US"
          }
        ]
      },
      "action": {
        "values": [
          {
            "value": "new item",
            "source": "internal",
            "locale": "en-US"
          }
        ]
      }
    }
  }
}
</code>
</pre>

* **Entity Error**

<pre>
<code>
{
  "response": {
    "entities": [
      {
        "id": "8WPt7B5YTMKW-Ax7WIssNQ",
        "type": "product",
        "systemInfo": {
          "tenantId": "connectorsedev"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "de9722ed-cda6-4e79-8e42-8cac170be3ba",
                  "value": "P204"
                }
              ]
            },
            "description": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "31258175-b957-4695-81d5-0b73200a4fa5",
                  "value": "The Velvet Mini-Fringe Trim Square Throw Pillow from Opalhouse™ will make your space pop with warm color and soft textural sheen. Featuring a square silhouette, this velvet accent pillow is trimmed with dense, mini-fringe detailing on all sides, making it a lovely addition to any room in the house, be it the living room or the den. With its soft and cozy feel, this throw pillow won't just add style to your home, but it will also add comfort."
                }
              ]
            },
            "messageType": {
              "values": [
                {
                  "value": "publication Error",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "channelName": {
              "values": [
                {
                  "value": "Amazon Seller Central",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "action": {
              "values": [
                {
                  "value": "Fix 1 Errors",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          }
        }
      },
      {
        "id": "8WPt7B5YTMKW-Ax7WIssNQ",
        "type": "product",
        "systemInfo": {
          "tenantId": "connectorsedev"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "de9722ed-cda6-4e79-8e42-8cac170be3ba",
                  "value": "P204"
                }
              ]
            },
            "description": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "31258175-b957-4695-81d5-0b73200a4fa5",
                  "value": "The Velvet Mini-Fringe Trim Square Throw Pillow from Opalhouse™ will make your space pop with warm color and soft textural sheen. Featuring a square silhouette, this velvet accent pillow is trimmed with dense, mini-fringe detailing on all sides, making it a lovely addition to any room in the house, be it the living room or the den. With its soft and cozy feel, this throw pillow won't just add style to your home, but it will also add comfort."
                }
              ]
            },
            "messageType": {
              "values": [
                {
                  "value": "validation Error",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "channelName": {
              "values": [
                {
                  "value": "Amazon Seller Central",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "action": {
              "values": [
                {
                  "value": "Fix 1 Errors",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code>
</pre>

* **Pubished Entity**

<pre>
<code>
{
  "id": "h3PyEG2mRUm2V2af11AX5w",
  "type": "sku",
  "systemInfo": {
    "tenantId": "connectorsedev"
  },
  "data": {
    "attributes": {
      "MDM ID": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "69783c56-f961-462b-a9ec-853aa6dea759",
            "value": "Test19Mar7002"
          }
        ]
      },
      "SKU Name": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "2101d857-7cec-4814-82d2-797b8d3a78ea",
            "value": "Test19Mar7002"
          }
        ]
      },
      "messageType": {
        "values": [
          {
            "value": "published",
            "source": "internal",
            "locale": "en-US"
          }
        ]
      },
      "channelName": {
        "values": [
          {
            "value": "Amazon Seller Central",
            "source": "internal",
            "locale": "en-US"
          }
        ]
      },
      "action": {
        "values": [
          {
            "value": "published",
            "source": "internal",
            "locale": "en-US"
          }
        ]
      }
    }
  }
}
</code>
</pre>
