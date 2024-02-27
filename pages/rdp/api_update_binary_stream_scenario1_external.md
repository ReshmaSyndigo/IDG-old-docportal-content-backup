---
title: Update Binary Stream Object
sidebar: rdp_sidebar
permalink: api_update_binary_stream_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.updatebinarystream}}** to update binary stream object after uploading an image to external storage. 

## Scenario

Consider a scenario where a "binarystreamobject" is created to upload an image. Now you wish to update the "role" property.

{% include snippets/header.html %}

## Request

To update the above binary stream object, use the REST API {{site.data.rdp_glossary.updatebinarystream}}. In the request send the following details:

{% include snippets/clientState.html %}
* binaryStreamObject -> id: Specify the unique identifier of the binaryStreamObject you wish to update.
* binaryStreamObject -> type: Specify as binarystreamobject.
* properties: Specify as role along with the appropriate value.

<pre>
<code>
POST **{{site.data.rdp_glossary.updatebinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    <span style="background-color: #FFFF00">"id": "guid",</span>
    <span style="background-color: #FFFF00">"type": "binarystreamobject",</span>
    "properties": {
      <span style="background-color: #FFFF00">"role": "buyer"</span>
    }
  }
}
</code>
</pre>

## Response

If the binary object create request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "697ebd4a-8c0c-40ed-8624-b830ad6b7a29"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for update with entity Id : guid. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Verify the updated binary stream object:
* You can use {{site.data.rdp_glossary.getbinarystream}} API to verify the updated binary stream object. {% if site.build == "internal" %} See [Get Binary Stream Object](api_get_binary_stream_object.html). {% endif %}

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.