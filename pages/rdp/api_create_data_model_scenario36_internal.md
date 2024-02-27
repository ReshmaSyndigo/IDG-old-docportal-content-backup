---
title: "Set Domain Permissions"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario36.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set domain permissions, using a scenario.

## Scenario

To set read, write and delete permissions for "thing" domain for "vendor" role. 

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entitymodel object, 
* Specify the id and name as "thing_authorizationModel_vendor" as you are setting the permissions at the "thing" domain level for "vendor" role. See [list of domains](api_entity_authorization_model.html).
* In properties section, specify the read, write and delete permissions at attribute, relationship and context levels.
  
<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "thing_authorizationModel_vendor",</span>
    <span style="background-color: #FFFF00">"name": "thing_authorizationModel_vendor",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    <span style="background-color: #FFFF00">"properties": {</span>
      "readPermission": true,
      "writePermission": true,
      "deletePermission": false,
      <span style="background-color: #FFFF00">"attributesPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"relationshipsPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"contextsPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"contextsAttributesPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"contextsRelationshipsPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ]
    }
  }
}
</code></pre> 

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted authorizationModel for create with Id thing_authorizationModel_vendor. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "thing_authorizationModel_vendor"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).
* After creating the model, the users with "vendor" role can create and read in the "thing" domain.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
