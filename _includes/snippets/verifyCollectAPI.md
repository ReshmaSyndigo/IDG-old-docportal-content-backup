In Riversand Platform, the Content Onboarding and Publishing (COP) is performed in three steps:

* **Collect**: Collect and extract information from the source entities and compose the stream of records required for target system.
* **Transform**: Transform source records to canonical presentation.
* **Publish**: Send target records to the target system.

As the entities gets processed in each step, the status such as SUBMITTED, QUEUED, and PROCESSING_COMPLETED is updated accordingly. If there are errors during processing, then you can verify the status at each step using RESTful APIs and through Kibana logs. The errors are logged with QUEUED_ERROR, PROCESSING_START_ERROR, PROCESSING_COMPLETE_ERROR, PROCESSING_COMPLETE_WITH_WARNING or PROCESSING_SUBMISSION_ERROR status.

## Verify using RESTful API

You can verify the collect, transform, and publish steps using the RESTful API "{TenantURL or ID}/api/eventservice/get". See [Event Service](/{{site.data.rdp_links_version.SDK}}/api_event_service.html){:target="_blank"}, for more details on the event service.

In each step, you can check for the total records processed in each step using and compare with the total records submitted in the import job. If you find a mismatch, then check for further errors in the event Get query. Substitute the eventSubType with QUEUED_ERROR, PROCESSING_START_ERROR, PROCESSING_COMPLETE_ERROR, PROCESSING_COMPLETE_WITH_WARNING or PROCESSING_SUBMISSION_ERROR values and check for the records.

**Collect**: The following example demonstrates a sample JSON request to check if the application has picked up the entity for processing or not: 

{% highlight json %}
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "externalevent"
        ],
        "attributesCriterion": [
          {
            "eventType": {
              "exact": "BATCH_COLLECT_ENTITY_IMPORT"
            }
          },
          {
            "profileType": {
              "exact": "ENTITY_IMPORT"
            }
          },
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
        "eventSubType",
        "taskId",
        "fileName"
      ]
    }
  }
}
{% endhighlight %}

**Transform**: The following example demonstrates a sample JSON request to check if the application has picked up the entity for processing or not for transforming: 

{% highlight json %}
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "externalevent"
        ],
        "attributesCriterion": [
          {
            "eventType": {
              "exact": "BATCH_TRANFORM_ENTITY_IMPORT"
            }
          },
          {
            "profileType": {
              "exact": "ENTITY_IMPORT"
            }
          },
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
        "eventSubType",
        "taskId",
        "fileName"
      ]
    }
  }
}
{% endhighlight %}

**Publish**: After transform the entity passes through the Publish topology and is submitted to RP for processing. The following example demonstrates a sample JSON request to check the records in Publish topology: 

{% highlight json %}
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "externalevent"
        ],
        "attributesCriterion": [
          {
            "eventType": {
              "exact": "RECORD_PUBLISH_ENTITY_IMPORT"
            }
          },
          {
            "profileType": {
              "exact": "ENTITY_IMPORT"
            }
          },
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
        "eventSubType",
        "taskId",
        "fileName"
      ]
    }
  }
}
{% endhighlight %}

## Verify using Kibana Logs

You can search for certain messages in the Kibana logs to indicate if the entity is picked by the collect bolt for processing.

**To verify if the entity is picked by the collect bolt for processing or not**:

1. In the browser, access the Kibana URL <<ApplicationURL>>:5601

  **Result**: The Kibana logs for the application is displayed.

{:start="2"}

2. Enter the task Id in the Kibana search bar and click **Search** icon.

  **Result**: All the messages related to the task Id is displayed. Search for the following messages in the result:

| Message | Description  |
|-------------|-------------|
|Event: ProfileType = ENTITY_IMPORT, ProfileName = Excel_Import_Process_Dynamic, TenantId = infodev, taskId = 142373fa-045c-483d-8ab4-2667cea33332, parentId = null, message = Extract-transform-load task has started. | Implies that the entity has been picked by transform bolt after the collect bolt.|

{:start="3"}

3. Enter the "Processing 0 records" or with the specific stream name, if available, in the Kibana search bar and click **Search** icon.

{% include callout.html content="**Note**: In Kibana, the search is case-sensitive. Ensure that the stream name is of the correct case before searching.
" type="primary" %}

  **Result**: The messages related to Collect API is displayed in the search result if the Collect API is working as expected.

{% picture m-kibana-collect.png alt="Kibana Collect" %}