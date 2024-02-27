---
title: Automerge Source Entity with Golden Record
sidebar: rdp_sidebar
permalink: api_get_automerge_sr_gr_scenario41.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/matchservice/automerge** to automerge the incoming Source Record (SR) or entity type into Golden Record (GR) based on the value that you provide. 

## Scenario

Consider the 'draftorganization' entity type for automerge scenario. The entire entity type is sent to Merge Preview V2 based on the 'id' and 'type' parameters. Then the results are sent to the golden record data to persist into the system. 

The following are the assumptions:
* GR must be present in system.
* Source Record (SR) must be present in the system with self context 'issourceof' relationship related with one GR entity. A SR cannot have 'issourceof' relationships with multiple GRs.
* SR and GR must be created in the system with ‘src’ information before performing automerge. If the 'src' does not exist, then automerge considers all the SR attributes' value that is coming from 'user'. As a result the user provided values takes precedence over the GR values.

{% include snippets/header.html %}

## Request

To perform merge incoming source entity type record into Golden Record (GR) based on survivorship rules, you can use the RESTful API {TenantURL or ID}/api/entitymodelservice/get for manage model. In the request, send the following details:
* **src**: Specify the source data of the incoming entity. This can be defined at each attribute level also.

Note: The following request is dependent on the defined merge model and manage model. A sample models are available [here](api_merge_preview_v2.html).

<pre>
<code>
{
  "params": {
    "authorizationType": "accommodate"
  },
  "entity": {
    "id": "draftorganization4",
    "type": "draftorganization"
  },
  "clientState": {
    "notificationInfo": {
      "showNotificationToUser": true,
      "context": {
        "appInstanceId": "app-business-function-component-rsdZwBwTuptpr9Je69",
        "isBFF": true,
        "stepperId": "rsNKLTs5clmPnkUizx",
        "id": "ersXVkqlG4OFsYU",
        "type": "organization",
        "dataIndex": "entityData",
        "params": {
          "appInstanceId": "app-business-function-component-rsdZwBwTuptpr9Je69",
          "isBFF": true,
          "stepperId": "rsNKLTs5clmPnkUizx",
          "id": "ersXVkqlG4OFsYU",
          "type": "organization",
          "dataIndex": "entityData"
        }
      },
      "source": "ui",
      "userId": "abc.def@riversand.com_user"
    }
  }
}
</code></pre>

## Response

If the get request is successful, the following response is received.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "573b2605-0816-4f7b-ab39-e55c62590f99",
    "taskId": "573b2605-0816-4f7b-ab39-e55c62590f99"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted draftorganization for automerge with Id draftorganization4. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "draftorganization",
            "automerge",
            "draftorganization4"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

To view the actual update of the GR, you must perform a get entity for GR separately. Upon performing get entity, you can view the "grmstate" (internal reference attribute) to 'done' state and "grmprocessstate" (internal reference attribute) to "automerge" state. 

{% include callout.html content="**Note:** The internal reference attributes are populated by the Riversand Platform.
" type="primary" %}

## Limitations

The following are the limitations:
* Supports only simple attribute (at self level, entity relationship level) with locale. 
* Collection and nested attributes are not supported. 
* Automerges only self context attributes, relationship attributes from SR to GR because 'issourceof' relationship is defined at self context only.
* 'issourceof' relationship at contexts is not supported. 