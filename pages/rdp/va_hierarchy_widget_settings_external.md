---
title: Hierarchy - Widget Settings
sidebar: rdp_sidebar
permalink: va_hierarchy_widget_settings.html
folder: rdp
type: description
---

{% include snippets/disclaimer_internal.md %} 

The application allows you to create widgets using "Vertical Bar" chart. To view **Hierarchy** related details, you can select this chart. In this chart, each value is represented in "X-axis" and "Y-axis" and are vertically aligned. Each bars are colored and are vertically aligned, and they are stacked next to one another where you can easily compare the values at one go. 

## Prerequisite for "Vertical Bar" chart

**The following are the prerequistes for "Vertical Bar" chart**:
* In **New Report Widget** dialog box, select **Vertical Bar**.
* In **Source Index** dialog box, select "\<tenantname>-EntityDetails" index.

{% include callout.html content="**Note:** Following are the sample settings. Based on your requirement, you can customize your widgets with other available settings.
" type="primary" %}

### Data tab

A sample screenshot of the various options selected in the **Data** tab for the business scenario is displayed.

{% picture va-verticalbar-datatab.png alt="Data tab" %}

| Panes | Options | Description |
| --------- | --------- | ---------- |
| Metrics |  | Click the expand icon to display the "Aggregation" and "Custom label" fields. Click Add to add additional metrics. In each of the metrics select the following options. <br> • Select any of the **Metric Aggregation** from the drop-down list. In this scenario, "Unique Count" and "Count" is selected. <br> • Enter the custom label in the textbox. In this scenario, "Entity ID, Country, Entity Type, Brand, Entity ID" is selected from the drop-down list for each of the metrics. |
| Buckets |  | Click the **Add** link to display the **Add Bucket** popover. You can select **X-Axis**, **Split Slices** or **Split Chart**. |
|  | X-axis | Click the expand icon to display the "Aggregation" and "Custom label" fields. <br> • Select "Terms" from the drop-down list. <br> • Select "Hierarchy1 " from the **Field** drop-down. <br> • Select Metric: Count from Order By drop-down list. |
|  | Split Slices | • Select the **Aggregation** from the drop-down list. The available aggregations are "Date Range, Filters, Range or Terms". Note in this scenario, "Terms" is selected. <br> • Select the "Hierarchy 1" from the **Field** drop-down list. <br> • Select the **Order by** from the drop-down list. Note in this scenario, "Metric Count" is selected. <br> • Select the **Descending or Ascending** from the **Order**  drop-down list. <br> • Enter the **Size** or hover to enable the toggle button and increase or decrease the size count. <br> • Enable or disable the toggle button to group other values in separate bucket. Note that the values that are not part of the top "N" are displayed in the other slices in this bucket. If enabled, enter the label of the other bucket in the textbox. <br> • Enable or disable the toggle button to include the missing values in the chart. If enabled, enter the label for the missing values. Note that this works for fields of type "string". When enabled, the chart includes the missing values in the search, and also displays in the other chart on slices. <br> • Enter **Master Taxonomy** in the **Custom Value** textbox. <br> • Click the **Advanced** expand icon to exclude, include the details and you can also enter the JSON input details in the textbox. <br> • Click "+" or "Add to add more sub-buckets such as **Split Series** or **Split Chart**. |
|  | Split Chart | • Select **Rows** or **Columns** to split the chart into rows or columns. <br> • Select the **Aggregation** from the drop-down list. This field works similarly like the **Aggregation** field in **Split Slices** option. |

### Metrics & Axis tab

A sample screenshot of the various options selected in the **Metrics & Axis** tab for the business scenario is displayed.

{% picture va-verticalbar-metricsaxis.png alt="Metrics & Axis tab" %}

| Panes | Options | Description |
| --------- | ---------- | -------- |
| Metrics |  | Click the expand icon to display the fields. |
|  | Count | • Select any of the **Chart Type** from the drop-down list. In this scenario, "Bar" is selected. <br> • Select **Normal** or **Stacked** mode depending of the requirement. In this scenario, "Stacked" is selected. <br> • Select the existing value axis or create a new one. |
|  | Y-Axis  | Click the expand icon to display various settings.  <br> Select **Show** to display the Y-axis. <br> • Enter the **Title** in the text box. In this scenario, "Total number of Items" is entered. <br> • Select the display position from the drop-down list. The available options are "left, right, top, and bottom". In this scenario, "left" is selected. <br> • Select the **Mode type** from the drop-down list. The available options are "normal, percentage, wiggle, and silhouette". <br> • Select the **Scale Type** from the drop-down list. The available options are "linear, log and square root". In this scenario, "linear" is selected. <br> • Click the **Hide Advanced Options** expand icon to select advanced options. <br> • Select **Show labels** and **Filter Labels**. <br> • Select **Vertical** from the **Rotate** drop-down list. The other available options are "Horizontal" and "Angled". <br> • Enter the truncate value or hover over the fields to enable the toggle button to increase or decrease the count. <br> • Select **Scale to Data Bounds** or **Set Axis Externals** for **Custom Extents**. |
|  | X-axis | Click the expand icon to display to display various settings. <br> • Select "Show" to display the X-axis. <br> • Select **Filter By** labels. <br> • Select **Horizontal** from the **Rotate** drop-down list. The other available options are "Vertical" and "Angled". <br> • Click the **Hide Advanced Options** expand icon to select various options. Select **Show labels** and **Filter Labels**. <br> • Enter the truncate value or use the toggle button to increase or decrease the length of the label. |

### Panel Settings tab

A sample screenshot of the various options selected in the **Panel Settings** tab for the business scenario is displayed.

{% picture va-verticalbar-panelsettings.png alt="Panel Settings tab" %}

| Panes | Description |
| --------- | ---------- |
| Settings | Select the various panel settings. <br> • Select the label position from the drop-down list. The available options are right, "left, right, top and bottom". <br> • Select the **Show tooltip, Order buckets by sum**, and **Show values on chart**. |
| Grid | Select **Show x-axis lines** and **Y-Axis lines** from the drop-down list. |
| Threshold Line | Enable or disable the **Show threshold line**. Enter the **Threshold value** and **Line Width** or hover over the text to enable the toggle button to increase the decrease the value. |