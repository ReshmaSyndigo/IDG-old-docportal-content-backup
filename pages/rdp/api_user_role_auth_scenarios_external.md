---
title: "User Role and Authorization Scenarios"
sidebar: rdp_sidebar
permalink: api_user_role_auth_scenarios.html
folder: rdp
type: HowToAPI
---

## Scenario 1: Change from Vendor Role to Admin Role When Locale Authorization Model is not Present for Admin Role 

Consider that your role is changed from **vendor** to **admin**. Then authorization model gets updated for a user based on a new role. For example, if the user role is changed to admin, then for the admin role the locale authorization model is **not present**, hence the locale authorization model for the user gets **deleted** (Refer the table 2 of this scenario).

The vendor role has the following permissions:

| Current Auth Models | Current RWD Permission (Entity Level) | Current Attributes Permission | Current a1 Permission (Self) | Current r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_vendor | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

When the role is changed from vendor to admin, then the user role has the following permission:

| New Auth Models | New RWD Permission (Entity Level) | New Attributes Permission | New a1 Permission (Self) | New r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_admin | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true |
| thing_auth_admin | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true |
| **en-US_auth_admin** | **Not present** | **Not present** | **Not present** | **Not present** |
| sku_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true |
| thing_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true |
| **en-US_auth_u1** | **Deleted** | **Deleted** | **Deleted** | **Deleted** |

## Scenario 2: Change from Vendor Role to Admin Role When Entity Type Authorization Model is not Present for Admin Role

Consider that your role is changed from **vendor** to **admin**. Then authorization model gets updated for a user based on a new role. For example, if the user role is changed to admin, then the Entity Type authorization model for the admin role is **not present**, hence the entity type authorization model for that user gets **deleted** (Refer the table 2 of this scenario).

The vendor role has the following permissions:

| Current Auth Models | Current RWD Permission (Entity Level) | Current Attributes Permission | Current a1 Permission (Self) | Current r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_vendor | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 <br> | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |

When the role is changed from vendor to admin, then the user role has the following permission:

| New Auth Models | New RWD Permission (Entity Level) | New Attributes Permission | New a1 Permission (Self) | New r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| **sku_auth_admin** | **Not present** | **Not present** | **Not present** | **Not present** |
| thing_auth_admin | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true |
| en-US_auth_admin | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| **sku_auth_u1** | **Deleted** | **Deleted** | **Deleted** | **Deleted** |
| thing_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true |
| en-US_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true |

## Scenario 3: Change from Vendor Role to Admin Role When Authorization Model is Present for Admin Role

Consider that your role is changed from **vendor** to **admin**. Then the user authorization model gets updated based on a new role. When the user role is changed to admin, then all the authorization models for the admin role are **present**, hence the same gets inherited to the user authorization model (Refer the table 2 of this scenario).

The vendor role has the following permissions:

| Current Auth Models | Current RWD Permission (Entity Level) | Current Attributes Permission | Current a1 Permission (Self) | Current r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_vendor | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

When the role is changed from vendor to admin, then the user role has the following permission:

| New Auth Models | New RWD Permission (Entity Level) | New Attributes Permission | New a1 Permission (Self) | New r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_admin | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | **Not defined** | **Not defined** |
| thing_auth_admin | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | **Not defined** | **Not defined** |
| en-US_auth_admin | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **Not defined** | **Not defined** |
| sku_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | **Not defined** | **Not defined** |
| thing_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | **Not defined** | **Not defined** |
| en-US_auth_u1 | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

## Scenario 4: Change from Vendor Role to Buyer and Seller Role When Seller Authorization Model is not Present

Consider that your role is changed from the **vendor** role to **buyer** and **seller**. Then the user authorization model gets updated based on a new role. For example, if the user role is changed to buyer and seller, and the entity type, domain, and locale authorization models are not present for seller role. So, the user authorization model gets computed from buyer authorization model, hence the buyer permission gets inherited to the user (Refer the table 2 of this scenario).

The vendor role has the following permissions:

| Current Auth Models | Current RWD Permission (Entity Level) | Current Attributes Permission | Current a1 Permission (Self) | Current r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_vendor | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

When the role is changed from vendor to buyer and seller, then the user role has the following permission:

| New Auth Models | New RWD Permission (Entity Level) | New Attributes Permission | New a1 Permission (Self) | New r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_buyer | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false |
| thing_auth_buyer | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false |
| en-US_auth_buyer | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| **sku_auth_seller** | **Not present** | **Not present** | **Not present** | **Not present** |
| **thing_auth_seller** | **Not present** | **Not present** | **Not present** | **Not present** |
| **en-US_auth_seller**  | **Not present** | **Not present** | **Not present** | **Not present** |
| sku_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

## Scenario 5: Change from Vendor Role to Buyer and Seller Role When All the Authorization Models are Defined

Consider that your role is changed from the **vendor** role to **buyer** and **seller**. Then the user authorization model gets updated based on a new role. For example, if the user role is changed to buyer and seller, then all the authorization models for that user are present for both seller and buyer role, hence the same permission gets inherited to the user (Refer the table 2 of this scenario).

The vendor role has the following permissions:

| Current Auth Models | Current RWD Permission (Entity Level) | Current Attributes Permission | Current a1 Permission (Self) | Current r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_vendor | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

When the role is changed from vendor to buyer and seller, then the user has the following permission:

| New Auth Models | New RWD Permission (Entity Level) | New Attributes Permission | New a1 Permission (Self) | New r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_buyer | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false |
| thing_auth_buyer | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false |
| en-US_auth_buyer | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_seller | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | **Not defined** (it will get inherited from global attributes permission) <br> R = true <br> W = true <br> D = true | **Not defined** (Nothing to inherit as relationship permission at entity level is also not defined) |
| thing_auth_seller | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | **Not defined** (it will get inherited from global attributes permission) <br> R = true <br> W = true <br> D = true | **Not defined** (Nothing to inherit as relationship permission at entity level is also not defined) |
| en-US_auth_seller | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **Not defined** | **Not defined** |
| sku_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

## Scenario 6: Change from Vendor Role to Buyer and Seller Role When Locale and Domain Authorization Models are not Present for Buyer and Seller Role

Consider that your role is changed from the **vendor** role to **buyer** and **seller**. Then the user authorization model gets updated based on a new role. For example, if the user role is changed to buyer and seller, then Domain and Locale authorization models are **not present** for seller role and buyer role, hence the Domain and Locale authorization models get **deleted** for user (Refer the table 2 of this scenario).

The vendor role has the following permissions:

| Current Auth Models | Current RWD Permission (Entity Level) | Current Attributes Permission | Current a1 Permission (Self) | Current r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_vendor | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_vendor | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

When the role is changed from vendor to buyer and seller, then the user has the following permission:

| New Auth Models | New RWD Permission (Entity Level) | New Attributes Permission | New a1 Permission (Self) | New r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_buyer | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false |
| thing_auth_buyer | **Not present** | **Not present** | **Not present** | **Not present** |
| en-US_auth_buyer | **Not present** | **Not present** | **Not present** | **Not present** |
| sku_auth_seller | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true |
| thing_auth_seller | **Not present** | **Not present** | **Not present** | **Not present** |
| en-US_auth_seller | **Not present** | **Not present** | **Not present** | **Not present** |
| sku_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true |
| thing_auth_u1 | **Deleted** | **Deleted** | **Deleted** | **Deleted** |
| en-US_auth_u1 | **Deleted** | **Deleted** | **Deleted** | **Deleted** |

## Scenario 7: Change from Buyer and Seller Role to Seller When Entity Type Authorization Model is not Present for Seller Role

Consider that your role is changed from the **buyer** and **seller** role to the **seller**. Then the user authorization model gets updated based on a new role. For example, if the buyer and seller role is changed to the seller, then the Entity Type authorization model for the seller role is not present, hence the Entity Type authorization models get **deleted** for the user (Refer the table 2 of this scenario).

Buyer and seller role have the following permissions:

| Current Auth Models | Current RWD Permission (Entity Level) | Current Attributes Permission | Current a1 Permission (Self) | Current r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_buyer | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true |
| thing_auth_buyer | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true |
| en-US_auth_buyer | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |
| sku_auth_seller | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | **Not defined** (it will get inherited from global attributes permission) <br> R = true <br> W = true <br> D = true | **Not defined** (nothing to inherit as relationship permission at entity level is also not defined) |
| thing_auth_seller | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | **Not defined** (it will get inherited from global attributes permission) <br> R = true <br> W = true <br> D = true | **Not defined** (nothing to inherit as relationship permission at entity level is also not defined) |
| en-US_auth_seller | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **Not defined** | **Not defined** |
| sku_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| thing_auth_u1 | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = true <br> D = true | R = true <br> W = false <br> D = false |
| en-US_auth_u1 | R = true <br> W = true | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** | **R = NA** <br> **W = NA** <br> **D = NA** |

When the role is changed from buyer and seller to buyer and seller, then the user has the following permission:

| New Auth Models | New RWD Permission (Entity Level) | New Attributes Permission | New a1 Permission (Self) | New r1 Permission (Context) |
|:-------:|:-------------:|:--------:|:--------:|:--------:|
| sku_auth_seller | **Not resent** | **Not resent** | **Not resent** | **Not resent** |
| thing_auth_seller | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | **Not defined** | **Not defined** |
| en-US_auth_seller | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **Not defined** | **Not defined** |
| sku_auth_u1 | **Deleted** | **Deleted** | **Deleted** | **Deleted** |
| thing_auth_u1 | R = true <br> W = false <br> D = false | R = true <br> W = true <br> D = true | **Not defined** | **Not defined** |
| en-US_auth_u1 | R = true <br> W = false | **R = NA** <br> **W = NA** <br> **D = NA** | **Not defined** | **Not defined** |
