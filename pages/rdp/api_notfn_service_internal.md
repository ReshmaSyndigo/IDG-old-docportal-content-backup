---
title: Notification Services
sidebar: rdp_sidebar
permalink: api_notfn_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Notification service in Riversand Platform is used to primarily send email notifications for entity related tasks, attributes or task related summary.

Riversand Platform allows you to configure notification for task, bulk task, and automatic workflow assignment or assignment change. See [Create Email Notification Configuration](api_create_email_notfn_configuration.html). You can also configure notification to send digest emails. See [Create Digest Email Notification Configuration for Workflow Auto Assignment or Assignment Change](api_digest_email_notfn_assignment.html) and
[Create Digest Email Notification Configuration for Task](api_digest_email_notfn_task.html).

In case you need to send notifications for any other scenario, you need to use the notification service.

This section describes how a [notification object is structured](api_notfn_object_structure.html) in Riversand Platform, as well as, how to use the RESTful API's in the Riversand Platform SDK to:

* [Send Email Notification](api_notfn_sendemail_with_template.html)