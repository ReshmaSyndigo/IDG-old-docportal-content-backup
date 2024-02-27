---
title: Enable Domains for Visualization
sidebar: rdp_sidebar
permalink: api_enable_domain_for_visualization.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Visualization SDK configuration is enhanced to support domains such as Thing, Party, and Digital Asset in **Riversand Platform**. You can enable these domains by configuring them in **tenantConfig**.

Consider a scenario where you wish to enable **Digital Asset** domain for visualization. You must provide the domain name and specific entity types under "domainsSupportingVisualization" parameter.

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
          "isOwnershipPermissionEnabled": true,
          <span style="background-color: #FFFF00">"domainsSupportingVisualization": {</span>
            <span style="background-color: #FFFF00">"digitalAsset": [</span>
              <span style="background-color: #FFFF00">"image",</span>
              <span style="background-color: #FFFF00">"video",</span>
              <span style="background-color: #FFFF00">"document"</span>
            ]
          }
        }
      }
    }
  ]
}
</code>
</pre>

You can verify this scenario in the UI by adding filters in the **Entity Summary** report. For more information, see [Add Filter](/{{site.data.rdp_links_version.APPU}}/va_add_filter.html).