---
title: Create Loader Class
sidebar: rdp_sidebar
permalink: si_ext_create_loader_class.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

In the **Extension** solution, create a class that contains the logic to load the data from the source file to destination format. In an XML import, as data from XML is transformed to JSON and the destination (Riversand Platform) format is also JSON, no loader class is required. Note that loading a JSON format to Riversand Platform is an OOTB feature. In case you need a loader class, make a note of the classname. The same name must be specified in the "components" section of the artifact configuration file. For each **classname**, a **jar** file must be attached. The **jar** file consists of all the files that undergo the load process. See [Update "Components" in Configuration File](si_ext_update_ext_config.html), for more information.
<br/>

The loader class must extend **IRecordLoader** interface. The following table lists the functions of **IRecordLoader** interface:

| Functions | Description |
|------------|------------|
| void write(IRecord record) | Identifies the data to be loaded into the external data repository. |
| void commit() | Indicates the flag used to ensure batch is complete before sending to the destination. Call commit function after the write to loader is complete, to send the data to destination. |

**IRecord** represents one entity record. The following table lists the functions of **IRecord** interface:

| Functions | Description | 
|------------|------------| 
| String getId() | Returns the record Id. This is record id for tracking each entity from the source data. |
| void setId(String id) | Sets the record Id.|
| String getValue(String field) | Returns the value of the specified field.|
| String getUOM(String field) | Returns the UOM value of the specified field.|
| void setValue(String field, String value, String locale, String source, String uom, String contextPath, String type, boolean isInheritable); | Sets the value of a given field in the destination record with the values specified in the parameter.|