---
title: Scenario - Create Self-serve Report
sidebar: rdp_sidebar
permalink: va_scenario_create_selfserve_reports.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

You can create self-serve report using Designer. You can create widgets and add these widgets to a dashboard based on your requirement. 

Out-of-the-box you can view the following reports:
* [View Entity Summary Report](/{{site.data.rdp_links_version.APPU}}/va_entity_summary_report.html){:target="_blank"}
* [View Data Quality Report](/{{site.data.rdp_links_version.APPU}}/va_data_quality_report.html){:target="_blank"}
* [View Workflow SLA Report](/{{site.data.rdp_links_version.APPU}}/va_workflow_sla_report.html){:target="_blank"}

<br/>
Consider a business scenario where a "Category Manager" has permission to create a report. The user is responsible for all the operational areas such as pricing, branding, market insights, and overall promotion of the product category to maximize consumer appeal. Also, the user is accountable for vendor relationships and product range management. The user wishes to build a report that consists of the following views:
* Brand 
* Hierarchy
* Status
* Governance
* Entity Type

{% include callout.html content="**Note**: It is recommended to not to have more than 6 widgets to a report.
" type="primary" %}

<br/>
**To create widgets and report:**

1. On the navigation menu, click the **Visual Analytics > Designer** submenu.

   **Result:** The **Designer** home page is displayed.

{% picture va-designer-homepage.png alt="Visualization Designer Home page" %}

{:start="2"}

2. Click the **Add** tab.

   **Result:** The **Add Report Widgets** is displayed.

{:start="3"}

3. Select the **Create New Report Widget** from the drop-down or if you have already created an widget you can click on any of the existing widgets link to add to the report. 

   **Result:** The **New Report Widget** dialog is displayed.

{% picture va-new-report-widget.png alt="New Report Widget" %}

{:start="4"}

4. Click on the **Pie** and select the source index to create [Brand View](va_brand_widget_settings.html). You can also represent the "Brand" attribute using [Tag Cloud](va_tag_cloud_widget_settings.html) for better visual representation.

   **Result:** The saved widget is displayed in **Editing New Report (unsaved)** mode.

{:start="5"}

5. Click **Add** tab to display the **Add Report Widgets** dialog and select the following to create the various widgets.

| Chart | Source Index | Settings | Widget |
| --------- | --------------- | ----------- | ---------- |
| Vertical Bar | \<tenantname>-EntityDetails | [Hierarchy Widget Settings](va_hierarchy_widget_settings.html) | Hierarchy |
| Metrics | \<tenantname>-WorkflowDetails | [Workflow Widget Settings](va_status_widget_settings.html) | Workflow |
| Horizontal Bar | \<tenantname>-WorkflowDetails | [Status Widget Settings](va_status_widget_settings.html) | Status |
| Data Table | \<tenantname>-EntityDetails | [Entity Type Widget Settings](va_entity_type_widget_settings.html) | Entity Type |

   **Result:** The saved widget is displayed in **Editing New Report (unsaved)** mode. You can drag and drop the widgets based on your requirement.

{% include callout.html content="**Note**: 
* **Brand** attribute is also represented using **Tag Cloud** chart. For more information, see [Brand - Tag Cloud Settings](va_tag_cloud_widget_settings.html).
* You can also select relationship attributes and properties to create self serve reports.
" type="primary" %}

A sample screenshot of the "Brand" attribute widget using **Tag Cloud** is displayed.

{% picture va-tag-cloud.png alt="Brand - Tag Cloud" %}

{:start="6"}

6. Click **Save**.

   **Result:** The **Save Dashboard** dialog is displayed. 

{:start="7"}
   
7. Enter the **Title** and **Description** and click **Confirm Save**. 

{% picture va-save-dashboard.png alt="Save Dashboard" %}

   **Result:** A confirmation message **Saved 'Category Manager Business Report'** message is displayed.

To verify, click **Report** tab to display the **Report** page.

{% picture va-report-dashboard-new.png alt="Create" %}

   **Result:** A list of all the reports are displayed.

* Enter **Category Manager Business Report** in the search bar or navigate through the pages. 

   **Result:** The **Category Manager Business Report** dashboard is displayed. A sample screenshot of the sample report is displayed.

{% picture va-final-report.png alt="Final Report" %}