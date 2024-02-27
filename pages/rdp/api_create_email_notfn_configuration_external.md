---
title: Create Email Notification Configuration
sidebar: rdp_sidebar
permalink: api_create_email_notfn_configuration.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

{% include callout.html content="**Disclaimer**: All the new notification configs must adhere to the current format for the smooth functioning of email notification.
" type="primary" %}

Email notification framework in Riversand Platform is designed to send email notification when task or bulk task starts, completes, errors or completes with errors, based on the configuration model.

If you want a consolidated email for all the tasks that were updated, or all the change assignments that occurred over a period of time, as per a schedule then you must use digest email feature. 
Digest emails can be sent for task, bulk task and workflow auto assignment or assignment change. See [Create Digest Email Notification Configuration for Workflow Auto Assignment or Assignment Change](api_digest_email_notfn_assignment.html) and [Create Digest Email Notification Configuration for Task](api_digest_email_notfn_task.html).

The following features are applicable for email notification configuration:

* The email is sent to the subscribed users who may or may not belong to the subscribed roles, and the users that belong to the subscribed roles.

* In case of task and bulk task, if the user who initiated the task is a non "system_user", then the email is sent to the respective user as well as to the subscribed users and the users belonging to the subscribed roles. 

* In case of workflow auto assignment or assignment change, if the assigned user is not "system_user", then email is sent to that user and also to the subscribed users and subscribed roles. If assigned user is "_UNASSIGNED", then email is sent to only subscribed users and subscribed roles.

* The subject and body of the email must be specified in the Template configuration and the template id must be specified in the notification configuration.

* The context section of the data object contains information regarding when the email is triggered, while the attributes section of the data object contains information regarding the users to whom the email notification must be sent, as well as template id.

* The email can be sent to a specific email address which may or may to not belong to the subscribed users and roles.

This topic describes how to enable email notification and create a notification configuration object for the respective task, bulk task, automatic workflow assignment or assignment change and digest email notification.

## Enable Email Notification

To enable the email notification feature, set the **isEmailNotificationEnabled** flag to true and add appropriate SMTP details for the tenant in tenantserviceconfig → notificationManageService → serviceSpecific.

<pre><code>
{
  "notificationManageService": {
    "serviceSpecific": {
       
      ...
       
      "isEmailNotificationEnabled": true,
      "email": "someuser@example.com",
      "password": "someuserpassword",
      "mail.smtp.auth": true,
      "mail.smtp.host": "smtp-mail.example.com",
      "mail.smtp.port": 587
       
      ...
       
    }
  }
}
</code></pre>

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create configuration:

* [Create Email Notification Configuration for Task](api_email_notfn_task.html)
* [Create Email Notification Configuration for Bulk Task](api_email_notfn_bulk_task.html)
* [Create Email Notification Configuration for Automatic Assignment or Assignment Change](api_email_notfn_auto_assign.html) 
* [Create Digest Email Notification Configuration for Workflow Auto Assignment or Assignment Change](api_digest_email_notfn_assignment.html)
* [Create Digest Email Notification Configuration for Task](api_digest_email_notfn_task.html)
* [User based Email Notification Configuration](api_custom_email_notfn_config.html)