---
title: Data Coalesce
sidebar: rdp_sidebar
permalink: api_data_coalesce.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

When a user creates an entity, the value of the attributes in the entity are derived by inheriting and merging values along the various hierarchical paths associated with the entity. This is called data coalesce.

{% if site.build == "internal" %}
An entity can be created in self or primary contexts, country or channel. See [Models and Contexts](api_model_coalesce.html). The primary contexts are enhanced by additional contexts such as Product Classification, Item Type and Web Classification. The additional contexts are also refered to as enhancers as they enhance the entity by providing additional information. The following illustration depicts how data coalesce is performed according to the order of precedence.
{% endif %}

{% if site.build == "external" %}
An entity can be created in self or primary contexts, country or channel. The primary contexts are enhanced by additional contexts such as Product Classification, Item Type and Web Classification. The additional contexts are also refered to as enhancers as they enhance the entity by providing additional information. The following illustration depicts how data coalesce is performed according to the order of precedence.
{% endif %}

{% picture DataCoalesce.png alt="Data Coalesce" %}

A sample scenario illustrating data coalesce is depicted below. In the illustration below, the values of the attributes at Germany Web is derived by inheriting and merging the values along all hierarchical paths associated with it. The priority is also taken into consideration. The resulting value is derived by giving more priority to "ReviewRank" at TopRatedProducts, "Vat" at Germany and "ExtendedWarrantyInMonths" at Refurbished as these attribute values are entered by the user at the most relevant level of the hierarchy.

{% picture DataCoalesceExample.png alt="Data Coalesce Sample Scenario" %}

This section covers the following scenarios to explain the usage of RESTful APIs to get data coalesce.

* [Data Coalesce - Primary Context and Additional Context](api_get_data_coalesce_scenario1.html)
* [Data Coalesce - Additional Context Given Data](api_get_data_coalesce_scenario2.html)
* [Data Coalesce - Precedence](api_get_data_coalesce_scenario3.html)
* [Data Coalesce - Relationship](api_get_data_coalesce_scenario4.html)
* [Data Coalesce - Set as Do Not Inherit](api_get_data_coalesce_scenario5.html)
* [Data Coalesce - Reference Localization](api_get_data_coalesce_scenario6.html)
