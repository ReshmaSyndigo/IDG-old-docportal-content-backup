---
title: Deploy Topology
sidebar: rdp_sidebar
permalink: api_admin_deploy_topology.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A topology is a graph of computation. Each node in a topology contains processing logic, and links between nodes indicate how data should be passed around between nodes. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deploytopology}}** to deploy a topology, using a scenario.

The Riversand MDM Environment is formed by multiple topologies with each topology containing a specific functionality/service such as entitygraphservice, entitygovernservice etc. The list of all the topologies is depicted in the illustration below.

{% picture list-of-topologies.png alt="List of Topologies" %}

## Scenario

To deploy rsdam topology.

{% include snippets/header.html %}

## Request

To deploy the above topology, use the RESTful API **{{site.data.rdp_glossary.deploytopology}}**. In the request send the following details:

* adminObject : Specify the id as "rsdammetadata" and type as "metadata".
* properties : Specify the properties of the adminObject such as serviceName, inboundDomain, artifact, topologyBuilderclass, and mainclass.
* serviceName : Specify as "rsAssetService".
* artifact : It is a jar file containing the topology. Here we have specified as rsdam-metadata-topology-1.1.1338.jar.

<pre>
<code>
POST **{{site.data.rdp_glossary.deploytopology}}**.
Headers: Content-Type: application/json
Body:
{
  "adminObject": {
    <span style="background-color: #FFFF00">"id": "rsdammetadata",</span>
    <span style="background-color: #FFFF00">"type": "metadata",</span>
    <span style="background-color: #FFFF00">"properties": {</span>
      "serviceName": "rsAssetService",
      "inboundDomain": "metadata",
      "artifact": "rsdam-metadata-topology-1.1.1338.jar",
      "topologyBuilderClass": "com.riversand.rsdam.metadata.topology.MetadataTopologyBuilder",
      "mainClass": "com.riversand.rsdam.metadata.topology.App"
    }
  }
}
</code>
</pre>

## Response

If the topology is deployed successfully, then the following response is shown.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "28c457e5-5a05-452d-81a7-5b6a9d51883b",
    "taskId": "28c457e5-5a05-452d-81a7-5b6a9d51883b"
  },
  "response": {
    "status": "error",
    "statusDetail": {
      "message": "Topology is successfully submitted."
    },
    "totalRecords": 0
  }
}
</code></pre>

**Note**: If topology already exists with the same name, the following response is shown.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "52009c3e-bd49-4884-a8c3-46474bdfeee2",
    "taskId": "52009c3e-bd49-4884-a8c3-46474bdfeee2"
  },
  "response": {
    "status": "error",
    "statusDetail": {
      "message": "Topology is successfully submitted.",
      "errorDetails": "java.lang.RuntimeException: Topology with name `adminService` already exists on cluster"
    },
    "totalRecords": 0
  }
}
</code></pre>

**Verify the Deployed Topology**

You can verify the deployed topology in Storm UI.