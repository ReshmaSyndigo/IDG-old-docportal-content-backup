---
title: Understanding Request Headers
sidebar: rdp_sidebar
permalink: api_understand_req_header.html
folder: rdp
type: HowToAPI
---

This topic describes the API request header for authentication in Riversand Platform. It assumes that you already have set-up all the pre-requisites as required before using the API. See [Before you Begin](api_auth_conf.html), for more information. The client must pass certain parameters in the header of each request based on the approach used for authenticating the request.

{% if site.build != "ascend" %}

The following table lists the header parameters and the description for the same using the Client ID and Client Secret that are passed in the API Request header:

| Parameter | Required for Authentication | Description |
|---------- |-----------------------------|-----------|
| Content-Type | Yes | Indicates the type of content in the request body. Since all requests are in JSON format, content-type is always application/json. |
| auth-client-id | Yes | Indicates the clientId provided by Riversand for the specified tenant and environment. |
| auth-client-secret | Yes | Indicates the clientSecret provided by Riversand for the specified tenant and environment. |
| x-rdp-clientId | Yes | Indicates the Id of the client accessing the API.|
| x-rdp-userId | Yes | Indicates the Id of the user client accessing the API. The userId must be a valid userId that exists in Riversand Platform. The authentication service uses the userId to determine the user roles for further request authorization performed by the Riversand Platform. |
| x-rdp-version | No | Indicates the version of Riversand Platform. |
| x-rdp-tenantId | Yes | Indicates the tenant identifier.|
| x-rdp-ownershipData | No | Indicates the data used for authorizing the ownership. See [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}.|
| x-rdp-userName | No | Indicates the name of the user.|
| x-rdp-firstName | No | Indicates the first name of the user. |
| x-rdp-lastName | No | Indicates the last name of the user. |
| x-rdp-userEmail | No | Indicates the email of the user. |
| x-rdp-apiversion | No | Indicates the version of REST API. If the parameter is not specified, then the default version will be invoked. |
| x-rdp-userRoles | Yes | Indicates a comma separated list of roles the user has. This is used for authorizing the data. See [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}. |
{% endif %}

{% if site.build == "ascend" %}

The following table lists the header parameters and the description for the same using the Client ID and Client Secret that are passed in the API Request header:

| Parameter | Required for Authentication | Description |
|---------- |-----------------------------|-----------|
| Content-Type | Yes | Indicates the type of content in the request body. Since all requests are in JSON format, content-type is always application/json. |
| auth-client-id | Yes | Indicates the clientId provided by Riversand for the specified tenant and environment. |
| auth-client-secret | Yes | Indicates the clientSecret provided by Riversand for the specified tenant and environment. |
| x-rdp-clientId | Yes | Indicates the Id of the client accessing the API.|
| x-rdp-userId | Yes | Indicates the Id of the user client accessing the API. The userId must be a valid userId that exists in Riversand Platform. The authentication service uses the userId to determine the user roles for further request authorization performed by the Riversand Platform. |
| x-rdp-version | No | Indicates the version of Riversand Platform. |
| x-rdp-tenantId | Yes | Indicates the tenant identifier.|
| x-rdp-ownershipData | No | Indicates the data used for authorizing the ownership. |
| x-rdp-userName | No | Indicates the name of the user.|
| x-rdp-firstName | No | Indicates the first name of the user. |
| x-rdp-lastName | No | Indicates the last name of the user. |
| x-rdp-userEmail | No | Indicates the email of the user. |
| x-rdp-userRoles | Yes | Indicates a comma separated list of roles the user has. This is used for authorizing the data. |
{% endif %}