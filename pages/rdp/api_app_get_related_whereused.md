---
title: Get Images Related to Entities
sidebar: rdp_sidebar
permalink: api_app_get_related_whereused.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The pre-requisites to fetch all the images related to an entity type, are:
* In the image_entityManageModel, the "relationshipOwnership" property in "hasimages" must be set to "whereused". 
* In the image entity, the "isPrimary" attribute of the "hasimages" property must be set to true. 

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityappservice/get** to get all images related to entities along with the image details, using a scenario. 

## Scenario

To get all image entities for entity type "sku" available in country "Australia". 

{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {TenantURL or ID}/api/entityappservice/get. In the request send the following details:

To get image details:

* query -> filters -> typesCriterion: Specify the type as "image"
* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages: Specify "relTo" and type as "sku" 
<br/>
To get entity details:

* query -> filters -> relationshipsCriterion -> query -> filters -> typesCriterion: Specify as "sku".
* query -> filters -> relationshipsCriterion -> query -> filters -> attributesCriterion -> availableincountries: Specify as "Australia". 
<br/>
To get the desired fields and relationships:

 * params -> fields -> relationships: Specify as "hasimages".
 * params -> options -> maxrecords: Specify as 100.

{% include callout.html content="**Note**: <br/>
Similarly, you can use **getrelated** to fetch the details of entities related to other entities. For example, you can use **getrelated** method to fetch the details of a **product** entity related to other **sku** entities. In this case:<br/>
* **relationshipOwnership** property in **childof** must be set to **whereused** and **relEntityType** must be specified as **sku** in the **product_entityManageModel**.

" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.apprelatedget}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"image"</span>
        ],
        <span style="background-color: #FFFF00">"relationshipsCriterion": [</span>
          {
            "hasimages": {
              "relTo": {
                "type": "sku"
              },
              "query": {
                "filters": {
                  "typesCriterion": [
                    "sku"
                  ],
                  "attributesCriterion": [
                    {
                      "availableincountries": {
                        <span style="background-color: #FFFF00">"exact": "Australia"</span>
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    },
    "fields": {
      "relationships": [
        "hasimages"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre>

## Response

Returns all images related to "sku" entity type in country "Australia".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "8640d49b-25c4-476a-8cbb-9dd143d91a66",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "QStibUN6RpKB_tyUpfPDxQ",
        "name": "b47f65bd-d5f0-4fd9-8086-95e652028197.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1buyer@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1buyer@riversand.com_user",
          "createdDate": "2018-07-23T06:06:33.061-0500",
          "modifiedDate": "2018-07-23T06:06:33.061-0500"
        }
      },
      {
        "id": "xd0n3xB4T_CWImXtO4kpFQ",
        "name": "shirt001-18.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "system_user",
          "createdDate": "2018-07-11T05:44:47.712-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1vendor@riversand.com_user",
          "modifiedDate": "2018-07-13T07:30:28.870-0500"
        }
      },
      {
        "id": "cJeB96oaTLmAidv_8MBc9w",
        "name": "3708c23d-1ddf-414c-8ec4-bdd8b9842c0e.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-13T08:39:36.703-0500",
          "modifiedDate": "2018-07-13T08:39:36.703-0500"
        }
      },
      {
        "id": "NJvawfvpQg2OIBcsuiievQ",
        "name": "9ee8bcc6-32cc-4a8e-9cf9-e0fa11b5d99d.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "presalesrdw@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "presalesrdw@riversand.com_user",
          "createdDate": "2018-07-31T10:54:59.272-0500",
          "modifiedDate": "2018-07-31T10:54:59.272-0500"
        }
      },
      {
        "id": "oFKt4MlFRhaZmIvcJEuK7Q",
        "name": "c68807ad-8d68-4c17-b4f1-2d0a48731fd5.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com_user",
          "createdDate": "2018-07-26T12:39:27.401-0500",
          "modifiedDate": "2018-07-26T12:39:27.401-0500"
        }
      },
      {
        "id": "ZKP3QLaXSwu_T8IeFGy0bw",
        "name": "7e947b37-0028-4694-a07e-f08a83a2e21a.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-13T08:39:36.195-0500",
          "modifiedDate": "2018-07-13T08:39:36.195-0500"
        }
      },
      {
        "id": "bnVsWA0ERoWWtKGIC-vn_A",
        "name": "11e61a7e-f418-4c50-8990-90ba89b257ad.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "auto1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "auto1admin@riversand.com_user",
          "createdDate": "2018-08-02T08:16:26.680-0500",
          "modifiedDate": "2018-08-02T08:16:26.680-0500"
        }
      },
      {
        "id": "Pnqk0A3wQW2ylrOYU2t7FQ",
        "name": "deb86186-d76e-42a8-aeb6-8770d0650194.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-13T08:39:36.349-0500",
          "modifiedDate": "2018-07-13T08:39:36.349-0500"
        }
      },
      {
        "id": "6F2I4HmLS0OINbl2K1N2tA",
        "name": "c4109ec8-9e23-41e2-9add-29c784872c13.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1vendor@riversand.com_user",
          "createdDate": "2018-07-19T01:19:09.208-0500",
          "recordId": "ede1e658-c5bd-4204-af9e-adaf6498a815",
          "rowNo": 3,
          "modifiedService": "entityManageService",
          "modifiedBy": "auto1admin@riversand.com_user",
          "modifiedDate": "2018-08-02T08:07:56.147-0500"
        }
      },
      {
        "id": "B0kdGMJ9S5Klxzu93OOuIQ",
        "name": "3249d5dc-27b8-4887-b67e-785543297628.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-23T04:25:20.594-0500",
          "modifiedDate": "2018-07-23T04:25:20.594-0500"
        }
      },
      {
        "id": "sPAePw4kStuBlJx6tMBWXA",
        "name": "71925471-b6f0-48f0-998a-f7f9915d8d26.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-04T04:09:09.250-0500",
          "modifiedDate": "2018-07-04T04:09:09.250-0500"
        }
      },
      {
        "id": "XXj0Nm-ZQC28XJUQxZ3NSA",
        "name": "93f02e30-fe18-4401-9e75-593f6747aa5a.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "presalesrdw@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "presalesrdw@riversand.com_user",
          "createdDate": "2018-07-31T10:54:54.261-0500",
          "modifiedDate": "2018-07-31T10:54:54.261-0500"
        }
      },
      {
        "id": "FvpeKp9JRkuwsfYjdgey0g",
        "name": "2fb73003-47de-440b-a66d-8cc5c8f15c94.JPG",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-11T07:59:40.311-0500",
          "modifiedDate": "2018-07-11T07:59:40.311-0500"
        }
      },
      {
        "id": "hRoCKdIjQUOxNrEURt4kxg",
        "name": "9864e5bc-365f-4087-99d9-bb96040edc8b.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-13T08:39:37.233-0500",
          "modifiedDate": "2018-07-13T08:39:37.233-0500"
        }
      },
      {
        "id": "L8pAWlYXRdK19QmhD8UT7Q",
        "name": "9fd41940-8d99-455a-a4ed-d50eb531f6c3.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1vendor@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1vendor@riversand.com_user",
          "createdDate": "2018-07-13T08:39:36.192-0500",
          "modifiedDate": "2018-07-13T08:39:36.192-0500"
        }
      },
      {
        "id": "dghnWgN5QG2u_sLsTyAmTg",
        "name": "1043421R_M_VA_FV_BLACK.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "system_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "system_user",
          "createdDate": "2018-07-18T08:00:52.802-0500",
          "modifiedDate": "2018-07-18T08:00:52.802-0500"
        }
      },
      {
        "id": "aRC_jLC0TMiOVPRbfbybiw",
        "name": "0e908843-d423-4e34-9a9b-4811c2a6973b.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1vendor@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1vendor@riversand.com_user",
          "createdDate": "2018-07-13T08:39:37.262-0500",
          "modifiedDate": "2018-07-13T08:39:37.262-0500"
        }
      },
      {
        "id": "Jx38WbE2QbWYVjmAaMyBog",
        "name": "d25b2cde-c367-4f3d-8f61-427dc570cfeb.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-23T04:25:20.586-0500",
          "modifiedDate": "2018-07-23T04:25:20.586-0500"
        }
      },
      {
        "id": "LyUuwwxOSjeWEIJSCEfdiA",
        "name": "2b6634de-98b6-46de-8079-b1d99b14c2e3.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-23T04:25:19.527-0500",
          "modifiedDate": "2018-07-23T04:25:19.527-0500"
        }
      },
      {
        "id": "xvYroVQgQRGcebwl2wwr5Q",
        "name": "7f6afd66-9628-4fae-9ba6-265a9329fc13.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "presalesrdw@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "presalesrdw@riversand.com_user",
          "createdDate": "2018-07-31T10:54:54.255-0500",
          "modifiedDate": "2018-07-31T10:54:54.255-0500"
        }
      },
      {
        "id": "b_mKr9WlTp2-LSvY3d2uNA",
        "name": "92d74260-3c1a-4292-afc7-2cc83c5fa7e9.jpg",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "presalesrdw@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "presalesrdw@riversand.com_user",
          "createdDate": "2018-07-31T10:55:02.139-0500",
          "modifiedDate": "2018-07-31T10:55:02.139-0500"
        }
      },
      {
        "id": "GetiwNeARX-Ji9U1pD89gQ",
        "name": "5d8fc2b4-de07-44a3-a679-c27ea39da2e5.png",
        "type": "image",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-07-19T05:45:16.014-0500",
          "recordId": "66669c8c-a808-4798-a172-1a3ea7c4da7f",
          "rowNo": 2,
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-07-26T06:22:38.862-0500"
        }
      }
    ],
    "status": "success",
    "totalRecords": 22
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.