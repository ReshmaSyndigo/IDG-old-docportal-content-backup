---
title: Enable Ownership Data for Visualization
sidebar: rdp_sidebar
permalink: api_enable_ownership_data_visualization.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Visualization SDK configuration is enhanced to support Ownership data based on data privacy. The following configuration must be uploaded via Customer tenant seed configuration. 

Note that the **isOwnershipPermissionEnabled** flag must be set to ‘true’. This is an explicit override required to support ownership data based scenarios. Upon enabling Ownership Data, you can validate from the UI. For more information, see [View Entities based on Ownership Data](/{{site.data.rdp_links_version.APP}}/va_view_entities_ownership_data.html).

<pre>
<code>
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      "id": "rsAnalyticsService_rsserviceconfig",
      "type": "rsserviceconfig",
      "data": {
        "jsonData": {
          "isVisualizationEnabled": true,
          <span style="background-color: #FFFF00">"isOwnershipPermissionEnabled": true,</span>
          "domainsSupportingVisualization": {
            "thing": [
              "sku",
              "product"
            ],
            "party": [
              "_ALL"
            ]
          }
        }
      }
    }
  ]
}
</code></pre> 