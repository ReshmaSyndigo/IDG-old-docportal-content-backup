---
title: Get Binary Stream Object using Id
sidebar: rdp_sidebar
permalink: api_get_binary_stream_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getbinarystream}}** to get binary stream object using Id, using a scenario. 

## Scenario

To get the meta-data details of an image "toteBag.png" using Id.

{% include snippets/header.html %}

## Request

To get the above binary stream object, you can use the REST API {{site.data.rdp_glossary.getbinarystream}}. In the request send the following details:

* query -> Id: Specify the objectkey used to upload the asset
* query -> filters -> typesCriterion: Specify the type as "binarystreamobject"

<pre>
<code>
POST **{{site.data.rdp_glossary.getbinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
     <span style="background-color: #FFFF00">"id":"toteBag@_@guid.png",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"binarystreamobject"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the binary stream object details of the specified Id.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "22a1115a-9559-4e21-98c5-cafa743ec7ac",
    "maxRecords": 2000
  },
  "response": {
    "binaryStreamObjects": [
      {
        "id": "toteBag@_@guid.png",
        "type": "binarystreamobject",
        "properties": {
          "createdService": "binaryStreamObjectService",
          "createdDate": "2017-06-07T19:15:07.986-0500",
          "modifiedService": "binaryStreamObjectService",
          "modifiedDate": "2017-06-07T19:15:07.986-0500"
        },
        "data": {
          "attributes": {
            "metadata": {
              "group": [
                {
                  "filename": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "ff414fe8-408f-43ab-a19d-72662b0e776e",
                        "value": "rdp/binarystreamobject/toteBag@_@guid.png"
                      }
                    ]
                  },
                  "uploadLink": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "uom": "GB",
                        "id": "20eb7e04-8c88-46d6-b1cc-100ab6ce9049",
                        "value": 3.1
                      }
                    ]
                  },
                  "id": "429e6ef9-102a-4ccb-be1b-0de314a0b88e"
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