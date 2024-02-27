---
title: Diagnostic Services
sidebar: rdp_sidebar
permalink: api_diag_services.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform is powered by various technologies such as Apache Hadoop, Elasticsearch, Apache Kafka, ZooKeeper, and Apache HBase (to name a few) that allows you to build robust and scalable enterprise MDM to manage your data effectively. Any issues or abnormalities in any of these technologies may hinder the performance of your application. Consider that you wish to edit few entities through UI. It is possible that, at the same time, there are other requests for bulk edits or import that your application has to process. Hence, while submitting your request, you may experience the delay. To enable you to troubleshoot any such support related issues with the faster and better diagnosis, Riversand Platform provides you the **Diagnostic Services API**. 

The diagnostic services API are not business related APIs; they are a set of support related internal service APIs which are mainly used to automate the support process for monitoring the system. Using these APIs, you can find out whether a particular topic is up and running and whether any delay is happening while processing a request (to name a few). After troubleshooting the issues, you can take proper measures to rectify the issues for the smooth running of your application.

This section describes how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Diagnose System Uptime](api_diag_get_system_uptime_intro.html)| {{site.data.rdp_glossary.diaguptime}}|