---
title: View Match Standardized Data
sidebar: rdp_sidebar
permalink: api_match_standardization.html
folder: rdp
type: HowTo
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.matchstandardize}}** to view the standardized data after it undergoes the **Match Data Standardization Framework**. The attributes that are defined in the **Match Profile** are considered for standardization along with the defined cleansers and corpuses. For more information on "Match Profile", see [Match Data Standardization](/{{site.data.rdp_links_version.APP}}/rdp_match_data_enhancements.html).

During the standarization process, the internal attributes are created with the same attribute name and suffixed with 'rssysmatch_' (similar to the attribute defined in the entity). These internal attributes contains the standardised data and the original values are retained in the attribute of an entity. 

{% include callout.html content="**Note:** The **Match Data Standardization Framework** is executed when you create an entity or when you search for an entity. 
" type="primary" %}

## Scenario

Consider you wish to standardise the 'alternatename', phone, 'name' and 'orgname' attributes of an entity. When the entity undergoes the **Match Data Standardization Framework**, the new internal attribute such as 'rssysmatch_alternatename', rssysmatch_orgname, and 'rssysmatch_phone' are created. These internal attributes holds the standardised values.

{% include snippets/header.html %}

## Request

In the request below, you are standardising the attribute values of 'alternatename', 'orgname', 'name', and 'phone'.

<pre>
<code>
{
  "entity": {
    "name": "Amazon.com, Inc.",
    "type": "organization",
    "properties": {
      "createdService": "entityManageService",
      "createdBy": "mmadmin@riversand.com_user",
      "modifiedService": "entityManageService",
      "modifiedBy": "mmadmin@riversand.com_user",
      "createdDate": "2020-05-21T02:48:15.069-0500",
      "modifiedDate": "2020-05-21T02:48:15.069-0500"
    },
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"alternatename": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "A.M.A.Z.ON"
            }
          ]
        },
        <span style="background-color: #FFFF00">"phone": {</span>
          "values": [
            {
              "id": "463ce9ab-fe42-47e9-b327-bc9756ade1c5",
              "value": "+1F 20E6-26D6-10ABC00",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        <span style="background-color: #FFFF00">"name": {</span>
          "values": [
            {
              "id": "463ce9ab-fe42-47e9-b327-bc9756ade1c5",
              "value": "Rive.r?s-and",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        <span style="background-color: #FFFF00">"orgname": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "amz"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response 

The response shows the internal attributes that are created successfully along with the original attributes of an entity.

{% include callout.html content="**Note:** In this scenario, the 'name' attribute is not standardised as it is not part of the Match Profile.
" type="primary" %}

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "7428daab-6975-4f1b-ae45-a17ebf59e3fa",
    "taskId": "7428daab-6975-4f1b-ae45-a17ebf59e3fa"
  },
  "response": {
    "entities": [
      {
        "id": "6af8b46a-784a-48f7-8ae4-c408a3e674af",
        "name": "Amazon.com, Inc.",
        "type": "organization",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "ggadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "ggadmin@riversand.com_user",
          "createdDate": "2020-05-21T02:48:15.069-0500",
          "modifiedDate": "2020-05-21T02:48:15.069-0500"
        },
        "data": {
          "attributes": {
            <span style="background-color: #FFFF00">"alternatename": {</span>
              "values": [
                {
                  "id": "7a6566a3-9d94-4a50-8c58-a467eee33468",
                  "value": "A.M.A.Z.ON",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"phone": {</span>
              "values": [
                {
                  "id": "463ce9ab-fe42-47e9-b327-bc9756ade1c5",
                  "value": "+1F 20E6-26D6-10ABC00",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"name": {</span>
              "values": [
                {
                  "id": "463ce9ab-fe42-47e9-b327-bc9756ade1c5",
                  "value": "Rive.r?s-and",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"orgname": {</span>
              "values": [
                {
                  "id": "ac7718e3-2a75-44ea-aa81-373793f27d72",
                  "value": "amz",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"rssysmatch_alternatename": {</span>
              "values": [
                {
                  "id": "43939ab8-55f5-4389-b35a-1b597f26f66a",
                  "value": "amazon",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"rssysmatch_orgname": {</span>
              "values": [
                {
                  "id": "669a8ab4-39ab-46bb-ab22-7612f99ff3bf",
                  "value": "amz",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"rssysmatch_phone": {</span>
              "values": [
                {
                  "id": "2cde8722-af25-4c38-8707-34377c11eca7",
                  "value": "1 2062661000",
                  "locale": "en-US",
                  "source": "internal"
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