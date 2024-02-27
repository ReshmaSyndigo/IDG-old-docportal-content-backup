---
title: User based Email Notification Configuration
sidebar: rdp_sidebar
permalink: api_custom_email_notfn_config.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Custom Email notification can be triggered for users mentioned in the subscribed users of default configuration. This is applicable only for the users who have created their custom notification and template configuration. The emails received by the users are based on the information provided in their respective notification and template configuration. If the user specific configuration is not customized, then emails received are based on the default notification and template config.

The following image is a demonstration of the User based Email Notification Configuration:

{% picture notf-template-congif.png alt="Email Notification" %}

Following are the scenarios covered in this topic:
* [Create User specific Email Notification Configuration for Task](api_custom_email_notfn_config_task.html)
* [Create User specific Email Notification Configuration for Workflow Assignment](api_custom_email_notfn_config_work.html)