---
title: Unsubscribe App SDK Facets for the Add-on App
sidebar: rdp_sidebar
permalink: api_unsubscribe_sdk_facet.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand platform provides the ability to disable/unsubscribe the various App SDK facets such as integration, connector, and REST API that are required to develop add-on apps based on your requirements.

You can unsubscribe the facets using **{TenantURL or ID}/api/adminService/unsubscribeapp}** API for the required add-on app at the tenant level.

## Scenario

To unsubscribe the App SDK facets, which are part of the "helloworld" app at the tenant level.

## Header

The header of the request contains parameters to authenticate and authorize the request. The request is authenticated only if the API authentication is enabled in the tenant configuration. See [Authentication Services](/v1/docs/authentication-services-1) for more information.

To authenticate the request, you must:

* Use https and append the request with the current time-stamp in ISO_8601 format (&timeStamp="current timestamp in ISO_8601 format")

* Generate authToken by hashing the request using the clientAuthKey with HmacSHA256 algorithm.

* Pass the clientId, userId, and authToken in the header.

You can also pass additional parameters such as ownershipData and userRoles in the request header to authorize the request. See [Authorization Model](/v1/docs/authorization-model) and [Understanding the Request Headers](/v1/docs/understanding-request-headers) for more information.


## Request

To unsubscribe the App SDK facets, you can use the RESTful API **{TenantURL or ID}/api/adminService/unsubscribeapp**

The following example demonstrates a sample JSON request to unsubscribe the App SDK facets of the "helloworld" app. Specify the following parameters in the JSON request:

* **id**: Specify the id of the app.
* **name**: Specify the name of the app.
* **jsonData > appId**: Specify the App ID. In this scenario, the "appId" is "helloworld".
The  "jsonData" includes the contents of the “application.json” from the App repository of the respective app.

<pre>
<code>
{
    "params": {},
    "adminObject": {
        "id": "{APP_ID}_validateApp",
        "name": "{APP NAME} Validate App",
        "data": {
            "jsonData": {
               <span style="background-color: #FFFF00"> "appId": "helloworld"</span>
            }
        }
    }
}
</code>
</pre>

## Response

The below sample response is returned, which indicates the status of unsubscribing the APP SDK facets: 

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "requestId": "ed1dc4ec-467a-42e1-a788-6fc91e0e35a4",
        "taskId": "ed1dc4ec-467a-42e1-a788-6fc91e0e35a4"
    },
    "response": {
        "status": "error",
        "statusDetail": {
            "messages": [
                {
                    "message": "The unsubscribe call for connectorsSDK is successful",
                    "messageCode": "E0129",
                    "messageType": "success",
                    "messageParams": [
                        "connectorsSDK"
                    ]
                },
                {
                    "message": "The unsubscribe call for integrationSDK is successful",
                    "messageCode": "E0129",
                    "messageType": "success",
                    "messageParams": [
                        "integrationSDK"
                    ]
                }
            ]
        },
        "totalRecords": 0
    }
}