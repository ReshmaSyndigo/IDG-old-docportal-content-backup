---
title: Get Entities using 10K Keywords
sidebar: rdp_sidebar
permalink: api_get_entities_on_tenk_keywords.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

In the application, **Keyword** search is a common way of performing entity search across entity names, attribute values and property values. By default, keyword search supports **five hundred** or fewer keywords in the query, see [Search using Keywords](/{{site.data.rdp_links_version.APPU}}/srch_keywords.html).

The application supports entity search with **ten thousand keywords** in the query, with limitations imposed to maintain search performance, see below for more information. In general, search with more than five hundred keywords behaves like exact search.

**Keyword Query Limitations**

| Limitations | Example |
|-------------|---------|
| No **Wildcard** characters are allowed. | T* Shirt |
| No quoted phrases are allowed. | "tapsy shirt" |
| No special characters as are allowed. | [], $ |
| No AND operator support. | "operator": "_AND" |
| No query syntax are allowed. | this \| that |
| Use space separated string between keywords. | "Sh Sh1 Sh2 Sh3" |

**Attributes, Relationships, and Properties Query Limitations**

| Limitations | Example |
|-------------|---------|
| Only supports exacts operator. |
| No **Wildcard** characters are allowed. | T* Shirt |
| No quoted phrases are allowed .| "tapsy shirt" |
| Special characters are supported. | [], $ |
| Supports array of 10,000 values. | "Sh1 Sh2... Sh10000" |

**Search Limit** - **Attributes, Relationships, and Properties criterion**

| Operator | Search Term Limit | Description |
|----------|-------------------|-------------|
| eq | 500 | • All words must match. <br/> • Quoted phrases and wildcards are allowed. |
| contains | 500 | • Any one word must match. <br/> • Quoted phrases and wildcards are allowed. |
| exact | 1 | One word must exactly match the search query. |
| exacts | 10,000 | Atleast one word must exactly match the query. |
| startswith | 500 | Atleast one word must exactly match the query. |
| hasvalue | 1 | Attribute, relationship and property has-value search. |
| lt, lte, gt, gte | 1-2 | Range search. |

## Scenario

To get entities using 10k keywords or attributes.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {TenantURL or ID}/api/entityappservice/get. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* keywordsCriterion -> keywords: Specify ten thousand keywords in the query.
* keywordsCriterion -> operator: Specify '_OR' operator.
* valueContexts -> locale": Specify the locale as "en-US".

<br/>

POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ],
        "keywordsCriterion": {
          "keywords": "sh1 sh2 sh3 sh4 .... sh10000",
          "operator": "_OR"
        }
      },
      "valueContexts": [
        {
          "locale": "en-US"
        }
      ]
    },
    "options": {
      "maxRecords": 500
    }
  }
}
</code>
</pre>

## Response

Returns all the 'SKU' entities that match **Keywords** or **Attributes** provided in the query.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1be148a5-c114-4adc-bd4e-97603ca74854",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "l_LyqQBTSt6kRmMbn8EaUA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "rk5Kt45dTn-foKKON1q7Kw",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "1jtcAHwpQzePPz9k7JmOpA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "loFXg3MJSjmi3SYgOmJQkg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "-zG1zucDTgKFFo3-tgjrKw",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "CIS61Ru7QKSErKfeeRxppA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "oKsyAlXYQ0GzEXXtBuc0jA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "yLbnXJoQS1q59Q7HF_dibg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "kJmfNuraSJqyY2t445hogA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "l_xZ1KpqQzqeKh33BpaEkQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "QwIYl535RDWai4V96Bk-WQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "5gCIv42-TdSkSECIk1JURw",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "ehOTw8CdSNaBRk9EfP2K4g",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "KFryaH2rTrOavgq90aSlAQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "zT3CYnGeTlyXhpOrW7TanQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "5kYVpKSrQl-K1otfVj5NOw",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "zPZUwbT0SM-awQ7OKEZsHQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "hEZ6yI_5Tsi4i7ThI8e5PA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "XxkL_gvoQ2q5MGVkTRVWKQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "QZ40uUDzQy2Mdi4o18QPAQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "MY80HjAoSJWgbu1YnCtdrA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "iQbPaAdmSUq4oPcFZJpYLQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "0KVeEXI3Sc65BHA2k2_ILw",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "nsy2sDMzS9ezAKjnwFC1UA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "Os8BY4AQTp-LMskhdVCjmg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "ULseHgOZSqaOz8bOB0kB4A",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "swElzJAbQ7WPU88ZY4wYrA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "q-WDLG85R-WKI6AZgP0EIQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "k0MeQLJ5SD2VA4Cp8P0lnQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "9Sleg7upRjaPj_PaxeWzsg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "V10VcsAETY-Fyj9RXQJIMg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "8OXW0MjxR7OwH61AJLQsRQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "c2cwTnCyRXO0rR_iPjjZCw",
        "name": "_EMPTY",
        "type": "sku"
      }
    ],
    "status": "success",
    "totalRecords": 481
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.