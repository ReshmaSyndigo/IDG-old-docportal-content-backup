---
title: Understand Uptime Report Results
sidebar: rdp_sidebar
permalink: api_diag_get_understand_results.html
type: HowTo
folder: rdp
---

{% include snippets/api_preview.md %}

The ideal condition for the system to work smoothly is for all the checks in the Uptime Report response to return 0, indicating that the system is up. In-case, if any of the checks returns 1, then you can refer to the following details for further troubleshooting:

| Checks | Description | Technology Impacted |
|---------------------|--------------|----------------|
| check_CreateItem | Verifies if an item (entity) can be created or not.| Netty 7075, ES, Storm (2 topologies - entityappservice, entitymanageservice) , Kafka, Zookeeper|
| check_ImportExcel | Verifies if upstream system is able to send an excel file to Riversand Platform via supported integration channels (Blob) or not.| Netty 9095, Blob, Kafka.|
| check_ImportJson |  Verifies if upstream system is able to send a JSON file to Riversand Platform via supported integration channels (Blob) or not. | Netty 9095, Blob, Kafka |
| check_Login | Verifies if a user can login to Riversand Platform or not. This is performed using a test account. | Nginx, Auth Server|
| check_UpdateItem | Verifies if an item (entity) can be updated or not. |Netty 7075, ES, Storm (2 topologies - entityappservice, entitymanageservice) , Kafka, Zookeeper|
| system_status | Indicates the overall status of the system. 0 indicates that all the checks are passed. If any of the checks fail, then system_status is set to 1.||

* For each check, refer **Technology Impacted** column. This provides you an understanding of the technology that must be further look into for troubleshooting.
