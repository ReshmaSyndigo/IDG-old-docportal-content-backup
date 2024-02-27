---
title: Create Import Profile for Importing Binary Object
sidebar: rdp_sidebar
permalink: api_create_imp_profile_config3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create import profile, using a scenario.

## Scenario

To create import profile for importing binary object JSON to Riversand Platform from Eventhub.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name, type, and version. In the data object, specify the context for the configuration and the actual configuration in a valid JSON format. See [Entity Import Services](api_imp_entity_service.html). 

The following JSON demonstrates configuration for importing binary object JSON to Riversand Platform from Eventhub with appropriate collect, publish, and transform details. Note that the format must be **RSBOJSON** and channel as **Eventhub**. In the channel section, you must specify the eventHub stream such as "import-thumbnail" where you upload Binary Object JSON. 

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "binaryobject_Eventhub_JSON_Import_Process",</span>
      <span style="background-color: #FFFF00">"name": "binaryobject_Eventhub_JSON_Import_Process",</span>
      <span style="background-color: #FFFF00">"type": "integrationprofile",</span>
      "data": {
        "contexts": [
          {
            <span style="background-color: #FFFF00">"context": {</span>
              "app": "RSConnect",
              "service": "ENTITY_IMPORT",
              "channel": "Eventhub",
              "format": "RSBOJSON",
              "source": "internal",
              "role": "admin",
              "user": "system",
              "subtype": "System",
              "order": "10"
            },
            "jsonData": {
              "integrationType": "System",
              "isEnabled": "true",
              "collect": {
                "isDataPersistent": "true",
                <span style="background-color: #FFFF00">"channel": [</span>
                  {
                    "type": "eventHubConnector",
                    "settings": {
                      "eventHub": "import-thumbnail"
                    }
                  }
                ],
                <span style="background-color: #FFFF00">"format": {</span>
                  "type": "RSBOJSON",
                  "version": "1.1",
                  "settings": {
                    "additionalSettings": {
                      "encoding": "utf8"
                    }
                  }
                },
                "filter": {
                  "include": {},
                  "exclude": {}
                }
              },
              "publish": {
                "isDataPersistent": "false",
                "channel": [
                  {
                    "type": "rdpConnector",
                    "settings": {
                      "type": "RSJSON",
                      "version": "1.1",
                      "requestforvaluemapping": "false"
                    }
                  }
                ],
                "format": {
                  "type": "RSJSON",
                  "version": "1.1",
                  "batchSize": 1,
                  "settings": {
                    "additionalSettings": {
                      "encoding": "utf8"
                    }
                  }
                },
                "filter": {
                  "include": {},
                  "exclude": {}
                }
              },
              "transform": {
                "settings": {
                  "nullRecordTransformer": "true"
                }
              }
            }
          }
        ]
      }
    }
  ]
}
</code>
</pre> 

The following JSON demonstrates a sample Binary Object JSON of thumbnail image:

<pre><code>
{
  "binaryObject": {
    "id": "sha_10000000002",
    "type": "imagerendition",
    "properties": {
      "type": "thumbnail",
        "extension": "jpg",
        "uom": "pixels",
        "width": 150,
        "height": 150,
        "assetId": "sha_10000000002",
        "filenameExtension": "jpg",
        "fileSize": 6066,
        "createdByService": "AssetService",
        "createdBy": "system_user",
        "createdDate": "2017-09-19T01:59:59.565-0500",
        "filename": "images.jpg",
        "createdService": "binaryObjectManageService",
        "modifiedService": "binaryObjectManageService",
        "modifiedBy": "system_user",
        "modifiedDate": "2017-09-19T01:59:59.565-0500"
    },
    "data": {
      "blob": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAA"
    }
  }
}
</code></pre>

Note that the value of the **assetId** corresponds to **thumbnailid** attribute value in the image entity.

## Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1d0e9b78-c995-4006-9cd8-c9c2c2b26e7a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted integrationprofile for create with Id binaryobject_Eventhub_JSON_Import_Process. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "binaryobject_Eventhub_JSON_Import_Process"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.