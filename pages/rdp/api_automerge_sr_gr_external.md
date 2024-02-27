---
title: Define Attributes for an Entity Type to auto-merge Source Record and Golden Record
sidebar: rdp_sidebar
permalink: api_automerge_sr_gr.html
folder: rdp
type: HowTo
---

This topic describes how to use the Restful API **{TenantURL or ID}/api/matchservice/automerge** to define attributes in the ‘entityManagemodel’ using the ”enforceManageModelForMerge” flag. Based on the flag the platform performs the following:

* Set to ‘true, the platform considers the attributes defined in the manage model for merging Source Record and Golden Record.
* Set to ‘false, the platform considers all the attributes to roll-up to Golden Record.

## Header

The header of the request contains parameters to authenticate and authorize the request. The request is authenticated only if the API authentication is enabled in the tenant configuration. See Authentication Services, for more information.

To authenticate the request, you must:

* Use https and append the request with the current time-stamp in ISO_8601 format (&timeStamp="current timestamp in ISO_8601 format") 
* Generate authToken by hashing the request using the clientAuthKey with HmacSHA256 algorithm. 
* Pass the clientId, userId, and authToken in the header.

You can also pass additional parameters such as ownershipData and userRoles, in the request header to authorize the request. See Understanding the Request Headers, for more information.

## Request

<pre>
<code>
{
  "version": 2,
  "systemInfo": {
    "tenantId": "t1"
  },
  "id": "autotest0044",
  "type": "organization",
  "name": "autotest0044",
  "data": {
    "attributes": {
      "tradestyles": {
        "values": [
          {
            "locale": "en-US",
            "value": "natural resource",
            "type": "string",
            "src": "CRM",
            "id": "1_0_0"
          }
        ]
      },
      "inheritedemployeecount": {
        "values": [
          {
            "locale": "en-US",
            "value": 987987,
            "type": "integer",
            "src": "CRM",
            "id": "1_0_0"
          }
        ]
      },
      "revenueinbillion": {
        "values": [
          {
            "locale": "en-US",
            "value": 11.33,
            "type": "decimal",
            "src": "CRM",
            "id": "1_0_0"
          }
        ]
      },
      "address": {
        "group": [
          {
            "otheraddressstreet": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "410 Terry Ave N",
                  "src": "CRM"
                }
              ]
            },
            "otheraddresscity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "Seattle",
                  "src": "CRM"
                }
              ]
            },
            "otheraddressstate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "Washington",
                  "src": "CRM"
                }
              ]
            },
            "otheraddresscountry": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "United States of America",
                  "src": "CRM"
                }
              ]
            },
            "otheraddresszipcode": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "98109",
                  "src": "CRM"
                }
              ]
            },
            "addresstype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "Office",
                  "src": "CRM"
                }
              ]
            },
            "locale": "en-US",
            "source": "internal",
            "id": "1_0_0"
          }
        ]
      }
    },
    "relationships": {
      "ischildof": [
        {
          "id": "1_0_0",
          "relTo": {
            "id": "RiverworkUniversity004",
            "type": "organization"
          },
          "properties": {
            "direction": "both",
            "relationshipType": "ischildof"
          },
          "attributes": {
            "tradestyles": {
              "values": [
                {
                  "locale": "en-US",
                  "value": "natural resource",
                  "type": "string",
                  "src": "CRM",
                  "id": "1_0_0"
                }
              ]
            },
            "inheritedemployeecount": {
              "values": [
                {
                  "locale": "en-US",
                  "value": 987987,
                  "type": "integer",
                  "src": "CRM",
                  "id": "1_0_0"
                }
              ]
            },
            "revenueinbillion": {
              "values": [
                {
                  "locale": "en-US",
                  "value": 11.33,
                  "type": "decimal",
                  "src": "CRM",
                  "id": "1_0_0"
                }
              ]
            },
            "address": {
              "group": [
                {
                  "otheraddressstreet": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "410 Terry Ave N",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddresscity": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "Seattle",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddressstate": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "Washington",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddresscountry": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "United States of America",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddresszipcode": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "98109",
                        "src": "CRM"
                      }
                    ]
                  },
                  "addresstype": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "Office",
                        "src": "CRM"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1_0_0"
                }
              ]
            }
          }
        }
      ]
    },
    "contexts": [
      {
        "context": {
          "country": "Germany"
        },
        "attributes": {
          "tradestyles": {
            "values": [
              {
                "locale": "en-US",
                "value": "natural resource",
                "type": "string",
                "src": "CRM",
                "id": "1_0_0"
              }
            ]
          },
          "inheritedemployeecount": {
            "values": [
              {
                "locale": "en-US",
                "value": 987987,
                "type": "integer",
                "src": "CRM",
                "id": "1_0_0"
              }
            ]
          },
          "revenueinbillion": {
            "values": [
              {
                "locale": "en-US",
                "value": 11.33,
                "type": "decimal",
                "src": "CRM",
                "id": "1_0_0"
              }
            ]
          },
          "address": {
            "group": [
              {
                "otheraddressstreet": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "410 Terry Ave N",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresscity": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Seattle",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddressstate": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Washington",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresscountry": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "United States of America",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresszipcode": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "98109",
                      "src": "CRM"
                    }
                  ]
                },
                "addresstype": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Office",
                      "src": "CRM"
                    }
                  ]
                },
                "locale": "en-US",
                "source": "internal",
                "id": "1_0_0"
              }
            ]
          }
        },
        "relationships": {
          "ischildof": [
            {
              "id": "1_0_0",
              "relTo": {
                "id": "RiverworkUniversity004",
                "type": "organization"
              },
              "os": "contextCoalesce",
              "osid": "05076e5c-8ebf-49a9-a297-cd11a3b41f47",
              "ostype": "sku",
              "osctxpath": "self@@self",
              "properties": {
                "direction": "both",
                "relationshipType": "ischildof"
              },
              "attributes": {
                "tradestyles": {
                  "values": [
                    {
                      "locale": "en-US",
                      "value": "natural resource",
                      "type": "string",
                      "src": "CRM",
                      "id": "1_0_0"
                    }
                  ]
                },
                "inheritedemployeecount": {
                  "values": [
                    {
                      "locale": "en-US",
                      "value": 987987,
                      "type": "integer",
                      "src": "CRM",
                      "id": "1_0_0"
                    }
                  ]
                },
                "revenueinbillion": {
                  "values": [
                    {
                      "locale": "en-US",
                      "value": 11.33,
                      "type": "decimal",
                      "src": "CRM",
                      "id": "1_0_0"
                    }
                  ]
                },
                "address": {
                  "group": [
                    {
                      "otheraddressstreet": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "410 Terry Ave N",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresscity": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Seattle",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddressstate": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Washington",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresscountry": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "United States of America",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresszipcode": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "98109",
                            "src": "CRM"
                          }
                        ]
                      },
                      "addresstype": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Office",
                            "src": "CRM"
                          }
                        ]
                      },
                      "locale": "en-US",
                      "source": "internal",
                      "id": "1_0_0"
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        "context": {
          "channel": "Germany Web"
        },
        "attributes": {
          "tradestyles": {
            "values": [
              {
                "locale": "en-US",
                "value": "natural resource",
                "type": "string",
                "src": "CRM",
                "id": "1_0_0"
              }
            ]
          },
          "inheritedemployeecount": {
            "values": [
              {
                "locale": "en-US",
                "value": 987987,
                "type": "integer",
                "src": "CRM",
                "id": "1_0_0"
              }
            ]
          },
          "revenueinbillion": {
            "values": [
              {
                "locale": "en-US",
                "value": 11.33,
                "type": "decimal",
                "src": "CRM",
                "id": "1_0_0"
              }
            ]
          },
          "address": {
            "group": [
              {
                "otheraddressstreet": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "410 Terry Ave N",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresscity": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Seattle",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddressstate": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Washington",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresscountry": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "United States of America",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresszipcode": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "98109",
                      "src": "CRM"
                    }
                  ]
                },
                "addresstype": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Office",
                      "src": "CRM"
                    }
                  ]
                },
                "locale": "en-US",
                "source": "internal",
                "id": "1_0_0"
              }
            ]
          }
        },
        "relationships": {
          "ischildof": [
            {
              "id": "1_0_0",
              "relTo": {
                "id": "RiverworkUniversity004",
                "type": "organization"
              },
              "os": "contextCoalesce",
              "osid": "05076e5c-8ebf-49a9-a297-cd11a3b41f47",
              "ostype": "sku",
              "osctxpath": "self@@self",
              "properties": {
                "direction": "both",
                "relationshipType": "ischildof"
              },
              "attributes": {
                "tradestyles": {
                  "values": [
                    {
                      "locale": "en-US",
                      "value": "natural resource",
                      "type": "string",
                      "src": "CRM",
                      "id": "1_0_0"
                    }
                  ]
                },
                "inheritedemployeecount": {
                  "values": [
                    {
                      "locale": "en-US",
                      "value": 987987,
                      "type": "integer",
                      "src": "CRM",
                      "id": "1_0_0"
                    }
                  ]
                },
                "revenueinbillion": {
                  "values": [
                    {
                      "locale": "en-US",
                      "value": 11.33,
                      "type": "decimal",
                      "src": "CRM",
                      "id": "1_0_0"
                    }
                  ]
                },
                "address": {
                  "group": [
                    {
                      "otheraddressstreet": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "410 Terry Ave N",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresscity": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Seattle",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddressstate": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Washington",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresscountry": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "United States of America",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresszipcode": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "98109",
                            "src": "CRM"
                          }
                        ]
                      },
                      "addresstype": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Office",
                            "src": "CRM"
                          }
                        ]
                      },
                      "locale": "en-US",
                      "source": "internal",
                      "id": "1_0_0"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ]
  }
}
</code>
</pre>

## Response

<pre>
<code>

{
  "version": 2,
  "systemInfo": {
    "tenantId": "t1"
  },
  "id": "autotest0044",
  "type": "organization",
  "name": "autotest0044",
  "data": {
    "attributes": {
      "inheritedemployeecount": {
        "values": [
          {
            "locale": "en-US",
            "value": 987987,
            "type": "integer",
            "src": "CRM",
            "id": "1_0_0"
          }
        ]
      },
      "address": {
        "group": [
          {
            "otheraddressstreet": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "410 Terry Ave N",
                  "src": "CRM"
                }
              ]
            },
            "otheraddresscity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "Seattle",
                  "src": "CRM"
                }
              ]
            },
            "otheraddressstate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "Washington",
                  "src": "CRM"
                }
              ]
            },
            "otheraddresscountry": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "United States of America",
                  "src": "CRM"
                }
              ]
            },
            "otheraddresszipcode": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "98109",
                  "src": "CRM"
                }
              ]
            },
            "addresstype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1_0_0",
                  "value": "Office",
                  "src": "CRM"
                }
              ]
            },
            "locale": "en-US",
            "source": "internal",
            "id": "1_0_0"
          }
        ]
      }
    },
    "relationships": {
      "ischildof": [
        {
          "id": "1_0_0",
          "relTo": {
            "id": "RiverworkUniversity004",
            "type": "organization"
          },
          "properties": {
            "direction": "both",
            "relationshipType": "ischildof"
          },
          "attributes": {
            "inheritedemployeecount": {
              "values": [
                {
                  "locale": "en-US",
                  "value": 987987,
                  "type": "integer",
                  "src": "CRM",
                  "id": "1_0_0"
                }
              ]
            },
            "address": {
              "group": [
                {
                  "otheraddressstreet": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "410 Terry Ave N",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddresscity": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "Seattle",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddressstate": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "Washington",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddresscountry": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "United States of America",
                        "src": "CRM"
                      }
                    ]
                  },
                  "otheraddresszipcode": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "98109",
                        "src": "CRM"
                      }
                    ]
                  },
                  "addresstype": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1_0_0",
                        "value": "Office",
                        "src": "CRM"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1_0_0"
                }
              ]
            }
          }
        }
      ]
    },
    "contexts": [
      {
        "context": {
          "country": "Germany"
        },
        "attributes": {
          "inheritedemployeecount": {
            "values": [
              {
                "locale": "en-US",
                "value": 987987,
                "type": "integer",
                "src": "CRM",
                "id": "1_0_0"
              }
            ]
          },
          "address": {
            "group": [
              {
                "otheraddressstreet": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "410 Terry Ave N",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresscity": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Seattle",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddressstate": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Washington",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresscountry": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "United States of America",
                      "src": "CRM"
                    }
                  ]
                },
                "otheraddresszipcode": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "98109",
                      "src": "CRM"
                    }
                  ]
                },
                "addresstype": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1_0_0",
                      "value": "Office",
                      "src": "CRM"
                    }
                  ]
                },
                "locale": "en-US",
                "source": "internal",
                "id": "1_0_0"
              }
            ]
          }
        },
        "relationships": {
          "ischildof": [
            {
              "id": "1_0_0",
              "relTo": {
                "id": "RiverworkUniversity004",
                "type": "organization"
              },
              "os": "contextCoalesce",
              "osid": "05076e5c-8ebf-49a9-a297-cd11a3b41f47",
              "ostype": "sku",
              "osctxpath": "self@@self",
              "properties": {
                "direction": "both",
                "relationshipType": "ischildof"
              },
              "attributes": {
                "inheritedemployeecount": {
                  "values": [
                    {
                      "locale": "en-US",
                      "value": 987987,
                      "type": "integer",
                      "src": "CRM",
                      "id": "1_0_0"
                    }
                  ]
                },
                "address": {
                  "group": [
                    {
                      "otheraddressstreet": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "410 Terry Ave N",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresscity": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Seattle",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddressstate": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Washington",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresscountry": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "United States of America",
                            "src": "CRM"
                          }
                        ]
                      },
                      "otheraddresszipcode": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "98109",
                            "src": "CRM"
                          }
                        ]
                      },
                      "addresstype": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1_0_0",
                            "value": "Office",
                            "src": "CRM"
                          }
                        ]
                      },
                      "locale": "en-US",
                      "source": "internal",
                      "id": "1_0_0"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ]
  }
}
</code>
</pre>

### Entity Manage Model

The following JSON demonstrates a sample entity manage model. 

* <a href="files/entity_manage_model.json" download>entity_manage_model.json.json</a>


