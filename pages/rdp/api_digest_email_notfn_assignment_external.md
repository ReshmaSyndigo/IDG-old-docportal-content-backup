---
title: Create Digest Email Notification Configuration for Workflow Auto Assignment or Assignment Change
sidebar: rdp_sidebar
permalink: api_digest_email_notfn_assignment.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create digest email notification configuration for workflow assignment change, using the following scenario.

Consider a scenario where you have 500 entities assigned to a user where they are in the **skuSubmission** activity of **New Sku Introduction** workflow. If you do a bulk change assignment, then 500 emails are sent to the assigned users. To avoid this situation, you can enable digest email for workflow auto assignment or assignment change and configure the schedule for notification, to get a consolidated email for such activities in the system.

Email notification configuration for digest emails is a four step process as detailed below.

1. Create email notification configuration object (workflow auto assignment or assignment change) with **digestemailenabled** flag set to true.
2. In the template configuration object provide the **context** details as mentioned in the notification configuration. This configuration generates the subject line and body content for the digest email.
3. Create a schedule object to identify the generic objects for digest emails. 
4. Create another schedule object to execute the notification task. This groups the generic objects to generate the email body content.

{% include callout.html content="**Note**:
* At the end of the configured schedule, all notifications that are pending to be sent to a user are accumulated as per the identify and execute query. These notifications have information about workflow, activity and entity IDs. Content generation is done for the notifications along with the entity attributes and other summarization attributes. The digest email is then composed and sent to the user.
" type="primary" %}

## Scenario - Configure Digest Emails for Workflow Assignment Change

### Step-1

To create a notification configuration object to send digest emails for the workflow assignment change. In this case, **digestemailenabled** flag must be set to true to enable digest emails to be sent to the assigned user.

{% include snippets/header.html %}

### Notification Config Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name and version. Specify the type as **notificationConfig**. See [Create Email Notification Configuration for Automatic Assignment and Assignment Change](api_email_notfn_auto_assign.html) for information on configuring context and attributes.

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
      <span style="background-color: #FFFF00">"id": "workflowAssignmentDefault_notificationConfig",</span>
      <span style="background-color: #FFFF00">"name": "workflowAssignmentDefault",</span>
      <span style="background-color: #FFFF00">"type": "notificationConfig",</span>
      "data": {
        "contexts": [
          {
            <span style="background-color: #FFFF00">"context": {</span>
              "app": "emailNotification",
              "service": "workflow",
              "component": "assignment",
              "workflowname": "_DEFAULT",
              "activityname": "_DEFAULT",
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
                    "value": "oliver@riversand.com_user"
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
              <span style="background-color: #FFFF00">"templateId": {</span>
                "values": [
                  {
                    "id": "93e00214-c9a6-4992-807d-ae1eb03e9d62",
                    "value": "workflowAssignmentDefault_templateConfig",
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
          "message": "Submitted notificationConfig for create with Id workflowAssignmentDefault_notificationConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "notificationConfig",
            "create",
            "workflowAssignmentDefault_notificationConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

### List of content generation attributes specific to assignmentNotification

| Attribute | Description |
|-----------|--------------|
| entityId | Indicates the ID of the entity in the workflow. |
| workflowName | Indicates the name of the workflow the entity is in. |
| activityName | Indicates the name of the activity in the workflow that the entity is in. |
| userEmail | Indicates the email of the recipient. |
| status | Indicates the status of the generic object. Example: QUEUED, PROCESSING or COMPLETED. |
| notificationType | Indicates the type of notification which is **assignmentNotification**. |
| doType | Indicates the entity type. |
| workflowNameExternal | Indicates the external name of the workflow. |
| activityNameExternal | Indicates the external name of the activity in the workflow. |
| entityName[] | Indicates the external name of the entity in the workflow. |
| entityType[] | Indicates the name of the entity type. |
| property[externalName] | Indicates the external name of the entity type. |
| userFirstName | Indicates the first name of the user as defined in the user model. |
| userLastName | Indicates the last name of the user as defined in the user model. |

The following attributes are used for summarization.

| Attribute | Description | 
|-----------|--------------|
| totalCount | Indicates the total count of entities for which assignment operation is performed. |
| groupCount | Indicates the total count of entities per group. (Example: count of entities per workflow name and activity name in the digest email. |

### Template Config Request

<pre>
<code>
{
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "workflowAssignmentDefault_templateConfig", </span>
      <span style="background-color: #FFFF00">"name": "workflowAssignmentDefaultTemplateConfig",</span>
      <span style="background-color: #FFFF00">"type": "templateConfig",</span>
      "data": {
        "contexts": [
          {
            "context": {
              "app": "emailNotification",
              "service": "digestEmail",
              "component": "digestEmailAssignment"
            },
            "attributes": {
              "subjecttemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "&#123;&#123;Attribute[\"totalCount\"]&#125;&#125; entities assigned "
                  }
                ]
              },
              "bodytemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "Hi &#123;&#123; Attribute[\"userFirstName\"] &#125;&#125; &#123;&#123; Attribute[\"userLastName\"] &#125;&#125;, The following &#123;&#123;Attribute[\"totalCount\"]&#125;&#125; entities are assigned to you. Click on the links to start working on them. @@grouptemplate@@ Thanks"
                  }
                ]
              },
              "grouptemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": " Workflow Name: &#123;&#123;Attribute[\"workflowNameExternal\"]&#125;&#125; Activity Name: &#123;&#123;Attribute[\"activityNameExternal\"]&#125;&#125; Count: &#123;&#123;Attribute[\"groupCount\"]&#125;&#125; &#60;table border=\"1px solid\" cellspacing=0&#62; &#60;tr&#62; &#60;thead&#62; &#60;th&#62; Entity Id &#60;/th&#62; &#60;th&#62; Entity Name &#60;/th&#62;&#60;th&#62; UPC &#60;/th&#62; &#60;/tr&#62; &#60;/thead&#62; &#60;tbody&#62; @@rowtemplate@@ &#60;/tbody&#62;&#60;/table&#62; "
                  }
                ]
              },
              "rowtemplate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "&#60;tr&#62;&#60;td&#62; <a href=\"&#123;&#123;APPLICATION_URL&#125;&#125;/&#123;&#123;TENANT&#125;&#125;/entity-manage?id=&#123;&#123; Attribute[\"entityId\"] &#125;&#125;&type=&#123;&#123; Attribute[\"doType\"] &#125;&#125;\">&#123;&#123; Attribute[\"entityId\"] </a> &#60;/td&#62;&#60;td&#62; &#123;&#123;Attribute[\"mdmname\"]&#125;&#125; &#60;/td&#62; &#60;td&#62; &#123;&#123;Attribute[\"upcbarcode\"]&#125;&#125; &#60;/td&#62; &#60;/tr&#62;"
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

* Use **grouptemplate** to group the entities for a particular workflow and activity, where each group is a unique combination of workflow and activity names.
* Use **rowtemplate** to display entity related information row wise.
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
          "message": "Submitted templateConfig for create with Id workflowAssignmentDefault_templateConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "templateConfig",
            "create",
            "workflowAssignmentDefault_templateConfig"
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
* If you know the details of your elastic server and the indices, then you can verify the created configuration using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.
<!-- * You can also verify match configuration by searching the entities using [match search service](api_match_service.html). -->

### Step 2

To create a schedule object for identifying the notification objects for digest emails, see [Create a schedule to identify notifications for digest emails](api_sch_create_scenario3.html)

### Step 3

To create a schedule object for executing the notification task for digest emails, see
[Create a schedule to execute notifications for digest emails](api_sch_create_scenario4.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.