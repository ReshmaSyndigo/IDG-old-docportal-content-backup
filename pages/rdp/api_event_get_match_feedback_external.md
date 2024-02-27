---
title: Get Match Feedback Event
sidebar: rdp_sidebar
permalink: api_event_get_match_feedback.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get the match feedback event. 

By default, the **Match Feedback Collection** is not disabled. To enable, see [Configure Match Feedback Collection](/{{site.data.rdp_links_version.APP}}/dm_config_match_feedback.html).

## Scenario

To get match feedback event.

## Request

In the request below, you are getting the match feedback event.

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "matchfeedbackevent"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre>

## Response

The response shows the match configuration object is created successfully.

{% include callout.html content="**Notes:** 
* 'modelVersion' parameter cannot be edited.
* 'totalrecords' parameter displays the count of matched entities only.
* Existing entities that does not have internal attributes or has not gone through the standardization keyword rule consists of 'identifier' and 'score' attribute in the match response. 
* 'isProbabilisticEnabled' flag is used internally and cannot be configured elsewhere.
" type="primary" %}

<pre><code>
{
  "id": "matchfeedbackevent_rsnG6EV7DFmrKR",
  "type": "matchfeedbackevent",
  "properties": {
    "createdService": "eventManageService",
    "createdBy": "admint1@riversand.com_user",
    "modifiedService": "eventManageService",
    "modifiedBy": "admint1@riversand.com_user",
    "createdDate": "2021-07-07T08:27:02.772-0500",
    "modifiedDate": "2021-07-07T08:27:02.772-0500"
  },
  "data": {
    "attributes": {
      "identifier": {
        "values": [
          {
            "id": "6e9e9417-87f8-4633-8954-3735bcb97643",
            "value": "ers1WXhUJKPkcMs",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "eventType": {
        "values": [
          {
            "id": "f3f16adb-9109-47fa-852d-d1510a54e3e1",
            "value": "MATCH_PROCESS",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "eventSubType": {
        "values": [
          {
            "id": "9f3a7565-d0b4-4c07-a880-fcc258d2b042",
            "value": "MATCH_FEEDBACK_COLLECTION",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "modelversion": {
        "values": [
          {
            "id": "9d62dc9c-f4f0-4064-84b3-37f92683aa7f",
            "value": "1.0.0",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "matchstatus": {
        "values": [
          {
            "id": "02724976-19eb-485b-b7ff-9490351bdb58",
            "value": "nomatch",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "clusters": {
        "group": [
          {
            "id": "40fc8fd6-5aed-4344-9407-7f1a6fd72f07",
            "locale": "en-US",
            "source": "internal",
            "identifier": {
              "values": [
                {
                  "id": "6e457c3b-f143-4189-b9b3-ffb430211c8d",
                  "value": "poppyholdinginc001",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "score": {
              "values": [
                {
                  "id": "9f47be8e-d09d-4942-b0c3-f92de0ca89ed",
                  "value": 93.53787899017334,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_businessname": {
              "group": [
                {
                  "id": "e4a8786b-28fa-47e2-9d09-2f76fb2ae52b",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "37eb6187-b828-4d0c-91d2-11f508ce1ee9",
                        "value": "low",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "17f70b0e-760e-463b-8b83-92699712fcce",
                        "value": "poppy golf services",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_universalbusinessnumber": {
              "group": [
                {
                  "id": "b3e30b91-33f8-47cf-af19-5c7a4beba922",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "30002046-bbbb-47e0-9588-b99bb015684a",
                        "value": "medium",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "4c14fe91-f677-4ef5-9368-74cc9e5821f1",
                        "value": 3453123499,
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "suspectstatus": {
              "values": [
                {
                  "id": "ce9bb502-667d-4cd9-9281-7f132b3d694a",
                  "value": "nomatch",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          {
            "id": "23b05aa2-cba4-4132-91b4-413057c64bd6",
            "locale": "en-US",
            "source": "internal",
            "identifier": {
              "values": [
                {
                  "id": "140c6886-7a5d-4d6d-88c4-f215075c8f15",
                  "value": "poppyridgeinc002",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "score": {
              "values": [
                {
                  "id": "026def7b-cd35-4214-8b78-0b2a7fa7c8d2",
                  "value": 93.53787899017334,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_businessname": {
              "group": [
                {
                  "id": "e7e0b3b7-f3b6-40ac-b96e-ad540ddab60e",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "46b99a36-7b17-4ea2-a934-b203d270a54f",
                        "value": "low",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "3ec6dd17-0ebc-4956-9a9d-7effc21ff153",
                        "value": "poppy golf services",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_universalbusinessnumber": {
              "group": [
                {
                  "id": "46232373-803a-42df-bc0b-00a9e6555eaa",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "7dcb851b-7ce5-40f1-b15c-622d6ae87877",
                        "value": "medium",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "55417fdd-9140-45a1-b19d-1b8b000e1068",
                        "value": 3453123499,
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "suspectstatus": {
              "values": [
                {
                  "id": "e10ce66e-5b44-41e2-9439-20e4fd50c988",
                  "value": "nomatch",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          {
            "id": "a851b10e-a84a-478b-9eee-96349477f28c",
            "locale": "en-US",
            "source": "internal",
            "companyid": {
              "values": [
                {
                  "id": "bddda6cf-d0b7-4047-ac19-654ae02e1783",
                  "value": 3453123499,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "orgname": {
              "values": [
                {
                  "id": "f740e6f9-5d16-4748-be0c-34d51bd97207",
                  "value": "Poppy golf services",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "suspectstatus": {
              "values": [
                {
                  "id": "137f1a86-dbc9-4944-b656-c480fe7dcee9",
                  "value": "nomatch",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
</code></pre>






