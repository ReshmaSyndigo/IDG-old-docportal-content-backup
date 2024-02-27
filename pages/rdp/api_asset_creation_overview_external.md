---
title: Overview of Asset Creation
sidebar: rdp_sidebar
permalink: api_asset_creation_overview.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

**Riversand Digital Asset Management** uses **Asset Services**, {% if site.build == "internal" %}[Binary Stream Object Services](api_binary_stream_service.html),{% endif %} and [Entity App Services](api_app_service.html) to perform asset related operations. The following diagram illustrates how an asset entity is created in Riversand Platform:

{% picture assetcreation.png alt="Creation of Asset in Riversand Platform" %}

## Pre-Requisites

The following steps indicate the pre-requisites to create an asset entity:

1. Create a configuration specifying the required rendition details of the asset.
2. Create a match configuration to merge an asset in case the asset has duplicate attribute values. {% if site.build == "internal" %} See [create match configuration](api_create_config_scenario2.html) for more information.{% endif %}

## Creation of Asset Entity

The following steps indicate how an asset entity is created:

1. Upload the asset through Quick Actions -> Upload Assets. 
2. Riversand Platform invokes *prepareUpload* API of Binary Stream Object Service that returns the URL of the asset.{% if site.build == "internal" %} See [prepare upload](api_prepare_upload.html) for more information.{% endif %}
3. The asset is uploaded to external storage using upload URL obtained from prepareUpload API. 
4. Once the asset is present in external storage, *Create Binary Stream Object* API is triggered to alert Riversand Platform that the user uploads an asset. {% if site.build == "internal" %} See [Create Binary Stream Object](api_create_binary_stream_object.html) for more information.{% endif %}
5. Riversand Platform in turn notifies RS-DAM that the user has uploaded an asset. 
6. RS-DAM triggers the *prepareDownload* API to obtain the asset information.{% if site.build == "internal" %} See [prepare download](api_prepare_download.html) for more information.{% endif %}
7. RS-DAM obtains metadata of the asset using external tools. 
Details of an asset such as height, width are refferred to as **Metadata**.
8. Based on the type of configuration created by the user, RS-DAM invokes the *get configuration* API to obtain rendition and thumbnail details. See [get configuration](api_get_configuration.html) for more information:
* A **Rendition** is a copy of an original asset with different dimensions.
* A **Thumbnail** is a smaller version of a much larger image used to help conserve screen space and help enable a user to view multiple images at once.
9. RS-DAM creates thumbnails for the corresponding asset. RS-DAM invokes the *Create Binary Object* API to store the thumbnails. {% if site.build == "internal" %}{% endif %}
10. Similarly, RS-DAM creates renditions for the corresponding asset. RS-DAM invokes the *prepare upload* API to store the thumbnails. {% if site.build == "internal" %} See [prepareUpload](api_prepare_upload.html) for more information.{% endif %}
11. The asset entity is created using various attributes such as renditions, thumbnail and metadata. While creating an asset entity, each attribute of the asset is encoded for security reasons. 
12. RS-DAM invokes the *process* API of entityappservice to merge the assets if it finds a match. See [process an entity](api_app_process_entity.html) for more information.

{% include callout.html content="**Note:** The above procedure is used only for an asset of type image. For an asset of type audio, video and document default thumbnails are used.
" type="primary" %}