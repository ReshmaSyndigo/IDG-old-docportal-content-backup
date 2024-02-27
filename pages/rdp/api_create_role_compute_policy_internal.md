---
title: Create Role Compute Policy
sidebar: rdp_sidebar
permalink: api_create_role_compute_policy.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform authorization model is based on Role Based Access Control(RBAC) and Attribute Based Access Control(ABAC). The roles define the authorization permissions. See [Authorization Services](api_create_entity_auth_model.html).

When a user logs in, SAML authentication determines the authenticity of the user. It authenticates that the user is who he/she claims to be. The authenticated SAML assertions contain many claim types such as, user name, email and other application metadata for Riversand Platform. In general, the RDRiversand Platform SAML claims contain the user role in Riversand Platform. However, in some cases the role of the user is not defined as part of the claims. In such a case, the Riversand Platform role needs to be computed.

The authentication server computes the user roles based on the other claims provided. It accomplishes this by making a REST API call to Riversand Platform authorization service with the user claims. 

Riversand Platform currently supports two "Role Compute Policy":

* **Role to Role Compute Policy**<br>
This policy maps input role to Riversand Platform role. 

* **Group to Role Compute Policy**<br>
This policy maps input group such as "bsdf-europe-suppliers","bsdf-north-america-admins" to Riversand Platform role.

The authentication server does not resolve the role on every user activity. The user model (including the assigned role) is stored in the secure session. Subsequent activities by the user uses the generated secure session. When the user logs out or the session expires, the user has to login again and the role is re-computed.

## Sample Scenario

### Role to Role Compute Policy 

In this scenario, the role compute policy does the following role-role mapping

| Input Role | Riversand Platform Role | 
|----------|-------------|
| super-admin | admin | 
| business-admin | dataReader | 
| Any other role | user | 

<pre>
<code>
POST **{TenantURL or ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "RDP-role-to-role-compute-policy",
    "name": "RDP-role-to-role-compute-policy",
    <span style="background-color: #FFFF00">"type": "rolecomputepolicy",</span>
    "data": {
      <span style="background-color: #FFFF00">"jsonData": {</span>
        "enabled": true,
        "policy-type": "role-to-role",
        "default-role": "user",
        "mapping": [
          {
            "super-admin": "admin"
          },
          {
            "business-admin": "dataReader"
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Role Compute Policy Object 

The following section describes the properties of the "rolecomputepolicy" object

A "rolecomputepolicy" object in Riversand Platform is a JSON structure that contains :

| Property | Description | Type |
|----------|-------------|------|
| policy-type  | Indicates the type of the rolecomputepolicy, such as "role-to-role","group-to-role" | String |
| default-role  | Indicates the default role to be assigned, in case there is no mapping specified for the role that is input | String |
| mapping | Indicates the list of mappings of "input role/group" to Riversand Platform role | Array of [rolemapping](#RoleMapping) objects |

### rolemapping

| Property | Description | Type |
|----------|-------------|------|
| "input role/group":"RDP role" | Indicates the mapping of input role/group to role | String:String |