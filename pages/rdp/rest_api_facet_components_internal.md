---
title: REST API Facet Components
sidebar: rdp_sidebar
permalink: rest_api_facet_components.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

You can define the code for REST API facet in the App repository to create a customized REST API based on your business requirement. The Add-on REST API is considered as a standalone  component and isolates with the core APIs. 

Consider that you are creating a add-on REST API service, "greeter" API to improve the data management based on your requirement. 

This article describes about the components of REST API facet and its usage in runtime environment.

#### Service Handler

To implement REST API Facet, you need to extend ServiceHandler abstract class. Methods to Create Request and Build Response are provided by the platform as part of ServiceHandler. These Methods can be overridden to introduce your own functionality based on your requirements. You can define the extended ServiceHandler abstract class in source java folder in your app depository.

The following screenshot depicts a sample extended ServiceHandler abstract class for greeter service, which is defined in source java:

{% picture service_handler.png alt="ServiceHandler" %}

#### REST API Annotation

The REST API Annotations are used to define API endpoints. The REST API annotation supports the following:

* **Action**: Specifies the REST API action. For example, "hello" is the action for greeter API service and you can specify it using RestAPI annotation as an API endpoint in the format, "api/greeter/hello".

* **acessLevels**: Specifies the API access level based on your requirement. For example, the access level is "Privileged" for “hello” API action of the greeter app. 

You can define the annotations in the "GreeterServiceHandler.java" file in the source java.

A sample method that defines the REST API annotation is depicted in the below screenshot:

{% picture rest-api-annotation.png alt="REST API Annotation" %}

#### REST API Facet Configurations

The REST API facet requires the following JSON configs, which are defined in the resources folder of the app repository:

* **serviceconfig**: This config is used to define Add-on REST API service with the respective "ServiceSpecific" parameters. In the below **serviceconfig** JSON sample, greeter API service is defined with its respective "ServiceSpecific" parameters:

<pre>
<code>
{
    "services": {
      "greeter": {
        "serviceSpecific": {
		"logLevel": "info",
		"defaultMaxRecords": 100,
          	"isRandomGreetingEnabled": "false",
          	"greeting message": "Good morning, good evening and good night!!"          
       }
     }
   }
 }
</code>
</pre>

* **messageconfig**: This config is used to define the custom messages for the Add-on REST API service. In the below **messageconfig** JSON sample, a custom message is defined for greeter REST API service.

<pre>
<code>
{
    "greeter": {
      "resources": {
        "text": {
          "messages": {
            "G10001": {
              "locales": {
                "en-US": {
                  "messageText": "Greeting error :",
                  "messageType": "ERROR",
                  "messageDesc": "An error message when we can not greet .. for some reason!!"
                }
              }
            }
          }
        }
      }
    }
  }
  </code>
  </pre>

* **artifactconfig**: This config is used by the admin service to locate the jar and its version. In the below **artifactconfig** JSON sample, the respective "artifactKey" and "main_class" is defined for the greeter REST API service.

<pre>
<code>
{
  "artifactKey": "greeter-restapifacet",
  "main_class": "com.riversand.examples.greeter.GreeterServiceHandler"
}
</code>
</pre>

#### package.json

This is a JSON configuration that defines the REST API "code_path", where the configurations of the respective Add-on REST API service are defined. The **package.json** config is defined under REST API facet folder.

**Sample package.json**

<pre>
<code>
{
    "service_name": "greeter",
    "jar_name": "greeter-1.0.0-SNAPSHOT.jar",
    "main_class": "com.riversand.examples.greeter.GreeterServiceHandler",
    "code_path": "../../../source/java/greeter/target"
}
</code>
</pre>

Once the App development is done, then the defined ServiceHandler class, REST API annotations, REST API facet configs, and package.json are zipped in the form of "app bundle".

