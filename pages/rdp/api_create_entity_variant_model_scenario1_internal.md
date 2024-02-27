---
title: Create Entity Variant Model Settings
sidebar: rdp_sidebar
permalink: api_create_entity_variant_model_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entitymodelservice/create to create variant model settings for entity type productgroup, using a scenario. The variant model settings provides the primary context keys and enhancer attributes, that can be used to define the contexts while creating the entity variant models and also to build the [request to generate variants](api_app_generate_entity_variants.html). It also specifies the variant path which gives the precedence order of the contexts.

## Scenario

To create variant model settings for "productgroup" entity type.

{% include snippets/header.html %}

## Request

To create the entity variant model settings, you can use the REST API {TenantURL or ID}/api/entitymodelservice/create. In the request, send the following details:

* Specify the id, name and type. Type is variantModelSettings.
* Specify the variantPath in the order of precedence - low to high.
* Specify the primary context keys and enhancer attributes.

The following example demonstrates a sample JSON request to create variant model settings for "productgroup" entity type.

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "productgroup_variantModelSettings",</span>
    <span style="background-color: #FFFF00">"name": "productgroup",</span>
    <span style="background-color: #FFFF00">"type": "variantModelSettings",</span>
    "domain": "generic",
    "properties": {
      <span style="background-color: #FFFF00">"variantPath": "country>>channel>>itemType>>$path(productclassification)>>$path(gdsnclassification)>>$path(webclassification)",</span>
      <span style="background-color: #FFFF00">"contextkeys": [</span>
        "country",
        "channel"
      ],
      <span style="background-color: #FFFF00">"enhancerAttributes": [</span>
        "itemType",
        "productclassification",
        "webclassification",
        "gdsnclassification"
      ]
    }
  }
}
</code></pre>

## Response

If the variant model settings is created successfully, the following response is received.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted variantModelSettings for create with Id productgroup_variantModelSettings. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "variantModelSettings",
            "create",
            "productgroup_variantModelSettings"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created entity variant data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).
* After creating the model, you can create entity variant models for the specified entity type.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.