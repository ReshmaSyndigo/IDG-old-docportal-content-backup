---
title: Create Import Profile
sidebar: rdp_sidebar
permalink: api_create_imp_profile_config.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create import profile, using a scenario.

## Scenario

To create import profile for importing data to Riversand Platform from kinesis.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name, type, and version. In the data object, specify the context for the configuration and the actual configuration in a valid JSON format. See [Entity Import Services](api_imp_entity_service.html). 

The following JSON demonstrates configuration for importing data to Riversand Platform from kinesis with appropriate collect, publish, and transform details.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"id": "Kinesis_JSON_Import_Process",</span>
  <span style="background-color: #FFFF00">"name": "Kinesis_JSON_Import_Process",</span>
  <span style="background-color: #FFFF00">"type": "integrationprofile",</span>
  "data": {
    "contexts": [
      {
        <span style="background-color: #FFFF00">"context": {</span>
          "app": "RSConnect",
          "service": "ENTITY_IMPORT",
          "channel": "Kinesis",
          "format": "JSON",
          "source": "internal",
          "role": "admin",
          "user": "system",
          "subtype": "System",
          "order": "10"
        },
        "jsonData": {
          "integrationType": "System",
          "isEnabled": "true",
          "isMergeableWithCustom": "true",
          "collect": {
            "isDataPersistent": "true",
            <span style="background-color: #FFFF00">"channel": [</span>
              {
                "type": "kinesisStreamConnector",
                "credentialsType": "{{AWSCREDENTIALSTYPE}}",
                "settings": {
                  "streamName": "{{ENVNAME}}-{{TENANT}}-import",
                  "regionName": "{{AWSREGIONNAME}}",
                  "accessId": "{{AWSKINESISACCESSID}}",
                  "secretKey": "{{AWSKINESISSECRETKEY}}",
                  "ec2IAMRole": "{{AMAZON_EC2_IAMROLE}}"
                }
              }
            ],
            <span style="background-color: #FFFF00">"format": {</span>
              "type": "RSJSON",
              "version": "1.1",
              "settings": {
                "additionalSettings": {
                  "encoding": "utf8",
                  "dateTimeFormat": "yyyy-MM-dd",
                  "replaceValues": true
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
                  "requestforvaluemapping": "true"
                }
              }
            ],
            "format": {
              "type": "RSJSON",
              "version": "1.1",
              "batchSize": 1,
              "settings": {
                "additionalSettings": {
                  "encoding": "utf8",
                  "dateTimeFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
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
          "message": "Submitted integrationprofile for create with Id Kinesis_JSON_Import_Process. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "Kinesis_JSON_Import_Process"
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