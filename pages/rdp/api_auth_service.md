---
title: Authentication Services
sidebar: rdp_sidebar
permalink: api_auth_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% if site.build != "ascend" %}
Riversand Platform provides the ability to authenticate the API requests through the Authentication Services. After successful authentication, the API client can perform the required operations as per the [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}.
{% endif %}

{% if site.build == "ascend" %}
Riversand Platform provides the ability to authenticate the API requests through the Authentication Services. After successful authentication, the API client can perform the required operations as per the **Authorization Model**.
{% endif %}

You can authenticate the API requests by passing the Client Key and Client Secret in the request header. This is a single step process where you can pass the Client Key and Client Secret in request headers as a Key-Value pair. You can pass the Client Key as "auth-client-id" and Client Secret as "auth-client-secret" in the headers for all operations of API requests. The following diagram depicts the steps required by an API client to perform API authentication using this approach:

{% picture AuthenticationService2.png alt="API Authentication using Client ID and Client Secret" %}

This approach has the following advantages and hence is a preferred approach to perform authentication:

* You can use the same Client Id and Client Secret Key in the request headers even if authentication token expires.

* Avoids unauthorized access as every environment has a unique Client Id and Client Secret Key that restricts the access to only that specific environment. Consider an example, if tenant Id "rdw" and environment purpose "dev" is added for a given client "testId" in auth0, then auth server authenticates and proceeds with the request. If environment purpose "prod" in pod config and the same client "testId" that is restricted for "dev" environment in auth0 is used, then the request is not authenticated. This implies that if you are trying to access "prod" instance with client "testId", the request is rejected by auth server. Environment purpose that is present in dataplatform pod config and the Environment scopes that are present in Auth0 must match.

This section details out the steps required by an API client to perform authentication: 
* [Before you Begin](api_auth_conf.html): Describes all the prerequisites and set-up required before using API authentication.
* [Understanding Request Headers](api_understand_req_header.html): Describes the various parameters in the API request headers.
* [Sending API Request](api_sample_request_responses.html): Describes few examples to show how to send API requests with appropriate headers for authentication and the corresponding responses received.