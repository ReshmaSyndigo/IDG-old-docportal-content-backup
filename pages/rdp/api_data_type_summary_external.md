---
title: Data Type Summary
sidebar: rdp_sidebar
permalink: api_data_type_summary.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

An attribute of an entity can be simple, nested, or relationship attribute. The following table describes the different properties of the attributes, their description, data types and value ranges.

| DataType | DisplayType | minLength | maxLength | rangeFrom | isRangeFromInclusive | rangeTo | isRangeToInclusive | precision | mandatory | multivalued | HasListofValues |
| ---------- | ----------| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | 
| string | textBox | Yes | Yes |  |  |  |  | | Yes | Yes |  | 
| string | textArea | Yes | Yes |  |  |  |  | | Yes|  |  | 
| string | referenceList  |  |  |  |  |  |  |  |  | Yes | Yes | 
| integer | textbox |  |  | Yes | Yes | Yes | Yes |  | Yes | Yes |  | 
| boolean | boolean |  |  |  |  |  |  | | Yes |  |  | 
| date | date |  |  | Yes | Yes | Yes | Yes | | Yes |  |  | 
| dateTime | dateTime |  |  | Yes | Yes | Yes | Yes | | Yes |  |  | 
| decimal | textBox |  |  | Yes | Yes | Yes | Yes | Yes | Yes | Yes |  | 
| nested | grid |  |  |  |  |  |  |  |  | Yes |  | 

## JSON Structures for Data Types

This topic shows sample JSON structures for various data types used in Riversand Platform.

#### Sample JSON Structure

A sample illustration of the JSON structure is shown below.

{% picture json-structure.png alt="JSON Structure" %}

A sample JSON file <a href="files/sampleEntity1.json" download>sampleEntity1.json</a> is embedded.
<br/>

##### String

A sample illustration of the JSON structure for 'String' data type.

{% picture json-string.png alt="String" %}

##### Boolean

A sample illustration of the JSON structure for 'Boolean' data type.

{% picture json-boolean.png alt="Boolean" %}

##### Decimal

A sample illustration of the JSON structure for 'Decimal' data type.

{% picture json-decimal.png alt="Decimal" %}

##### Integer

A sample illustration of the JSON structure for 'Integer' data type.

{% picture json-integer.png alt="Integer" %}

##### Date

A sample illustration of the JSON structure for 'Date' data type.

{% picture json-date.png alt="Date" %}

#### JSON Structure for Attributes

##### Multivalued

A sample illustration of the JSON structure for 'Multivalued' attribute.

{% picture json-multivalued.png alt="Multivalued" %}

##### Nested in Base Locale

A sample illustration of the JSON structure for 'Nested in base locale' attribute.

{% picture json-nestedinbaselocale.png alt="Nested in Base Locale" %}

##### Nested in Multi-locale

A sample illustration of the JSON structure for 'Nested in Multi Locale' attribute.

{% picture json-nestedinmultilocale.png alt="Nested in Multi Locale" %}

##### Reference Type Attribute

A sample illustration of the JSON structure for 'Reference type' attribute.

{% picture json-referencetypeattribute.png alt="Reference type attribute" %}

#### JSON Structure for Relationships

A sample illustration of the JSON structure for 'Relationships'.

{% picture json-relationships.png alt="Relationships" %}

#### JSON Structure for Assets

A sample illustration of the JSON structure for 'Assets'.

{% picture json-assets.png alt="Assets" %}

#### JSON Structure for Context

A sample illustration of the JSON structure for 'Context'.

{% picture json-context.png alt="Context" %}




<!--| Property | Description| Type | Value Range |
|----------|------------|------|-------------|
|isCollection | Indicates if the attribute is a collection attribute or not.| Boolean | True or False| 
| precision  | Indicates the number of decimal numbers to the right of the decimal point for a decimal data type attribute. | Integer | 2 |
| cardinality -> minimum | Indicates the minimum number of entities that can be added in a relationship. | Integer | 1 |
| cardinality -> maximum | Indicates the maximum number of entities that can be added in a relationship. | Integer |  1 |
| required | Indicates if the attribute is a required attribute or not. | Boolean |  True or False |-->
