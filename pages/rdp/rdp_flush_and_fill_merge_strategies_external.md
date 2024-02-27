---
title: Flush and fill for Merge strategies
sidebar: rdp_sidebar
permalink: rdp_flush_and_fill_merge_strategies.html
folder: rdp
type: Description
---

The ‘flush and fill’ feature is applicable for all the merge strategies. This configuration allows you to perform flush and fill on a group of attributes of the winning record (based on survivorship rules) and replace the original record’s attribute value. This acts more like a replace strategy. 

## Sample MergeGroupConfig 

The following is the sample merge group configuration for flush and fill.

<pre>
<code>
{
  "configObject": {
    "id": "software_mergeGroupConfig",
    "type": "mergeGroupConfig",
    "data": {
      "attributes": {
        "mergegroup1": {
          "values": [
            {
              "value": "landmarkone",
              "locale": "en-US"
            },
            {
              "value": "apartmentone",
              "locale": "en-US"
            },
            {
              "value": "housenumberone",
              "locale": "en-US"
            },
            {
              "value": "streetone",
              "locale": "en-US"
            }
          ]
        },
        "mergegroup2": {
          "values": [
            {
              "value": "countryone",
              "locale": "en-US"
            },
            {
              "value": "cityone",
              "locale": "en-US"
            }
          ]
        },
        "mergegroup4": {
          "values": [
            {
              "value": "hasdimensionsone",
              "locale": "en-US"
            }
          ]
        },
        "addressgroup": {
          "values": [
            {
              "value": "accountsiteone",
              "locale": "en-US"
            },
            {
              "value": "streetone",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

{% include callout.html content="**Notes**:
* mergegroup1, mergegroup2, mergegroup4 are merge group identifier attributes.
* The values of these identifier attributes are called merge group attributes.:
	* Introduced at the golden entity type level per tenant and must be in a single context     (global context) with all the attributes in SDL.
	* Acts as a dictionary of identifier attributes having values at a single place. 
	* Any identifier attribute defined in ‘Global’ or self-context, can be mapped anywhere in merge model that is for the entity attribute, context attribute, or relationship attribute.
* Each identifier attribute is a collection attribute that has a set of attribute names (merge group attributes) with its values. 
For example, “addressgroup” is a collection attribute that has two attribute names with two values that are considered for blind replace when any attribute in mergemodel is configured to refer “addressgroup”. 
* These values are attribute names so they must match with their short names given in attributeModel and entityManageModel.
" type="primary" %}

## Merge Model Configuration

Based on the above **MergeGroupConfig** in the Riversand Platform, the following is the **Merge Model** configuration.

<pre>
<code>
{
  "entityModel": {
    "id": "software_mergeModel",
    "name": "softwaremergemodel",
    "type": "mergeModel",
    "data": {
      "attributes": {
        "sourceofinformation": {
          "properties": {
            "strategy": "Longest",
            "mergeGroupId": "mergegroup1"
          }
        },
        "vendoruniqueid": {
          "properties": {
            "strategy": "Longest",
            "mergeGroupId": "test"
          }
        },
        "isprimaryone": {
          "properties": {
            "strategy": "SourceBasedScore",
            "fallback": [
              {
                "strategy": "MostRecentEntity"
              }
            ],
            "mergeGroupId": "mergegroup2"
          }
        },
        "pincode": {
          "properties": {
            "strategy": "Longest"
          }
        },
        "countryone": {
          "properties": {
            "strategy": "Longest"
          }
        }
      },
      "relationships": {
        "hasimages": [
          {
            "properties": {
              "relatedEntityInfo": [
                {
                  "relEntityType": "image"
                }
              ]
            },
            "attributes": {
              "linkDescription": {
                "properties": {
                  "mergeGroupId": "mergegroup4",
                  "strategy": "Longest"
                }
              }
            }
          }
        ]
      },
      "contexts": [
        {
          "context": {
            "country": "Germany"
          },
          "attributes": {
            "invoicename": {
              "properties": {
                "mergeGroupId": "addressgroup",
                "strategy": "MostRecentEntity"
              }
            },
            "accountsite": {
              "properties": {
                "strategy": "Longest"
              }
            }
          },
          "relationships": {
            "hasimages": [
              {
                "id": "hasimagesowned",
                "properties": {
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "image"
                    }
                  ]
                },
                "attributes": {
                  "linkDescription": {
                    "properties": {
                      "mergeGroupId": "mergegroup4",
                      "strategy": "Longest"
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}
</code>
</pre>

* **sourceofinformation**, **vendoruniqueid**, **isprimaryone**: Attributes that executes or triggers any configured strategy and decides the survivor entity. This acts as a merge trigger attribute and can have any normal attribute name without any constraints.
* **mergeGroupId**: Refers to merge group identifier attribute mentioned in **mergeGroupConfig**. 

{% include callout.html content="**Note**:
* The primary strategy and fallback strategy concept remain the same for merge trigger attribute to decide the survivor entity. 
* All the existing strategies can be configured as primary or fallback strategy for merge trigger attribute with the current limitations.
" type="primary" %}

## Flush and Fill Flow

Merge trigger attributes (sourceofinformation, vendoruniqueid, isprimaryone) executes the strategy that is configured and decides whether the incoming or original entity data survives. 

**Result**: When the incoming entity or the original entity data survives, the merge trigger attributes mentioned in mergeGroupId (mergegroup1) fetches the merge group attributes (landmarkone, apartmentone, housenumberone, and streetone) (defined in **mergeGroupConfig** for the selected the identifier attribute) and copies the data to the original GR.

The following are key points:

* Merge trigger attribute with non-SDL values in it is also allowed being it a reference attribute or a localisable attribute. You need not mark merge trigger attribute as non-localizable attribute in the manage model configuration. When merge trigger attribute or reference attribute is localized, the SDL value is considered for deciding the survivor even if the incoming or golden record has multiple locale values.
* Once the winning record is decided based on the configured strategy. The SDL attribute value of the winning record is copied into golden record even if non-SDL value exists. This also means the merge trigger attribute’s existing data is removed if the incoming merge trigger attribute survives over golden record data.
* If 'mergeGroupConfig' is not defined, then flush and fill for merge group attributes is not executed. Merge trigger attribute will behave based on the configured strategy.
* For merge group attributes, the replace functionality does not depend on locales. If the incoming entity wins, then the golden record attribute value is replaced with the incoming entity attribute value. Note that there is locale specific attribute value replacement is not supported.
* If survivor is chosen, then merge group attributes are flushed and filled.

## Sample Scenarios

**Scenario 1**: Consider the following merge group attributes (sourceofinformation, vendoruniqueid, isprimaryone) are configured and the Longest strategy is defined for the “vendoruniqueid” attribute in the mergeModel. In this scenario, the longest strategy implementation for “vendoruniqueid” attribute is ignored. Only attribute group-based merge is executed for “vendoruniqueid” attribute and no error will be displayed.

**Scenario 2**: Consider that the merge trigger attribute is not part of the merge group attributes. In this scenario, all the incoming data will win over the merge trigger attribute as it is defined in the merge group attributes. As a result, all the incoming attribute values are updated to the original entity.

**Scenario 3**: Consider that golden record (GR) has merge trigger attribute values in SDL and incoming record has non-SDL attribute values.

**Result**: The GR attribute values are not updated, but they are retained as is. 

**Scenario 4**: Consider that golden record has attribute values in non-SDL and incoming record has attribute values in SDL.

**Result**: The incoming record’s attribute value is considered for GR as the SDL value is considered as normal update for GR and there is no SDL value present in merge trigger attribute. If survivor is chosen, then merge group attributes are flushed and filled.

**Scenario 5**: Consider that golden record and incoming record have non-SDL attribute values.

**Result**: The GR is not updated as there is no SDL value present to choose the survivor.

**Scenario 6**: Consider that 'MostRecentByEntity' strategy is defined, and the entity has SDL attribute value.

**Result**: The entity that has SDL attribute value is not considered for GR as the strategy is based on the entity level property. Based on the 'MostRecentByEntity' strategy, the winning entity attribute value is copied to the GR.

{% include callout.html content="**Notes**:
* Merge group attributes can be simple, collection, or nested attribute. Platform does not support nested attribute in relationship for merge group attributes.
* Merge trigger attribute can be simple attribute in global or self-context, relationships.
* Merge trigger attribute cannot be collection or nested attribute. Platform does not support nested attribute in relationship for merge trigger attribute.
" type="primary" %}

