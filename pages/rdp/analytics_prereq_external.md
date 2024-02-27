---
title: Set-Up Prerequisites
sidebar: rdp_sidebar
permalink: analytics_prereq.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

This article will help App developers to understand the environment setup requirements to code, compile, develop and test the analytics app. 

Technically, the codes run as a part of a task with environment variables, configuration files, executables, and so on, managed by the batch system.

The following are the prerequisites:

1. Install **Ubuntu 18+** Operating System. Note that, other OS types might work but are not tested.

{:start="2"}

2. Use **Python 3.6** programming language to develop and compile the code. Note that, if this language is not currently supported, use **pyenv**. 

{:start="3"} 

3. Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) version 2.1. 
   
   Make sure, you verify the version using **az --version**. 
   
   NOTE: There might be issues if you are not using an LTS version of Ubuntu. Not all past interim versions (say - 17.04) are supported.

{:start="4"}

4. Get test tenant from Riversand Support team to run and deploy the app locally. The data model should be loaded in the test tenant to test the various functionalities based on your requirements.

{:start="5"}

5. Get a Git repository to host the add-on app configurations, where all the components required to develop the batch app are placed in the Git repository.

{:start="6"}

6. Get Machine Client credentials to call batch app to the RDP. These are associated with test tenants to make proper calls.

{:start="7"}

7. Run the install command- **sudo apt install jq** to install JSON processor required to filter and transform the data.

{:start="8"}

8. Make sure, you have the recommended editor-**Visual Studio Code** installed. Also, install the python extension from Microsoft.

{:start="9"}

9. Make sure to register for Analytics App SDK and obtain unique **app id** to access git repos of Reference Apps and App SDK.

   The Apps SDK contains app libraries and app infrastructure, necessary to orchestrate and run applications. Note that, Reference Apps repository contains set of sample applications.

{:start="10"} 

10. Install Postman application to perform REST API calls to the RDP.

{:start="11"}

11. The application build functionality requires, that the **APPS_SDK_DIR** environment variable be set to the root of the local Apps SDK git repository. 

   For example, export **APPS_SDK_DIR** to **/home/XYZ/work/riversand-sdk-registry**, Where XYZ is the username. Include this as the last line in your **.bashrc** file, so that it is always set and unchanged.

