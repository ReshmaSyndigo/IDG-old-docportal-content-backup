---
title: Get Asset Details using Asset Id
sidebar: rdp_sidebar
permalink: api_dam_get_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getasseturl}}** to get details of an asset using ID, in a scenario. 

{% include callout.html content="**Note:** Asset details excluding the downloadURL can also be obtained by calling the **GET** method of **entityappservice**. However, the downloadURL of an original asset and its corresponding rendition asset can only be obtained using **getasseturl** method of **rsAssetService**.
" type="primary" %}

## Scenario

To get downloadURL of original asset and its corresponding rendition of type "image" with Id "asset_1". Original Asset URL can be used to download the original asset. Rendition URL can be used to download the corresponding rendition asset linked to the original asset. 

{% include snippets/header.html %}

## Request

To get the details of the above scenario, use the REST API {{site.data.rdp_glossary.getasseturl}} and Host: {WEBURL}:9095 (use 9095 port instead 8085). In the request, send the following details:

* Id: Specify the unique identifier of the asset.
* typesCriterion: Specify as image.

<pre>
<code>
POST **{{site.data.rdp_glossary.getasseturl}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "asset_1",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"image"</span>
        ]
      }
    }
  }
}
</code>
</pre>

## Response

If the request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "response": {
    "entities": [
      {
        "id": "asset_1",
        "name": "e3555ad9-d549-42f5-81f8-28b690cc66df.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "t1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "t1admin@riversand.com_user",
          "createdDate": "2019-02-11T03:47:42.567-0600",
          "modifiedDate": "2019-02-11T03:47:42.567-0600"
        },
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
                        "id": "62ab9b30-ea01-4eeb-a9d4-38cd7a201616",
                        "value": "2019-02-11T03:47:40.967-0600"
                      }
                    ]
                  },
                  "extension": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "18d72330-4f16-4abf-8d60-fe9e190aca17",
                        "value": "png"
                      }
                    ]
                  },
                  "uom": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "2d52dca7-dfc4-4aca-a2bf-b1b54c1dbb6e",
                        "value": "pixels"
                      }
                    ]
                  },
                  "renditionid": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "64698d8d-a28d-493f-b5ff-ad977d9ae51d",
                        "value": "mediumResolution"
                      }
                    ]
                  },
                  "property_modifieddate": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "f3e060db-a7f7-463e-a822-90d3bc55165f",
                        "value": "2019-02-11T03:47:40.967-0600"
                      }
                    ]
                  },
                  "property_objectkey": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "954857d3-6928-47a4-9a11-d48a55887cfb",
                        "value": "renditions/width1_mediumResolution.png"
                      }
                    ]
                  },
                  "width": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "63722670-dd3b-41a4-a6fb-a2653c9cc92b",
                        "value": 640
                      }
                    ]
                  },
                  "filesize": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "c1505b8e-8fac-414a-9015-601e13c9c278",
                        "value": "235031"
                      }
                    ]
                  },
                  "type": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "a7abe725-9209-4b65-be1f-239db00d3d89",
                        "value": "image"
                      }
                    ]
                  },
                  "height": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "c80ae352-6f3d-4d2b-bfc0-a592cbb38012",
                        "value": 480
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f122e203-54d9-498b-9da1-b75a4f05b946",
                  "downloadURL": {
                    "values": [
                      {
                        "value": "https://xyznkmstorage.blob.core.windows.net/zx-qar-assets-po-xc-po9-asd/renditions/width1_mediumResolution.png?sig=%9K8ouTw1sj%9Kyxwmo18odPOpkmyPZtdIgV2GV8fIcq%2RDU%3D&se=2019-02-14T07%3A31%3A45Z&sv=2017-07-29&sp=rl&sr=b",
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
                        "value": "https://pl8kjlki3pvstorage.blob.core.windows.net/lkj-kujg-assets-poyx-az-lk7-bxv/renditions/width1_ultrahighResolution.tiff?sig=cZLmj9Qh3TE6Ue4Gio1pZ0UjU832hMRG4m%2FboidzNW8%3D&se=2019-02-14T07%3A31%3A44Z&sv=2017-07-29&sp=rl&sr=b",
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
                        "value": "https://kwvejwwvstorage.blob.core.windows.net/owvdi-dhd-vwdnkvw-df-ddf-dsf4-ghf/renditions/width1_highResolution.bmp?sig=TqBWzD98P0brziilP3Pd7cTrBy53B91FfWxrBm5SocE%3D&se=2019-02-14T07%3A31%3A44Z&sv=2017-07-29&sp=rl&sr=b",
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
                  "value": "https://kwveqfwwvstorage.blob.core.windows.net/dsv-vsdsd-vdsvsdv-df-ddgf-dsaf-fgc/e3555ad9-d549-42f5-81f8-28b690cc66df.jpg?sig=qgxYOniSUWJKxpEBUHHcDe%2BV301w4uyDMMgq5E25mdQ%3D&se=2019-02-14T07%3A31%3A44Z&sv=2017-07-29&sp=rl&sr=b",
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
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.