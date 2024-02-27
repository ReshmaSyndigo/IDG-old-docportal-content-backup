---
title: Get Metadata Details of Asset Thumbnail
sidebar: rdp_sidebar
permalink: api_get_metadata_asset_thumbnail.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

The application creates thumbnail for every asset during each import/update. The thumbnails are snapshot / preview of the original asset. These thumbnails are displayed in user-specified width and height. 

{% include callout.html content="**Notes**: 
* The image thumbnail is the miniature version of the original image. Upon clicking on the thumbnail, the image expands to the original view.
* The audio thumbnail is represented in media player format. Upon clicking on the thumbnail, the audio file is loaded and the media player starts playing in the defined format.
* The video thumbnail displays a still image of the video. Upon clicking on the thumbnail, the video file is loaded and plays in the defined format.
* The document thumbnail displays the first page in an image format. Upon clicking on the thumbnail, the document is loaded in the defined format. 
" type="primary" %}

You can get the following metadata details
:
* [Get Metadata Details of Image Thumbnail](api_get_metadata_image_thumbnail.html)
* [Get Metadata Details of Audio Thumbnail](api_get_metadata_audio_thumbnail.html)
* [Get Metadata Details of Document Thumbnail](api_get_metadata_document_thumbnail.html)
* [Get Metadata Details of Video Thumbnail](api_get_metadata_video_thumbnail.html)