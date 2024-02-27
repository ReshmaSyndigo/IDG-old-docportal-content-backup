---
title: Process Trust-based Merge
sidebar: rdp_sidebar
permalink: api_process_trust_based_merge.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic covers the process of an entity using RESTful APIs, where data from different external sources are considered based on the Merge Matrix configured:

1. Merge Sequence defined at Entity Type is applied to attributes. 
- See [Update User Provided Attribute Values with External Source Values](api_feature_trust_matrix_scenario1.html).
- See [Update current External Source Value with the same External Source Value](api_feature_trust_matrix_scenario2.html).
- See [Update current External Source Value with the User Provided Value](api_feature_trust_matrix_scenario3.html).
2. Merge Sequence defined at attributes level.
- See [Update Merge Precedence at Single Attribute Level](api_feature_trust_matrix_scenario4.html).
3. Merge Sequence defined at collection attribute level with aggregate property.
- See [Update Merge Precedence at Collection Attribute Level with Aggregate](api_feature_trust_matrix_scenario5.html).
4. Merge Sequence defined at collection attribute level with override property. See [Update Merge Precedence at Collection Attribute Level with Override](api_feature_trust_matrix_scenario8.html).
5. [Merge Sequence defined at relationship Level](api_feature_trust_matrix_scenario10.html).