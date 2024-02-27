---
title: Create Link between Related Nodes
sidebar: rdp_sidebar
permalink: api_create_link.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create link between related nodes:

* [Rollup SKU to Product](api_create_link_scenario1.html)
* [Rolldown Product to SKU](api_create_link_scenario4.html)
* [Link SKU to an Image](api_create_link_scenario2.html)
* [Link Image to a SKU](api_create_link_scenario3.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.creategraphlink}}

**Parameters**: The following table lists the parameters of the JSON request create link between related nodes:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body -> params | graphprocessconfig | Yes | Indicates the model configuration that must be used by the system to establish a link between the source and the target entity. The model configuration must be specified according to the following notation - **<<source_entity>>_<<relationship_type>>_<<target_entity>>** | 

{% if site.build == "internal" %}
See [Graph Models](api_graph_process_model.html), for more information on how to specify the match criteria and action required, if any, after matching the target entity.
{% endif %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to rollup a SKU to Product:

<pre><code>
POST **{{site.data.rdp_glossary.creategraphlink}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "params": {
    "graphprocessconfig": "sku_ischildof_product"
  },
  "entity": {
    "id": "Polo Mens Shirt Blue_Large",
    "type": "sku",
    "data": {}
  }
}
</code></pre> 

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "0125c6e9-9ea0-4b1b-bb51-1eb672347620"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : Polo Mens Shirt Blue_Large. Please check back after 1 min"
    }
  }
}
</code></pre>

Verify the created or updated Product entity:
* You can use {{site.data.rdp_glossary.getentity}} API to verify the created entity. See [Get Entities](api_app_get_entity.html)
* If you know the details of your elastic server and the indices, then you can verify the create entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.