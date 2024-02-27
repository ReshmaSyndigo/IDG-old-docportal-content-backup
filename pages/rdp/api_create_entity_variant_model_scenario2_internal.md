---
title: Create Entity Variant Model with Self Dimension Attributes
sidebar: rdp_sidebar
permalink: api_create_entity_variant_model_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entitymodelservice/create to create an entity variant model for entitytype productgroup with self dimension attributes, using a scenario.

## Scenario

Consider that you have a **productgroup** entity with first level child as **product** and second level child as **sku**. The following scenario explains how to create an entity variant model for entity with type as **productgroup** and two child entities, each having few self level dimension attributes. 

{% include snippets/header.html %}

### Pre-requisites 

* You must define the [variantModelSettings](api_create_entity_variant_model_scenario1.html) for the entitytype.
* The variantModelSettings of the entity type gives the context keys, enhancers and variantPath. 

## Request

To create the entity variant model, you can use the REST API {TenantURL or ID}/api/entitymodelservice/create. In the request, send the following details:

* Specify the entity id, name and type. The type is "entityVariantModel".

{% include callout.html content="**Notes**: 
* It is recommended to have at most three levels of child entities for variant generation, to easily manage the generated variants of a single entity. 
* A single tenant can have any number of entity variant models.
* You must populate all the context keys in the context section of the entitymodel object. In case of any missing keys, _DEFAULT must be passed. However, entityType must always have a valid value and cannot be _DEFAULT.
" type="primary" %}

* In the entitymodel object, 
* data->context - Specify the context for which this variant model can be applied. This variant model is for any productgroup entity.
* data->properties - Specify the details of the different levels of children under the parent entitytype and its hierarchical relationship. 
* data->properties->dimensionAttributes - Specify the dimension attributes based on which you wish to generate the variants at that level.

The following example demonstrates a sample JSON request to create a variant model for a  "productgroup" entity with self dimension attributes and relationship:

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "productgroup_entityVariantModel",</span>
    <span style="background-color: #FFFF00">"name": "productgroup",</span>
    <span style="background-color: #FFFF00">"type": "entityVariantModel",</span>
    "domain": "generic",
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "entityType": "productgroup",
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
                <span style="background-color: #FFFF00">"levelNumber": 1,</span>
                "targetEntityType": "product",
                "targetRelationship": "ischildof",
                "targetRelationshipOwnership": "whereused",
                <span style="background-color: #FFFF00">"dimensionAttributes": [</span>
                  {
                    "name": "featurespecs",
                    "mandatory": true
                  }
                ]
              },
              {
                <span style="background-color: #FFFF00">"levelNumber": 2,</span>
                "targetEntityType": "sku",
                "targetRelationship": "ischildof",
                "targetRelationshipOwnership": "whereused",
                <span style="background-color: #FFFF00">"dimensionAttributes": [</span>
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

If the entityVariantModel is created successfully, then the following response is received from the API:

<pre><code>
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
          "message": "Submitted variantModelSettings for create with Id productgroup_entityVariantModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "variantModelSettings",
            "create",
            "productgroup_entityVariantModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created entity variant data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).
* After creating the model, you can create an entity and generate variants using this model for the specific entity type.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.