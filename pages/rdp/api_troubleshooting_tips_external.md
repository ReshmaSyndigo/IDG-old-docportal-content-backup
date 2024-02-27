---
title: Troubleshooting Tips
sidebar: rdp_sidebar
permalink: api_troubleshooting_tips.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform exposes various [RESTful APIs](api_getting_started.html) that enables you to manage data efficiently. When you send a request to a REST API, the "status" in the response indicates if the request is successful or not. The "message" object provides further details about the message code and description. The following JSON provides a sample response from Create an Entity API:

<pre><code>
{
  "request": {
    "requestId": "bb53ca5a-1954-4d57-8e2e-4c5392cbb012"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : e1. Please check back after 1 min"
    }
  }
}
</code></pre>

This section provides common troubleshooting tips to the most commonly occurring errors. The following topics are described:

{% if site.build != "ascend" %}
* [Error Message Codes and Descriptions](api_troubleshooting_msg_codes.html)
* [Supportability Troubleshooting Queries](api_troubleshooting_queries.html)
* [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html)
* [Healthcheck Services](api_troubleshooting_healthcheck.html)
* [Slowness in REST API calls](api_troubleshooting_rest_api_calls_being_slow.html)
* [Seed Load Errors for Tenants](api_troubleshooting_seed_load_errors_for_tenants.html)
{% endif %}

{% if site.build == "ascend" %}
* [Error Message Codes and Descriptions](api_troubleshooting_msg_codes.html)
{% endif %}