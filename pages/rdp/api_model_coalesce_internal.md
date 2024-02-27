---
title: Model Coalesce
sidebar: rdp_sidebar
permalink: api_model_coalesce.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In RDP, data models define the structure or template of the entities. Entities are created based on these models. When a user creates an entity, the structure/template of the entity not only depends on its own model, but is derived by inheriting and merging models along the various hierarchical paths associated with the entity. This is called model coalesce.

## Prerequisites

* **Domain context model (thing_entityContextModel):**<br>
The Domain context model defines the primary contexts and the corresponding additional contexts (enhancer attributes). See [how to create Domain Context Model](api_create_data_model_scenario57.html).

* **Context type model (country_entityManageModel, channel_entityManageModel):**<br>
The Context type model defines attributes mapped to all context instances of the context type. See [how to create Context type Model](api_create_data_model_scenario63.html).

* **Context instance model (germany_entityManageModel, germanyweb_entityManageModel):** <br>
The Context instance model defines attributes mapped to a specific context instance. See [how to create Context instance Model](api_create_data_model_scenario52.html).

* **Enhancer instance model (apparelnfootwear_entityManageModel, refurbished_entityManageModel):** <br>
The Enhancer instance model defines attributes mapped to an enhancer instance such as "apparels>>footwear", "topratedproducts". They enhance the primary contexts by providing additional attributes. See [how to create Enhancer Instance Model](api_create_data_model_scenario54.html).

* **EntityType manage model (sku_entityManageModel):** <br>
The EntityType manage model defines properties (attributes / relationships) applicable to a specific entity type, such as sku, product. See [how to create EntityType Manage Model](api_create_data_model_scenario51.html).

## How Model Coalesce Works

An entity can be created in self or primary contexts, country or channel. The primary contexts are enhanced by additional contexts such as Product Classification, Item Type and Web Classification. The additional contexts are also refered to as enhancers as they enhance the model by providing additional information. The following illustration depicts how model coalesce is performed at various context levels according to the order of precedence.

{% picture ModelCoalesce.png alt="Model Coalesce" %}

A sample scenario illustrating model coalesce is depicted below. In the illustration below, the model at Germany Web is derived by inheriting and merging the models along all hierarchical paths associated with it. The priority is also taken into consideration. The resulting model gives more priority to "Headline" at Refurbished, "AccessoriesIncluded" at ShortSleeveShirts and "ProductClassification Path" at Germany as these attribute definitions are more specific at these levels. <br>
**Note:** All relationship types are at the self level and are available at all context levels for relationship data maintenance. Relationship can be added at any context level in which case such relationships are specific to the context. Relationship coalesce is done from parent to the child context.

{% picture ModelCoalesceExample.png alt="Model Coalesce Sample Scenario" %}

This section covers the following scenarios to explain the usage of RESTful APIs to get model coalesce.

* [Model Coalesce - Primary Context and Additional Context](api_get_model_coalesce_scenario1.html)
* [Model Coalesce - Additional Context Given Data](api_get_model_coalesce_scenario2.html)
* [Model Coalesce - Precedence](api_get_model_coalesce_scenario3.html)