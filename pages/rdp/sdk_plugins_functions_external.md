---
title: Plugin Functions
sidebar: rdp_sidebar
permalink: sdk_plugins_functions.html
type: HowTo
folder: rdp
---

{% include snippets/disclaimer_internal.md %} 

Plugin function is a piece of code or plain JavaScript function that the application calls via specific input arguments to perform certain tasks or trigger some actions. Developers can authorize the plugin by defining new component and make them interact with the core application. Plugins are defined in two ways, via Plugin functions or by defining the new plugin components. Developers can create the plugin functions and can raise the actions. 


Consider that you wish to create a plugin function to add a new menu item **Send Mail** as a part of the business actions. On click of **Send Mail** under business action, the plugin function is triggered and executed. 

**To develop a plugin function, perform these:**

1. Clone the "ui-plugin-template" repository and setup the dev environment.

{:start="2"}

2. Create the plugin function such as **send-mail-plugin-function.js** under **src/elements/plugin-functions** path. The function is defined with two actions; context-loaded, and send-mail-action.

01-user > <a href="files/appsdk/rock-business-actions_user.json" download>rock-business-actions_user.json</a>

* context-loaded - Define the core action. The action is triggered when there is context change using the context sector in the core app.
* send-mail-action - Define the custom action. The action is triggered on click of “Send Mail“ business action.

{% picture sdk-plugin-function.png alt="plugin-function.json" %}

{:start="3"}

3. In the **rock-business-actions** config file, define the plugin docking host configuration under **src/ui-config/docking-host-config/** path.
* Add new custom menu “Send Mail“ under business actions and define the menu item name “actionName" as "send-mail-action".

01-user > <a href="files/appsdk/rock-business-actions_user.json" download>rock-business-actions_user.json</a>

{% picture sdk-plugin-docking-host.png alt="Plugin Docking Host Config" %}

{:start="4"}

4. Define the plugin config such as "app-plugin-function_app-entity-manage.json" under **src/ui-config/plugin-config/05-app/** path for the plugin function deployment. 

01-user > <a href="files/appsdk/app-plugin-function_app-entity-manage.json" download>app-plugin-function_app-entity-manage.json</a>

{:start="5"}

5. After defining  plugin, open the terminal and execute **npm run compile-and-deploy -- --DEPLOY_CONFIG** at your plugin folder. This command compiles and deploys the plugin to the serverURL, and also deploys the config changes.

    **Result:** The plugin function gets deployed successfully.

{:start="6"}

6. Open the ServerURL in dev mode (?dev=true) and navigate to **Entity Manage** page. Change the context from the selector, the plugin function is triggered, and an alert pop-up message is displayed.

{% picture sdk-plugin-function-result.png alt="Plugin Function" %} 
