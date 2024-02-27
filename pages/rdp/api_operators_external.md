---
title: List of Operators used in API Queries
sidebar: rdp_sidebar
permalink: api_operators.html
type: HowToAPI
folder: rdp
---

Riversand Platform consists of large varieties of data. Hence, to filter data based on the required criteria, Riversand Platform supports the usage of few operators using which data can filtered.

This following table describes the operators that can used in queries to filter data:

| Operator | Description | 
|----------|-------------|
| eq | In the case of an input value entered through 'eq' operator, system returns all the results where **all the words of the input value find a match**. The order of the words is not considered. Input values are split into words. Any special character used in the input value is considered as a word separator.<br>To match a phrase where all the words exist and all the words are in the specified order, embed the phrase with escaped quotes. Ex: "eq": "\"match phrase\"" | 
| contains | In the case of an input value entered through 'contains' operator, system returns all the results where **at least one of the words of the input value finds a match**. Input values are split into words. Any special character used in the input value is considered as a word separator.<br>To match a phrase where all the words exist and all the words are in the specified order, embed the phrase with escaped quotes. Ex: "contains": "\"match phrase\"" |
| exact | In the case of an input value entered through 'exact' operator, system returns all the results where it finds an **exact match of the whole value, byte-for-byte**. Input values are not split into words. |
| exacts | In the case of an input value entered through 'exacts' operator, system returns all the results where it finds an **exact match on multiple whole values**. Any one value must match exactly, byte-for-byte. Input values are not split into words. |
| startswith | In the case of an input value entered through 'startswith' operator, system returns all the results where it finds an **exact match from the start of the value, byte-for-byte**. Input values are not split into words. 'startswith' operator supports both single-value and multi-value search.<br>Ex: "startswith": "a", "startswith": ["a", "b"] |
| hasvalue | Only two values can be given for this operator: **true** or **false**<br>In the case of an input value entered through 'hasvalue' operator, system first ensures whether the property exists in the system. If the property exists, the system checks for value entered. If the value given is **true**, system returns all the results where the property has the specified value. If the value given is **false**, system returns all the results where the property does not have the specified value.<br> If no value is entered against the 'hasvalue' operator, system considers the value to be true.<br>Ex: "not price=10, hasvalue=true. Here, the system will return all entities whose price attribute value is not equal to ten. |
| gt | This operator indicates **greater than**. In the case of an input value entered through 'gt' operator, system returns all the results where the value of the property is greater than the specified value. This operator can be used along with operators such lt or lte. |
| gte | This operator indicates **greater than or equal to**. In the case of an input value entered through 'gte' operator, system returns all the results where the value of the property is equal to or greater than the specified value. This operator can be used along with operators such lt or lte. |
| lt | This operator indicates **less than**. In the case of an input value entered through 'lt' operator, system returns all the results where the value of the property is lesser than the specified value. This operator can be used along with operators such gt or gte. | 
| lte | This operator indicates **less than or equal to**. In the case of an input value entered through 'lte' operator, system returns all the results where the value of the property is equal to or lesser than the specified value. This operator can be used along with operators such gt or gte. |