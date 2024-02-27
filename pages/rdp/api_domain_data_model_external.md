---
title: Domains
sidebar: rdp_sidebar
permalink: api_domain_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform consists of various domains such as party, thing, referenceData, generic, and digitalAsset. These domains are available as out-of-the-box (OOTB) when you install Riversand Platform. The following table lists the details of OOTB domains:

| Name of the Domain | Description |
|--------------------|-------------|
| Party | It manages the data related to parties such as customers, vendors and suppliers. It maintains a consistent version of this data. |
| Thing | It manages the data related to products. It maintains a consistent version of this data. |
| Reference Data | It manages all the reference data maintained in the platform. |
| Generic | It manages all domain data maintained in the platform. |
| Digital Asset | It manages all Digital Assets data to support Digital Asset Management features. |

The following table lists the entity types under each domain and the models associated with a domain:

{% picture domainlist2.png alt="Types of Domains" %}

This section covers the following topics to explain the object structure of the models associated with a domain:
* [EntityType Model](api_entityType_data_model.html)
* [Entity Context Model](api_context_data_model.html)
* [Attribute Model](api_attribute_data_model.html)
* [Relationship Model](api_relationship_data_model.html)
