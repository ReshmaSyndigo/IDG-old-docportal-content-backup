---
title: Configure Docportal Role to Role Compute Policy
sidebar: rdp_sidebar
permalink: api_configure_docportal_role.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/create** to map the Riversand Platform role to the readers group ID of the docportal using role compute policy. This provides access to the specfied docportal content for the mapped roles.

## Scenario

Consider that you wish to provide access to the docportal for the "systemadmin" role. You can provide the access by mapping "systemadmin" role to the specific readers group ID of the docportal in tenant configuration.   
 
{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API **{TenantURL or ID}/api/configurationservice/create**. In the request, send the following details:
  
* **configObject**: Specify the "id" and "type".
* **policy-type**: Specify the "policy-type" as "role-to-role".
* **mapping**: Specify the role and the respective group ID that you wish to map. In the below JSON, the "systemadmin" role is mapped to "b683ca6d-ea3e-46fb-8998-7b379f04ea94" group ID.

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/{Tenant ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "doc-portal-role-to-role-compute-policy",
    "name": "doc portal role to role compute policy",
    <span style="background-color: #FFFF00">"type": "rolecomputepolicy",</span>
    "data": {
      "jsonData": {
        <span style="background-color: #FFFF00">"policy-type": "role-to-role",</span>
        "mapping": [
          {
            <span style="background-color: #FFFF00">"systemadmin": "b683ca6d-ea3e-46fb-8998-7b379f04ea94"</span>
          }
        ],
        "enabled": true,
        "default-role": "3f1950e2-5967-4827-81f0-99edd7708113"
      }
    }
  }
}
</code>
</pre> 

## Response

If the above request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "17a288fb-b6bb-4b15-be0b-cb0771099932",
    "taskId": "17a288fb-b6bb-4b15-be0b-cb0771099932"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted rolecomputepolicy for update with Id doc-portal-role-to-role-compute-policy. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "rolecomputepolicy",
            "create",
            "doc-portal-role-to-role-compute-policy"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

* You can get the details of the role compute policy for a specific tenant in the response using the REST API **{TenantURL or ID}/api/configurationservice/get** with the following API request:

<pre>
<code>
{
    "params": {
        "query": {
            "filters": {
                "typesCriterion": [
                    "rolecomputepolicy"
                ]
            }
        },
        "fields": {
            "attributes": [
                "_ALL"
            ]
        },
        "options": {
            "totalRecords": 100
        }
    }
}
</code>
</pre>

For more information, see [Get Configuration](api_get_configuration.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.








  