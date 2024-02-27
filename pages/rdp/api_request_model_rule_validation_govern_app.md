---
title: Track Model Rule Validation Metrics in Govern App
sidebar: rdp_sidebar
permalink: api_request_model_rule_validation_govern_app.html
folder: rdp
type: HowToAPI
---

**Govern** app provides the ability to track the metrics of **Model Rule Validation microApp**. This "microApp" tracks the count of processed ARC (attributes/relationships/contexts), required attributes and relationships, and cardinality for which the model rule validation has been performed. The model rule validation considers the entity validation model, which has the properties such as precision, range, regexPattern, minLength, maxLength, and so on. The count is considered based on this model and entity data irrespective of the error is present or not in the govern entity. The **timeSpent** in the govern app for model rule validation is measured in milliseconds. In case of the nested attribute, the count of child attributes is also considered. 

{% include callout.html content="**Note**: The required attributes and relationship attributes count is dependent only on the **Entity Validation Model**. Whereas, processed ARC (attributes/relationships/contexts) count is dependent on both **Entity Validation Model** and entity data.
" type="primary" %}

The following is the sample JSON, which depicts the **SKU Validation Model**:

<a href="files/entimangeARCcount/sku-validation-model.json" download>sku-validation-model.json</a>

To track this metric operation, a request object is generated for the govern service with the details in the "appMetrics" nested attribute.

| microApp | Attribute | Sample Value | Description | Example |
|----------|-----------|--------|-------------|---------------|
| modelRuleValidation | procAttr | 1 | Indicates the number of attributes that are validated if they are present in the manage entity based on the properties defined in the entity validation model. | In Entity Validation model, if the precision value is defined as 2 for "Discount" attribute and this attribute is present in the SKU entity, then the count of processed attributes is considered as 1. |
| | procRelAttr | 2 | Indicates the number of relationship attributes that are validated if they are present in the manage entity based on the properties defined in the entity validation model. | In Entity Validation Model, "isprimary" and "assetsequence" are the relationship attributes. If these relationship attributes are present in the SKU entity, then the count of the relationship attribute is considered as 2. Note that, if any one of the  relationship attribute is not present in the SKU entity type but it is displayed in entity validation model, then it is not considered for the processed relationship attribute count. |
| | procCtx | self | Indicates the number of contexts that are validated by using model rule validation. | Consider that you wish to validate the "Discount" attribute in the "Self" and "Germany" context. If the attribute is present in "Entity Validation Model" (self context) and "Germany Validation Model" (primary context) for the SKU entity, then the count of processed contexts is considered as 2. |
| | cardinality | 1 | Indicates the number of relationships that are defined in the entity validation model. | Consider that a SKU entity is created and wish to link an image to the entity by creating "hasimages" relationship. In the entity validation model, if the cardinality minimum value is defined as 1 and maximum value as 10, then you can link up to 10 images to the SKU entity. In this case, the cardinality count is considered as 1 as you have defined the cardinality for only one relationship, which is "hasimages". |
| | reqAttr | 2 | Indicates the number of required attributes, which are set to "true" in the entity validation model. | In entity validation model, "brand", and "createdate" are required attributes and if these attributes are set to true, then the count of the required attributes is 2. | 
| | reqRelAttr | 1 | Indicates the number of required relationship attributes, which are set to "true" in the entity validation model. | In the entity Validation Model, if "isprimary" is a required relationship attribute and it is set to true, then the count of the required relationship attribute is considered as 1. | 





