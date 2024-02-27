---
title: Seed Connect Profiles
sidebar: rdp_sidebar
permalink: api_profile_seed.html
type: Description
folder: rdp
---

{% include snippets/api_preview.md %}

**Riversand Platform** provides several OOTB system profiles for content onboarding and content distribution. The following lists a few key points to be noted:

* There is a seed profile configuration for every- Integration type (Import/Export), Standard data format, Channel and Task type (Sync/Task/Schedule) combinations.
* Every seed profile has a naming convention according to the following format: **sys_<<Integration Type>>\_<<Object Type>>\_<<Format>>\_<<Channel>>\_<<Task type>>\_base**
* Key data formats considered for seed profiles are RS JSON, RS Excel, and RS DSV.
* Key channels considered for seed profiles are Azure Eventhub, Azure BlobStorage. Kinesis and S3 profiles are considered tenant specific profiles.
* Any implementation team can choose to enrich a particular seed profile by creating a new (extension) profile with same profile context combination.
* There can only be one extension profile for a corresponding seed profile. Implementation teams must not have multiple extension profiles for a corresponding seed profile.
* The extension profile must adhere to seed profile naming convention but starting with customer code as best practice; though it is not enforced. But the custom profile should not have the same name as base profile or in other words it should not start with sys_ or end with _base. The custom profile must also follow the same naming convention. It is preferable to follow **<<customer>>\_<<Integration Type>>\_<<Object Type>>\_<<Format>>\_<<Channel>>\_<<Task type>>**.

## How Profile Merge works?

The following steps lists how profile merge works in Riversand Platform:

1. Take a copy of seed profile and rename the copied profile according to the following format - **<<customer>>\_<<Integration Type>>\_<<Object Type>>\_<<Format>>\_<<Channel>>\_<<Task type>>**.

{:start="2"}

2. Override profile with only the section as required. The following example illustrates a sample JSON with overriden section:

<pre><code>
{
  "metaInfo": {
    "dataIndex": "config",
    "collectionName": "configObjects",
    "responseObjectName": "response"
  },
  "configObjects": [
    {
      "id": "downloadDataExcelJob",
      "name": "downloadDataExcelJob",
      "type": "integrationprofile",
      "data": {
        "contexts": [
          {
            "context": {
              "app": "RSConnect",
              "service": "ENTITY_EXPORT",
              "channel": "JOB",
              "format": "Excel",
              "source": "internal",
              "role": "admin",
              "user": "system",
              "subtype": "User",
              "order": "10"
            },
            "jsonData": {
              "collect": {
                "format": {
                  "batchSize": 1
                },
                "filter": {
                  "include": {
                    "typesCriterion": {
                      "_ALL": {
                        "queryFields": {
                          "attributes": [
                            "aid",
                            "tbrandhierarchy"
                          ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      }
    }
  ]
}
</code></pre>

{:start="3"}

3. Riversand Platform merges the extension profile with the based profile at runtime. This enables the implementation team to specify changes to the profile settings without overriding the default profile.

{% include callout.html content="**Note:** The following list the tenant seed profiles that can be overriden:
* sys_export_data_excel_ui_task_base
* sys_export_data_excel_ui_sync_base
* sys_import_data_excel_ui_task_base
* sys_import_data-variants_json_ui_task_base
* sys_export_data_dsv_ui_sync_base
* sys_export_data_dsv_ui_task_base
* sys_export_data_genericobject-json_any_scheduled-task_base
* sys_export_data_json_any_task_base
* sys_export_data_json_eventhub_task_base
* sys_import_data_json_blob_task_base
* sys_import_data_json_eventhub_task_base
* sys_import_model_json_eventhub_task_base
* sys_export_data_json_blob_task
" type="primary" %}