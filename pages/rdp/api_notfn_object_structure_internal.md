---
title: Notification Object Structure
sidebar: rdp_sidebar
permalink: api_notfn_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

A notification object in Riversand Platform is a JSON structure that details about the notification configuration parameters and the attributes for which the email notification is applicable. Broadly, a notification object contains the following sub-objects:

* [params](#params): Contains information regarding notification parameters.
* [notificationObject](#notificationObject): Contains all the required information of the notification.
* [properties](#properties): Contains the audit information such as createdBy and modifiedBy.
* [data](#data): Contains an array of [attributes](#attributes).

This topic describes how the notification object is structured for using sendemail API with the help of a scenario. 

{% include callout.html content="**Note**: The sendemail API can be used by any  service in Riversand Platform.
" type="primary" %}

## Scenario

The following example demonstrates the sample JSON format to send notification related to an entity. 

<pre><code>
POST **{TenantURL or ID}/api/notificationservice/sendemail**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "emailParams": {
      "to": [
        "john@riversand.com",
        "mary-jane@riversand.com"
      ],
      "subject": "This is regarding the entity",
      "body": "This is about the following entity",
      }
  },
  "notificationObject": {
    "id": "E01",
    "name": "E01",
    "type": "sku",
    "properties": {
      "source": "internal",
      "createdByService": "entityservice",
      "createdBy": "Miriam Pott",
      "modifiedByService": "entityservice"
    },
    "data": {
      "attributes": {
        "color": {
          "values": [
            {
              "value": "blue",
              "source": "SAP",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

The following section describes the properties of the notification object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [sample scenario](#scenario).

## params

This object contains information regarding the **emailParams** object.

## emailParams

This object contains information regarding the users to whom the email notification must be sent, subject, subject template, body, and body template.
The following table lists the details of the parameters object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| to | Indicates a comma-separated list of email recipients | String | Yes |
| subject | Indicates the email subject | String | No |
| subjecttemplate | Allows content generation based on the data object of interest. Example: An entity, a task summary object | String | No |
| body | Indicates the email body | String. | No |
| bodytemplate | Indicates the body template. Allows content generation based on the data object of interest. Example: An entity, a task summary object. | String | No |

{% include callout.html content="**Notes**: 
* If both subject and subject template are specified, then subject template takes precedence over subject, which implies that email is sent with the subject template.
* If both body and body template are specified, then body template takes precedence over body, which implies that the email is sent with the body template.
* Either subject or subject template can be blank, and either body or body template can be blank.
* The content generated subject line or body content of the email may have static text and content generated text. Content generation can be done using content generation keywords. 
" type="primary" %}

Data for sample [Scenario](#scenario): Set the following properties for the **emailParams** object:

| Property | Value | 
|----------|-------------|
| to | john@riversand.com, mary-jane@riversand.com |
| subject | This is regarding the entity |
| body | This is about the following entity |

## notificationObject 

This object is the parent container that holds all the required information about the notification object. The following table lists the details of the notification object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates the unique identifier of the data object for which notification must be sent. Id is alpha-numeric with a maximum length of 128 characters. | String | Yes |
| name | Indicates the name of the data object. Name can contain underscore(_), spaces, and alpha-numeric with a maximum length of 256 characters. Name can be duplicate. | String | Yes |
| version | Indicates the notification version. | String | No |
| type | Indicates the type of the data object. In this case it is sku. If you would like email on tasksummary object, then type must be tasksummary. | String | Yes |

Data for sample [Scenario](#scenario): Set the following properties for **config** object:

| Property | Description | 
|----------|-------------|
| id | E01 |
| name | E01 |
| type | sku |

The following sections describe how to set the values for [properties](#properties) and [data](#data) objects.

## properties  

This object stores the audit information of an notification object such as createdBy and modifiedBy. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| source | Indicates the source of the data. This source can be external data providers or internal systems of the data origin. This property serves as the default source for all the data elements, unless explicitly specified at the element level. | String | No | 
| createdByService | Indicates the name of the service that created this object. | String | No |
| createdBy | Indicates the user who created this object. | String | No |
| createdDate | Indicates the date and time when the object was created. | String | No |
| modifiedByService | Indicates the name of the service that was used to last update this object. | String | No |
| modifiedBy | Indicates the user who last updated the object. | String | No |
| modifiedDate | Indicates the date and time when the object was last updated. | String | No |

Data for sample [Scenario](#scenario): Set the following properties for the **properties** object:

| Property | Value | 
|----------|-------|
| source | internal |
| createdByService | entityService |
| createdBy | Miriam Pott |
| modifiedByService | entityService |

## data  

This object contains the attributes object, which specify details of the attribute of an entity.

## attributes

The following table lists the details of the attribute object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| <<AttrName>> -> values | Indicates a collection of [values](#values) objects that contains the attribute value and additional contextual information about the value. This is typically referred to as Simple Attributes.| List of [values](#values) objects| Yes |

### values 

This object contains the values of the simple, nested, and relationship attributes of an entity. The following table lists the details of the values object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| value | Indicates the actual attribute value. | String  | Yes |
| source | Indicates the source of attribute value. | String  | Yes |
| locale | Indicates the locale for the attribute value. | String | Yes |

Data for sample [Scenario](#scenario): 

| Property | Value | 
|----------|-------------|
| <<AttrName>> -> values -> [{value, source, locale}] | color -> values -> [{blue, SAP, en-US}] |