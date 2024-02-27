---
title: Understand Connector Request and Message Activity Objects
sidebar: rdp_sidebar
permalink: si_conn_activity.html
folder: rdp
type: Description
---

Whenever any entity is syndicated to any end-channel through any connector, it is required to certain connector objects for key information and history of the entity data that passes through different phases or framework levels.

It is important to understand the following connector objects for data tracking and analytics:

* Request activity 

* Message activity 

#### Request activity

When any entity is syndicated to supported end-channel, a request will be initiated. To track this request, a new request activity needs to be created by the developer. The request activity object contains key information about various entity status(es) and request details. For example, if there is one request with 10 entities, then request activity object holds the information about overall status of 10 entities.

Note that, any request activity created should be completed whenever any data syndication activity is done (either syndication success or error).

#### Message activity

When any request is initiated, syndication orchestration send multiple messages (payloads) to the intended end-channel. The activity involving these messages is called as a message activity. If required, the Developer needs to create the message activity for a critical code block.

Basic guidelines to create message activity are as follows: 

* Create message activity per API call 

* Create message activity for any business-critical operation

One request activity can have multiple message activities and those message activity objects has the same id of the request activity object. 

#### How to Construct ActivityObjects 

Developer should use **ConnectorStateAndActivity** class to construct the objects. For more information, see [Connector SDK](ref_int_conn.html).

#### How to persist the class

**connectorServiceHelper** class in Connector SDK provides various methods to persist the created instance of the activity. For more information, see [Connector SDK](ref_int_conn.html).