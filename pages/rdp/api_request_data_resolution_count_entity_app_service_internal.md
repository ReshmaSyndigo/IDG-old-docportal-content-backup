---
title: Track Data Resolution Count Metrics in Entity App Service  
sidebar: rdp_sidebar
permalink: api_request_data_resolution_count_entity_app_service.html
folder: rdp
type: HowToAPI
---

**Entity App Service** allows you to track the metrics of **Data Resolution** count in the **appMetrics** nested attribute. This app tracks the metrics of Reference, UOM, and Path attributes resolution count. To track this metrics operation, a request object is generated for the **Entity App Service** and in the API response, you can view the details in the "appMetrics" nested attribute.

##### Prerequisites 

* **Reference Entity**

Consider that a reference entity "Red" is present in the system with the values in 4 locales. An API is triggered for the SKU entity to populate the value as "Red" for the "Color" attribute.  

* **Classification Entity**

Consider that a classification entity "Product Classification" is present in the system with the values in 3 locales. An API is triggered for the SKU entity to populate the value as "Shirts" for the "Path" attribute.

* **UOM Entity**

Consider that a UOM entity "bagwidth" is present in the system. An API is triggered for the SKU entity to populate the value as "20##m" for the "UOM" attribute.

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description | Example | 
|----------|-----------|--------|-------------|---------------|
| dataResolution | referenceValueResolved (refValRes) | 4 | Indicates the number of resolved reference attribute values. | Consider that a SKU entity is created and you wish to send the request to **Entity App Service** to update the attribute value, an API is triggered to populate the "Color" attribute value. Once the API updates the value as "red" for the color attribute in the SKU entity, then the data resolution is performed for the red color attribute value in all 4 locales. In this example, the count of resolved value is 4. |
| | referenceValueCopied (refValCop) | 3 | Indicates the number of reference values, which gets copied from the reference entity. | In the above example, the reference attribute value is resolved and the value gets copied to all respective 3 locales. Note that, for "color" reference attribute one value is added from UI and 3 values are copied from the reference entity in all the 3 locales. | 
| | pathValueResolved (pathValRes) | 3 | Indicates the count of the resolved classification attribute values. | Consider that a SKU entity is created and you wish to send the request to the **Entity App Service** to update the attribute value, an API is triggered to populate the classification attribute value. Once the API updates the value as "shirts" for the "Product Classification" attribute in the SKU entity, then the data resolution is performed for the "Product Classification" attribute value in all the 3 locales. In this example, the count of resolved value is 3. |
| | pathValueCopied (pathValCop) | 2 | Indicates the number of path attribute values, which gets copied from the classification entity. | In the above example, the classification entity is resolved and the value gets copied to all respective 2 locales. Note that, one value is added from API and 2 values are copied from the classification entity in all the 2 locales. |
|  | uomValueResolved (uomValRes) | 1 | Indicates the number of resolved UOM attribute values. | Consider that a SKU entity is created and you wish to send the request to the **Entity App Service** to set the attribute value, an API is triggered to populate the UOM attribute value. Once the API sets the value as "20##m" for the "UOM" attribute in the SKU entity, then the data resolution is performed for the "UOM" attribute value. In this example, the count of UOM resolved value is 1. |
| | invalidValue (invalidVal) | 2 | Indicates the invalid value count based on Data type, Reference, UOM, and Path attributes values. Note that, in entity request object, the invalid value count for data type is considered based on the values provided by the User. | Consider that a SKU entity is created and you wish to send the request to the **Entity App Service** to update the "Discount" attribute as "Hello". In this case, the value of the "Discount" attribute is a string, which is invalid. So the count of the invalid value is considered as 1. |  
| | unmodelledAttributes (unmodAttrs) | 1 | Indicates the number of attributes, which are not present in the entity type manage model. For example, SKU manage model. | Consider that you wish to send the request to the **Entity App Service** to set the attribute value for the SKU entity. If the particular attribute is not present in the SKU manage model, then the attribute is considered as an unmodelled attribute. In this example, the count of the unmodelled attributes is considered as 1. | 
| | unmodelledRelationshipAttributes (unmodRelAttrs) | 1 | Indicates the count of relationship attributes, which are not present in the entity type manage model. For example, SKU manage model. | Consider that you wish to send the request to **Entity App Service** to update the relationship attribute value for the SKU entity. If the particular relationship attribute is not present in the SKU manage model, then the relationship attribute is considered as an unmodelled relationship attribute. In this example, the count of the unmodelled relationship attributes is considered as 1. | 
