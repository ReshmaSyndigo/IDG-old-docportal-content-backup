---
title: "Compute Role using Role Compute Policy"
sidebar: rdp_sidebar
permalink: api_compute_role.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.computerole}}** to compute Riversand Platform role based on "Role Compute Policy".

## Scenario

To compute Riversand Platform role based on "RDP-role to role" compute policy.

### Pre-requisites 

* Role compute policy must be defined. {% if site.build == "internal" %} See [how to create role compute policy](api_create_role_compute_policy.html), for more information.{% endif %}
* The role compute policy to be used can be specified in the tenant configuration.
<pre><code>
"configObjects": [
    {
        ...
        ...
        ...
            "services": {
                "authorizationService": {
                    "serviceSpecific": {
                        "defaultMaxRecords": 100,
                        "roleComputePolicy": "RDP-role-to-role-compute-policy"
                    }
                },
                ...
                ...
                ...
            }
        ]
    }
]
</code></pre> 
* You can also specify it in the field "roleComputePolicy" in "computerole" request. 

{% include snippets/header.html %}

## Request

To compute role, you can use the REST API {{site.data.rdp_glossary.computerole}}. In the request send the following details:

In the authorization object, 
* Specify the type as "authorizationRole".
* In the data section, specify the role compute policy to be used, and the "role" or "group" on which the policy must be applied.

<pre>
<code>
POST **{{site.data.rdp_glossary.computerole}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "authorizationObject": {
    <span style="background-color: #FFFF00">"type": "authorizationRole",</span>
    "data": {
      "jsonData": {
        <span style="background-color: #FFFF00">"roleComputePolicy": "RDP-role-to-role-compute-policy",</span>
        <span style="background-color: #FFFF00">"roles": [</span>
          "super-admin"
        ]
      }
    }
  }
}
</code>
</pre>

## Response

The computed Riversand Platform role is returned in the response. Since, "super-admin" role is mapped to "admin" in the role compute policy, the computed role is "admin".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "9e809c4e-d538-44ba-90ed-3671c3fa7dfb"
  },
  "response": {
    "authorizationObject": {
      "id": "b0980fb5-7a59-4c0b-a001-82a78ae43ad1",
      "systemInfo": {
        "tenantId": "infodev"
      },
      "data": {
        "properties": {
          "role": "admin"
        }
      }
    },
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.