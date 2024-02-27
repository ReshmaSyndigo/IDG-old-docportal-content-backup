---
title: Plugin Docking Points
sidebar: rdp_sidebar
permalink: sdk_docking_points.html
type: HowTo
folder: rdp
---

{% include snippets/disclaimer_internal.md %}

The UI Platform provides specific docking points or areas where extensibility is supported. It helps to define and host the plugin in supported docking areas or points. The hosted plugin is considered as a standalone component and isolates with the core application. All the supported docking points are then published so that users can use them based on the business requirement. It also allows the hosted plugin to interact with other components of the application.

The following are the docking points or areas where extensibility is supported in the platform.

* **Wizard or Popup**
* **Tab**
* **Widget**
* **Search Sidebar**
* **Right Drawer/Common Drawer**
* **App**

### Wizard or Popup

The UI Platform provides an ability to configure a wizard or popup in the existing application. Plugin can be configured and hosted as a Popup (Default docking point). Plugins without docking point will be hosted as a Wizard or Popup. You can create your own wizard in the **Entity manage** page. You can define wizard using wizard config or wizard flow by defining the component details for each data function step. 

Consider that you wish to setup the docking point for **Manage Business Attributes** on click of business action in the **Entity Manage** page. 

**Docking point setup to host plugin as wizard**

1. To open the **Manage Business Attributes** as a wizard from business action, you must define the component details and business action:

* Define the Component **rock-wizard-manage-business-attributes** configuration for each data function step.

{% picture rock-wizard-manage-business-actions.png alt="rock-business-actions" %}

* In the **rock-business-actions** file, define the business action for **Manage Business Attributes**.

{% picture rock-business-actions-wizard.png alt="rock-business-actions" %}

**Result:** After the docking host setup, deploy the plugin. Open the respective serverURL in dev mode and navigate to the **Entity Manage** page. From the **Business Actions**, click **Manage Business Attributes**. The **Manage Business Attributes** is hosted as a wizard.

{% include callout.html content="**Note**: Setting docking point for wizard is not required. The plugin without docking point will be hosted as a Wizard or Popup.
" type="primary" %}

### Tab

The UI Platform provides an ability to configure a new tab in the **Entity Manage** under **Entity Details** and **Entity Sidebar** section. To host the new tab in the **Entity Details** section, you must define the docking point as **entity-detail-tabs** and to host the new tab in the **Entity Sidebar** tab section, define the docking point as **entity-sidebar**.

Consider that you wish to host the **Manage Contexts** from the business actions as a tab in the **Entity Manage** page. 

**Docking point setup to host plugin as a tab:**

1. In the **rock-business-actions** config file, define the plugin docking point as **entity-detail-tabs**. 

{:start="2"}

2. Enter the docking Point property with componentName & subComponentName for the plugin action.

<pre>
<code>
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      "id": "rock-business-actions-tenant_uiConfig",
      "name": "rock-business-actions",
      "version": "1.0",
      "type": "uiConfig",
      "properties": {
        "createdByService": "system",
        "createdBy": "system"
      },
      "data": {
        "contexts": [
          {
            "context": {
              "component": "rock-business-actions"
            },
            "jsonData": {
              "config": {
                "actionGroups": {
                  "context": {
                    "title": "{[BACMTit]}",
                    "visible": true,
                    "actions": {
                      "add-context": {
                        "name": "add-context",
                        "icon": "pebble-icon:globe",
                        "text": "{[MngCtxTxt]}",
                        "visible": true,
                        "intent": "write",
                        <span style="background-color: #FFFF00"> "componentName": "rock-wizard-entity-context-manage", </span>
                        <span style="background-color: #FFFF00"> "dockingPoint": "entity-detail-tabs", </span>
                        <span style="background-color: #FFFF00"> "actionName": "plugin-custom-business-action" </span>
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      }
    }
  ]
}
</code>
</pre>

{:start="3"}

3. After setting up the docking point, save the changes. 

   **Result:** After the docking host setup, deploy the plugin. Open the respective Developer Sandbox URL in dev mode and navigate to the Entity Manage page. From the Business actions, click **Manage Contexts**, the page is hosted as a tab.

{% include callout.html content="**Note**: Maximum tabs that are allowed to open is limited to 20 in the platform.
" type="primary" %}

### Widget

The UI Platform provides an ability to configure a new widget in the existing application. Plugin can be configured and hosted as a widget in the **Home Dashboard** or **Entity Manage - Summary** . A new widget can be configured by adding a new widget item in the widget panel configuration. 

The UI Platform also helps to configure the widget across the dashboards such as Home, Entity Summary Dashboard, Data Model Dashboard, System Dashboard, or wherever the widget panel is available.

Consider that you wish to configure the **Hello World** widget in the **Home Dashboard**.

**Docking point setup to host plugin as widget:**

In this example, the widget and docking point is defined in the **rock-dashboard-widgets** config file. You can configure new plugin component under widget section and host the component.

1. In the **rock-dashboard-widgets** config file, define new plugin component **plugin-hello-world** and properties under the widget column. In this case, the widget itself is the docking point. 

{% picture rock-home-widget.png alt="rock-dashboard-widgets" %}

{:start="2"}

2. Define the name and path of the new plugin component **plugin-hello-world** under component section.

{% picture rock-home-widget3.png alt="rock-home-widget" %}

**Result** After the docking host setup, deploy the plugin. Open the respective serverURL in dev mode and navigate to the **Home Dashboard** to view the **Hello World** widget.

### Search Sidebar

The UI Platform provides, **Search Sidebar** as a docking point. On the **Search Sidebar**, you have option to load any component. For example, loading **Classification Tree** components in **Search Sidebar**.

On the Riversand Application, **Search Sidebar** is hosted on the left-side of the **Search** page. You have option to load any components as a tab in **Search Sidebar**.

In this scenario, if you wish to load the **Classification Tree** as a components in **Search Sidebar** docking point. Using the **Classification Tree** components, you can triggers an event to perform the search. Classification Tree communicate with Riversand core application and based on your search selection, you can view the entity details in the core application. 

To host **Classification Tree** components in **Search Sidebar** docking point, perform the following:
* **Hide/Show left sidebar of Search Page**
* **Collapse/Open left sidebar of Search Page**
* **Configure settings at base level**
* **Configure settings at tenant/user level**
* **Load component to host "search-sidebar"**

<br>

**Hide/Show left sidebar of search page**

By default, Search sidebar is hidden. You have option to show/hide left sidebar of Search Page. 

To show the Search sidebar, perform the following:
1.	Open **rock-entity-search-discovery**.

{:start="2"}

2.	Go to **jsonData** > **config** > **componentsVisibility**.

{:start="3"}

3.	Under **rock-sidebar** set the value as **true**.

<br>

**Collapse/Open left sidebar of search page**

By default, Search sidebar is collapsed. You have option to open/collapse left sidebar of Search page.

To open the Search sidebar, perform the following:
1.	Open **rock-entity-search-discovery**. 

{:start="2"}

2.	Go to **jsonData** > **config** > **componentSettings** > **rock-sidebar**.

{:start="3"}

3.	Under **collapse** set the value as **false**.

<br>

**Configure settings at base level**

You can configure the settings at base level through the following plugin config settings:

<pre>
<code>
    {
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
   {
      <span style="background-color: #FFFF00"> "id": "ID", </span>
      <span style="background-color: #FFFF00">"name": "Name", </span>
      "version": "1.0",
      "type": "uiConfig",
      "properties": {
        "createdByService": "system",
        "createdBy": "system"
      },
      "data": {
        "contexts": [
          {
            "context": {
              "component": "rock-entity-search-discovery"
            },
            "jsonData": {
              "config": {
                "componentsVisibility": {
                  "rock-search-bar": true,
                  "rock-entity-type-model-lov": true,
                  "rock-entity-search-filter": true,
                  "rock-business-actions": true,
                  "rock-entity-search-result": true,
                  "rock-entity-quick-manage": true,
                  "rock-query-builder": true,
                  <span style="background-color: #FFFF00"> "rock-sidebar": false </span>
                },
                "attributesFilterSortDetails": {
                  "property": "externalName",
                  "dataType": "_STRING",
                  "sortType": "_ASC"
                },
                "componentSettings": {
                  "rock-entity-type-model-lov": {
                    "title": "{[TypTxt]}",
                    "multiSelect": true
                  },
                  "rock-entity-search-filter": {
                    "showNestedAttributes": false,
                    "showNestedChildAttributes": true,
                    "attributeValuesExistsSearchEnabled": true,
                    "allowDependencyForFilter": true
                  },
                  "rock-query-builder": {
                    "showNestedAttributes": false,
                    "showNestedChildAttributes": true,
                    "attributeValuesExistsSearchEnabled": true,
                    "enableRelationshipsSearch": true,
                    "relationshipsExistsSearchEnabled": true,
                    "enableRelatedEntitySearch": false,
                    "enableWorkflowSearch": true
                  },
                  "rock-sidebar": {
                    <span style="background-color: #FFFF00"> "collapse": true </span>
                  }
                },
                "selectedEntityTypes": []
              }
            }
          }
        ]
      }
    }
</code>
</pre>

<br>

**Configure settings at tenant/user level**

Configure the settings at tenant/user level through the following plugin config settings:

<pre>
<code>
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      <span style="background-color: #FFFF00"> "id": "ID", </span>
      <span style="background-color: #FFFF00"> "name": "NAME", </span>
      "type": "uiConfig",
      "data": {
        "contexts": [
          {
            "context": {
              "component": "rock-entity-search-discovery",
               <span style="background-color: #FFFF00"> "user": "USER" </span>
            },
            "jsonData": {
              "config": {
                "componentsVisibility": {
                  <span style="background-color: #FFFF00"> "rock-sidebar": true </span>
                },
                "componentSettings": {
                  "rock-sidebar": {
                    <span style="background-color: #FFFF00"> "collapse": true </span>
                  }
                }
              }
            }
          }
        ]
      }
    }
 ]
}
</code>
</pre>

<br>

**Load the components in "search-sidebar"**

Load the components in “search-sidebar” in the following ways:

* **Search sidebar tabs to view the plugins components (Load Dynamic Tab)**

<pre>
<code>
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      "id": "rock-business-actions-tenant_uiConfig",
      "name": "rock-business-actions",
      "version": "1.0",
      "type": "uiConfig",
      "properties": {
        "createdByService": "system",
        "createdBy": "system"
      },
      "data": {
        "contexts": [
          {
            "context": {
              "component": "rock-business-actions"
            },
            "jsonData": {
              "config": {
                "actionGroups": {
                  "context": {
                    "title": "{[BACMTit]}",
                    "visible": true,
                    "actions": {
                      "add-context": {
                        "name": "add-context",
                        "icon": "pebble-icon:globe",
                        "text": "{[MngCtxTxt]}",
                        "visible": true,
                        "intent": "write",
                        <span style="background-color: #FFFF00"> "componentName": "rock-wizard-entity-context-manage", </span>
                        <span style="background-color: #FFFF00"> "dockingPoint": "search-sidebar", </span>
                        <span style="background-color: #FFFF00"> "actionName": "plugin-custom-business-action" </span>
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      }
    }
  ]
}
</code>
</pre>

Add wizard configuration properties for a component.

<pre>
<code>
{
    "metaInfo": {
        "dataIndex": "config",
        "collectionName": "configObjects",
        "responseObjectName": "response"
    },
    "configObjects": [
        {
            "id": "sys_rock-wizard-entity-context-manage-base_uiConfig",
            "name": "sys_rock-wizard-entity-context-manage",
            "version": "1.0",
            "type": "uiConfig",
            "properties": {
                "createdByService": "system",
                "createdBy": "system"
            },
            "data": {
                "contexts": [
                    {
                        "context": {
                            "component": "rock-wizard-entity-context-manage"
                        },
                        "jsonData": {
                            "config": {
                                "name": "rock-entity-context-manage",
                                "label": "{[MngCtxTxt]}",
                                "isBFV2Flow": true,
                                "steps": {
                                    "step-1-rock-entity-context-manage": {
                                        "name": "step-1-rock-entity-context-manage",
                                        "label": "{[WECMLbl]}",
                                        "component": {
                                            <span style="background-color: #FFFF00"> "name": "rock-context-manage", </span>
                                            <span style="background-color: #FFFF00"> "path": "../rock-context-manage/rock-context-manage.js" </span>
                                        },
                                        "displaySequence": 10
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    ]
}
</code>
</pre>


*	**Load the plugin as a static tab (Load Static Tab)**

To add Static Tab details, you can configure "rock-search-sidebar" as following:

Thing Domian Configuration for Static Tab

<pre>
<code>
{
  "id": "rock-search-sidebar_thing_uiConfig",
  "name": "rock-search-sidebar_thing",
  "type": "uiConfig",
  "data": {
    "contexts": [
      {
        "context": {
          "app": "_DEFAULT",
          "channel": "_DEFAULT",
          "component": "rock-search-sidebar",
          "country": "_DEFAULT",
          "domain": "thing",
          "entityType": "_DEFAULT",
          "relationship": "_DEFAULT",
          "role": "_DEFAULT",
          "tenant": "_DEFAULT",
          "user": "_DEFAULT"
        },
        "jsonData": {
          "config": {
            "tabItems": {
              "summary": {
                    "name": "summary",
                    "title": "{[SumTit]}",
                    "selected": true,
                    "enableDropdownMenu": false,
                    "visible": true,
                    "displaySequence": 10,
                    "component": {
                      "name": "rock-entity-summary",
                      "path": "../rock-entity-summary/rock-entity-summary.js",
                      "properties": {}
                }
              }
            }
          }
        }
      }
    ]
  }
}
</code>
</pre>

Base configuration for Static Tab

<pre>
<code>
{
  "id": "sys_rock-search-sidebar-base_uiConfig",
  "name": "sys_rock-search-sidebar",
  "type": "uiConfig",
  "data": {
    "contexts": [
      {
        "context": {
          "component": "rock-search-sidebar",
          "sysApp": "_DEFAULT",
          "sysDomain": "_DEFAULT",
          "sysEntityType": "_DEFAULT",
          "sysRelationship": "_DEFAULT",
          "sysRole": "_DEFAULT"
        },
        "jsonData": {
          "config": {
            "tabItems": {},
            "maxAllowedTabs": 5,
            "scrollable": true,
            "fitContainer": false
          }
        }
      }
    ]
  }
}
</code>
</pre>

### Right Drawer/Common Drawer

The UI Platform provides, **Right Drawer/Common Drawer** as a docking point at tenant level. On the **Right Drawer/Common Drawer**, you have option to load component. For example, loading **Task-list** components in **Right Drawer/Common Drawer**. 

Once you load a task-list component using **Right Drawer/Common Drawer** docking point, you can access those task-list components easily from any page or apps in Riversand Platform. On the Riversand Application, **Right Drawer/Common Drawer** docking point's task-list components are triggered through **Task-Status** icon available on the Riversand Platform’s top-right menu bar.

{% include callout.html content="**Note**: **Right Drawer/Common Drawer** keep track of your last changes for task-list components. On refreshing, you can continue working with the selections that were made earlier for task-list components.
" type="primary" %}

Right Drawer/Common Drawer is specific to task-list as following:

{% picture appdev-common-drawer.png alt="common-drawer" %}

### App

The UI Platform provides the ability to configure a new application. Consider you wish to configure custom app such as "Doc Portal" within the existing application. You can configure navigation menu.

{% include callout.html content="**Note**: Content development is in progress.
" type="primary" %}