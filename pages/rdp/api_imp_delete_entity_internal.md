---
title: Delete Entities using JSON Import
sidebar: rdp_sidebar
permalink: api_imp_delete_entity.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to delete an entity when importing a JSON file through various channels. Example - Event Hub, Kinesis

## Scenario - 1

To delete a **sku** entity having its id as **E01**.

* entities -> id: Specify the identifier of the entity you wish to delete.
* entities -> type: Specify the type of the entity you wish to delete.
* entities -> properties -> action: Specify as delete.

<pre>
<code>
{
  "entities": [
    {
      <span style="background-color: #FFFF00">"id": "E01",</span>
      <span style="background-color: #FFFF00">"type": "sku",</span>
      "properties": {
        <span style="background-color: #FFFF00">"action": "delete"</span>
      }
    }
  ]
}
</code>
</pre>

## Scenario - 2

To delete **sku** entity whose **mdmdid** (matching attribute) value is **MDM_001**.

* entities -> type: Specify the type of the entity you wish to delete.
* entities -> properties -> action: Specify as delete.
* entities -> data -> attributes: Specify the name of the matching attribute based on which you wish to filter the entities.
* entities -> data -> attributes -> values -> value: Specify the value of the attribute based on which you wish to filter the entities.

<pre>
<code>
{
  "entity": {
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "properties": {
      <span style="background-color: #FFFF00">"action": "delete"</span>
    },
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"mdmid": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "MDM_001",</span>
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

Once the JSON file is imported to the system, the **sku** entity with id **E01** is deleted. Use [Get Entities](api_app_get_entity.html) to verify whether the entity is deleted. 
 

