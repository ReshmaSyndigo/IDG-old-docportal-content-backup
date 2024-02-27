---
title: Access Levels for Riversand RESTFul API
sidebar: rdp_sidebar
permalink: api_access_levels_for_rs_api.html
folder: rdp
type: HowToAPI
---

Access Levels are based on your agreement with Riversand. We currently have the following levels:

* **Limited** – This level is designed for **Ascend** customers, where the intent is to run with the “standard implementation” with very limited customizations or overrides.  If an **Ascend** customer wants deeper access to the APIs, they can be enabled for the **Standard** Access level by reaching out to the Riversand OPS team and providing details on the functionality needed. All customers have to adhere to Riversand’s Service Agreement. 
* **Standard** – This is the standard access level for **Exclusive** customers. It contains all the standard APIs to access the product functionality. 
* **Advanced** – Advanced level is a superset of standard APIs collection. This is meant for **Application developers**.

## Provisioned Access Level for Riversand RESTFul API

The list of APIs contained information in this site is provided on an as is basis. Please note that it is a running documentation and it would be undergoing revisions without notice to improve upon completeness, accuracy or usefulness. Any queries on app development, registration, access to resources and deployment process, write to Riversand Support Team.

| Service Name | API Method | Privileged | Advanced | Standard | Limited |
|-------|--------|----------------|-------------|-------------|-------------|
| entityAppModelService | getcontext <br> get | Yes | Yes | Yes | No |
|  entityappservice | get | Yes | Yes | Yes | Yes |
| entityappservice | delete <br> process <br> getcoalesce <br> getsnapshot <br> getentityHistory | Yes | Yes | Yes | No |
| authorizationservice | computerole <br> computeauthorizationmodels | Yes | Yes | Yes | No |
| entitygovernservice | get <br> create <br> update <br> delete <br> startWorkflow <br> transitionWorkflow <br> workflowChangeAssignment <br> terminateWorkflowInstance | Yes | Yes | Yes | No |
| requesttrackingservice | get | Yes | Yes | Yes | No |
| configurationservice | getnearest <br> get | Yes | Yes | Yes | No |
| Default* | Default | Yes | Yes | No | No |
| Adminservice** | ALL admin service methods | Yes | No | No | No |
| schedulerservice | create <br> update <br> get <br> delete | Yes | Yes | No |
| rsConnectService | collect <br> publish | Yes | Yes | Yes | No |
| entitygraphservice | create | Yes | Yes | Yes | No |
| bulkentityservice | createtask | Yes | Yes | Yes | No |
| metricsService | ingestMetrics <br> get | Yes | Yes | Yes | No |
| binarystreamobjectservice | prepareUpload <br> uploadContinuous <br> prepareDownload <br> create <br> update <br> get <br> delete | Yes | Yes | Yes | No |
| matchservice | search | Yes | Yes | Yes | No |
| modelgovernservice | validate | Yes | Yes | Yes | No |

*All the default services have **Advanced** access level. <br>
** All the adminservice have **Privileged** access level.
