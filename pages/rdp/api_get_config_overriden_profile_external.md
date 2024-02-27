---
title: Get the Details of Integration Profiles with same Context
sidebar: rdp_sidebar
permalink: api_get_config_overriden_profile.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides several OOTB system or base profiles for content onboarding and content distribution. The base profile is overridden or extended to create a new profile with the same context information as the base profile.

This topic describes to you how to get the details of the base profile and its respective extended profiles, which has same context as the base profile using the RESTful API **{{site.data.rdp_glossary.getconfig}}**.

## Scenario

Get the details of the integration profiles with same context.

Follow the below steps to get the details of the profiles with same context:

* [Get the Context Details of a Base Profile](#get-the-context-details-of-a-base-profile)
* [Get the Profiles Details with same Context](#get-the-profiles-details-with-same-context)

## Get the Context Details of a Base Profile

{% include snippets/header.html %}

### Request

To get the context details of a base profile, use the REST API {TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get. In the request, send the following details:
  
* **query -> Id**: Specify the base profile ID. You can also specify the name of the profile under 'query -> name'. 
* **contexts -> app**: Specify the app name. In the below JSON, the "app" is specified as "RSConnect".
* **filters -> typesCriterion**: Specify the "typesCriterion" as "integrationprofile".

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get**
Headers: Content-Type: application/json
Body:
{
 "params": {

        "query": {

             <span style="background-color: #FFFF00">"id": "sys_export_data_excel_ui_task_base",</span>

            "contexts": [

                {

                    <span style="background-color: #FFFF00">"app": "RSConnect"</span>

                }

            ],

            "filters": {

                "typesCriterion": [

                    <span style="background-color: #FFFF00">"integrationprofile"</span>

                ],

                "excludeNonContextual": true

            }

        },

        "fields": {

            "attributes": [

                "_ALL"

            ]

        }

    }

}
</code>
</pre> 

### Response

In the below response, you can check the context details of the specific base profile.

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "requestId": "e366b8cb-06f0-44a5-8988-36191f1e7672",
        "maxRecords": 2000,
        "taskId": "e366b8cb-06f0-44a5-8988-36191f1e7672"
    },
    "response": {
        "configObjects": [
            {
                "id": "sys_export_data_excel_ui_task_base",
                "name": "Base export Excel data",
                "type": "integrationprofile",
                "properties": {
                    "createdService": "configurationManageService",
                    "createdBy": "system_user",
                    "modifiedService": "configurationManageService",
                    "modifiedBy": "system_user",
                    "createdDate": "2021-12-07T22:06:30.288-0600",
                    "modifiedDate": "2021-12-07T22:06:30.288-0600"
                },
                "data": {
                    "contexts": [
                        {
                            <span style="background-color: #FFFF00">"context": { </span>
                                "app": "RSConnect",
                                "channel": "JOB",
                                "format": "Excel",
                                "order": "10",
                                "role": "admin",
                                "service": "ENTITY_EXPORT",
                                "source": "internal",
                                "subtype": "User",
                                "user": "system"
                            }
                        }
                    ]
                }
            }
        ],
        "status": "success",
        "totalRecords": 1
    }
}
</code>
</pre>

## Get the Profiles Details with same Context

### Request

To get the details of the profiles based on the context , use the REST API {TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get. In the request send the following details:
  
* **query -> contexts**: Specify the context details that you retrieved. 
* **filters -> typesCriterion**: Specify the "typesCriterion" as "integrationprofile".

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get**
Headers: Content-Type: application/json
Body:
{

    "params": {

        "query": {

            <span style="background-color: #FFFF00">"contexts": [</span>

                {

                    "app": "RSConnect",

                    "channel": "JOB",

                    "format": "Excel",

                    "order": "10",

                    "role": "admin",

                    "service": "ENTITY_EXPORT",

                    "source": "internal",

                    "subtype": "User",

                    "user": "system"

                }

            ],

            "filters": {

                "typesCriterion": [

                    <span style="background-color: #FFFF00">"integrationprofile"</span>

                ],

                "excludeNonContextual": true

            }

        },

        "fields": {

            "attributes": [

                "_ALL"

            ]

        }

    }

}
</code>
</pre> 

### Response

In the below response, you can check the details of the base and extended profiles, which have the same context.  The following parameters help you identify the difference between the base and extended profile:

* **profileType**: The "profileType" is specified as "extended" for an extended profile. Whereas for base profile, the "profileType" is specified as "base".
* **extendedBaseProfileName**: Specifies the base profile name. This parameter is available only for the extended profile.

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "requestId": "534227f7-68f4-4bea-bc1b-a698e5ee30ca",
        "maxRecords": 2000,
        "taskId": "534227f7-68f4-4bea-bc1b-a698e5ee30ca"
    },
    "response": {
        "configObjects": [
            {
                "id": "export_data_excel_ui_task",
                "name": "export_data_excel_ui_task",
                "type": "integrationprofile",
                "data": {
                    "contexts": [
                        {
                            "context": {
                                "app": "RSConnect",
                                "channel": "JOB",
                                "format": "Excel",
                                "order": "10",
                                "role": "admin",
                                "service": "ENTITY_EXPORT",
                                "source": "internal",
                                "subtype": "User",
                                "user": "system"
                            },
                            "jsonData": {
                                <span style="background-color: #FFFF00">"profileType": "extended"</span>,
                                <span style="background-color: #FFFF00">"extendedBaseProfileName": "sys_export_data_excel_ui_task_base"</span>
                            }
                        }
                    ]
                }
            },
            {
                "id": "sys_export_data_excel_ui_task_base",
                "name": "Base export Excel data",
                "type": "integrationprofile",
                "data": {
                    "contexts": [
                        {
                            "context": {
                                "app": "RSConnect",
                                "channel": "JOB",
                                "format": "Excel",
                                "order": "10",
                                "role": "admin",
                                "service": "ENTITY_EXPORT",
                                "source": "internal",
                                "subtype": "User",
                                "user": "system"
                            },
                            "jsonData": {
                                "statusEventEnabled": false,
                                "integrationType": "User",
                                <span style="background-color: #FFFF00">"profileType": "base",</span>
                                "isEnabled": "true",
                                "isMergeableWithCustom": true
                            }
                        }
                    ]
                }
            }
        ],
        "status": "success",
        "totalRecords": 2
    }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.