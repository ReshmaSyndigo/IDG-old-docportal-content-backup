---
title: Map Asset Metadata Fields to Attributes
sidebar: rdp_sidebar
permalink: api_map_asset_metadata_fields.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A new mapping concept has been introduced where you can map the asset metadata fields with attributes. Mapping of assets with attributes is a process of associating equivalent metadata values or fields from one system with content in another system. 

By default, a set of asset metadata fields are mapped to the attributes in the seed load. The customer can override these default mappings and customize their asset metadata mappings and migrate their data. If any system consists of both default and customised mappings, the attribute values are displayed based on the customised mapping as they take precedence over the default mapping.

A sample mapping of customer asset metadata fields to attributes is as follows.

<pre>
<code>
{
  "configObject": {
    "id": "asset_metadata_attribute_mapping",
    "name": "asset",
    "type": "mediaAssetFieldMapping",
    "data": {
      "jsonData": {
        "metadataAttributeMapping": {
          "CreatorAddress": "address",
          "CreatorPostalCode": "postalcode",
          "Scene": "iptcscenecode",
          "CreatorWorkEmail": "emails",
          "CreatorWorkTelephone": "phoness",
          "CreatorWorkURL": "weburls",
          "State": "stateprovince",
          "Sub-location": "sublocation",
          "SubjectCode": "iptcsubjectcode"
        },
        "blacklistedMetadataFields": [
          "PreviewsSpreadsBasedata",
          "ThumbnailsSpreadsImage",
          "History",
          "DocumentAncestors",
          "Extracted-Stories_UTF8_Zlib_Base64"
        ]
      }
    }
  }
}
</code></pre> 

{% include callout.html content="**Note:** The **blacklistedMetadataFields** property ignores the metadata fields that are listed under this property. You can add or remove the metadata fields based on your business requirement.
" type="primary" %}


