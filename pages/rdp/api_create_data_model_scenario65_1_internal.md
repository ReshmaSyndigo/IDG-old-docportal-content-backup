---
title: "Set Read and Write Permissions for multiple Roles in different locales"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario65_1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to set read and write permissions for multiple roles in the same locale or different locales in the following scenarios:

* [Setting Read and Write Permissions in same Locale](#setting-read-and-write-permissions-in-same-locale)
* [Setting Read and Write Permissions in different Locales](#setting-read-and-write-permissions-in-different-locales)

{% include callout.html content="**Note:** If the Locale Auth Model is not defined or if none of the read and write permissions are set, then the result is false. This implies that there is no permission for the user to perform any activity in that particular locale. If read or write value is set to true in any of the roles, then the result is treated as true that implies the user has the required read or write permissions.
" type="primary" %}

## Setting Read and Write Permissions in same locale

Consider a scenario where you have created four roles **Vendor**, **Buyer**, **Enricher** and **Approver** in en-US locale. You have set Read and Write permissions as per the following table for the four defined roles in same locale (**en-US**):

| en-US Locale Permissions | Vendor | Buyer | Enricher | Approver | Result |
|----------|-------------|------|---------|---------|----------|
| Read | True | No Locale Auth Model defined | No permission set | False | Only Vendor can read. |
| Write | True | No Locale Auth Model defined | No permission set | False | Only Vendor can read and write. |

See [Set Read Permission for Specific Role in Locale](api_create_data_model_scenario65.html), for a sample scenario.

## Setting Read and Write Permissions in different Locales

Consider a scenario where you have created four roles **Vendor**, **Buyer**, **Enricher** and **Approver** in fr-FR locale. In addition to the read and write permissions set in [en-US locale](#setting-read-and-write-permissions-in-same-locale), you have set Read and Write permissions for **fr-FR** locale as per the following table. In this scenario, you are mapped to Vendor role in en-US and Vendor role in fr-FR locales. 

| fr-FR Locale Permissions | Vendor | Buyer | Enricher | Approver | Result |
|----------|-------------|------|---------|---------|----------|
| Read | True | No Locale Auth Model defined | No permission set | False | Only Vendor can read in both en-US and fr-FR locales. |
| Write | True | No Locale Auth Model defined | No permission set | False | Only Vendor can read and write in both en-US and fr-FR locales. |

See [Set Read Permission for Specific Role in Locale](api_create_data_model_scenario65.html), for a sample scenario.

{% include callout.html content="**Note:** Consider a scenario where a user is mapped to Vendor role and Buyer role. Vendor role has Locale Auth Model in en-US locale and Buyer role has Locale Auth Model in fr-FR locale. Even though Buyer role does not have any permission set or model defined in en-US, the user still has permissions defined for Vendor role (where read and write is true) and can perform the required operations.
" type="primary" %}


