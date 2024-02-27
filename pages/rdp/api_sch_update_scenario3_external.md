---
title: Update the interval of a schedule
sidebar: rdp_sidebar
permalink: api_sch_update_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schupdate}}** to update a schedule object, using a scenario.

## Scenario

To update the interval of the schedule object from the current value of 720 minutes to 480 minutes that schedules the retry of download of assets from a given URL.

{% include snippets/header.html %}

## Request

To update the schedule object, you can use the REST API {{site.data.rdp_glossary.schupdate}}. In the request send the following details:

* enabled: Specify as "true".
* scheduleTaskUrl: Specify the URL of the required REST API task.
* intervalInMins: Change the specified duration from 720 minutes to 480 minutes.
* scheduleTaskPayload: Specify all the query details of the REST API of the task that you wish to schedule.

<pre>
<code>
POST {TenantURL or ID}/api/schedulerservice/update
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    "id": "retryDownloadAssets",
    "name": "Schedule for Retry of Download of Assets From URL",
    "type": "scheduleobject",
    "properties": {
      <span style="background-color: #FFFF00">"enabled": true</span>
    },
    "data": {
      "attributes": {
        "scheduleType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "fixedRate"
            }
          ]
        },
        "scheduleTaskName": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "retryDownloadAssetsFromURL"
            }
          ]
        },
        <span style="background-color: #FFFF00">"scheduleTaskUrl": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "http://{URI}/api/rsConnectService/publish"
            }
          ]
        }
      },
      "jsonData": {
        "scheduleConfiguration": {
          <span style="background-color: #FFFF00">"intervalInMins": 480,</span>
          "authContext": {
            "x-rdp-userRoles": "admin",
            "x-rdp-clientId": "rdpclient",
            "x-rdp-tenantId": "",
            "x-rdp-ownershipdata": "",
            "x-rdp-userid": "system_user",
            "x-rdp-username": "system",
            "x-rdp-useremail": "system",
            "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
          }
        },
        <span style="background-color: #FFFF00">"scheduleTaskPayload": {</span>
          "params": {
            "query": {
              "filters": {
                "attributesCriterion": [
                  {
                    "imagestatus": {
                      "eq": "ERROR"
                    }
                  }
                ],
                "typesCriterion": [
                  "failedimage"
                ]
              }
            },
            "fields": {
              "attributes": [
                "property_originalurl"
              ]
            },
            "rsconnect": {
              "profiles": [
                "retryDownloadAssetsFromURL"
              ]
            }
          }
        }
      }
    }
  }
}
</code>
</pre> 

## Response

If the schedule update request is submitted successfully, then the following response is received from update schedule API:

<pre><code>
{
  "request": {
    "requestId": "bb53ca5a-1954-4d57-8e2e-4c5392cbb012"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for update with entity Id : retryDownloadAssets. Please check back after 1 min"
    }
  }
}
</code></pre> 

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the updated schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html) and [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html).
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.