---
title: Riversand JSON Schema Overview
sidebar: rdp_sidebar
permalink: json_overview.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

Riversand provides multiple internal JSON structures to cater to the specific application component needs, and the external format is made generic to speed up the implementation. The JSON schema or external format is created to satisfy all the business use-cases which help to reduce the complexity, leading to targeted implementations.
 
The key objective of the JSON schema is to capture the consolidated view of standard JSON data (Attributes, Relationships, and Context), whenever the data is exported or imported into the platform. JSON schema describes the structure of **Entities**, **Attributes**, and **Relationships**. The schema is used to validate the data format to manage data efficiently. This provides a better understanding of the JSON data and captures the structural information of a set of JSON files. For more information, see [Understand Riversand JSON Object Schema](json_schema.html).
 
Riversand JSON Object Schema has validations at various end points. For more information, see [Riversand JSON Object Schema Validations at End Points](json_schema_val_end_pnt.html).





