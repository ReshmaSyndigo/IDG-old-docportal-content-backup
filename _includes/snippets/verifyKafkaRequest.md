You can check if the entities are submitted and getting processed by Kafka using the Kibana Logs.

**To verify if request is submitted to Kafka**:

1. Get the task Id of the import job from the UI.

{% picture task-details.png alt="App Task Details" %}

{:start="2"}

2. In the browser, access the Kibana URL <<ApplicationURL>>:5601

    **Result**: The Kibana logs for the application is displayed.

{:start="3"}

3. Enter the task Id in the Kibana search bar and click **Search** icon.

{% picture m-kibana-request.png alt="Kibana Request" %}

<div class="res" markdown = "1">
 **Result**: All the messages related to the task Id is displayed. Search for the following messages in the result:
</div>

| Message | Description  |
|-------------|-------------|
|Entity has been submitted for create with entity Id : <Entity id>. Please check back after 1 min. | Implies that the request is submitted to Kafka.|
|Publish message to kafka, queue = KafkaMessageBroker: topic = rsconnectimportuibulk, taskId = 142373fa-045c-483d-8ab4-2667cea33332, parentId = null. | Implies in which topic the message is getting processed. If the messages are not getting processed in expected time then, you can verify the lag on the specified topic. See [Check for lags using Diagnostic Service](m_ts_verify_lag.html).|	

This view contains all the log details in the system. This report is time-based where you can filter the logs based on a specific time interval. See [how to view time-based reports in Kibana](m_time_report.html)