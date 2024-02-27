---
title: Import from Custom Blob Container
sidebar: rdp_sidebar
permalink: api_imp_frm_cust_blob_conter.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform has a default container for entity imports. However, your business/integration flows might need to create different containers for different vendors to drop files (to maintain the privacy so that no one can see each other’s files and also there can be logic added to automatically identify the vendor based on the container the file was in). In such a situation, you must requests OPS for a new container, and specific SAS keys for this container and OPS creates such containers and shares the credentials via the OPS ticket. You will be charged by GB of storage used. It is recommended not to create multiple containers due to the proliferation of the keys and managing multiple containers will be difficult for you.

**To import from custom blob container:**

1. For a user who wants to create a new container for import, a new profile must be created in the tenant with the new container name.

{:start="2"}

2. Post creation of profile, a user has to request Riversand CPS team to create the container. 

{:start="3"}

3. After the successful creation of the container, Riversand OPS team will run the tenant enablement job with AppID as **rsintegration** to configure the event trigger (as before running the job, the import profile must exist in the tenant).

{% include callout.html content="**Notes:**
* For the existing customers, the system will read the file, and the event trigger will be configured as part of the build process.
* A user has to delete the schedular object before the Blob import. For more information, see [Delete a schedule object using Scheduler Service](api_sch_delete.html). Also, a user has to disable the schedular job. For more information, see [Enable/Disable Scheduled Jobs](api_enable_disable_list_scheduled_jobs.html).
" type="primary" %}
