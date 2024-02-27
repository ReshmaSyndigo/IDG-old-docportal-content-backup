---
title: Get Started
sidebar: rdp_sidebar
permalink: si_ext_get_started.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

Connector facet provides **Content Onboarding and Content Distribution** services to upload and download data to and from Riversand Platform respectively. Broadly, these services follow a three-step **Extract-Transform-Load (ETL)** process to onboard or distribute data. Example: During import, the data is extracted or collected from the source systems through different channels, transformed into a format that Riversand Platform supports and then loaded or published to the target systems. The primary component that contains all these details is a **Profile** object.

**Profiles** contains the configuration details for extract, transform, and publish components. The following illustration depicts the building blocks of the **Profile** object:

{% picture si-profile.png alt="Profile Blocks" %}

**Connector Facet** provides the ability to **extend or augment** extract, transform, and publish components by customizing the default behavior. **rsConnect** supports **JSON**, **Excel** and **DSV** as out-of-the-box formats. You can further extend **Connector facet** to support any other custom formats such as XML, based on the business requirement.

Before you get started with custom extension implementation, the following topics helps you to understand more about the functionality:

* [Key Components](si_ext_comp.html): Understand the basic building blocks of key components required for extension.

* [Understand Business Flow](si_ext_how_business.html): Understand the business flow of when and how to use the Extension feature.

* [Understand Technical Aspects](si_ext_how_technical.html): Understand the technical aspects of how to extend extract, transform, and publish components in Extension feature.

<br>

## Users of Connector Facet

The product implementation team, including Partners and Clients, who are responsible for the integrating Riversand Platform with the other downstream systems, will be the users of **Connector Facet**.