---
title: Import Data using Multi-Blob Container
sidebar: rdp_sidebar
permalink: api_imp_multi_blob.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to import data to the respective blob container. When the huge data is imported into the container, the batch jobs are created to process each file. This reduces the performance of the system as it takes more time for processing all the files that are dropped in the blob container. 

To avoid this, "rsintegration-system" container is introduced to reduce the processing time of the imported data and improve the performance of the system. The "rsintegration-system" acts like a multi-blob container that imports and processes huge data into the system.

## Best Practices

It is recommended to import consolidated data to the "rsintegration-system" container, which processes the data faster compared to the other blob containers. Note that, there is no change in the current import process. 

{% include callout.html content="**Note**: The maximum file size supported per record is 250 MB during blob import. The system rejects the data if the file size exceeds 250 MB.
" type="primary" %}
