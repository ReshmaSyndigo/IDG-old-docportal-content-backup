Gets the status of the business condition for the current entity in the specified context. Specifying context is optional. If context is not specified, then the keyword gets the business condition status in the current context.

**Syntax**

	 GetBusinessConditionStatus["businessConditionShortName","context"*]

     * - Indicates an optional parameter.
	
**Parameters**

_businessConditionShortName_ <br />
Type: String <br />
Indicates the short name of the business condition.

_context_ <br />
Type: String <br />
Indicates the context from which the business condition status must be retrieved. Context must be in the format <i>"_type:_path"</i>. <i>"type"</i> can be any user defined type such as self, channel, and country. <i>"path"</i> is the actual value of the context. <i>"path"</i> and <i>"type"</i> are data model specific details and it is recommended to refer to your data model before specifying the details.

**Return Value**

Type: String <br />
Returns false if the status of the business condition is false.
In the following cases the keyword returns empty string:
* If the business condition is not present.
* If the business condition is not executed.
* Invalid business condition short name.<br/>