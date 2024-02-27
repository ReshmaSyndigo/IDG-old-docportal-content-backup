---
title: Brand - Widget Settings
sidebar: rdp_sidebar
permalink: va_brand_widget_settings.html
folder: rdp
type: description
---

{% include snippets/disclaimer_internal.md %} 

The application allows you to create widgets using "Pie" chart. To view **Brand** attribute details, you can create "Pie" chart. This chart divides each value of the "Brand" attribute into sectors, where each sector represents a proportion of the whole. You can also organize data to view the size of components relative to the whole, and also the percentage or proportional data.

## Prerequisite for "Pie" chart

**The following are the prerequistes for "Pie" chart**:
* In **New Report Widget** dialog box, select **Pie**.
* In **Source Index** dialog box, select "\<tenantname>-EntityDetails" index.

{% include callout.html content="**Note:** Following are the sample settings. Based on your requirement, you can customize your widgets with other available settings.
" type="primary" %}

### Data tab

A sample screenshot of the various options selected in the **Data** tab for the business scenario is displayed.

{% picture va-data-tab.png alt="Data tab" %}

* Select the following options.

{% picture va-pie-metrics.png alt="Data tab" %}

| Panes | Options | Description |
| --------- | ---------- |
| Metrics |  | Click the expand icon to display the "Aggregation" and "Custom label" fields. |
|  | Slice Size Count | • Select any of the **Metric Aggregation** from the drop-down list. The available metric aggregations are "Count, Sum, Top Hit, and Unique Count. Note in this scenario, "Count" is selected. <br> • Enter the custom label in the textbox. |
| Buckets |  | Click the **Add** link to display the **Add Bucket** popover. You can select **Split Slices** or **Split Chart**. |
|  | Split Slices | • Select the **Aggregation** from the drop-down list. The available aggregations are "Date Range, Filters, Range or Terms". Note in this scenario, "Terms" is selected. <br> • Select the "Brand" from the **Field** drop-down list. <br> • Select the **Order by** from the drop-down list. The available options are "Metric Count, Custom Metric, and Alphabetical". Note in this scenario, "Metric Count" is selected. <br> • Select the **Descending or Ascending** from the **Order**  drop-down list. <br> • Enter the **Size** or use the toggle button to increase or decrease the count. <br> • Enable or disable the toggle button to group other values in separate bucket. Note that the values that are not part of the top "N" are displayed in the other slices in this bucket. If enabled, enter the label of the other bucket in the textbox. <br> • Enable or disable the toggle button to include the missing values in the chart. If enabled, enter the label for the missing values. Note that this works for fields of type "string". When enabled, the chart includes the missing values in the search, and also displays in the other chart on slices. <br> • Enter the **Custom Value** in the textbox. <br> • Click the **Advanced** expand icon to enter the JSON input details in the textbox. |
|  | Split Chart | • Select **Rows** or **Columns** to split the chart into rows or columns. <br> • Select the **Aggregation** from the drop-down list. This field works similarly like the **Aggregation** field in **Split Slices** option. |

### Options tab

{% picture va-options-tab-pie.png alt="Options tab" %}

| Panes | Options | Description |
| --------- | ---------- |
| Pie Settings |  | Select the **Pie Settings** by enabling or disabling the toggle buttons. |
|  |  Donut | Enable or disable the toggle button to represent the chart in the donut form. 
|  | Legend Position | Select the any of the following options such as "Right, Left, Top or Bottom". Based on the position selected the legends are displayed. |
|  | Show tooltip | Enable or disable the toggle button to display the tooltip when you hover over the slices of the pie chart. | 
| Label Settings |  | Select the **label Settings** by enabling or disabling the toggle buttons. |
|  | Show Labels | Enable or disable the toggle button to display the labels. If enabled, the labels of each slice of the chart is displayed.  |
|  | Show top level only | Enable or disable the toggle button to display only the top records or that holds more value. |
|  | Show Values | Enable or disable the toggle button to display the values in percentage. |
|  | Truncate | Enter the truncate value or use the toggle button to increase or decrease the length of the label. |