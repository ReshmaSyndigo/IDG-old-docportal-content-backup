---
title: Check App SDK Version Compatibility
sidebar: rdp_sidebar
permalink: api_admin_check_sdk_compatibility.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand platform allows you to check the compatibility of the App SDK version during the deployment of any add-on app to prevent the app from getting installed with incompatible SDK version. You can check the compatibility of a particular SDK version by validating the semantic version or flags that are configured in "frameworkinfo" object.

## Scenario

Consider that you wish to check the compatibility of "Integration SDK" version during app deployment.

The following are the steps that needs to be performed to check SDK version compatibility:

* [Configure Framework Info Object](#configure-framework-info-object)
* [Run Admin Service API Query to check SDK Version Compatibility](#run-admin-service-api-query-to-check-sdk-version-compatibility)

### Configure Framework Info Object

The Framework Info object is a JSON file, which is used to specify the SDK version properties. This is a base config that is maintained in core-apps-configs git repository. You can override these configs whenever there is an update in the SDK version. 

The following JSON sample demonstrates the sample "frameworkinfo" object configuration for "Integration SDK". In the below JSON, specify the following parameters:

* **properties** > **currentVersion**: Specify the current version of SDK that is released by the platform.
* **properties** > **isVersionCheckEnabled**: Specify as "true" to check the Compatibility of the version.
* **properties** > **sdkName**: Specify the name of SDK. In the below JSON, "sdkName" is specified as "integrationSDK".
* **jsonData** > **minSupportedVersion**: Specify the least supported version of SDK. This is optional. If this is specified, then the API considers this as the least supported version of SDK else semantic versioning is considered to execute compatibility logic. In the below JSON,  "minSupportedVersion" is specified as "2.5.0".

<pre>
<code>
{
  "id": "integrationSDK_frameworkinfo",
  "name": "Integration SDK",
  "type": "frameworkinfo",
  "properties": {
    <span style="background-color: #FFFF00">"currentVersion": "2.8.0",</span>
    <span style="background-color: #FFFF00">"isVersionCheckEnabled": "true",</span>
    <span style="background-color: #FFFF00">"sdkName": "integrationSDK"</span>
  },
  "data": {
    "jsonData": {
      "scope": "external",
      <span style="background-color: #FFFF00">"minSupportedVersion": "2.5.0",</span>
      "versioningScheme" : "java"
    }
  }
}
</code>
</pre>

### Run Admin Service API Query to check SDK Version Compatibility

{% include snippets/header.html %}

## Request

To check SDK version compatibility, use the RESTful API **{{site.data.rdp_glossary.checkdependency}}**. In the request send the following details:

* **adminObject** > **id**: Specify the "id" by including the respective "APP_ID" as {APP_ID}_sdkdependencies. For example, if the "APP_ID" is "testapp", then specify the "id" as "testapp_sdkdependencies".
* **adminObject** >  **name**: Specify the "name" by including the respective "App Name" as {APP NAME} SDK Dependency. 
* **appName** : Specify the name of the add-on app. In the below JSON, "appName" is specified as "Hello world greeter".
* **description**: Specify the description of the add-on app. In the below JSON, "description" is specified as "This is a sample application".
* **sdkDependencies**: Specify the SDK dependencies with their appropriate versions for the add-on app. In the below JSON, the SDK dependencies such as "uiPluginSDK", "analyticsSDK", "connectorsSDK", and "visualizationSDK" are specified with their appropriate versions.

The "jsonData" object contains the information provided in the "application.json" file of add-on app repository.

<pre>
<code>
POST **{{site.data.rdp_glossary.deploytopology}}**.
Headers: Content-Type: application/json
Body:
{
  "params": {},
  "adminObject": {
    "id": "{APP_ID}_sdkdependencies",
    "name": "{APP NAME} SDK Dependency",
    "properties": {},
    "data": {
      "jsonData": {
        <span style="background-color: #FFFF00">"id": "helloworld",</span>
        <span style="background-color: #FFFF00">"appName": "Hello world greeter",</span>
        <span style="background-color: #FFFF00">"description": "This is a sample application",</span>
        <span style="background-color: #FFFF00">"sdkDependencies": { </span>
          "uiPluginSDK": "1.2.0",
          "analyticsSDK": "1.0.0",
          "connectorsSDK": "1.1.0",
          "integrationSDK": "1.1.0",
          "visualizationSDK": "1.3.0"
        }
      }
    }
  }
}
</code>
</pre>

## Response

In the below response, you can check the response messages for each SDK dependencies. This indicates whether the respective SDK dependency is compatible or not with the version defined in the Framework Info object:

<pre><code>
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
                    <span style="background-color: #FFFF00">"message": "The version 1.2.0 for uiPluginSDK is compatible"</span>,
                    "messageCode": "E0129",
                    "messageType": "success",
                    "messageParams": [
                        "uiPluginSDK"
                    ]
                },
                {
                    <span style="background-color: #FFFF00">"message": "The version 1.0.0 for analyticsSDK is not compatible"</span>,
                    "messageCode": "E0129",
                    "messageType": "error",
                    "messageParams": [
                        "analyticsSDK"
                    ]
                },
                {
                    <span style="background-color: #FFFF00">"message": "The version 1.1.0 for connectorsSDK is compatible"</span>,
                    "messageCode": "E0129",
                    "messageType": "success",
                    "messageParams": [
                        "connectorsSDK"
                    ]
                },
                {
                    <span style="background-color: #FFFF00">"message": "The version 1.1.0 for integrationSDK is compatible"</span>,
                    "messageCode": "E0129",
                    "messageType": "success",
                    "messageParams": [
                        "integrationSDK"
                    ]
                },
                {
                    <span style="background-color: #FFFF00">"message": "The version 1.3.0 for visualizationSDK is compatible"</span>,
                    "messageCode": "E0129",
                    "messageType": "success",
                    "messageParams": [
                        "visualizationSDK"
                    ]
                }
            ]
        },
        "totalRecords": 0
    }
}
</code></pre>

If the App SDK version is not compatible, then the respective add-on app does not get deployed in the Riversand platform.

The following are the various scenarios that are considered during SDK version compatibility check:

| Scenario | Min Supported Version | SDK Version in Framework Info Object | APP SDK Version | Result |
| ---------- | --------------- | ------------ | ------------- | --------------- |
| Backward Compatibility Check | N/A | 1.1.2 | 1.0.1 | SDK version is compatible as the App SDK version is lower than SDK version in Framework Info object. |
| Forward Compatibility Check | N/A | 1.1.0 | 1.2.1 | SDK version is not compatible as App SDK version is higher than SDK version in Framework Info object. |
| Major difference in versions | N/A | 2.1.0 | 1.2.1 | SDK version is not compatible as App SDK version and SDK version in Framework Info object have major difference in versions. |
| App SDK verison is lower than min version | 2.1.2 | 2.5.0 | 1.2.0 | SDK version is not compatible as App SDK version is lower than min supported version. |
| App SDK Version is same as min version | 1.3.0 | 1.7.0 | 1.3.0 | SDK version is compatible as App SDK version is same as min supported version. |
| App SDK Version is same as SDK Version in Framework Info Object | 2.5.0 | 2.8.0 | 2.8.0 | SDK version is compatible as App SDK version is same as SDK version in Framework Info object. |
