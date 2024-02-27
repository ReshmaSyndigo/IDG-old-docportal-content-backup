---
title: Schedule Email Notifications for Pending Tasks  
sidebar: rdp_sidebar
permalink: api_sch_email_notification_assigned_work.html
type: HowToAPI
folder: rdp
---

Riversand Platform provides an ability to notify the users about their pending tasks via digest email. Multiple users use the platform to onboard and enrich the data as a day-to-day activity. So, it is important to notify the respective users to complete their pending tasks in a given period. Using scheduler services, you can schedule sending email notifications to notify users about their pending tasks.  

Consider a scenario that you wish to notify all vendors every Monday morning about their pending items, which are not yet enriched enough to send the items to the respective users. The pending items can be identified by one of 3 mechanisms:
* Pending in a particular workflow step
* Failing a certain business condition
* Entity manage attribute or relationship based query


To send the notifications to the vendors about their pending items, a scheduler object is configured to trigger at a certain schedule. It searches for matching entities based on one of the 3 identification mechanisms listed above. The entities are filtered and are processed in a "Batch" app to generate a digest email per vendor. Based on this, a scheduled email notification is sent to all the vendors.

The scheduler service is configured by the schedule object integrated with the **Batch** app to schedule the notifications based on the specified query. The **Batch** app runs the query specified in the scheduled object to send notifications to specific users about their pending tasks.

If the user has a notification config and a subsequent template config, then it will pick the respective notification config and template config to send the scheduled email notification. For the user, if the notification config and a subsequent template config are not configured, then a default email notification is sent only if the default notification config is configured for the users.

The following screenshot depicts the scheduled email notification mechanism for the pending items:

{% picture scheduled-email-notification.png alt="Scheduled Email Notification Mechanism" %}

##### Prerequisite 

You must follow the below steps, to schedule the notifications for the users: 

* Configure the schedule object with the appropriate query based on your requirement. For more information, see [Configuring the Schedule](/{{site.data.rdp_links_version.ADM}}/sch_config.html){:target="_blank"} 
* Configure the notification config and a template config based on your requirement for the users. For more information, see [Create Email Notification Configuration](api_create_email_notfn_configuration.html) and [Create Template Email Notification Configuration](api_template_email_notfn.html).
* Enable the email notification feature, by setting the "isEmailNotificationEnabled" flag to true and add appropriate SMTP details for the tenant in tenantserviceconfig → notificationManageService → serviceSpecific.

<br/>
This section covers the following scenarios to explain the Schedule Email Notifications:

* [Schedule Workflow Step based Notifications](api_scheduled_workflow_notifications.html)
* [Schedule Notifications based on Business Conditions](api_scheduled_bc_notifications.html)
* [Schedule Notifications based on Entity Manage Attribute/Relationship query](api_scheduled_entity_attribute_relationship_notifications.html)