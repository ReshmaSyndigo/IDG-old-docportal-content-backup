---
title: Create User specific Email Notification Configuration for Workflow Auto Assignment
sidebar: rdp_sidebar
permalink: api_custom_email_notfn_config_work.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/configurationservice/create to create user specific email notification configuration for automatic workflow assignment or assignment change, using the a scenario.

## Scenario

Send email to all the subscribed users about the entities assigned to them. Configure the notificationConfig object as follows.

{% include snippets/header.html %}

### Notification Config Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name and version. Specify the type as **notificationConfig**.

<pre>
<code>
POST **{TenantURL or ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
  "configobject": {
    <span style="background-color: #FFFF00">"id": "workflowDefault_notificationConfig",</span>
    <span style="background-color: #FFFF00">"name": "workflowDefault",</span>
    <span style="background-color: #FFFF00">"type": "notificationConfig",</span>
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "app": "emailNotification",
            "component": "assignment",
            "service": "workflow",
            "workflowname": "_DEFAULT",
            "activityname": "_DEFAULT",
            "user": "_DEFAULT"
          },
          "attributes": {
            "subscribedroles": {
              "values": [
                {
                  "id": "9326d3a3-0010-437b-92c9-8393057d979c",
                  "value": "admin_role",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "subscribedusers": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "john@riversand.com"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "peter@riversand.com"
                }
              ]
            },
            "excludedusers": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "oliver@riversand.com"
                }
              ]
            },
            "emailaddress": {
              "values": [
                {
                  "id": "ee27a23e-aa55-4007-825a-96612bb5023e",
                  "value": "mathew@riversand.com",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
             "templateId": {
               "values": [
                {
                  "id": "93e00214-c9a6-4992-807d-ae1eb03e9d62",
                  "value": "default_templateconfig",
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
}
</code>
</pre>

### Notification Config Response

The API response for the above request is as follows:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "13f3c4ba-24cc-43f0-94d6-8dc9d50a8fba",
    "taskId": "13f3c4ba-24cc-43f0-94d6-8dc9d50a8fba"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted notificationConfig for update with Id workflowDefault_notificationConfig. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "notificationConfig",
            "update",
            "workflowDefault_notificationConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

### User specific Notification Config Request

Following json is **john@riversand.com** user specific Notification Configuration.

<pre>
<code>
{
  "configobject": {
    <span style="background-color: #FFFF00">"id": "john_workflowDefault_notificationConfig", </span>
    "name": "workflowDefault_notificationConfig",
    "type": "notificationConfig",
    "data": {
      "contexts": [
        {
          "context": {
            "app": "emailNotification",
            "component": "assignment",
            "service": "workflow",
            "workflowname": "_DEFAULT",
            "activityname": "_DEFAULT",
            "user": "_DEFAULT"
          },
          "attributes": {
            "subscribedroles": {
              "values": [
                {
                  "id": "9326d3a3-0010-437b-92c9-8393057d979c",
                  "value": "test_role",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "subscribedusers": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "john@riversand.com"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "taylor@riversand.com"
                }
              ]
            },
            "excludedusers": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "sam@riversand.com"
                }
              ]
            },
            "emailaddress": {
              "values": [
                {
                  "id": "ee27a23e-aa55-4007-825a-96612bb5023e",
                  "value": "mathew@riversand.com",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "templateId": {
              "values": [
                {
                  "id": "93e00214-c9a6-4992-807d-ae1eb03e9d62",
                  "value": "workflowDefault_templateConfig",
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
}
</code>
</pre>

### User specific Notification Config Response

The API response for the above request is as follows:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "13f3c4ba-24cc-43f0-94d6-8dc9d50a8fba",
    "taskId": "13f3c4ba-24cc-43f0-94d6-8dc9d50a8fba"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted notificationConfig for update with Id john_workflowDefault_notificationConfig. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "notificationConfig",
            "update",
            "john_workflowDefault_notificationConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

### User specific Template Config Request

Following json is **john@riversand.com** user specific Template Configuration.

<pre>
<code>
{
  "id": "workflowDefault_templateConfig",
  "name": "workflowDefault_notificationConfig",
  "type": "templateConfig",
  "data": {
    "contexts": [
      {
        "context": {
          "app": "emailNotification",
          "component": "assignment",
          "service": "workflow",
          "workflowname": "_DEFAULT",
          "activityname": "_DEFAULT",
          "user": "_DEFAULT"
        },
        "attributes": {
          "subjecttemplate": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": " &#123;&#123; Attribute[\"totalCount\"] &#123;&#123; entities assigned"
              }
            ]
          },
          "bodytemplate": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "Hi, &#123;&#123; Attribute[\"John\"] &#125;&#125; &#123;&#123; Attribute[\"William\"] &#125;&#125;, The following &#123;&#123; Attribute[\"totalCount\"] &#125;&#125; entities are assigned to you. Click on the links to start working on them. <br><br> Thanks"
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

### User specific Template Config Response

The API response for the above request is as follows:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "13f3c4ba-24cc-43f0-94d6-8dc9d50a8fba",
    "taskId": "13f3c4ba-24cc-43f0-94d6-8dc9d50a8fba"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted templateConfig for update with Id workflowDefault_templateConfig. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "templateConfig",
            "update",
            "workflowDefault_templateConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>