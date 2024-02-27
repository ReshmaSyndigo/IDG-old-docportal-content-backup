---
title: Create a schedule to export entity data 
sidebar: rdp_sidebar
permalink: api_sch_create_scenario9.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/schedulerservice/create** to schedule export job that publishes entity data to the downstream system.

**To schedule an export job:**
* Create an export profile for the channel to which you wish to publish. {% if site.build == "internal" %} See [how to create export profile](api_create_exp_profile_config.html).{% endif %} 
* Create a scheduler service to schedule an entity data publish at required time intervals. This configuration has the following two updates to the JSON request:
* **taskType**: Indicates the concatenation of RSCONNECT_PUBLISH_AGGREATED_<<Generic Object Profile ID>>. Example: RSCONNECT_PUBLISH_AGGREATED_entities_export_to_genericobject_eventhub.
* **scheduleTaskPayload -> rsconnect -> profiles**: Indicates the ID of Collection of Generic Data Profile. 

{% include snippets/header.html %}

## Scenario

Create a schedule object to export entity data to EventHub. 

{% include snippets/header.html %}

## Request

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request, specify the following:

| Property | Description |
|----------|-------------|
| scheduleobject | Indicates if scheduler is to be enabled or not to perform a particular action. The value is true for the scheduler to work for export. | 
| scheduleType | Indicates the fixed amount of time for the scheduler to run. The allowed value is fixedRate. |
| scheduleTaskName | Indicates the name of the task that is scheduled. |
| scheduleTaskUrl | Indicates the REST URL that is called for Publish operation. |
| scheduleTaskPayload | Indicates the request body for the rest API mentioned in the scheduleTaskUrl. |

<pre>
<code>
POST **{{site.data.rdp_glossary.schcreate}}**
Headers: Content-Type: application/json
Body:
{
"id": "scheduletopublishentitiesgenericobjecttoeventhub",
"name": "Schedule To Publish Entities Generic Object To EventHub",
"type": "scheduleobject",
"properties": {
<span style="background-color: #FFFF00">"enabled": true</span>
},
"data": {
"attributes": {
<span style="background-color: #FFFF00">"scheduleType": {</span>
"values": [
{
"locale": "en-US",
"source": "internal",
"value": "fixedRate"
}
]
},
<span style="background-color: #FFFF00">"scheduleTaskName": {</span>
"values": [
{
"locale": "en-US",
"source": "internal",
"value": "scheduletopublishentitiesgenericobjecttoeventhub"
}
]
},
<span style="background-color: #FFFF00">"scheduleTaskUrl": {</span>
"values": [
{
"locale": "en-US",
"source": "internal",
"value": "http://imp-exp-rest:9095/{TENANT}/api/rsConnectService/publish"
}
]
}
},
"jsonData": {
"scheduleConfiguration": {
<span style="background-color: #FFFF00">"intervalInMins": 30,</span>
"authContext": {
"x-rdp-userRoles": "admin",
"x-rdp-clientId": "rdpclient",
"x-rdp-tenantId": "{{TENANT}}",
"x-rdp-ownershipdata": "",
"x-rdp-userid": "system_user",
"x-rdp-username": "system",
"x-rdp-useremail": "system",
"x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
}
},
<span style="background-color: #FFFF00">"scheduleTaskPayload": {</span>
"params": {
"query": {
"filters": {
"attributesCriterion": [
{
"taskType": {
"exact": "RSCONNECT_PUBLISH_AGGREATED_entities_export_to_genericobject_eventhub"
}
},
{
"status": {
"exact": "QUEUED"
}
}
],
"typesCriterion": [
"scheduledrequestobject"
]
}
},
"fields": {
"attributes": [
"_ALL"
],
"relationships": [
"_ALL"
]
},
"rsconnect": {
"profiles": [
"collect_from_genericobjects_eventhub"
]
}
}
}
}
}
}
</code>
</pre>

## Response

If the schedule create request is submitted successfully, then the following response is received from create schedule API:

<pre><code>
{
"request": {
"returnRequest": false,
"requestId": "9ad73237-19bb-4da1-bb5c-e6b78e70c227"
},
"response": {
"status": "success",
"statusDetail": {
"message": "Schedule has been submitted for create with schedule Id : scheduletopublishentitiesgenericobjecttoeventhub. Please check back after 1 min"
},
"totalRecords": 0
}
}
</code></pre>

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the created schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html) and [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html).
" type="primary" %}

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.