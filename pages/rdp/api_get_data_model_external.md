---
title: Get Data Model
sidebar: rdp_sidebar
permalink: api_get_data_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get data model:

{% if site.build == "internal" %}
* [Get All Models in the Tenant](api_get_data_model_scenario2.html)
* [Get all Domains](api_get_data_model_scenario11.html)
* [Get all Entity Types of a Domain](api_get_data_model_scenario7.html)
* [Get all Authorization Models](api_get_data_model_scenario12.html)
* [Get all Users](api_get_data_model_scenario8.html)
* [Get Model using Model Type and Id](api_get_data_model_scenario1.html)
* [Get Reference Domain Data Model](api_get_entityType_data_model.html)
* [Get Nearest Entity Variant Model](api_get_nearest_data_model_scenario1.html)
{% endif %}

{% if site.build == "external" %}
* [Get All Models in the Tenant](api_get_data_model_scenario2.html)
* [Get all Entity Types of a Domain](api_get_data_model_scenario7.html)
* [Get all Authorization Models](api_get_data_model_scenario12.html)
* [Get all Users](api_get_data_model_scenario8.html)
* [Get Model using Model Type and Id](api_get_data_model_scenario1.html)
* [Get Reference Domain Data Model](api_get_entityType_data_model.html)
{% endif %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getdatamodel}}

**Parameters**: The following table lists the parameters of the JSON request to get data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params  | query | Yes | Indicates the search criteria for getting a data model. |
| query | id  | No | Indicates entity model unique identifier. |
| query | name  | No | Indicates entity model name. |
| query | contexts  | No | Indicates an array of lists |
| query | contexts -> list | No | Indicates where the entity model belongs to. |
| query | contexts -> country | No | Indicates the country the current entity model is linked to. |
| query | contexts -> channel | No | Indicates the channel the current entity is linked to.|
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> attributesCriterion -> <<AttrName>> | No | Indicates the name of the attribute. |
| query | filters -> attributesCriterion -> <<AttrName>> -> <<Operator>> : <<AttrValue>> | No | Indicates the type of operator to be used for comparing the AttrValue. Possible values - "eq" (equal to), "gte" (greater than or equal to), and "lte" (less than or equal to). |
| query | filters -> relationshipsCriterion | No | Indicates an array of relationships names and attribute values that are used to filter the results. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> | No | Indicates the name of the relationship. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> -> attributes| No | Indicates an array of relationship attributes. You can use the same filter criteria as applicable for attributes.|
| query | filters -> typesCriterion | No | Indicates a comma separated list of entity types. |
| query | keywordsCriterion -> keywords | No | Indicates the keywords to be used to filter the results.|
| query | keywordsCriterion -> operator | No | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND"|
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| fields | fields -> relationships | No | Indicates the relationships to be returned in the result. |
| fields | fields -> relationshipAttributes | No | Indicates a comma separated list of relationship attribute to be returned in the result. |
| sort | sort -> attributes | No | Indicates an array of attributes that is used to sort the results. Results are sorted based on the order specified. |
| sort | sort -> attributes -> <<AttrName>> : <<SortOrder>> | Yes | Indicates attribute and the sort order. Possible values are _DESC and _ASC. |
| sort | sort -> attributes -> sortType  | No | Indicates the sort type such as "_DATETIME", "_DECIMAL", or "_INTEGER". If sort type is not specified, then records are sorted using "string" type. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000.|

{% include callout.html content="**Notes**: 
* **_ALL** keyword can be substituted for individual records. Example: In typesCriterion, you can specify ALL or specific model type. 
* **_ALL** in the attributesCriterion or relationshipsCriterion fields implies all attributes or relationships that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

{% if site.build == "internal" %}
| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entityModels | List of entity model objects that matched the search criteria. See [Data Model Object Structure](api_data_model_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response| statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |
| response | totalRecords | List of binary stream objects that matched the search criteria.|
{% endif %}

{% if site.build == "external" %}
| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entityModels | List of entity model objects that matched the search criteria. |
| response| status | Indicates if the request is submitted successfully or not. |
| response| statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |
| response | totalRecords | List of binary stream objects that matched the search criteria.|
{% endif %}

{% include callout.html content="**Notes**: If you do not specify any attributes or relationships in fields, then only basic entity information such as entity Id and entity type are returned in the response. 
" type="primary" %}

## Example

The following example demonstrates a sample request and response manage model for "sku" entity type.

<pre><code>
POST **{{site.data.rdp_glossary.getdatamodel}}**
Headers: Content-Type: application/json
Body:
{ 
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "params": {
    "query": {
      "id": "sku_entityManageModel",
      "filters" : {
        "typesCriterion": [
        "entityManageModel"
        ]
      }
    },
    "fields" : {
      "attributes" : ["_ALL"],
      "relationships": ["_ALL"]
    }
  }
}
</code></pre> 

**Response**: 
<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "b444b974-0309-4f8f-af3e-592145647376"
  },
  "response": {
    "entityModels": [
      {
        "id": "sku_entityManageModel",
        "name": "sku",
        "type": "entityManageModel",
        "domain": "generic",
        "properties": {
          "createdService": "entityManageModelService",
          "createdBy": "testinfodev@riversand.com",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "testinfodev@riversand.com",
          "createdDate": "2018-10-18T06:03:02.793-0500",
          "modifiedDate": "2018-10-18T06:03:02.793-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "properties": {
                "externalName": "MDM ID",
                "groupName": "Basic",
                "isEntityIdentifier": true,
                "dataType": "string"
              }
            },
            "mdmname": {
              "properties": {
                "externalName": "SKU Name",
                "groupName": "Basic",
                "isExternalName": true,
                "dataType": "string"
              }
            },
            "productfeatures": {
              "properties": {
                "externalName": "Product Features",
                "groupName": "Basic",
                "dataType": "string",
                "isLocalizable": true
              }
            },
            "headline": {
              "properties": {
                "externalName": "Headline",
                "groupName": "Basic",
                "dataType": "string",
                "isLocalizable": true
              }
            },
            "featurespecs": {
              "properties": {
                "externalName": "Feature Specs",
                "groupName": "Basic",
                "dataType": "string",
                "isLocalizable": true
              }
            },
            "leadtime": {
              "properties": {
                "externalName": "Lead Time",
                "groupName": "Basic",
                "dataType": "integer",
                "uomEntityInfo": [
                  {
                    "uomRelationshipName": "hasUnits",
                    "uomEntityType": "Time"
                  }
                ]
              }
            },
            "buytodemand": {
              "properties": {
                "externalName": "Buy to Demand",
                "groupName": "Basic",
                "dataType": "boolean"
              }
            },
            "cost": {
              "properties": {
                "externalName": "Vendor Cost",
                "groupName": "Pricing",
                "dataType": "decimal"
              }
            },
            "msrp": {
              "properties": {
                "externalName": "MSRP",
                "groupName": "Pricing",
                "dataType": "decimal"
              }
            },
            "size": {
              "properties": {
                "externalName": "Size",
                "groupName": "Basic",
                "dataType": "string",
                "isReferenceType": true,
                "referenceEntityInfo": [
                  {
                    "refRelationshipName": "hasReferenceTo",
                    "refEntityType": "sizes"
                  }
                ],
                "valueMappingContext": [
                  "[Role]",
                  "[User Id]"
                ],
                "supportsValueMapping": true,
                "valueMappingTypeName": "sizevaluemapping"
              }
            },
            "uom": {
              "properties": {
                "externalName": "Unit of Measure",
                "groupName": "Item Details",
                "dataType": "string"
              }
            },
            "alternatevendor": {
              "group": [
                {
                  "vendorpartnumber": {
                    "properties": {
                      "externalName": "Part Number",
                      "groupName": "alternatevendor",
                      "dataType": "string"
                    }
                  },
                  "vendorid": {
                    "properties": {
                      "externalName": "Vendor ID",
                      "groupName": "alternatevendor",
                      "isAttributeIdentifier": true,
                      "dataType": "string"
                    }
                  },
                  "vendorcost": {
                    "properties": {
                      "externalName": "Vendor Price",
                      "groupName": "alternatevendor",
                      "dataType": "decimal"
                    }
                  },
                  "vendorname": {
                    "properties": {
                      "externalName": "Vendor Name",
                      "groupName": "alternatevendor",
                      "dataType": "string"
                    }
                  },
                  "id": "5e624167-afc7-482e-af77-69ddadf584b5"
                }
              ],
              "properties": {
                "externalName": "Alternate Vendors",
                "groupName": "Internal Information",
                "dataType": "nested"
              }
            },
            "productclassification": {
              "properties": {
                "externalName": "Product classification",
                "dataType": "string",
                "groupName": "Enhancer Attributes",
                "displayType": "path",
                "isCollection": true,
                "pathEntityInfo": [
                  {
                    "pathRelationshipName": "belongsTo",
                    "pathEntityType": "classification",
                    "rootNode": "productclassificationroot",
                    "pathSeperator": ">>"
                  }
                ]
              }
            },
            "categorymanager": {
              "properties": {
                "externalName": "Category Manager",
                "groupName": "Item Details",
                "dataType": "string"
              }
            },
            "itemtype": {
              "properties": {
                "externalName": "Item Type",
                "dataType": "string",
                "groupName": "Enhancer Attributes",
                "isReferenceType": true,
                "displayType": "referencelist",
                "referenceEntityInfo": [
                  {
                    "refRelationshipName": "hasReferenceTo",
                    "refEntityType": "itemtype"
                  }
                ]
              }
            },
            "test": {
              "properties": {
                "externalName": "test in sku model",
                "groupName": "Apparel & Footwear",
                "dataType": "string"
              }
            }
          },
          "relationships": {
            "ischildof": [
              {
                "attributes": {
                  "linkdescription": {
                    "properties": {
                      "externalName": "Link Description",
                      "groupName": "Relationship Attributes",
                      "dataType": "string",
                      "isLocalizable": true
                    }
                  }
                },
                "id": "ischildof",
                "properties": {
                  "externalName": "Child of",
                  "relationshipType": "Composition",
                  "relationshipOwnership": "owned",
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "product"
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code>
</pre> 

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.