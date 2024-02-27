---
title: Create Extractor Class
sidebar: rdp_sidebar
permalink: si_ext_create_extractor_class.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

In the **Extension** solution, create a **class** that contains the logic to extract the data from the source file. In an XML import, this contains the logic for extracting the details from the XML file. Make a note of the **classname** and the same name must be specified in the "components" section of the artifact configuration file. For each **classname**, a **jar** file must be attached. The **jar** file consists of all the files that undergo the extraction process. See [Update "Components" in Configuration File](si_ext_update_ext_config.html), for more information.

The extractor class must extend **IRecordExtractor** interface. The following table lists the functions of **IRecordExtractor** interface:

| Functions | Description |
|------------|------------|
| boolean hasNext() | Returns true if there are more records in the message. |
| IRecord next() | Returns the next record from the message. |
| int count() | Returns the total number of records in the message. |

**IRecord** represents one entity record. The following table lists the functions of **IRecord** interface:

| Functions | Description| 
|------------|------------|
| String getId(); | Returns the record Id. This is record id for tracking each entity from the source data. |
| void setId(String id); | Sets the record Id.|
| String getValue(String field); | Returns the value of the specified field.|
| String getUOM(String field); | Returns the UOM value of the specified field.|
| void setValue(String field, String value, String locale, String source, String uom, String contextPath, String type, boolean isInheritable); | Sets the value of a given field in the destination record with the values specified in the parameter.|
| boolean hasChildren(ChildType type); | Returns true if child records are associated with the parent path. 'type' parameter identifies the type of child record.|
| List {ChildRecord} getChildren(ChildType type); | Returns child records associated with the parent path. 'type' parameter identifies the type of child record.|
| void addChild(ChildType type, String parentPath, IRecord child); | Add a new child record and associate it with the parent path. The parameters, such as 'type' identifies the type of child record, 'parentPath' identifies the parent location to merge the child record, and 'child' identifies the child record.|
| void addChildren(ChildType type, String parentPath, List{IRecord} children); | Add child records and associate them with the parent path. The parameters, such as 'type' identifies the type of child record, 'parentPath' identifies the parent location to merge the child record, and 'child' identifies the child record.|