---
title: Admin Service
sidebar: rdp_sidebar
permalink: api_adminservice.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

In Riversand Platform, certain services are to be deployed to use the system efficiently. These set of services are called **Adminservices** which is internal to Riversand Platform SDK. Adminservice consists of all the deployment related requirements. The deployment team must first deploy all the topologies followed by a new tenant on any client instance or on Riversand's cloud, based on the business requirement. After a new tenant is setup, you must deploy Seed data (Platform and Tenant data) and later deploy extension artifact, if any. The admin service related process is depicted in the illustration below. 

{% picture adminservice-deploy-process.png alt="Admin Service Process" %}

This section describes how an [admin object is structured](api_admin_object_structure.html) in Riversand Platform. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Admin Object Structure](api_admin_object_structure.html) | {{site.data.rdp_glossary.deployplatformseed}} |
| [Deploy Topology](api_admin_deploy_topology.html) | {{site.data.rdp_glossary.deploytopology}} |
| [Deploy New Tenant](api_admin_deploy_tenant.html) | {{site.data.rdp_glossary.deploytenant}} |
| [Deploy Seed Data](api_admin_deploy_seed_data.html) | {{site.data.rdp_glossary.deployplatformseed}} |
| | {{site.data.rdp_glossary.deploytenantseed}} |
| [Deploy Artifact](api_admin_deploy_artifact.html) | {{site.data.rdp_glossary.deployartifact}} |
| [Deploy Tenant Seed Data through API](api_ci_cd_for_tenant_seed_data.html) | {{site.data.rdp_glossary.deploytenantseed}} |