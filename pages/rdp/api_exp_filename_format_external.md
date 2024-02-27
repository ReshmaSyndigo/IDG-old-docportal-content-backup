---
title: Export File Name Formats
sidebar: rdp_sidebar
permalink: api_exp_filename_format.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic covers the different file name formats used during Export - Publish operation. The file name format in Export differs based on the type of operation and the different channels used during Publish. 

The following table lists the file name formats for two different operations during Export-Publish.

| Type of Operation | File Name Format |
|-------------------|------------------|
| Download Excel from UI<br/>(This operation is a SYNC request, where the UI returns data for requests immediately.) | EntityData-<<currentdatetime>>.<<extension>><br/>(Example: EntityData-15278595). Here, "EntityData" text is not configurable and currentdatetime is in milliseconds elapsed since January 1, 1970, 00:00:00 UTC. Thus, every file downloaded is uniquely identifiable. |
| Download Data Job<br/> (This operation is an ASYNC request, where the request is executed as a batch job that runs in the background and the result is published in the UI.) | 1\. taskId_out.xlsm for non-batched files.<br/>2\. taskId_batchNumber_out.xlsm for batched files (where the data records can be split in multiple files and then downloaded) |

{% include callout.html content="**Note:** The file name format for Download Excel from UI and Download Data Job is fixed and cannot be changed.<br/>
" type="primary" %}

### Customized Export File Name and Blob Name

You can customize the file name for Amazon S3 connector and Azure Blob Store, which are used as channel for Export-Publish operation. 

### Amazon S3 Connector

The following sample configuration displays the custom file name  defined for Amazon S3 connector.

<pre><code>
{
  "channel": [
    {
      "type": "s3ObjectConnector",
      "settings": {
        "regionName": "{{AWSREGIONNAME}}",
        "bucketName": "{{ENVNAME}}-{{TENANT}}-export",
        "folderPath": "{{FOLDERPATH}}",
        "accessId": "{{AWSS3ACCESSID}}",
        "secretKey": "{{AWSS3SECRETKEY}}",
        "ec2IAMRole": "{{AMAZON_EC2_IAMROLE}}",
        "fileName": "<<customFileName>>",
        "key": "xlsm"
      }
    }
  ]
}
</code></pre>

### Azure Blob Store

The following sample configuration displays the custom file name defined for Azure Blob Store in 
publish->format->settings->additionalsettings:

<pre><code>
{
  "format":
  {
    "type": "RSJSON",
    "version": "1.1",
    "settings": {
      "encoding": "utf8",
      "additionalSettings": {
        "fileName": "<<customFileName>>"
      }
  }
}
</code></pre>

{% if site.build == "internal" %}
{% include callout.html content="**Note:** Eventhub and Amazon Kinesis are stream-based connectors, where data is imported and exported as a stream of messages. Hence there is no file created during the Export operation.<br/> For information about these two connectors, see [Event Hub and Amazon Kinesis](api_profile_ootb.html).<br/>
" type="primary" %}
{% endif %}