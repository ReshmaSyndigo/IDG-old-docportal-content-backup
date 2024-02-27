During entity created, when an entity is submitted to RP for processing, a request object is created in the system with status as "inProgress" and a request Id is sent back to the caller. You can troubleshoot the request using RESTful APIs and through Kibana logs.

## Verify using RESTful APIs

You can track the request using the RESTful API "{TenantURL or ID}/api/requesttrackingobject/get". See [Request Tracking Service](api_get_request_tracking_object.html){:target="_blank"}, for more details on the request tracking service. The following example demonstrates a sample request to get the details of a request object using taskId:

{% highlight json %}
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "requestobject"
        ],
        "attributesCriterion": [
          {
            "taskId": {
              "exact": "121e1f13-743b-4040-b342-1e451c6d548d"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
{% endhighlight %}


In the response, when the entity is saved in different technologies you can see the details are getting filled in the same request object. "SearchStore" indicates if the data is stored in "Elastic Search" or not. Similarly "ObjectStore" indicates if the data is stored in "HBase" or not. You can view the details of these objects and troubleshoot accordingly in case of errors. The following example demonstrates a sample response of a request object:  

{% highlight json %}
{
  "response": {
    "requestObjects": [
      {
        "id": "565560dc-1763-4d4c-8d63-75a941cef5f3",
        "type": "requestobject",
        "data": {
          "attributes": {
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e9a75698-8fbf-4a5f-ae23-5fb196b219cb",
                  "value": "success"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a3d61a1c-62e7-4c68-ba02-93f1f4851bc0",
                  "value": "success"
                }
              ]
            }
          },
          "jsonData": {
            "clientState": {
              "someJson": {}
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
{% endhighlight %}

## Verify using Kibana Logs

You can search for certain messages in the Kibana logs to indicate if the entity / entities are processed by Riversand Platform successfully or not.

**To verify if the entity is processed by Riversand Platform or not**:

1. In the browser, access the Kibana URL <<ApplicationURL>>:5601

  **Result**: The Kibana logs for the application is displayed.

{:start="2"}

2. Enter the task Id in the Kibana search bar and click **Search** icon.

  **Result**: All the messages related to the task Id is displayed. Search for the following messages in the result:

| Message | Description  |
|-------------|-------------|
|Response: status = success, message = Entity has been submitted for create with entity Id : 142373fa-045c-483d-8ab4-2667cea33332_0_out. Please check back after 1 min" , "Entity has been submitted for update with entity Id : 142373fa-045c-483d-8ab4-2667cea33332. Please check back after 1 min.| Implies that the connect service started submitting entities to Riversand Platform for create/update/delete.|
|Requesting to get id: '["sku_authorizationModel_admin"]' of type: 'authorizationModel.| Implies that a Riversand Platform call to get the model details.|
|Total models found: 24 are same as expected: 24.| Implies reference data model check, ideally model and expected should be same.|
|Time taken for get in search store is 928 ms : Request completed. | This message is displayed if any of the search calls takes more time than expected.|
|Time taken for reference resolution is 1351 ms : Request completed. | Indicates the time taken for reference data resolution.|