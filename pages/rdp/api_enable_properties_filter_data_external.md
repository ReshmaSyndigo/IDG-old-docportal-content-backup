---
title: Enable Properties to Filter Data
sidebar: rdp_sidebar
permalink: api_enable_properties_filter_data.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Visualization SDK allows you to to enable properties in the [Add Filter](/{{site.data.rdp_links_version.APPU}}/va_add_filter.html), to filter data in **Entity Summary Report**. You can enable the properties by specifying the property name for “visualizationFilterProperties” in the configuration. In addition, you can create custom reports using these properties. For more information, see [Scenario - Create Self-serve Report](va_scenario_create_selfserve_reports.html).

{% include callout.html content="**Note**: You can enable up to five properties in the configuration.
" type="primary" %}

The following is a sample json where the user is enabling "Source" (src) property for visualization.

<pre>
<code>
{
  "id": "rsAnalyticsService_rsserviceconfig",
  "type": "rsserviceconfig",
  "data": {
    "jsonData": {
      "isVisualizationEnabled": true,
      "isOwnershipPermissionEnabled": true,
      "domainsSupportingVisualization": {
        "thing": [
          "sku",
          "product"
        ],
        "party": [
          "_ALL"
        ]
      },
      <span style="background-color: #FFFF00">"visualizationFilterProperties": ["src"]</span>
    }
  }
}
</code>
</pre>

You can verify the changes in the **Add Filter** drop-down, where you view the property name which is mentioned in the above configuration. For more information, see [Add Property Filter](/{{site.data.rdp_links_version.APPU}}/va_add_property_filter.html).