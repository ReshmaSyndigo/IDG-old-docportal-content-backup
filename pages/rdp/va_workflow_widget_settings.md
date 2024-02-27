---
title: Workflow - Widget Settings
sidebar: rdp_sidebar
permalink: va_workflow_widget_settings.html
folder: rdp
type: description
---

{% include snippets/disclaimer_internal.md %} 

The application allows you to create widgets using "Metric" chart. To view **Workflow** related details use this chart as you can view the selected aggregation in single number.

## Prerequisite for "Horizontal Bar" chart

**The following are the prerequistes for "Horizontal Bar" chart**:
* In **New Report Widget** dialog box, select **Horizontal Bar**.
* In **Source Index** dialog box, select "\<tenantname>-WorkflowDetails" index.

{% include callout.html content="**Note:** Following are the sample settings. Based on your requirement, you can customize your widgets with other available settings.
" type="primary" %}

### Data tab

A sample screenshot of the various options selected in the **Data** tab for the business scenario is displayed.

{% picture va-governance.png alt="Data tab" %}

| Panes | Options | Description |
| --------- | ---------- | --------- |
| Metrics |  | Click the expand icon to display the "Aggregation" and "Custom label" fields. |
| Buckets |  | Click the **Add** link to display the **Add Bucket** popover. Select **Split Group**. |
|  | Split Group | Click the expand icon to display the "Aggregation" and "Custom label" fields. <br> • Select the **Aggregation** from the drop-down list. The available aggregations are "Date Range, Filters, Range or Terms". Note in this scenario, "Terms" is selected. <br> • Select the "Activity Name" from the **Field** drop-down list. <br> • Select the **Order by** from the drop-down list. The available options are "Metric Count, Custom Metric, and Alphabetical". Note in this scenario, "Metric Count" is selected. <br> • Select the **Descending or Ascending** from the **Order**  drop-down list. <br> • Enter the **Size** or use the toggle button to increase or decrease the count. <br> • Enable or disable the toggle button to group other values in separate bucket. Note that the values that are not part of the top "N" are displayed in the other slices in this bucket. If enabled, enter the label of the other bucket in the textbox. <br> • Enable or disable the toggle button to include the missing values in the chart. If enabled, enter the label for the missing values. Note that this works for fields of type "string". When enabled, the chart includes the missing values in the search, and also displays in the other chart on slices. <br> • Enter the **Custom Value** in the textbox. <br> • Click the **Advanced** expand icon to enter the JSON input details in the textbox. |

### Options tab

A sample screenshot of the various options selected in the **Metrics & Axis** tab for the business scenario is displayed.

{% picture va-options-governance.png alt="Options tab" %}

| Panes | Description |
| --------- | --------- |
| Percentage Mode | Select the "percentage mode" to display the value in percentage. |
| Show labels | Select to display labels. | 
| Ranges | Click the ![Expand](images/rdp/expand-icon.png "Expand") icon to display the **From** and **To** fields. Enter the values. If you wish to add more range values click **Add range** to add a row define your range value. |
| Style | Click the ![Expand](images/rdp/expand-icon.png "Expand") icon to display the **Font size**.  Move the slider to define the font size variations. |