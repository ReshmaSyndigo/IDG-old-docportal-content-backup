| Property | Description | Default Value | Required |
|----------|-------------|----------|---------------|
| fileExtension | Indicates the extension of the downloaded file. | | Yes | 
| relationshipSeparator | Indicates a character or a list of characters used to separate the attribute section of the DSV file with the relationship section of the DSV file. Note that this property is used to export DSV files where attributes and relationships of an entity are in the same file. | Relationships | Yes |
| multiFileExport | Indicates whether attributes and relationships of an entity must be exported in separate files. | false | No |
| loadSourceEntityMatchAttributes | Indicates whether match attributes of "from" entity must be exported in the relationships section. | false | No |
| columnPrefix | Indicates the prefix for match attributes in the relationships section. | FROM_ENTITY_ | No | 