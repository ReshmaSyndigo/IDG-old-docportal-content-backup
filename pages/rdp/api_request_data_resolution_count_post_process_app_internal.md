---
title: Track Data Resolution Count Metrics in Post-Process App
sidebar: rdp_sidebar
permalink: api_request_data_resolution_count_post_process_app.html
folder: rdp
type: HowToAPI
---

**Post-Process** app allows you to track the metrics of **Data Resolution** count in the **appMetrics** nested attribute. This app tracks the metrics of Reference, UOM, and Path attributes resolution count. To track this metrics operation, a request object is generated for the post-process service and in the API response, you can view the details in the "appMetrics" nested attribute.

{% include callout.html content="**Note**: In the **Post-Process** app, the BR added attribute gets resolved for **Reference**, **UOM**, and **Path attributes**. Therefore the data resolution count is applicable only for BR added attributes. 
" type="primary" %}

##### Prerequisites 

* **Reference Entity**

Consider that a reference entity "Red" is present in the system with the values in 4 locales. A post-process BR is triggered for the SKU entity to populate the value as "Red" for the "Color" attribute.  

* **Classification Entity**

Consider that a classification entity "Product Classification" is present in the system with the values in 3 locales. A post-process BR is triggered for the SKU entity to populate the value as "Shirts" for the "Path" attribute.

* **UOM Entity**

Consider that a UOM entity "bagwidth" is present in the system. A post-process BR is triggered for the SKU entity to populate the value as "20##m" for the "UOM" attribute.

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description | Example |
|----------|-----------|--------|-------------|---------------|
| dataResolution | refValRes | 4 | Indicates the count of the resolved reference attribute values, which are populated by the BR. | Consider that a Post-Process BR is triggered to populate the "Color" attribute value for the SKU entity. Once the BR updates the value as "red" for the color attribute in the SKU entity, then the data resolution is performed for the red color attribute value in all 4 locales. In this example, the count of resolved value is 4. |
| | refValCop | 3 | Indicates the number of reference values, which gets copied from the reference entity. | In the above example, the reference attribute value is resolved and the value gets copied to all respective 3 locales. Note that, for "color" reference attribute one value is added from BR and 3 values are copied from the reference entity in all the 3 locales. In this example, the count of the reference value copied is considered as 3. |
| | pathValRes | 3 | Indicates the count of the resolved classification attribute values, which are populated by the BR. | Consider that a post-process BR is triggered to populate the classification attribute value for the SKU entity. Once the BR updates the value as "shirts" for the "Product Classification" attribute in the SKU entity, then the data resolution is performed for the "Product Classification" attribute value in all the 3 locales. In this example, the count of resolved value is 3. |
| | pathValCop | 2 | Indicates the number of path attribute values, which gets copied from the classification entity. | In the above example, the classification entity is resolved and the value gets copied to all respective 2 locales. Note that, one value is added from BR and 2 values are copied from the classification entity in all the 2 locales. |
|  | uomValRes | 1 | Indicates the count of the resolved UOM attribute values, which are populated by the BR. | Consider that a post-process BR is triggered to populate the UOM attribute value for the SKU entity. Once the BR sets the value as "20##m" for the "UOM" attribute in the SKU entity, then the data resolution is performed for the "UOM" attribute value. In this example, the count of UOM resolved value is 1. |
| | invalidValue (invalidVal) | 1 | Indicates the invalid value count based on the Data type, Reference, UOM, and Path attributes values. | Consider that you wish to set the value for the "Color" attribute for the SKU entity, for which a Post-Process BR is triggered to populate the value as "Green". A BR is triggered to populate the value for the color attribute as "Green". But the "Green" attribute value is not present in the system. So the count of invalid value is considered as 1. Note that, the color reference attribute is not resolved as it contains an invalid value. |  
| | unmodAttrs | 1 | Indicates the count of attributes, which are not present in the SKU manage model. | Consider that you wish to set the attribute value for the SKU entity. If the particular attribute is not present in the entity manage model, then the attribute is considered as an unmodelled attribute. In this example, the count of the unmodelled attributes is considered as 1. | 
| | unmodRelAttrs | 1 | Indicates the count of relationship attributes, which are not present in the SKU manage model. | Consider that you wish to update the relationship attribute value for the SKU entity. If the particular relationship attribute is not present in the SKU manage model, then the relationship attribute is considered as an unmodelled relationship attribute. In this example, the count of the unmodelled relationship attributes is considered as 1. | 