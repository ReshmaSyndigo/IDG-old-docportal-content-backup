---
title: Entity Export Object Structure
sidebar: rdp_sidebar
permalink: api_exp_entity_object_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

An Entity Export Object in Riversand Platform is a JSON structure that details about online data that is exported from Riversand Platform. You can export details of an Entity object according to your requirements. A partial or complete entity is exported based on the request you had sent.

An entity export object is used for exporting the data and contains the following sub-objects:

* [clientState](#clientstate): Contains the user details information who must be notified after the download is completed.
* [params](#params): Contains your request parameters to export an entity from Riversand Platform.

This topic describes an Entity Export Object structure using a sample scenario. The sub-topic provides information on the Export file name formats. See [Export File Name Formats](api_exp_filename_format.html).

## Scenario 

Consider that you wish to download the entity data into a required data format such as an Excel. 

<pre><code>
{
  "params": {
    "query": {
      "id": "a1",
      "contexts": [
        {
          "country": "Germany"
        }
      ],
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": "10"
    },
    "rsconnect": {
      "profilecontexts": [
        {
          "service": "ENTITY_EXPORT",
          "channel": "UI",
          "format": "Excel",
          "source": "internal"
        }
      ]
    }
  },
  "clientState": {
    "notificationInfo": {
      "userId": "ruf.rwtest.admin@riversand.com_user"
    }
  }
}
</code></pre>

## params

An entity export object is an JSON structure containing various **query parameters**. Depending on your requirements, you can send the **params** object in the request. Based on the "params" you sent in the request, the corresponding details about the entity is exported from the Riversand Platform. The following table lists the details of the params object:

| Property | Description | Type |
|-------|----------------|------|
| query | Indicates the search criteria for exporting the entity objects. | [query](#query) |
| fields | Indicates a list of attributes and relationships to be returned in the exported object. | [fields](#fields) |
| options | Indicates the number of records to retrieve. | [options](#options) |
| rsconnect | This object stores the information about the profiles. | [rsconnect](#rsconnect) |

## query

This object contains the information about the query that you are sending in the request. It is an array of multiple queries that you are sending to update the entities with the new values. The following table lists the details of the query object:

| Property | Description | Type |
|-------|----------------|------|
| id | Indicates an array of unique identifier of an entity which you wish to download. | String |
| contexts | Indicates an array of group of contexts. | [context](#context) |
| filters -> typesCriterion | Indicates the types of entity object that you wish to update. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **query** object:

| Property | Description |
|----------|-------------|
| id | a1 |
| filters -> typesCriterion | sku |

## fields

Indicates a comma separated list of attributes and relationships to be returned in the exported object.

| Property | Description | Type |
|-------|----------------|------|
| attributes | Indicates a comma separated list of attributes to be returned in the exported object. | [attributes](#attributes) |
| relationships | Indicates a comma separated list of attributes to be returned in the exported object. |[relationships](#relationships) |

## options

This object indicates the number of records to retrieve according to requirement.

| Property | Description | Type |
|-------|----------------|------|
| maxRecords | Indicates the maximum number of records to retrieve. | Numeric |

Data for Sample [Scenario](#scenario): Set the following properties for **options** object:

| Property | Description |
|----------|-------------|
| maxRecords | 10 |

## rsconnect

This object contains information of various profiles.

| Property | Description | Type |
|-------|----------------|------|
| includeValidationData | Indicates if validation data is required to be included or not in Export operation. Example: If an Entity that is imported includes error during Data Governance check, then this data is also included during the Export when includeValidationData attribute is set to true. |
| profilecontexts | Indicates the actual entity data to be exported. | [profilecontexts](#profilecontexts) |
| profiles | Indicates the profile to be downloaded. | [profiles](#profiles) |

## context

This object indicates the primary context of the entity used for download. The following table lists the details of the context object:

| Property | Description | Type |
|----------|-------------|------|
| <<Primary Context>> | Indicates the name of primary context to which the object is linked to. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **context** object:

| Property | Description |
|----------|-------------|
| country | Germany |

## attributes

This object contains an array of attributes. The following table lists the details of the attributes object:

| Property | Description | Type |
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **attributes** object:

| Property | Description |
|----------|-------------|
| <<AttrName>> | _ALL |

## relationships

This object contains an array of relationships. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the relationship name of the attribute. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relationships** object:

| Property | Description | 
|----------|-------------|
| <<RelName>> | _ALL |

{% include callout.html content="**Notes**: 
* **_ALL** keyword can be substituted for individual records. Example: In typesCriterion, you can specify ALL or sku or product.
* **_ALL** in the attributesCriterion or relationshipsCriterion fields implies all attributes or relationships that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
* If you do not specify any attributes or relationships in fields, then only basic entity information such as entity Id and entity type are returned in the response.
" type="primary" %}

## profilecontexts

This object stores the actual entity data to be exported. The following table lists the details of the profilecontexts object:

| Property | Description | Type |
|----------|-------------|------|
| service | Indicates the operation this profile performs. The allowed values are ENTITY_EXPORT, MODEL_EXPORT, and MACRO_TEMPLATE. | String |
| channel | Indicates the channel from where the profile reads. The allowed values are S3, Kinesis, and UI. | String |
| format | Indicates the format of the profile. The allowed values are JSON and Excel. | String |
| source | Indicates the source of the data. This source can be external data provider or internal system of the data origin. The allowed values are internal and external. | String |

Data for sample [Scenario](#scenario): Set the following properties for the **profilecontexts** object:

| Property | Value |
|----------|-------|
| service | ENTITY_EXPORT |
| channel | UI |
| format | Excel |
| source | internal |

## clientState

This object indicates the user information who must be notified after the data download is completed.

| Property | Description | Type |
|----------|-------------|------|
| notificationInfo -> userId | Indicates the email address of the user to be notified. This email address must be suffixed with "_user". Example: test@riversand.com_user. | String |

This section also covers the following topic:
* [Export File Name Formats](api_exp_filename_format.html)