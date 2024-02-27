---
title: Scroll Support for Event Services
sidebar: rdp_sidebar
permalink: api_event_scroll_support.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Consider that you wish to get a list of all the external events from your Riversand Platform application. Based on the volume of data, the response for such requests can result in huge volume of records. A "get" request in Riversand Platform returns a maximum of 2000 records at a time. In-case you wish to fetch more than 2000 records, you can use **prepareScroll** feature for fetching large results in batches.

When you use **prepareScroll** flag in "get" request for events query, a **scrollId** is generated. You can use the **scrollId** to fetch next set of results. Note that too many scrollId's in the system can occupy lot of memory and storage space of the system. Hence, Riversand Platform allows you to delete the existing **scrollID** after viewing the required results. 

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to support scrolling for enormous results in [Event Services](api_event_service.html):

* [Prepare Scroll for Event Services Object Structure](api_event_scroll_object_structure.html)
* [Get Scroll ID and Delete Scroll ID using Clear Scroll](api_event_scroll_support_scenario1.html)