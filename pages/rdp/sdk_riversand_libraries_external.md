---
title: UI SDK Storybook
sidebar: rdp_sidebar
permalink: sdk_riversand_libraries.html
type: Description
folder: rdp
---

{% include snippets/disclaimer_internal.md %}

This article provides references to Javascript documentation that contains available SDK libraries, methods and helper classes pertaining to UI plugins, integrations and connectors, and visualization. 

For Riversand UI SDK libraries and how to communicate between plugin and core app, refer the below articles:

* [Resource Library](#resource-library)
* [Application Communication Interface](#application-communication-interface)

<!-- For integration and connector SDK java documentation, refer [Integration and Connector SDK](ref_int_conn.html) article.  -->

Riversand UI SDK libraries are collection of classes and methods used to perform specific operations. Instead of building a code to extend the capability of the existing application, these libraries provide the compatibility to develop new feature. 

<a target="_blank" href="/rdp/dev/sdk/ui/index.html" class="btn btn-primary" role="button">Riversand UI SDK</a>

## Resource Library

The libraries available in order to develop a plugin functionality are as follows:
* Base classes
* UI Elements Library; Components and Style Sheet Manager
* Data Access Layer Library: ui-platform-dataaccess
* Application Communication Interface: ui-platform-aci
* Utility Library: ui-platform-utils 

Riversand Platform allows to define new Plugin Components as per the business requirements. The new component can be written in javaScript, html, and css. A component can have its own config, which can be used to customize the behavior of the component. UI Plugins mainly includes the following:
* **Html template**: CSS templates used while creating a plugin component.
* **Rendering flow**: Logic to define the behavior of plugin such as show a button, hide a button, make it visible, and so on.
* **Data manage flow**: Data related to config, models, and actual entity data.

{% picture Ui-building-blocks1.png alt="UI Plugin Building Blocks" %}

Here is what each of these libraries constitute of:

| Libraries | Description |
|--------|-------------|
| **Base** | Includes the base classes with generic functionalities which are needed for the UI Components such as Login mechanism, localization, so on. Developers can access the classes and define the components. |
| **UI Elements Library** | Includes user interface elements such as Textbox, Checkbox, Themes, and styles which allow developers to develop plugins in the existing application. <br/> **Style Sheet Manager**: Includes all the core styles used in the platform. All the plugins should match the theme and style of the application. All of these libraries are packaged and given as a Template repository which is used for plugin development. |
| **Data Gateway or Data Access Layer** | Includes information related to data, models and. All MDM data interactions is through Data Access Layer. Data other than MDM is fetched via REST call and must be certified by SDK SME team. Developers can build a connection logic using these libraries that enables to interact with the MDM system. This library helps to get the details of the entity, update entity details, config details, and so on. |
| **Utilities** | Includes generic utility methods such as cloneObject, and MDM specific utility methods such as 'generateEntityGetRequest' which are test and certified. These methods are consolidated and provide as Utils library. |
| **Application Communication Interface** | Application Communication Interface is a synchronous system that provides an ability to communicate between plugin and core app. It acts as a bridge between the component and the application, whenever any action is triggered. It mainly includes  a registry of all the subscribed actions and dispatches actions to the subscribed components when actions are raised. |
| **MDM Elements** | This mainly includes elements which allows to create new data function components or business functions such as "entity search result view", attribute manage panel, and so on. This feature is further enhanced and will be available in the upcoming release. | 

## Application Communication Interface

Application Communication Interface is a synchronous system that provides an ability to communicate between plugin and core app. It acts as a bridge between the component and the application, whenever any action is triggered. It mainly includes a registry of all the subscribed actions and dispatches actions to the subscribed components when actions are raised.

### Subscribe Actions dispatched by the Core Application

Consider you wish to dispatch "context-manage" action whenever the context is changed.
To subscribe the actions dispatched by the core application, perform these steps:
1. Create **actions** property under "properties" section of plugin component.

<pre>
<code>
actions: {
    "type": Object,
    "value": {
        "context-loaded": {
            "name": "context-loaded"
        }
    }
</code>
</pre>

{:start="2"}

2. Define the **actionCallback** method for the subscribed action of the plugin component. This method includes two parameters, “actionName” and “detail” 
* **actionName** - The actionName is the name of the action which is triggered from the core application (when the context is changed).
* **detail** - The detail is the data mentioned in the schema (Define what has to be performed).

<pre>
<code>
actionCallback(actionName, detail) {
        switch (actionName) {
        case "context-loaded":
            // do something
            break;
        default:
            break;
        }
    }
</code>
</pre>

{% include callout.html content="**Note**: The “actionCallback” function will be triggered only for those actions which are subscribed by the plugin component.
" type="primary" %}

### Dispatch actions from Plugin to Core Application

Consider that you wish to dispatch actions to communicate with core app from the plugin. For example, "execute-app-refresh" to refresh the app. 

**To create and actions from the plugins, perform these steps:**

* Define the actions. The actions are of following two types:
  
  * Action (app specific actions) - Create the app specific actions such as "execute-app-refresh", if the action is applicable to specific app.

<pre>
<code>
let action = this.aci.createAction({
    "name": "execute-app-refresh",
    "detail": {
        "data": {}
    }
});

this.aci.dispatch(action);
</code>
</pre>

  * GlobalActions - Create the global action "Open-app-entity-manage”, if the action is applicable globally. 

<pre>
<code>
 let action = this.aci.createAction({
                "name": “open-app-entity-manage",
                "detail": {
                    "queryParams": “”
                }
            });
 
 this.aci.dispatchGlobal(action)
</code>
</pre>

For example, consider **entity-loaded** action. This action is dispatched when **Entity Manage** page is loaded.
* **Action Name**: entity-loaded
* **Action Initiator**: Any action can get initiated from the Core Application or Plugin. The entity-loaded action is initiated from the Core Application.
* **App**: This specifies where the event/action is implemented or Applicable. The entity-loaded is implemented in the "Entity Manage" page.
* **Schema or Content**: This specifies the schema in which the data is available. In this case, the core is the action initiator and plugin is subscribing the action. The schema is available as follows:

<pre>
<code>
{
  "name": "entity-loaded",
  "detail": {
    "data": {
      "entityInfo": [
        {
          "id": "",
          "type": ""
        }
      ],
      "contextData": {}
    }
  }
}
</code>
</pre>

**The table displays the ACI Actions to the subscribed components** <br/>

|   Action Name    | Action Initiator | App | Description | Schema/Content|
|------------------|------------------|-----|-------------|----------------------------------|
| entity-loaded | Core App | Entity Manage | This action is dispatched when entity manage page is loaded. | <a href="files/appsdk/entity-loaded.json" download>entity-loaded.json</a> |
| context-loaded | Core App | Entity Manage | This action is dispatched when the context is loaded. | <a href="files/appsdk/context-loaded.json" download>context-loaded.json</a> |
| entity-sidebar-loading | Core App | Entity Manage | This action is dispatched when the side bar in entity manage page starts loading. | <a href="files/appsdk/entity-sidebar-loading.json" download>entity-sidebar-loading.json</a> | 
| entity-sidebar-tab-changed | Core App | Entity Manage | This action is dispatched when the sidebar tab in entity manage page is changed. For example: Tab change from recent-activity to workflow. | <a href="files/appsdk/entity-sidebar-tab-changed.json" download>entity-sidebar-tab-changed.json</a> | 
| entity-workflow-transition-submitted | Core App | Entity Manage | This action is dispatched on workflow transition submission. | <a href="files/appsdk/entity-workflow-transition-submitted.json" download>entity-workflow-transition-submitted.json</a> | 
| entity-workflow-transition-completed | Core App | Entity Manage | This action is dispatched on workflow transition completion. | <a href="files/appsdk/entity-workflow-transition-submitted.json" download>entity-workflow-transition-submitted.json</a> | 
| entity-workflow-assignment-submitted | Core App | Entity Manage |  This action is dispatched when workflow assignment is submitted. | <a href="files/appsdk/entity-workflow-assignment-submitted.json" download>entity-workflow-assignment-submitted.json</a> | 
| entity-workflow-assignment-completed | Core App | Entity Manage | This action is dispatched when workflow assignment is completed. | <a href="files/appsdk/entity-workflow-assignment-complete.json" download>entity-workflow-assignment-complete.json</a> |
| entity-details-tabs-loading | Core App | Entity Manage | This action is dispatched when entity details in entity manage page is loading. | <a href="files/appsdk/entity-details-tabs-loading.json" download>entity-details-tabs-loading.json</a> |
| entity-details-tab-changed | Core App | Entity Manage | This action is dispatched when entity details tab in entity manage page is changed. | <a href="files/appsdk/entity-details-tab-changed.json" download>entity-details-tab-changed.json</a> |
| entity-details-tab-menu-changed | Core App | Entity Manage | This action is dispatched when tab menu in entity details is changed. | <a href="files/appsdk/entity-details-tab-menu-changed.json" download>entity-details-tab-menu-changed.json</a> | 
| entity-save-submitted |  | Entity Manage | This action is dispatched when any attribute or relationship in entity manage page is edited and save submitted. | <a href="files/appsdk/entity-save-submitted.json" download>entity-save-submitted.json</a> | 
| entity-save-completed | Core App | Entity Manage | This action is dispatched when any attribute or relationship in entity manage page is edited and save completed. | <a href="files/appsdk/entity-save-completed.json" download>entity-save-completed.json</a> |
| execute-app-refresh	| Plugin | Entity Manage | The plugin developer has to dispatch this action by passing provided schema for app refresh from the plugin. | <a href="files/appsdk/execute-app-refresh.json" download>execute-app-refresh.json</a> |
| open-app-entity-manage | Plugin | Global | The plugin developer has to dispatch this action by passing provided schema to open app entity manage page from the plugin. | <a href="files/appsdk/open-app-entity-manage.json" download>open-app-entity-manage.json</a> | 
| open-app-task-detail | Plugin | Global | The plugin developer has to dispatch this action by passing the provided schema to open task details page from the plugin.	| <a href="files/appsdk/open-app-task-detail.json" download>open-app-task-detail.json</a> | 
| open-app-entity-create | Plugin | Global | The plugin developer has to dispatch this action by passing the provided schema to open create entity page from the plugin. | <a href="files/appsdk/open-app-entity-create.json" download>open-app-entity-create.json</a> | 