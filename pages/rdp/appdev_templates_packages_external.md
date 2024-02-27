---
title: Templates, Samples and Packages
sidebar: rdp_sidebar
permalink: appdev_templates_packages.html
type: Description
folder: rdp
---

{% include snippets/disclaimer_preview.md %} 

Once you register successfully to the App SDKs and receive the 'app id', the developer is authorized to access the git repositories. 

Upon successfull secure key authentication, the developer can access the app templates, reference samples and packages, that are hosted in the corresponding GitHub repository.

{% picture gitrepos_appsdk1.png alt="Templates, Samples & Packages in GitHub repository" %}

## Templates
Templates are sample schema(s), hosted in addon-app-template git repository, that includes plugin libraries and components for the plugin/add-on development. This template makes it easy to integrate new functionality on the existing application. Developers can clone this template in their development environment and create new plugin components for multiple use cases.

## Samples
Samples are reference files hosted in reference-apps git repository, that developers can use to create the first sample helloworld app, and refer other samples corresponding to connectors, batch processing and so on. Whenever new capabilities are developed, more samples will be added to this repository.  

## Packages
Packages are extension JAR file(s) that includes required codes/libraries, configuration files and so on. Each App SDK has its own package hosted/published in the riversand-sdk-registry git repository, from where App developers can get the packages and use them in their development environment. 