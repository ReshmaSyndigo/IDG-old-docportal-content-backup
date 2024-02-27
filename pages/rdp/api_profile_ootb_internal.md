---
title: Out-of-the-box (OOTB) System Profiles and Connectors
sidebar: rdp_sidebar
permalink: api_profile_ootb.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

**Riversand Platform** provides several OOTB connectors for content onboarding and content distribution. The following lists supported out-of-the-box connectors in RDP:

| OOTB Connector | Description |
|---------------|----------------|
| Amazon S3 | You can configure RDP to use Amazon S3 for storing and retrieving digital assets.|
| Amazon Kinesis‎ | You can configure RDP to use Amazon Kinesis‎ for collecting, processing, and analyzing real-time, streaming data to get timely insights. Amazon Kinesis is an Amazon Web Service (AWS) for processing big data in real time. Kinesis is capable of processing hundreds of terabytes per hour from high volumes of streaming data from sources such as operating logs, financial transactions and social media feeds. |
| Eventhub, Blob Store | You can configure RDP to use Azure storage mechanisms - Eventhub and Blob Store, for importing and exporting data to and from RDP respectively. Azure Event Hubs is a big data streaming platform and event ingestion service. It can receive and process millions of events per second.|
| HTTP Connector | Indicates the channel through which data is imported into Riversand Platform from a URL. |
| genericObjectConnector | Indicates the channel for exporting the data from Riversand Platform to Kinesis. This connector internally calls the Riversand Platform connector for further functioning. |
| folderConnector | Indicates the channel or medium used to export the data from Riversand Platform to a particular folder in the downstream system. |
| presentationConnector | Indicates the channel or medium used to present the data to the UI. |
| Riversand Connector (rdpConnector) | Indicates a medium that establishes connectivity between RDP and upstream/downstream systems. |
| Secure File Transfer Protocol (SFTP) | Indicates a medium or channel that is used for Import and Export operation. SFTP is a secure version of File Transfer Protocol (FTP), which facilitates data access and data transfer over a Secure Shell (SSH) data stream. |

<div class="panel-group" id="accordion">
   <div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Amazon S3 Profile Configuration</a>
         </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		By default, Amazon S3 profile is available as an OOTB feature. However, based on the S3 bucket details created for your environment, you must update the <b>bucketName</b> in the <b>channel</b>section. See <a href="api_profile_object_structure_import.html">Profile Configuration Object Structure for Import Service</a> and  <a href="api_profile_object_structure_export.html">Profile Configuration Object Structure for Export Service</a>, for more information on profile object. The following example demonstrates a sample <b>channel</b> section of Amazon S3 profile:
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}
{
  "channel": [
    {
      "type": "s3BucketConnector",
      "credentialsType": "{{AWSCREDENTIALSTYPE}}",
      "settings": {
        "fileType": "json",
        "bucketName": "{{ENVNAME}}-import",
        "regionName": "{{AWSREGIONNAME}}",
        "accessId": "{{AWSS3ACCESSID}}",
        "secretKey": "{{AWSS3SECRETKEY}}",
        "ec2IAMRole": "{{AMAZON_EC2_IAMROLE}}"
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div>
        </div>
      </div>
   </div>
   <div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Amazon Kinesis Profile Configuration</a>
         </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
           By default, Amazon Kinesis profile is available as an OOTB feature. However, based on the Kinesis stream name created for your environment, you must update the <b>streamName</b> in the <b>channel</b> section. See <a href="api_profile_object_structure_import.html">Profile Configuration Object Structure for Import Service</a> and  <a href="api_profile_object_structure_export.html">Profile Configuration Object Structure for Export Service</a>, for more information on profile object. The following example demonstrates a sample <b>channel</b> section of Amazon Kinesis profile:
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}
{
  "channel": [
    {
      "type": "kinesisStreamConnector",
      "credentialsType": "{{AWSCREDENTIALSTYPE}}",
       "settings": {
      	"streamName": "{{ENVNAME}}-import",
      	"regionName": "{{AWSREGIONNAME}}",
       	"accessId": "{{AWSKINESISACCESSID}}",
       	"secretKey": "{{AWSKINESISSECRETKEY}}",
       	"ec2IAMRole": "{{AMAZON_EC2_IAMROLE}}"
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div>
        </div>
      </div>
   </div>
<div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Eventhub Profile and Tenant Configuration</a>
         </h4>
      </div>
      <div id="collapseThree" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		By default, Eventhub profile and tenant configurations are available as an OOTB feature. However, based on the Eventhub namespace details created for your environment, you must update the <b>namespace</b> in the <b>Eventhub profile and tenant</b> configurations. See <a href="api_profile_object_structure_import.html">Profile Configuration Object Structure for Import Service</a> and  <a href="api_profile_object_structure_export.html">Profile Configuration Object Structure for Export Service</a>, for more information on profile object. The following example demonstrates a sample <b>channel</b> configuration section in Eventhub profile:
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}		
{
  "channel": [
    {
      "type": "eventHubConnector",
      "settings": {
        "eventHub": "import",
        "eventHubNamespace": "{{ENVNAME}}-{{TENANT}}-eventhub",
        "keyVaultUrl": "https://{{ENVNAME}}-rdp-keyvault.vault.azure.net"
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div> 
The following example demonstrates a sample <b>tenant</b> configuration details of Eventhub:
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}
{
  "azure": {
    "applicationId": "",
    "applicationSecret": "",
    "keyVaultUrl": "",
    "eventHubNamespace": "",
    "storageAccount": "",
    "spoutConfigs": {
      "import": {
        "spout-max-executors": 1,
        "spout-max-pending": 50,
        "spout-num-tasks": 2
      },
      "default": {
        "spout-max-executors": 1,
        "spout-max-pending": 50,
        "spout-num-tasks": 2
      }
    }
  }
}
{% endraw %}
</code></pre>
</code>
</div>
        </div>
      </div>
   </div>
<div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">HTTP Connector</a>
         </h4>
      </div>
      <div id="collapseFive" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		httpconnector indicates the channel through which data is imported into Riversand Platform from a URL. 
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}
{
  "channel": [
    {
      "type": "httpConnector",
      "settings": {
        "requestHeaders": {
          "X-Gateway-APIKey": "044aed07-7302-410f-b821-e663ef8337a1"
        }
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div> 
      </div>
   </div>
<div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">genericObjectConnector</a>
         </h4>
      </div>
      <div id="collapseSix" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		genericObjectConnector is used as a channel for exporting the data from Riversand Platform to Kinesis. This connector internally calls the Riversand Platform connector for further functioning. 
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}		
{
  "channel": [
    {
      "type": "genericObjectConnector",
      "settings": {}
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div> 
     </div>
   </div>
<div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">folderConnector</a>
         </h4>
      </div>
      <div id="collapseSeven" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		folderConnector indicates the channel or medium used to export the data from Riversand Platform to a particular folder in the downstream system.
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}		
{
  "channel": [
    {
      "type": "folderConnector",
      "settings": {
        "sourceFolder": "",
        "pattern": ""
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div>
  </div>
   </div>
<div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseEight">presentationConnector</a>
         </h4>
      </div>
      <div id="collapseEight" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		presentationConnector indicates the channel or medium used to present the data to the UI.
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}
{
  "channel": [
    {
      "type": "presentationConnector",
      "settings": {
        "mode": "ASYNC"
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div>
</div>
</div>
<div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseNine">Riversand Connector (rdpConnector)</a>
         </h4>
      </div>
      <div id="collapseNine" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		Riversand Connector (rdpConnector) indicates a medium that establishes connectivity between RDP and upstream/downstream systems.
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}	
For Import Profile Service:
{
  "channel": [
    {
      "type": "rdpConnector",
      "settings": {
        "type": "RSJSON",
        "requestforvaluemapping": "true"
      }
    }
  ]
}
{% endraw %}
</code></pre>
<pre><code>
{% raw %}
For Export Profile Service:
{
  "channel": [
    {
      "type": "rdpConnector",
      "settings": {
        "version": "1.1",
        "includeMatchingAttributes": true,
        "includeEnhancerAttributes": true,
        "includeParent": false,
        "includeRelatedEntityExternalIds": true,
        "includeRelatedEntities": false,
        "includeRelatedEntitiesRecursive": false
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div>
</div>
</div>
<div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">Secure File Transfer Protocol (SFTP)</a>
         </h4>
      </div>
      <div id="collapseTen" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
      		SFTP indicates a medium or channel that is used for Import and Export operation. SFTP is a secure version of File Transfer Protocol (FTP), which facilitates data access and data transfer over a Secure Shell (SSH) data stream.
<div class="highlighter-rouge">
<code>
<pre><code>
{% raw %}		
For Import Service:

{
  "channel": [
    {
      "type": "sftpFolderConnector",
      "host": "{{SFTPSERVER}}",
      "settings": {
        "username": "{{USERNAME}}",
        "password": "{{PASSWORD}}",
        "port": "22",
        "remotePath": "/",
        "keyPath": "",
        "strictHostKeyChecking": "false",
        "fileType": "json"
      }
    }
  ]
}

For Export Service:

{
  "channel": [
    {
      "type": "sftpConnector",
      "host": "{{SFTPSERVER}}",
      "settings": {
        "username": "{{USERNAME}}",
        "password": "{{PASSWORD}}",
        "port": 22,
        "keyPath": "",
        "remotePath": "/Export/"
      }
    }
  ]
}
{% endraw %}
</code></pre>
</code>
</div>
</div>
</div>