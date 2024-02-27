---
title: Define Docking Host Config for Add-on Applications
sidebar: rdp_sidebar
permalink: sdk_upd_docking_config_for_addon_apps.html
type: HowTo
folder: rdp
---

{% include snippets/disclaimer_internal.md %} 

You can define the customized docking host configs for Add-on applications at role/user/tenant level in App repository based on your requirements. During App deployment, the docking host config gets deployed and merged with the respective core configs of the application during application load. Based on the deployment, the application displays the Add-on app along with the existing Out-Of-the-Box apps. For more information, see [Plugin Docking Points](sdk_docking_points.html).

### Scenario

Consider that you wish to configure the "Hello World" widget in the "Home Dashboard". In this example, the widget and docking point is defined in the "rock-home-widgets", which is a docking host config file. You can configure new plugin component under widget section and host the component.

**To define the docking host config for Add-on applications:**

1. From your App repository, go to **ui** facets folder, and then open the **src** folder.

    **Result:** The folders available in the **src** folder are displayed. 

{:start="2"}

2. Open the **ui-config** folder and then click the **docking-host-config** folder. If docking-host-config folder is not available, then create a new folder.

{:start="3"}

3. Create **docking-host-config** for "Hello World" widget. In the below sample **docking-host-config**, specify the following parameters:

* **id:** Specify the Add-on app ID along with the other context parameters. In the below config, the "id" for Hello World widget is specified as "rock-home-widgets_systemadmin_helloworld_uiConfig" along with the other context paramters.

* **role**: Under "contexts", specify the role of the user, who can access the Add-on app. In the below config, "role" is specified as "systemadmin".

* **addonApp**: Specify the Add-on app name. In the below config, "addOnApp" is specified as "helloworld".

* Under "Widgets", specify the details of the Add-on app plugin.

**Note:** You must specify the Add-on app ID context in the "id" and the **addonApp** fields mandatorily while defining the docking host config.

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
      <span style="background-color: #FFFF00">"id": "rock-home-widgets_systemadmin_helloworld_uiConfig"</span>,
      "name": "rock-home-widgets_systemadmin_helloworld",
      "type": "uiConfig",
      "data": {
        "contexts": [
          {
            "context": {
              "component": "rock-home-widgets",
              <span style="background-color: #FFFF00">"role": "systemadmin"</span>,
              <span style="background-color: #FFFF00">"addOnApp": "helloworld"</span>
            },
            "jsonData": {
              "config": {
                <span style="background-color: #FFFF00">"widgets": {</span>
                  "plugin-hello-world": {
                    "name": "plugin-hello-world",
                    "displaySequence": 30,
                    "nonClosable": true,
                    "nonMaximizable": true,
                    "nonDraggable": false,
                    "config": {
                      "heading": "Hello World",
                      "headerIcon": "pebble-icon:saved-search",
                      "position-x": 6,
                      "position-y": 3,
                      "width": 4,
                      "height": 10,
                      "iconButtons": {
                        "refresh": {
                          "name": "refresh",
                          "label": "Refresh",
                          "icon": "pebble-icon:refresh",
                          "showInMoreActions": false
                        },
                        "Settings": {
                          "name": "settings",
                          "label": "settings",
                          "icon": "pebble-icon:settings",
                          "showInMoreActions": false
                        }
                      },
                      "component": {
                        "name": "plugin-hello-world",
                        "path": "/plugin-src/helloworld/elements/plugin-hello-world/plugin-hello-world.js",
                        "properties": {
                          "view-mode": true
                        }
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

{:start="4"}

4. Save and close the file.

Once the app is deployed, navigate to **System Administration** > **UI Configurations** and click **Update cache** under **Version Manager** to view the configured Add-on app in the UI.