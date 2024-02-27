---
title: Setup Pre-requisites for UI Plugin Facet
sidebar: rdp_sidebar
permalink: appdev_initial_setup.html
type: HowTo
folder: rdp
---

{% include snippets/disclaimer_preview.md %} 

To extend the application, Riversand allows you to develop an Add-on App with UI facet. This section describes the tools that are required to be installed in the environment to code, compile, and to develop your App with a UI facet.

### Before you Begin

Here is a list of recommended topics to learn before you start. You must understand:

* Basics of web components specifications and life cycle events
* Basics of Polymer / LitElement 
* ES6 classes and language, including async/await and promises
* Object Oriented JavaScript, JSON structure, and properties
* HTML5 and CSS3
* git and github.com

## Permissions

The developers must have the following permissions to develop the plugins.

* Permissions to the add-on app template (addon-app-template) repository.
* Security Key to access the repository.

### Infrastructure

Follow in the same order as mentioned below:

1. Install **Visual Studio Code** or a newer version.

{:start="2"}

2. Install Node JS with NPM. Node JS version 10.18.1 (but below 11) with NPM 6.x or higher version.

{:start="3"}

3. Install **VS code extensions** such as Jsdoc.

{:start="4"}

4. Riversand connection configuration information such as:

* Developer Sandbox Environment URL 

* Developer Sandbox Client Id and Client Secret Key 


### Pre-requisites to set up Developer Environment 

The following procedures outline the steps to be followed by plugin developers to set up the environment, to test, and deploy your application.

1. Install Visual Studio code.

{:start="2"}

2. Install and setup local git.

{:start="3"}

3. Install npm dependencies from <a target="_blank" href="https://www.npmjs.com/get-npm">https://www.npmjs.com/get-npm</a>. If npm is already installed, you need to update it to latest version using below commands:

* npm install npm@latest -g

{:start="4"}

4. Clone Riversand github repository. You can clone repository in two ways:

a. Clone the **addon-app-template** repository from the github to the local system.

* In the terminal, run the following command to clone the repo. <br/>

{% highlight json %}
git clone https://github.com/riversandtechnologies/addon-app-template.git 
{% endhighlight %}

{% picture clone-ui-framework.png alt="UI Framework" %}

* Enter the repo name starting with addon-app-(("Unique APP ID")). Consider you wish to create new **Hello World** widget in the **Home Dashboard**, then enter the repo name as **addon-app-hello-world-widget** and click **Create Repository from template** option.
Create a template and then push to the git hub repository.
 
b. Open the github, click **Use this template** and create your own repository.

**Result:** A new repository is successfully created.