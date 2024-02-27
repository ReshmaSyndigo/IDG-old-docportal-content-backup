---
title: Channel
sidebar: rdp_sidebar
permalink: api_channel_list_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

**Channel** is an example of [primary context](api_primary_context_data_model.html) in Riversand Platform.

The following table shows a sample reference list for channel in Riversand Platform:

| Name | Reference Values |
|----------|---------|
| Channel | India Retail |
|         | India Web  |       
|         | India Mobile |

This topic describes the object structure of channel "India Retail", using a sample scenario.

## Scenario

<pre><code>
{
  "metaInfo": {
    "dataIndex": "entityData",
    "collectionName": "entities",
    "responseObjectName": "response",
    "apiCall": "appService"
  },
  "entities": [
    {
      "id": "indiaretail",
      "name": "India Retail",
      "type": "channel",
      "domain": "referenceData",
      "data": {
        "attributes": {
          "code": {
            "values": [
              {
                "value": "indiaretail",
                "source": "internal",
                "locale": "en-US"
              }
            ]
          },
          "value": {
            "values": [
              {
                "value": "India Retail",
                "source": "internal",
                "locale": "en-US"
              }
            ]
          }
        }
      }
    }
  ]
}
</code></pre>

{% include callout.html content="**Note**: Each item in the list is defined by [primary context](api_primary_context_data_model.html).
" type="primary" %}

## metaInfo

This object contains the information about the data which is sent to the API such as dataIndex and collectionName. The following table lists the details of the metaInfo object:

| Property | Description | Type | 
|----------|-------------|------|
| dataIndex | Indicates the index identifier in the elastic database. | String | 
| collectionName | Indicates the name of the collection to which these lists belongs to. | String | 
| responseObjectName | Indicates the name of the response object. | String |

Data for sample [scenario](#scenario): Set the following properties for **metaInfo** object:

| Property | Value | 
|----------|-------|
| dataIndex | entityData |
| collectionName | entities |
| responseObjectName | response |

## entities

This object indicates entity details such as id, name, type, domain, data. The following table lists the details of the entities object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this entity. | String | 
| name | Indicates the name of this entity. | String | 
| type | Indicates the type of this array. | String |
| domain | Indicates the domain this entity belongs to. | String |
| data | Indicates the attribute details of this entity. | [data](#data) |

Data for sample [scenario](#scenario): Set the following properties for **entities** object:

| Property | Value | 
|----------|-------|
| id | indiaretail |
| name | India Retail |
| type | channel |
| domain | referenceData |

## data

This object contains the attributes and relationships of this entity. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |

## attributes

This object contains an array of attributes of this entity. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| code | Indicates the code of the channel. | [attribute](#attribute) |
| value | Indicates the value given to the channel. | [attribute](#attribute) |

## attribute

This object contains various details of an attribute. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|-------|
| values | Indicates the details of locale, source, value of the attribute. | [values](#values) |

## values

This object contains the values of the simple, nested, and relationship attributes of an entity. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| value | Indicates the actual attribute value. | String, Boolean | 
| source | Indicates the source of attribute value. | String  | 
| locale | Indicates the locale for the attribute value. | String | 

Data for Sample [Scenario](#scenario): Define the following values for each attribute as required:

| Attribute | Value | 
|----------|-------------|
| code | indiaretail |
| value | India Retail |