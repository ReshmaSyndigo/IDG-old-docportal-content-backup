---
title: Map Pre-Existing Users to Client ID for API Request Authentication
sidebar: rdp_sidebar
permalink: api_create_config_client_id.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to map the existing user to "auth-client-id" parameter, which authenticates the mapped user to perform API query request in Riversand platform. 

Once the user is mapped with "auth-client-id" and "preExistingUserEnabled" flag is enabled, then the mapped user is authenticated to perform API query request irrespective of the "x-rdp-userId" parameter value provided in API Request Header. The value provided in "x-rdp-userId" parameter is not considered if the "preExistingUserEnabled" flag is enabled and the respective user is mapped to the "auth-client-id" parameter. By defualt, "preExistingUserEnabled" flag is set to "false". For more information, see [Understanding Request Headers](api_understand_req_header.html).

The following table lists the various scenarios of authenticating API request based on the "preExistingUserEnabled" flag, "userId" mapped for client, and "userId" provided in Request Header with the appropriate results for each scenario:

| preExistingUserEnabled | Client’s mapped "userId" Available?| Request Header "userId" Available? | Result |
| -------------------- | -------------------------- | ------------------- | ---------- |
| True | True | True | Client’s mapped userId  is considered. |
| True | False | True | Request Header userId is considered. |
| True | True | False | Authentication Error as the Request Header userId is a mandatory field irrespective of its value. |
| True | False | False | Authentication Error as the Request Header userId is a mandatory field irrespective of its value. |
| False | True | True | Request Header userId is considered. |
| False | True | False | Authentication Error as the Request Header userId is a mandatory field irrespective of its value. |
| False | False | True | Request Header userId is considered. |
| False | False | False | Authentication Error as the Request Header userId is a mandatory field irrespective of its value. |

## Scenario

Consider that you wish to map the userId, "systemid1@riversand.com" to the "auth-client-id", which authenticates the system user to perform API query request.

### Create Mapping File

To create the mapping file for "dataplatform" tenant, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

**configObject**: In the [configObject](api_config_object_structure.html) object, provide the "id" and "type". In the data object, specify the "testauthclientid" as "systemid1@riversand.com" to map the system user to the client.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
    "configObject": {
        "id": "apiauthpreexistinguser",
        "type": "apiauthpreexistinguser",
        "data": {
            "jsonData": {
                <span style="background-color: #FFFF00">"testauthclientid":"systemid1@riversand.com"</span>
            }
        }
    }
}
</code>
</pre> 

### Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "b42517d4-02b1-415e-b0b6-f474c073008a",
    "taskId": "b42517d4-02b1-415e-b0b6-f474c073008a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted apiauthpreexistinguser for create with Id apiauthpreexistinguser. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "apiauthpreexistinguser",
            "create",
            "apiauthpreexistinguser"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

### Enable Pre-Existing User mapped to Client ID

Once the mapping file is created, you must enable the "preExistingUserEnabled" flag to "true" for the specific tenant. 

### Request

To enable the flag, use the REST API {{site.data.rdp_glossary.createconfig}} and send the following details in the request:

<pre>
<code>
{
"apiauth": {
  "apiAuthProviderId": "apiauth-auth0-rs",
  <span style="background-color: #FFFF00">"preExistingUserEnabled": true</span>
}
}
</code>
</pre>

### Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e8548e09-cfac-46c5-a698-e40931740757",
    "taskId": "e8548e09-cfac-46c5-a698-e40931740757"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted basetenantconfig for create with Id t1_basetenantconfig. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "basetenantconfig",
            "create",
            "t1_basetenantconfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Once the configurations are created successfully, re-load the Authentication Nodejs server.

**Verify the created configuration:**

* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html)
* If you know the details of your elastic server and the indices, then you can verify the created configuration using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

Once the authentication is successful, you can perform various API queries in the Riversand platform. For more information, see [Riversand RESTful APIs](api_getting_started.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.