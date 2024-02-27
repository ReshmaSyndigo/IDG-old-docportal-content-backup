---
title: Supportability Troubleshooting Queries
sidebar: rdp_sidebar
permalink: api_troubleshooting_queries.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The following list provides the most commonly used scenarios with sample json requests:

|Sl.No.|Scenario|Scenario Reference|
|--- |--- |--- |
|1|UI Configs|[UI Configuration Business Use case](#ui-configuration-business-use-case)|
|2|Match Config|[Match Configuration Business Use case](#match-configuration-business-use-case)|
|3|Integration Profiles|[Integration Profiles Use Case](#integration-profiles-use-case)|
|4|Models|[Use Case on Models](#use-case-on-models)|
|5|WF Definition|[Workflow Definition and Mapping](#workflow-definition-and-mapping)|
|6|BR/ BC|[Business Rules & Business Condition](#business-rules-&-business-condition)|
|7|Roles/ User|[Roles and Users](#roles-and-users)|

|Sl.No|Scenario|Scenario Reference|
|--- |--- |--- |
|1|Classification|[Classification](#classification)|
|2|Coalesce|[Coalesce](#coalesce)|
|3|WF/ BR / BC|[Workflow](#workflow)|
|4|Entity History|[Entity History](#entity-history)|
|5|Integrations|[Tracking of Integrations jobs](#tracking-of-integrations-jobs)|
|6|Entity Get Variations|[Variations of Entity Get](#variations-of-entity-get)|
|7|Asset|[Asset](#asset)|
|8|Entity Relationship|[Entity Relationship](#entity-relationship)|
|9|Reference Entity|[Reference Entity](#reference-entity)|

## Configurations, Profiles and Model specific scenarios

### UI Configuration Business Use case

|Sl.No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get all UI Configurations|To get any UI Configurations|<a href="files/01-Configurations/06 UI Configurations/1.1.1 Get UI Config.json" download>Get UI Config.json</a>|
|2|Update UI Configuration|To update any UI Configurations|<a href="files/01-Configurations/06 UI Configurations/1.2.1 Update UI Config.json" download>Update UI Config.json</a>|

### Match Configuration Business Use case

|Sl.No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get Match Configuration|To get Match Configuration|<a href="files/01-Configurations/03 Match Config/2.1.1 Get Match Service Config.json" download>Get Match Service Config.json</a>|

### Integration Profiles Use Case

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get list of all Integration Profiles (inbound, outbound)|To get all COP Profiles|<a href="files/01-Configurations/02 Integration Profiles/3.1.3 Get All COP Profiles.json" download>Get All COP Profiles.json</a>|
|2|Get list of all Integration Profiles (inbound, outbound) with attribute criterion||
|3|Get Integration Profile Configuration (By Id or Name)|To get COP Profile by ID or Name|<a href="files/01-Configurations/02 Integration Profiles/3.1.1 Get Integration Profile By Name.json" download>Get Integration Profile By Name.json</a>|
|4|Get all Export Profiles|To get all Export Profiles|<a href="files/01-Configurations/02 Integration Profiles/3.1.3 Get All COP Profiles.json" download>Get All COP Profiles.json</a>|
|5|Get all Imports Profiles|To get all Import Profiles|<a href="files/01-Configurations/02 Integration Profiles/3.1.4 Get All Export Profiles.json" download>Get All Export Profiles.json</a>|
|6|Collect Service - Kinesis|To collect kinesis services|<a href="files/01-Configurations/02 Integration Profiles/3.2.1 Collect Service - Kinesis.json" download>Collect Service - Kinesis.json</a>|
|7|Create/ Update COP Profiles|To update/create COP profiles|<a href="files/01-Configurations/02 Integration Profiles/3.2.2 Create or Update COP Profile.json" download>Create or Update COP Profile.json</a>|

### Use Case on Models

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get All Entity Types by Domain|To get all types of entities by domain|<a href="files/01-Configurations/04 Models/4.3.1.1 Get All Entity Types by Domain.json" download>Get All Entity Types by Domain.json</a>|
|2|Get Entity Manage Model|To get entity manage models|<a href="files/01-Configurations/04 Models/4.3.1.2 Get Entity Manage Model.json" download>Get Entity Manage Model.json</a>|
|3|Get Validation Model|To get validation models|<a href="files/01-Configurations/04 Models/4.4.1.1 Get Validation Model.json" download>Get Validation Model.json</a>|
|4|Get Default Value Model|To get default value models|<a href="files/01-Configurations/04 Models/4.6.1.1 Get Default Value Model.json" download>Get Default Value Model.json</a>|
|5|Get Display Model|To get display models|<a href="files/01-Configurations/04 Models/4.7.1.1 Get Display Model.json" download>Get Display Model.json</a>|
|6|Get Composite Model|To get composite model|<a href="files/01-Configurations/04 Models/4.8.1.1 Get Composite Model.json" download>Get Composite Model.json</a>|
|7|Get Attribute Level Permission|To get attribute level permission|<a href="files/01-Configurations/04 Models/4.8.1.2 Get Attribute Level Permission.json" download>Get Attribute Level Permission.json</a>|
|8|Get Attribute Model|To get attribute models|<a href="files/01-Configurations/04 Models/4.8.1.3 Get Attribute Model.json" download>Get Attribute Model.json</a>|
|9|Get All Graph Process Models|To get all graph process models|<a href="files/01-Configurations/04 Models/4.9.1.1 Get All Graph Process Models.json" download>Get All Graph Process Models.json</a>|
|10|Get Authorization Model|To get authorization models|<a href="files/01-Configurations/04 Models/4.9.1.2 Get Authorization Model.json" download>Get Authorization Model.json</a>|
|11|Get Mapped Attribute under Specified Category|To Get Mapped Attribute under Specified Category|<a href="files/01-Configurations/04 Models/4.1.1.1 Get Mapped Attribute under Specified Category.json" download>Get Mapped Attribute under Specified Category.json</a>|

### Workflow Definition and Mapping

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get Workflow Definition|To get Workflow definition|<a href="files/01-Configurations/06 WF Definition/5.1.2 Get Workflow Definition.json" download>Get Workflow Definition.json</a>|
|2|Get Workflow Definition Mapping|To get Workflow definition mapping|<a href="files/01-Configurations/06 WF Definition/5.1.1 Get Workflow Definition Mapping.json" download>Get Workflow Definition Mapping.json</a>|
|3|Get rule context mappings|To get rule context mappings|<a href="files/01-Configurations/06 WF Definition/5.1.3 Get Rule Context Mappings.json" download>Get Rule Context Mappings.json</a>|

### Business Rules & Business Condition

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get disabled business rule|To get disabled business rules|<a href="files/01-Configurations/01 Configuration/01 Business Rules and Business Conditions/Get Disabled Business Rule.json" download>Get Disabled Business Rule.json</a>
|2|Get a Business Rule by ID|To get business rule by ID|<a href="files/01-Configurations/01 Configuration/01 Business Rules and Business Conditions/Get Business Rule.json" download>Get Business Rule.json</a>|
|3|Get a Business Condition by ID|To get business condition by ID|<a href="files/01-Configurations/01 Configuration/01 Business Rules and Business Conditions/Get Business Condition.json" download>Get Business Condition.json</a>|

### Roles and Users

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get List of all available users in system|To get available users in system|<a href="files/01-Configurations/05 Roles and User/7.1.1 Get All Users.json" download>Get All Users.json</a>|
|2|Get List of all available Roles in the system|To get available roles in system|<a href="files/01-Configurations/05 Roles and User/7.1.2 Get Roles.json" download>Get Roles.json</a>|

### Entity and Integration job specific scenarios

#### Classification

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get entity for a specific classification|To get entities for specific classification|<a href="files/02-Entity and Integration Job/02 Classification/1.1.1 Get Entity for a Specific Classification.json" download>Get Entity for a Specific Classification.json</a>|
|2|Get entity for a specific classification & Locale|To get entities for specific classification and locale|<a href="files/02-Entity and Integration Job/02 Classification/1.1.2 Get Entity for a Specific Classification & Locale.json" download>Get Entity for a Specific Classification.json</a>|
|3|Get entity which does not belongs to any classification|Not available||

#### Coalesce

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Verify Data Coalesce @ Channel when Given @ Country|To verify data coalesce at channel when given in country|<a href="files/02-Entity and Integration Job/03 Coalesce/2.1.2 Verify Data Coalesce @ Channel when Given @ Country.json" download>Verify Data Coalesce @ Channel when Given @ Country.json</a>|
|2|Verify Data Coalesce @ Country / Channel when given @ Self|To verify data coalesce at country or channel when given at self|<a href="files/02-Entity and Integration Job/03 Coalesce/2.1.3 Verify Data Coalesce @ Country - Channel when given @ Self.json" download>Verify Data Coalesce @ Country - Channel when given @ Self.json</a>|

#### Workflow

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get list of Entities in a Workflow Step based on status|To get entities from workflow step based on status|<a href="files/02-Entity and Integration Job/07 Governance/3.1.8 Get Entities in a Worklow Step Based on Status.json" download>3.1.8 Get Entities in a Worklow Step Based on Status.json</a>|
|2|Get list of Entities in a Workflow|To get entities from workflow|<a href="files/02-Entity and Integration Job/07 Governance/3.1.4 Get Entities in a Workflow.json" download>Get Entities in a Workflow.json</a>|
|3|Get list of Entities in a Workflow Step|To get entities from workflow step|<a href="files/02-Entity and Integration Job/07 Governance/3.1.3 Get Entities in a Workflow Step.json" download>Get Entities in a Workflow Step.json</a>|
|4|Get list of Entities in a Workflow Step Un-Assigned|To get entities from workflow step un-assigned|<a href="files/02-Entity and Integration Job/07 Governance/3.1.1 Get Entities in a Workflow Step Un-Assigned.json" download>Get Entities in a Workflow Step Un-Assigned.json</a>|
|5|Re-evaluate an entity to create / update govern entity|To re-evaluate entity to create / update govern entity|<a href="files/02-Entity and Integration Job/07 Governance/3.2.1 Re-Evaluate an Entity to Create - Update Govern Entity.json" download>Re-Evaluate an Entity to Create - Update Govern Entity.json</a>|
|6|Resume Workflow|To resume workflow|<a href="files/02-Entity and Integration Job/07 Governance/3.2.3 Resume Workflow.json" download>Resume Workflow.json</a>|
|7|Delete Entity from Workflow|To delete entity from workflow|<a href="files/02-Entity and Integration Job/07 Governance/3.3.2 Delete a Govern Entity.json" download>Delete a Govern Entity.json</a>|
|8|Delete an Entity from Workflow by Entity ID|To delete entity from workflow by ID|<a href="files/02-Entity and Integration Job/07 Governance/3.3.1 Delete an Entity from Workflow.json" download>Delete an Entity from Workflow.json</a>|
|9|Remove Attribute of a Govern Entity|To remove govern entity attribute|<a href="files/02-Entity and Integration Job/07 Governance/3.2.2 Remove Attribute of a Govern Entity.json" download>Remove Attribute of a Govern Entity.json</a>|
|10|Get Entities in a Workflow Step Assigned to User/Role|To get entities in workflow step assigned to user/role|<a href="files/02-Entity and Integration Job/07 Governance/3.1.2 Get Entities in a Workflow Step Assigned to User-Role.json" download>Get Entities in a Workflow Step Assigned to User-Role.json</a>|
|11|Get Entities in Workflow Step by Workflow Entered Date|To get entities in workflow step by workflow entered date|<a href="files/02-Entity and Integration Job/07 Governance/3.1.5 Get Entities in Workflow Step by Workflow Entered Date.json" download>Get Entities in Workflow Step by Workflow Entered Date.json</a>|
|12|Get Entities by Workflow and Specific Duration|To get entities by workflow and specific duration|<a href="files/02-Entity and Integration Job/07 Governance/3.1.7 Get Entities by Workflow and Specific Duration.json" download>Get Entities by Workflow and Specific Duration.json</a>|
|13|Get Govern Entity based on Workflow Name and Attribute|To get govern entities based on workflow name and attribute|<a href="files/02-Entity and Integration Job/07 Governance/3.1.9 Get Govern Entity based on Workflow Name and Attribute.json" download>Get Govern Entity based on Workflow Name and Attribute.json</a>|

#### Entity History

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get History of Entity for a Specific Duration|To get history of entity for specific duration|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.1 Get History of Entity for a Specific Duration.json" download>Get History of Entity for a Specific Duration.json</a>|
|2|Get History of an Entity|To get history of an entity|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.2 Get History of an Entity.json" download>Get History of an Entity.json</a>|
|3|Get Entities Created/Updated By User for a Specific Duration|To get entities created/updated by user for specific duration|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.3 Get Entities Created-Updated By User for a Specific Duration.json" download>Get Entities Created-Updated By User for a Specific Duration.json</a>|
|4|Get Entities Updated By Source (UI) for a Specific Duration|To get entities updated by source (UI) for specific duration|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.4 Get Entities Updated By Source (UI) for a Specific Duration.json" download>Get Entities Updated By Source (UI) for a Specific Duration.json</a>|
|5|Get Entities Created By Source (UI) for a Specific Duration|To get entities created by source (UI) for specific duration|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.5 Get Entities Created By Source (UI) for a Specific Duration.json" download>Get Entities Created By Source (UI) for a Specific Duration.json</a>|
|6|Get Entities Updated By Source (Import) for a Specific Duration|To get entities updated by source (Import) for specific duration|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.6 Get Entities Updated By Source (Import) for a Specific Duration.json" download>Get Entities Updated By Source (Import) for a Specific Duration.json</a>|
|7|Get Entities Created By Source (Import) for a Specific Duration|To get entities created by source (Import) for specific duration|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.7 Get Entities Created By Source (Import) for a Specific Duration.json" download>Get Entities Created By Source (Import) for a Specific Duration.json</a>|
|8|Get Task Summary Object|To get task summary object|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.8 Get Total Create - Update Events for a Specific Duration.json" download>Get Total Create - Update Events for a Specific Duration.json</a>|
|9|Get Successfully Published Entities|To get successfully published entities|<a href="files/02-Entity and Integration Job/05 Entity History/4.1.9 Get all entities modified - created by a task.json" download>Get all entities modified - created by a task.json</a>|
|10|Get External Event for a Specific Duration|To get external events for specific duration||
|11|Get ADMIN External Event by Task ID|To get admin external events by Task ID||
|12|Get All External Events using Task ID|To get all external events by Task ID||
|13|Get Govern Event for a Specific Entity|To get govern event for specific entity|<a href="files/02-Entity and Integration Job/07 Governance/4.1.13 Get Govern Event for a Specific Entity.json" download>Get Govern Event for a Specific Entity.json</a>|
|14|Get Govern Event for a Specific Duration|To get govern events for specific duration|<a href="files/02-Entity and Integration Job/07 Governance/4.1.14 Get Govern Event for a Specific Duration.json" download>Get Govern Event for a Specific Duration.json</a>|
|15|Get All Govern Events|To get all govern events|<a href="files/02-Entity and Integration Job/07 Governance/4.1.15 Get All Govern Events.json" download>Get All Govern Events.json</a>|
|16|Get Total Create / Update Events for a Specific Duration|To get total create/update events for specific duration||
|17|Get Manage Events by Task ID|To get manage events by Task ID||
|18|Get Entity Manage Events for a Specific Entity|To get manage events for specific entity||
|19|Get Entity Mange Events for a Specific Duration|To get manage events for specific duration||
|20|Get All Entity Mange Events|To get all manage events||

#### Tracking of Integrations jobs

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get Total No. of Completed Imports for a Specific Duration Based on Profile|To get Total No. of Completed Imports for a Specific Duration Based on Profile|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.1 Get Total No. of Completed Imports for a Specific Duration Based on Profile.json" download>Get Total No. of Completed Imports for a Specific Duration Based on Profile.json</a>|
|2|Check whether there are any Errors in sending the File to Riversand Platform|To Check whether there are any Errors in sending the File to Riversand Platform|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.2 Check whether there are any Errors in sending the File to RDP.json" download>Check whether there are any Errors in sending the File to Riversand Platform.json</a>|
|3|Get Total No. of Completed Imports for a Specific Duration|To Get Total No. of Completed Imports for a Specific Duration|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.3 Get Total No. of Completed Imports for a Specific Duration.json" download>Get Total No. of Completed Imports for a Specific Duration.json</a>|
|4|Check whether Riversand Platform Received the Message|To Check whether Riversand Platform Received the Message|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.4 Check whether Riversand Platform Received the Message.json" download>Check whether Riversand Platform Received the Message.json</a>|
|5|Check whether System Transformed the File Based on Task ID|To Check whether System Transformed the File Based on Task ID|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.5 Check whether System Transformed the File Based on Task ID.json" download>Check whether System Transformed the File Based on Task ID.json</a>|
|6|Check whether System Picked the File or Not Based on Task ID|To Check whether System Picked the File or Not Based on Task ID|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.6 Check whether System Picked the File or Not Based on Task ID.json" download>Check whether System Picked the File or Not Based on Task ID.json</a>|
|7|Get Changes made to Entities from a Specifc Import by Task ID|To Get Changes made to Entities from a Specifc Import by Task ID|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.7 Get Changes made to Entites from a Specifc Import by Task ID.json" download>Get Changes made to Entites from a Specifc Import by Task ID.json</a>|
|8|Get Kinesis Sequence Number by Task ID|To Get Kinesis Sequence Number by Task ID|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.9 Get Kinesis Sequence Number by Task ID.json" download>Get Kinesis Sequence Number by Task ID.json</a>|
|9|Get Import Details Based on Kinesis Sequence Number|To Get Import Details Based on Kinesis Sequence Number|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.10 Get Import Details Based on Kinesis Sequence Number.json" download>Get Import Details Based on Kinesis Sequence Number.json</a>|
|10|Get Source File which was Imported Through Kinesis ID|To Get Source File which was Imported Through Kinesis ID|<a href="files/02-Entity and Integration Job/08 Integrations/5.1.1.11 Get Source File which was Imported Through Kinesis ID.json" download>Get Source File which was Imported Through Kinesis ID.json</a>|
|11|Get Published Assets in a Specific Duration|To Get Published Assets in a Specific Duration|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.1 Get Published Assets in a Specific Duration.json" download>Get Published Assets in a Specific Duration.json</a>|
|12|Get Total No. of Completed Exports for a Specific Duration|To Get Total No. of Completed Exports for a Specific Duration|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.2 Get Total No. of Completed Exports for a Specific Duration.json" download>Get Get Total No. of Completed Exports for a Specific Duration.json</a>|
|13|Get Binary Object of Published Entity|To Get Binary Object of Published Entity|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.3 Get Binary Object of Published Entity.json" download>Get Binary Object of Published Entity.json</a>|
|14|Get Total No. of Completed Exports for a Specific Duration Based on Profile|To Get Total No. of Completed Exports for a Specific Duration Based on Profile|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.4 Get Total No. of Completed Exports for a Specific Duration Based on Profile.json" download>Get Total No. of Completed Exports for a Specific Duration Based on Profile.json</a>|
|15|Get Published Entitiy by Entity ID|To Get Published Entitiy by Entity ID|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.5 Get Published Entitiy by Entity ID.json" download>Get Published Entitiy by Entity ID.json</a>|
|16|Get Published Entities in a Specific Duration|To Get Published Entities in a Specific Duration|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.6 Get Published Entities in a Specific Duration.json" download>Get Published Entities in a Specific Duration.json</a>|
|17|Get Total No. of Entities Published in a Specific Interval|To Get Total No. of Entities Published in a Specific Interval|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.7 Get Total No. of Entities Published in a Specific Interval.json" download>Get Total No. of Entities Published in a Specific Interval.json</a>|
|18|Get Total No. of Entities Published in a Specific Interval for a Specific Profile|To Get Total No. of Entities Published in a Specific Interval for a Specific Profile|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.8 Get Total No. of Entities Published in a Specific Interval for a Specific Profile.json" download>Get Total No. of Entities Published in a Specific Interval for a Specific Profile.json</a>|
|19|Check whether Entity Got Published for a Specific Duration|To Check whether Entity Got Published for a Specific Duration|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.9 Check whether Entity Got Published for a Specific Duration.json" download>Check whether Entity Got Published for a Specific Duration.json</a>|
|20|Get Entities Published Since <Datetime Stamp>|To Get Entities Published Since <Datetime Stamp>|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.1.10 Get Entities Published Since Datetime Stamp.json" download>Get Entities Published Since Datetime Stamp.json</a>|
|21|TRIGGER Live Publish|To TRIGGER Live Publish|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.3.1 TRIGGER Live Publish.json" download>TRIGGER Live Publish.json</a>|
|22|TRIGGER Live Publish for Specific Profile|To TRIGGER Live Publish for Specific Profile|<a href="files/02-Entity and Integration Job/08 Integrations/5.2.3.2 TRIGGER Live Publish for Specific Profile.json" download>TRIGGER Live Publish for Specific Profile.json</a>|

#### Variations of Entity Get

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get Entity by ID|To Get Entity by ID|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.14 Get Entity By ID.json" download>Get Entity By ID.json</a>|
|2|Get entities based on ids|To Get entities based on ids|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.13 Get Entities By IDs.json" download>Get Entities By IDs.json</a>|
|3|Get list of Entities of a given Entity Type|To Get list of Entities of a given Entity Type|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.10 Get Entities of a Given Entity Type.json" download>Get Entities of a Given Entity Type.json</a>|
|4|Get total created entities for given entity type for a specific duration|To Get total created entities for given entity type for a specific duration|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.9 Get Total Created Entities for Specific Duration.json" download>Get Total Created Entities for Specific Duration.json</a>|
|5|Get total updated entities for given entity type for a specific duration|To Get total updated entities for given entity type for a specific duration|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.8 Get Total Updated Entities for Specific Duration.json" download>Get Total Updated Entities for Specific Duration.json</a>|
|6|Get list of Entities of a given Entity Type based on an attribute's value|To Get list of Entities of a given Entity Type based on an attribute's value|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.7 Get Entities Based On Attribute Value.json" download>Get Entities Based On Attribute Value.json</a>|
|7|Get Entities which has value for an attribute|To Get Entities which has value for an attribute|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.5 Get Entities which 'has value' for an Attribute.json" download>Get Entities which 'has value' for an Attribute.json</a>|
|8|Get Entities which does not have value for an attribute|To Get Entities which does not have value for an attribute|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.4 Get Entities which 'Does Not Have Value' for an Attribute.json" download>Get Entities which 'Does Not Have Value' for an Attribute.json</a>|
|9|Remove attribute data of an Entity|To Remove attribute data of an Entity|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.2.1 Remove Attribute of an Entity.json" download>Remove Attribute of an Entity.json</a>|
|10|Get list of entities CONTAINS a specific value for an attribute|To Get list of entities CONTAINS a specific value for an attribute|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.3 Get Entities CONTAINS a Specific Value for an Attribute.json" download>Get Entities CONTAINS a Specific Value for an Attribute.json</a>|
|11|Get entity based on a specific KEYWORD|To Get entity based on a specific KEYWORD|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.2 Get Entities Based on a Specific KEYWORD.json" download>Get Entities Based on a Specific KEYWORD.json</a>|
|12|Get List of entities created By Source (Import) for a specific duration|To Get List of entities created By Source (Import) for a specific duration||
|13|Get List of entities created By Source (UI) for a specific duration|To Get List of entities created By Source (UI) for a specific duration||
|14|Get List of entities updated By Source (UI) for a specific duration|To Get List of entities updated By Source (UI) for a specific duration||
|15|Get List of entities updated By Source (Import) for a specific duration|To Get List of entities updated By Source (Import) for a specific duration||
|16|Get Entities Based On Specific Locale|To Get Entities Based On Specific Locale|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.1 Get Entities Based On Specific Locale.json" download> Get Entities Based On Specific Locale.json</a>|
|17|Check whether entity got published for a specific duration|To Check whether entity got published for a specific duration||
|18|Get All Taxonomy|To get all Taxonomy|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.15 Get All Taxonomy.json" download>Get All Taxonomy.json</a>|
|19|Get Category by ID|To get category by ID|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.16 Get Category by ID.json" download>Get Category by ID.json</a>|
|20|Get All Categories under Specified Taxonomy|To Get All Categories under Specified Taxonomy|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.16 Get All Categories under Specified Taxonomy.json" download>Get All Categories under Specified Taxonomy.json</a>|
|21|Get All Direct Child Categories under Specified Category|To Get All Direct Child Categories under Specified Category|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.17 Get All Direct Child Categories under Specified Category.json" download>Get All Direct Child Categories under Specified Category.json</a>|
|22|Get All Child Categories under Specified Category|To Get All Child Categories under Specified Category|<a href="files/02-Entity and Integration Job/04 Entity Get Variations/6.1.18 Get All Child Categories under Specified Category.json" download>Get All Child Categories under Specified Category.json</a>|

#### Asset

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get IMAGES without an actual image in PIM|To Get IMAGES without an actual image in PIM|<a href="files/02-Entity and Integration Job/01 Asset/7.1.1 Get Images Without an Actual Image in PIM.json" download> Get Images Without an Actual Image in PIM.json</a>|

#### Entity Relationship

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get Entities with Specific Relationship|To Get Entities with Specific Relationship|<a href="files/02-Entity and Integration Job/06 Entity Relationship/8.1.6 Get Entities with Specific Relationship.json" download> Get Entities with Specific Relationship.json</a>|
|2|Get Entities with No Relationship|To Get Entities with No Relationship|<a href="files/02-Entity and Integration Job/06 Entity Relationship/8.1.5 Get Entities with No Relationship.json" download> Get Entities with No Relationship.json</a>|
|3|Get Entities by Relationship Attributes|To Get Entities by Relationship Attributes|<a href="files/02-Entity and Integration Job/06 Entity Relationship/8.1.4 Get Entities by Relationship Attributes.json" download> Get Entities by Relationship Attributes.json</a>|
|4|Get Entities Based on Relationship Attributes for a Specific Locale|To Get Entities Based on Relationship Attributes for a Specific Locale|<a href="files/02-Entity and Integration Job/06 Entity Relationship/8.1.2 Get Entities Based on Relationship Attributes for a Specific Locale.json" download> Get Entities Based on Relationship Attributes for a Specific Locale.json</a>|
|5|Get Entities Based on Rel To / Entities's Attribute value|To Get Entities Based on Rel To / Entities's Attribute value|<a href="files/02-Entity and Integration Job/06 Entity Relationship/8.1.3 Get Entities Based on Rel To - Entities's Attribute value.json" download> Get Entities Based on Rel To - Entities's Attribute value.json</a>|
|6|Get Entities Based on Where Used Relationship|To Get Entities Based on Where Used Relationship|<a href="files/02-Entity and Integration Job/06 Entity Relationship/8.1.1 Get Entities Based on Where Used Relationship.json" download> Get Entities Based on Where Used Relationship.json</a>|

#### Reference Entity

|Sl. No|Business Use Case|Description|Scenario Reference|
|--- |--- |--- |--- |
|1|Get all reference type by ascending order|To Get all reference type by ascending order|<a href="files/02-Entity and Integration Job/09 Reference Entity/9.1.2 Get All Reference Type.json" download> Get All Reference Type.json</a>|