---
title: Get Events of an Entity when a Relationship is Added to a Context
sidebar: rdp_sidebar
permalink: api_event_get_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, adding a new relationship to an existing context in an entity results in the **addRelationshipToContext** change type. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response.

## Scenario

To get events for a "sku" entity when "ischildof" relationship is added to a context.

{% include snippets/header.html %}

## Request

Consider a "sku" entity linked to a context. You added "ischildof" relationship to this context. To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> attributesCriterion : Specify the required entity Id for which you wish to query the events.
* query -> typesCriterion : As this change type occurred on the managed data, specify as "entitymanageevent". 

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
"params": {
"query": {
"filters": {
"typesCriterion": [
<span style="background-color: #FFFF00">"entitymanageevent"</span>
],
<span style="background-color: #FFFF00">"attributesCriterion": [</span>
{
"entityId": {
"exact": "eyrIDYqwUsTNB"
}
}
]
}
},
"fields": {
"attributes": [
"_ALL"
],
"relationships": [
"_ALL"
],
"contexts": [
"_ALL"
]
},
"sort": {
"properties": [
{
"modifiedDate": "_DESC",
"sortType": "_DATETIME"
}
]
},
"options": {
"maxRecords": 1
}
}
}
</code>
</pre>

## Response

Returns the events generated for "addRelationshipToContext" change type. The following response snippet demonstrates a generated event related to adding a new relationship to an existing context in an entity. As you can see the response, the events show that the relationship "ischildof" is added to the context "Men's>>Shirts>>Formal Shirts".

<pre><code>
{
"request": {
"returnRequest": false,
"params": {},
"requestId": "f28a9b07-6113-47a0-8aa8-04650f28afb3",
"maxRecords": 1
},
"response": {
"events": [
{
"id": "0184ebf5-f19a-45ba-8967-f62f8a5425ef",
"type": "entitymanageevent",
"domain": "eventDataObject",
"properties": {
"modifiedService": "entityManageService",
"modifiedBy": "rdwadmin@riversand.com_user",
"modifiedDate": "2018-09-06T04:58:02.569-0500"
},
"data": {
"attributes": {
"eventSubType": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "36b7d44e-332d-463f-9897-86e4ce31cee6",
"value": "EntityUpdate"
}
]
},
"clientId": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "fa02ab6a-640a-471d-abea-98960c48b0e9",
"value": "rufClient"
}
]
},
"sourceTimestamp": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "16d7b36f-a18a-4e3b-9d88-f9609a98f441",
"value": "2018-09-06T04:58:02.564-0500"
}
]
},
"entityType": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "15cf55e3-96a1-4dac-8527-6fd6c4dd5d3c",
"value": "sku"
}
]
},
"entityId": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "984ce4e2-1317-4afd-b801-4761a2913ba7",
"value": "eyrIDYqwUsTNB"
}
]
},
"eventType": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "2d95a54b-ef43-465f-8625-4f1a2a6a5759",
"value": "EntityUpdate"
}
]
},
"entityAction": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "cb754ab6-d161-4856-a08f-bf2911ed01ce",
"value": "update"
}
]
},
"relatedRequestId": {
"values": [
{
"locale": "en-US",
"source": "internal",
"id": "8ae5b789-8cfb-4315-8295-5f0aebb48035",
"value": "96028a96-6a9e-499e-8e4c-26bb48973f24"
}
]
}
},
"relationships": {
"eventTarget": [
{
"id": "ff940d07-bef5-468d-9d21-6a2ef0562376",
"relTo": {
"id": "eyrIDYqwUsTNB",
"type": "sku"
},
"properties": {
"version": 1
}
}
],
"ischildof": [
{
"attributes": {},
"relTo": {
"id": "edf8324a-dfe9-43c7-8870-1863bc6b7c48",
"type": "product"
},
"properties": {
"direction": "both",
"operation": "association",
"changeContext": "entityManageService",
"changeType": "addRelationshipToContext"
},
"id": "ischildof_edf8324a-dfe9-43c7-8870-1863bc6b7c48"
}
]
}
}
}
],
"status": "success",
"totalRecords": 4
}
}
</code></pre>

## Key points to consider for verification

The following lists key points you can consider for your verification when you get an event generated for any of the create, update, or delete operation you carried out on a data object such as an entity. This aids you in troubleshooting the requests, if there are any errors. 

* The attributes such as eventType and entityAction helps you find out which operation has triggered this event. In the above [response](#response), eventType indicates that "EntityUpdate" has triggered this event. 
* The attributes such as relatedRequestId helps you get the request Id of the request which has triggered this event. In the above [response](#response), relatedRequestId indicates the request Id for the "update" operation which added a relationship to an existing context for an entity triggering an event.
* The {{site.data.rdp_glossary.getevent}} API also returns the corresponding [change type](api_event_change_types.html) properties for each of the created, updated, or deleted contexts, attributes, or relationships. In the above [response](#response), "changeType" indicates "addRelationshipToContext" as you added a relationship to an existing context for an entity.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.