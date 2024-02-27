---
title: Connector Services
sidebar: rdp_sidebar
permalink: api_connectorservice.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to syndicate and withdraw the data to and from various syndication channels through connector services. 

The following are the list of all available Connector Service RESTful API endpoints.

| EndPoint Name | Description |  
|---------------|-------------|
| **syndicate** | This API is used to invoke connector Publish and mainly used in UI connector publish button configurations |
| **publish** | This API is used to invoke Connector Publish in which the request is passed to ConnectorTopology via RSConnectTopology |
| **scheduleprocess** | This API is used to invoke generic objects publish in which the request is passed to extensions via ConnectorTopology |
| **create** | This API is to create generic objects for all connector objects (state, activity, and so on) |
| **update** | This API is to update generic objects for all connector objects (state, activity, and so on) |
| **get** | This API is to get generic objects for all connector objects (state, activity, and so on) |
| **getconnectorstate** | This API is used to  get connectorstate object and provides data to the item view dashboard |
| **setconnectorstate** | This API is used to create or update a connectorstate object and also update the attribute of connectorstate object with appropriate transition code |
| **collect** | This API is used to collect entity data from different channels |
| **collectdata** | This API is used to collect entity data from different channels |
| **getstatus** | This API is used to get different metrics associated with syndicated entities. It is mainly used to display syndication dashboard widget |
| **getitemstatus** | This API provides data to the chart in the item view page |
| **getconnectorhistory** | This API  provides history of entities being sent to different channels |
| **getentityid** | This API is used to get matched entity ids along with types  for the search criteria applied in entity search page. The result is used to build the next(getentitystate) query for fetching the state information |
| **getentitystate** | This API is used to get the combined result of entity GET and connector state GET for the entityIds and types specified (using the getentityid) |
| **getchannels** | This API is used to get the list of available syndication channels configured for the given tenant |
| **createchannel** | This API is used to create a new syndication channel to and from where entities can be published and withdrawn respectively |
| **updatechannel** | This API is used to update the existing syndication channel |
| **deletechannel** | This API is used to remove the existing syndication channel |
| **withdraw** | This API is used to revoke the published entities from the syndication channel using withdraw action in UI |
| **downloadDataJob** | This API is used to download connector state objects in the format of excel |
| **process** | This API is used to import generic object data through Connector Hub status import option from UI directly or through the scheduler. |