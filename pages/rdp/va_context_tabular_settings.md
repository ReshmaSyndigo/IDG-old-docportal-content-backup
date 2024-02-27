---
title: Context - Tabular Settings
sidebar: rdp_sidebar
permalink: va_context_tabular_settings.html
folder: rdp
type: description
---

{% include snippets/disclaimer_internal.md %} 

The application allows you to create widgets using **Advance RS Data Table**. You can display the **Context** details using this table. You can also use **RS Data Table** to create reports. The **RS Data Table** displays the data in a 'flat structure', where as **Advance RS Data Table** displays data in the 'aggregated' format.

## Prerequisite for "Data Table"

**The following are the prerequisites for "Advance RS Data Table" chart**:
* In **New Report Widget** dialog box, select **Advance RS Data Table**.
* In **Source Index** dialog box, select "\<tenantname>-WorkflowDetails" index.

A sample screenshot of the **Advance RS Data Table**.

{% picture advance-rs-data-table.png alt="Data tab" %}

### Data tab

A sample screenshot of the **Data Table**.

{% picture data-table.png alt="Data tab" %}

A sample screenshot of the **Data Table**.

{% picture bucket.png alt="Data tab" %}

| Panes | Options | Description |
| --------- | ---------- |
| Metrics |  | Click the expand icon to display the "Aggregation" and "Custom label" fields. <br/> • Select **Count** from the 'Aggregation' drop-down. The count aggregation displays the element count of the selected index pattern. For more information, click the **Count Help** link.  <br/> • Enter 'Context' in the **Custom label** textbox. |
| Buckets |  | Click the **Add** link to display the **Add Metric** popover and select **Metric**.  |
|  | Aggregation | Select the aggregation from the drop-down list. The following options are displayed in the drop-down list: <br/> • Average: This aggregation returns the average of a numeric field. Select a field from the drop-down. <br/> • Sum: The sum aggregation returns the total sum of a numeric field. Select a field from the drop-down. <br/> • Min: The min aggregation returns the minimum value of a numeric field. Select a field from the drop-down. <br/> • Max: The max aggregation returns the maximum value of a numeric field. Select a field from the drop-down. <br/> • Unique Count: The cardinality aggregation returns the number of unique values in a field. Select a field from the drop-down. <br/> • Standard Deviation: The extended stats aggregation returns the standard deviation of data in a numeric field. Select a field from the drop-down. <br/> • Top Hit: The top hits aggregation returns one or more of the top values from a specific field in your documents. Select a field from the drop-down, how you want to sort the documents and choose the top fields, and how many values must be returned. <br/> • Percentiles: The percentile aggregation divides the values in a numeric field into percentile bands that you specify. Select a field from the drop-down, then specify one or more ranges in the Percentiles fields. Click the ![Remove Dimension](images/rdp/va-remove-dimension.png "Remove Dimension") icon to remove a percentile field. Click ![Add](images/rdp/va-plus-add.png "Add") to add a percentile field. <br/> • Percentile Ranks: The percentile ranks aggregation returns the percentile rankings for the values in the numeric field you specify. Select a numeric field from the drop-down, then specify one or more percentile rank values in the Values fields. Click the X to remove a values field. Click +Add to add a values field. <br/> <br/> **Parent Pipeline Aggregations**: For each of the parent pipeline aggregations you have to define the metric for which the aggregation is calculated. That could be one of your existing metrics or a new one. You can also nest this aggregations (for example to produce 3rd derivative) <br/> • Derivative: The derivative aggregation calculates the derivative of specific metrics. <br/> • Cumulative Sum: The cumulative sum aggregation calculates the cumulative sum of a specified metric in a parent histogram. <br/> • Moving Average: The moving average aggregation will slide a window across the data and emit the average value of that window. <br/> • Serial Diff: The serial differencing is a technique where values in a time series are subtracted from itself at different time lags or period. <br/> <br/> **Sibling Pipeline Aggregations**: Just like with parent pipeline aggregations you need to provide a metric for which to calculate the sibling aggregation. On top of that you also need to provide a bucket aggregation which will define the buckets on which the sibling aggregation will run. <br/> • Average Bucket: The avg bucket calculates the (mean) average value of a specified metric in a sibling aggregation. <br/> • Sum Bucket: The sum bucket calculates the sum of values of a specified metric in a sibling aggregation. <br/> • Min Bucket: The min bucket calculates the minimum value of a specified metric in a sibling aggregation. <br/> • Max Bucket: The max bucket calculates the maximum value of a specified metric in a sibling aggregation. |

### Options Tab

You can further customize the table through 'Computed Columns', 'Enhanced Settings', and 'Basic Settings'. Some of the main settings are given below: 

**Computed Columns**

{% picture computed-columns.png alt="Computed Columns" %}

**Enhanced Settings**

{% picture enhanced-settings.png alt="Enhanced Settings" %}

**Basic Settings**

{% picture basic-settings.png alt="Basic Settings" %}

| Settings | Example |
|----------|---------|
| Provide Computed filter | Sample: col0 > 10 or col1 |
| Row Computed CSS | Set row or column colors. Sample CSS structure: col1 == '0'? "background-color: Coral" : "background-color: LightGreen" |
| Hidden Columns | ![Hide](images/rdp/hide-options.png "Hidden Columns") |
| CSV encoding | ![Add](images/rdp/va-csv-encoding.png "CSV Encoding") |
| Enable filter link | ![Filter](images/rdp/filter-bar.png "Filter") |

Select the required settings and click **Save** to save the settings. You can click the **Documentation** link displayed corresponding to the fields for more information.

{% include callout.html content="**Note**: You can enable hyperlinks for the entities to view the entity details in the **Entity manage** page. You must Select entity id and type columns and label them as entityIdInternal and entityTypeInternal respectively. Also, select the entity name, to enable the hyperlink.
" type="primary" %}