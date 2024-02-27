---
title: Create Template Email Notification Configuration
sidebar: rdp_sidebar
permalink: api_template_email_notfn.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create a sample template email notification configuration, using a request.

### Template Config Request

The template configuration generates the subject line and body content for the email. This configuration can be reused in multiple notification configs.

<pre>
<code>
{
  "configObjects": [
    {
      "id": "digestEmailAssignment_templateConfig",
      "name": "digestEmailAssignment",
      "type": "templateConfig",
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
                    "value": "&#60;tr&#62;&#60;td&#62; <a href=\"&#123;&#123;APPLICATION_URL&#125;&#125;/&#123;&#123;TENANT&#125;&#125;/entity-manage?id=&#123;&#123; Attribute[\"entityId\"] &#125;&#125;&type=&#123;&#123; Attribute[\"entityType\"] &#125;&#125;\">&#123;&#123; Attribute[\"entityId\"] </a> &#60;/td&#62;&#60;td&#62; &#123;&#123;Attribute[\"mdmname\"]&#125;&#125; &#60;/td&#62; &#60;td&#62; &#123;&#123;Attribute[\"upcbarcode\"]&#125;&#125; &#60;/td&#62; &#60;/tr&#62;"
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

##### Template Configuration details

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

The following properties for the **attributes** object are set to:

| Property | Description | Value |
|----------|-------------|-------------|
| subjecttemplate | Indicates the template of the email subject line. Content generation keywords can be used in the templates. {% raw %}Attribute[<<AttributeShortName>>].{% endraw %} | {% raw %} "{{Attribute[\"totalCount\"]}}" {% endraw %} | 
| bodytemplate | Indicates the template of the email body. Content generation keywords can be used in the templates. {% raw %}Attribute[<<AttributeShortName>>].{% endraw %} | {% raw %} "Hi {{ Attribute[\"userFirstName\"] }} {{ Attribute[\"userLastName\"] }},  The following {{Attribute[\"totalCount\"]}} entities are assigned to you. Click on the links to start working on them. @@grouptemplate@@Thanks" {% endraw %} |
| grouptemplate | This template groups the tasks for a particular user based on task type or task status or both. Content generation keywords can be used in the templates. {% raw %}Attribute[<<AttributeShortName>>].{% endraw %} | " Workflow Name: &#123;&#123;Attribute[\"workflowNameExternal\"]&#125;&#125; Activity Name: &#123;&#123;Attribute[\"activityNameExternal\"]&#125;&#125; Count: &#123;&#123;Attribute[\"groupCount\"]&#125;&#125; &#60;table border=\"1px solid\" cellspacing=0&#62; &#60;tr&#62; &#60;thead&#62; &#60;th&#62; Entity Id &#60;/th&#62; &#60;th&#62; Entity Name &#60;/th&#62;&#60;th&#62; UPC &#60;/th&#62; &#60;/tr&#62; &#60;/thead&#62; &#60;tbody&#62; @@rowtemplate@@ &#60;/tbody&#62;&#60;/table&#62; " |
| rowtemplate | This template displays the task related information row wise. Content generation keywords can be used in the templates. {% raw %}Attribute[<<AttributeShortName>>].{% endraw %} | "&#60;tr&#62;&#60;td&#62; <a href=\"&#123;&#123;APPLICATION_URL&#125;&#125;/&#123;&#123;TENANT&#125;&#125;/entity-manage?id=&#123;&#123; Attribute[\"entityId\"] &#125;&#125;&type=&#123;&#123; Attribute[\"entityType\"] &#125;&#125;\">&#123;&#123; Attribute[\"entityId\"] </a> &#60;/td&#62;&#60;td&#62; &#123;&#123;Attribute[\"mdmname\"]&#125;&#125; &#60;/td&#62; &#60;td&#62; &#123;&#123;Attribute[\"upcbarcode\"]&#125;&#125; &#60;/td&#62; &#60;/tr&#62;" |  


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
          "message": "Submitted templateConfig for create with Id digestEmailAssignment_templateConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "templateConfig",
            "create",
            "digestEmailAssignment_templateConfig"
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
