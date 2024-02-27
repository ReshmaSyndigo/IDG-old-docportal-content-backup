---
title: Relationship Type Summary
sidebar: rdp_sidebar
permalink: api_rel_type_summary.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Relationships allows you to specify the link between entities with a specific relationship type and name. Based on your domain and requirement, you can define different relationship types between entities in the data model.

| Relationship Type | Description | Example |
| ---------- | ----------| ---------- |
| Association | In this type of relationship, all objects have their own existence and there is no owner. | You can define "has-a" relationship between sku and an image of type "association", which indicates that a sku is associated with an image. | 
| Composition | In this type of relationship, the Parent and Child objects relationship exists together. If parent object gets deleted, then all of its child objects will also be deleted. | Example 1: You can define an "ischildof" relationship between SKU and Product of type "composition", which indicates that a Product is composed of one or more individual SKUs. <br>Example 2: You can define a "hasimages" relationship between a SKU and an image of type "composition", which indicates that a SKU is composed of one or more images. | 
