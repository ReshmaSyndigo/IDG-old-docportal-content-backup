---
title: Authorize Config Objects for various API Services
sidebar: rdp_sidebar
permalink: api_authorize_config_object.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to control the access to the user accessible data based on the role and user permissions. 

You can create the authorization for the required "type" by defining the "Read", "write", and "delete" permissions for the respective role and user. Based on the defined permissions, the authorized user can perform a query and access the data of the Platform. 

## Enable Authorization

* Using configuration service, you can enable the authorization at the tenant level by specifying “isSystemDataAuthorizationEnabled" to "true". By default, “isSystemDataAuthorizationEnabled" is set to "false". For more information, see [Create Configuration](api_create_configuration.html).

The following is the sample request to enable the authorization at the tenant level:

<pre>
<code>
{
  "configObject": {
    "id": "tenant_rsglobalconfig",
    "type": "rsglobalconfig",
    "data": {
      "jsonData": {
         <span style="background-color: #FFFF00">"isSystemDataAuthorizationEnabled": true </span>
      }
    }
  }
}
</code>
</pre>

* The authorization is enabled or disabled based on the "x-rdp-clientId" parameter value specified in the Request Header. In the Request Header:  
   * If the "x-rdp-clientId" parameter is specified as "rufClient", then the authorization is enabled.
   * If the "x-rdp-clientId" parameter value is other than "rufClient", then the authorization is disabled.
   * If the "x-rdp-clientId" parameter is not available in the Headers, then the authorization is enabled. 
For more information, see [Understanding Request Headers](api_understand_req_header.html).

## Qualified Objects for Authorization

By default, all the config objects that are available under various services such as model service, configuration service, generic object service, schedule service, and event service are qualified to create authorization. 

At the tenant level, you can exclude the config objects from the authorization by specfiying in the "platformdefaultconfig". In the "platformdefaultconfig", specify the config objects that you wish to exclude in "systemDataExclusionTypes" parameter as shown in the below sample JSON configuration:

<pre>
<code>
{
  "configObject": {
    "id": "tenant_rsglobalconfig",
    "type": "rsglobalconfig",
    "data": {
      "jsonData": {
         <span style="background-color: #FFFF00">"systemDataExclusionTypes": "scheduleobject" </span>
      }
    }
  }
}
</code>
</pre>

