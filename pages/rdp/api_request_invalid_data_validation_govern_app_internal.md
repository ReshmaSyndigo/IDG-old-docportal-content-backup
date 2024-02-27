---
title: Track Invalid Data Validation Metrics in Govern App
sidebar: rdp_sidebar
permalink: api_request_invalid_data_validation_govern_app.html
folder: rdp
type: HowToAPI
---

**Govern** app provides the ability to track the metrics of **Invalid Data Validation microApp**. This microApp tracks the count of processed ARC (attributes/relationships/contexts) for which, invalid data validation has been performed. Attributes with and without invalid errors are considered for the count. The **timeSpent** in the govern app for invalid data validation is measured in milliseconds. Note that, the processed relationship (procRel) is not considered for the count, as the relationship cannot be invalid. In case of the nested attribute, the count of child attributes is also considered. 

For example, you have updated two attributes values such as "color" and "size" for SKU entity in the **Entity Manage** app. Consider that the "color" attribute consists of valid data and the "size" attribute consists of invalid data. When the same entity is sent to the **Govern** app, it validates both the attribute values irrespective of whether the attributes have valid or invalid data. In this example, the total number of **procAttr** count is 2.

Similarly, when the request is sent from the **Manage** to **Govern** app, the count of relationship attributes and contexts are indicated as Processed Relationship Attributes (procRelAttr) and Processed Contexts (procCtx) respectively.

{% include callout.html content="**Note**: All the incoming contexts will be counted in **procCtx** irrespective of whether they have attributes or relationship attributes.
" type="primary" %}


The following table depicts the metrics of the **Invalid Data Validation** in the **Govern** app:

| Processed ARC  | ARC (attributes/relationships/contexts) | ARC Count | 
|-----------|---------------------------------------------------------------------|-----------|
| Processed Attributes (procAttr) | createdate, color, featurespecs, enabled, genericnameofproduct(appeared in 2 rows of nested attribute), testattrname (country : America) | The total number of processed attributes count is 7 |
| Processed Relationship Attributes (procRelAttr) | isprimary, assetsequence | The total number of processed relationship attribute count is 2 |
| Processed Contexts (procCtx) | self, Germany, America | The total number of processed contexts count is 3 |
