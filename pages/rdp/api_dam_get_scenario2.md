---
title: Get Details of Asset Linked to an Entity
sidebar: rdp_sidebar
permalink: api_dam_get_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getlinkedasseturl}}** to get details of all assets linked to an entity using ID, in a scenario. 

{% include callout.html content="**Notes:** Details of assets linked to an entity excluding the downloadURL can also be obtained as follows:
1. Get details of the entity by calling the **GET** method of **entityappservice**. The API returns unique identifier of the asset. 
2. Get all details of the asset linked to the entity using the unique identifier obtained in the previous step by calling the **GET** request of **entityappservice**. The API returns all the details of an asset except the downloadURL of original asset and corresponding rendition asset.

However, using **getlinkedasseturl** method of **rsAssetService**, details of assets linked to an entity including the downloadURL of original asset and corresponding rendition asset can be obtained in a single step. 
Note that getlinkedasseturl returns results only when the assets are linked to an entity using the following relationship names - hasimages, hasaudio, hasdocuments, and hasvideo.
" type="primary" %}

## Scenario

To get downloadURL of original asset and its corresponding rendition linked to "product" entity "e1". Original Asset URL can be used to download the original asset. Rendition URL can be used to download the corresponding rendition asset linked to the original asset.

{% include snippets/header.html %}

## Request

To get the details of the above scenario, use the REST API {{site.data.rdp_glossary.getlinkedasseturl}} and Host: {WEBURL}:9095 (use 9095 port instead 8085). In the request send the following details:

* Id: Specify the unique identifier of the entity the asset is linked to.
* typesCriterion: Specify as product.

<pre>
<code>
POST **{{site.data.rdp_glossary.getlinkedasseturl}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "e1",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"product"</span>
        ]
      }
    }
  }
}
</code>
</pre> 

## Response

The response returns all the assets linked to the entity, as defined in the relationship section of entity manage model.

<pre><code>
{
  "response": {
    "entities": [
      {
        "id": "e1",
        "name": "test",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "t1admin@riversand.com_user",
          "createdDate": "2019-02-11T03:50:31.146-0600",
          "modifiedService": "entityManageService",
          "modifiedBy": "t1admin@riversand.com_user",
          "modifiedDate": "2019-02-11T03:51:10.245-0600",
          "thumbnailid": "5757e566-d904-45b8-bf47-796a36b7846f"
        },
        "data": {
          "relationships": {
            "hasimages": [
              {
                "relTo": {
                  "id": "OQdHledgQiKuulHYeupSJQ",
                  "type": "image",
                  "data": {
                    "attributes": {
                      "property_objectkey": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "aa325682-0ff4-4dbc-b98a-10f58788c0af",
                            "value": "e3555ad9-d549-42f5-81f8-28b690cc66df.jpg"
                          }
                        ]
                      },
                      "renditions": {
                        "group": [
                          {
                            "property_createddate": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "9b752a6c-c34e-40ae-a4fd-f728b577609a",
                                  "value": "2019-02-11T03:47:41.616-0600"
                                }
                              ]
                            },
                            "extension": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "9802dfb2-ce28-44ce-bdc1-37d98174809c",
                                  "value": "tiff"
                                }
                              ]
                            },
                            "uom": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "39bcd10b-86cd-4062-9154-d87e833a31eb",
                                  "value": "pixels"
                                }
                              ]
                            },
                            "renditionid": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "bde5f4dc-6f09-4eee-a038-b1b3827f2c2f",
                                  "value": "ultrahighResolution"
                                }
                              ]
                            },
                            "property_modifieddate": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "8819d907-384f-411d-b72b-e528549bf65c",
                                  "value": "2019-02-11T03:47:41.616-0600"
                                }
                              ]
                            },
                            "property_objectkey": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "450b03e5-fab4-465d-853d-d51d4e56d49e",
                                  "value": "renditions/width1_ultrahighResolution.tiff"
                                }
                              ]
                            },
                            "width": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "8dff5c7b-89b1-47d2-ae2f-9f2ecfbe952e",
                                  "value": 4080
                                }
                              ]
                            },
                            "filesize": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "d0f210e2-477d-4535-8ebb-f4c9c5918f15",
                                  "value": "1834725"
                                }
                              ]
                            },
                            "type": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "bc6afdea-64d6-467e-a364-feccaf59d982",
                                  "value": "image"
                                }
                              ]
                            },
                            "height": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "86d93ef2-e883-4c78-975b-20178f959bea",
                                  "value": 3072
                                }
                              ]
                            },
                            "locale": "en-US",
                            "source": "internal",
                            "id": "b44733f5-7f96-4410-bfc2-c4c597ca6d5f",
                            "downloadURL": {
                              "values": [
                                {
                                  "value": "https://asflnknasfnassyief.blob.core.windows.net/kndsf-dskjads-sytore-ds-dsavv-sv-vxa/renditions/width1_mediumResolution.png?sig=%2B8ouTw1sj%2Byxwmo18odPiYkmyPZtdIgV2GV8fIcq%2BEU%3D&se=2019-02-14T07%3A31%3A45Z&sv=2017-07-29&sp=rl&sr=b",
                                  "source": "internal",
                                  "locale": "en-US"
                                }
                              ]
                            }
                          },
                          {
                            "property_createddate": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "c1599412-91f0-4c24-849b-550f5446cdf3",
                                  "value": "2019-02-11T03:47:42.011-0600"
                                }
                              ]
                            },
                            "extension": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "b60df401-2f4c-43fd-8fa0-10ff17310eec",
                                  "value": "bmp"
                                }
                              ]
                            },
                            "uom": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "b8bba647-6d85-47d8-9e36-e12f906e8b9c",
                                  "value": "pixels"
                                }
                              ]
                            },
                            "renditionid": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "8d475f6e-9587-4474-b6b2-3b6fcc46dd85",
                                  "value": "highResolution"
                                }
                              ]
                            },
                            "property_modifieddate": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "f5c5bf87-289a-46cf-aaba-9a77b9e66b22",
                                  "value": "2019-02-11T03:47:42.011-0600"
                                }
                              ]
                            },
                            "property_objectkey": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "c5378c1f-0dd4-4510-a883-ac0c7548ec3e",
                                  "value": "renditions/width1_highResolution.bmp"
                                }
                              ]
                            },
                            "width": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "0ba53743-c991-4674-958e-4432b8d4bd3c",
                                  "value": 1600
                                }
                              ]
                            },
                            "filesize": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "ba7333d4-a235-4ae5-ba88-18ecd1c0c46e",
                                  "value": "5760138"
                                }
                              ]
                            },
                            "type": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "b1240c99-4480-40f2-bfd0-9155f732037e",
                                  "value": "image"
                                }
                              ]
                            },
                            "height": {
                              "values": [
                                {
                                  "source": "internal",
                                  "locale": "en-US",
                                  "id": "a4c7e056-5652-41c9-8120-18b4de3b9cc1",
                                  "value": 1200
                                }
                              ]
                            },
                            "locale": "en-US",
                            "source": "internal",
                            "id": "25e97a7a-81ba-41e2-aba7-b3e34e04edc4",
                            "downloadURL": {
                              "values": [
                                {
                                  "value": "https://slacsacocc.blob.core.windows.net/cscs-sacacs-scas-sac-sacc-we4-vzx/renditions/width2_mediumResolution.png?sig=%2C9ouTw1sj%2Byxwmo18odPOpkksajaZPtdIgV2GV8fJvp%2BEU%3D&se=2019-02-14T07%3A31%3A45Z&sv=2017-07-29&sp=rl&sr=b",
                                  "source": "internal",
                                  "locale": "en-US"
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "downloadURL": {
                        "values": [
                          {
                            "value": "https://asccascsa.blob.core.windows.net/csas-scaa-cca-kuky-yuy-yy7-88hj/renditions/width1_mediumResolution.png?sig=%2B8ouTw1sj%2Byxwmo98odPOpkmyPZtdIgV2GV8fIcq%2BEU%3D&se=2019-02-14T07%3A31%3A45Z&sv=2017-07-29&sp=rl&sr=b",
                            "source": "internal",
                            "locale": "en-US"
                          }
                        ]
                      }
                    }
                  }
                },
                "id": "hasimages_OQdHledgQiKuulHYeupSJQ",
                "properties": {
                  "direction": "both",
                  "relationshipType": "hasimages"
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.