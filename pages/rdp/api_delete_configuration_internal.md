---
title: Delete Configuration
sidebar: rdp_sidebar
permalink: api_delete_configuration.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete a configuration:

* [Delete Configuration using Id](api_delete_config_scenario1.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.deleteconfig}}

**Parameters**: The following table lists the parameters of the JSON request to delete an entity:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | configObject | Yes | Indicates the Id and Type of the config object to be deleted. {% if site.build == "internal" %} See [Config Object Structure](api_config_object_structure.html), for more information.{% endif %} |

{% include callout.html content="**Notes**: It is mandatory to specify 'Type' in config object.
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

The response is returned in a JSON format and includes the following details:

<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "0f0c2a8c-8749-4d82-98a0-b4e9106862bf"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Entity has been submitted for update with entity Id : sku_matchConfig. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre>

Verify the deleted configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the deleted configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html)
* If you know the details of your elastic server and the indices, then you can verify the deleted configuration using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.