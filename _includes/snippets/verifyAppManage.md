During troubleshooting, if you find that there is no error at the topology or bolt level, then the next step is to verify if **App Manage** is working as expected. You can verify if **App Manage** is working or not by checking for certain messages that must be generated in the Kibana logs.

**To verify if App Manage is working or not**:

1. In the browser, access the Kibana URL <<ApplicationURL>>:5601

    **Result**: The Kibana logs for the application is displayed.

2. In the Kibana logs, check for the following messages: 

* Time taken for category resolution
* Time taken for name resolution
* Time taken for value mapping resolution
* Time taken for reference resolution

    **Result**: If the topologies and bolts are active with no errors, then the following App Manage messages must be displayed in the Kibana logs:

{% picture m-kibana-logs.png alt="KibanaLogs" %}