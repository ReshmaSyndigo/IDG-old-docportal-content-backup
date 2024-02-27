---
title: Create Self-serve report using Lens
sidebar: rdp_sidebar
permalink: va_scenario_create_reports_using_lens.html
type: description
folder: rdp
---

**Lens** is an easier and intuitive tool used to create reports using the **Visual Analytics** app. You can create reports by a simple drag and drop of the fields into the window and further customize the reports using different chart types and index patterns. The first preview of the report also suggests few alternative charts that would give a better view of your data. The flexibility to select different chart types enhances the capability to visualize the data in a better manner. You can change the aggregation and labels to customize the data. The user interface is made much simpler to easily [edit or recreate the widgets](va_edit_selfserve_report_lens.html) based on your requirement.

<br> 

###### Scenario

Consider you wish to create a self-serve report with **Entity Name**, **Hierarchy 2**, **Status**, **Entity Type**, **Workflow**, and **Locale** widgets that belong to the following **Entity Details**, **Data Quality**, and **Workflow SLA** reports.

**To create self-serve report using lens**:

1. On the navigation menu, click **Visual Analytics** > **Designer**.

    **Result:** The **Designer** home page is displayed.

{% picture designer-page.png alt="Designer" %}

{:start="2"}

2. Click the **Create new** button.

   **Result**: The **New Report widget** is displayed.

{% picture go-to-lens.png alt="Designer" %}

{:start="3"}

3. Click the **Go to Lens** button.

   **Result**: The **Lens** window is displayed in the **Create** tab.

{% picture create-lens.png alt="Designer" %}

{:start="4"}

4. Click the **Change Index Pattern** drop-down to select the index pattern. By default 'Entity Details' is selected.

{% picture index-pattern.png alt="Designer" %}

  **Result**: The **Available fields** are displayed based on the index pattern that you select. 

{:start="5"}

5. Enter the 'field name' in the **Search field names field** bar to filter and select the field or select from the displayed list and drag and drop the field into the lens window. In this scenario 'Entity Name' is selected.

{% picture va-lens-entityname.png alt="Designer" %}

  **Result**: The lens window displays the **Entity Name** report details. Hover over the chart of view the select details.

{% picture va-lens-entityname-hover.png alt="Designer" %}

The **Suggestions** grid is displayed right below the window. This grid displays different chart types. Click on any chart type to select the chart type to represent your data in different manner.

{% picture va-lens-suggestions.png alt="Designer" %}

In addition, you can change the chart type from the **Stacked bar** drop-down where the application displays various chart types.

{% picture stacked-bar.png alt="Designer" %}

{:start="6"}

6. Click **Save**.

{% picture va-lens-save.png alt="Designer" %}

  **Result**: The **Save Lens Visualization** dialog box is displayed.

{:start="7"}

7. Enter **Title** and **Description** and click the **Save and Return** button. You can also toggle the **Add to Dashboard after saving** button to left or right to enable or disable the display of the report in the **Reports** dashboard. 

{% picture save-report.png alt="Designer" %}

{% include callout.html content="**Note:** In the report edit mode the toggle button is not displayed when you save the report.
" type="primary" %}

  **Result**: The newly created widget is displayed in **Editing New Report (unsaved)**.

{% picture va-lens-unsaved.png alt="Designer" %}

{:start="8"}

8. Click **Create New**.

{% picture va-lens-createnew.png alt="Designer" %}

  **Result**: The **New Report Widget** is displayed.

{% picture va-lens-gotolens.png alt="Designer" %}

{:start="9"}

9. Follow Step 3 to 7 to add additional widgets to the self-serve report.

   **Result**: The widgets are displayed in the dashboard. You can reduce the size of the widget by dragging corners of the widget.

{% picture va-selfserve-report-final.png alt="Designer" %}

{:start="10"}

10. Click **Save**.

{% picture va-lens-save1.png alt="Designer" %}

   **Result**: The **Save Dashboard** dialog box is displayed.

{:start="11"}

11. Enter the **Title** and **Description** details and click **Save**.

{% picture va-save-dashboard1.png alt="Designer" %}

  **Result**: A confirmation message **"Report Name"** was saved" is displayed.

{% picture va-selfserve-report-final.png alt="Designer" %}

{:start="12"}

12. Click **Edit** to create and add new widgets. Follow step 3 to 7 to add widgets.

<br>

To verify, click the **Report** tab to view the created report.

{% picture va-viewselfserve-report.png alt="Designer" %}

**Result**: The **Report** page is displayed with the new and existing reports.

{% picture va-report-display.png alt="Designer" %}