---
title: Stream Processing Facet Components
sidebar: rdp_sidebar
permalink: stream_facet_components.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

You can define the code for the stream processing facet in the App repository to create a customized stream processing layer based on your business requirements. The add-on stream processing layer is considered as a standalone component and isolates with the core streaming processing layer. 

Consider that you are creating an add-on stream processing layer, "greeterstreamingapp" to deploy and run your apps in the stream processing layer. The sample add-on "greeterstreamingapp" is available in the add-on app template repository, which you can use it as the reference.

This article describes the components of the stream processing facet and its usage in a runtime environment.

#### Interfaces and Helper classes

The following table lists the interfaces that are required for hosting add-on streaming topology in the Riversand data platform:

| Interface | Description |
| -------- | ---------- |
| IProcessAppMessage | This interface needs to be implemented for main processing of the message, which is a part of  StandardSingleLayerProcessing config. |
| IPreProcessAppMessage | This interface needs to be implemented to process the message before the main processing, which is a part of first layer in StandardThreeLayerProcessing config. The purpose of StandardThreeLayerProcessing is to distribute the processing of any message by providing three standard layers. |
| IPostProcessAppMessage | This interface needs to be implemented to process the message after the main processing is completed, which is a part of third layer in StandardThreeLayerProcessing config. Processing such as adding properties, calling APIs for persisting processed messages can be done in IPostProcessAppMessage interface. The purpose of StandardThreeLayerProcessing is to distribute the processing of any message by providing three standard layers. |

You can implement the various helper classes that are available in Streaming SDK JavaDocs during development. For more information, see [Stream Processing SDK JavaDocs](ref_stream.html)

The following screenshot depicts the interfaces and helper classes of "greeterstreamingapp", which are defined in source java:

{% picture streaming-interface.png alt="Interfaces and Helper Class" %}

#### Stream Processing Facet Configurations

The stream processing facet requires the following JSON configs, which are defined in the resources folder of the app repository:

* **serviceconfig**: This config is used to define Add-on streaming topology with the respective "ServiceSpecific" parameters. In the below **serviceconfig** JSON sample, "greeterstreamingapp" is defined with its respective "ServiceSpecific" parameters:

<pre>
<code>
{
  "services": {
    "greeterstream": {
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

* **messageconfig**: This config is used to define the custom messages for the Add-on streaming topology. In the below **messageconfig** JSON sample, a custom message is defined for "greeterstreamingapp":

<pre>
<code>
{
    "greeterstream": {
      "resources": {
        "text": {
          "messages": {
            "GS10001": {
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

* **artifactconfig**: This config is used by the admin service to locate the jar and its version. The following parameters are specified in the below sample **artifactconfig**:

* **parallelismHint**: Indicates the information of CPU and memory intensive of the custom code related to add-on stream processing layer. This parameter is used to provide the provide the parallelism for bolts. 

* **appDataProcessingFlow**: This section defines bolt level information of the App. The following are the three types of bolt configuration:
  * **standardSingleLayerProcessing**: Creates a single bolt per user for the app. This bolt is a part of SDK and you need to implement IProcessAppMessage interface to load the custom code from this bolt.
  * **standardThreeLayerProcessing**: Creates three bolts per user for the app. This bolt is a part of SDK and you need to implement IPreProcessAppMessage, IProcessAppMessage, and IPostProcessAppMessage interfaces to load the custom code from these bolts.
  * **overrideStandardLayers**: Overrides the standard bolts from the SDK and you can define your own bolt classes per user for the app. You need to specify custom class name of bolt in the config. You need to implement IProcessAppMessage interface to load the custom code and extend the abstract bolt AbstractAppProcessingBolt to develop the custom bolt.

* **publisherSubscriberInfo**: Indicates the information of the topics from where the apps must read the data and for which the data must be published when the processing is completed in the specific app layer. The data can be read from multiple topics and also can get published to multiple topics.
   

<pre>
<code>
{
  "artifactKey": "greeter-streamfacet",
  "parallelismHint": {
    "memoryHint": "medium",
    "performanceHint": "medium"
  },
  "appDataProcessingFlow": {
    "type": "standardSingleLayerProcessing",
    "StandardLayersCustomCodeConfig": {
      "standardSingleLayerProcessing": "com.riversand.examples.greeter.GreeterStreamingApp"
    }
  },
  "publisherSubscriberInfo": {
    "subscriber": [
      {
        "name": "greetersampleapp-connectorsedev"
      }
    ],
    "publisher": [
      {
        "name": "greeterstream1"
      }
    ]
  }

}
</code>
</pre>

#### package.json

This is a JSON configuration that defines the "code_path", where the configurations of the respective Add-on streaming topology are defined. The **package.json** config is defined under stream processing facet folder.

**Sample package.json**

<pre>
<code>
{
  "service_name": "greeterstream",
  "jar_name": "greeterstreamingapp-1.0.0-SNAPSHOT.jar",
  "main_class": "com.riversand.examples.greeter.GreeterStreamingApp",
  "code_path": "../../../source/java/greeterstreamingapp/target"
}
</code>
</pre>

Once the App development is done, then the source java, stream processing facet configs, and package.json are zipped in the form of "app bundle".

