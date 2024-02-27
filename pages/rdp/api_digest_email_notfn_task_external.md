---
title: Create Digest Email Notification Configuration for Task
sidebar: rdp_sidebar
permalink: api_digest_email_notfn_task.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create digest email notification configuration for task or bulk task, using the following scenario.

Consider that 500 tasks are updated and you would like to send a consolidated email of the updated tasks to the users. You can enable digest email for task/bulk task, and configure the schedule for notification to send a consolidated email for all the tasks assigned to that user over a period of time.

Email notification configuration for digest emails is a four step process as detailed below.

1. Create email notification configuration object (task/bulk task) with **digestemailenabled** flag set to true.
2. In the template configuration object provide the **context** details as mentioned in the notification configuration. This configuration generates the subject line and body content for the digest email.
3. Create a schedule object to identify the generic objects for digest emails. 
4. Create another schedule object to execute the notification task. This groups the generic objects to generate the email body content.

{% include callout.html content="**Note**:
* At the end of the configured schedule, all notifications that are pending to be sent to a user are accumulated as per the identify and execute query. These notifications have information about workflow, activity and entity IDs. Content generation is done for the notifications along with the entity attributes and other summarization attributes. The digest email is then composed and sent to the user.
" type="primary" %}

## Scenario - Configure Digest Emails for a Task

### Step1

To create a notification configuration object to send digest emails for the task. In this case, **digestemailenabled** attribute must be set to true to enable digest emails to be sent for the task.

{% include snippets/header.html %}

### Notification Config Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name and version. Specify the type as **notificationConfig**. See [Create Email Notification Configuration for Task](api_email_notfn_task.html) for information on configuring context and attributes.

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
      <span style="background-color: #FFFF00">"id": "taskDefault_notificationConfig",</span>
      <span style="background-color: #FFFF00">"name": "taskDefault",</span>
      <span style="background-color: #FFFF00">"type": "notificationConfig",</span>
      "data": {
        "contexts": [
          {
            <span style="background-color: #FFFF00">"context": {</span>
              "app": "emailNotification",
              "service": "task",
              "component": "_DEFAULT",
              "subcomponent": "_DEFAULT",
              "profilename": "_DEFAULT",
              "status": "_DEFAULT"
              "user": "_DEFAULT"
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
                    "value": "john@riversand.com"
                  }
                ]
              },
              "templateId": {
                "values": [
                  {
                    "id": "93e00214-c9a6-4992-807d-ae1eb03e9d62",
                    "value": "taskDefault_templateConfig",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "digestemailenabled": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": true
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
          "message": "Submitted notificationConfig for create with Id taskDefault_notificationConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "notificationConfig",
            "create",
            "taskDefault_notificationConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

### List of content generation attributes specific to taskNotification

| Attribute | Description |
|-----------|--------------|
| taskId | Indicates the ID of the task. |
| taskType | Indicates the type of the task. |
| taskStatus | Indicates the status of the task. |
| status | Indicates the status of the generic object. Example: QUEUED, PROCESSING or COMPLETED. |
| fileType | Indicates the type of file involved in the task. Applicable only to file Import and Export tasks. (NA for bulk tasks) |
| profileName | Indicates the profile name of the import or export task. (NA for bulk tasks) |
| submittedBy | Indicates the submitter of the task. |
| notificationType | Indicates the type of notification which is **taskNotification**. |
| taskName | Indicates the type of the task as defined in the tasksummary object. |
| userFirstName | Indicates the first name of the user as defined in the user model. |
| userLastName | Indicates the last name of the user as defined in the user model. |

The following attributes are used for summarization.

| Attribute | Description | 
|-----------|--------------|
| totalCount | Indicates the total count of tasks performed in a period of time. |
| groupCount | Indicates the total count of tasks per group. (Example: count of tasks per task type in the digest email) |
| totalRecords | Indicates the total count of entities in a task. |

### Template Config Request

<pre>
<code>
{
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "taskDefault_templateConfig",</span>
      <span style="background-color: #FFFF00">"name": "taskDefaultTemplateConfig",</span>
      <span style="background-color: #FFFF00">"type": "templateConfig",</span>
      "data": {
        "contexts": [
          {
            "context": {
              "app": "emailNotification",
              "service": "digestEmail",
              "component": "digestEmailTask",
              "locale": "en-US"
            },
            "attributes": {
              "subjecttemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "&#123;&#123; Attribute[\"totalCount\"] &#125;&#125; Tasks Progress Summary"
                  }
                ]
              },
              "bodytemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "Hi &#123;&#123; Attribute[\"userFirstName\"] &#125;&#125; &#123;&#123; Attribute[\"userLastName\"] &#125;&#125;, Status of following &#123;&#123;Attribute[\"totalCount\"]&#125;&#125; Tasks Progress Summary are updated. Click on the links to view details of each task. @@grouptemplate@@ Thanks"
                  }
                ]
              },
              "grouptemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "Task Type: &#123;&#123;Attribute[\"taskType\"]&#125;&#125; Task Status: &#123;&#123;Attribute[\"taskStatus\"]&#125;&#125; Count: &#123;&#123;Attribute[\"groupCount\"]&#125;&#125; &#60;table border=\"1px solid\" cellspacing=0> &#60;thead&#62; &#60;tr&#62; &#60;th&#62; Task Id &#60;/th&#62; &#60;th&#62; Task Name &#60;/th&#62; &#60;th&#62; Started On &#60;/th&#62; &#60;th&#62; Completed On &#60;/th&#62; &#60;/tr&#62;&#60;/thead&#62; &#60;tbody&#62; @@rowtemplate@@ &#60;/tbody&#62;&#60;/table&#62;"
                  }
                ]
              },
              "rowtemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "&#60;tr&#62;&#60;td&#62; <a href=\"&#123;&#123;APPLICATION_URL&#125;&#125;/&#123;&#123;TENANT&#125;&#125;/task-detail?id=&#123;&#123; Attribute[\"taskId\"] &#125;&#125;\">&#123;&#123; Attribute[\"taskId\"] &#125;&#125;</a> &#60;/td&#62; &#60;td&#62; &#123;&#123;Attribute[\"taskName\"]&#125;&#125; &#60;/td&#62; &#60;td&#62; &#123;&#123; Property[\"createdDate\"] &#125;&#125; &#60;/td&#62; &#60;td&#62; &#123;&#123; Property[\"modifiedDate\"] &#125;&#125;&#60;/td&#62;&#60;/tr&#62;"
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

<br/>

* Use **grouptemplate** to group the tasks for a particular user based on task type or task status or both.
* Use **rowtemplate** to display task related information row wise.
* The templates used to generate subject line and digest email content is a mix of static text and dynamically generated content using content generation keywords used on a set of attributes.

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
          "message": "Submitted templateConfig for create with Id taskDefault_templateConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "templateConfig",
            "create",
            "taskDefault_templateConfig"
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

### Step 2

To create a schedule object for identifying the notification objects for digest emails, see [Create a schedule to identify notifications for digest emails](api_sch_create_scenario3.html)

### Step 3

To create a schedule object for executing the notification task for digest emails, see
[Create a schedule to execute notifications for digest emails](api_sch_create_scenario4.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.