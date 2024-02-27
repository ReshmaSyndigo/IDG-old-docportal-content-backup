---
title: Before you Begin
sidebar: rdp_sidebar
permalink: api_auth_conf.html
folder: rdp
type: HowToAPI
---

Any client that requires API authentication must obtain a clientId, client secret key and enable API authentication in the configuration. This is a one time procedure and the responsibility of the implementation team to provide required details to the client or partners.

## Obtain clientId

The tenant requests a client id from Riversand. Riversand provides client id for the specified tenant and environment.

## Obtain client secret key

The tenant requests a client secret key from Riversand. Riversand provides client secret key for the specified tenant and environment.

## Login through Riversand MDM UI

The user must login at least once through the Riversand MDM UI. When the user logs in through the UI, Riversand Platform creates a user model object with the authenticated user roles. This is to make sure that the userId you specify in the [API request header](api_understand_req_header.html) is valid and exists in Riversand Platform. 