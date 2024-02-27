---
title: Create and Update Channel
sidebar: rdp_sidebar
permalink: api_create_update_channel.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

The following configuration service endpoint APIs are used to perform create and update actions on the intended channel.

### create and update API

This API is used to create a new syndication channel or update the existing channel.

**Create channel** - POST **http://{WEBURL}:9095/{TENANT_ID}/api/configurationservice/create**

**Update channel** - POST **http://{WEBURL}:9095/{TENANT_ID}/api/configurationservice/update**

#### Request

The following API request is sent to configure a new channel 'Amazon Seller Central' or update the channel.

<pre>
<code>
{
  "configObject": {
    "type": "podsyndicationserviceconfig",
    "data": {
      "jsonData": {
        "isEnabled": true,
        "attributes": {
          "serviceName": {
            "value": "Amazon Seller Central_3"
          }
        },
        "serviceSettings": {
          "settings": {},
          "models": ""
        }
      }
    },
    "id": "6b0593e8-d22c-4cab-993f-1ab5b77674d5",
    "name": "6b0593e8-d22c-4cab-993f-1ab5b77674d5"
  }
}
</code>
</pre>

#### Response

The API response for the above request is as follows:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e08cd3b4-750b-485a-88cc-3807826ee953"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted podsyndicationserviceconfig for create with Id 6b0593e8-d22c-4cab-993f-1ab5b77674d5. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "podsyndicationserviceconfig",
            "create",
            "6b0593e8-d22c-4cab-993f-1ab5b77674d5"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>