---
title: Enable Attributes to Filter Data
sidebar: rdp_sidebar
permalink: api_enable_attributes_filter_data.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Visualization SDK allows you to enable attributes in the [Add Filter](/{{site.data.rdp_links_version.APPU}}/va_add_filter.html), to filter data in **Data Quality**, **Workflow SLA**, and **Trend** reports. You can enable these attributes by providing the attribute name for “visualizationFilterAttributes” property in the configuration. You can provide attributes belonging to any attribute type such as basic and enhancer attributes.

{% include callout.html content="**Notes**:
* Nested Attributes are not supported in Visualization.
* You can provide upto 14 attributes in the configuration.
* You can create custom reports using these attributes.
* The enabled attributes are available as part of the custom reports for intuitive analysis of data.
* Ownership attributes are provided in the configuration.
" type="primary" %}

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
      <span style="background-color: #FFFF00">"visualizationFilterAttributes": [“brand”]</span>
    }
  }
}
</code>
</pre>

<br/>

You can verify the changes in the **Add Filter** drop-down, where you view the attribute name which is mentioned in the above configuration. For more information, see [Add Filter](/{{site.data.rdp_links_version.APPU}}/va_add_filter.html).

{% picture data-quality-attribute.png alt="Data Quality Report" %}