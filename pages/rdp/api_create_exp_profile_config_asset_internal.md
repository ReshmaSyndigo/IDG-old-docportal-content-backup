---
title: Create Export Profile to Export Assets
sidebar: rdp_sidebar
permalink: api_create_exp_profile_config_asset.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create an export profile to **export assets**.

## Scenario

To create an export profile to download assets of **sku** entities having **hasimages** relationship in **jpg** and **png** formats only.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}

* collect -> channel -> type: Specify as assetExportConnector.

* collect -> format -> type: Specify as RSAsset.

* collect -> filter: Specify the criteria based on which you wish to filter the records.

* collect -> filter -> include -> assetsCriterion: Specify the name of the entity type whose assets you wish to download. Since sku entity type is considered in this scenario, specify **sku**.

* collect -> filter -> include -> assetsCriterion -> sku -> queryFields -> relationships: Specify the name of the relationship defined in the base data model between the entity defined above and the asset. Since sku entities are considered having a relationship called hasimages, specify **hasimages**.

* collect -> filter -> include -> assetsCriterion -> image -> queryFields -> assetBlobAttributes: This parameter is a mandatory parameter which must have a value. Assets are exported based on the blobid. The **blobid** of an asset is stored in the attribute **property_objectkey**. Specify **property_objectkey**, **renditions->property_objectkey**, to consider the object key of the renditions of the asset if there are any.

* collect -> filter -> include -> assetsCriterion -> image -> queryFields -> assetFileNameAttributes: Specify the name of the attribute whose value is considered as the file name when the asset is downloaded. In this scenario, **&#123;&#123;property_objectkey&#125;&#125;.&#123;&#123;filenameextension&#125;&#125;** is specified for an asset and **&#123;&#123;DATETIME&#125;&#125;&#123;&#123;property_objectkey&#125;&#125;** is specified for the renditions of an asset. If the assetFileNameAttributes field is left blank, then the value defined in assetBlobAttributes field is considered.

* collect -> filter -> include -> assetsCriterion -> image -> queryFields -> attributesCriterion: Specify the attributes and their specific values you wish to filter for downloading assets. In this scenario, all the images of type **jpg** and **png** are being filtered.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    <span style="background-color: #FFFF00">"id": "export_data_json_asset_task",</span>
    <span style="background-color: #FFFF00">"name": "export_data_json_asset_task",</span>
    <span style="background-color: #FFFF00">"type": "integrationprofile",</span>
    "data": {
      "contexts": [
        {
          "context": {
            "app": "RSConnect",
            "service": "ASSET_EXPORT",
            "channel": "ASSET",
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
            "isMergeableWithCustom": true,
            "statusEventEnabled": false,
            "collect": {
              "isBinaryStreamPersistent": false,
              "channel": [
                {
                  <span style="background-color: #FFFF00">"type": "assetExportConnector",</span>
                  "settings": {
                    "type": "RSAsset"
                  }
                }
              ],
              "format": {
                <span style="background-color: #FFFF00">"type": "RSAsset",</span>
                "version": "1.1",
                "settings": {
                  "additionalSettings": {
                    "encoding": "utf8"
                  }
                }
              },
              <span style="background-color: #FFFF00">"filter": {</span>
                "include": {
                  <span style="background-color: #FFFF00">"assetsCriterion": {</span>
                    <span style="background-color: #FFFF00">"sku": {</span>
                      "queryFields": {
                        <span style="background-color: #FFFF00">"relationships": [</span>
                          <span style="background-color: #FFFF00">"hasimages"</span>
                        ]
                      }
                    },
                    <span style="background-color: #FFFF00">"image": {</span>
                      "queryFields": {
                        <span style="background-color: #FFFF00">"assetBlobAttributes": [</span>
                          "property_objectkey",
                          "renditions->property_objectkey"
                        ],
                        <span style="background-color: #FFFF00">"assetFileNameAttributes": {</span>
                          "property_objectkey": "&#123;&#123;property_objectkey&#125;&#125;.&#123;&#123;filenameextension&#125;&#125;",
                          "renditions->property_objectkey": "&#123;&#123;DATETIME&#125;&#125;&#123;&#123;property_objectkey&#125;&#125;"
                        },
                        <span style="background-color: #FFFF00">"queryFilters": {</span>
                          <span style="background-color: #FFFF00">"attributesCriterion": [</span>
                            {
                              <span style="background-color: #FFFF00">"filenameextension": {</span>
                                "exacts": [
                                  "jpg",
                                  "png"
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "exclude": {}
              }
            },
            "publish": {
              "isBinaryStreamPersistent": false,
              "channel": [
                {
                  "type": "azureBlobConnector",
                  "settings": {
                    "folderPath": "AssetExport/",
                    "fileType": ".*",
                    "containerName": "rdwengg-az-dev2-export"
                  }
                }
              ],
              "format": {
                "type": "RSAsset",
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
                "nullRecordTransformer": true
              }
            }
          }
        }
      ]
    }
  }
}
</code>
</pre>

## Response 

<pre>
<code>
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
          "message": "Submitted integrationprofile for create with Id export_data_json_asset_task. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "export_data_json_asset_task"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html).

{% include callout.html content="**Notes**:
* An asset can be downloaded only if it is available in blob store.
* If changes are made to an asset after it is downloaded, the asset has to uploaded to the system and downloaded again to see the corresponding changes.
" type="primary" %}

## Troubleshooting

The table below depicts some of the most commonly occurred errors and how to resolve them:

| Error Message Code | Error Message | What does it mean? |
|--------------------|---------------|--------------------|
| | If the profile is not created | Either the relationship defined in the profile does not exist in the system or no records satisfies the defined criteria in **queryFilters**. |
| RSC7483 | No data in file | No asset records satisfy the criteria mentioned in the attributesCriterion. |
| RSC7524 | File not found : "&#123;&#123;0&#125;&#125;" (Id and Name) | The blobid does not exist in the specified attribute of the Azure blob storage. |

For more troubleshooting tips, see [Troubleshooting Tips](api_troubleshooting_tips.html).