---
title: Get Tenant Configuration Details 
sidebar: rdp_sidebar
permalink: api_get_config_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

To get the tenant configuration details for a specific tenant by using the RESTful API **{{site.data.rdp_glossary.getconfig}}**.

## Scenario

Get the tenant configuration details for a specific tenant.

{% include snippets/header.html %}

## Request

To get tenant configuration details, use the REST API {TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get. In the request send the following details:
  
* query -> Id: Specify the entity identifier. 
* query -> filters -> typesCriterion: Specify the entity type as "tenantserviceconfig". 
* fields -> attributes: _ALL is used to get all the attributes of the entity.

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "id": "rdwrdpenggqa8",
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00"> "tenantserviceconfig" </span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "totalRecords": 100
    }
  }
}
</code>
</pre> 

In the response, you can get the tenant configuration details for a specific tenant.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.