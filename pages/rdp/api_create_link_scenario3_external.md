---
title: "Link Image to a SKU"
sidebar: rdp_sidebar
permalink: api_create_link_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.creategraphlink}}** to link an image to a image, using a scenario. 

## Scenario

Link the image "img_polo_mens_shirt_blue.jpg" to an image based on the "Graph Process Model" details defined in "image_hasimages_SKU_graphProcessModel". In attribute-based match, the Riversand Platform supports UOM attributes. While linking Image to an SKU, if the attribute-based match is a UOM attribute, you must specify any one of the following values in the ‘uomMatchType’ property.
* exactUomBased to perform an exact value and UOM match. 
* convertedUomBased to perform an equivalent match. 

Note: If you provide an invalid UOM, then the application does not perform any match.

#### Example for exactUomBased match

Consider a scenario where an incoming SKU ‘Polo Blue Shirt’ has ‘800mm’ value for an UOM attribute ‘shirtlength’ and is a matching attribute.

**Result**: The application links all the images to SKUs that has ‘800mm’ (value and UOM) for ‘shirtlength’ attribute for match. In this scenario, the application performs an exact value and UOM match based on the graph model.

{% include callout.html content="**Note:** If any SKU that has ‘80cm’ value for ‘shirtlength’ attribute is not considered for match though ‘800mm’ is equivalent to ‘80cm’ mathematically. They are not an exact value and UOM match.
" type="primary" %}

#### Example for convertUomBased match

Consider the following scenario:
* Incoming Entity: ‘Polo Black Shirt’ has ‘800mm’ for ‘shirtlength’ UOM attribute
* Existing Entity: ‘Polo Black Shirts’ has ‘80cm’ for ‘shirtlength’ UOM attribute

**Result**: All the entities that have ‘800mm’ or ‘80cm’ for the UOM attribute ‘shirtlength’ are considered for match. In this scenario, the application performs an equivalent match by converting ‘mm’ to ‘cm’, as both are correct mathematically.

Based on your requirement, specify the following in the model before linking the SKU to the image:

* Match Configuration for the entity type **SKU** indicating the sequence and the attributes that must be matched to link image to SKU. In this match process, the UOM attributes and its value is considered when the ‘uomMatchType’ property is defined.

{% if site.build == "internal" %}
See [Create Graph Process Model to Link Image to SKU](api_create_graph_process_model_scenario3.html), for a sample scenario.
{% endif %}

{% include snippets/header.html %}

## Request

To link the above SKU to its image, use the REST API {{site.data.rdp_glossary.creategraphlink}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* params -> graphprocessconfig: Specify the model defined - **image_hasimages_sku**.

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
    <span style="background-color: #FFFF00">"graphprocessconfig" :"image_hasimages_sku"</span>
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "img_polo_mens_shirt_blue",
    "type": "image",
    "data": {
    }
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
    "requestId": "f7ca15a6-68c4-454b-ab93-d7993493ac91"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : img_polo_mens_shirt_blue. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created or linked SKU entity:
* You can use {{site.data.rdp_glossary.getentity}} API to verify the created entity. See [Get Entities](api_app_get_entity.html). In the get request, get the details of the relationship "hasimages" to verify the details
* If you know the details of your elastic server and the indices, then you can verify the create entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.