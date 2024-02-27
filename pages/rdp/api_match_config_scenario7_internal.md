---
title: Define multiple algorithms per family for Machine Learning (ML)
sidebar: rdp_sidebar
permalink: api_match_config_scenario7.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getconfig}}** to define multiple algorithms for families to get more accurate similarity score of the matched entities. When multiple algorithms are defined for each family, separate match score is derived for each algorithm for ML match. For more information on pre-defined system families, see [Configure Machine-Learning (ML) based Match](/{{site.data.rdp_links_version.APP}}/rdp_feature_match_configure_ml.html). Riversand Platform supports the following algorithms for the pre-defined system families:
* "CDS": "combinedDistanceSequential"
* "OMP": "overlapMetaphone"
* "RAT": "ratcliff"
* "JLV": "jaccardLevenshtein"
* "SOR": "sorensen"
* "OLV": "overlapLevenshtein"
* "JMP": "jaccardMetaphone"
* "JMP": "jaccardMetaphone"
* "WJJ": "weightedJaccardJarowinkler"

The "WJJ": "weightedJaccardJarowinkler" algorithm is a combination of Jaccard and Jaro Wrinkler. This is defined for the ML match service to get more accurate scores. This is a combination of jaccard similarity, string similarity, and jaro wrinkler algorithms. These algorithms look for two similar strings and find the similarity between them. The Jaccard similarity score is considered first and then the Jaro Wrinkler similarity score. Based on the formula, the weight is calculated and match scores are derived. The weightage is defined in percentage, 35% of jaccard score and 65% of jaro wrinkler score to derive better match scores.

By default, WJJ algorithm is available in the platform. You can configure for any ML match profile. Below is the sample configuration of "party_matchProfile" where Jaccard and Jaro Winkler algorithms are defined. 
* <a href="files/party_matchProfile_jaccard_jaro.json" download>party_matchProfile.json</a>

For example, based on the sample configuration, the "WJJ" is applied for "system_businessname" and "system_address" families.

<br> 

The commonly used algorithms are:
* OLV: is a generalized algorithm that can be used for all families. For example, strings, numbers and/or unique numbers.
* SOR: is specifically used to string data type.
* RAT: is used specifically for numbers. For example, used for "system_zipcode" family.

{% include snippets/header.html %}

## Request

To get multiple algorithm defined for system families use the REST API **{{site.data.rdp_glossary.getconfig}}**. In the request send the following details:

<pre>
<code>
{
  "params": {
    "query": {
      "id": "party_matchProfile",
      "filters": {
        "typesCriterion": [
          "matchProfile"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre>

## Response

If the request is submitted successfully, then the following response is received from get configuration API:

<pre>
<code>
{
  "id": "party_matchProfile",
  "name": "party_matchProfile",
  "type": "matchProfile",
  "properties": {
    "createdService": "configurationManageService",
    "createdBy": "system_user",
    "modifiedService": "configurationManageService",
    "modifiedBy": "system_user",
    "createdDate": "2021-10-29T09:33:02.944-0500",
    "modifiedDate": "2021-10-29T09:33:02.944-0500"
  },
  "data": {
    "jsonData": {
      "algorithms": {
        <span style="background-color: #FFFF00">"CDS": "combinedDistanceSequential",</span>
        <span style="background-color: #FFFF00">"OMP": "overlapMetaphone",</span>
        <span style="background-color: #FFFF00">"RAT": "ratcliff",</span>
        <span style="background-color: #FFFF00">"JLV": "jaccardLevenshtein",</span>
        <span style="background-color: #FFFF00">"SOR": "sorensen",</span>
        <span style="background-color: #FFFF00">"OLV": "overlapLevenshtein",</span>
        <span style="background-color: #FFFF00">"JMP": "jaccardMetaphone"</span>
      },
      "familyRules": [
        {
          <span style="background-color: #FFFF00">"algorithms": [</span>
            <span style="background-color: #FFFF00">"OLV",</span>
            <span style="background-color: #FFFF00">"SOR"</span>
          ],
          <span style="background-color: #FFFF00">"name": "system_businessname"</span>
        },
        {
          <span style="background-color: #FFFF00">"algorithms": [</span>
            <span style="background-color: #FFFF00">"OLV",</span>
            <span style="background-color: #FFFF00">"SOR"</span>
          ],
          <span style="background-color: #FFFF00">"name": "system_alternatename"</span>
        },
        {
          <span style="background-color: #FFFF00">"algorithms": [</span>
            <span style="background-color: #FFFF00">"OLV",</span>
            <span style="background-color: #FFFF00">"SOR"</span>
          ],
          <span style="background-color: #FFFF00">"name": "system_address"</span>
        },
        {
          <span style="background-color: #FFFF00">"algorithms": [</span>
            <span style="background-color: #FFFF00">"OLV",</span>
            <span style="background-color: #FFFF00">"SOR"</span>
          ],
          <span style="background-color: #FFFF00">"name": "system_country"</span>
        },
        {
          <span style="background-color: #FFFF00">"algorithms": [</span>
            <span style="background-color: #FFFF00">"OLV",</span>
            <span style="background-color: #FFFF00">"RAT"</span>
          ],
          <span style="background-color: #FFFF00">"name": "system_zipcode"</span>
        },
        {
          <span style="background-color: #FFFF00">"algorithms": [</span>
            <span style="background-color: #FFFF00">"OLV",</span>
            <span style="background-color: #FFFF00">"RAT"</span>
          ],
          <span style="background-color: #FFFF00">"name": "system_universalbusinessnumber"</span>
        },
        {
          <span style="background-color: #FFFF00">"algorithms": [</span>
            <span style="background-color: #FFFF00">"OLV",</span>
            <span style="background-color: #FFFF00">"RAT"</span>
          ],
          <span style="background-color: #FFFF00">"name": "system_phonenumber"</span>
        }
      ]
    }
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting](api_troubleshooting_tips.html) Tips, for common troubleshooting tips, if required.

