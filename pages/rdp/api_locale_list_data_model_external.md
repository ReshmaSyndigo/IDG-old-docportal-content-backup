---
title: Locale
sidebar: rdp_sidebar
permalink: api_locale_list_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

{% include snippets/api_preview.md %}

**Locale** defines information related to the localization of a particular region. The following table shows a sample reference list for locales in Riversand Platform:

| Name | Reference Values |
|----------|---------|
| Locale | en-US |
|        | en-GB |
|        | de-DE |
|        | fr-FR |       

This topic describes the object structure of locale "en-US", using a sample scenario.

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
      "id": "041dddae-723a-4f6f-8f42-9dfa10bf6031",
      "name": "en-US",
      "type": "locale",
      "domain": "referenceData",
      "data": {
        "attributes": {
          "externalname": {
            "values": [
              {
                "value": "English - Global",
                "source": "internal",
                "locale": "en-US"
              }
            ]
          },
          "code": {
            "values": [
              {
                "value": "en-US",
                "source": "internal",
                "locale": "en-US"
              }
            ]
          },
          "language": {
            "values": [
              {
                "value": "English",
                "source": "internal",
                "locale": "en-US"
              }
            ]
          },
          "region": {
            "values": [
              {
                "value": "United States",
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

{% include callout.html content="**Note**: Each item in the list is defined by [Locales Model](api_locale_data_model.html).
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
| data | Indicates details of attributes and relationships of this entity. | [data](#data) |

Data for sample [scenario](#scenario): Set the following properties for **entities** object:

| Property | Value | 
|----------|-------|
| id | 041dddae-723a-4f6f-8f42-9dfa10bf6031 |
| name | en-US |
| type | locale |
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
| externalName | Indicates the name of the locale as displayed in the UI. | [attribute](#attribute) |
| code | Indicates the code of the locale. | [attribute](#attribute) |
| language | Indicates the language of the locale. | [attribute](#attribute) |
| region | Indicates the region of the locale. | [attribute](#attribute) |

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
| externalname | English - Global |
| code | en-US |
| language | English |
| region | United States |