---
title: Relationship Model
sidebar: rdp_sidebar
permalink: api_relationship_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines base relationship models for a particular [domain](api_domain_data_model.html). You can then create various relationship models of this base relationship model type as per your business requirements. With these relationship models created, you can create the corresponding related relationships and use it for various [Manage models](api_manage_model.html). 

Certain relationship models comes out-of-the-box (OOTB) when you deploy Riversand Platform. The following table lists OOTB relationship models:

| Name of the relationship models | Description |
|--------------------|-------------|
| thingdomainrelationshipmodels | Indicates the relationship models related to "Thing" domain. |
| partydomainrelationshipmodels | Indicates the relationship models related to "Party" domain. |
| locationdomainrelationshipmodels | Indicates the relationship models related to "Location" domain. |
| referencedatadomainrelationshipmodels | Indicates the relationship models related to "Reference Data" domain. |
| genericdomainrelationshipmodels | Indicates the relationship models related to "Generic" domain. |

<br>

The following table lists the details of relationships in Riversand Platform:

| Relationship | From | To |
|----------|-------------|------|
| contains | Entity Type | Entity Type |
| productischildof | Product | Product Group |
| crosssell | Entity Type | Entity Type |
| ischildof | SKU | Product |
| listedUnder | Domain | List |
| hasWorkflowsDefined | Workflow | Entity Type/Context |
| hasBusinessRules | Entity Type | Business Rule |
| hasBusinessConditions | Entity Type | Business Condition |
| hasimages | Entity Type | Image |
| hasdocuments | Entity Type | Documents |
| hasvideos | Entity Type | Videos |

<br>
This topic describes the relationship model object structure using a sample scenario. {% if site.build == "internal" %} See [Create Relationship Model](api_create_data_model_scenario64.html) for more scenarios and examples.{% endif %}

## Scenario

The following example demonstrates the sample JSON format to create "crosssell" relationship model.

<pre><code>
{
  "entityModel": {
    "id": "crosssell_relationshipModel",
    "name": "crosssell",
    "type": "relationshipModel",
    "domain": "thing",
    "properties": {
      "externalName": "",
      "data": {
        "relationships": {
          "listedUnder": [
            {
              "id": "",
              "direction": "both",
              "relationshipType": "aggregation",
              "relTo": {
                "id": "thingdomainrelationshipmodels",
                "type": "list",
                "mergeMatrix": [
                  {
                    "mergeSequence": "Brand Bank>>Ice Cat>>User",
                    "ignoreMergeMatrix": true
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture relationshipmodel.png alt="Relationship Model" %}

## entityModel

This object contains an array of various relationship models for a particular domain. The following table lists the details of the entityModels object:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the identifier of this relationship model. | String | 
| name | Indicates the name of this relationship model. | String |
| type | Indicates the type of this array. | String |
| domain | Indicates the root domain to which domain of this relationship model belongs to. | String |
| properties | Indicates the properties of the object. Properties must be used to store simple name-value pairs, where the values are Absolute and do not change with context. | [properties](#properties) | 
| data | Indicates an object that contains the details about the [relationships](#relationships) this relationship model has. | [data](#data) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | crosssell_relationshipModel |
| name | crosssell |
| type | relationshipModel |
| domain | thing |

## properties

This object stores the audit information of an entity such as externalName and description. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| externalName | Indicates the external name of the particular property. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| externalName | "" |

## data

This object contains all the data about the relationships for this relationship model. The following table lists the details of the data object:

| Property | Description | Type |
|----------|-------------|-------|
| relationships | Indicates the array of the relationships this model has with the particular domain. | [relationships](#relationships) |

## relationships

This object contains an array of relationships. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the relationship type name. | [relationship](#relationship) |

## relationship

This object contains the information of relationship details in the form of an array. The following table lists the details of the relationships object:

| Property | Description | Type |
|----------|-------------|-------|
| id | Indicates the identifier of the relationship this model has. | String |
| direction | Indicates the association of the relationship this model has. | String |
| relationshipType | Indicates the type of the relationship this model has. | String |
| relTo | Indicates the details about the related domain in the relationship. | [relto](#relto) |
| mergeMatrix | Indicates an array of merge precedence related properties. | |
| mergeSequence | Indicates the highest precedence order defined at first for an external source with the lesser precedence level defined next and so on. The various external sources are separated by the symbol "»". | String |
| ignoreMergeMatrix | Indicates whether or not to ignore values from different data sources merged into one single record. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **relationship** object:

| Property | Description | 
|----------|-------------|
| id | "" |
| direction | both |
| relationshipType | aggregation |

## relTo

This object contains the details about the related domain object. The following table lists the details of the relTo object:

| Property | Description | Type | 
|----------|-------------|-------|
| id | Indicates the identifier of the related domain. | String |
| type | Indicates the type of the domain. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relTo** object:

| Property | Description | 
|----------|-------------|
| id | thingdomainrelationshipmodels |
| type | list |
