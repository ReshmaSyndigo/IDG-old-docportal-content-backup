---
title: Get Nearest Configuration
permalink: api_get_nearest_configuration.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get nearest matching configuration details in the hierarchical structure:

app -> service -> component -> subComponent -> entityType -> list -> relationshipType -> role. 

Example: If you have specified the context up-to "role" level in the get query and the context is available only at "entityType" level, then the query traverses up-to "entityType" and returns the configuration details applicable at the "entityType" level.

* [Get Nearest Configuration using Id](api_get_config_scenario2.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getnearestconfig}}

**Parameters**: The following table lists the parameters of the JSON request to get nearest configuration details:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting configuration objects. |
| query | id | No | Indicates configuration unique identifier. |
| query | name | No | Indicates configuration name. |
| query | ids | No | Indicates an array of configuration unique identifiers. |
| query | contexts | No | Indicates an array of context for getting configuration objects. |
| query | contexts -> app | Yes | Indicates the app such as entitysearch. |
| query | contexts -> service | Yes | Indicates the service in the app. |
| query | contexts -> component | Yes | Indicates the component of the service. |
| query | contexts -> subComponent | No | Indicates the subComponent of the component. |
| query | contexts -> entityType | No | Indicates the entity type. |
| query | contexts -> list | No | Indicates the list the configuration is linked to. |
| query | contexts -> relationshipType | No | Indicates the relationship type. |
| query | contexts -> role | No | Indicates the role the configuration is linked to. |
| query | contexts -> user | No | Indicates the user the configuration is linked to. |
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> typesCriterion | No | Indicates a comma separated list of configuration types. |
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000.|

{% include callout.html content="**Notes**: 
* **_ALL** in the attributesCriterion fields implies all attributes that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | configObjects | List of configuration objects that matched the search criteria. {% if site.build == "internal" %} See [Configuration Object Structure](api_config_object_structure.html), for more information.{% endif %} |
| response | totalRecords | Count of config objects that matched the search criteria.|
| response| status | Indicates if the request is submitted successfully or not. |
| response| statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample request and response to get nearest configuration details using Id:

{% include callout.html content="**Note**: Consider for this example, that the context is available only up-to 'entityType' level in the hierarchy.
" type="primary" %}

<pre><code>
POST **{{site.data.rdp_glossary.getnearestconfig}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "contexts": [
        {
          "app": "entitysearch",
          "service": "searchdiscovery",
          "component": "searchresults",
          "subComponent": "datagrid",
          "entityType": "product",
          "relationshipType": "crossSell",
          "role": "ALL",
          "user": "ALL"
        }
      ],
      "id": "configGuid15",
      "filters": {
        "typesCriterion": [
          "uiConfig"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code></pre>

**Response**: 
<pre><code>
{
  "response": {
    "configObjects": [
      {
        "id": "configGuid15",
        "name": "Search-Grid-Columns",
        "type": "gridconfig",
        "properties": {
          "createdByService": "entityservice",
          "createdBy": "user"
        },
        "data": {
          "contexts": [
            {
              "context": {
                "app": "entitysearch",
                "service": "searchdiscovery",
                "component": "searchresults",
                "subComponent": "datagrid",
                "entityType": "product"
              },
              "jsonData": {
                "type": "uiConfig",
                "config": "JSON format of the config"
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.