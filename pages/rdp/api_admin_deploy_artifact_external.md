---
title: Deploy Artifact
sidebar: rdp_sidebar
permalink: api_admin_deploy_artifact.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section explains the usage of internal API **{{site.data.rdp_glossary.deployartifact}}** to deploy [extensions](/{{site.data.rdp_links_version.APP}}/rdp_feature_ingestion_extensibility_intro.html) in RDP SDK. 

## Scenario

To deploy extension jar file containing custom extensions for "entityGraphManageService" for "rwtest" tenant.

{% include snippets/header.html %}

## Request

To deploy the artifact, you can use the RESTful API **{{site.data.rdp_glossary.deployartifact}}**

The following example demonstrates a sample JSON request to deploy artifact. In this scenario, we are deploying a JAR file "riverworks-extensions-1.0.0.jar" that contains the custom extensions for "entityGraphManageService" for the tenant "rwtest".

<pre>
<code>
POST **{{site.data.rdp_glossary.deployartifact}}**
Headers: Content-Type: application/json
Body:
{
  "adminObject": {
    "id": "someguid",
    "type": "adminObject",
    <span style="background-color: #FFFF00">"properties": {</span>
      "originalFileName": "riverworks-extensions-1.0.0.jar",
      "serviceName": "entityGraphManageService",
      "tenantId":"rwtest"
    }
  },
  "returnRequest": false,
  "params": {}
}
</code>
</pre>

## Verification

The jar file is uploaded to the specified cloud storage such as S3/Azure.