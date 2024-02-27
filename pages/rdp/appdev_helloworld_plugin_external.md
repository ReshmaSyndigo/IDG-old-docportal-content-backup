---
title: Create your First App (Hello World Plugin)
sidebar: rdp_sidebar
permalink: appdev_helloworld_plugin.html
type: HowTo
folder: rdp
---

{% include snippets/disclaimer_preview.md %} 

In this section, you will learn how to develop, test and deploy a sample plugin (**Hello World** widget in **Home Dashboard**) in the Riversand development environment. To know about the pre-requisites for developing the plugin, refer [Initial Setup](appdev_initial_setup.html). 

The below figure depicts the high level steps needed to create the sample Hello World plugin.

{% picture helloworld-plugin.png alt="Steps to create, test and deploy Hello World Plugin" %}

### Develop Plugin

**To configure sample "Hello World" widget in the Home application:**

1. Open the plugin folder in Visual Studio Code.

{:start="2"}

2. Create plugin element under **/ui/src/elements** path. Create a folder with plugin name and create element under that plugin folder.

Example: In this case, **/ui/src/elements/plugin-hello-world/plugin-hello-world.js**

It is recommended to create a separate folder within elements folder to support multiple UI plugins.

{:start="3"}

3. Define the plugin config under **ui/src/ui-config/plugin-config** path under appropriate context folder and provide sample plugin message. For the 'Hello World' widget, config is created under '00-base'.

00-base > <a href="files/appsdk/plugin-hello-world.json" download>plugin-hello-world.json</a>

{% picture plugin-hello-world.png alt="plugin-hello-world.json" %}

{:start="4"}

4. Open the **/ui/package.json** file. You can view all the libraries references for Riversand SDK libraries such as tools, elements, utilities, and so on. Make sure to update the correct SDK version for each library in consultation with Riversand Apps Support Team.

{% picture sample-plugin-step4.png alt="Package.json" %}

{:start="5"}

5. Update main.js file at **/ui/src** folder level to list down all the entry points elements in this addon app UI facet. Always make sure main.js file has correct entry and file exist. UI would not load plugin elements without entry in this file.

{% picture sample-plugin-step5.png alt="main.js" %}

{% include callout.html content="**Note**: Do not add new third party dependencies into **package.json** without confirmation from Riversand Apps Support Team. Riversand deployment does not take up 3rd party in its packaging and all 3rd party libs must be added at platform level before consumed by any addon app.
" type="primary" %}

{% picture sample-plugin-step5.1.png alt="package.json dependencies" %}

{:start="6"}

6. Define or identify Docking point for Plugin. Docking points are the identified app or page or component section, that hosts plugins and provide the ability to interact with other components of the app. Examples of docking points are Wizard/Popup, Tab, Widget, View panel and so on. 

   Download sample JSON for Widget: <a href="files/appsdk/rock-dashboard-widget_admin@riversand.com_user.json" download> rock-dashboard-widget_admin@riversand.com_user.json</a>

   * Provide the docking point config details under **/ui/src/docking-host-config** path. Verify the path of the component is proper in the config - **ui/src/elements/plugin-hello-world/plugin-hello-world.js** path. 

   * While defining the docking point under **rock-home-widgets** config file, you must define the proper context for which the widget is configured. 
   
   <!-- For more information, see [Plugin Docking Points](sdk_docking_points.html). -->

{% picture docking-point.png alt="Docking-Point" %}

{% include callout.html content="**Note**: During Development, Developers must define the context as user so that respective user can view the configured widget.
" type="primary" %}

<br>

### Test Plugin

After defining the plugin, you can test the plugin **Hello World widget** in the **Home Dashboard**. 

**To test the plugin:**

1. Open the terminal.

{:start="2"}

2. Run **ruf-apps-cli --help** command to know more CLI commands available for app developer. **ruf-apps-cli** is CLI tool provided as part of add-on app template to perform various activities on UI facet like compile, deploy, load-config.

   Following are the key CLI commands available for developers:
   * **npm run build** - Internally runs following commands:
   * **ruf-apps-cli compile** - Compiles the app and reports errors if any. 
   * **ruf-apps-cli create** - Create artifact zip file.
   * **ruf-apps-cli deploy** - Deploys app to the configured developer sandbox in dev mode.
  
   **ruf-apps-cli enable** - Enable app for particular tenant listed in default.json or passed as parameter.
   
   **ruf-apps-cli load-config** - Load UI configs into the tenant seed from the latest deployed artifact.

   **ruf-apps-cli list-tenant** - List down all deployed and enabled apps for the tenant.

{:start="3"}

3. To verify the plugin, open browser with the Developer Sandbox URL and enter the credentials. 

{% picture browser.png alt="Test" %}

{:start="4"}

4. Open the Developer Sandbox URL in dev mode (?dev=true) and refresh the page to verify the **Hello World** widget.

{% picture hello-world-browser.png alt="Test" %}

  **Result**: The **Hello World** widget is available in the **Home Dashboard** which displays the message details.

{:start="5"}

5. After verifying the changes, you can push the updated changes to the respective git repo.

{% include callout.html content="**Note**: Every time when a full build is deployed, all required plugins must be deployed again.
" type="primary" %}

<br>

### Production Deployment

In order to deploy the plugin to production, you must submit the App bundle to Riversand App Management team. Upon review and approval, Riversand team deploy and enable the app for those customers who have subscribed to the App. 

<!-- {% include callout.html content="**Note**: Production deployment steps will be updated soon.
" type="primary" %} -->
