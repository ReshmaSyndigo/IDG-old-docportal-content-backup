---
title: Update Profile Details for Extensions
sidebar: rdp_sidebar
permalink: si_ext_update_profile.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

The last step in creating a custom extension is to configure the profile with the details of the extensions that must be used for importing or exporting data. Based on the details in the profile, the corresponding formats are used for extracting, transforming, and loading data. See [Understand Profile](si_coa_comp.html), for more information on the profile object.

For more information on Import and Export Services, see [Entity Import Services](/{{site.data.rdp_links_version.SDK}}/api_imp_entity_service.html){:target="_blank"} and [Entity Export Services](/{{site.data.rdp_links_version.SDK}}/api_exp_entity_service.html){:target="_blank"}.

**To configure export profile**:

1. In the standard rsConnect JSON profile, update appropriate format, channel, and service name.

{:start="2"}

2. Update the following attributes in the profile:

| Attribute | Value |
|-----------|----------|
| format | Specify the format of the profile such as JSON and Excel.|
| channel | Specify the channel from where the profile gets data.|
| service name | Specify the operation "this" profile performs. The allowed values are ENTITY_EXPORT, MODEL_EXPORT, and MACRO_TEMPLATE.|

The following JSON demonstrates a sample publish export profile:

{% highlight json %}
{
  "clientState": {
    "notificationInfo": {
      "userId": "vendor@riversand.com"
    }
  },
  "params": {
    "query": {
      "contexts": [
        {
          "taxonomy": "Product Setup Taxonomy",
          "classification": "apparel>>mens>>shirts"
        }
      ],
      "id": "ejdw8nhbb0kpz",
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "rsconnect": {
      "profilecontexts": [
        {
          "service": "ENTITY_EXPORT",
          "channel": "UI",
          "format": "Excel",
          "source": "internal"
        }
      ]
    }
  }
}
{% endhighlight %}