---
title: Get and Set Connector State
sidebar: rdp_sidebar
permalink: api_get_set_connectorstate.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

## getconnectorstate

Getconnectorstate API is the special form of get API. connectorService/get is very generic and provides exactly what is requested, whereas getconnectorstate removes requested context, as connector state object deals with only on self context.

This API works on the manage entities page to populate the attribute level errors in the item view dashboard.

### Request

To get the connector state, you can use the POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/getconnectorstate**.

In the request send the following details:

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "connectorstate"
        ],
        "propertiesCriterion": [
          {
            "entityId": {
              "exact": "TQhs_QmGShyUvFKZz0tXXA"
            }
          }
        ]
      },
      "valueContexts": [
        {
          "locale": "en-US",
          "source": "internal"
        }
      ]
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

### Response

In response to the above request, you get the validation and publication statuses of entity attributes.

<pre>
<code>
{
  "dataObjects": [
    {
      "id": "47333498-48f6-46fd-a523e2fr2125e000",
      "type": "connectorstate",
      "properties": {
        "hub": "Acenda",
        "self": "self",
        "tenantId": "connectorsedev",
        "reqid": "ec5b140a-0e52-451d-bb72-6b7c9a8a786f",
        "entityid": "TQhs_QmGShyUvFKZz0tXXA",
        "channelid": "rs-amazonsellerus-self",
        "entitytype": "sku",
        "submissionid": "823",
        "createdService": "genericObjectManageService",
        "createdBy": "system",
        "modifiedService": "genericObjectManageService",
        "modifiedBy": "system",
        "createdDate": "2019-12-17T21:06:46.521-0600",
        "modifiedDate": "2019-12-17T21:06:46.521-0600"
      },
      "data": {
        "attributes": {
          "introState": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "id": "6df3a51b-a35a-48d1-a973-1ff16a2647c2",
                "value": "completed"
              }
            ]
          },
          "publishState": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "id": "aaf65bed-6d4b-43fa-b6ae-5228d2c731cd",
                "value": "completed"
              }
            ]
          },
          "validationState": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "id": "536413c7-850b-4efd-ad1c-8fc66b783a9e",
                "value": "completed"
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

## setconnectorstate

SetConnectorState API service is used to create or update a connectorstate object and also update the attribute of connectorstate object with appropriate transition code. If any service call fails (due to wrong channel name or endpoint missing), continue with the rest of the services and log the error to Kibana.

### Request

To get the connector state, you can use the REST API POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/setconnectorstate**.

<pre>
<code>
"params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      },
      "valueContexts": [
        {
          "source": "internal",
          "locale": "en-US"
        }
      ],
      "id":"skuid1"
      
    },
    "connectorstate": {
      "services": [
        "_ALL",
        "OR",
        "serviceId1"
      ],
      "attributes": {
        "itemState": "new"
      },
      "transitioncode":"is_new_ready"
    }
  }
}
</code>
</pre>

### Response

<pre>
<code>
{
  "id": "7bea9e25-f534-40fa-b7db-adccf19b6380",
  "type": "connectorstate",
  "properties": {
    "tenantId": "qa8connectors",
    "entityid": "ersH51xcppmKVAS",
    "entitytype": "product",
    "channelid": "rs-bigcommerce_podsyndicationserviceconfig",
    "self": "self",
    "createdService": "genericObjectManageService",
    "createdBy": "system_user",
    "modifiedService": "genericObjectManageService",
    "modifiedBy": "system_user",
    "createdDate": "2020-03-16T01:22:39.023-0500",
    "modifiedDate": "2020-03-16T01:22:39.023-0500"
  },
  "data": {
    "attributes": {
      "itemState": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "a2eea200-9849-4c58-be97-3f3d735d797b",
            "value": "new"
          }
        ]
      },
      "channelState": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "13d60a28-43b4-4233-886b-e078fd557009",
            "value": "uninitialized"
          }
        ]
      },
      "syndicationState": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "742bbb10-18fd-48c8-874d-db69ca7cf7ef",
            "value": "uninitialized"
          }
        ]
      },
      "validationState": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "53ac90c7-46d3-4ca9-b5f5-4ee8035f5aa4",
            "value": "uninitialized"
          }
        ]
      },
      "channelStateDate": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "52e25ba3-fc7f-423f-81c2-28cd9dfa637a",
            "value": "2020-03-16T06:22:39.021+0000"
          }
        ]
      },
      "syndicationStateDate": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "84c5747d-a976-47ad-a522-dd881a464f78",
            "value": "2020-03-16T06:22:39.021+0000"
          }
        ]
      },
      "validationStateDate": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "596dfa70-76a9-4bb2-822e-8b2b96fdd2ff",
            "value": "2020-03-16T06:22:39.021+0000"
          }
        ]
      }
    }
  }
}
</code>
</pre>