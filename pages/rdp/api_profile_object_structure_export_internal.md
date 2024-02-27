---
title: Profile Configuration Object Structure for Export Service
sidebar: rdp_sidebar
permalink: api_profile_object_structure_export.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

An Export object is for exporting the data from Riversand Platform to the downstream system. Riversand Platform (RDP) allows you to publish or download the entity data from RDP to offline environment in various data formats such as JSON and Excel through Export Services. These services make use of the profiles for all the export related operations. A profile object defines the mapping information between fields of the entity data and the fields of the exported data. It is in the form of configuration which details how the export must happen for this data.

This topic describes the profile object structure for an Export service using a sample scenario.

# Scenario

Consider you wish to create an export profile for exporting data from RDP to Kinesis. The following JSON demonstrates configuration for exporting data from Riversand Platform to kinesis with appropriate collect, publish, and transform details.

<pre><code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "scheduled_Kinesis_JSON_Export_Publish",
    "name": "scheduled_Kinesis_JSON_Export_Publish",
    "type": "integrationprofile",
    "data": {
      "contexts": [
        {
          "context": {
            "app": "RSConnect",
            "service": "ENTITY_EXPORT",
            "channel": "SCHEDULE_JOB",
            "format": "JSON",
            "source": "internal",
            "role": "admin",
            "user": "system",
            "subtype": "System"
          },
          "jsonData": {
            "integrationType": "System",
            "isEnabled": "true",
            "collect": {
              "isDataPersistent": "false",
              "channel": [
                {
                  "type": "genericObjectConnector",
                  "settings": {}
                }
              ],
              "format": {
                "type": "RSJSON",
                "settings": {
                  "additionalSettings": {
                    "encoding": "utf8"
                  }
                }
              },
              "filter": {
                "include": {},
                "exclude": {}
              }
            },
            "publish": {
              "isDataPersistent": "false",
              "channel": [
                {
                  "type": "folderConnector",
                  "settings": {
                    "sourceFolder": "",
                    "pattern": "*"
                  }
                }
              ],
              "format": {
                "type": "RSJSON",
                "batchSize": 100,
                "settings": {
                    "additionalSettings": {
                      "downloadExternalSource": true
                    }
                  }
              },
              "filter": {
                "include": {},
                "exclude": {}
              }
            },
            "transform": {
              "settings": {
                "nullRecordTransformer": "true"
              }
            }
          }
        }
      ]
    }
  }
}
</code></pre>

The Export profile configuration contains the following objects:

## configObjects

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates profile identifier in the format scheduled _<<Channel>>_<<Data Format>>_<<Type of Profile Operation>>_Publish.<br/>**Examples**: <br/>1\. For scheduled export of data from Riversand Platform to Kinesis, the id is defined as scheduled_Kinesis_JSON_Export_Publish. The other channels used are Amazon S3, Eventhub, Blob Store.<br/>2\. Excel Export - downloadDataExcel.<br/>3\. JSON export - downloadDataJSONJob.<br/>4\. DSV Export - downloadDataDSVJob.<br/>5\. Export profile reference list - entityModelDownload. In the export of reference list, the system sends the model template. No value or data is sent for download. | String | Yes |
| name | Indicates the name of the identifier for the export operation. There is no format defined for the name attribute. You can provide any relevant name. The id can also be used as the name attribute. | String | Yes | 
| type | Indicates the profile type that is always **integrationprofile**. | String | Yes |
| data | Indicates the type of data that is required to be exported. |[data](#data) | Yes |

## data

This object contains the context information. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| contexts | Indicates an array of contexts. A profile can have multiple contexts such as import profile and export profile contexts. | [contexts](#contexts) |

## contexts 

This object contains the context information. The following table lists the details of the contexts object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| context | Indicates the context such as service and channel through which the data must be exported. | [context](#context) | Yes |
| jsonData | Indicates the details of configuration in a valid JSON format. | [jsondata](#jsondata) | Yes |

## context

This object stores the actual entity data to be exported. The following table lists the details of contexts object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| app | Indicates the Distribution Service. This is the entry point when the user wants to distribute data from RDP. The allowed value is RSConnect. | String | Yes |
| service | Indicates the operation this profile performs. The allowed values are:<br/>ENTITY_EXPORT - Used for entity data export operation.<br/>MODEL_EXPORT - Used to export the Base, Instance, Taxonomy, Governance and Authorization models.<br/>MACRO_TEMPLATE - Used to configure the entity export excel template. Example: If you want to modify any setting in the template, then you can do so using the MACRO_TEMPLATE provided by Riversand Platform. | String | Yes |
| channel | Indicates the type of channel to which the data is transferred. The values are SCHEDULE_JOB, UI, JOB, Amazon S3, Amazon Kinesis. | String | Yes |
| format | Indicates the format of the data. The allowed values are JSON, Excel and DSV. | String | Yes |
| source | Indicates the source of the data. This source can be external data provider or internal system of the data origin. The allowed values are internal and external. | String | Yes |
| role | Indicates the role that is used by the profile. The only allowed value is admin. | String | Yes |
| user | Indicates the user that is used by the profile. The only allowed value is system. | String | Yes |
| subtype | Indicates the type of task a profile performs. The only allowed value is system. The only allowed value is system. | String | Yes |

The context Information is as follows for the scenario Create Export Profile:

| Property | Value | 
|----------|-------|
| app | RSConnect |
| service | ENTITY_EXPORT |
| channel | SCHEDULE_JOB |
| format | JSON |
| source | internal |
| role | admin |
| user | system |
| subtype | System|

## jsonData

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| integrationType | Indicates the integrationType that is always **system** as the integration occurs in the system | String | Yes |
| isEnabled | Indicates if the profile is enabled or disabled. By default, the value is true. | Boolean | Yes |
| collect | Indicates the channel through which data is collected, the format of the data and the filter criteria to be applied while collecting data. | [collect](#collect) | Yes |
| publish | Indicates the transformations, if any, that need to be done before publishing the data. | [publish](#publish) | Yes |
| transform | Indicates the channel to which data is to be published and the format of the data. | [transform](#transform) | Yes |

{% include callout.html content="**Notes:** 
* There is a seed profile configuration for every Integration type ( Import / Export), Standard data format Channel, and Task type ( Sync / Task / Schedule) combinations.
* Every seed profile has a naming convention such as sys_Integration Type_Object Type_Format_Task type_base. 
Example: sys_import_data_json_eventhub_task_base.
* The implementation team can choose to enrich a particular seed profile by creating a new (extension) profile with same profile context combination.
There can only be one extension profile for a corresponding seed profile
Implementation team must not have multiple extension profiles for a corresponding seed profile.
* The extension profile must adhere to the seed profile naming convention, starting with **customer** code as best practice; however it is not enforced. But the custom profile must not have the same name as base profile or in other words, it must not start with sys or end with base. The custom profile must also follow the preferred naming convention: 
customer_Integration Type_Object Type_Format_Channel_Task type.
" type="primary" %}

## Collect

Collect is the service responsible for collecting data from the source. When the source is an external system, the system is performing content onboarding (or import). When the source is Riversand Platform, the system is performing content distribution (or export). 

In order to collect data from source, the following aspects must be defined:

* [channel (Collect)](#channel-collect): Defines movement of data from RDP to downstream system. Example: rdpConnector, genericObjectConnector.
* [format (Collect)](#format-collect): Defines the format of the data expected from RDP. Example: JSON, Excel, DSV.
* [filter (Collect)](#filter-collect): Defines the types of entities, attributes, relationships expected from RDP.

### isDataPersistent

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| isDataPersistent | Indicates if data must be persisted or not. **isDataPersistent** object is **false** for collect operation for Export service as Riversand Platform has data in it. There is no requirement to persist the data. This property can persist data only upto 64 MB. | Boolean | No |
| isBinaryStreamPersistent | Indicates if data must be persisted or not. **isBinaryStreamPersistent** is **false** for collect operation for Export service as Riversand Platform has data in it. There is no requirement to persist the data. This property does not have any restriction on the size of the data and can be defined only when the size of the data is huge. | Boolean | No |

### channel (Collect)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| type | Indicates the type of channel through which the data is exported. Since the values are exported from the system, the channels are always rdpConnector, genericObjectConnector. See [Out-of-the-box (OOTB) System Profiles and Connectors](api_profile_ootb.html), for more details on these connectors and its configuration. | String | Yes |

**genericObjectConnector** is used as a channel for exporting the data from Riversand Platform to Kinesis. This connector internally calls the Riversand Platform connector (rdpConnector) for further processing.

{% include callout.html content="**Note:** The rdp connector improves the performance of both Riversand Platform and the downstream system. Consider an example where data is exported to the downstream system. After every updates to an entity, the data is exported to the downstream system multiple times. This results in huge pile of data in the downstream system. To avoid this, rdpConnector consolidates all the updates and sends a single file to the downstream system. If there are any additional updates for an entity, then it is moved in the next schedule of export.
" type="primary" %}

There are additional sub-objects passed under **channel** object as mentioned below:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| settings -> includeParent | This flag exports all the parent entities if set to true. By default, it is false. If you wish to export parent details, then it is recommended that you use includeRelatedEntities flag. | Boolean | No |
| settings -> includeRelatedEntities | This flag exports all related entities upto 1 level if set to true. Example: For 'SKU' and 'product' relationship, if SKU is exported it exports product as well. By default, it is false. | Boolean | No |
| settings -> includeRelatedEntitiesRecursive | This flag exports all related entities upto n'th level if set to true. By default, it is false. Example: If 'SKU' is related to a 'product' and 'product' is related to a 'bundle', then if SKU is exported, it exports product and bundle as well. | Boolean | No |
| settings -> includeRelatedEntityExternalIds | This flag exports all the matching attributes of the related entities if set to true. By default, it is false. | Boolean | No |
| settings -> includeMatchingAttributes | This flag exports all the matching attributes of the current entity if set to true. By default, it is false. | Boolean | No |
| settings -> includeEnhancerAttributes | This flag exports all the primary context of an entity if set to true. By default, it is false. | Boolean | No |
| additional settings -> supportEmptyContextsRequest | This flag allows you to define what needs to be downloaded if set to true. **For Example**: You can select Vendor Price during download that downloads the associated MDMID and SKU name along with Vendor Price attributes. By default, it is false. | Boolean | No |
| additional settings -> isGetCoalesce | By default, this value is false. When set to true, then API processes the request to coalesce the data. | Boolean | No |

### format (Collect)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| type | Indicates the file format - RSJSON, Excel, DSV. | String | Yes |
| settings | Indicates file specific settings such as encoding format. The only allowed value is utf8. | String | Yes |
| settings -> loadDynamicContext | Indicates if context must be calculated at run-time or not. If set to true, then the context is calculated based on the context model defined at the domain level; otherwise, the self-context attributes are exported. | Boolean | Yes |
| settings -> supportEmptyContextsRequest | This is set to true if export requires self-context attributes and false if export requires additional attributes along with self-context attributes. | Boolean | Yes |

### filter (Collect)

| Property | Description | Required |
|----------|-------------|----------|
| include | Indicates filter criteria to include certain data. It can be attributes like mdmid, mdmname, itemtype. If no value is specified, it includes all the fields. | No |
| exclude | Indicates filter criteria to exclude certain data especially confidential data. It can be relationships, attributes. If no value is specified, then none of the field is excluded. | No |

## Publish

Publish is the service responsible for sending data to the target. When the target is Riversand Platform, the system is performing content onboarding (or import). When the source is an external system, the system is performing content distribution (or export).

In order to publish data to the target, the following aspects must be defined: 

* [channel (Publish)](#channel-publish): Defines movement of data from RDP (where the data has been transformed based on the target specifications) to the downstream system. Example: folderConnector, presentationConnector. See [Out-of-the-box (OOTB) System Profiles and Connectors](api_profile_ootb.html), for more details on different types of connectors and its configuration.
* [format (Publish)](#format-publish): Defines the format of the data to be sent to the downstream system. Example: JSON, Excel, DSV.
* [filter (Publish)](#filter-publish): Defines the types of entities, attributes, relationships that needs to be published to the downstream system.

### isDataPersistent (Publish)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| isDataPersistent | Indicates if data should be persisted or not. **isDataPersistent** is true for Publish for an Export service as data is exported to the downstream system and there is a requirement to persist the data in Riversand Platform so that the you can directly download from Riversand Platform as on need basis. This property can persist data only upto 64 MB. | Boolean | No |
| isBinaryStreamPersistent | Indicates if data must be persisted or not. **isBinaryStreamPersistent** is true for an Export service as data is exported to the downstream system and there is a requirement to persist the data in Riversand Platform so that the you can directly download from Riversand Platform as on need basis. This property does not have any restriction on the size of the data and can be defined only when the size of the data is huge. | Boolean | No |

### channel (Publish)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| type | Indicates the channel or medium through which data is exported from Riversand Platform to the downstream system.<br/>Values for channel object are:<br/>1\. folderConnector - Used to export the data from Riversand Platform to a particular folder in the downstream system.<br/>2\. presentationConnector - Used to present the data to the UI. | String | Yes |
| settings -> sourceFolder | Indicates the path or location in the downstream stream system where the data has to be exported from Riversand Platform. | String | Yes |
| settings -> pattern | Indicates the type of file that needs to be exported. If '*' is specified, then system considers all the files to be exported. | String | Yes |

### format (Publish)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| type | Indicates the file format - RSJSON, Excel, DSV. | String | Yes |
| batchsize | Indicates how many records are passed in each batch. If **batchsize** value is set to 100, then each file has 100 records of data. | Integer | Yes |
| settings -> additional settings -> inheritedValueAsToolTip | Indicates if tooltip is required in the excel. The coalesced values are shown as tooltip. If you require the value in the cell instead of tooltip, then set **inheritedValueAsToolTip** as false. This can cause data corruption if the same file is imported again. | Boolean | Yes |

The following table lists few more additional settings:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| settings -> additional settings -> isLocalizationEnabled | Indicates if localization is enabled for a particular location. Example: en-US | Boolean | Yes |
| settings -> additional settings -> maxReferenceDropDownList | Indicates the maximum number of list to be shown in the dropdown in an excel. If **maxReferenceDropDownList** is less than or equal to **2500**, only then the values are displayed in the dropdown in the downloaded excel sheet. If **maxReferenceDropDownList** is greater than **2500**, then the system displays as a freetext where you can enter the value. | Integer | Yes |
| settings -> additional settings -> downloadExternalSource | Indicates if the external source column must to be added or not in the Excel. This property is considered only when the input format is Excel. By default, the value is false. | Boolean | No |

### filter (Publish)

| Property | Description | Required |
|----------|-------------|----------|
| include | Indicates filter criteria to include certain data. It can be attributes like mdmid, mdmname, itemtype. If no value is specified, it includes all the fields. | No |
| exclude | Indicates filter criteria to exclude certain data especially confidential data. It can be relationships, attributes. If no value is specified, then none of the field is excluded. | No |

### DSV Export (Publish)

In **publish** section, you can specify the following details required for DSV export:

### format (Publish - DSV Export)

Format indicates the properties of DSV file format in which the data is published.

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| type | Indicates the file format - DSV. | String | Yes |
| settings -> encoding | Indicates file specific settings such as encoding format. The only allowed value is utf8. | String | Yes |
| settings -> isLocalizationEnabled | Indicates if localization is enabled for a particular location. Example: en-US | Boolean | Yes |

#### dsvSettings (Publish)

{% include snippets/dsvSettings.md %}

{:start="2"}

{% include callout.html content="**Note:** The size of the file is less in DSV format when compared to that of excel. Hence it is recommended to use DSV format. 
" type="primary" %}

#### additionalSettings (Publish) 

{% include snippets/dsvadditionalSettings.md %}

## Transform

Transform is the service responsible for transforming the data from source end-point format to the format specified by the target end-point. During exports, it transforms the data from Riversand JSON format (the standard manner to store data in RDP) to the target end-point format, such as Excel, XML, text. During imports, it transforms the data from the source end-point format, such as Excel, XML, text, to the Riversand JSON format (the format in which data is persisted in RDP).

The following lists the settings and strategies details:

| Property | Description | Required |
|----------|-------------|----------|
| settings | Indicates the transformation settings to be applied before publishing the data; mapping of data. By default, it is false. | String | No |
| settings -> nullRecordTransformer | This parameter when set to **true** indicates that the data is transformed as is and sent to the outbound rdpConnector in the same form that you asks for. This indicates the way of publishing the data. Specify **false** for this parameter to prevent exporting attributes not present in the manage model of the entity. By default, it is false. | Boolean | No |
| settings -> entitytype | Indicates the type of entity. Example: Product, SKU, Bundle. This value is represented as 'entitytype: @field(type)'. | String | Yes |
| settings -> enableDynamicMapping | Indicates if the data model such as Entity Manage Model from Riversand is required to be mapped to the data required by the downstream system. If set to true, then this value enables the mapping. By default, the value is false | Boolean | No
| settings -> allowNullValues | Indicates the value to be passed in the excel. If there is no value present in the cell in an excel, then the value is passed as null "" to Riversand Platform. In this case, this attribute value is passed as false. | Boolean | No

### strategies (Transform)

| Property | Description |
|----------|-------------|
| strategies | Indicates how data must be presented (desired data format) after export. | [strategies](#strategies) |

#### strategies

| Property | Description | Required |
|----------|-------------|----------|
| useExternalName | Indicates the external name used for the Entity type instead of MDMID. By default, it is false. | String | No |
| caseformat | Indicates the case format of the data. It can be none, lowercase or uppercase. By default, it is false and considers as none. | String | No |
| removespecialcharacters | Indicates if special characters are required to be removed. By default, it is false. | Boolean | No |
| removewhitespace | Indicates if white spaces are required to be removed. By default, it is false. | Boolean | No |
| trimLeadingNumbers | Indicates if leading numbers in any attribute needs to be trimmed. By default, it is false. | Boolean | No |
| trimTrailingNumbers | Indicates if trailing numbers in any attribute needs to be trimmed. By default, it is false. | Boolean | No |