---
title: Call External APIs from UI Plugins
sidebar: rdp_sidebar
permalink: sdk_call_external_apis_from_ui_plugins.html
folder: rdp
type: HowTo

---

{% include snippets/disclaimer_internal.md %}

Riversand App SDK allows calling external APIs to get or set data that are not stored in Riversand Platform. External APIs can also be used to transform, enrich or validate some data using secret key and other custom headers. 

Riversand SDK allows passing headers and parameters to the external API. Values such as **api_key** and **secret_key** can be set using a config, which is retrieved by Riversand backend services and the data is appended to the API call automatically.

## Scenario
To configure secret key and other custom headers through the API call from the following URL: https://api.themoviedb.org/3/movie/150

**To configure external API, following are the required details**:
* **API Identifier** - The unique key through which config for external API is identified.
* **Host Link** - Host link should be the upstream domain origin. Do not use **/** or **relative routes** for host link. You should provide only host link.
* **Header** - Header that are forward to the upstream and are added to the request.
* **Params** - Parameters that are forwarded to the upstream and are added as a query string.

**To call an external API, create the following external API configuration**:
{% highlight json %}
{
     "configObject": {
         "id": "externalapiintegrationconfig",
         "name": "externalapiintegrationconfig",
         "version": "1.0",
         "type": "externalapiintegrationconfig",
         "properties": {
         "createdByService": "system",
         "createdBy": "system"
         },
        "data": {
            "jsonData": {
                "api": {
                    "movie": {
                        "host": "https://api.themoviedb.org",
                        "headers": {
                            "secrettoken": "xxx"
                        },
                        "params": {
                            "api_key": "xxxx"
                        }
                    }
                }
            }
        }
     }
 }
{% endhighlight %}

From the above API configuration,
* Movie is API Identifier.
* https://api.themoviedb.org is host link.
* secrettoken is headers.
* api_key is parameters.
<br>

Please note that the API identifier **movie** is taken from the following pass-through route from your plugin: *fetch('/data/pass-through/external/**movie**/3/movie/150’)*.
