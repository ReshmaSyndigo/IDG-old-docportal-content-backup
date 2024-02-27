---
title: "Rolldown Product to SKU"
sidebar: rdp_sidebar
permalink: api_create_link_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.creategraphlink}}** to rolldown Product to SKU and copy certain attributes from Product to SKU, using a scenario. 

## Scenario

Rolldown the Product "Mens Shirts" to SKU, based on the "Graph Process Model" details defined in "product_ischildof_sku_graphProcessModel". In attribute-based match, the **Riversand Platform** supports UOM attributes. While rolling down Product to SKU, if the attribute-based match is a UOM attribute, you must specify any one of the following values in the ‘uomMatchType’ property.
* exactUomBased to perform an exact value and UOM match. 
* convertedUomBased to perform an equivalent match. 

#### Example for exactUomBased match

Consider a scenario where an incoming SKU ‘Polo Blue Shirt’ has ‘800mm’ value for an UOM attribute ‘shirtlength’ and is a matching attribute.

**Result**: The application rolls down to all the SKUs that has ‘800mm’ (value and UOM) for ‘shirtlength’ attribute for match. In this scenario, the application performs an exact value and UOM match based on the graph model.

{% include callout.html content="**Note:** If any SKU that has ‘80cm’ value for ‘shirtlength’ attribute is not considered for match though ‘800mm’ is equivalent to ‘80cm’ mathematically. They are not an exact value and UOM match.
" type="primary" %}

#### Example for convertUomBased match

Consider the following scenario:
* Incoming Entity: ‘Polo Black Shirt’ has ‘800mm’ for ‘shirtlength’ UOM attribute
* Existing Entity: ‘Polo Black Shirts’ has ‘80cm’ for ‘shirtlength’ UOM attribute

**Result**: All the entities that have ‘800mm’ or ‘80cm’ for the UOM attribute ‘shirtlength’ are considered for match. In this scenario, the application performs an equivalent match by converting ‘mm’ to ‘cm’, as both are correct mathematically.

Based on your requirement, specify the following in the model before rolling down Product to SKU:

* Match Configuration for the entity type **SKU** indicating the sequence and the attributes that must be matched to determine the rolldown action. In this match process, the UOM attributes and its value is considered when the ‘uomMatchType’ property is defined.

* Attributes that must be copied from product to SKU. 

See Create Graph Process Model to Rolldown Product to SKU, for a sample scenario.

The following flowchart illustrates the sequence of steps performed by **Entity Graph Service**:

{% picture graph_process_whereused.png alt="Rolldown Product to SKU" %}

{% include snippets/header.html %}

## Request

To rolldown the product to SKUs, use the REST API {{site.data.rdp_glossary.creategraphlink}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* params -> graphprocessconfig: Specify the model defined - **product_ischildof_sku**.

<pre>
<code>
POST **{{site.data.rdp_glossary.creategraphlink}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "params": {
    <span style="background-color: #FFFF00">"graphprocessconfig": "product_ischildof_sku"</span>
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "Mens Shirts",
    "type": "product",
    "data": {}
  }
}
</code>
</pre>

## Response

If the rolldown request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "689f20e5-2957-4c90-9862-e27f8a53215a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : Mens Shirts. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created or updated Product entity:
* You can use {{site.data.rdp_glossary.getentity}} API to verify the created entity. See [Get Entities](api_app_get_entity.html). In the get request, get the details of the relationship "ischildof" to verify the details.
* If you know the details of your elastic server and the indices, then you can verify the create entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.