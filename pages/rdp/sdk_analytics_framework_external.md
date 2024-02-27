---
title: About Riversand Anaytics facet (RAF)
sidebar: rdp_sidebar
permalink: sdk_analytics_framework.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

Riversand Anaytics Facet (RAF) is built to support efficient processing of incoming and outgoing data from and to Riversand Platform. The facet uses batch processor to analyze multiple/batch of data by uploading and downloading the data files into and from data stores (say, blob storage), that will trigger the batch process internally. The data file is a json file that contains entity records required for import and export process.

The batch processor is a multi-threaded, long-running application that can process large volumes of batch data. This processor completes tasks based on batch jobs, that can be created explicitly or implicitly. The batch processor manages the status of each batch job based on the related batch job actions.

The following picture depicts how Riversand Anaytics facet processes the master and non-master data and interacts with other RDP services:

{% picture RS-analytics-framework.png alt="Riversand Anaytics facet" %}

The above figure depicts the runtime environment for the Anaytics facet, in which:

* The processing engine within the Anaytics facet consumes the data.

* RDP services available for the app to process and provide data.