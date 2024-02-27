---
title: Authorization Object Structure
sidebar: rdp_sidebar
permalink: api_auth_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

An authorization object in Riversand Platform is a JSON structure that contains the following fields:

* type : Specifies the type of the authorization object.
* [data](#data): Contains the json data for the authorization object.

This topic describes the authorization object structure using a sample scenario. 

## Scenario

Consider that you wish to compute the Riversand Platform role for an input group "bsdf-europe-suppliers".

<pre><code>
POST **{{site.data.rdp_glossary.computerole}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "authorizationObject": {
    "type": "authorizationRole",
    "data": {
      "jsonData": {
        "roleComputePolicy": "RDP-group-to-role-compute-policy",
        "roles": [
          "bsdf-europe-suppliers"
        ]
      }
    }
  }
}
</code></pre> 

The following section describes the authorization object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [sample scenario](#scenario).

{% include snippets/paramsOthers.md %}

## authorizationObject 

This object is the parent container that holds all the required information. The following table lists the details of the authorization object:

| Property | Description | Type |
|----------|-------------|------|
| type | Indicates the authorization object type. Currently the supported value is "authorizationRole" | String |
| data | Indicates the section for specifying the role compute policy and the roles for which Riversand Platform role has to be computed | [data](#data) |

Data for sample [Scenario](#scenario): Set the following properties for **authorizationObject**:

| Property | Description | Type |
|----------|-------------|------|
| type | authorizationRole | String |

The following sections describe how to set the values for [data](#data) object.

## data  

This object contains jsonData corresponding to the authorizationService. 

| Property | Description | Type |
|----------|-------------|------|
| roleComputePolicy | The role compute policy that is to be used to map the "input role/group" to "Riversand Platform role" | String |
| roles | The input roles for which Riversand Platform role has to be computed | String |

Data for sample [Scenario](#scenario): 

| Property | Description | Type |
|----------|-------------|------|
| roleComputePolicy |RDP-group-to-role-compute-policy | String |
| roles | bsdf-europe-suppliers | String |