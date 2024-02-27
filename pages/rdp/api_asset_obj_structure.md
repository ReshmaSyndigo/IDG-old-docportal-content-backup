---
title: Asset Object Structure
sidebar: rdp_sidebar
permalink: api_asset_obj_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

An asset object in Riversand Platform is a JSON structure that details about the asset and the business data such as attributes and relationships. The object structure of an asset is similar to entity object stucture. See [Entity Object Structure](api_entity_object_structure.html), for further details. 

A sample request and response scenario is shown below:

**Request**:

<pre><code>
{
  "params": {
    "query": {
      "id": "MDM_01",
      "filters": {
        "typesCriterion": [
          "product"
        ]
      }
    }
  }
}
</code></pre>

**Response**:

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
                                  "value": "https://rspuvb.blob.core.windows.net/ew-new-assets-rsdd-pl-po87-zxs/renditions/width1_mediumResolution.png?sig=%2B8ouTw1sj%2Byxwmo18odPOpkmyPZtdIgV2GV8fIcq%2BEU%3D&se=2019-02-14T07%3A31%3A45Z&sv=2017-07-29&sp=rl&sr=b",
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
                                  "value": "renditions/width8_highResolution.bmp"
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
                            "id": "25e97a7a-81ba-41e2-aba7-b3e34904edc4",
                            "downloadURL": {
                              "values": [
                                {
                                  "value": "https://zxcvstore.blob.core.windows.net/rdp-zxvbn-assets-poiu-io-po9-sg/renditions/width2_mediumResolution.png?sig=%2C9ouTw1sj%2Byxwmo18odPOpkmyZPtdIgV2GV8fJvp%2BEU%3D&se=2019-02-19T07%3A31%3Z05Z&sv=2017-07-25&sp=rl&sr=b",
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
                            "value": "https://abcstore.blob.core.windows.net/rdp-zxy-assets-qwwq-qwwqr-12er-sgsg/renditions/width1_medrResolution.png?sig=%2B8ouTw1sj%2Byxwmo18odPOpkmyPZtdIgV2GV8fIcq%2BEU%3D&se=2019-02-14T07%3A31%3A45Z&sv=2017-07-29&sp=rl&sr=b",
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

The following objects are distinct in Asset Object Structure when compared to Entity Object Structure:

### attributes

This object contains an array of attributes of the asset. The following table lists the details of the attributes object:

| Property | Description | 
|----------|-------------|
| property_objectkey | Indicates the unique identifier of the asset filename generated by Riversand Platform. | 
| renditions | Indicates an array of group of renditions. |
| downloadURL | Indicates the URL that can be used to download the asset. |

### renditions

This object contains a group of rendition attribute details of an asset. The following table lists the details of the renditions object:

| Property | Description | Type | 
|----------|-------------|------|
| property_createddate | Indicates date and time when the property was created. | Date |
| extension | Indicates the extension used for this rendition. | Valid extension format of an asset. |
| uom | Indicates the Unit of Measure for this rendition. | String |
| renditionid | Indicates the unique identifier of the rendition. | String |
| property_modifieddate | Indicates the date and time when the property was last updated. | Date |
| property_objectkey | Indicates the object key for the rendition. | String |
| width | Indicates the width of the rendition asset. | Integer |
| filesize | Indicates the size of the rendition asset. | Integer |
| type | Indicates the type of rendition asset. | String |
| height | Indicates the height of the rendition asset. | Integer |
| locale | Indicates the locale of the rendition. | String |
| source | Indicates the source of the rendition. | String |
| Id | Indicates the unique identifier of the rendition. | String |
| downloadURL | Indicates the URL that can be used to download the rendition asset. | String |