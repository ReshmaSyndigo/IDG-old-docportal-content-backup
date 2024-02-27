---
title: Schedule Info Object Structure
sidebar: rdp_sidebar
permalink: api_sch_info_object_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A Schedule Info Object in Riversand Platform is a JSON structure that contains the state information about its related schedule. This object is created and maintained by the [schedule object](api_sch_object_structure.html).

{% include callout.html content="**Notes**:<br />

* There is only one schedule info object per schedule.
* If the schedule is never run because it was disabled or inactive, then the schedule info object is not created.
* The schedule info object is updated only when its related schedule is executed.
* As scheduler service internally creates and updates the schedule info object, you can not create or update the schedule info object.

" type="primary" %}

Broadly, a schedule info object contains the following sub-objects:

* [scheduleObject](#scheduleobject): Contains all the required information of a schedule info object that contains the state information about its related schedule.
* [properties](#properties): Contains the information of a schedule object to which "this" schedule info object is linked to.

This topic describes the schedule info object structure using a sample scenario. 

## Scenario

Consider that you have created the schedule object that schedules the event grooming jobs. The following example demonstrates the sample JSON format of the schedule info object that is created by the schedule object:

<pre><code>
"scheduleObject": [
{
    "id": "43943ee1-1bd5-4c47-b8d8-76b7c3645683",
    "type": "scheduleinfo",
    "domain": "scheduleDataObject",
    "properties": {
        "scheduleId": "groomEntityManageEvents",
        "scheduleTaskName": "groomEntityManageEvents",
        "scheduleTaskUrl": "http:{URI}/api/bulkeventservice/createtask",
        "lastInvocation": "1518018817996"
    }
}
]
</code></pre>

The following section describes the properties of the schedule info object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set the data for the [sample scenario](#scenario).

## scheduleObject

This object contains all the required information of a schedule info object that contains the state information about its related schedule. The following table lists the details of the scheduleInfoObject:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the unique identifier of the schedule info object. | String |
| type | Indicates the type of object. For schedule info objects, the type must be "scheduleinfo".| String | 
| domain | Indicates the domain to which the current schedule Info object belongs to. | String |
| properties | Indicates the properties of the schedule info object. Properties must be used to store simple name-value pairs, where the values are **Absolute** and **do not change with context**. | [properties](#properties) | No |


Data for sample [Scenario](#scenario): The following properties are set by its related schedule object:

| Property | Value | 
|----------|-------------|
| id | 43943ee1-1bd5-4c47-b8d8-76b7c3645683 |
| type | scheduleinfo |
| domain | scheduleDataObject |

The following sections describe how to set the values for [properties](#properties) object.

## properties  

It contains the information of a schedule object to which the current schedule info object is is associated with. The following table lists the details of the **properties** object:

| Property | Description | Type | 
|----------|-------------|------|
| scheduleId | Indicates the unique identifier of the schedule object the current schedule info object is associated with. | String | 
| scheduleTaskName | Indicates the scheduled task name to which the current schedule info object is associated with.| String |
| scheduleTaskUrl | Indicates the task URL of the schedule last executed. The corresponding schedule object updates this property whenever you configure a new task URL for the schedule.| String | 
| lastInvocation | Indicates the date and time stamp of the schedule last executed. It is in the [Epoch](https://www.epochconverter.com/){:target="_blank"} time format. The schedule object updates the lastInvocation when the schedule task is executed. | Integer | 

Data for sample [Scenario](#scenario): As this schedule info object corresponds to the [schedule object](api_sch_object_structure.html) you have created to schedule the event grooming jobs, the following properties for the **properties** object are set by the related schedule object:

| Property | Value |
|----------|-------|
| scheduleId | groomEntityManageEvents |
| scheduleTaskName | groomEntityManageEvents |
| scheduleTaskUrl | http://{uri}/api/bulkeventservice/createtask |
| lastInvocation | 1518018817996|