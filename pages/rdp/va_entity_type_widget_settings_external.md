---
title: Entity Type - Tabular Settings
sidebar: rdp_sidebar
permalink: va_entity_type_widget_settings.html
folder: rdp
type: description
---

{% include snippets/disclaimer_internal.md %} 

The application allows you to create widgets using **Data Table**. You can display the **Entity Type** details using this chart. The table provides flat aggregations in table format.  

## Prerequisite for "Data Table"

**The following are the prerequistes for "Data Table" chart**:
* In **New Report Widget** dialog box, select **Data Table**.
* In **Source Index** dialog box, select "\<tenantname>-EntityDetails" index.

{% include callout.html content="**Note:** Following are the sample settings. Based on your requirement, you can customize your widgets with other available settings.
" type="primary" %}

### Data tab

A sample screenshot of the **Data** tab.

{% picture va-data-tab.png alt="Data tab" %}

* Select the following options.

{% picture va-pie-metrics.png alt="Data tab" %}

| Panes | Options | Description |
| --------- | ---------- |
| Metrics |  | Click the expand icon to display the "Aggregation" and "Custom label" fields. |
|  | Slice Size Count | • Select any of the **Metric Aggregation** from the drop-down list. The available metric aggregations are "Count, Sum, Top Fit, and Unique Count. Note in this scenario, "Count" is selected. <br> • Enter the custom label in the textbox. |
| Buckets |  | Click the **Add** link to display the **Add Bucket** popover. You can select **Split Rows** or **Split table**. In this scenario, Split rows is displayed. <br> • Select the **Aggregation** from the drop-down list. The available aggregations are "Date Range, Filters, Range or Terms". Note in this scenario, "Terms" is selected. <br> • Select the "Entity Type" from the **Field** drop-down list. <br> • Select the **Order by** from the drop-down list. Note in this scenario, "Metric Count" is selected. <br> • Select the **Descending or Ascending** from the **Order**  drop-down list. <br> • Enter the **Size** or use the toggle button to increase or decrease the count. <br> • Enable or disable the toggle button to group other values in separate bucket. Note that the values that are not part of the top "N" are displayed in the other slices in this bucket. If enabled, enter the label of the other bucket in the textbox. <br> • Enable or disable the toggle button to include the missing values in the chart. If enabled, enter the label for the missing values. Note that this works for fields of type "string". When enabled, the chart includes the missing values in the search, and also displays in the other chart on slices. <br> • Enter the **Custom Value** in the textbox. <br> • Click the **Advanced** expand icon to enter the JSON input details in the textbox. |
|  | Split table | • Select **Rows** or **Columns** to split the chart into rows or columns. <br> • Select the **Aggregation** from the drop-down list. This field works similarly like the **Aggregation** field in **Split Rows** option. |

### Options tab

{% picture va-tabular-options.png alt="Options tab" %}

| Panes | Description |
| --------- | ---------- |
| Options | Select or enter for the following options based on the requirement. The options are "Per Page, Show metrics for every bucket/level, Show partial rows, Show total, Total function, and Percentage column". |