Any request such as create, update, or import submitted to the application goes through different Topologies for processing. As a part of troubleshooting an issue, you can verify the status of all the Topologies, Nimbus, and Supervisors by connecting to Storm port 8080. 

In the Storm UI, you can find the following details:
* Number of Supervisors
* Which Nimbus is the leader?
* How many Topologies are running/active
* Number of workers/threads and memory assigned per topology
* Uptime of Nimbus, Supervisor, and Topology 
<br/>

**To verify the status of the topologies**:

1. In the browser, access the Storm URL <<ApplicationURL>>:8080

    **Result**: If the Storm health is good, then you can view the following details in the UI:
    * The uptime of all the Topologies is approximately same
    * The status is "ACTIVE"
    * No exceptions at "SPOUT OR BOLT" level
    * The capacity at each BOLT must be less than 1  

{% picture m-storm-ui.png alt="StormUI" %}

{:start="2"}

2. In certain cases, although the topology status shows as active, internally the spouts and bolts may not be working as expected that causes the processing to slow down or even stopped. Click specific topology to view the details of spouts and bolts. 

    **Result**: The spout and bolts details of the specific topology is displayed. The following diagram depicts a case where the topology is active and working but the error is at the bolt level:

{% picture m-bolt-error.png alt="BoltError" %}