Once the Entity is stored in respective stores, the entity is processed by several services such as entityAppService, rsConnectService, entityPostProcessService, entityManageService, and entityGovernService. Each of these services generates different events. You can troubleshoot these events using RESTful APIs. These services also logs certain messages during processing that can be verified through Kibana logs.

## Verify using RESTful APIs

You can verify the entity manage and entity govern events using the RESTful API "{TenantURL or ID}/api/requesttrackingobject/get". See [Request Tracking Service](/{{site.data.rdp_links_version.SDK}}/api_get_request_tracking_object.html){:target="_blank"}, for more details on the request tracking service. The following example demonstrates a sample request to get the details of a request object using taskId:


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

You can verify the entity manage and entity govern events using the RESTful API "{TenantURL or ID}/api/eventservice/get". See [Event Service](/{{site.data.rdp_links_version.SDK}}/api_events_get.html){:target="_blank"}, for more details on the event service. The following example demonstrates a sample request to get the details of a entitygovernevent:


{% highlight json %}
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "entitygovernevent"
        ],
        "attributesCriterion": [
          {
            "entityId": {
              "eq": "121e1f13-743b-4040-b342-1e451c6d548d"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
{% endhighlight %}


In the response, you can details related to rule such as BusinessRulePreparationService and BusinessRuleRunService. You can verify the rule status information such as success or error using "entitygovernevent" event type for a specific entity.

## Verify using Kibana Logs

You can search for certain messages in the Kibana logs to indicate if the entity is processed through different services such as entityAppService, rsConnectService, entityPostProcessService, entityManageService, and entityGovernService.

**To verify service messages in Kibana Logs**:

1. In the browser, access the Kibana URL <<ApplicationURL>>:5601

  **Result**: The Kibana logs for the application is displayed.

{:start="2"}

2. Enter the task Id in the Kibana search bar and click **Search** icon.

  **Result**: All the messages related to the task Id is displayed.

{% picture m-kibana-request_manage.png alt="Kibana Manage and Govern" %}

{:start="3"}

3. Click **CalleeServiceName** in the left panel. the task Id in the Kibana search bar and click **Search** icon.

  **Result**: A list of all the services is displayed.

{% picture m-kibana-list-services.png alt="Kibana List of Services" %}

{:start="4"}

4. Click the "+" icon next to the service. 

  **Result**: You can view the list of messages corresponding to the service. The following diagram illustrates the messages related to **Entity Govern Service**.

{% picture m-kibana-service-messages.png alt="Kibana Service Message" %}

Similarly, you can view messages of other services, if required, for further troubleshooting.