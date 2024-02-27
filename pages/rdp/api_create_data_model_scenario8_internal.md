---
title: "Create Value Mapping Manage Model"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Data external to Riversand Platform can contain attributes that are different from that of Riversand Platform. Hence, when you import such data in Riversand Platform, there is a requirement to map the external attribute values with the attribute values in Riversand Platform. See [Manage Mappings](/{{site.data.rdp_links_version.APPU}}/dda_manage_context_mapping.html){:target="_blank"}. 

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a value mapping manage model with [value mapping contexts](#valuemappingcontext) specific to attributes, using a scenario.

## Scenario

To create value mapping manage model for "size" and "color" attributes.

### valuemappingcontexts

Value mapping context is the context in which the value mapping happens. It can be a combination of the following:

  * taxonomy
  * classification
  * country
  * channel
  * User Id
  * Role
  * Ownership Data

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_manage_model.html) object, specify the id and name of the entity model, and the type as "EntityManageModel". 
* In the attributes object, specify the value mapping contexts specific to the attributes. 

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    "id": "sku_entityManageModel",
    "name": "sku",
    "type": "entityManageModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "size": {
          "properties": {
            "externalName": "Size",
            "groupName": "Basic",
            "dataType": "string",
            "isReferenceType": true,
            "referenceEntityInfo": [
              {
                "refRelationshipName": "hasReferenceTo",
                "refEntityType": "sizes"
              }
            ],
            "valueMappingContext": [
              "[Role]",
              "[User Id]"
            ],
            "supportsValueMapping": true,
            "valueMappingTypeName": "sizevaluemapping"
          }
        },
        "color": {
          "properties": {
            "externalName": "Color",
            "groupName": "Basic",
            "dataType": "string",
            "isReferenceType": true,
            "referenceEntityInfo": [
              {
                "refRelationshipName": "hasReferenceTo",
                "refEntityType": "colors"
              }
            ],
            "supportsValueMapping": true,
            "valueMappingTypeName": "colorvaluemapping",
            "valueMappingContext": [
              "[User Id]",
              "[Role]",
              "[Ownership Data]"
            ]
          }
        }
      }
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
        "requestId": "61d3eeaa-901c-4a61-a9d8-681e4b5ad725"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Entity has been submitted for create with entity Id : sku_entityManageModel. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre> 

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After creating the model, you can [create an entity](api_app_create_entity.html) using this model for the specific entity type.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.