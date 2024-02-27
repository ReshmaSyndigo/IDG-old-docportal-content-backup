---
title: Entity Context Model
sidebar: rdp_sidebar
permalink: api_context_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the coalesce information for a particular [domain](api_domain_data_model.html). The following table lists the primary and additional contexts:

| Type of the context | Examples | 
|--------------------|--------------------------------------------|
| Primary Context | Country - USA, France, Germany, Belgium, India |
| Primary Context | Channel - usaretail, usaweb, germanyweb, germanymobile, germanyretail |
| Additional Context | Productclassification - pants, formalshirts, dressshirts |
| Additional Context | Webclassification - topsellingproducts, topratedproducts |
| Additional Context | Itemtype - new, refurbished, preowned |

This topic describes context model object structure using a sample scenario.

## Scenario

The following example demonstrates the sample JSON format to show context model for thing domain.

<pre><code>
{
  "entityModel": {
    "id": "thing_entityContextModel",
    "name": "thing",
    "type": "entityContextModel",
    "domain": "generic",
    "properties": {
      "enhancerAttributes": [
        {
          "priority": 2,
          "enhancerAttributeName": "productclassification",
          "pathRelationship": "belongsto",
          "enhancerEntityType": "classification"
        },
        {
          "priority": 1,
          "enhancerAttributeName": "itemtype",
          "enhancerEntityType": "itemtype"
        }
      ],
      "coalesceInfo": [
        {
          "level": 1,
          "contextKey": "country",
          "contextRelationship": "belongstoroot",
          "mappedValueContexts": [
            {
              "valueContext": "locale",
              "valueContextRelationship": "allowedlocales"
            }
          ],
          "enhancerAttributes": [
            {
              "priority": 1,
              "enhancerAttributeName": "productclassification",
              "pathRelationship": "belongsto",
              "enhancerEntityType": "classification"
            }
          ]
        },
        {
          "level": 2,
          "contextKey": "channel",
          "contextRelationship": "belongstocountry",
          "parentContextKey": "country",
          "enhancerAttributes": [
            {
              "priority": 1,
              "enhancerAttributeName": "webclassification",
              "pathRelationship": "belongsto",
              "enhancerEntityType": "classification"
            }
          ]
        }
      ]
    }
  }
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture entitycontextmodel.png alt="Entity Context Model" %}

## entityModel

This object contains an array of various attributes of entityContextModel. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this context model. | String | 
| name | Indicates the name of this context model. | String |
| type | Indicates the type of  entity model. | String | 
| domain | Indicates the root domain this context model belongs to. | String | 
| properties | Indicates the properties of the object. Properties must be used to store simple name-value pairs, where the values are Absolute and do not change with context. Attributes must be used in scenarios where the value can have additional properties or context specificity. | [properties](#properties) |  

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | thing_entityContextModel |
| name | thing |
| type | entityContextModel |
| domain | generic |

## properties

This object stores the audit information of an entity such as enhancerAttributes and coalesceInfo. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| enhancerAttributes | Indicates the properties of the enhancer attributes. | [enhancerAttributes](#enhancerattributes) | 
| coalesceInfo | Indicates the order of contexts used during coalesce. | [coalesceInfo](#coalesceinfo) |

## enhancerAttributes

This object specifies information such as priority and enhancerAttributeName. The following table lists the details of the enhancerAttributes object:

| Property | Description | Type | 
|----------|-------------|------|
| priority | Indicates the priority of contexts used during coalesce. | Integer |
| enhancerAttributes | Indicates the name of the enhancerAttributes. | String |
| pathRelationship | Indicates additional context path. | String |
| enhancerEntityType | Indicates the type of enhancer attribute. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **enhancerAttributes** object:

| Property | Description | 
|----------|-------------|
| priority | 2 |
| enhancerAttributes | productclassification |
| pathRelationship | belongsto |
| enhancerEntityType | classification |

## coalesceInfo

This object specifies information such as level and contextKey. The following table lists the details of the coalesceInfo object:

| Property | Description | Type | 
|----------|-------------|------|
| level | Indicates the coalesce hierarchy level. | Integer |
| contextKey | Indicates the name of primary context. | String |
| contextRelationship | Indicates the relationship type of the context. | String |
| mappedValueContexts | Indicates the value contexts that are mapped. | [mappedValueContexts](#mappedvaluecontexts) |

Data for Sample [Scenario](#scenario): Set the following properties for **coalesceInfo** object:

| Property | Description | 
|----------|-------------|
| level | 2 |
| contextKey | country |
| contextRelationship | belongstoroot |

## mappedValueContexts
 
This object provides details of the relationship of the value contexts which are mapped. The following table lists the details of the mappedValueContexts object:

| Property | Description | Type | 
|----------|-------------|------|
| valueContext | Indicates the name of the value context which is mapped. | String |
| valueContextRelationship | Indicates the name of relationship of mapped value contexts. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **mappedValueContexts** object:

| Property | Description | 
|----------|-------------|
| valueContext | locale |
| valueContextRelationship | allowedlocales |

This section covers the following topics to explain the object structure of the models associated with context:

* [Primary Context](api_primary_context_data_model.html)
* [Primary Context Instance - Country](api_country_context_data_model.html)
* [Additional Context](api_additional_context_data_model.html)
