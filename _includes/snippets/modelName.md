## Allowed Short Names in Data Model 

During model creation, note the following points when you are specifying any short names (Example: attribute names, category names, taxonomy names) in the model template:

* **id**, **name**, **type**, **action** are reserved names and must not be used.
* External name of nested child attribute must not contain a dot (.).
* Allowed characters for short names are alphanumeric characters and '_'. Other special characters are not allowed in the short names. If there is a special character in short name, then excel download throws a file corrupted error while opening the excel. Currently, limitation of allowed characters is in ASCII range only. 