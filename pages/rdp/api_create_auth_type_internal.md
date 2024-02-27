---
title: Create Authorization based on Entity Type
sidebar: rdp_sidebar
permalink: api_create_auth_type.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entitymodelservice/create to set the authorization permissions such as "read", "write", and "delete" for the respective type defined in the config object based on the role.

Consider for an "integrationprofile" type, you wish to set read, write, and delete permissions for the vendor role, which is a Role-based access control. Based on this, the users, which are under "vendor" role can access the data related to the "integrationprofile" type.

{% include snippets/header.html %}

## Request 

To create authorization model for "integrationprofile" type for a "vendor" role,
* Specify the id and name as integrationprofile_authorizationModel_vendor as you are defining the authorization model for "integrationprofile" type and "vendor" role.
* Specify the type as "authorizationModel".
* In properties section, specify the read/write/delete permissions to "true".

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
    <span style="background-color: #FFFF00">"id": "integrationprofile_authorizationModel_vendor",</span>
    <span style="background-color: #FFFF00">"name": "integrationprofile_authorizationModel_vendor",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    "properties": {
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
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
          "message": "Submitted authorizationModel for create with Id "integrationprofile_authorizationModel_vendor". Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "integrationprofile_authorizationModel_vendor"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Based on this, the users, which are under "vendor" role can read, edit, and delete the data related to integration profiles.

If the user is assigned to multiple roles, then the consolidated authorization model is created for the user. For more information, see [Compute Authorization Models](api_compute_auth_model.html).

## Authorization Fallback Logic based on Entity Type, Domain, and Tenant Levels

The priority of authorization model at entity type, domain, and tenant levels is based on the following:
1. The authorization model created at the entity type level is considered for the respective user.
2. If the authorization model does not exists at the entity type level and exists at the domain level for the respective user, then the authorization model at the domain level is considered.
3. If the authorization model does not exist at the entity type and domain level, then the authorization model at the tenant level is considered.

## Role Consideration Logic for Tenant Level Authorization

The priority of role for the tenant autorization model is based on the following:
1. The "defaultRole" specified in the user model is considered.
2. If the "defaultRole" is not specified, then the "roles" in the user model is considered.
3. If the "roles" are not specified, then the role specified in the request header is considered.

{% include callout.html content="**Note**: During any GET operation, if the multiple entity types are specified in the request and authorization model is not defined for any of the entity type, then the request is rejected with the permission denied error.
" type="primary" %} 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.