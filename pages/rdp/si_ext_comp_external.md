---
title: Key Components
sidebar: rdp_sidebar
permalink: si_ext_comp.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

[Profile](#profile-configuration) and [Artifact](#artifact-configuration-file) configurations form the key components of **Riversand Connector Facet Extension**.

## Profile Configuration

**Profiles** are configuration objects that defines the connectivity and transformation parameters between the source and target systems. It contains the configuration details for extract, transform, and publish components. The configurations are defined in three segments:
  
* **Collect (Extract)**: Define how inbound batches of records are split and data is read from the source.
* **Transform**: Defines how inbound records are transformed into outbound records.
* **Publish (Load)**: Defines how outbound records are batched and data is written to the target.

<br/>

The following illustration depicts the building blocks of the **Profile** object:

{% picture si-profile.png alt="Profile Blocks" %}

See [Understand Profile](si_coa_comp.html), for more information on each component of profile configuration object.

## Artifact Configuration File

Artifact configurations are used to map the channel/format from the connector profile with their respective classes. This configuration allows the platform to find the respective jar, the class when an import/export operation is called. For a given service/channel, you can upload many jar files, but each jar file is tied to a single artifact configuration file.

<!-- The **rsConnect** service contains configuration details specific to **Connector facet**. The **components** section in the **rsConnect** service contains details about the extractor, transform, and loader components. If you wish to create a new extension, then the details of the **jar** file corresponding to the **classname** must be included in each of these sections.   -->
See [Create Custom Extension](si_ext_create_custom.html), to understand more on how to create custom extensions.