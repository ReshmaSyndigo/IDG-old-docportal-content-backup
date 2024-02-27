---
title: Authorize Relationships based on Ownership / Ownership Edit Data
sidebar: rdp_sidebar
permalink: api_auth_relationship.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Only one of the entity owns a relationship between two entities. Ideally, if a user wants to perform an action on any one of the entities, he must not know the existence of the other entity unless he has certain permissions such as read, write and delete. Hence, to eradicate such errors, the system checks the authorization permissions of the user, entity type and relationship defined the [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}.

Following indicates the two types of authorizations based on which an operation can be performed:

* Accommodate mode: This approach is more optimistic. If an element does not have permission, just the particular element is ignored and rest of the entity is processed.

* Reject mode: This is the pessimistic approach to authorization, where even a single element denial of access stops the request from passing through.

For understanding, let us consider a vendor user 'xyz@riversand.com' having **ownership data** and **ownership edit data** set as Nike. Also, consider vendor 'xyz@riversand.com' has the following permissions for sku and product entity types:

| Role | Criteria | Attribute Permission | Relationship Permission |
|------|----------|----------------------|-------------------------|
| Vendor | SKU | RW | RW |
| Vendor | Product | RW | RW |

Consider the following table for [Scenario 1](#scenario-1) and [Scenario 2](#scenario-2).

| Role | Entity Type | Relationship | Ownership Attribute | Read Permission | Write Permission | Ownership Permission |
|------|-------------|--------------|---------------------|-----------------|------------------|---------------------|---------------------------|
| Vendor | SKU | - | suppliername | Yes | No | Yes | 
| Vendor | Product | - | suppliername | Yes | No | Yes | 
| Vendor | SKU | ischildof | - | Yes | No | No | 

## Scenario 1

To perform a get operation of three entities E1, E2 and E3 in accommodate mode.

Consider a sku entity 'E1' having 'ischildof' relationship with two product entities 'E2' and 'E3'. Entities E1, E2 and E3 have the following value specified for attribute **suppliername** (the ownership attribute mapped in the Authorization model for sku and product entity types):

| Entity | 'suppliername' attribute value |
|--------|--------------------------------|
| E1 | Nike | 
| E2 | Nike | 
| E3 | Adidas |

The request and response of get operation done on the above three entities by vendor user 'xyz@riversand.com' is shown below:

**Request**:

To create the above configuration, use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request, send the following details:

{% include snippets/clientState.html %}
* In the ownershipData parameter, specify Nike.
<br/>

* authorizationType: Specify as accommodate.
* query -> ids: Specify the id's of the three entities E1, E2 and E3.

<pre>
<code>
POST **{{site.data.rdp_glossary.appgetentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"authorizationType": "accommodate",</span>
    "query": {
      "ids": [
        <span style="background-color: #FFFF00">"ersUZbniRanVJMv",</span>
        <span style="background-color: #FFFF00">"ersXAdk1R8LacYf",</span>
        <span style="background-color: #FFFF00">"erstJvZ5NP35Iq8"</span>
      ],
      "filters": {
        "typesCriterion": [
          "sku",
          "product"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre>

**Response**:

Only entities E1 and E2 are shown in the response. This is because the ownership data of entity E3 does not match the ownership data of the user (Since ownership permissions are set to true for sku and product entities). 

The ownership data for 'xyz@riversand.com' is set as Nike and mapped **suppliername** as the attribute whose value must match the value defined in ownership data of the user. Hence, this vendor user can view only entities whose **suppliername** attribute value is Nike. Since E3 has **suppliername** attribute value as 'Adidas', the vendor user 'xyz@riversand.com' cannot view entity E3, even though a vendor has read and write permissions to view relationships and read permissions to view entities belonging to 'ischildof' relationships.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "df2f80aa-35c6-42e0-9964-d27055a85914",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        <span style="background-color: #FFFF00">"id": "ersUZbniRanVJMv",</span>
        <span style="background-color: #FFFF00">"name": "E1",</span>
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "xyz@riversand.com_user",
          "createdDate": "2020-03-23T04:11:14.325-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "xyz@riversand.com_user",
          "modifiedDate": "2020-03-23T04:22:02.223-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6cee1787-87ea-4ffe-aa76-605878b47758",
                  "value": "NIKEKASH001"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cc543ec3-2133-4bc9-9dd5-38f7e7aaae1e",
                  "value": "E1"
                }
              ]
            },
            <span style="background-color: #FFFF00">"suppliername": {</span>
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "41e5f661-060c-4965-b377-6ffb980506c4",
                  <span style="background-color: #FFFF00">"value": "Nike"</span>
                }
              ]
            }
          },
          <span style="background-color: #FFFF00">"relationships": {</span>
            <span style="background-color: #FFFF00">"ischildof": [</span>
              {
                "relTo": {
                  <span style="background-color: #FFFF00">"id": "ersXAdk1R8LacYf",</span>
                  <span style="background-color: #FFFF00">"type": "product"</span>
                },
                "id": "ischildof_ersXAdk1R8LacYf",
                "properties": {
                  "direction": "both",
                  "relationshipType": "Composition"
                }
              }
            ]
          }
        }
      },
      {
        <span style="background-color: #FFFF00">"id": "ersXAdk1R8LacYf",</span>
        <span style="background-color: #FFFF00">"name": "P - E2",</span>
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "xyz@riversand.com_user",
          "createdDate": "2020-03-23T04:18:30.894-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "xyz@riversand.com_user",
          "modifiedDate": "2020-03-23T04:19:08.924-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "453d10ae-1646-4dcd-ab69-9fee71aa840f",
                  "value": "KIT001"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "367da97a-7425-42bd-9823-8830bf6ec806",
                  "os": "businessRule",
                  "osid": "concatproductnameattributevaluewithptoproductnameattribute_businessRule",
                  "ostype": "businessRule",
                  "value": "P - E2"
                }
              ]
            },
            <span style="background-color: #FFFF00">"suppliername": {</span>
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c23cac6e-74aa-424b-a281-c54c1010ce72",
                  <span style="background-color: #FFFF00">"value": "Nike"</span>
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code>
</pre>

## Scenario 2

To perform a get operation of entity E1 in reject mode.

Consider a sku entity 'E1' having 'ischildof' relationship with two product entities 'E2' and 'E3'. Entities E1, E2 and E3 have the following value specified for attribute **suppliername** (the ownership attribute mapped in the Authorization model for sku and product entity types):

| Entity | 'suppliername' attribute value |
|--------|--------------------------------|
| E1 | Nike | 
| E2 | Nike | 
| E3 | Adidas |

The request and response of get operation done on the entity E1 by vendor user 'xyz@riversand.com' is shown below:

**Request**:

To create the above configuration, use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request, send the following details:

{% include snippets/clientState.html %}
* In the ownershipData parameter, specify Nike.
<br/>

* authorizationType: Specify as reject.
* query -> ids: Specify the id of entity E1.

<pre>
<code>
POST **{{site.data.rdp_glossary.appgetentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"authorizationType": "reject",</span>
    "query": {
      "id": [
        <span style="background-color: #FFFF00">"ersUZbniRanVJMv"</span>
      ],
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre>

**Response**:

Data of entity E1 is not shown in the response. This is because **reject** mode is the pessimistic approach to authorization, where even if a single element is denial access, system stops the request from passing through.

Entity E1 is denied from passing through the request, as the ownership data of the entity does not match the ownership data of the user. The ownership data for 'xyz@riversand.com' is set as Nike and mapped **suppliername** as the attribute whose value must match the value defined in ownership data of the user. Hence, this vendor user can view only entities whose **suppliername** attribute value is Nike. Since E3 has **suppliername** attribute value as 'Adidas', the vendor user 'xyz@riversand.com' is not only denied access to view entity E3, but also denied access to view entities E1 and E2 as entity E3 is related to entity E1. 

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "31409823-4101-447c-9b21-600a52f3a52e",
    "maxRecords": 100
  },
  "response": {
    "entities": [],
    "status": "success",
    "totalRecords": 1
  }
}
</code>
</pre>

Consider the following table for [Scenario 3](#scenario-3), [Scenario 4](#scenario-4), [Scenario 5](#scenario-5) and [Scenario 6](#scenario-6).

| Role | Entity Type | Relationship | Ownership Attribute | Read Permission | Write Permission | Ownership Permission | Ownership Edit Permission |
|------|-------------|--------------|---------------------|-----------------|------------------|---------------------|---------------------------|
| Vendor | SKU | - | suppliername | Yes | Yes | Yes | Yes |
| Vendor | Product | - | suppliername | Yes | No | Yes | No | 
| Vendor | SKU | ischildof | - | Yes | Yes | Yes | Yes |

## Scenario 3

To create a sku entity 'E1' having ischildof relationship with product entity 'E2' in accommodate mode. 

* Step 1: To create a product entity E2 having its **suppliername** attribute value as Nike.<br/>

**Request 1**

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "E2",
    "name": "E2",
    "type": "product",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Nike",</span>
              "source": "internal",
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

**Response 1**

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "fb20bcb4-56e4-4459-811e-f7391bbbb3b3"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted product for create with Id E2. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "create",
            "E2"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

* Step 2: To create sku entity 'E1' having ischildof relationship with product entity 'E2' in accommodate mode.
<br/>

Entities E1 and E2 have the following value specified for attribute **suppliername** (the ownership attribute mapped in the Authorization model for sku and product entity types):

| Entity | 'suppliername' attribute value |
|--------|--------------------------------|
| E1 | Nike | 
| E2 | Nike | 

The request and response of create operation done by vendor user 'xyz@riversand.com' is shown below:

**Request 2**

To create the above configuration, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request, send the following details:

{% include snippets/clientState.html %}
* In the ownershipData parameter, specify Nike.
* In the ownershipEditData parameter, specify Nike.
<br/>

* authorizationType: Specify as accommodate.
* query -> id: Specify the id of the entity you wish to create.
* attributes -> suppliername -> values -> value: Specify as Nike.
* relationships -> ischildof  -> relTo -> id: Specify the id of the product entity created.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"authorizationType": "accommodate"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "E1",</span>
    <span style="background-color: #FFFF00">"name": "E1",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "Nike"</span>
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "E2",
              "name": "E2",
              "type": "product"
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "this sku is the child of E2"
                  }
                ]
              }
            },
            "id": "ischildof_E2"
          }
        ]
      }
    }
  }
}
</code>
</pre>

**Response 2**

The entity is created with the relationships being saved as the ownership data of the vendor (Nike) is matching with the ownership data of related entity E2 (Nike). 

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "2167b164-672f-4f8c-a5d9-a21f886e3104"
  },
  "response": {
    "entities": [
      {
        "id": "unsavedEntityData",
        "name": "unsavedEntityData",
        "type": "sku",
        "systemInfo": {
          "tenantId": "qa8infodev"
        },
        "data": {
          "attributes": {},
          "relationships": {
            "ischildof": []
          }
        }
      }
    ],
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id E1. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "E1"
          ]
        }
      ]
    },
    "totalRecords": 1
  }
}
</code>
</pre>

## Scenario 4

To create a sku entity 'E1' having ischildof relationship with product entity 'E3' in accommodate mode. 

* Step 1: To create a product entity E3 having its **suppliername** attribute value as Adidas.<br/>

**Request 1**

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "E3",
    "name": "E3",
    "type": "product",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Adidas",</span>
              "source": "internal",
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

**Response 1**

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "fb20bcb4-56e4-4459-811e-f7391bbbb3b3"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted product for create with Id E3. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "create",
            "E3"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

* Step 2: To create sku entity 'E1' having ischildof relationship with product entity 'E3' in accommodate mode.
<br/> 

Entities E1 and E3 have the following value specified for attribute **suppliername** (the ownership attribute mapped in the Authorization model for sku and product entity types):

| Entity | 'suppliername' attribute value |
|--------|--------------------------------|
| E1 | Nike | 
| E3 | Adidas | 

The request and response of create operation done by vendor user 'xyz@riversand.com' is shown below:

**Request 2**

{% include snippets/clientState.html %}
* In the ownershipData parameter, specify Nike.
* In the ownershipEditData parameter, specify Nike.

* authorizationType: Specify as accommodate. 
* query -> id: Specify the id of the entity you wish to create. 
* attributes -> suppliername -> values -> value: Specify as Nike. 
* relationships -> ischildof -> relTo -> id: Specify the id of the product entity created.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"authorizationType": "accommodate"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "E1",</span>
    <span style="background-color: #FFFF00">"name": "E1",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "Nike"</span>
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "E3",
              "name": "E3",
              "type": "product"
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "this sku is the child of E3"
                  }
                ]
              }
            },
            "id": "ischildof_E3"
          }
        ]
      }
    }
  }
}
</code>
</pre>

**Response 2**

The entity is created without the relationships being saved, as the ownership data of the vendor (Nike) does not match with the ownership data of related entity E3 (Adidas). 

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "3d3e33f2-e9d1-4041-b3b9-4f4ffdcb0ee6"
  },
  "response": {
    "entities": [
      {
        "id": "unsavedEntityData",
        "name": "unsavedEntityData",
        "type": "sku",
        "systemInfo": {
          "tenantId": "qa8infodev"
        },
        "data": {
          "attributes": {},
          "relationships": {
            "ischildof": [
              {
                "relTo": {
                  "id": "E3",
                  "name": "E3",
                  "type": "product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "value": "this sku is the child of E2"
                      }
                    ]
                  }
                },
                "id": "ischildof_E3"
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id E1. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "E1"
          ]
        }
      ]
    },
    "totalRecords": 1
  }
}
</code>
</pre>

## Scenario 5

To create a sku entity 'E11' having ischildof relationship with product entity 'E12' in reject mode. 

* Step 1: To create a product entity E12 having its **suppliername** attribute value as Nike.<br/>

**Request 1**

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{ 
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "E12",
    "name": "E12",
    "type": "product",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Nike",</span>
              "source": "internal",
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

**Response 1**

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "fb20bcb4-56e4-4459-811e-f7391bbbb3b3"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted product for create with Id E12. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "create",
            "E12"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

* Step 2: To create sku entity 'E11' having ischildof relationship with product entity 'E12' in reject mode. 
<br/>

Entities E11 and E12 have the following value specified for attribute **suppliername** (the ownership attribute mapped in the Authorization model for sku and product entity types):

| Entity | 'suppliername' attribute value |
|--------|--------------------------------|
| E11 | Nike | 
| E12 | Nike | 

The request and response of the create operation done by vendor user 'xyz@riversand.com' is shown below:

**Request 2**

To create the above configuration, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request, send the following details:

{% include snippets/clientState.html %}
* In the ownershipData parameter, specify Nike.
* In the ownershipEditData parameter, specify Nike.
<br/>

* authorizationType: Specify as reject.
* query -> id: Specify the id of the entity you wish to create.
* attributes -> suppliername -> values -> value: Specify as Nike.
* relationships -> ischildof  -> relTo -> id: Specify the id of the product entity created.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"authorizationType": "reject"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "E11",</span>
    <span style="background-color: #FFFF00">"name": "E11",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "Nike"</span>
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "E12",
              "name": "E12",
              "type": "product"
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "this sku is the child of E12"
                  }
                ]
              }
            },
            "id": "ischildof_E12"
          }
        ]
      }
    }
  }
}
</code>
</pre>

**Response 2**

Since the ownership data of the vendor (Nike) is matching with the ownership data of related entity E12 (Nike), the entity is created even if the authorizationType is reject. 

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "21201e64-9c7b-4e52-a35e-ee58063e3f0f"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id E11. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "E11"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Scenario 6

To create a sku entity 'E11' having ischildof relationship with product entity 'E13' in reject mode. 

* Step 1: To create a product entity E13 having its **suppliername** attribute value as Adidas.<br/>

**Request 1**

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{ 
   "clientId": "someguid",
   "clientState": {
      "someJson": {}
    },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "E13",
    "name": "E13",
    "type": "product",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Adidas",</span>
              "source": "internal",
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

**Response 1**

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "fb20bcb4-56e4-4459-811e-f7391bbbb3b3"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted product for create with Id E13. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "create",
            "E13"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

* Step 2: To create sku entity 'E11' having ischildof relationship with product entity 'E13' in reject mode.
<br/> 

Entities E11 and E13 have the following value specified for attribute **suppliername** (the ownership attribute mapped in the Authorization model for sku and product entity types):

| Entity | 'suppliername' attribute value |
|--------|--------------------------------|
| E11 | Nike | 
| E13 | Adidas | 

The request and response of create operation done by vendor user 'xyz@riversand.com' is shown below:

**Request 2**

To create the above configuration, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request, send the following details:

{% include snippets/clientState.html %}
* In the ownershipData parameter, specify Nike.
* In the ownershipEditData parameter, specify Nike.
<br/>

* authorizationType: Specify as reject.
* query -> id: Specify the id of the entity you wish to create.
* attributes -> suppliername -> values -> value: Specify as Nike.
* relationships -> ischildof  -> relTo -> id: Specify the id of the product entity created.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"authorizationType": "reject"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "E11",</span>
    <span style="background-color: #FFFF00">"name": "E11",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "Nike"</span>
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "E13",
              "name": "E13",
              "type": "product"
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "this sku is the child of E13"
                  }
                ]
              }
            },
            "id": "ischildof_E13"
          }
        ]
      }
    }
  }
}
</code>
</pre>

**Response 2**

The entity is not created as the ownership data of the vendor (Nike) does not match with the ownership data of related entity E13 (Adidas).

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "73e316ac-6106-400c-88b0-824e8aebbbb1"
  },
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Permission Denied. Action not authorized for request id 73e316ac-6106-400c-88b0-824e8aebbbb1. Check auth models",
          "messageCode": "PD001",
          "messageType": "error",
          "messageParams": [
            "73e316ac-6106-400c-88b0-824e8aebbbb1",
            "auth models"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>