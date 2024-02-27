---
title: Syndicate Entity or Classification
sidebar: rdp_sidebar
permalink: api_syndicate.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

Syndicate end-point of Connector Service API is used to invoke connector publish, that is, it helps to syndicate entity types, such as parent or classification to the intended channel through external or RS connector capability. This API is used mainly in UI Configuration of connector publish option.

To publish the entity/classification to the syndication channel(s), you can use POST 
**http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/syndicate**.

### Sample Request 1

The following is the sample API request to syndicate the category/classification to Big Commerce channel using RS Connector:

<pre>
<code>
{
  "params": {
    "rsconnect": {
      "syndicationChannels": [
        "rs-bigcommerce"
      ],
      "syndicationAction":"categorysyndicate"
    },
    "query": {
      "valueContexts": [
        {
          "source": "_DEFALUT",
          "locale": "en-US"
        }
      ],
      "filters": {
        "typesCriterion": [
          "classification"
        ]
      },
      "ids": [
        "blade"
      ]
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

If syndicateAction as categorySyndicate is passed, then it would create a generic object for that category, else  it will take the default action, that is syndicate.

The Syndicate APi will receive the request and check for the categorysyndicate (syndicationAction), then fetch the concerned profile context from podsyndicationhubconfig and invoke concerned API for that profile.

### Sample Response 1

The API response for the above request is as follows:

<pre>
<code>
{
  "genericObjects": [
    {
      "id": "8664491c-853f-4274-8b96-0925538b0317",
      "name": "8664491c-853f-4274-8b96-0925538b0317",
      "type": "scheduledrequestobject",
      "properties": {
        "retryCount": 0,
        "createdService": "genericObjectManageService",
        "createdBy": "system_user",
        "modifiedService": "genericObjectManageService",
        "modifiedBy": "system_user",
        "createdDate": "2020-04-23T05:18:03.263-0500",
        "modifiedDate": "2020-04-23T05:18:03.263-0500"
      },
      "data": {
        "attributes": {
          "dataObjectId": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "ersYOCLsExyvKTg"
              }
            ]
          },
          "dataObjectType": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "product"
              }
            ]
          },
          "taskType": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "RSCONNECT_PUBLISH_AGGREATED_sys_export_connectors_bigcommerce_syndicate_category_base"
              }
            ]
          },
          "status": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "QUEUED"
              }
            ]
          },
          "profileNames": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "sys_export_connectors_bigcommerce_syndicate_category_base"
              }
            ]
          },
          "syndicationchannelid": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "rs-bigcommerce"
              }
            ]
          },
          "contextName": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "self"
              }
            ]
          },
          "contextValue": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "self"
              }
            ]
          },
          "userId": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "system_user"
              }
            ]
          },
          "userEmail": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "gdsnadmin@riversand.com"
              }
            ]
          }
        }
      }
    }
  ]
}
</code>
</pre>

### Sample Request 2

As stated, if syndicateAction is not given in the configuration, then the default action will be taken, that is, Syndicate. 

The following is the sample API request to syndicate the entity to Amazon channel using Acenda Connector:

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "product",
          "sku"
        ]        
      },
      "query": 
        "valueContexts": [
        {
          "source": "internal",
          "locale": "en-US"
        }
      ],
        "ids": [
        "X0xRtGGsSDyllAA2Xr78PQ"
      ]
    },
      "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    },
    "rsconnect": {
      "profilecontexts": [
        {
          "app": "Connector",
          "service": "ENTITY_EXPORT",
          "channel": "ACENDACONNECTOR",
          "format": "JSON",
          "source": "internal",
          "role": "admin",
          "user": "system",
          "subtype": "System",
          "order": "10"
        }
      ],
      "syndicationChannelSettings": {
        "name": "Amazon Seller Central US",
        "id": "rs-amazonsellerus-self"
      }
    }
  }
}
</code>
</pre>

### Sample Response 2

The API response for the above request is as follows:

<pre>
<code>
{
  "dataObjectOperationResponse": {
    "status": "success",
    "statusDetail": {
      "code": "RSC1002",
      "message": "Binary object has been submitted for create with work automation id : cc922407-fce8-4cf6-9970-79b8fce27ff5. Please check back after 10 mins.",
      "messageType": "Info",
      "childTaskIds": [
        "a5458842-c1dc-4792-be42-7db69356b009"
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>
