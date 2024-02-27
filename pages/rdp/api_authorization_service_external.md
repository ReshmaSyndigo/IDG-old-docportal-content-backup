---
title: Authorization Services
sidebar: rdp_sidebar
permalink: api_authorization_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

The Riversand Platform authorization model is based on Role Base Access Control (RBAC) and Attribute Based Access Control (ABAC) schemes. See [authorization in Riversand Platform](/{{site.data.rdp_links_version.ADM}}/sec_authorization.html). The roles define the set of permissions that are allowed against a entity or its contents (attributes, values, relationships and contexts). The mapping of a role to a set of permissions is defined by an authorization model. See [Authorization Object Structure](api_auth_object_structure.html) for more information.

As the authorization model is based on roles, in cases where the Riversand Platform role is not specified as part of SAML authentication, the authentication server computes the user roles based on the other claim data such as user name, email and other application metadata. This is explained in [Compute Role using Role Compute Policy](api_compute_role.html).

In Riversand Platform, a user can be mapped to multiple roles. To support this, whenever a user logins for the first time, 
user authorization models are auto generated based on the role level authorization models of the role(s) the user is mapped to. This is explained in [Compute Authorization Models](api_compute_auth_model.html).