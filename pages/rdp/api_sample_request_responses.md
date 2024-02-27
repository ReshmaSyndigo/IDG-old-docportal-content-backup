---
title: Sending API Request
sidebar: rdp_sidebar
permalink: api_sample_request_responses.html
folder: rdp
type: HowToAPI
---

This topic describes how to send an API request for authentication in RDP, using an example. It assumes that you already have set-up all the pre-requisites as required before using the API. See [Before you Begin](api_auth_conf.html), for more information.

## Scenario

Consider that you wish to authenticate the request while creating a new entity using RDP API **{{site.data.rdp_glossary.appcreateentity}}**.

## Request

The header details you send using Client ID and Client Secret for authenticating the API request:

* Use https and send the API request {{site.data.rdp_glossary.createentity}}. As explained in [Authentication Services](api_auth_service.html), you can send the Client ID 'auth-client-id' and Client Secret 'auth-client-secret' in the request header without generating the Bearer Token:
	* auth-client-id: Enter Client ID
    * auth-client-secret: Enter Client Secret
	* x-rdp-clientId: rdpClient
	* x-rdp-userId: admin1 (Note that this is the userId that you use to login to Riversand Platform)
	* x-rdp-tenantId: Enter the tenant identifier
	* x-rdp-userRoles: Enter the role that the user has or list of roles separated by a comma 

{% include callout.html content="**Note:** You must ensure the authorization field is empty when you use Client ID and Client Secret for Authentication. In your API request, under **Authorization**, provide **type** as **No Auth**.
" type="primary" %}
<br><br>

You can send other parameters in the request header for further authorization. The clientId, userId, OR Client ID, Client Secret are mandatory parameters for authenticating the request. See [Understanding the Request Headers](api_understand_req_header.html), for other additional parameters that can be passed in the request header.

## Response

If the request is authenticated successfully, then the RDP sends a standard response for API request with 200 (OK).

If the request is not authenticated successfully, then the RDP sends an response with appropriate error code and message.