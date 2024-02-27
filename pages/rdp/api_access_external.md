---
title: How to Access Riversand Restful API's
sidebar: rdp_sidebar
permalink: api_access.html
folder: rdp
type: HowToAPI
---

This topic describes how to access Riversand Restful API's using Postman.

{% include callout.html content="**Note**: You can use various tools other than Postman to access Riversand Restful API's. Since Postman is the most widely used tool to access Riversand Restful API's, this topic describes how to access Riversand Restful API's using postman.
" type="primary" %}

## Prerequisites

* Download Postman - The following URL can be used to download Postman: https://www.getpostman.com/downloads/

* Make sure you are aware of the Client ID and Client Secret Keys. If you are not aware of the Client ID and Client Secret Keys, contact Riversand Ops team.

## Environment Setup

You have to set up an environment for which you wish to run the query.

1. To add an environment, click on Manage Environments on the right corner.

{% picture api_access_1.png alt="How to add an environment" %} 

{:start="2"}

2. Click on Add.

{:start="3"}

3. Specify the name of the environment on the header. Also, specify the name of the variable and its value. Click on Add. You can add any number of variables. These variables are in turn used as short forms while specifying the URL.

Example - TENANT_ID, WEBPORT 

{% picture api_access_2.png alt="How to add an environment" %}

{:start="4"}

4. Click on 'No Environment' dropdown. Select the environment that you just added. 

{% picture api_access_3.png alt="How to add an environment" %}

## Headers

Certain headers have to be setup before running a query. To add headers click on the Headers tab. Now click on Bulk Edit and add the following headers:

* Content-Type:application/json
* x-rdp-version:8.1 
* x-rdp-clientId:rdpclient 
* x-rdp-tenantId:&#123;&#123;TENANT_ID&#125;&#125;
* x-rdp-userId:&#123;&#123;USER_ID&#125;&#125;
* x-rdp-userName:system_user 
* x-rdp-firstName:Mary 
* x-rdp-lastName:Jane 
* x-rdp-userEmail:abc@riversand.com 
* x-rdp-userRoles:["admin"] 
* auth-client-id:&#123;&#123;AUTH_CLIENT_ID&#125;&#125;
* auth-client-secret:&#123;&#123;AUTH_CLIENT_SECRET&#125;&#125;

<br/>
Values mentioned for the above parameters are sample values. Please change the values of the parameters according to your requirements. Note that the above variables within the parenthesis have to be defined when setting up the [environment](#environment-setup).

Once the environment and headers are set up, you can go ahead and run the queries.