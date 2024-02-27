---
title: Profile Configuration Object Structure for Import Service
sidebar: rdp_sidebar
permalink: api_profile_object_structure_import.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

An Import object is for importing the data into RDP from an upstream system. Riversand Platform (RDP) allows you to upload or transform the customer offline data to RDP through Import Services. Through these import services, you can upload the content from different sources into RDP. These services make use of the profiles for all the import related operations. A profile object defines the mapping information between fields of the entity data and the fields of the imported data. It is in the form of configuration that details how the import must occur for this data. 

This topic describes the profile object structure for an Entity Import service using a sample scenario.

# Scenario

Consider you wish to create an import profile for importing data to RDP from Kinesis. The following JSON demonstrates configuration for importing data to Riversand Platform from Kinesis with appropriate collect, publish, and transform details:

<pre><code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "id": "Kinesis_JSON_Import_Process",
  "name": "Kinesis_JSON_Import_Process",
  "type": "integrationprofile",
  "data": {
    "contexts": [
      {
        "context": {
          "app": "RSConnect",
          "service": "ENTITY_IMPORT",
          "channel": "Kinesis",
          "format": "JSON",
          "source": "internal",
          "role": "admin",
          "user": "system",
          "subtype": "System",
        },
        "jsonData": {
          "integrationType": "System",
          "isEnabled": "true",
          "collect": {
            "isDataPersistent": "true",
            "channel": [
              {
                "type": "kinesisStreamConnector",
                "credentialsType": "{{AWSCREDENTIALSTYPE}}",
                "settings": {
                  "streamName": "{{ENVNAME}}-{{TENANT}}-import",
                  "regionName": "{{AWSREGIONNAME}}",
                  "accessId": "{{AWSKINESISACCESSID}}",
                  "secretKey": "{{AWSKINESISSECRETKEY}}",
                  "ec2IAMRole": "{{AMAZON_EC2_IAMROLE}}"
                }
              }
            ],
            "format": {
              "type": "RSJSON",
              "settings": {
                "additionalSettings": {
                  "encoding": "utf8",
                  "dateTimeFormat": "yyyy-MM-dd",
                  "replaceValues": true
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
                "type": "rdpConnector",
                "settings": {
                  "type": "RSJSON",
                  "requestforvaluemapping": "true"
                }
              }
            ],
            "format": {
              "type": "RSJSON",
              "batchSize": 1,
              "settings": {
                "additionalSettings": {
                  "encoding": "utf8",
                  "dateTimeFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"             
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
</code></pre>

The Import profile configuration contains the following objects:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates profile identifier in the format - **<<Channel Name>>_<<Data Format>><<Type of Profile Operation>>_Process**. <br/>Example: Kinesis_JSON_Import_Process. Note that for importing binary object into RDP, the channel name must be prefixed with **binaryobject**. Example: binaryobject_Eventhub_JSON_Import_Process | String | Yes |
| name | Indicates the name defined and provided by the upstream system. There is no format defined for the name attribute. You can provide any relevant name. The id can also be used as the name attribute. | String | Yes | 
| type | Indicates the profile type. For Export and Import operation, the type is always **integrationprofile**. | String | Yes |
| migration | Indicates if the profile must be used for migration or not. You can refer [Migration](/{{site.data.rdp_links_version.APP}}/rdp_feature_migration_data.html){:target="_blank"} for more information. | Boolean | No |
| data | Indicates the context and mapping information between fields of the entity data and the fields of the imported data. |[data](#data) | Yes |

## data

The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| contexts | Indicates an array of contexts. A profile can have multiple contexts such as import profile and export profile contexts. | [contexts](#contexts) |

## contexts 

This object contains the context information. The following table lists the details of the contexts object:

| Property | Description | Type | 
|----------|-------------|------|
| context | Indicates the context such as service and channel from which the data must be imported. | [context](#context) |
| jsonData | This object contains the details of collect, publish, and transform configuration in a valid JSON format. |[jsondata](#jsondata) |

## context

This object stores the configuration information based on which the corresponding profile is fetched internally. The context information should be unique across the system. 
The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------------|----------|
| app | Indicates the Onboarding Service. This is the entry point when the user wants to onboard data into RDP. The allowed value is RSConnect. | String | Yes |
| service | Indicates the operation this profile performs.<br/>The allowed values are: <br/>ENTITY_IMPORT - Indicates entity data import operation.<br/>MODEL_TEMPLATE - Indicates the entity model import operation.<br/>MODEL_IMPORT - Indicates the model import operation. Example: Base, Taxonomy, Authorization, Governance models.<br/>BULK_LOAD - Indicates the bulk operation of importing data. | String | Yes |
| channel | Indicates the channel from where the profile reads data. The allowed values are S3, Kinesis, and UI. | String | Yes |
| format | Indicates the source format of the profile. The allowed values are JSON and Excel. | String | Yes |
| source | Indicates the source of the data. This source can be external data provider or internal system of the data origin. The allowed values are internal and external. | String | Yes |
| role | Indicates the role that is used by the import profile. The only allowed value is admin. | String | Yes
| user | Indicates the user that is used by the import profile. The only allowed user is system. | String | Yes |
| subtype | Indicates the type of task a profile performs. Currently, the only allowed value is system. | String | No |

The context Information is as follows for a Create Import Profile scenario.

| Property | Value | 
|----------|-------|
| app | RSConnect |
| service | ENTITY_IMPORT |
| channel | Kinesis |
| format | JSON |
| source | internal |
| role | admin |
| user | system |
| subtype | System|

## jsonData

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| integrationType | Indicated the integrationType which is always **system** as the integration occurs in the system | String | Yes |
| isEnabled | Indicates if the profile is enabled or disabled. By default, the value is true. Example: Consider a scenario for creating import profile for migration. After the import operation completes, the isEnabled attribute can be set to false so that the profile is not misused for any other purpose. | Boolean | Yes |
| collect | Indicates the channel through which data is collected, the format of the data and the filter criteria to be applied while collecting data. | [collect](#collect) | Yes |
| publish | Indicates the channel to which data is to be published and the format of the data. | [publish](#publish) | Yes |
| transform | Indicates the transformations, if any, that need to be done before publishing the data. | [transform](#transform) | Yes |

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

## collect

Collect is the service responsible for collecting data from the source. When the source is an external system, the system is performing content onboarding (or import). When the source is Riversand Platform, the system is performing content distribution (or export). 

In order to collect data from source, the following aspects must be defined:

* [channel (Collect)](#channel-collect): Defines movement of data from source end-point to a temporary data store. Example: File folder, HTTP connector, Amazon S3 bucket.
* [format (Collect)](#format-collect): Defines the format of the data expected from the source end-point. Example: JSON, Excel, text.
* [filter (Collect)](#filter-collect): Defines the types of entities, attributes, relationships expected from the source end-point. 

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| isDataPersistent | Indicates if data must be persisted or not. The data can be collected into Riversand Platform and used immediately for processing into the next stage avoiding any waiting time. This property can persist data only upto 64 MB. By default, the value is false. | Boolean | No |
| isBinaryStreamPersistent | Indicates if data must be persisted or not. The data can be collected into Riversand Platform and used immediately for processing into the next stage avoiding any waiting time. This property does not have any restriction on the size of the incoming data and can be defined only when the size of the data is huge. By default, the value is false. | Boolean | No |

{% include callout.html content="**Note:** For creating an Import Profile for Migration or for importing image from a URL, **isDataPersistent** value is set to **false** to avoid the internal processing of data. The process of keeping a local copy in RDP consumes time and delays the further processing of the collected data.
" type="primary" %}

### channel (Collect)

**channel** is the medium through which the data is brought into RDP from the upstream system. 

| Property | Description | Type |
|----------|-----------------------|----------|
| type | Indicates the type of channel through which data is imported into Riversand Platform such as kinesisStreamConnector, eventHubConnector and httpconnector. See [Out-of-the-box (OOTB) System Profiles and Connectors](api_profile_ootb.html), for more details on different types of connectors and its configuration. | String |
| settings - additional settings  | Indicates additional details about encoding, date and time format for collecting data. | [additional settings (collect)](#additional-settings-collect) |

### additional settings (collect)

| Property | Description | Type | Required |
|----------|-----------------------|----------|----------|
| encoding | Indicates the format in which the data is encoded. The only allowed value is utf8. | String | Yes |
| dateTimeFormat | Specifies the date and time that is provided by the upstream system in yyyy-mm-dd. | Integer | Yes |
|replaceValues | Specified if the original values needs to be replaced. By default, it is false. If it is set as true, then the system follows flush and fill process where it deletes the original values and replaces with new incoming values. | Boolean | No |

### format (Collect)

| Property | Description | Type |
|----------|-------------|------|
| type | Indicates the format in which data is to be imported. The values are RSJSON, IMAGE, RSBOJSON | String |

### filter (Collect)

| Property | Description | Required |
|----------|-------------|----------|
| include | Indicates filter criteria to include certain data. It can be attributes such as mdmid, mdmname, itemtype. If no value is specified, then the system includes all the fields. | No |
| exclude | Indicates filter criteria to exclude certain data, especially confidential data. It can be relationships, attributes. If no value is specified, then none of the field is excluded. | No |

## Publish

Publish is the service responsible for sending data to the target. When the target is Riversand Platform, the system is performing content onboarding (or import). When the source is an external system, the system is performing content distribution (or export).

In order to publish data to the target, the following aspects must be defined: 

*  [channel (Publish)](#channel-publish): Defines movement of data from the temporary data store (where the data has been transformed based on the target specifications) to the target end-point. Example: File folder, HTTP connector, Amazon S3 bucket.
* [format (Publish)](#format-publish): Defines the format of the data expected by the target end-point. Example: JSON, Excel, text.
* [filter (Publish)](#filter-publish): Defines the types of entities, attributes, relationships that needs to be published to the target end-point.

| Property | Description | Type | Required |
|----------|-----------------------|----------|----------|
| isDataPersistent | Indicates if data must be persisted or not. **isDataPersistent** is false for Publish for an Import service as data is transferred to the downstream system in an accurate and refined manner; there is no requirement to preserve the data as Riversand Platform has the data intact in it. This property can persist data only upto 64 MB. | Boolean | No |
| isBinaryStreamPersistent | Indicates if data must be persisted or not. This property does not have any restriction on the size of the data that is transferred to the downstream system and can be defined only when the size of the data is huge. By default, the value is false. | Boolean | No |

## DSV Import (Collect)

In **collect** section, you can specify the following details for DSV import:

### format (Collect - DSV Import)

Indicates the details of DSV file format which is collected.

#### dsvSettings (Collect)

{% include snippets/dsvSettings.md %}

{:start="2"}

{% include callout.html content="**Note:** The size of the file is less in DSV format when compared to that of excel. Hence it is recommended to use DSV format. 
" type="primary" %}

### channel (Publish)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| type | Indicates the type of channel through which the data is published. This is an internal connector in Riversand Platform to which the refined data is sent to.<br/>The values are:<br/>"type": "rdpConnector" - Used to publish the data in RSJSON format from Riversand Platform.<br/>"type": "azureBlobStorage" - Used to publish the images to Riversand Platform in the event where the images were initially downloaded from URL. In this case, Riversand Platform downloads the images from a URL and places it in Blob Storage for further processing. | String | Yes |
| settings | Indicates additional details such as format to be exported for publishing data through a channel. | [settings (Channel-Publish)](#settings-channel-publish) | Yes |

#### settings (Channel-Publish)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| type | Indicates the format in the data is exported. The allowed value is RSJSON. | String | Yes |
| requestforvaluemapping | Indicates if the field mapping is required to be performed for the incoming data. By default, this value is false. | Boolean | No |

### format (Publish)

| Property | Description | Type | Required |
|----------|-----------------------|----------|
| type | Indicates the format in which data is to be published. The values are RSJSON, IMAGE. | String | Yes |
| batchsize | Indicates how many records are passed in each batch. If **batchsize** value is set to 100, then each file has 100 records of data. | Integer | Yes |
| settings - additional settings  | Indicates additional details about encoding, date and time format for collecting data. | [additional settings (publish)](#additional-settings-publish) |

### additional settings (publish)

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| encoding | Indicates the format in which the data is encoded. By default it is utf8. | String | Yes |
| dateTimeFormat | Specifies the date and time that is provided by the upstream system in yyy-mm-dd HH:mm:ss format. The system converts this into UTC format that is yyyy-MM-dd'T'HH:mm:ss.SSSZ. 'T' is a literal to separate the date from the time and 'Z' means "zero hour offset" also known as "Zulu time" (UTC). | Integer | Yes |


### filter (publish)

| Property | Description | Required |
|----------|-------------|----------|
| include | Indicates filter criteria to include certain data. It can be attributes such as mdmid, mdmname, itemtype. If no value is specified, it includes all the fields. | No |
| exclude | Indicates filter criteria to exclude certain data, especially confidential data. It can be relationships, attributes. If no value is specified, then none of the field is excluded. | No |

## Transform

Transform is the service responsible for transforming the data from source end-point format to the format specified by the target end-point. During exports, it transforms the data from Riversand JSON format (the standard manner to store data in RDP) to the target end-point format, such as Excel, XML, text. During imports, it transforms the data from the source end-point format, such as Excel, XML, text, to the Riversand JSON format (the format in which data is persisted in RDP). The following settings are used to perform the transform logic:

* **Field Mapping** Settings between source and destination fields.
* **Strategies** to perform the mapping.
* Any manual **overrides** to the default strategy.

Typically, nullRecordTransformer is used during migration.

| Property | Description | Required |
|----------|-------------|----------|
| **nullRecordTransformer** | Indicates that the data is transformed as is and sent to the outbound rdpConnector in the same form that you asks for. This object indicates the way of publishing the data. | Boolean | Yes |

Consider that you are importing data in DSV format to Riversand Platform. The following JSON demonstrates a sample transform section in import profile:

<pre><code>
{
  "transform": {
    "settings": {
      "entityType": "@field(type)",
      "enableDynamicMapping": "true",
      "source": "internal",
      "collectionSeparator": "||",
      "clearMissingAttributes": "false",
      "strategies": [
        {
          "useExternalName": "true",
          "caseFormat": "NONE",
          "removeSpecialCharacters": "false",
          "removeWhitespace": "false",
          "trimLeadingNumbers": "false",
          "trimTrailingNumbers": "false"
          }
      ]
    }
  }
}
</code></pre>

### settings (Transform)

| Property | Description | Required |
|----------|-------------|----------|
| entitytype | Indicates the type of entity. Example: Product, SKU, Bundle. This value is represented as 'entitytype: @field(type)'. The "type" represents a column in the source data. | String | Yes |
| enableDynamicMapping | Indicates if context mapping is enabled or not. By default, the value is false | Boolean | No |
| source | Indicates from where the data is originating. The only allowed value is internal. | Boolean | Yes
| collectionSeparator | Indicates the value separator for collection type values. This property is the separator used to split collection records. By default, it will be a single value. | String | No |
| clearMissingAttributes | Indicates if the attributes in the incoming data load has any missing attribute and is required to be cleared. If set to true, it will look for all the attributes with "Attribute Group name" same as "Source" and if any of those attributes are not available in the incoming data payload, those attributes will be marked for DELETE to RDP. By Default, it is false. | Boolean | No |
   
### strategies 

| Property | Description |
|----------|-------------|
| strategies | Indicates how the data must be presented (desired data format) to RDP after import. in the desired format. | [strategies](#strategies) |

#### strategies

| Property | Description | Required |
|----------|-------------|----------|
| useExternalName | Indicates the external name used for the Entity type instead of MDMID. By default, it is false. | String | No |
| caseformat | Indicates the case format of the data. It can be none, lowercase or uppercase. By default, it is false. | String | No |
| removespecialcharacters | Indicates if special characters are required to be removed. By default, it is false. | Boolean | No |
| removewhitespace | Indicates if white spaces are required to be removed. By default, it is false. | Boolean | No |
| trimLeadingNumbers | Indicates if leading numbers in any attribute needs to be trimmed. By default, it is false. | Boolean | No |
| trimTrailingNumbers | Indicates if trailing numbers in any attribute needs to be trimmed. By default, it is false. | Boolean | No |

## Uploading the Tenant Seed to Riversand Platform

The following metainfo configuration must be mentioned in the start of API request body only when the data in the upstream system is uploaded as a ZIP file. This information is required when the data is uploaded through tenant seed that is available as an option in User Interface.

<pre><code>
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  }
}
</code></pre>