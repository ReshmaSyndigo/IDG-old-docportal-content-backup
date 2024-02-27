---
title: Brand - Tag Cloud Settings
sidebar: rdp_sidebar
permalink: va_tag_cloud_widget_settings.html
folder: rdp
type: description
---

{% include snippets/disclaimer_internal.md %} 

The application allows you to create widgets using **Tag Cloud**. It is a free form text that can be used to represent the values in different color codes. The text is usually a single word as they vary in sizes and they are determined by the metrics aggregation.

## Prerequisite for "Tag Cloud" chart

**The following are the prerequistes for "Tag Cloud" chart**:
* In **New Report Widget** dialog box, select **Tag Cloud**.
* In **Source Index** dialog box, select "\<tenantname>-EntityDetails" index.

{% include callout.html content="**Note:** Following are the sample settings. Based on your requirement, you can customize your widgets with other available settings.
" type="primary" %}

### Data tab

A sample screenshot of the various options selected in the **Data** tab for the business scenario is displayed. You can also select other options based on your requirement.

{% picture va-tag-cloud-settings.png alt="Tag Cloud Settings" %}

| Panes | Options | Description |
| --------- | ---------- |
| Metrics |  | Click the expand icon to display the "Aggregation" and "Custom label" fields. |
|  | Tag Size | • Select any of the **Metric Aggregation** from the drop-down list. The available metric aggregations are "Average, Count, Max, Median, Min, and Sum". Note in this scenario, "Count" is selected. <br> • Enter the custom label in the textbox. For example, "Brand". <br> • Advanced: JSON Input - This is an optional field where you can key in the JSON details. |
| Buckets |  | Click the **Add** link to display the **Add Bucket** popover and select **Tags**.  <br> • Click the ![Expand](images/rdp/expand-icon.png "Expand") icon to expand the **Bucket** fields. |
|  | Aggregation | • Select **Terms** from the drop-down list. A terms aggregation enables you to specify the top or bottom n elements of a given field to display, ordered by count or a custom metric. |
|  | Field | • Select **Brand** attribute from the drop-down list to split the chart into rows or columns. <br> • Select the **Aggregation** from the drop-down list. This field works similarly like the **Aggregation** field in **Split Slices** option. |
|  | Order By | By default the values are displayed in Metric. The other available options are **Custom Metric** and **Alphabetical**. |
|  | Order | Select the values in "Ascending" or "Descending" order and also select the size of values that you wish to display. |
|  | Group other values in separate bucket | Enable or disable the toggle button to include other values under "Others" bucket. You can also label the "Others" bucket. |
|  | Show Missing values | Enable or disable the toggle button to include or exclude the missing values as part of the tag cloud.  You can also label the "Missing" bucket. |
|  | Advanced: Exclude or Include | This is an optional field to include or exclude the required  details. <br> • Advanced: JSON Input - This is an optional field. A text field where you can add specific JSON-formatted properties to merge with the aggregation definition. |

### Options tab

A sample screenshot of the various options selected in the **Options** tab for the business scenario is displayed. You can also select other options based on your requirement.

{% picture va-tag-cloud-options-tab.png alt="Options tab" %}

| Fields | Descriptions | 
| --------- | ---------- |
| Text Scale | Select the **Log**, **Linear**, or **Square Root** text scale from the drop-down list. You can use a log scale to display data that varies exponentially or a square root scale to regularize the display of data sets with variabilities that are themselves highly variable. |
| Orientations | You can select how to orientate your text in the tag cloud. You can select any one of the following options: **Single**, **Right angled** and **Multiple**. |
| Font Size range in pixels | A range slider to define the maximum and minimum font size that are dynamically populated with the results of min and max aggregation. |
| Show Labels | Enable or disable the toggle button to display the attribute labels. |

Upon defining all the settings as defined above, the "Brand" - tag cloud widget is created and displayed.

{% picture va-tag-cloud.png alt="Brand - Tag Cloud" %}
