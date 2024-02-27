---
title: Create, Update and Get Connector Objects
sidebar: rdp_sidebar
permalink: api_crud.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

In general, ConnectorService has 3 endpoints - **create**, **update** and **get** to perform create/update/read of generic objects for all connector objects (state, activity). 

For deleting connector objects, **genericobjectmanageservice/delete** API is used. There is no separate endpoint created in ConnectorService. 

Note, connectorService create and update API endpoints supports single and bulk operations by handling single and multiple data objects at once, respectively. This is achieved by transforming the data object array into base64 encoded format and pass it into the query.

## Scenario 1

Create or update bulk connector objects.

### Header

The header of the request contains parameters to authenticate and authorize the request. The request is authenticated only if the API authentication is enabled in the tenant configuration. See [Authentication Services](api_auth_service.html), for more information.

To authenticate the request, you must:

* Use https and append the request with the current time-stamp in ISO_8601 format (&timeStamp="current timestamp in ISO_8601 format") Generate authToken by hashing the request using the clientAuthKey with HmacSHA256 algorithm. Pass the clientId, userId, and authToken in the header.

* You can also pass additional parameter such as ownershipData and userRoles in the request header to authorize the request. See Understanding the Request Headers, for more information.

### Request

To create or update generic objects for all connector objects (state, activity), you can use the POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/create** and **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/update**. In the databoject, specify the following details:

* Data object array in base64 encoded format in 'blob' of 'data' section.
* tenantId to identify the tenant.


<pre>
<code>
POST {TenantURL or ID}/api/connectorService/create
Headers: Content-Type: application/json
{
    "returnRequest": false,
    "dataObject":  {
                "id": "d3989cde-4bbe-4581-a7b6-1ddf9214147c",
                "name": "connectorstate",
                "type": "connectorstate",
                "properties": {
                    
                    "createdService": "genericObjectManageService",
                    "createdBy": "system_user",
                    "createdDate": "2020-03-16T17:55:50.634-0500",
                    "modifiedService": "genericObjectManageService",
                    "modifiedBy": "system_user",
                    "modifiedDate": "2020-03-31T15:07:46.659-0500"
                },
                "data": {
                    "blob": "Ww0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMjEiLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJtZG1PYmplY3RJZCI6ICJUZXN0Q29ubmVjdG9yczIxIiwNCiAgICAgICJjaGFubmVsIjogIkFtYXpvbnRlc3QiLA0KICAgICAgInN0YXRlIjogIkl0ZW0gUHVibGljYXRpb24iLA0KICAgICAgInN0YXR1cyI6ICJDb21wbGV0ZWQiLA0KICAgICAgInRlbmFudElkIjogImNvbm5lY3RvcnNlZGV2IiwNCiAgICAgICJjcmVhdGVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAiY3JlYXRlZEJ5IjogInN5c3RlbSIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAxOS0xMS0wNVQxMjoxMzo0NC42MTctMDYwMCIsDQogICAgICAibW9kaWZpZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJtb2RpZmllZEJ5IjogIm1hcnkuamFuZUByaXZlcnNhbmQuY29tIiwNCiAgICAgICJtb2RpZmllZERhdGUiOiAiMjAxOS0xMS0yN1QwNzoyNzoxNi41ODQtMDYwMCINCiAgICB9DQogIH0sDQogIHsNCiAgICAiaWQiOiAiVGVzdENvbm5lY3RvcnMyMiIsDQogICAgInR5cGUiOiAiY29ubmVjdG9yc3RhdGUiLA0KICAgICJwcm9wZXJ0aWVzIjogew0KICAgICAgImVudGl0eWlkIjogIlRlc3RDb25uZWN0b3JzMjIiLA0KICAgICAgImNoYW5uZWxpZCI6ICI3NjU3Njg3ODk5Nzg5Njc2NSIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgIml0ZW12YWxpZGF0aW9uIjogInVua25vd24iLA0KICAgICAgInRlbmFudElkIjogImNvbm5lY3RvcnNlZGV2IiwNCiAgICAgICJjcmVhdGVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAiY3JlYXRlZEJ5IjogIl9VTkFTU0lHTkVEIiwNCiAgICAgICJtb2RpZmllZFNlcnZpY2UiOiAiZ2VuZXJpY09iamVjdE1hbmFnZVNlcnZpY2UiLA0KICAgICAgIm1vZGlmaWVkQnkiOiAiX1VOQVNTSUdORUQiLA0KICAgICAgImNyZWF0ZWREYXRlIjogIjIwMTktMTEtMThUMTg6MTY6MzkuNjkyLTA2MDAiLA0KICAgICAgIm1vZGlmaWVkRGF0ZSI6ICIyMDE5LTExLTE4VDE4OjE2OjM5LjY5Mi0wNjAwIg0KICAgIH0NCiAgfSwNCiAgew0KICAgICJpZCI6ICJUZXN0Q29ubmVjdG9yczIzIiwNCiAgICAidHlwZSI6ICJjb25uZWN0b3JzdGF0ZSIsDQogICAgInByb3BlcnRpZXMiOiB7DQogICAgICAiZW50aXR5aWQiOiAiVGVzdENvbm5lY3RvcnMyMyIsDQogICAgICAiY2hhbm5lbGlkIjogIjc2NTc2ODc4OTk3ODk2NzY1IiwNCiAgICAgICJlbnRpdHl0eXBlIjogInNrdSIsDQogICAgICAiaXRlbXZhbGlkYXRpb24iOiAidW5rbm93biIsDQogICAgICAidGVuYW50SWQiOiAiY29ubmVjdG9yc2VkZXYiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAiX1VOQVNTSUdORUQiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJfVU5BU1NJR05FRCIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAxOS0xMS0xOFQxODozMjozOS44MDYtMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMTktMTEtMThUMTg6MzI6MzkuODA2LTA2MDAiDQogICAgfQ0KICB9LA0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMjQiLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJlbnRpdHlpZCI6ICJUZXN0Q29ubmVjdG9yczI0IiwNCiAgICAgICJjaGFubmVsaWQiOiAicnMtYW1hem9uc2VsbGVydXMtc2VsZiIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAic3lzdGVtX3VzZXIiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJzeXN0ZW1fdXNlciIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAyMC0wMS0yM1QyMzoyMjo0My4wODktMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMjAtMDEtMjNUMjM6MjI6NDMuMDg5LTA2MDAiDQogICAgfSwNCiAgICAiZGF0YSI6IHsNCiAgICAgICJhdHRyaWJ1dGVzIjogew0KICAgICAgICAiaXRlbVN0YXRlIjogew0KICAgICAgICAgICJ2YWx1ZXMiOiBbDQogICAgICAgICAgICB7DQogICAgICAgICAgICAgICJpZCI6ICJmMjhkY2RjNS0wMjI1LTQ0NTUtODZkOS05YjgzOWQ3MTBjNTgiLA0KICAgICAgICAgICAgICAidmFsdWUiOiAibmV3IiwNCiAgICAgICAgICAgICAgImxvY2FsZSI6ICJlbi1VUyIsDQogICAgICAgICAgICAgICJzb3VyY2UiOiAiaW50ZXJuYWwiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KICB9LA0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMjUiLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJlbnRpdHlpZCI6ICJUZXN0Q29ubmVjdG9yczI1IiwNCiAgICAgICJjaGFubmVsaWQiOiAicnMtYW1hem9uc2VsbGVydXMtc2VsZiIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAic3lzdGVtX3VzZXIiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJzeXN0ZW1fdXNlciIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAyMC0wMS0yM1QyMzoyMjo1OC43MTgtMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMjAtMDEtMjNUMjM6MjI6NTguNzE4LTA2MDAiDQogICAgfSwNCiAgICAiZGF0YSI6IHsNCiAgICAgICJhdHRyaWJ1dGVzIjogew0KICAgICAgICAiaXRlbVN0YXRlIjogew0KICAgICAgICAgICJ2YWx1ZXMiOiBbDQogICAgICAgICAgICB7DQogICAgICAgICAgICAgICJpZCI6ICIxOTE0OWI3OS04ZmFhLTQ1ZmUtODY1NS05YjNkMmFmNDNjYWMiLA0KICAgICAgICAgICAgICAidmFsdWUiOiAibmV3IiwNCiAgICAgICAgICAgICAgImxvY2FsZSI6ICJlbi1VUyIsDQogICAgICAgICAgICAgICJzb3VyY2UiOiAiaW50ZXJuYWwiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KICB9LA0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMjYiLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJlbnRpdHlpZCI6ICJUZXN0Q29ubmVjdG9yczI2IiwNCiAgICAgICJjaGFubmVsaWQiOiAicnMtYW1hem9uc2VsbGVydXMtc2VsZiIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAic3lzdGVtX3VzZXIiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJzeXN0ZW1fdXNlciIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAyMC0wMS0yM1QyMzoyMjo0OC45MTAtMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMjAtMDEtMjNUMjM6MjI6NDguOTEwLTA2MDAiDQogICAgfSwNCiAgICAiZGF0YSI6IHsNCiAgICAgICJhdHRyaWJ1dGVzIjogew0KICAgICAgICAiaXRlbVN0YXRlIjogew0KICAgICAgICAgICJ2YWx1ZXMiOiBbDQogICAgICAgICAgICB7DQogICAgICAgICAgICAgICJpZCI6ICI1OTY5OWQwNC04MDk0LTQ2M2ItOWRhMS0xNDRhNTcxN2VhY2YiLA0KICAgICAgICAgICAgICAidmFsdWUiOiAibmV3IiwNCiAgICAgICAgICAgICAgImxvY2FsZSI6ICJlbi1VUyIsDQogICAgICAgICAgICAgICJzb3VyY2UiOiAiaW50ZXJuYWwiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KICB9LA0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMjciLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJlbnRpdHlpZCI6ICJUZXN0Q29ubmVjdG9yczI3IiwNCiAgICAgICJjaGFubmVsaWQiOiAicnMtYW1hem9uc2VsbGVydXMtc2VsZiIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAic3lzdGVtX3VzZXIiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJzeXN0ZW1fdXNlciIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAyMC0wMS0yM1QyMzoyMjo0OS42ODgtMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMjAtMDEtMjNUMjM6MjI6NDkuNjg4LTA2MDAiDQogICAgfSwNCiAgICAiZGF0YSI6IHsNCiAgICAgICJhdHRyaWJ1dGVzIjogew0KICAgICAgICAiaXRlbVN0YXRlIjogew0KICAgICAgICAgICJ2YWx1ZXMiOiBbDQogICAgICAgICAgICB7DQogICAgICAgICAgICAgICJpZCI6ICI0YmQyZmVhMC0wYjNmLTQ2MzYtYTU1OS0zMWRjZDJlYTBjODUiLA0KICAgICAgICAgICAgICAidmFsdWUiOiAibmV3IiwNCiAgICAgICAgICAgICAgImxvY2FsZSI6ICJlbi1VUyIsDQogICAgICAgICAgICAgICJzb3VyY2UiOiAiaW50ZXJuYWwiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KICB9LA0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMjgiLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJlbnRpdHlpZCI6ICJUZXN0Q29ubmVjdG9yczI4IiwNCiAgICAgICJjaGFubmVsaWQiOiAicnMtYW1hem9uc2VsbGVydXMtc2VsZiIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAic3lzdGVtX3VzZXIiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJzeXN0ZW1fdXNlciIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAyMC0wMS0yM1QyMzoyMzowNi4wMjgtMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMjAtMDEtMjNUMjM6MjM6MDYuMDI4LTA2MDAiDQogICAgfSwNCiAgICAiZGF0YSI6IHsNCiAgICAgICJhdHRyaWJ1dGVzIjogew0KICAgICAgICAiaXRlbVN0YXRlIjogew0KICAgICAgICAgICJ2YWx1ZXMiOiBbDQogICAgICAgICAgICB7DQogICAgICAgICAgICAgICJpZCI6ICJiZTQxNzE2ZC1hYzAwLTQwNjUtYTZkMS00MDZkYjgwZGJjMWEiLA0KICAgICAgICAgICAgICAidmFsdWUiOiAibmV3IiwNCiAgICAgICAgICAgICAgImxvY2FsZSI6ICJlbi1VUyIsDQogICAgICAgICAgICAgICJzb3VyY2UiOiAiaW50ZXJuYWwiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KICB9LA0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMjkiLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJlbnRpdHlpZCI6ICJUZXN0Q29ubmVjdG9yczI5IiwNCiAgICAgICJjaGFubmVsaWQiOiAicnMtYW1hem9uc2VsbGVydXMtc2VsZiIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAic3lzdGVtX3VzZXIiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJzeXN0ZW1fdXNlciIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAyMC0wMS0yM1QyMzoyMjo1MS45MTgtMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMjAtMDEtMjNUMjM6MjI6NTEuOTE4LTA2MDAiDQogICAgfSwNCiAgICAiZGF0YSI6IHsNCiAgICAgICJhdHRyaWJ1dGVzIjogew0KICAgICAgICAiaXRlbVN0YXRlIjogew0KICAgICAgICAgICJ2YWx1ZXMiOiBbDQogICAgICAgICAgICB7DQogICAgICAgICAgICAgICJpZCI6ICI4ZjY1MDc5Zi1mZWY3LTQ0MTgtYmMyNy1hOWU1OWE1MzYzYjYiLA0KICAgICAgICAgICAgICAidmFsdWUiOiAibmV3IiwNCiAgICAgICAgICAgICAgImxvY2FsZSI6ICJlbi1VUyIsDQogICAgICAgICAgICAgICJzb3VyY2UiOiAiaW50ZXJuYWwiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KICB9LA0KICB7DQogICAgImlkIjogIlRlc3RDb25uZWN0b3JzMzAiLA0KICAgICJ0eXBlIjogImNvbm5lY3RvcnN0YXRlIiwNCiAgICAicHJvcGVydGllcyI6IHsNCiAgICAgICJlbnRpdHlpZCI6ICJUZXN0Q29ubmVjdG9yczMwIiwNCiAgICAgICJjaGFubmVsaWQiOiAicnMtYW1hem9uc2VsbGVydXMtc2VsZiIsDQogICAgICAiZW50aXR5dHlwZSI6ICJza3UiLA0KICAgICAgImNyZWF0ZWRTZXJ2aWNlIjogImdlbmVyaWNPYmplY3RNYW5hZ2VTZXJ2aWNlIiwNCiAgICAgICJjcmVhdGVkQnkiOiAic3lzdGVtX3VzZXIiLA0KICAgICAgIm1vZGlmaWVkU2VydmljZSI6ICJnZW5lcmljT2JqZWN0TWFuYWdlU2VydmljZSIsDQogICAgICAibW9kaWZpZWRCeSI6ICJzeXN0ZW1fdXNlciIsDQogICAgICAiY3JlYXRlZERhdGUiOiAiMjAyMC0wMS0yM1QyMzoyMjo1MC43MjgtMDYwMCIsDQogICAgICAibW9kaWZpZWREYXRlIjogIjIwMjAtMDEtMjNUMjM6MjI6NTAuNzI4LTA2MDAiDQogICAgfSwNCiAgICAiZGF0YSI6IHsNCiAgICAgICJhdHRyaWJ1dGVzIjogew0KICAgICAgICAiaXRlbVN0YXRlIjogew0KICAgICAgICAgICJ2YWx1ZXMiOiBbDQogICAgICAgICAgICB7DQogICAgICAgICAgICAgICJpZCI6ICIzMGRlM2QyYi1mNjUzLTRkMmYtYmVlZi03MzY1Yjk3ODM3ZDMiLA0KICAgICAgICAgICAgICAidmFsdWUiOiAibmV3IiwNCiAgICAgICAgICAgICAgImxvY2FsZSI6ICJlbi1VUyIsDQogICAgICAgICAgICAgICJzb3VyY2UiOiAiaW50ZXJuYWwiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9DQogICAgICB9DQogICAgfQ0KICB9DQpd"
                }
            },
    "params": {},
    "tenantId": "connectorsedev"
}
</code>
</pre>

**Response**

Returns the Connector State ID after submitting the data object as a request for further processing.


<pre>
<code>
{
    "dataObjectOperationResponse": {
        "status": "success",
        "statusDetail": {
            "connectorStateId": "47333498-48f6-46fd-a523e2fr2125e099"
        },
        "totalRecords": 0
    }
}
</code>
</pre>

Currently, it is recommended to convert only 50 data objects into base64 encoding format. In case of more than 50 data objects (say, 60), then there will be two seperate API calls for 50 objects and 10 objects, respectively.

<br/>

## Scenario 2

Get connector objects.

### Request

To get generic objects for all connector objects (state, activity), you can use the POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/get**.


<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "connectorstate"
        ],
        "propertiesCriterion": [
          {
            "entityId": {
              "exact": "TQhs_QmGShyUvFKZz0tXXA"
            }
          }
        ]
      },
      "valueContexts": [
        {
          "locale": "en-US",
          "source": "internal"
        }
      ]
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>



### Response

Returns the Connector State ID after submitting the data object as a request for further processing.

<pre>
<code>
{
  "dataObjectOperationResponse": {
    "status": "success",
    "dataObjects": [
      {
        "id": "47333498-48f6-46fd-a523e2fr2125e099",
        "type": "connectorstate",
        "properties": {
          "hub": "Acenda",
          "self": "self",
          "entityid": "ersb5Ipn98jZwXe",
          "channelid": "rs-amazonsellerus-self",
          "entitytype": "sku",
          "submissionid": "823",
          "tenantId": "connectorsedev",
          "createdService": "genericObjectManageService",
          "createdBy": "_UNASSIGNED",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "_UNASSIGNED",
          "createdDate": "2019-12-31T15:24:46.849-0600",
          "modifiedDate": "2019-12-31T15:24:46.849-0600"
        },
        "data": {
          "attributes": {
            "introState": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d2125550-8b1f-4134-8b37-20898acf223e",
                  "value": "completed"
                }
              ]
            },
            "publishState": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "47db2647-201b-4826-8f9c-661e0930778d",
                  "value": "completed"
                }
              ]
            },
            "validationState": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e1982023-d743-4483-8c40-b18209ac50ad",
                  "value": "errored"
                }
              ]
            },
            "validationError": {
              "group": [
                {
                  "sno": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "89e8a4cc-84c4-42b8-8051-26b74b7da915",
                        "value": "1"
                      }
                    ]
                  },
                  "sourceAttribute": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "35f434b2-35e0-4ebf-a16b-ef30cb8c81f3",
                        "value": "unknown"
                      }
                    ]
                  },
                  "targetAttribute": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "558bcec0-0278-4e53-8923-78c42cb0bc51",
                        "value": "unknown"
                      }
                    ]
                  },
                  "error": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "2dae607b-1b40-4bd9-8c0d-77e050050597",
                        "value": "msrp is missing"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "98971046-9305-4d0b-8b9f-1afb1394859a"
                }
              ]
            }
          }
        }
      },
      {
        "id": "47333498-48f6-46fd-a523e2fr2125e000",
        "type": "connectorstate",
        "properties": {
          "hub": "Acenda",
          "self": "self",
          "entityid": "ersb5Ipn98jZwXe",
          "channelid": "rs-amazonsellerus-self",
          "entitytype": "sku",
          "submissionid": "823",
          "tenantId": "connectorsedev",
          "createdService": "genericObjectManageService",
          "createdBy": "system",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "system",
          "createdDate": "2019-12-31T15:24:30.214-0600",
          "modifiedDate": "2019-12-31T15:24:30.214-0600"
        },
        "data": {
          "attributes": {
            "introState": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cbfb9a33-e06b-4761-8afa-73cb67d92012",
                  "value": "completed"
                }
              ]
            },
            "publishState": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "841ed42e-3550-43f5-a614-7ef4d91feac6",
                  "value": "completed"
                }
              ]
            },
            "validationState": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f123c4a0-59e6-4847-848a-ffa753098625",
                  "value": "errored"
                }
              ]
            },
            "validationError": {
              "group": [
                {
                  "sno": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "79ac90f1-050c-4822-827a-8625bc11c324",
                        "value": "1"
                      }
                    ]
                  },
                  "sourceAttribute": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "fda20b36-0b2a-4368-a746-5841ef1a7d3d",
                        "value": "unknown"
                      }
                    ]
                  },
                  "targetAttribute": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "de4a8e9b-fefd-4f84-80e3-2ef4053cc458",
                        "value": "unknown"
                      }
                    ]
                  },
                  "error": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "1a4df78b-d53f-4478-a327-0c9f3911ff99",
                        "value": "msrp is missing"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e484ac1a-bd7c-422d-a85d-fa9dcfcaec75"
                }
              ]
            }
          }
        }
      }
    ],
    "totalRecords": 2
  }
}
</code>
</pre>





