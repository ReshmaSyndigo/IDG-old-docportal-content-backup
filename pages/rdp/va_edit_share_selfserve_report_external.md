---
title: Edit and Share Self-serve Report
sidebar: rdp_sidebar
permalink: va_edit_share_selfserve_report.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

The application allows you to edit and share the self-serve report to **System Admin** and **Business Admin** roles.

Consider that you wish to edit and share the **Category Manager Business Report** (self-serve report) to **System Admin** and **Business Admin** roles.

**To manage the self-serve reports created by you:**

1. On the navigation menu, click the **Visual Analytics > Manage Reports** submenu.

   **Result:** The **Search** page displays all the self-serve reports created by you. 

{% picture va-search-report.png alt="Search page" %}

{:start="2"}

2. Click the **Category Manager Business Report**.

   **Result:** The **Manage Reports** page is displayed.

{% picture va-manage-report.png alt="Manage Report page" %}

In the **Manage Reports** page, you can perform the following:

| Fields | Description |
| ----------- | ------------ |
| Allowed Roles | Select roles from the drop-down list. Upon selecting, the report is enabled to the selected roles to view along with the other reports (shared and out-of-the-box (OOTB) reports). |
| Description | Displays the report description that is entered by the you during the report creation. |
| Enabled | Select **True** to enable the report or **False** to disable the report for others to view. |
| Image URL | By default, image URL is displayed. If you wish to change the URL, enter valid image URL path. This image is displayed for the report in the **Search** page. |
| Object Id | By default, the object Id is displayed. You cannot edit this field as this is auto-generated. |
| Publish date | Displays the date in **MM/DD/YYYY HH:MM:SS** format only after the report is published. Note this field cannot be set as Do not inherit. |
| Report name | Displays the report name. |
| Status | Displays report status. Initially the report displays "New" status. Upon publishing, the report displays "Published" status. |

A sample screenshot of the **Manage Report** page after editing the attribute values and publishing the report.

{:start="3"}

3. Upon editing the attribute values, select **Publish** from the **Actions** drop-down list to publish the report.

{% include callout.html content="**Note**: You can publish only 15 reports.
" type="primary" %}

   **Result**: A confirmation message **Published** is displayed.

The selected roles can view this report along with the OOTB reports. A sample screenshot of the published self-serve reports displayed in the **Reports** page is displayed. For more information, see [View Reports](/{{site.data.rdp_links_version.APPU}}/va_view_reports.html){:target="_blank"}.

{% picture va-selfserve-reports-page.png alt="Self-serve Report in Reports page" %}