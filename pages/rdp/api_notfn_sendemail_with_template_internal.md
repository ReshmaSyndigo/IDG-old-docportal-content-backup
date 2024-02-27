---
title: Send Email Notification
sidebar: rdp_sidebar
permalink: api_notfn_sendemail_with_template.html
folder: rdp
type: HowTo
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {**TenantURL or ID}api/notificationservice/sendemail** to send email notification.

## Scenario 

To send email notification related to an entity.

{% include snippets/header.html %}

## Request

To send email notification, you can use the REST API {**TenantURL or ID}/api/notificationservice/sendemail**. In the request, send the following details:

* In the **emailParams** object, fill details about the mail recipients, mail subject template and mail body. 
* In the **notificationObject**, fill details about the entity object and properties as required.
* In the **data** object, fill details about the attributes.

<pre>
<code>
POST **{TenantURL or ID}/api/notificationservice/sendemail**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"emailParams": {</span>
      "to": [
        "john@riversand.com"
      ],
      "subject": "",
      "subjecttemplate": "&#123;&#123;Attribute[\"entityID\"]&#125;&#125; must have &#123;&#123;Attribute[\"color\"]&#125;&#125; and &#123;&#123;Attribute[\"size\"]&#125;&#125;",
      "body": "",
      "bodytemplate": "&#123;&#123;Attribute[\"entityID\"]&#125;&#125; must have &#123;&#123;Attribute[\"color\"]&#125;&#125; and &#123;&#123;Attribute[\"size\"]&#125;&#125;"
    }
  },
  "notificationObject": {
    <span style="background-color: #FFFF00">"id": "E01",</span>
    <span style="background-color: #FFFF00">"name": "E01",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "properties": {
      "source": "internal",
      "createdByService": "entityservice",
      "createdBy": "Miriam Pott",
      "modifiedByService": "entityservice"
    },
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "color": {
          "values": [
            {
              "value": "Blue",
              "source": "SAP",
              "locale": "en-US"
            }
          ]
        },
        "size": {
          "values": [
            {
              "value": "XL",
              "source": "SAP",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response

If the send email notification request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "334e6a22-91d8-42da-9811-7e040af17691"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Email has been sent successfully for processing."
    },
    "messageCode": "I0089",
    "messageType": "success"
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.