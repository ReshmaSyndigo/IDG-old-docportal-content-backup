---
title: Get Header Fields
sidebar: rdp_sidebar
permalink: api_imp_get_header_fields.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform allows users to upload their data in excel or json format. There are various header fields under which data is organised. Riversand Platform enables you to get these header fields. [Get Header Fields](api_imp_get_header_fields.html) API gets the header fields of an imported excel file. 

This topic describes how to use the **{{site.data.rdp_glossary.getHeaderFields}}** to get the header details of an uploaded excel using a scenario.

## Scenario

To get header fields by uploading an excel file.

{% include snippets/header.html %}

## Request

To get the header details of an uploaded excel, use the RESTful API {{site.data.rdp_glossary.getHeaderFields}}. In the request provide the following details:

* dataObjectType : Indicates the type of data object. Specify it as mapping.
* In properties section specify the service as "MAPPING" for entity data import. Since the data is imported from the UI in excel format, the channel must be specified as "UI" and format as "Excel".

<pre>
<code>
POST **{{site.data.rdp_glossary.getHeaderFields}}**
Headers: Content-Type: application/json
Body:
{
  "dataObject": {
    "id": "eca01000-c0d5-11e8-8e38-110c6e217b0d",
    "dataObjectInfo": {
      <span style="background-color: #FFFF00">"dataObjectType": "mapping"</span>
    },
    "properties": {
      "createdByService": "user interface",
      "createdBy": "user",
      "createdDate": "2016-07-16T18:33:52.412-07:00",
      <span style="background-color: #FFFF00">"filename": "EntityData-1536141593642.xlsm",</span>
      "encoding": "Base64",
      <span style="background-color: #FFFF00">"service": "MAPPING",</span>
      <span style="background-color: #FFFF00">"channel": "UI",</span>
      <span style="background-color: #FFFF00">"format": "Excel",</span>
      "source": "internal",
      <span style="background-color: #FFFF00">"fileId": ""</span>
    },
    "data": {
      <span style="background-color: #FFFF00">"blob": "valid blob"</span>
    }
  }
}
</code>
</pre>

## Response

Returns the header fields and relationships in the uploaded excel.

<pre><code>
{
  "dataObjectOperationResponse": {
    "status": "success",
    "statusDetail": {
      "message": {
        "workAutomationId": "eca01000-c0d5-11e8-8e38-110c6e217b0d",
        "messageType": "Info",
        "headers": {
          "entities": [
            "Active",
            "Age Group",
            "Alternate Images",
            "Brand",
            "Care",
            "Classification",
            "Color",
            "Condition",
            "Currency",
            "Discount",
            "End Date",
            "Headline",
            "Height",
            "Length",
            "List Price",
            "Manufacturer Name",
            "Maximum Quantity",
            "MDM ID",
            "Model",
            "MSRP",
            "Number of Units",
            "Product Features",
            "Product ID",
            "Product Manager Comments",
            "Quantity",
            "Size",
            "SKU Name",
            "Vendor Cost",
            "Weight",
            "Width"
          ],
          "relationship": [
            "Classification",
            "Is Primary",
            "MDM ID",
            "Original File Name Property",
            "Taxonomy"
          ],
          "format": "Excel",
          "skipContextMapping": false
        }
      }
    },
    "totalRecords": 0
  }
}
</code></pre>
