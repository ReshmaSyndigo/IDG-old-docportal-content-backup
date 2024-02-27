---
title: Understand Business Flow
sidebar: rdp_sidebar
permalink: si_ext_how_business.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

**Connector facet** offers standard JSON and Excel format as out-of-the-box support. If your wish to import or export data other than the formats supported in the standard offering, then you must "extend" OOTB feature. The following lists some of the common use business scenarios:

## Unsupported File Format

Consider a scenario, where the data provided by the export service (such as JSON) is not understood by the downstream system, as the downstream system are using a different format such as CSV or Text. In such cases, you can "extend" Connector facet:

{% picture si-file-format.png alt="File Format" %}

## Insufficient Information in Supported File

Consider a scenario, where the data provided by the export service (such as JSON) is understood by the downstream system, but it is not sufficient. The downstream system might require some extra information, which is not provided for managing the downstream system's entire data in their system. In such cases, you can "extend" Connector facet:

{% picture si-insufficient-info.png alt="Insufficient Information" %}

## Integration Partners/Layer

Consider a scenario, where a 3rd party system is interfacing between Riversand Platform and downstream system. The 3rd party system is receiving the data from Riversand Platform's export service, reading the data, extracting the data, and channeling the exported data into a format that is understood by the downstream system and there-by manages the downstream system's entire data. At this point, being a 3rd party vendor, you can "extend" Connector facet for defining the appropriate format to receive the data from Riversand Platform that can be understood by the downstream system:

{% picture si-integration-info.png alt="Integration Partners/Layer" %}

## New Channel Integration

Consider a scenario, where the end customers want to publish their data to a new or different channel. In such cases, you can "extend" Connector facet to configure new channel/connector. 