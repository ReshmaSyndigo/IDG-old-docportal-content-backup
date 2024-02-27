---
title: "Compute Authorization Models"
sidebar: rdp_sidebar
permalink: api_compute_auth_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

The Riversand Platform allows you to assign any role (admin, vendor, buyer, seller, and so on) to a user and update the role based on the requirements. 

If the user role changes then the authorization model gets updated based on the new role. You have the option to compute the authorization model based on the role.

For example, consider that a vendor role is assigned based on which you have the authorization model (say, sku_auth_vendor) for each entity type, domain, locale and so on. That is, you have the authorization to access a Vendor SKU. If your role is changed to admin, then the authorization for vendor role gets changed and a new authorization model gets computed, based on the new role. For more information, see the [User Role and Authorization Scenarios](api_user_role_auth_scenarios.html).

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.computeauthmodel}}** to compute authorization models for a user. 

To support multiple roles per user, the authorization at runtime is transitioned from role-based models to user-based models.

When a user login for the first time, authorization models are auto-generated based on the role-level authorization models, as per the role that the user is mapped to.

The user authorization models are recomputed whenever
* Corresponding role authorization model(s)
* Roles that the user is mapped to.

The user authorization models are internally computed by merging the permissions of the roles the user is mapped to.

{% include callout.html content="**Notes:** 
 * The user authorization models are auto generated. It is not recommended to manually change/create the user authorization models. However, in cases where there is a change in the authorization model during migration or when impact processing is disabled, **computeauthmodel** needs to be called explicitly.
 * The role authorization model gets inherited for the user authorization model. For example, if any role model is not present in a particular authorization model then it gets automatically deleted in the user role authorization model.
 " type="primary" %}

## Scenario

To compute user authorization models for infodev_user@riversand.com. 

{% include snippets/header.html %}

## Request

To compute user authorization models, you can use the REST API {{site.data.rdp_glossary.computeauthmodel}}. In the request send the following details:

In the authorization object, 
* Specify the user id of the user whose authorization models are to be computed.

<pre>
<code>
POST **{{site.data.rdp_glossary.computeauthmodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "params": {
    <span style="background-color: #FFFF00">"userId": "infodev_user@riversand.com"</span>
  }
}
</code>
</pre> 

## Response

The user authorization model is computed based on the roles the user is mapped to.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "1cd6fd78-28d7-4f7b-ae8e-b76fb361db35"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Entity has been submitted for delete with entity Id : generic_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : image_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : sku_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : referenceData_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : thing_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : bundle_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : digitalAsset_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : contextmapping_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : product_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : sysIntegrationModel_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : bundle_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : image_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : contextmapping_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : digitalAsset_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : sku_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : thing_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : product_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : sysIntegrationModel_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : generic_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : referenceData_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for delete with entity Id : attributemapping_authorizationModel_infodev_user@riversand.com. Please check back after 1min",
          "messageCode": "I0015",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : en-US_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : attributemapping_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : fr-FR_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Entity has been submitted for create with entity Id : de-DE_authorizationModel_infodev_user@riversand.com. Please check back after 1 min",
          "messageCode": "I0011",
          "messageType": "success"
        },
        {
          "message": "Total authorization models for user: infodev_user@riversand.com after user role merged: 15",
          "messageCode": "I0081",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.