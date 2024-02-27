---
title: Get Mappings
sidebar: rdp_sidebar
permalink: api_get_mappings.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform allows users to upload their data in excel format. There are various attributes in the excel. Riversand Platform enables you to map these attribute names in the input file to the attribute names in Riversand Platform. 

This topic describes how to use the **{{site.data.rdp_glossary.getmappings}}** API to get the mapped attribute names for the specified attributes.

## Scenario

To get mapped Riversand Platform attribute for "Item Type" .

{% include snippets/header.html %}

## Request

To get the above attributes, use the RESTful API {{site.data.rdp_glossary.getmappings}}. In the request provide the following details:

* typesCriterion : Specify as "attributemapping" since we are mapping attributes.
* contexts : Specify the context in which you wish to get the mapped values.
* rsconnect : profilecontexts -> Specify RSConnect channel and format and source. Here it is UI, excel .
* headers : entities -> Specify the header fields in the excel for which you wish to get the mapped values.

<pre>
<code>
POST **{{site.data.rdp_glossary.getmappings}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "excludeNonContextual": true,
        "typesCriterion": [
          <span style="background-color: #FFFF00">"attributemapping"</span>
        ]
      },
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "entitytype": "sku",
          "user": "testinfodev@riversand.com_user",
          "role": "admin",
          "ownershipdata": "_DEFAULT",
          "service": "ENTITY_IMPORT",
          "format": "Excel"
        }
      ]
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "rsconnect": {
      "loadMappingsFromHeaders": true,
      <span style="background-color: #FFFF00">"profilecontexts": [</span>
        {
          "subtype": "User",
          "service": "ENTITY_IMPORT",
          "channel": "UI",
          "format": "Excel",
          "source": "internal",
          "order": 10
        }
      ],
      "headers": {
        "relationships": [],
        <span style="background-color: #FFFF00">"entities": [</span>
          "Assembly Required",
          "Buy to Demand",
          "MDM ID",
          "Vendor Cost"
        ]
      }
    }
  }
}
</code>
</pre>

## Response

As you can see the response, the "Assembly Required" attribute has been mapped to "Item Type" attribute.

<pre><code>
{
  "response": {
    "entities": [
      {
        "type": "attributemapping",
        "systemInfo": {
          "tenantId": "infodev"
        },
        "data": {
          "contexts": [
            {
              "context": {
                "entitytype": "sku",
                "user": "testinfodev@riversand.com_user",
                "role": "admin",
                "ownershipdata": "_DEFAULT",
                "service": "ENTITY_IMPORT",
                "format": "Excel"
              },
              "attributes": {
                "buytodemand": {
                  "properties": {
                    "id": -272810265,
                    "externalName": "Buy to Demand",
                    "hasUOM": false,
                    "type": "boolean",
                    "isLocalizable": false,
                    "isFormattingAppliedOnExports": false,
                    "isAttribute": true
                  },
                  "values": [
                    {
                      "value": "Buy to Demand",
                      "locale": "en-US"
                    }
                  ]
                },
                "mdmid": {
                  "properties": {
                    "id": 1415941912,
                    "externalName": "MDM ID",
                    "entityIdentifier": true,
                    "hasUOM": false,
                    "isLocalizable": false,
                    "isFormattingAppliedOnExports": false,
                    "isAttribute": true
                  },
                  "values": [
                    {
                      "value": "MDM ID",
                      "locale": "en-US"
                    }
                  ]
                },
                "cost": {
                  "properties": {
                    "id": -57951400,
                    "externalName": "Vendor Cost",
                    "hasUOM": false,
                    "type": "decimal",
                    "isLocalizable": false,
                    "isFormattingAppliedOnExports": false,
                    "isAttribute": true
                  },
                  "values": [
                    {
                      "value": "Vendor Cost",
                      "locale": "en-US"
                    }
                  ]
                },
                "itemtype": {
                  "properties": {
                    "id": 973805028,
                    "externalName": "Item Type",
                    "required": true,
                    "overrideContextKeys": {
                      "role": "admin",
                      "entitytype": "sku",
                      "overridetype": "UI",
                      "service": "ENTITY_IMPORT",
                      "format": "Excel",
                      "ownershipdata": "_DEFAULT",
                      "user": "testinfodev@riversand.com_user"
                    },
                    "isAttribute": true
                  },
                  "values": [
                    {
                      "value": "Assembly Required",
                      "locale": "en-US"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>