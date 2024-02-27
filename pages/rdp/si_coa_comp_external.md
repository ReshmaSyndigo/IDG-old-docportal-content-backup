---
title: Understand Profile
sidebar: rdp_sidebar
permalink: si_coa_comp.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

**Data Onboarding and Distribution** services allows you to upload and download data to and from Riversand Platform respectively. The data must be collected or published through different channels. The data can be in different formats such as Excel that also requires transformation. The primary component that contains all these details is a **Profile** object.

## Profile

Profiles are configuration objects that defines the connectivity and transformation parameters between the source and target systems. The configurations are defined in three segments:
* [Collect](#collect): Define how inbound batches of records are split and data is read from the source.
* [Transform](#transform): Defines how inbound records are transformed into outbound records.
* [Publish](#publish): Defines how outbound records are batched and data is written to the destination.


The following illustration depicts the building blocks of the **Profile** object:

{% picture si-profile.png alt="Profile Blocks" %}

The following illustration depicts the data flow of each building blocks in **Content Onboarding and Content Distribution** Services:

{% picture si-profile-blocks.png alt="Profile Blocks" %}


<!-- See [Entity Import Services](api_imp_entity_service.html) and [Entity Export Services](api_exp_entity_service.html), for more information on Import and Export Services. -->

### Collect

Collect is the service responsible for collecting data from the source. When the source is an external system, the system is performing content onboarding (or import). When the source is Riversand Data Platform, the system is performing content distribution (or export). 

In order to collect data from source, the following aspects must be defined:

* **Channel**: Defines movement of data from source end-point to a temporary data store. Example: File folder, HTTP connector, Amazon S3 bucket.
* **Format**: Defines the format of the data expected from the source end-point. Example: JSON, Excel, text.
* **Filter**: Defines the types of entities, attributes, relationships expected from the source end-point. 

### Transform

Transform is the service responsible for transforming the data from source end-point format to the format specified by the target end-point. During exports, it transforms the data from Riversand JSON format (the standard manner to store data in Riversand Platform to the target end-point format, such as Excel, XML, text. During imports, it transforms the data from the source end-point format (such as Excel, XML, text) to the Riversand JSON format (the format in which data is persisted in Riversand Platform).

The following settings are used to perform the transform logic:

* **Field Mapping** Settings between source and destination fields.
* **Strategies** to perform the mapping.
* Any manual **overrides** to the default strategy.

### Publish

Publish is the service responsible for sending data to the target. When the target is Riversand Data Platform, the system is performing content onboarding (or import). When the source is an external system, the system is performing content distribution (or export).

In order to publish data to the target, the following aspects must be defined: 

* **Channel**: Defines movement of data from the temporary data store (where the data has been transformed based on the target specifications) to the target end-point. Example: File folder, HTTP connector, Amazon S3 bucket.
* **Format**: Defines the format of the data expected by the target end-point. Example: JSON, Excel, text.
* **Filter**: Defines the types of entities, attributes, relationships that needs to be published to the target end-point.

<!-- ## Out-of-the-box System Profiles

The following lists the OOTB system profiles supported in Riversand Platform:

* RS Smart Excel Upload
* RS Smart Excel Download
* RS JSON Upload
* RS JSON Download 
* Data Model Upload
* Data Model Download -->