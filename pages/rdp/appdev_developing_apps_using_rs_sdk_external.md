---
title: About Developing Apps Using Riversand SDKs 
sidebar: rdp_sidebar
permalink: appdev_developing_apps_using_rs_sdk.html
type: Description
folder: rdp
---

{% include snippets/disclaimer_preview.md %} 

An app is a combination of software modules referred to as Facets which solves a business use case and utilizes additional storage and processing than the SaaS solution.

## UI Plugin Facet

The UI plugin facet can communicate with core data platform, or other facets, like visualisation, analytics, or connector and provide completely new features/functionalities that the core platform does not have.

The existing app's functionality is not being customized but extension or addition is being made to the core app’s functionality by creating new UI Apps.
* **Widgets**: Widgets are easy-to-use applications or components with some visual and interactive elements with them along with some business logic. It has self-contained functionality in a single frame which can be embedded in an app as a plugin. For example: Recent Activity Screen. 
* **Business Functions**: Business functions need not have visual elements. It can be related to configuring a button to perform an action that is defined as part of add-on app. It has self-contained functionality in a wizard which can be triggered from an action (like button, menu) from an app. For example: Send Mail.

## Visualization Facet

App to create a new visualization report using already analyzed data provided.
* **Report Dashboard**: A live report formed using a collection of reporting widgets which provide at-a-glance insights into your data and enable you to drill down into details.
* **Report Widget**: A reporting widget is visual representation of the data typically in charts such as bar, pie, column, area, line, network, goal & gauge, tag cloud, tabular etc.

## Connector Facet

Apps to connect and integrate to industry standard external systems such as marketplaces, ecommerce systems as well as on-premise systems which are not already provided by Riversand.

## Analytics Facet

* App which utilizes onboarded external data & internal master data, analyzes using the Riversand Analytics SDK and create insights for better management of master data.
* This includes UI plugins and visualizations required for analytics.

<!-- {% include see-also.html content="
* [Why App SDK?](appdev_why_rs_app_sdk.html) -->
<!-- * [What is an Riversand SDK, Add-on App, and Facets?](appdev_what_app_sdk_add-ons.html) -->
<!-- * [About Riversand SDK and Capabilities](appdev_rs_sdk_capabilities.html)
* [About App Development Life Cycle](appdev_development_to_deployment_life_cycle.html)
* [About Integrating with the Riversand Platform](appdev_integrate_with_rs.html)
* [Terminologies](appdev_libraries_terminologies.html)
" %} -->