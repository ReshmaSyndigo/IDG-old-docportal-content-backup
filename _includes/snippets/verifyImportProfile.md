All the imports in Riversand Platform is based on the configured import profile. A profile defines how, what, and where to read from a source and write to a destination. Each import profile has a unique profile Id. You can view if the import profile is configured correctly or not using the RESTful APIs and through Kibana logs.

## Verify using RESTful API

You can validate the profiles using the RESTful API "{TenantURL or ID}/api/configurationservice/get". See [Configuration Service](/{{site.data.rdp_links_version.SDK}}/api_get_configuration.html){:target="_blank"}, for more details on the configuration service. The following example demonstrates a sample request to get all import profiles:

{% highlight json %}
{
  "params": {
    "query": {
      "contexts": [
        {
          "app": "RSConnect"
        }
      ],
      "filters": {
        "typesCriterion": [
          "integrationprofile"
        ],
        "excludeNonContextual": true
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

## Verify using Kibana Logs

You can search for certain messages in the Kibana logs to indicate if the entity / entities are picked up for processing by the correct import profile or not.

**To verify if the import profile is working correctly or not**:

1. In the browser, access the Kibana URL <<ApplicationURL>>:5601

  **Result**: The Kibana logs for the application is displayed.

{:start="2"}

2. Enter the task Id in the Kibana search bar and click **Search** icon.

  **Result**: All the messages related to the task Id is displayed. Search for the following messages in the result:

| Message | Description  |
|-------------|-------------|
|Event: ProfileType = ENTITY_IMPORT, ProfileName = Excel_Import_Process_Dynamic, TenantId = <TenantId>, taskId = 142373fa-045c-483d-8ab4-2667cea33332, message = The entity import task has been queued. | Implies that import is picked up by the system and it is processing based on the profile configuration as specified in the message.|