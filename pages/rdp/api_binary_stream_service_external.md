---
title: Binary Stream Object Services
sidebar: rdp_sidebar
permalink: api_binary_stream_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to upload various assets such as documents, videos, and images to an external storage such as Amazon S3. Correspondingly, it also provides the ability to download the assets from external storage location. **Binary Stream Object Services** in Riversand Platform helps you to manage assets. Using this service, you can maintain metadata of the assets, upload and download assets to and from an external storage respectively. 

<br>
This section describes [how an binary stream object is structured](api_binary_stream_object_structure.html) in RDRiversand PlatformP. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Prepare Upload](api_prepare_upload.html) | {{site.data.rdp_glossary.prepareUpload}} |
| [Upload Continuous](api_upload_continuous.html) | {TenantURL or ID}/api/binarystreamobjectservice/uploadContinuous |
| [Prepare Download](api_prepare_download.html) | {{site.data.rdp_glossary.prepareDownload}} |
| [Create Binary Stream Object](api_create_binary_stream_object.html) | {{site.data.rdp_glossary.createbinarystream}} |
| [Update Binary Stream Object](api_update_binary_stream_scenario1.html) | {{site.data.rdp_glossary.updatebinarystream}} |
| [Get Binary Stream Object](api_get_binary_stream_object.html)| {{site.data.rdp_glossary.getbinarystream}} 
| [Delete Binary Stream Object](api_create_binary_stream_object.html) | {{site.data.rdp_glossary.deletebinarystream}} |

The following diagram illustrates a typical flow of how the APIs in **Binary Stream Object Service** are used to upload image assets to an external storage:

{% picture binary-stream-upload.png alt="Upload Assets" %}

The following diagram illustrates a typical flow of how the APIs in **Binary Stream Object Service** are used to download image assets from an external storage:

{% picture binary-stream-download.png alt="Download Assets" %}

{% include callout.html content="**Notes**: 
* The API allows you to upload and download only one asset at a time with a maximum file size of 5GB.
* The binary stream object information is a flush and fill process. This implies that if you wish to update a binary stream object, then you still use the create API to flush and fill the data.
* The media asset Id is generated for images only.
" type="primary" %}

### Best Practices

The following are the best practices:

* Binary stream API does not return the actual binaries but returns URL to upload and download the binaries.
* Binary stream API is used to download media assets as part of the downstream integration on single asset entity level.
* The same specified API is used by the UI to upload and down assets/files.
* The downloadContinuous and uploadContinuous version of the API allows you to reuse the URL with the replacement string of the Blob id.
* Follow the approach of uploading assets via Blob container or UI or public URL in the import file or EventHub for thumbnail images but not based on the binary stream services. 
**Note**: The URL’s expire in an hour.
* In general, for API integration that involves processing of single asset entities, it is encouraged to use the binary stream object API;  In use cases such as bulk import and/or export there are existing better alternatives it is better to use blob container.
