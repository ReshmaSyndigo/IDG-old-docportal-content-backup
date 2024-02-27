---
title: Create Binary Stream Object after Uploading Image
sidebar: rdp_sidebar
permalink: api_create_binary_stream_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createbinarystream}}** to create binary stream object after uploading the asset to the external storage. 

## Scenario

To create a binary stream object for an image "toteBag.png"

{% include snippets/header.html %}

## Request

To create the above binary stream object, use the REST API {{site.data.rdp_glossary.createbinarystream}}. In the request send the following details:

{% include snippets/clientState.html %}
* binaryStreamObject: In the [binaryStreamObject](api_binary_stream_object_structure.html) object, provide the objectKey, originalFileName, fullObjectPath, and permissions (if any).

<pre>
<code>
POST **{{site.data.rdp_glossary.createbinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    "id": "guid",
    <span style="background-color: #FFFF00">"type": "binarystreamobject",</span>
    <span style="background-color: #FFFF00">"properties": {</span>
      "objectKey": "toteBag@_@guid.png",
      "fullObjectPath": "rdp/binarystreamobject/assets/toteBag@_@guid.png",
      "originalFileName": "toteBag.png",
      "user": "vendor@riversand.com",
      "role": "vendor",
      "ownershipData": "Vendor1"
    }
  }
}
</code>
</pre>

## Response

If the binary object create request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "e1a9a217-07be-42d1-a74b-2494e0541d6a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : guid. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created binary stream object:
* You can use {{site.data.rdp_glossary.getbinarystream}} API to verify the created binary stream object. See [Get Binary Stream Object](api_get_binary_stream_object.html)
* If you know the details of your elastic server and the indices, then you can verify the created binary stream object using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.