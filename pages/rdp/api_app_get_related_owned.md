---
title: Get Entities Related to Images  
sidebar: rdp_sidebar
permalink: api_app_get_related_owned.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The pre-requisites to fetch all entities, belonging to an entity type, that are related to image are:
* In the [entityType]_entityManageModel, the "relationshipOwnership" property in "hasimages" must be set to "owned".
* In the entity, the "isPrimary" attribute of the "hasimages" property must be set to true. 

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityappservice/getrelated** to get all entities related to images along with the relationship details, using a scenario. 

## Scenario

To get all "sku" entities related to image.

{% include snippets/header.html %}

## Request

To get all the "sku" entities that contain "hasimages" relationship wherein the image is the "primary" image of the "sku", and is of jpg format, use the REST API {TenantURL or ID}/api/entityappservice/getrelated. In the request send the following details: 

* query -> filters -> typesCriterion: Specify the type as "sku"
* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages: Specify "relTo" and type as "image" 
* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages -> attributes: Specify "isPrimary" as "true".
<br/>
To get images:

* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages-> query -> filters -> typesCriterion: Specify as "image".
* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages -> query -> filters -> attributesCriterion -> filenameextension: Specify as "jpg".
 <br/>
To fetch desired number of records:

* params -> fields -> relationships: Specify as "hasimages".
* params -> options ->maxRecords: 2.

{% include callout.html content="**Note**: <br/>
Similarly, you can use **getrelated** to fetch the details of entities related to other entities. For example, you can use **getrelated** method to fetch the details of **sku** entities related to a **product** entity. In this case:<br/>
* **relationshipOwnership** property in **childof** must be set to **owned** and **relEntityType** must be specified as **product** in the **sku_entityManageModel**.

" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.apprelatedget}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"relationshipsCriterion": [</span>
          {
            "hasimages": {
              "relTo": {
                "type": "image"
              },
              "attributes": [
                {
                  "isPrimary": {
                    "exact": "true"
                  }
                }
              ],
              "query": {
                "filters": {
                  "typesCriterion": [
                    "image"
                  ],
                  "attributesCriterion": [
                    {
                      "filenameextension": {
                        "exact": "jpg"
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    },
    "fields": {
        "relationships": [
        "hasimages"
      ]
    },
    "options": {
      "maxRecords": 2
    }
  }
}
</code>
</pre>

## Response

Returns all "sku" entities related to images and the relationship details.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "aca1a4d4-54fd-43c1-92f3-88ab883123af",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "dxDvTQ_kTCm6-HCGFRyfyA",
        "name": "20VendorNewTesting247",
        "type": "sku",
        "properties": {
          "recordId": "9fe896a0-6fd7-4eab-b131-a3d7150086de",
          "rowNo": 248,
          "createdService": "entityManageService",
          "createdBy": "dev1vendor@riversand.com_user",
          "createdDate": "2018-07-12T09:36:44.761-0500",
          "thumbnailid": "0b724025-183d-47f8-a68d-4d07c83e7064",
          "modifiedService": "entityManageService",
          "modifiedBy": "idg.rwtest.admin@riversand.com_user",
          "modifiedDate": "2018-08-16T04:00:41.109-0500"
        },
        "data": {
          "attributes": {
            "buytodemand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8023c1d4-d14f-463e-bbd4-304625d56dbf",
                  "value": true
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9f957067-d5c9-4c2e-b5df-bd3d08524136",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "cm X cm X H"
                }
              ]
            },
            "upc": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d5f62d00-d52c-41a5-bc34-1db4b71cffcf",
                  "value": "20VendorNewTesting247"
                }
              ]
            },
            "subbrand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6ab3a936-5f16-4f8d-be78-5d8124226575",
                  "value": "TOEFL"
                }
              ]
            },
            "availableincountries": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77fa26e8-2d65-460b-b610-5cda20e6debb",
                  "value": "Australia",
                  "properties": {
                    "referenceData": "country/6cbe5e60-4125-4ac1-a372-85ddc6263b65",
                    "referenceDataIdentifier": "australia"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "41007d5e-9973-4d04-9368-6e47926464a7",
                  "value": "Belgium",
                  "properties": {
                    "referenceData": "country/4948ee77-3b4a-41ef-abfa-84464b41a360",
                    "referenceDataIdentifier": "belgium"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "dd2e996d-d976-40a0-b5d0-8336df6cf411",
                  "value": "France",
                  "properties": {
                    "referenceData": "country/b4f7517b-7a78-423f-b0e0-f5570af0ddba",
                    "referenceDataIdentifier": "france"
                  }
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c4130abf-a39f-472b-8d33-94634692935d",
                  "value": "New"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "18ae0bea-5f75-467a-bd69-11741c7ff227",
                  "value": "2018-07-10T08:10:54.864-0500"
                }
              ]
            },
            "productid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9cb4b764-9a4a-494f-97b9-3d8c7835d214",
                  "value": "20VendorNewTesting247"
                }
              ]
            },
            "width": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "808b52e0-a6cd-4be8-9abe-445bc5d1b3e2",
                  "invalidValue": "cm",
                  "value": "cm"
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7b9169b4-6ed7-4ead-8613-9665e9e7bada",
                  "value": false
                }
              ]
            },
            "length": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3ff042cf-5276-4bea-9841-deecb14007bd",
                  "invalidValue": "cm",
                  "value": "cm"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "fc4a21de-c99c-4428-b9bc-d16c603d4f4f",
                  "value": false
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0d55d5ca-b7d4-4fcf-9185-3ce4f21d2fe6",
                  "value": "20VendorNewTesting247"
                }
              ]
            },
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2274b5cf-b302-49e1-9655-6d9324d46ee9",
                  "value": "20VendorNewTesting247"
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0b2847b7-9af0-4051-a1c9-33b6beca0498",
                  "value": "Toppins"
                }
              ]
            },
            "quantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78359d76-b617-4f29-98fd-758679a4d0dc",
                  "value": "10"
                }
              ]
            },
            "alternatevendor": {
              "group": [
                {
                  "vendorid": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "27ececc8-4035-4d92-bc84-4ba217dd23e9",
                        "value": 678242
                      }
                    ]
                  },
                  "vendorname": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "3b24e409-8346-4272-82e0-6fb843ebf76c",
                        "value": "addidas"
                      }
                    ]
                  },
                  "vendorpartnumber": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "b7f242a7-bf32-418f-97a7-139ab6f315fe",
                        "value": 567
                      }
                    ]
                  },
                  "vendorcost": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "e8c1fcd7-64c3-4c3b-9db8-842daedcd7bf",
                        "value": 200
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "22f075c8-ac44-4085-b92d-106f68cac005"
                }
              ]
            },
            "suppliername": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "69e011ad-7bdf-403f-b41a-3fa86bcbc5df",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Nike"
                }
              ]
            },
            "RoyalEnfield": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1bfd0bd9-6d94-4505-8d57-04ec20719509",
                  "os": "businessRule",
                  "osid": "Royal Enfield Thunder Bird_businessRule",
                  "ostype": "businessRule",
                  "value": "ThunderBird"
                }
              ]
            }
          },
          "relationships": {
            "hasimages": [
              {
                "relTo": {
                  "id": "QStibUN6RpKB_tyUpfPDxQ",
                  "type": "image"
                },
                "attributes": {
                  "isprimary": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "883f6e93-fecc-4369-b2cc-56754de21b96",
                        "value": true
                      }
                    ]
                  }
                },
                "id": "hasimages_QStibUN6RpKB_tyUpfPDxQ",
                "properties": {
                  "direction": "both",
                  "relationshipType": "hasimages"
                }
              }
            ]
          }
        }
      },
      {
        "id": "AnzKIvITSJOkkqWq1OvktA",
        "name": "20VendorNewTesting472",
        "type": "sku",
        "properties": {
          "recordId": "8d82768c-403b-4dc8-9f6a-4186ce5fce26",
          "rowNo": 473,
          "createdService": "entityManageService",
          "createdBy": "dev1vendor@riversand.com_user",
          "createdDate": "2018-07-12T09:41:15.606-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "idg.rwtest.admin@riversand.com_user",
          "modifiedDate": "2018-08-17T03:31:13.509-0500",
          "thumbnailid": "0b724025-183d-47f8-a68d-4d07c83e7064"
        },
        "data": {
          "attributes": {
            "buytodemand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9c7e2078-101e-4815-a6db-fec441a67806",
                  "value": true
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3266f41c-ec85-49ff-8a77-6d78773319c6",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "cm X cm X H"
                }
              ]
            },
            "upc": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5238bfd3-8098-494d-85ce-672e36632166",
                  "value": "20VendorNewTesting472"
                }
              ]
            },
            "subbrand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9e2b91b1-6ccf-4448-a592-3ec139d959b2",
                  "value": "TOEFL"
                }
              ]
            },
            "availableincountries": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4a92efdd-5297-4391-8b60-4ed561f8a7bb",
                  "value": "Australia",
                  "properties": {
                    "referenceData": "country/6cbe5e60-4125-4ac1-a372-85ddc6263b65",
                    "referenceDataIdentifier": "australia"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5085e918-3be2-46e7-80f1-7ace975df534",
                  "value": "Belgium",
                  "properties": {
                    "referenceData": "country/4948ee77-3b4a-41ef-abfa-84464b41a360",
                    "referenceDataIdentifier": "belgium"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bd3b0c7a-73ac-4a4e-b529-dc67871e21e9",
                  "value": "France",
                  "properties": {
                    "referenceData": "country/b4f7517b-7a78-423f-b0e0-f5570af0ddba",
                    "referenceDataIdentifier": "france"
                  }
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "eaed648a-7a29-4e30-804d-75e5f547569e",
                  "value": "New"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "72009937-0796-4afd-b088-90ba3cc20aca",
                  "value": "2018-07-10T08:10:54.864-0500"
                }
              ]
            },
            "productid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "377ce868-b51c-40df-ae5b-92cf564a4e28",
                  "value": "20VendorNewTesting472"
                }
              ]
            },
            "width": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6e3648b4-af39-490f-9e61-e41fd46a6bad",
                  "invalidValue": "cm",
                  "value": "cm"
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c6452d04-c7bc-49db-a7b1-c9b568a1318e",
                  "value": false
                }
              ]
            },
            "length": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ba979cde-9590-4c82-a4ed-f95d358f6bb7",
                  "invalidValue": "cm",
                  "value": "cm"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e665c84d-f92d-4b52-8fb6-ddc8f01da956",
                  "value": false
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ed8ca544-9aac-4082-97cc-a8ff233f8c90",
                  "value": "20VendorNewTesting472"
                }
              ]
            },
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ab77d729-741c-4c4b-aac0-e677a129501b",
                  "value": "20VendorNewTesting472"
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5665e2a8-8a1e-418d-97ff-fb6992ac6340",
                  "value": "Toppins"
                }
              ]
            },
            "quantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "88e4549e-b42c-42af-b658-89030dab5a14",
                  "value": "10"
                }
              ]
            },
            "alternatevendor": {
              "group": [
                {
                  "vendorid": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "67576c05-da80-4e32-8a22-720beb981372",
                        "value": 678242
                      }
                    ]
                  },
                  "vendorname": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "8fcd48cd-64b1-4be6-b030-79f37f23c213",
                        "value": "addidas"
                      }
                    ]
                  },
                  "vendorpartnumber": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "0ab1398a-5b74-401e-b515-145f6542da8c",
                        "value": 567
                      }
                    ]
                  },
                  "vendorcost": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "3c96bfda-fef0-41e2-bbd6-0d8e7a165dc9",
                        "value": 200
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3c66fa46-8d3a-4321-a376-3c69127d514b"
                }
              ]
            },
            "suppliername": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "11886365-cbae-4a3c-bb99-24744833f88a",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Nike"
                }
              ]
            },
            "RoyalEnfield": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "21271a2b-7519-40ff-a23c-f44116b5cb07",
                  "os": "businessRule",
                  "osid": "Royal Enfield Thunder Bird_businessRule",
                  "ostype": "businessRule",
                  "value": "ThunderBird"
                }
              ]
            }
          },
          "relationships": {
            "hasimages": [
              {
                "relTo": {
                  "id": "QStibUN6RpKB_tyUpfPDxQ",
                  "type": "image"
                },
                "attributes": {
                  "isprimary": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "c5cd3601-3071-4642-a314-ff47613981d4",
                        "value": true
                      }
                    ]
                  }
                },
                "id": "hasimages_QStibUN6RpKB_tyUpfPDxQ",
                "properties": {
                  "relationshipType": "hasimages",
                  "direction": "both"
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
