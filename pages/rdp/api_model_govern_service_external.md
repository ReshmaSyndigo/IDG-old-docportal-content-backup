---
title: Model Govern Services
sidebar: rdp_sidebar
permalink: api_model_govern_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Model Govern Services is provided to handle governance related functionalities for models. This service validates the rule definition of a given business rule and indicates the syntactical error or execution related error (as some keywords are not allowed for some rule types).

{% include callout.html content="**Note**: Currently, the validate API validates only **businessRule** object.
" type="primary" %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to validate data model:

* [Model Govern Validate](api_model_govern_validate.html)