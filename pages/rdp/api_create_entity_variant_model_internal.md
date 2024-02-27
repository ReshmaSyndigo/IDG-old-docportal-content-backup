---
title: Create Entity Variant Model
sidebar: rdp_sidebar
permalink: api_create_entity_variant_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Variant generation is the concept of generating a matrix of related entities based on the different combinations of dimension attributes specified at multiple levels.

Entity variant model in Riversand Platform is used to define the levels or hierarchy of child entities and the dimension attributes of the child entities for a specific entity type. See [Generate Entity Variants](/{{site.data.rdp_links_version.APPU}}/dda_generate_entity_variants.html){:target="_blank"}. 

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create entity variant model:

* [Create Entity Variant Model Settings](api_create_entity_variant_model_scenario1.html)
* [Create Entity Variant Model with Self Dimension Attributes ](api_create_entity_variant_model_scenario2.html)
* [Create Entity Variant Model with Self and Enhancer Given Dimension Attributes](api_create_entity_variant_model_scenario3.html)
* [Create Entity Variant Model with Primary Context Specific Dimension Attributes](api_create_entity_variant_model_scenario4.html)

{% include snippets/header.html %}

## Request

POST {TenantURL or ID}/api/entitymodelservice/create

Parameters: The following table lists the parameters of the JSON request to create a data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entityModel | Yes | Indicates the details of the entity model to be created. See [Data Model Object Structure](api_entity_variant_model.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to create an entity variant model for **style** entity. Here, the parent entity "style" has "choice" as first level child and "sku" as second level child. The dimension attributes for the first level are material and sleevelength. The dimension attributes for the second level are color and size. When variants are generated based on this model, "choice" and "sku" entities are created in the hierarchy using a matrix generated based on the permutations of specified dimension attributes.

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    "id": "style_entityVariantModel",
    "name": "style",
    "type": "entityVariantModel",
    "domain": "generic",
    "data": {
      "contexts": [
        {
          "context": {
            "entityType": "style",
            "country": "_DEFAULT",
            "channel": "_DEFAULT",
            "itemType": "_DEFAULT",
            "productclassification": "_DEFAULT",
            "webclassification": "_DEFAULT",
            "gdsnclassification": "_DEFAULT"
          },
          "properties": {
            "levels": [
              {
                "levelNumber": 1,
                "targetEntityType": "choice",
                "targetRelationship": "ischildof",
                "targetRelationshipOwnership": "whereused",
                "dimensionAttributes": [
                  {
                    "name": "material",
                    "mandatory": true
                  },
                  {
                    "name": "sleeveLength",
                    "mandatory": true
                  }
                ]
              },
              {
                "levelNumber": 2,
                "targetEntityType": "sku",
                "targetRelationship": "ischildof",
                "targetRelationshipOwnership": "whereused",
                "dimensionAttributes": [
                  {
                    "name": "color",
                    "mandatory": true
                  },
                  {
                    "name": "size",
                    "mandatory": true
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}
</code></pre>

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "eb1d6ed5-1e67-45d5-a1bf-3259fa36b59b"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity Model has been submitted for create with entity model Id : style_entityVariantModel. Please check back after 1 min"
    }
  }
}
</code></pre> 

Verify the created data model for the entity type:
* You can use {TenantURL or ID}/api/entitymodelService/get API to verify the created model. See <a href="api_get_data_model.html">Get Data Model</a>.
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://«ESSERVER»:9200/«tenant_write_index»/_search?q=«EntityModelName»&pretty. 

## Troubleshooting

See <a href="api_troubleshooting_tips.html">Troubleshooting Tips</a>, for common troubleshooting tips, if required.