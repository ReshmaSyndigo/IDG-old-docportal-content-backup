---
title: Understand UI Template 
sidebar: rdp_sidebar
permalink: ui_template.html
folder: rdp
type: HowTo
---

You can open the cloned add-on app Git repo folder in Visual Studio Code to view the add-on app template structure. The following screenshot depicts the sample add-on app folder:

{% picture ui-template.png alt="Sample UI Template" %}

* **application.json**: Specifies the add-on app details such as App ID, Description, and SDK Dependencies.

{% picture application-json.png alt="application.json" %}

* **version.properties**: Specifies the app version details.

{% picture app-version.png alt="App Version" %}

* **default.json**: To run the app locally in your respective tenant, you need to configure environment variables by providing the required variables to access the tenant. This file in the config folder includes the environmental details as shown in the below screenshot:

{% picture default-json.png alt="defualt.json" %}

| Key | Value |
| ----- | ------ |
| id | specifies the App ID. |
| server | Specifies the "Tenant URL" of your respective tenant. |
| userid | Specfies the User ID of your tenant. |
| authid and authsecret | Specifies the authid and authsecret keys provided by Riversand. |
| tenantid | Specifies the tenantid of your tenant. |

* **src**: Specifies the main part of code development and docking instruction of UI add-on app. The following screenshot depicts the "src" folder of sample "helloworld" plugin app:

{% picture ui-src.png alt="src folder" %}
 
| Folder/File | Description |
| ----------- | ------------ |
| elements | Includes the app code in .js file format. |
| styles | Includes all CSS based styles in .scss file format. |
| ui-config | Includes app-specific configurations. |
| main.js | This file provides information to the root file, which points to the main file. |
