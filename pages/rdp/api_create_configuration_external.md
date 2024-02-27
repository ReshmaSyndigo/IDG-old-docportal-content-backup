---
title: Create Configuration
sidebar: rdp_sidebar
permalink: api_create_configuration.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create configuration:

{% if site.build == "internal" %}
* [Create Configuration linked to a Context](api_create_config_scenario1.html)
* [Create Match Configuration](api_create_config_scenario2.html)
* [Create Role Compute Policy](api_create_role_compute_policy.html)
* [Create Integration Profiles](api_create_int_profiles.html)
* [Create Email Notification Configuration](api_create_email_notfn_configuration.html)
* [Create and Update Channel](api_create_update_channel.html)
* [Enable Ownership Data for Visualization](api_enable_ownership_data_visualization.html)
* [Enable Attributes to Filter Data](api_enable_attributes_filter_data.html)
* [Enable Properties to Filter Data](api_enable_properties_filter_data.html)
* [Get SAS URL to access Original Media Asset while Export through Downstream System](api_get_sas_url_exprt_dwnstrm_sys.html)
* [Create Email Notification Configuration](api_create_email_notfn_configuration.html)
{% endif %}

{% if site.build == "external" %}
* [Create Email Notification Configuration](api_create_email_notfn_configuration.html)
{% endif %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.createconfig}}

**Parameters**: The following table lists the parameters of the JSON request to create a configuration:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | configObject | Yes | Indicates the details of the configuration object to be created. See [Configuration Object Structure](api_config_object_structure.html), for more information. |

{% include callout.html content="**Notes**:<br/>
* It is optional to specify the 'Id' in the configuration object. System automatically generates a unique identifier if you do not specify 'Id'. However, if you specify 'Id', it is recommended to provide a Globally Unique Identifier (GUID) and to ensure that it is unique. System verifies if the 'Id' already exists and returns appropriate response back.
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to create a configuration for a "search grid" in "entitysearch" App:

<pre><code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "configGuid15",
    "name": "Search-Grid-Columns",
    "version": "2",
    "type": "gridconfig",
    "properties": {
      "createdByService": "entityservice",
      "createdBy": "user"
    },
    "data": {
      "contexts": [
        {
          "context": {
            "app": "entitysearch",
            "service": "searchdiscovery",
            "component": "searchresults",
            "subComponent": "datagrid",
            "entityType": "product",
            "relationshipType": "crossSell",
            "role": "_ALL",
            "user": "_ALL"
          },
          "jsonData": {
            "type": "uiConfig",
            "config": "Valid JSON Config"
          }
        }
      ]
    }
  }
}
</code></pre>

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "e1a9a217-07be-42d1-a74b-2494e0541d6a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : configGuid15. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html)
* If you know the details of your elastic server and the indices, then you can verify the created configuration using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.