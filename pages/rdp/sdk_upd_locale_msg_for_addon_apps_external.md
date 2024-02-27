---
title: Define Locale Messages for Add-on Applications
sidebar: rdp_sidebar
permalink: sdk_upd_locale_msg_for_addon_apps.html
type: HowTo
folder: rdp
---

{% include snippets/disclaimer_internal.md %} 

You can define locale messages for Add-on applications through the App repository managed by you. These locale messages get copied and updated during the Add-on App deployment.

### Scenario

Consider that you wish to define locale messages for an application in US English (en-US) language and German (de-DE) language.

**To define the locale messages for Add-on applications:**

1. From your App repository, go to **ui** facets folder, and then open the **src** folder.

    **Result:** The folders available in the **src** folder are displayed. 

{:start="2"}

2. Open the **ui-config** folder and then click the **message-config** folder. If message-config folder is not there then create the folder.

{:start="3"}

3. Create local message file for en-US and de-DE languages. For example, Add-on App template sample configuration file is as follow:

<pre>
<code>
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      <span style="background-color: #FFFF00"> "id": "locale-messages_en-US_helloworld_messageConfig", </span>
      <span style="background-color: #FFFF00"> "name": "locale-messages_en-US_helloworld", </span>
      "version": "1.0",
      "type": "messageConfig",
      "properties": {
        "createdByService": "system",
        "createdBy": "system"
      },
      "data": {
        "contexts": [
          {
            "context": {
              "component": "locale-messages",
              <span style="background-color: #FFFF00"> "locale": "en-US", </span>
              "tenant": "_DEFAULT",
              <span style="background-color: #FFFF00"> "addOnApp": "helloworld" </span>
            },
            "jsonData": {
              "config": {
                "messages": {
                  <span style="background-color: #FFFF00"> "helloworldSamMsg": "This is a sample locale message!" </span>
                }
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

{:start="4"}

4. In each file for the supported languages, define the messages using the following format:

    * Under **context**, add a new context as **“addOnApp”** followed by App ID. For example, in the above sample App ID is “helloworld”.
    
    * The **id** is defined based on the context type (App ID). The id must be defined after the locale, based on the context type (such as helloworld) followed by messageConfig. For example, in the above sample "id": "locale-messages_en-US_**helloworld**_messageConfig".
    
    * The **name** is defined based on the context type (App ID). The name must be defined after the locale, based on the context type (such as helloworld). For example, in the above sample "name": "locale-messages_en-US_**helloworld**".
    
    * Under the **messages**, each message defined and updated by you must have the prefix of App ID followed by identification of the message type. For example, in the above sample“**helloworld**SamMsg” followed by "This is a sample locale message!".

    {% include callout.html content="**Note**: This prefix is important, to avoid any conflicts with core application messages. In the case of any conflict, your message gets over-ridden by the core application message.
    " type="primary" %}

    * Save and exit the file.
