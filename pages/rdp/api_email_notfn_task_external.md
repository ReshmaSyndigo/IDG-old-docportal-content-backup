---
title: Create Email Notification Configuration for Task
sidebar: rdp_sidebar
permalink: api_email_notfn_task.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create email notification configuration for a task, using a scenario.

{% include callout.html content="**Note**: To configure digest emails for task, see [Create Digest Email Notification Configuration for Task](api_digest_email_notfn_task.html)
" type="primary" %}

## Scenario

Send email to all the subscribed roles and users for entity import task using Excel with status as "Started", configure the **notificationConfig** object as follows.

{% include snippets/header.html %}

### Notification Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name and version. Specify the type as **notificationConfig**.

<pre>
<code>
POST **{TenantURL or ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "taskEntityImportExcelStarted_notificationConfig",</span>
      <span style="background-color: #FFFF00">"name": "taskEntityImportExcelStarted",</span>
      <span style="background-color: #FFFF00">"type": "notificationConfig",</span>
      "data": {
        "contexts": [
          {
            <span style="background-color: #FFFF00">"context": {</span>
              "app": "emailNotification",
              "service": "task",
              "component": "ENTITY_IMPORT",
              "subcomponent": "EXCEL",
              "profilename": "_DEFAULT",
              "status": "Started"
              "user_default": "_DEFAULT"
            },
            "attributes": {
              "subscribedroles": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "admin_role"
                  }
                ]
              },
              "subscribedusers": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "john@riversand.com_user"
                  }
                ]
              },
              "emailaddress": {
                "values": [
                  {
                    "id": "ee27a23e-aa55-4007-825a-96612bb5023e",
                    "value": "peter@riversand.com",
                    "locale": "en-US",
                    "source": "internal"
                    }
                ]
              },
              "excludedusers": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "oliver@riversand.com_user"
                  }
                ]
              },
              "templateId": {
                "values": [
                  {
                    "id": "93e00214-c9a6-4992-807d-ae1eb03e9d62",
                    "value": "taskEntityImportExcelStarted_templateConfig",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
</code>
</pre>

**Notification Configuration details**

This object contains the **context** and **attributes** information of the Notification configuration.

* **Context**

The context section of the data object contains information regarding when the email is triggered.

The following table lists the details of the context object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| app | Indicates the app such as emailNotification and is fixed.| String  | Yes |
| service | Indicates the service as task and is fixed. | String | Yes |
| component | Indicates the component of the service. <br> <b>Allowed Values</b> are ENTITY_IMPORT, ENTITY_EXPORT, MODEL_IMPORT, MODEL_EXPORT, _DEFAULT | String | Yes |
| subComponent | Indicates the subComponent of the component. \<any fileType value from tasksummaryobject> Example: SMARTEXCEL, _DEFAULT | String | Yes |
| profilename | \<any profileName value from tasksummaryobject> Example: downloadDataExcelJob, _DEFAULT | String | Yes |
| status | Indicates the status of the task. Started, Completed, Errored, Completed With Errors, _DEFAULT | String | Yes |
| user | Indicates the user who is affected by the assignment. If the user is assigned with entities, then the email is sent to the assigned user as well as to the subscribed roles and users. _DEFAULT must be mentioned if no user's name is specified. | String | Yes |

Data for sample [Scenario](#scenario): The following properties for the **context** object are set to:

| Property | Value | 
|----------|-------------|
| app | emailNotification |
| service | task |
| component | ENTITY_IMPORT |
| subComponent | EXCEL |
| profilename | _DEFAULT |
| status | Started |
| user_default | _DEFAULT |

* **attributes**  

The attributes object contains information regarding the users to whom the email notification must be sent, along with the template id which includes subject and body template configuration.

Data for sample [Scenario](#scenario): The following properties for the **attributes** object are set to:

| Property | Description | Value |
|----------|-------------|-------------|
| subscribedroles | Indicates the roles to whom the email must be sent. Specify the role ID's. | admin_role |
| subsribedusers | Indicates the users to whom the email must be sent. Specify the user ID's. | john@riversand.com_user | 
| excludedusers | Indicates the users who must be excluded from the email notification. Specify the user ID's. | oliver@riversand.com_user |
| emailaddress | Indicates the user email address to whom the email must be sent. | peter@riversand.com |
| templateId | Indicates the id of subject and body template defined in the template configuration. | taskEntityImportExcelStarted_templateConfig |

* **values**

This object contains the values of the attributes object. The following table lists the details of the values object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| value | Indicates the actual attribute value. | String  | Yes |
| source | Indicates the source of attribute value. | String  | Yes |
| locale | Indicates the locale for the attribute value. | String | Yes |

### Notification Config Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1d0e9b78-c995-4006-9cd8-c9c2c2b26e7a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted notificationConfig for create with Id taskEntityImportExcelStarted_notificationConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "notificationConfig",
            "create",
            "taskEntityImportExcelStarted_notificationConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

### Template Config Request

The template configuration generates the subject line and body content for the email. This configuration can be reused in multiple notification configs.

<pre>
<code>
{
  "id": "taskEntityImportExcelStarted_templateConfig",
  "name": "taskEntityImportExcelStartedTemplateConfig",
  "type": "templateConfig",
  "data": {
    "contexts": [
      {
        "context": {
          "app": "emailNotification",
          "service": "task",
          "component": "ENTITY_IMPORT",
          "subcomponent": "EXCEL",
          "profilename": "_DEFAULT",
          "status": "Started"
        },
        "attributes": {
          "subjecttemplate": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "Task id: &#123;&#123; Attribute["taskId"] &#123;&#123; assigned to - user: &#123;&#123; Attribute["submittedBy"] &#125;&#125; entities assigned "
              }
            ]
          },
          "bodytemplate": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "Task id: &#123;&#123; Attribute[\"taskId\"] &#123;&#123; assigned to &#123;&#123; Attribute[\"taskStatus\"] &#123;&#123; user &#123;&#123; Attribute[\"submittedBy\"] &#123;&#123; "
              }
            ]
          }
        }
      }
    ]
  }
}
</code>
</pre>

**Template Configuration details**

This object contains the **context** and **attributes** information of the **Template** configuration.

* **context**
<br/>

The **context** section in **Template** configuration is same as **Notification** configuration.

* **attributes**

The attributes object contains information regarding the subject and body templates.

* **values**

This object contains the values of the attributes object. The following table lists the details of the values object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| value | Indicates the actual attribute value. | String  | Yes |
| source | Indicates the source of attribute value. | String  | Yes |
| locale | Indicates the locale for the attribute value. | String | Yes |

Data for sample [Scenario](#scenario): The following properties for the **attributes** object are set to:

| Property | Description | Value |
|----------|-------------|-------------|
| subjecttemplate | Indicates the template of the email subject line. Content generation keywords can be used in the templates. {% raw %}Attribute[<<AttributeShortName>>].{% endraw %} | {% raw %}"Task id: {{Attribute[\"taskId\"]}} assigned to -  user: {{Attribute[\"submittedBy\"]}}" {% endraw %} | 
| bodytemplate | Indicates the template of the email body. {% raw %}Attribute[<<AttributeShortName>>].{% endraw %} | {% raw %}"Task id: {{Attribute[\"taskId\"]}} assigned to {{Attribute[\"taskStatus\"]}} user {{Attribute[\"submittedBy\"]}}"{% endraw %} |

{% include snippets/email_notfn_default.html %}

### Template Config Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1d0e9b78-c995-4006-9cd8-c9c2c2b26e7a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted templateConfig for create with Id taskEntityImportExcelStarted_templateConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "templateConfig",
            "create",
            "taskEntityImportExcelStarted_templateConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html).
<!-- * You can also verify match configuration by searching the entities using [match search service](api_match_service.html). -->

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.