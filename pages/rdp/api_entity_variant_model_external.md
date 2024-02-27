---
title: Entity Variant Model
sidebar: rdp_sidebar
permalink: api_entity_variant_model.html
folder: rdp
type: HowTo
---

{% include snippets/api_preview.md %}

This object defines the basic structure of the entity variant model with its attributes. An entity variant model is used to define the attributes of the child entities (dimension attributes) for a specific entity type. When you want to generate variants for a specific entity, the attributes of the child entities are validated against this model. {% if site.build == "internal" %} See [Generate Entity Variants using Entity App Service](api_app_generate_entity_variants.html) {% endif %}. It contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.
* [entityModel](#entitymodel): Contains information of the data model such as id, name, and type of the variant model.
* [properties](#properties): Contains an array of levels and dimension attributes at each level.

<br>

This topic describes the entity variant model object structure using a sample scenario. {% if site.build == "internal" %} See [Create Entity Variant Model](api_create_entity_variant_model.html), for more scenarios and examples.{% endif %}

## Scenario

Consider that you have a **style** entity with two child entities **choice** at level 1 and **sku** at level 2. 

The following example demonstrates the sample JSON format to create an entity variant model:

<pre><code>
{
  "entityModel": {
    "id": "style_entityVariantModel",
    "name": "style",
    "type": "entityVariantModel",
    "domain": "generic",
    "properties": {
      "levels": [
        {
          "levelNumber": 1,
          "targetEntityType": "choice",
          "targetRelationship": "isChildOf",
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
          "targetEntityType": "style",
          "targetRelationship": "isChildOf",
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
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture entityvariantmodel.png alt="Entity Variant Model" %}

This topic describes the properties of the entity variant model details using this scenario. 

{% include snippets/paramsOthers.md %}

## entityModel

This object stores information of the entity variant model such as id, name and type of the variant model. The following table lists the details of the entityModel object:

| Property | Description | Type | Required |
|------------|------------------|
| id | Indicates the name of the entity variant model. ID must be defined as "type of the parent entity_entityVariantModel". In this case, it is **style_entityVariantModel**. | String | Yes |
| name | Indicates the name of the parent entity. | String | Yes |
| type | This is pre-defined as **entityVariantModel**. | String | Yes |
| domain | Indicates the domain of the entity variant model. Example: Party, Thing, Reference Data, Generic, Digital Asset. See [Domains Model](api_domain_data_model.html) for more information. | String | No |

## properties

This object contains an array of [levels](#levels) to specify the hierarchy of the child entities.

**levels** : The following table lists the details of the levels object:

| Parameters | Description | Type | Required |
|------------|------------------|
| levelNumber | Indicates the level number of the child entity. | Integer | Yes |
| targetEntityType | Indicates the name of the child entity. | String | Yes |
| targetRelationship | Indicates the reslationship between the different child entities. In this case, "sku" is a child of "choice" which is a child of "style". | String | Yes |
| targetRelationshipOwnership | Indicates where the relationship is is mapped and qualified, if the given relationship with the given entity type exists in the current entity. | String | Yes |
| dimensionAttributes | Indicates an array of [dimension attributes](#dimensionAttributes) for generating variants of the child entities. | [dimensionAttributes](#dimensionAttributes) | Yes |

**dimensionAttributes**: This object contains an array of attributes used for generating variants of the child entities. The following table lists the details of the object:

| Property | Description | Type |
|------------|------------------|-------------|
| name | Indicates the name of the dimension attribute. | String |