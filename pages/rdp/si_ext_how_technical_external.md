---
title: Understand Technical Aspects
sidebar: rdp_sidebar
permalink: si_ext_how_technical.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

**Connector facet Extension** provides the ability to extend or augment extract, transform, and publish components by customizing the default behavior. The artifact specific configuration file contains the **jar** file for each data format. Artifact configurations are used to map the channel/format from the connector profile with their respective classes. This configuration allows the platform to find the respective jar, the class when a import/export operation is called. For a given service/channel, you can upload many jar files, but each jar file is tied to a single artifact configuration file. 

<!-- The **rsConnect** service contains configuration details specific to **Connector facet**. The **components** section in the **rsConnect** service contains details about the extractor, transform, and loader components. If you wish to create a new extension, then the details of the **jar** file corresponding to the **classname** must be included in each of these sections. -->

The following illustration depicts the steps to extend **Connector facet** for XML import:

{% picture si-ext-technical.png alt="Technical Aspects" %}