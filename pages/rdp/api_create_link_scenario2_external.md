---
title: "Link SKU to an Image"
sidebar: rdp_sidebar
permalink: api_create_link_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.creategraphlink}}** to link a SKU to an image, using a scenario. 

## Scenario

Link the SKU "Polo Mens Shirt Blue_Large" to an image based on the "Graph Process Model" details defined in "sku_hasimages_image_graphProcessModel". In attribute-based match, the Riversand Platform supports UOM attributes. While linking SKU to an Image, if the attribute-based match is a UOM attribute, you must specify any one of the following values in the ‘uomMatchType’ property.
* exactUomBased to perform an exact value and UOM match. 
* convertedUomBased to perform an equivalent match. 

#### Example for exactUomBased match

Consider a scenario where an incoming SKU ‘Polo Blue Shirt’ has ‘800mm’ value for an UOM attribute ‘shirtlength’ and is a matching attribute.

**Result**: The application links all the SKUs that has ‘800mm’ (value and UOM) for ‘shirtlength’ attribute to an image and are considered for match. In this scenario, the application performs an exact value and UOM match based on the graph model.

{% include callout.html content="**Note:** If any SKU that has ‘80cm’ value for ‘shirtlength’ attribute is not considered for match though ‘800mm’ is equivalent to ‘80cm’ mathematically. They are not an exact value and UOM match.
" type="primary" %}

#### Example for convertUomBased match

Consider the following scenario:
* Incoming Entity: ‘Polo Black Shirt’ has ‘800mm’ for ‘shirtlength’ UOM attribute
* Existing Entity: ‘Polo Black Shirts’ has ‘80cm’ for ‘shirtlength’ UOM attribute

**Result**: All the entities that have ‘800mm’ or ‘80cm’ for the UOM attribute ‘shirtlength’ are considered for match. In this scenario, the application performs an equivalent match by converting ‘mm’ to ‘cm’, as both are correct mathematically.

Based on your requirement, specify the following in the model before linking the SKU to the image:

* Match Configuration for the entity type **image** indicating the sequence and the attributes that must be matched to link SKU to image. In this match process, the UOM attributes and its value is considered when the ‘uomMatchType’ property is defined.

{% if site.build == "internal" %}
See [Create Graph Process Model to Link SKU to Image](api_create_graph_process_model_scenario2.html), for a sample scenario.
{% endif %}

{% include snippets/header.html %}

## Request

To link the above SKU to its image, use the REST API {{site.data.rdp_glossary.creategraphlink}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* params -> graphprocessconfig: Specify the model defined - **sku_hasimages_image**.

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
    <span style="background-color: #FFFF00">"graphprocessconfig": "sku_hasimages_image"</span>
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "Polo Mens Shirt Blue_Large",
    "type": "sku",
    "data": {}
  }
}
</code>
</pre> 

## Response

If the request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "35e4ebf6-0a6c-4ffc-b338-8f18a17834c6"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : Polo Mens Shirt Blue_Large. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created or linked image entity:
* You can use {{site.data.rdp_glossary.getentity}} API to verify the created entity. See [Get Entities](api_app_get_entity.html). In the get request, get the details of the relationship "hasimages" to verify the details
* If you know the details of your elastic server and the indices, then you can verify the create entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.