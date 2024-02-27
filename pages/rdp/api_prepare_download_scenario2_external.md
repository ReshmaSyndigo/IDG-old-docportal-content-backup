---
title: Download Asset Based on an Entity Id
sidebar: rdp_sidebar
permalink: api_prepare_download_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{site.data.rdp_glossary.entityservice}}** and **{{site.data.rdp_glossary.prepareDownload}}** to prepare download for an asset.

## Scenario

Prepare download asset based on an entity id.

{% include snippets/header.html %}

**The download is performed in 3 steps.**<br>
## **1. Get required entity having assets linked.**

**Request**

To get entity having assets linked, use the REST API {site.data.rdp_glossary.entityservice}}. In the request, send the following details:

* skuId: Specify the unique SKU identifier.
* typesCriterian: Specify the type as 'SKU'.
* relationships: Specify relationship as '_All'.

<pre>
<code>
POST **{{site.data.rdp_glossary.entityservice}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "e2xOQ3EMBQ0ql",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "relationships": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre>

**Response**

If the request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5c321410-189c-4ef2-99f0-68c2363a150a",
    "maxRecords": 10
  },
  "response": {
    "entities": [
      {
        "id": "e2xOQ3EMBQ0ql",
        "name": "T-Shirt",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "createdDate": "2019-02-04T00:16:09.063-0600",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2019-02-04T10:29:52.423-0600",
          "thumbnailid": "297acf16-d162-45d7-9e2e-7465baf76a51"
        },
        "data": {
          "relationships": {
            "hasimages": [
              {
                "relTo": {
                  "id": "iPGgfuxkQFSNLGoBtvFH_A",
                  "type": "image"
                },
                "id": "hasimages_iPGgfuxkQFSNLGoBtvFH_A",
                "properties": {
                  "direction": "both",
                  "relationshipType": "hasimages"
                }
              },
              {
                "relTo": {
                  "id": "3VxAmskFTImpKKh4X8EBEA",
                  "type": "image"
                },
                "id": "hasimages_3VxAmskFTImpKKh4X8EBEA",
                "properties": {
                  "direction": "both",
                  "relationshipType": "hasimages"
                }
              }
            ],
            "ischildof": [
              {
                "os": "graph",
                "relTo": {
                  "id": "1c369e9b-e52d-4519-b266-d11dbfd62cb2",
                  "type": "product"
                },
                "id": "077274df-9470-426b-a378-99c1f063e4a0"
              }
            ],
            "belongsto": [
              {
                "os": "instanceCoalesce",
                "osid": "formalshirts",
                "ostype": "classification",
                "osctxpath": "self@@self##classification@@Product Classifications>>Formal Shirts",
                "relTo": {
                  "id": "productclassificationroot",
                  "type": "classification"
                },
                "attributes": {},
                "id": "belongsto_productclassificationroot"
              }
            ],
            "belongstotaxonomy": [
              {
                "os": "instanceCoalesce",
                "osid": "productclassificationroot",
                "ostype": "classification",
                "osctxpath": "self@@self##classification@@Product Classifications",
                "relTo": {
                  "id": "e63b9477-4460-436e-b73c-855f46b81f43",
                  "type": "taxonomy"
                },
                "attributes": {},
                "id": "belongstotaxonomy_e63b9477-4460-436e-b73c-855f46b81f43"
              }
            ],
            "apirelationship": [
              {
                "relTo": {
                  "id": "8aKTc_dkQNW_Hp1apZGyxQ",
                  "type": "product"
                },
                "attributes": {},
                "id": "apirelationship_8aKTc_dkQNW_Hp1apZGyxQ",
                "properties": {
                  "direction": "both",
                  "operation": "association"
                }
              },
              {
                "relTo": {
                  "id": "FwasoC52QHOHhlbLaUtuDw",
                  "type": "product"
                },
                "attributes": {},
                "id": "apirelationship_FwasoC52QHOHhlbLaUtuDw",
                "properties": {
                  "direction": "both",
                  "operation": "association"
                }
              },
              {
                "relTo": {
                  "id": "ENIGDe7cRRWB8ij-Xn16ug",
                  "type": "product"
                },
                "attributes": {},
                "id": "apirelationship_ENIGDe7cRRWB8ij-Xn16ug",
                "properties": {
                  "direction": "both",
                  "operation": "association"
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

## **2. Get asset entity with property_objectkey attribute**

**Request**

To get asset entity with property_objectkey attribute, use the REST API {site.data.rdp_glossary.entityservice}}. In the request, send the following details:

* id: Specify the unique asset identifier.
* typesCriterian: Specify the type as 'image'.
* attributes: Specify attributes as 'property_objectkey'.
* relationships: Specify relationship as '_All'.

<pre>
<code>
POST **{{site.data.rdp_glossary.entityservice}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "iPGgfuxkQFSNLGoBtvFH_A",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"image"</span>
        ]
      }
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        "property_objectkey"
      ],
      "relationships": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

**Response**

If the request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1a996116-5471-4987-ab05-c1ad5c8e93a9",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "3VxAmskFTImpKKh4X8EBEA",
        "name": "0ad97b0f-6f78-42db-812f-089d446e2802.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "qaadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "qaadmin@riversand.com_user",
          "createdDate": "2018-12-31T00:54:02.238-0600",
          "modifiedDate": "2018-12-31T00:54:02.238-0600"
        },
        "data": {
          "attributes": {
            "property_objectkey": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "03a951d1-2202-4b17-a84c-e81e3bb5f4dc",
                  "value": "0ad97b0f-6f78-42db-812f-089d446e2802.jpg"
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

## **3. Prepare for downloading the asset**

**Request**

To prepare for downloading the asset, use the REST API {{site.data.rdp_glossary.prepareDownload}}. In the request, send the following details:

* objectkey: Specify the value of the object key.
* binaryStreamObject: In the [binaryStreamObject](api_binary_stream_object_structure.html) object, provide the Id as **binarystreamobject**.

<pre>
<code>
POST **{{site.data.rdp_glossary.prepareDownload}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    <span style="background-color: #FFFF00">"type": "binaryStreamObject",</span>
    "properties": {
      <span style="background-color: #FFFF00">"objectKey": "db11ba4c-5291-47db-8d54-4c824fe64b9c.jpg"</span>
    }
  }
}
</code>
</pre>

**Response**

If the request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "2a82b15c-d544-4b2a-afa6-0e4247cf5eed"
  },
  "response": {
    "binaryStreamObjects": [
      {
        "id": "4464150b-7fde-4722-b7f2-3239a638419a",
        "type": "binaryStreamObject",
        "systemInfo": {
          "tenantId": "rwtest"
        },
        "properties": {
            "objectKey": "0ad97b0f-6f78-42db-812f-089d446e2802.jpg",
            "downloadURL": "https://enggazqa8mediastorage.blob.core.windows.net/rdp-media-assets-engg-az-qa8-rwtest/0ad97b0f-6f78-42db-812f-089d446e2802.jpg?sig=QaOMPyzjVQdBlY%2BaomXlLlur0Fh8R%2FLVhp%2FEXbZqQqg%3D&se=2019-02-05T16%3A30%3A51Z&sv=2017-07-29&sp=rl&sr=b"
          }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

You can use the "downloadURL" received in the response to actually download the asset from the external storage.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

{% include callout.html content="**Note**: Prepare to Download a Video, a Document, and Audio is similar to Prepare Download an Image.
" type="primary" %}