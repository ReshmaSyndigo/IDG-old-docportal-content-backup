---
title: Search Entities based on Vendor Details
sidebar: rdp_sidebar
permalink: api_get_match_results_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Consider that you wish to match vendor details in your application. You have ensured the following: 
{% if site.build == "internal" %}
* All the [Pre-requisites of Match](/{{site.data.rdp_links_version.APP}}/rdp_feature_match_merge_prerequisites.html){:target="_blank"} are completed. 
* You have created a match configuration to perform a deterministic match on vendoruniqueid and a Machine-Learning (ML) based match on vendordisplayname (Defined Threshold: 75% - 95%). See [Configure Machine-Learning (ML) based Match](api_match_config_scenario1.html), for more information. 
{% endif %}

{% if site.build == "external" %}
* All the Pre-requisites of Match are completed. 
* You have created a match configuration to perform a deterministic match on vendoruniqueid and a Machine-Learning (ML) based match on vendordisplayname (Defined Threshold: 75% - 95%).
{% endif %}

<br/>

Consider that you already have the following entities in the application:

| vendoruniqueid |vendordisplayname|
|-----------------|-----------------|
| RSDW01 | RiversandDataWorks |
| RSDW09 | RiversandData009 |
| RSDW152 | RiversandDataWorks152 |
| RSDW071 | RiversandDataWorks071 |
| RSDW093 |RiversandDataWorks093 |
| RSDW077 |RiversandDataWorks077 |
| RSDW077 |RiversandDataWorks077 |

The following table summarizes a few scenarios of source entity data and the potential match results after performing match:

| vendoruniqueid |vendordisplayname| Match Result |
|------------|--------|-------------------|
| RSDW01 | RiversandDataWorks | [Deterministic Match](api_get_ml_det_match.html) |
| RSDW02 | Riverworks | As Deterministic Match found no match results, ML based match is performed. A list of match entities where Create Threshold < Match Score < Merge Threshold is returned. See [ML based Match (Create Threshold < Match Score < Merge Threshold)](api_get_ml_between_match.html).|
| RSDW02 | SandWorks | As Deterministic Match found no match results, ML based match is performed. Match Score < Create Threshold, the entity gets created. See [ML based Match (Match Score < Create Threshold)](api_get_ml_create_match.html).|
| RSDW02 | RiversandData009 | As Deterministic Match found no match results, ML based match is performed. Though a list of match entities are returned in the API response, a message is displayed in the UI, as the Match Score of the entity with vendoruniqueid - RSDW09 and vendordisplayname - RiversandData009 is greater than Merge Threshold. See [ML based Match (Match Score > Merge Threshold)](api_get_ml_merge_match.html)|

Also see [Match Scenarios](/{{site.data.rdp_links_version.APPU}}/dda_match_usecases.html){:target="_blank"}, for more information on the way match is displayed in the User Interface and the match review process in-case where multiple results are found.