---
title: "Delete Binary Stream Object using Id"
sidebar: rdp_sidebar
permalink: api_delete_binary_stream_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deletebinarystream}}** to delete a binary stream object using Id, using a scenario. 

## Scenario

Delete the meta-data details of the image "toteBag.png" 

{% include snippets/header.html %}

## Request

To delete the above binary stream object, use the REST API {{site.data.rdp_glossary.deletebinarystream}}. In the request send the following details:

{% include snippets/clientState.html %}
* binaryStreamObject: In the [binaryStreamObject](api_binary_stream_object_structure.html) object, provide the Id and type as **binarystreamobject**.

<pre>
<code>
POST **{{site.data.rdp_glossary.deletebinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    <span style="background-color: #FFFF00">"id": "toteBag@_@guid.png",</span>
    <span style="background-color: #FFFF00">"type": "binarystreamobject",</span>
    "data": {}
  }
}
</code>
</pre>

## Response

If the delete request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "61bc2bfc-3a3c-4fdc-97a6-8cacc8aefbc6"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for delete with entity Id : toteBag@_@guid.png. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the deleted binary stream object:
* You can use {{site.data.rdp_glossary.getbinarystream}} API to verify the deleted binary stream object. See [Get Binary Stream Object](api_get_binary_stream_object.html)
* If you know the details of your elastic server and the indices, then you can verify the deleted binary stream object using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.