---
title: How to build and deploy the Analytics app
sidebar: rdp_sidebar
permalink: analytics_howtobuild.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

This article describes the high level steps required to build and deploy the Analytics app.

1. Get access to git repositories (add-on-template, reference-apps and 
dataplatform-apps-sdk) and new repository for buiding your own application.

{:start="2"}

2. Clone the above repositories to your local directory. For building new app, you need add-on-template and batch packages in your working directory. Also, you can refer the codes and configurations in sample apps hosted in reference-apps repository.

{:start="3"}

3. [Set-up development environment](analytics_prereq.html) to build and test the Application.

{:start="4"}

4. Based on the business requirements, get the container created (if any) and configure the trigger type(s) (API, blob or schedule) for building the application.

{:start="5"}

5. Develop the application code to execute the batch job in Riversand Anaytics facet and update/configure different [components of analytics facets](analytics_components.html). Refer [Batch Execution Environment](setup_batchexecenv.html) for more details.

   Consider an example scenario, where you want to build Import-Excel-App: Build the code and configure the required components for the following:

   * Blob watcher trigger invokes the batch process for read the input data file from container, where the Excel file is dropped.
   * Transform to JSON format that can be read by RDP.
   * Send the output data file to RDP for showing the status in Task Details page.

{:start="6"}

6. Push your code and other configurations to the new repository created for your Application.

{:start="7"}

7. Test locally and debug issues (if any). If necessary, refer logging information to track the issues/critical details.

{:start="8"}

8. Once the App development is done and the app is released, you should submit the 'app bundle' along with Release App Version to Riversand Team for review process.

{:start="9"}

9. If the 'app bundle' is approved by Riversand App Council, then the approved version of the app will be hosted in Riversand marketplace and sent to Riversand OPS team for deploying and enabling the app in all tenants of the customers.