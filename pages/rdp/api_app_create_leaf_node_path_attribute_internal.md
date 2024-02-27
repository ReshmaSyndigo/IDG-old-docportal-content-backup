---
title: Create Entity with Leaf Node Violation Error for Path Attribute
sidebar: rdp_sidebar
permalink: api_app_create_leaf_node_path_attribute.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can validate path attribute "Product Classification" with a leaf node as its value using the RESTful API **{{site.data.rdp_glossary.appcreateentity}}**. For more information, see [View Invalid Leaf Node for Path Attribute via Excel Import](/{{site.data.rdp_links_version.APPU}}/dda_invalid_leaf_node_path_attr.html){:target="_blank"}.

The following is the sample **Attribute Model** for a path attribute:

<pre>
<code>
{
  "id": "productclassification_attributeModel",
  "name": "productclassification",
  "type": "attributeModel",
  "domain": "thing",
  "source": "internal",
  "properties": {
    "lastMigrationTimestamp": "2020-06-18T07:25:31.810+0000",
    "migrationVersion": 1,
    "dataType": "string",
    "externalName": "Product classification",
    "groupName": "Enhancer Attributes",
    "displayType": "Path",
    "isCollection": true,
    "description": "Product classification",
    "isReportable": false,
    "isLeafNodeOnly": true,
    "pathEntityInfo": [
      {
        "pathRelationshipName": "belongsTo",
        "pathEntityType": "classification",
        "rootNode": "productclassificationroot",
        "pathSeperator": ">>"
      }
    ],
    "createdService": "entityManageModelService",
    "createdBy": "system_user",
    "modifiedService": "entityManageModelService",
    "modifiedBy": "system_user",
    "createdDate": "2021-03-16T13:02:49.585-0500",
    "modifiedDate": "2021-03-16T13:02:49.585-0500"
  },
  "data": {
    "attributes": {
      "displayType": {
        "values": [
          {
            "id": "08b91011-6528-42d3-9c51-6d19fceae570",
            "value": "Path",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "groupName": {
        "values": [
          {
            "id": "16c272e5-6bb0-4609-8d80-5123437ec5ad",
            "value": "Enhancer Attributes",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "externalName": {
        "values": [
          {
            "id": "1b44c6dc-db29-4231-9b2e-33839bee89ce",
            "value": "Product classification",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "dataType": {
        "values": [
          {
            "id": "03503dc7-92ba-424d-bc66-16ec9491d784",
            "value": "string",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "isCollection": {
        "values": [
          {
            "id": "227ba0f4-3e4a-4453-98d9-c029c17fc52c",
            "value": true,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      <span style="background-color: #FFFF00"> "isLeafNodeOnly": { </span>
        "values": [
          {
            "id": "227ba0f4-3e4a-4453-98d9-c029c17fc52c",
            <span style="background-color: #FFFF00"> "value": true, </span>
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "pathEntityInfo": {
        "group": [
          {
            "id": "09070ee1-9915-4cbb-bb5a-c72960fcd1f5",
            "locale": "en-US",
            "source": "internal",
            "pathEntityType": {
              "values": [
                {
                  "id": "c9afeffb-4a26-4071-b722-f043316f99b2",
                  "value": "classification",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "pathRelationshipName": {
              "values": [
                {
                  "id": "af99bfe5-4ac0-4d4e-bd3c-73074b208463",
                  "value": "belongsTo",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rootNode": {
              "values": [
                {
                  "id": "06c00c6d-fe5b-443d-849f-a53c544f525a",
                  "value": "productclassificationroot",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "pathSeperator": {
              "values": [
                {
                  "id": "690fe9dd-6187-40a6-be59-46c55762a0f7",
                  "value": ">>",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          }
        ]
      },
      "description": {
        "values": [
          {
            "id": "9b6ef58d-c0d7-400c-900e-704243351d12",
            "value": "Product classification",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "isReportable": {
        "values": [
          {
            "id": "9553602b-8df8-4bb0-a574-c96805ec0fe1",
            "value": false,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      }
    }
  }
}
</code>
</pre> 

## Scenario

Consider that you wish to create a "sku" entity, "JBL Headset" with the path attribute "Product Classification". In this scenario, the path value of the "Product Classification" attribute is "Product Classifications>>Electronics". Where the "Electronics" has child classification as "Headset" and it is not a leaf node. A Leaf Node is the classification entity, which does not have any child classification. In Attribute Model and [Entity Validation Model](api_validation_model.html), "isLeafNodeOnly" flag is set to "true" for the path attribute to verify whether the leaf node exists or not. 

**Result:** The value specified in the path attribute does not contain a leaf node, wherein a govern entity will display "isLeafNodeViolation001" error. For more information, see [Get Leaf Node Violation Error for Path Attribute Value](api_govern_get_scenario9.html).

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request, send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id and type. 
* data : Specify the attributes along with its values to be created, in the entity. Include the path value of the "productclassification" path attribute "Product Classifications>>Electronics" inside the data object.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "T185BT",
    "type": "sku",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"productclassification": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Product Classifications>>Electronics",</span>
              "locale": "en-US",
              "source": "internal"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre> 

## Response

If the entity create request is submitted successfully, then the following response is received from create entity API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "80ab7c80-c55f-4bba-bd49-7091c148b6b2"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id T185BT. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "T185BT"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

## Verify the created entity

You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. For more information, see [Get Leaf Node Violation Error for Path Attribute Value](api_govern_get_scenario9.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.