---
title: Create Import Profile for Importing Image from URL
sidebar: rdp_sidebar
permalink: api_create_imp_profile_config2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create import profile, using a scenario.

## Scenario

To create import profile for importing images from URL.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name, type, and version. In the data object, specify the context for the configuration and the actual configuration in a valid JSON format. See [Entity Import Services](api_imp_entity_service.html). 

The following JSON demonstrates configuration for importing data from URL with appropriate collect, publish, and transform details. Note that in the channel section requestHeaders are specified, which are used for authorizing the download from the external URL.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"id": "downloadAssetsFromURL",</span>
  <span style="background-color: #FFFF00">"name": "downloadAssetsFromURL",</span>
  <span style="background-color: #FFFF00">"type": "integrationprofile-system",</span>
  "data": {
    "contexts": [
      {
        <span style="background-color: #FFFF00">"context": {</span>
          "app": "RSConnect",
          "service": "BULK_LOAD",
          "channel": "ALL",
          "format": "ALL",
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
            "isDataPersistent": "false",
            <span style="background-color: #FFFF00">"channel": [</span>
              {
                "type": "httpConnector",
                "settings": {
                  "requestHeaders": {
                    "X-Gateway-APIKey": "044aed07-7302-410f-b821-e663ef8337a1"
                  }
                }
              }
            ],
            <span style="background-color: #FFFF00">"format": {</span>
              "type": "IMAGE",
              "version": "1.1",
              "settings": {},
              "includeFilter": [],
              "excludeFilter": []
            }
          },
          "publish": {
            "isDataPersistent": "false",
            "channel": [
              {
                "type": "azureBlobStorage",
                "settings": {
                  "regionName": "us-east-1",
                  "bucketName": "rdp-media-assets-sandbox-presales1",
                  "key": ".*"
                },
                "credentialsType": "AMAZON_EC2_INSTANCE_PROFILE"
              }
            ],
            "format": {
              "type": "IMAGE",
              "version": "1.1",
              "settings": {},
              "includeFilter": [],
              "excludeFilter": []
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
</code>
</pre> 

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
          "message": "Submitted integrationprofile-system for create with Id downloadAssetsFromURL. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile-system",
            "create",
            "downloadAssetsFromURL"
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