---
title: Bulk Entity Object Structure for Process without using Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_process_object_structure_wout_query.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section describes the Bulk Entity Object Structure for the **"process" taskType**. It is a JSON structure detailing the fields to "create" or "update" the bulk entities. Broadly, the structure contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.
* [entities](#entities): Contains all the information about the entities that you wish to create or update.

This topic describes the Bulk Entity Object Structure using a sample scenario. 

## Scenario

{% if site.build == "internal" %}
Consider that you wish to create multiple "SKU" entities such as PoloMens Blue Shirt Large, PoloMens Blue Shirt Medium, and PoloMens Blue Shirt Small in the relationship "ischildof". The attribute values must be specified according to the rules defined in the [Validation Model](api_validation_model.html#attributes). You can refer to [Data Type Summary](api_data_type_summary.html) for the **value ranges**. The following example demonstrates the sample JSON format to create all these "SKU"s:
{% endif %}

{% if site.build == "external" %}
Consider that you wish to create multiple "SKU" entities such as PoloMens Blue Shirt Large, PoloMens Blue Shirt Medium, and PoloMens Blue Shirt Small in the relationship "ischildof". The attribute values must be specified according to the rules defined in the Validation Model. You can refer to [Data Type Summary](api_data_type_summary.html) for the **value ranges**. The following example demonstrates the sample JSON format to create all these "SKU"s:
{% endif %}

<pre><code>
{
  "params": {
    "taskType": "process",
    "operationType": "inboundService"
  },
  "entities": [
    {
      "id": "e001",
      "name": "Polo Mens Shirt",
      "type": "product",
      "data": {
        "attributes": {
          "mdmid": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "e001"
              }
            ]
          },
          "mdmname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "Polo mens shirt"
              }
            ]
          }
        }
      }
    },
    {
      "id": "PBM-001",
      "name": "PoloMens Blue Shirt Large",
      "type": "sku",
      "data": {
        "attributes": {
          "mdmid": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PBM-001"
              }
            ]
          },
          "mdmname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PoloMens Blue Shirt Large"
              }
            ]
          },
          "productid": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PBM-10001"
              }
            ]
          },
          "color": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "red"
              }
            ]
          },
          "cost": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": 69.33
              }
            ]
          },
          "size": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "L"
              }
            ]
          }
        },
        "relationships": {
          "ischildof": [
            {
              "id": "PBM-001",
              "relationshipType": "composition",
              "relTo": {
                "id": "e001",
                "type": "product"
              },
              "attributes": {
                "linkdescription": {
                  "values": [
                    {
                      "value": "Link description of self relationship ischildof",
                      "source": "internal",
                      "locale": "en-US"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": "PBM-002",
      "name": "PoloMens Blue Shirt Medium",
      "type": "sku",
      "data": {
        "attributes": {
          "mdmid": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PBM-002"
              }
            ]
          },
          "mdmname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PoloMens Blue Shirt Medium"
              }
            ]
          },
          "productid": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PMB-10002"
              }
            ]
          },
          "color": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "red"
              }
            ]
          },
          "cost": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": 68.33
              }
            ]
          },
          "size": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "L"
              }
            ]
          }
        },
        "relationships": {
          "ischildof": [
            {
              "id": "PBM-002",
              "relationshipType": "composition",
              "relTo": {
                "id": "e001",
                "type": "product"
              },
              "attributes": {
                "linkdescription": {
                  "values": [
                    {
                      "value": "Link description of self relationship ischildof",
                      "source": "internal",
                      "locale": "en-US"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": "PBM-003",
      "name": "PoloMens Blue Shirt Small",
      "type": "sku",
      "data": {
        "attributes": {
          "mdmid": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PBM-003"
              }
            ]
          },
          "mdmname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PoloMens Blue Shirt Small"
              }
            ]
          },
          "productid": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PMB-10003"
              }
            ]
          },
          "color": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "red"
              }
            ]
          },
          "cost": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": 68.33
              }
            ]
          },
          "size": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "L"
              }
            ]
          }
        },
        "relationships": {
          "ischildof": [
            {
              "id": "PBM-003",
              "relationshipType": "composition",
              "relTo": {
                "id": "e001",
                "type": "product"
              },
              "attributes": {
                "linkdescription": {
                  "values": [
                    {
                      "value": "Link description of self relationship ischildof",
                      "source": "internal",
                      "locale": "en-US"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  ]
}
</code></pre>

The following section describes the properties of the bulk object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [sample scenario](#scenario).

## Request Level Attributes

You can specify certain attributes such as hotline or migrate as applicable for the request:

{% if site.build == "internal" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| hotline | Indicates if this request must be prioritized, so that the tasks complete faster. It is recommended to use hotline sparingly and only if required. | String | No - Default value is false. |
| migrate | Indicates if the request must be executed in migration mode. See [Migration](/{{site.data.rdp_links_version.APP}}/rdp_feature_migration_data.html){:target="_blank"}. | String | No - Default value is false. |
{% endif %}

{% if site.build == "external" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| hotline | Indicates if this request must be prioritized, so that the tasks complete faster. It is recommended to use hotline sparingly and only if required. | String | No - Default value is false. |
| migrate | Indicates if the request must be executed in migration mode. | String | No - Default value is false. |
{% endif %}

## params

This object contains the details about "this" request type. The following table lists the properties of the params object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| taskType | Indicates the action to be carried out for this request. Set the value as "process" for "this" request. | String | Yes |
| operationType| Indicates whether the intended operation needs to be performed in the online or offline environment.| String | Yes |
| requestforvaluemapping | Indicates if the value mapping must be performed for the attributes or not. | String | No - Default value is false. |
| authorizationType | Indicates the type of authorization that must be applied during processing of request. Possible values are - accomodate, reject. If authorizationType value is not specified in the request, then value specified in the tenant configuration is considered. If the value is not specified in tenant configuration, then it is considered as "reject". See [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}.| String | No - Default value is reject. |

Data for sample [Scenario](#scenario): Set the following properties for **params** object:

| Property | Value | 
|----------|-------------|
| taskType | process |
| operationType | inboundService |

## entities

This object contains all the information about the entities that you wish to create or update. It is an array of multiple entities that are created or edited in bulk. As it is the entity itself, refer [Entity Object Structure](api_entity_object_structure.html) for the structure of this object.

Data for sample [Scenario](#scenario): Set the following properties the entities. The following table lists the values set for few of the attributes in one of the entity. Similarly, you can set the values for remaining entities:

| Property | Value | 
|----------|-------------|
| id | PBM-001 |
| name | PoloMens Blue Shirt Large |
| type | sku |
| data -> attributes -> mdmid -> values -> source | internal |
| data -> attributes -> mdmid -> values -> locale | en-US |
| data -> attributes -> mdmid -> values -> value  | PBM-001 |
| data -> attributes -> mdmname -> values -> source | internal |
| data -> attributes -> mdmname -> values -> locale | en-US |
| data -> attributes -> mdmname -> values -> value | PoloMens Blue Shirt Large |