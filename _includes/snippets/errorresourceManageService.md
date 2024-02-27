| resourceManageService | E0001 | The index name not found for DataObject type {} | ERROR | Index not found |
|  | E0002 | Exception processing message: {} | ERROR | Exception stack trace is the parameter |
|  | E0003 | Error in Event {} : {} | ERROR | Has one parameter | 
|  | E0004 | Error in DataObject {} : {} | ERROR | Has two parameters |
|  | E0005 | Error in processing Events {} | ERROR | Has one parameter |
|  | E0009 | Unable to find rule: '{}' provided in the mapping | ERROR | Rule is defined in the mapping but not available in the system | 
|  | E0010 | Unable to find business condition: '{}' provided in the mapping. | ERROR | Business condition is defined in the mapping but not available in the system |
|  | E0011 | Error while sending notification to client '{}' | ERROR | Error while sending notification |
|  | E0018 | DataObject with eid=[{}] not found. DataObjectType=[{}] | ERROR | Has two parameters |
|  | E0019 | Create Entities failed for create DataObject {} | ERROR | Has one parameter |
|  | E0020 | Delete DataObject failed for delete DataObject Request {} | ERROR | Has one parameter |
|  | E0021 | Bulk Entities creation failed, deleting the created entities | ERROR | Has no parameters | 
|  | E0022 | Exception while Creating XContentBuilder in SearchManagerDA | ERROR | Has no parameters |
|  | E0023 | Elastic Client Instance is null | ERROR | Has no parameters |
|  | E0024 | Create client method in SearchManagerDA returned null | ERROR | Has no parameters |
|  | E0025 | Unknown ElasticSearch node {} | ERROR | Requires one parameter |
|  | E0026 | Version conflict while executing update for eid {} - retrying once more | ERROR | Has one parameter |
|  | E0027 | Update failed for DataObject with ID {} | ERROR | Has one parameter |
|  | E0028 | Update retry failed for DataObject with ID {} | ERROR | Has one parameter |
|  | E0029 | Request could not be completed successfully. | INFO | Has no parameter |
|  | E0030 | Failed to obtain Hbase table object for : {} | ERROR | Error when we can not create client table object from hbase connection |
|  | E0031 | **API response message:** Failed to change assignment. User is not part of the allowed roles for the workflow activity<br/> **Troubleshooting message:** Failed to change assignment for entity with id '{}'. User is not part of the allowed roles for the activity '{}' in workflow '{}' | ERROR | **API response:** Has no parameters<br/> **Troubleshooting:** Has two parameters |
|  | E0032 | Error while saving request object in Search store with id: {} | ERROR | Has one parameter |
|  | E0033 | Error while saving request object in Object store with id: {} | ERROR | Has one parameter |
|  | E0034 | Error running rule with id: {}. Error details: {} | ERROR | Has two parameters |
|  | E0035 | Invalid request type provided: {} | ERROR | Has one parameter |
|  | E0036 | Evaluation result is null | ERROR | Has one parameter |
|  | E0037 | Unable to parse rule qualification result. Json string is - {} | ERROR | Has one parameter |
|  | E0038 | Missing Parameter: '{}' | ERROR | Has one parameter |
|  | E0039 | {} should be {} | ERROR | Has two parameters |
|  | E0040 | {} should have a value greater than {} | ERROR | Has two parameters |
|  | E0041 | {} should have a value less than {} | ERROR | Has two parameters |
|  | E0042 | Invalid characters not supported | ERROR | Has one parameter |
|  | E0043 | Image height should be equal to Image Width | ERROR | Has one parameter |
|  | E0044 | Failed to insert hbase data record of size {} bytes into table {} | ERROR | General error when you fail inserting record into hbase table |
|  | E0045 | Start Date should be greater than or equal to current date | ERROR | Error when the start date is less than the current date |
|  | E0046 | End Date should be greater than or equal to start date and current date | ERROR | Error when the end date is less than the current date or less than the start date |
|  | E0047 | Sum of the attribute values should be 100% | ERROR | Has one parameter |
|  | E0048 | Following graph workflow operation failed: {} | ERROR | Failure in a graph bolt |
|  | E0049 | Following graph workflow operation failed due to failure to allocate memory resources: {} | ERROR | Failure in a graph bolt because of OOM |
|  | E0050 | Rejected SKUs cannot be grouped to lot | ERROR | Has one parameter |
|  | E0051 | DataObject with eid=[{}] not found for given source filters. DataObjectType=[{}] | ERROR | Has two parameters |
|  | E0052 | Only one image can be assigned as primary image | ERROR | Has one parameter |
|  | E0053 | Failed to convert given string value to specified date time format. Exception is : {} | ERROR | Has one parameter |
|  | E0101 | Internal Server Error, Unable to connect to elastic search. | ERROR | Elastic search connection issue |
|  | E0102 | Internal Server Error, Tenant Auth Key not present for tenantId: {} | ERROR | Tenant authorization key not found | 
|  | E0103 | Internal Server Error, Unable to understand tenant config path for tenantId: {} | ERROR | Tenant config path not present in platform config |
|  | E0301 | Could not activate profiler | ERROR | Default |
|  | E0302 | Could not deactivate profiler | ERROR | Has no parameter |
|  | E0303 | Could not log entry method | ERROR | Has no parameter  |
|  | E0304 | Could not log exit method | ERROR | Has no parameter  |
|  | E0305 | Property name cannot be empty | ERROR | Has no parameter  |
|  | E0306 | Property value cannot be empty | ERROR | Has no parameter  |
|  | E0307 | Message code and serviceName cannot be null | ERROR | Has no parameter |
|  | E0308 | Error in logging message code: {} for service: {} and tenant: {} | ERROR | Has three parameters  |
|  | E0309 | Business Names for Actors and Done Criteria is missing for service: {} | ERROR | Has one parameter |
|  | E0310 | Error in Config create for request: {} | ERROR | Has one parameter |
|  | E0311 | Error in Event create, Type not found {} | ERROR | Has one parameter |
|  | E0312 | Failed to invoke RestApiResponse, Error details: URI: {}, requestbody: {}, error: {} | ERROR | Has three parameters |
|  | E0314 | Match failed, Error details: request: {}, data: {} | ERROR | Has two parameters |
|  | E0315 | Graph Procesisng config is required and is empty. Error details: request: {} | ERROR | Has one parameter |
|  | E0316 | The source and target entity types have no relationships defined in the data model. Error details: request: {} | ERROR | Has one parameter |
|  | E0317 | Failed to Build Match Rule for Identifier Type '{}' and sequence '{}'; Continuing process | ERROR | Has no parameter |
|  | E0318 | Match result property is not defined for {} | ERROR | Has one parameter |
|  | E0319 | Target actions not defined for match result {} | ERROR | Has one parameter |
|  | E0320 | Graph process model is not defined for {} | ERROR | Has one parameter |
|  | E0321 | Insufficient Identifiers found for attribute: '{}' in Reference Model: '{}' | ERROR | Has one parameter |
|  | E0322 | Coalesced model not found for '{}' | ERROR | Has one parameter |
|  | E0323 | Matched multiple entities | ERROR | Has one parameter |
|  | E0324 | DataObject with eid= [{}] not found. DataObjectType = [{}] and request is [{}] | ERROR | Has three parameters |
|  | E0325 | Attribute [{}] not found in data object [{}]. DataObjectType is [{}] | ERROR | Has three parameters |
|  | E0326 | Netty Client Timeout config not found | ERROR | Has one parameter |
|  | E0327 | [{}] is only applicable for data object type [{}]. The request is [{}] | ERROR | Has three parameters |
|  | E0400 | Class not found; attempting to load library/class: '{}'/'{}' | ERROR | API Host Service failed to load a required class |
|  | E0401 | Given {} file is not readable | ERROR | IO Exception |
|  | E0402 | User id is missing from the incoming request {} | ERROR | Request error |
|  | E0403 | Grooming idle stale connection for channel {} from {}. Idle state detected through: | ERROR | Read timeout warning |
|  | E0404 | Entity contains relationship, cannot proceed with delete | ERROR | Request error |
|  | E0405 | Entity with given id {} is not present, delete request failed | ERROR | Request error |
|  | E0406 | Resolution failed for entity json {} and request id {} | ERROR | Resolution failure |
|  | E0407 | Populate Name failed for entity json {} and request id {} | ERROR | Resolution failure |
|  | E0408 | Get Entity with id failed for the request id {} | ERROR | Resolution failure |
|  | E0409 | Matching model context has failed for the entity {} | ERROR | Resolution failure |
|  | E0410 | Reference Attributes resolution failed for the entity {} | ERROR | Resolution failure |
|  | E0411 | Model not found for type {} | ERROR | Resolution failure |
|  | E0412 | Classification resolution failed for the request id {} | ERROR | Resolution failure |
|  | E0413 | Get Reference Entity has failed for the given type {} | ERROR | Resolution failure |
|  | E0414 | Exception occurred while merging entity models. Exception = [{}] | ERROR | Has one parameter |
|  | E0415 | Exception occurred while getting entity model | ERROR | Has no parameter |
|  | E0416 | Exception occurred while finding the context=[{}] in entity model=[{}] | ERROR | Has two parameters |
|  | E0417 | Exception occurred while merging model = [{}] with model = [{}] | ERROR |  Has two parameters |
|  | E0418 | Exception occurred while fetching relationship attributes from [{}] | ERROR | Has one parameter |
|  | E0419 | Exception occurred while merging properties of [{}] with [{}] | ERROR | Has two parameters |
|  | E0420 | Type Criterion passed in the request is not valid | ERROR | Has no parameter  |
|  | E0421 | Task Summarization is not enabled | ERROR | Has no parameter |
|  | E0422 | Task came for update with taskId {} and counter {} | ERROR | Has no parameter |
|  | E0423 | Task reached max update limit with taskId {} and counter {} | ERROR | Has no parameter |
|  | E0424 | Data object {} of type {} is not present and hence cannot perform action: {} | ERROR | Has no parameter |
|  | E0425 | Failed to process the schedule object {} due to the following error: | ERROR | Failed to perform crud operation on schedule object |
|  | E0426 | Scheduler failed to process the next schedule with the following error: | ERROR | This operation is performed by the schedule bolt, it failed to load schedule details on a tick timer. |
|  | E0427 | Total Records of get is {} greater than 30000. Sort cannot be applied for this Request. Please change Search Criteria | ERROR | Has no parameter |
|  | E0428 | Could not apply formula for the value {} | ERROR | JavaScript failure |
|  | E0429 | Model doesn't contain UOM in following value {} | ERROR | Input parameters error |
|  | E0430 | Error while sending email | ERROR | Error while sending notification |
|  | E0431 | Error creating Hbase table {} | ERROR | Has no parameter |
|  | E0432 | Failures in creating indices and Hbase tables for tenant {} | ERROR | Has no parameter |
|  | E0433 | Failures in submitting tenant create request to configurationManagerService for tenant {} | ERROR | Has no parameter |
|  | E0434 | Incorrect Coalesce Query Request: {} | ERROR | Coalesce query is not in the right format |
|  | E0435 | Could not resolve the external name: {} of type: {} in relationship: {} related to parentId: {} of type: {} | ERROR | Coalesce query is not in the right format |
|  | E0436 | Incorrect entityContextModel: {}, request to get entityContextModel: {} | ERROR | Could not retrieve the context model either because of data or bad request |
|  | E0437 | Failures in creating indices and Hbase tables due to failure to allocate memory resources: {} | ERROR | Failed due to out of memory error |
|  | E0438 | Error creating index {} | ERROR | Has no parameter |
|  | E0439 | Error creating alias {} for index {} | ERROR | Has no parameter |
|  | E0450 | Incorrect status detail message type, expect 'info', 'warning' or 'error', found {}, default to {} | ERROR | Incorrect status detail message type found |
|  | E0451 | Duplicate refEntity found for refType {} and ids are {} | ERROR | Has two parameters |
|  | E0452 | Requested pick strategy '{}' is not supported | ERROR | Has one parameter |
|  | E0453 | Multiple matches found when revalidating the entity after it waited too long. '{}' is the data object. This will cause duplicates. | ERROR | Has one parameter |
|  | E0454 | Scheduler is unable to retrieve {} for tenant {} due to the following error: | ERROR | Occurs if the scheduler was not able to get schedule data |
|  | E0455 | Scheduler is unable to evaluate schedule {} with schedule info {} due to the following error: {} | ERROR | Occurs if the scheduler encountered an error while evaluating wither a schedule should be triggered or not |
|  | E0456 | Scheduler failed to to execute task of schedule {} with schedule info {} due to the following error: | ERROR | Occurs if the scheduler encountered an error while evaluating wither a schedule should be triggered or not |
|  | E0460 | Please specify a tenant, request type, service and function | ERROR | Invalid request |
|  | E0461 | Something went wrong. I am not feeling well please try again later | ERROR | Invalid request |
|  | E0462 | Invalid request, url = {}: {} | ERROR | Invalid request |
|  | E0463 | Scheduler failed to persist the schedule info object using create request {} | ERROR | Occurs if the scheduler failed to save the latest schedule information |
|  | E0464 | Failed to perform elastic search operation with search parameters: {}, search template parameters: {} | ERROR | Occurs if the elastic search operations failed |
|  | E0470 | Error creating elastic transport client, config not set | ERROR | Elastic transport client config not set |
|  | E0471 | Error creating elastic transport client, port not set | ERROR | Elastic transport client port not set |
|  | E0472 | Error sending request to service {} for action {}. Request Json: {} | ERROR | Error while sending aggregated request to respective service |
|  | E0473 | Error in request with id {}. Request can't contain both regular and delete types. Types passed are {} | ERROR | Request is invalid. Cannot contain both regular and delete types. |
|  | E0474 | Error in request with id {}.Headers does not contain the OwnerShipEditDataValue value | ERROR | Request is invalid. Header content value not present. |
|  | E0475 | Exception occurred while separating model = [{}] | ERROR | Has one parameter |
|  | E0476 | Exception occurred while getting configuration = [{}] | ERROR | Has one parameter |
|  | E0477 | No configuration was found for tenant id = {} | ERROR | Indicate that tenant config was not found for the tenant |
|  | E0478 | Unsupported type {} encountered for impact processing | ERROR | Has one parameter |
|  | E0479 | Operation failed due to failure to allocate memory resources for impact processing - {} \n {} | ERROR | Has two parameters, input and error call stack |
|  | E0490	| Invalid to exclude self context without setting named context | ERROR | Invalid to exclude self context without setting named context |
|  | E0491	| Error occurred while executing elastic request. Exception details: {} | ERROR | Elasticsearch exception occurred |
|  | E0492	| Error occurred while executing deletebyquery for the given request: {} | ERROR | DeleteByQuery exception occurred |
|  | E0501	| Invalid rule definition. A rule cannot end with an operator. | ERROR | Invalid rule definition. A rule cannot end with an operator. |
|  | E0502	| Unable to evaluate the expression given in rule definition. The result of a part of the expression is null.| ERROR | Unable to evaluate the expression given in rule definition. The result of a part of the expression is null. |
|  | E0503	| Invalid rule definition. Unable to evaluate business rule. | ERROR | Invalid rule definition. Unable to evaluate business rule. |
|  | E0504	| Unable to evaluate Business Rule. The operand keyword is null. | ERROR | Unable to evaluate Business Rule. The operand keyword is null. |
|  | E0505	| Unable to evaluate the operand function. The parameters collection is null. | ERROR | Unable to evaluate the operand function. The parameters collection is null. |
|  | E0506	| Unable to evaluate the expression given in rule definition. The left part of the expression is not provided.| ERROR | Unable to evaluate the expression given in rule definition. The left part of the expression is not provided. |
|  | E0507	| Unable to evaluate the expression given in rule definition. The right part of the expression is not provided.| ERROR | Unable to evaluate the expression given in rule definition. The right part of the expression is not provided. |
|  | E0508	| Unable to evaluate the expression given in rule definition. The operator for the expression is not provided.| ERROR | Unable to evaluate the expression given in rule definition. The operator for the expression is not provided. |
|  | E0509	| Failed to get workflow details | ERROR | Failed to get workflow details |
|  | E0510	| Unable to evaluate the expression given in rule definition. The operator for the expression is not provided. | ERROR | Unable to evaluate the expression given in rule definition. The operator for the expression is not provided. |
|  | E0511	| Invalid rule definition. The expression contains a space instead of an operator. | ERROR | Invalid rule definition. The expression contains a space instead of an operator. |
|  | E0512	| Invalid rule definition. An assignment must only be made to a variable. | ERROR | Invalid rule definition. An assignment must only be made to a variable. |
|  | E0513	| Invalid rule definition, there is a {} mismatch in the rule definition. | ERROR | Invalid rule definition, there is a mismatch in the rule definition. |
|  | E0514	| Invalid rule syntax. There is an operand keyword mismatch error. Operand keyword depth is not zero. | ERROR | Invalid rule syntax. There is an operand keyword mismatch error. Operand keyword depth is not zero. |
|  | E0515	| Unable to parse the rule, as the RPN queue is null | ERROR | Unable to parse the rule, as the RPN queue is null |
|  | E0516	| Unable to parse the rule. Some of the Rule Components are not available. | ERROR | Unable to parse the rule. Some of the Rule Components are not available. |
|  | E0517	| Unable to parse the rule, as there are no Rule Components to add to the RPN stack. | ERROR | Unable to parse the rule, as there are no Rule Components to add to the RPN stack. |
|  | E0518	| Invalid rule definition. There is no false condition for ‘iif’. | ERROR | Invalid rule definition. There is no false condition for ‘iif’. |
|  | E0519	| Errors occurred while performing current operation {}. | ERROR | Occurs while performing current operation |
|  | E0520	| Internal Error: {}.| ERROR | Internal Error |
|  | E0521	| Invalid rule definition. Either the keyword '{}' is not allowed for '{}' service type or it has an open square parenthesis without an operand keyword. | ERROR | Invalid rule definition. Either the keyword '{}' is not allowed for '{}' service type or it has an open square parenthesis without an operand keyword. |
|  | E0522	| Invalid rule definition. ‘{}’ is found instead of a keyword or expression. | ERROR | Invalid rule definition. ‘{}’ is found instead of a keyword or expression. |
|  | E0523	| Invalid rule definition. Error while determining if the next character is '{}’, location: '{}', error message: ‘{}’. | ERROR | Invalid rule definition. Error while determining if the next character is '{}’, location: '{}', error message: ‘{}’. |
|  | E0524	| Invalid rule definition. The operand ‘{}’ is a reserved word. | ERROR | Invalid rule definition. The operand ‘{}’ is a reserved word. |
|  | E0525	| Unable to evaluate operator ‘{}’ due to the error: ‘{}’. | ERROR | Unable to evaluate operator ‘{}’ due to the error: ‘{}’. |
|  | E0526	| Unable to evaluate the expression ‘{}’. The variable '{}' for the assignment is not found. | ERROR | Unable to evaluate the expression ‘{}’. The variable '{}' for the assignment is not found. |
|  | E0527	| Unable to evaluate keyword ‘{}’, as the keyword is invalid.| ERROR | Unable to evaluate keyword ‘{}’, as the keyword is invalid. |
|  | E0528	| Unable to evaluate expression '{}', as it has incorrect parameters. Expecting '{}' operands for '{}'. | ERROR | Unable to evaluate expression '{}', as it has incorrect parameters. Expecting '{}' operands for '{}'. |
|  | E0529	| Unable to evaluate keyword ‘{}’, as division by zero is not allowed. | ERROR | Unable to evaluate keyword ‘{}’, as division by zero is not allowed. |
|  | E0530	| Unable to evaluate operator ‘{}’ for ‘{}’, due to the error: ‘{}’ | ERROR | Unable to evaluate operator ‘{}’ for ‘{}’, due to the error: ‘{}’ |
|  | E0531	| Unable to evaluate keyword ‘{}’, as modulus by zero is not allowed | ERROR | Unable to evaluate keyword ‘{}’, as modulus by zero is not allowed |
|  | E0532	| Unable to evaluate the expression '{}' | ERROR | Unable to evaluate the expression '{}' |
|  | E0533	| Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword requires {} parameter(s). | ERROR | Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword requires {} parameter(s). |
|  | E0534	| **API response message:** Failed to get workflow details. Error: {}<br/> **Troubleshooting message:** Failed to get details for workflow '{}' for entity with id '{}'. Error: {} | ERROR | **API response:** Failed to get workflow details<br/> **Troubleshooting:** Failed to get details for workflow '{}' for entity with id '{}'. Error: {} |
|  | E0535	| Failed to evaluate keyword '{}' as {} is returned as null or empty |ERROR | Failed to evaluate keyword '{}' as {} is returned as null or empty |
|  | E0536	| Unable to evaluate keyword: ‘{}’, as it has incorrect parameters. Parameter: '{}' in the keyword must be of type ‘{}’. | ERROR | Unable to evaluate keyword: ‘{}’, as it has incorrect parameters. Parameter: '{}' in the keyword must be of type ‘{}’. |
|  | E0537	| Unable to evaluate keyword ‘{}’, as the sum of start position and length: {} is longer than the string length: {}. | ERROR | Unable to evaluate keyword ‘{}’, as the sum of start position and length: {} is longer than the string length: {}. |
|  | E0538	| Unable to evaluate keyword ‘{}’, as the value of the position parameter ‘{}’ is incorrect. Position parameter must be greater than zero and less than the total length of the input string ‘{}’. | ERROR | Unable to evaluate keyword ‘{}’, as the value of the position parameter ‘{}’ is incorrect. Position parameter must be greater than zero and less than the total length of the input string ‘{}’. |
|  | E0539	| Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword requires minimum {} parameter(s). | ERROR | Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword requires minimum {} parameter(s). |
|  | E0540	| Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword ‘{}’ requires minimum {} parameter(s) and maximum {} parameter(s). | ERROR | Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword ‘{}’ requires minimum {} parameter(s) and maximum {} parameter(s). |
|  | E0541	| Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword ‘{}’ requires minimum {} parameter(s). | ERROR | Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword ‘{}’ requires minimum {} parameter(s). |
|  | E0542	| Unable to evaluate keyword: ‘{}’, as it has incorrect parameters. Value of the parameter: {} in the keyword must be ‘{}’. | ERROR | Unable to evaluate keyword: ‘{}’, as it has incorrect parameters. Value of the parameter: {} in the keyword must be ‘{}’. |
|  | E0543	| Unable to format date. Error: {} | ERROR | Unable to format date. Error: {} |
|  | E0544	| Unable to evaluate keyword ‘Date’, as the Month: {}, Day: {}, or Year: {} is not a valid date format | ERROR | Unable to evaluate keyword ‘Date’, as the Month: {}, Day: {}, or Year: {} is not a valid date format |
|  | E0545	| Unable to evaluate keyword ‘Date’, as the Month: {}, Day: {}, or Year: {}, or Hour: {}, or Minute: {}, or Second: {} is not a valid date format | ERROR | Unable to evaluate keyword ‘Date’, as the Month: {}, Day: {}, or Year: {}, or Hour: {}, or Minute: {}, or Second: {} is not a valid date format |
|  | E0546	| Unable to evaluate keyword: ‘{}’, as parameter {} cannot be greater than parameter {}. | ERROR | Unable to evaluate keyword: ‘{}’, as parameter {} cannot be greater than parameter {}. |
|  | E0547	| Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword requires all the parameters of type ‘{}’. | ERROR | Unable to evaluate keyword ‘{}’, as it has incorrect parameters. Keyword requires all the parameters of type ‘{}’. |
|  | E0548	| Unable to evaluate keyword ‘{}’, as the variable name '{}' does not exist. | ERROR | Unable to evaluate keyword ‘{}’, as the variable name '{}' does not exist. |
|  | E0549	| Unable to evaluate keyword ‘{}’, as it has no values in '{}' parameter | ERROR | Unable to evaluate keyword ‘{}’, as it has no values in '{}' parameter |
|  | E0550	| Errors occurred while performing current operation {} | ERROR | Errors occurred while performing current operation {} |
|  | E0551	| **API response message:** Failed to resume workflow. Error details: {}<br/> **Troubleshooting message:** Failed to resume workflow '{}' for entity with id '{}'. Error details: {} | ERROR | **API response:** Failed to resume workflow<br/> **Troubleshooting:** Failed to resume workflow '{}' for entity with id '{}'. Error details: {} |
|  | E0552	| **API response message:** Failed to change assignment in given workflow. Error details: {}<br/> **Troubleshooting message:** Failed to change assignment for entity with id '{}' in workflow '{}' and at activity '{}'. Error details: {} | ERROR | **API response:** Failed to change assignment in given workflow<br/> **Troubleshooting:** Failed to change assignment for entity with id '{}' in workflow '{}' and at activity '{}'. Error details: {} |
|  | E0553	| Unable to evaluate keyword ‘{}’, as parameter at position '{}' ({}) is null or empty | ERROR | Unable to evaluate keyword ‘{}’, as parameter at position '{}' ({}) is null or empty |
|  | E0554	| Unable to evaluate keyword ‘{}’, as it has incorrect parameter at position {} with value '{}'. Expected values are DELETED, ADDED, UNCHANGED. | ERROR | Unable to evaluate keyword ‘{}’, as it has incorrect parameter at position {} with value '{}'. Expected values are DELETED, ADDED, UNCHANGED. |
|  | E0555	| Unable to evaluate keyword '{}', as '{}' is not a valid reserved keyword option constant | ERROR | Unable to evaluate keyword '{}', as '{}' is not a valid reserved keyword option constant |
|  | E0556	| Error occurred while executing dynamic governance request. Exception details: {} | ERROR | Error occurred while executing dynamic governance request |
|  | E0557	| Error occurred while running model validation rules. Exception details: {} | ERROR | Error occurred while running model validation rules |
|  | E0558	| Error occurred while performing pre-load operations for rule execution. Exception details: {} | ERROR | Error occurred while performing pre-load operations for rule execution |
|  | E0559	| Error occurred while qualifying rules. Exception details: {} | ERROR | Error occurred while qualifying rules |
|  | E0560	| Error occurred while qualifying cross-context rules. Exception details: {} | ERROR | Error occurred while qualifying cross-context rules |
|  | E0561	| Unable to validate rule object with id '{}', as attribute '{}' is null | ERROR | Unable to validate rule object with id '{}', as attribute '{}' is null |
|  | E0562	| Entity Model validation is not supported for requested type '{}' | ERROR | Entity Model validation is not supported for requested type '{}' |
|  | E0563	| Requested Entity Model having id '{}' and type '{}' does not exist | ERROR | Requested Entity Model having id '{}' and type '{}' does not exist |
|  | E0564	| Failed to evaluate keyword '{}' as where used query response is error | ERROR | Failed to evaluate keyword '{}' as where used query response is error |
|  | E0565	| Failed to evaluate keyword '{}' due to current user Authentication Failure | ERROR | Failed to evaluate keyword '{}' due to current user Authentication Failure |
|  | E0566	| Unable to evaluate keyword '{}', as attributeName is not a defined | ERROR | Unable to evaluate keyword '{}', as attributeName is not a defined |
|  | E0567 | **API response message:** Failed to invoke workflow. Error details: {}<br/> **Troubleshooting message:** Failed to invoke workflow '{}' for entity with id '{}'. Error details: {} | ERROR | **API response:** Failed to invoke workflow<br/> **Troubleshooting:** Failed to invoke workflow '{}' for entity with id '{}'. Error details: {} |
|  | E0568 | Prepare request failed from external to internal for given request: {} | ERROR | Transform failure |
|  | D0001 | eid=[{}] | DEBUG | Prints eid, takes one parameter |
|  | D0002 | Total events generated {} | DEBUG | Has one parameter |
|  | D0003 | DataObjectType=[{}] | DEBUG | Has one parameter |
|  | D0004 | DataObjectAction=[{}] | DEBUG | Has one parameter |
|  | D0005 | generated manageService request: {} | DEBUG | Takes one parameter |
|  | D0006 | RestClient request failed for uri: {} with headers: {} and payload: {} | DEBUG | Has three parameters |
|  | D0008 | Requesting to {} DataObject [eid={}] | DEBUG | Has two parameters  |
|  | D0009 | DataObject creation successful at Line#{} | DEBUG | Has one parameter  |
|  | D0010 | DataObject creation failed at Line#{} | DEBUG | Has one parameter |
|  | D0011 | Requesting to get DataObject [eid={}] | DEBUG | Has one parameter | 
|  | D0012 | Requesting to update DataObject [eid={}] | DEBUG | Has one parameter |
|  | D0013 | Index response for create DataObject {} | DEBUG | Has one parameter |
|  | D0014 | Adding DataObject to bulkRequest [eid={}] | DEBUG | Has one parameter |
|  | D0015 | transportClientInstance is null as TransportClient.builder().settings(settings).build() returned null | DEBUG | Has one parameter |
|  | D0016 | Evaluating rules for request complete. Evaluation Result Details: {} | DEBUG | Has one parameter |
|  | D0017 | Rule Qualification Result: {} | DEBUG | Has one parameter |
|  | D0018 | Rule Evaluation Result: {}| DEBUG | Has one parameter |
|  | D0019 | Header for request: {}, header: {} value: {} | DEBUG | Has three parameters  |
|  | D0020 | Reference type name: '{}'| DEBUG | Has one parameter |
|  | D0021 | Reference Attribute: '{}', Value: '{}'| DEBUG | Has two parameters |
|  | D0022 | Cloned attribute value of attribute '{}': {} | DEBUG | Has two parameters  |
|  | D0023 | Find Rules result: {} | DEBUG | Has one parameter |
|  | D0024 | Generate Event complete. Result: {} | DEBUG | Has one parameter |
|  | D0025 | Grouping Field id: '{}' | DEBUG | Has one parameter |
|  | D0026 | Data model from store: {} | DEBUG | Has one parameter |
|  | D0027 | Processing attribute: '{}' | DEBUG | Has one parameter |
|  | D0028 | Calculated {} with value '{}' for attribute '{}' | DEBUG | Has three parameters  |
|  | D0029 | Invalid attribute value '{}' for attribute '{}' | DEBUG | Has two parameters  |
|  | D0030 | Manage Change Context has no element called 'contexts' | DEBUG | Has no parameter  |
|  | D0031 | There is no ManageChangeContext to process. | DEBUG | Has no parameter |
|  | D0032 | Cannot resume workflow. Either workflowName, activityName, or action is null. | DEBUG | Has no parameter  |
|  | D0033 | Resume workflow response: {} | DEBUG | Has one parameter |
|  | D0034 | Context processing started: '{}' | DEBUG | Has one parameter |
|  | D0035 | Context processing completed: '{}'| DEBUG | Has one parameter |
|  | D0036 | Multiple matches found. Total matches are: '{}'| DEBUG | Has one parameter |
|  | D0037 | Graph processing information: '{}'| DEBUG | Has one parameter |
|  | D0038 | Dependency violation check started for attribute: '{}'| DEBUG | Has one parameter |
|  | D0039 | Dependency violation check completed for attribute: '{}'| DEBUG | Has one parameter |
|  | D0040 | Parent attribute '{}' is null | DEBUG | Has one parameter |
|  | D0041 | Reference entity(s) for Parent attribute[{}] value(s) do not exist | DEBUG | Has one parameter  |
|  | D0042 | {} : {} | DEBUG | Has two parameters |
|  | D0043 | Action: 'getcoalesce' returned null for following request: {} | DEBUG | Context model or instance might not be correctly defined |
|  | D0045 | Entity manage computation will be skipped because no changed has been found. | DEBUG | Rule processing will be skipped if there are no changes  |
|  | D0310 | In method [{}] with Params({}) | DEBUG |  |
|  | D0501 | No objects found for the context: {} resolved as: {} | DEBUG | No objects were found for resolved context in coalesce query |
|  | D0502 | Matching Query Context: {} against target Context: {}, score is: {}| DEBUG | Finding the nearest matching entityContextModel for coalesce |
|  | D0503 | Query Context: {}, {}_entityContextModel matching context found is: {} | DEBUG | Finding the nearest matching entityContextModel for coalesce |
|  | D0504 | Matching Query Context: {} against target Context: {}, max achievable score reached:{} | DEBUG | Finding the nearest matching entityContextModel for coalesce |
|  | D0505 | For Query Context: {}, Matching Authorization Context found: {} | DEBUG | Finding the nearest matching entityContextModel for coalesce |
|  | D0506 | Auth Path:{}, Max achievable score:{}, hierarchyMap: {} | DEBUG | Finding the nearest matching entityContextModel for coalesce  |
|  | D0510 | Add missing localized reference data of attribute '{}': {} | DEBUG | Update localized reference data values when entities are created or updated |
|  | D0511 | Hbase Persistence has been disabled for this service. objectId: {} | DEBUG | Log the service request if Hbase persistence is disabled |
|  | D0520 | Search parameters: {} | DEBUG | Print out search parameters used by elastic search template to form the query. |
|  | D0521 | Business Condition qualification started for bc id: {}. | DEBUG | Business Condition qualification started for bc id |
|  | D0522 | Business Condition: '{}' ignored as impact contexts are not specified.| DEBUG | Business Condition: '{}' ignored as impact contexts are not specified |
|  | D0523 | Business Condition with id '{}' is either disabled or is set as draft. So ignoring its processing. | DEBUG | Business Condition with id '{}' is either disabled or is set as draft. So ignoring its processing. |
|  | D0524 | Business Condition with id '{}' is disabled in rule context mapping. So ignoring its processing. | DEBUG | Business Condition with id '{}' is disabled in rule context mapping. So ignoring its processing. |
|  | D0525 | ContextCollection transformed into internal format: {} | DEBUG | ContextCollection transformed into internal format: {} |
|  | D0526 | Context comparison successful. Added bc mapped context : {} into ContextRuleIdMap. | DEBUG | Context comparison successful. Added bc mapped context : {} into ContextRuleIdMap. |
|  | D0527 | Contexts are not same: Generic Context - {}, Specific Context - {}. | DEBUG | Contexts are not same: Generic Context - {}, Specific Context - {}. |
|  | D0528 | Added BR/BC id {} into context {} for ContextRuleIdMap | DEBUG | Added BR/BC id {} into context {} for ContextRuleIdMap  |
|  | D0529 | Transformed impactContexts is: {} & requested change Context to compare with is: {} | DEBUG | Transformed impactContexts is: {} & requested change Context to compare with is: {} |
|  | D0530 | Business Condition qualification completed for bc id: {} | DEBUG | Business Condition qualification completed for bc id: {} |
|  | D0531 | Added BC id {} into BusinessConditionRuleMap | DEBUG | Added BC id {} into BusinessConditionRuleMap |
|  | D0532 | Impact processing is disabled, ignoring impact processing of event {} | DEBUG | Impact processing is disabled, ignoring impact processing of event {} |
|  | D0533 | Impact processing for {} is disabled, ignoring impact processing of event {} | DEBUG | Impact processing for {} is disabled, ignoring impact processing of event {} |
|  | D0534 | Group by params are {}, distinct params are {}, aggregate params are {}, batch size is {}, and task type is {} | DEBUG | Impact process query information, has five parameters |
|  | D0535 | Current object type is {} | DEBUG | Has one parameter - object type |
|  | D0536 | {} submitted to {} for {} | DEBUG | Has one parameter - request Id |
|  | D0537 | Generated {} requests of types {} after impact execution of {} : {}, {}: {} | DEBUG | Impact process execute info, has six parameters |
|  | D0538 | Impacted types for changed object {} of type {} are {} | DEBUG | Impact identify info, has three parameters |
|  | D0539 | Aggregated request object for {} :{} | DEBUG | aggregate object, has two parameters |
|  | D0540 | Request object generated by impact execution: {} | DEBUG | request object, has one parameter |
|  | D0541 | Attempted to update status for {} generic objects with ids: {} | DEBUG | generic object id list and task type, has two parameters |
|  | D0542 | Sending email notification failed because {} | DEBUG | Has one parameter |
|  | D0543 | Sending email notification for task status {} and for taskID: {} | DEBUG | Has two parameters |
|  | D0544 | Sending notification for model import completion for taskId: {} | DEBUG | Has two parameters |
|  | I0002 | DataObject action is read. Hence simply acknowledging and not handling it. | INFO | Has no parameters |
|  | I0003 | DataObject action is other than create, delete and read. Hence updating it. | INFO | Has no parameters |
|  | I0004 | DataObject Operation Message acknowledging success | INFO | Has no parameters |
|  | I0005 | DataObject Operation Message acknowledging failure | INFO | Has no parameters |
|  | I0006 | isManageEventsEnabled flag is false, so not generating events for eid [{}] DataObjectAction [{}] | INFO | Has two parameters |
|  | I0007 | DataObject with eid=[{}] is found. DataObjectType=[{}] | INFO | Has two parameters |
|  | I0008 | The document has been created | INFO | Has no parameters |
|  | I0009 | The document came for create but was updated | INFO | Has no parameters |
|  | I0010 | Bulk Entities creation succeeded, created {} events | INFO | Has four parameters |
|  | I0011 | Entity has been submitted for create with entity Id : {}. Please check back after 1 min | INFO | Has no parameters |
|  | I0012 | No objects found | INFO | Has no parameters |
|  | I0013 | Entity has been submitted for update with entity Id : {}. Please check back after 1 min | INFO | Has no parameters |
|  | I0014 | request: {}, response status: {}, total time taken: {} ms | INFO | Has three parameters |
|  | I0015 | Entity has been submitted for delete with entity Id : {}. Please check back after 1min | INFO | Has no parameters |
|  | I0016 | Object Processing is in progress | DEBUG | Has no parameters |
|  | I0017 | Request submitted for {} | INFO | Has one parameter |
|  | I0018 | Request submitted for data object id: {} from subscriber: {} with action: {} to inbound topic of service: {} | INFO | Has three parameters |
|  | I0019 | Created a new kafka producer instance as message client is null | INFO | Has no parameters |
|  | I0020 | Entity matched with existing entity id: {}. Action changed to update. | INFO | Has one parameter |
|  | I0021 | Notification sent to client '{}' successfully | INFO | Sending notification |
|  | I0022 | Relationship existing in original source or the modified source. | INFO | Has no parameters |
|  | I0023 | The given entity {) is not related to any other entities for rel type {} | INFO | Has two parameters |
|  | I0024 | {} : Request completed. | INFO | Message to track the method finished |
|  | I0025 | Rest call performing for uri: {} with headers: {} | INFO | Message to track the method finished |
|  | I0026 | Performing workflow action: {} for data object id: {} | INFO | Message to track the method finished |
|  | I0027 | Total models found: {} are same as expected: {} | INFO | Message to track reference model found |
|  | I0028 | Falling back to default 'authorizationType': '{}' | INFO | Fall back message for authzType |
|  | I0029 | Requesting to get id: '{}' of type: '{}' | INFO | Has id and type as parameters |
|  | I0030 | Could not find authorization model for entity type. Trying to find authorization model for entity domain. | INFO | Has id and type as parameters |
|  | I0031 | Determining domain for the type: '{}' | INFO | Has id and type as parameters |
|  | I0032 | No match found, creating Entity... | INFO | Has no parameters |
|  | I0033 | Multiple matches found. Total matches are : '{}' and matched Entity ids are : {} | INFO | Has two parameters |
|  | I0034 | Total Hits in First Query: '{}' | INFO | Has one parameter |
|  | I0035 | Total number of passes: '{}' | INFO | Has one parameter |
|  | I0036 | The HBase client configuration: '{}' | INFO | HBase client configuration |
|  | I0037 | Merged model = [{}] after {} is merged | INFO | Has two parameter |
|  | I0038 | Entity matched with entity id: {}, submitted for delete. | INFO | Has one parameter |
|  | I0039 | No match found for the request {}. | INFO | Has one parameter |
|  | I0040 | Ignoring attribute {} for action delete as target attribute does not exist. | INFO |  |
|  | I0041 | Manage Data in Context is not enabled or Context type order not found for Context: {} | INFO | Context model/instance might not be correctly defined |
|  | I0042 | Action: 'getcoalesce' returned null. Returning response from Action: 'get' | INFO | Context model/instance might not be correctly defined |
|  | I0043 | Re-validating the create action for dataobject {} as the message waited past the allowable limit. | INFO |  |
|  | I0045 | Scheduler called the task url: {} with payload: {}, the response was: {} | INFO | This log will occur every time the scheduler calls the target REST URL with the configured payload. It will log the response. |
|  | I0046 | Entity has been submitted for migration. Please check back after 1 min. | INFO | The message is used when submitting entities for migration. |
|  | I0047 | Entity has been submitted for reevaluate with entity Id : {}. Please check back after 1 min. | INFO | Has no parameters |
|  | I0048 | Entity manage computation will be skipped because entity action is deleteDataObject. | INFO | Rule processing will be skipped if the operation is purge of soft deleted entities. |
|  | I0049 | Model was not returned in response. | INFO |  |
|  | I0050 | Could not find model {}. | INFO |  |
|  | I0051 | Concurrency collision detected during entity persistence. Known entity version: {}, stored entity version: {}, resolved new version: {}. | INFO | This is a message that will be logged if we detect concurrency collision during persistence. |
|  | I0052 | No Business Condition found for id: '{}'. | INFO | No Business Condition found for id: '{}'. |
|  | I0053 | Aggregated {} search requests into one request during graph target identification | INFO | Contains one parameter for the number of search requests it aggregates. |
|  | I0054 | Impact {} request sent successfully. | INFO | Has no parameters |
|  | I0055 | {} Generic object status to be updated, {} Generic Object updated | INFO | Update generic object status information |
|  | I0056 | Emitting {} aggregated generic objects for {} incoming generic objects | INFO | Aggregation information |
|  | I0057 | Total Records {} : Extracted and Processed Records {} | INFO | Has two parameters, total records and extracted |
|  | I0058 | Total time taken to update the generic object status : {} ms | INFO | Has one parameter, total time taken to update |
|  | I0059 | Rule definition for given rule is syntactically correct. | INFO | Rule definition for given rule is syntactically correct. |
|  | T0001 | Generating DataObject Error | trace | Has no parameters |
|  | T0002 | Completed DataObject Error {} | trace | Has one parameter |
|  | T0003 | Generating Event Error | trace | Has no parameters |
|  | T0004 | Completed Event Error {} | trace | Has one parameter |
|  | T0005 | Request Body for request: {}, body: {} | trace | Has two parameters |
|  | T0006 | No new contexts found to populate default values | trace | Has no parameters |
|  | T0007 | Exiting find rules as change context is null | trace | Has no parameters |
|  | T0008 | No rule context mappings found for the request object type: {} | trace | Has one parameter |
|  | T0009 | No rules found | trace | Has no parameters |
|  | T0010 | Completed loading rules for data object id: {} with type: {} | trace | Has two parameters |
|  | T0011 | No default values model found to populate default values | trace | Has no parameters |
|  | T0012 | No validation model found to validate | trace | Has no parameters |
|  | T0301 | Activating Profiler | trace | Has no parameters |
|  | T0302 | Total time taken by this activity is {}ms | trace | Has no parameters |
|  | T0303 | Entering method [{}] | trace | Has no parameters |
|  | T0304 | Exit from method [{}] with inclusive time {}ms | trace | Has no parameters |
|  | T0305 | Exit from method [{}] | trace | Has no parameters |
|  | W0301 | ThreadContext does not contain startTime | Warn | Has no parameters |
|  | W0302 | ThreadContext does not contain methodList, this could occur if the profiler manager was not activated properly | Warn | Has no parameters |
|  | W0303 | Skipping method [{}] (No Entry logged) | Warn | Has no parameters |
|  | W0304 | Skipping method [{}] at time (No Exit logged) | Warn | Has no parameters |
|  | W0305 | isExportEnabled is set to false for entity export | Warn | isExportEnabled is set to false for entity export |
|  | W0306 | No configuration exists for entity export | Warn | No configuration exists for entity export |
|  | W0307 | Export configurations does not contain isExportEnabled property | Warn | Export configurations does not contain isExportEnabled property |
|  | W0308 | No Match Config exists for the entity type | Warn | No Match Config exists for the entity type |
|  | W0309 | Improperly configured match config | ERROR | Improperly configured match config |
|  | W0310 | Requested reference models: {} but found only {} | Warn | Reference Model doesn't exist for few attribute |
|  | W0311 | Incorrect 'authorizationType': '{}' found in request params. Applying fall back routine. | Warn | authzType was other than accommodate or reject. |
|  | W0312 | Data object compare: Nested attribute '{}' does not have unique identifier defined in model. The attribute value is '{}' | Warn | Missing model warning message for nested attributes. |
|  | W0313 | Ignoring Fields. Fields are not allowed when scroll is switched on. | Warn | Has no parameters |
|  | W0314 | No Reference Entity is found for the given value {} for refType {} | Warn | Reference Entity not found |
|  | W0315 | Multiple matches found, Warn details: request: {}, data: {} | Warn | Has two parameters |
|  | W0316 | Matched multiple entities | Warn | Has two parameters |
|  | W0317 | Permission Denied for attribute: {} for incoming request id: {} | Warn | Requires authorization |
|  | W0318 | Permission Denied for relationship attribute: {} for incoming request id: {} | Warn | Requires authorization |
|  | W0319 | Context resolution failed with exception for context: {} with nearest matching entityContextModel context: {} for entityType: {} | Warn | Parsing the properties or contextModel might not be correctly defined |
|  | W0320 | Parent Name could not be resolved to an Id for contextType: {} in the queryContext: {} | Warn | Context model or instance might not be correctly defined |
|  | W0321 | Coalesce Mode is not defined in matched entity context model: {} | Warn | Context model or instance might not be correctly defined |
|  | W0322 | Coalesce Usage is not defined in matched entity context model: {} | Warn | Context model or instance might not be correctly defined |
|  | W0323 | Properties is not defined in matched entity context model: {} for entityType: {},queryContext: {} | Warn | Context model or instance might not be correctly defined |
|  | W0324 | Coalesce Mode for Model is not enabled. Query Context: {}, Matched entityContextModel: {} | Warn | Context model or instance might not be correctly defined |
|  | W0330 | Configuration service getnearest attempted to match {} contexts, max recommended number of contexts to match is {} | Warn | Configuration service getnearest query exceeded the max recommended number of contexts to match. client should limit the number of nodes in the query getnearestPath. |
|  | W0331 | Configuration service getnearest query should not contain _ALL in the context | Warn | Configuration service getnearest query containing _ALL in the context will return indeterminate results. |
|  | W0332 | Get entity returns more than 1 context for {}. Can't apply reclassification based on model | Warn | Has no parameters |
|  | W0333 | Current limit of {} exceeded desired limit of {}. This was associated with the following activity: {} | Warn | Indicate that the limit was greater than the configured desired limit. The activity should give more context of when/what of the occurrence. |
|  | W0334 | Request is marked as complete. Additional event message that came in is {}. | Warn | Has no parameters |
|  | W0335 | Reached 50% of max {} allowed inner query scrolls for request: {} with params: {} | Warn | Has three parameters |
|  | W0336 | Reached max {} allowed inner query scrolls for request: {} with params: {} | Warn | Has three parameters |
|  | WR001 | Business Name not found for actor Name: {} in Service Specific config of Service: {}} | Warn | To Track the attribute name null error in request manage BL |
|  | VD001 | Json Format Incorrect: 'id' is required as String | ERROR | Json Format Incorrect: 'id' is required as String |
|  | VD002 | Json Format Incorrect: 'name' is required as String | ERROR | Json Format Incorrect: 'name' is required as String |
|  | VD003 | Json Format Incorrect: 'type' is required as String | ERROR | Json Format Incorrect: 'type' is required as String |
|  | VD004 | Json Format Incorrect: 'domain' is required as String | ERROR | Json Format Incorrect: 'domain' is required as String |
|  | VD005 | Json Format Incorrect: 'properties' is required as JsonObject | ERROR | Json Format Incorrect: 'properties' is required as JsonObject |
|  | VD006 | Json Format Incorrect: 'data' is required as JsonObject | ERROR | Json Format Incorrect: 'data' is required as JsonObject |
|  | VD007 | Json Format Incorrect: {} Construct is not allowed | ERROR | Json Format Incorrect: {} Construct is not allowed |
|  | VD008 | Json Format Incorrect: Expecting 'type' but not found | ERROR | Json Format Incorrect: Expecting 'type' but not found |
|  | VD009 | Json Format Incorrect: 'id' can not be null or empty | ERROR | Json Format Incorrect |
|  | VD010 | Json Format Incorrect: 'name' can not be null or empty | ERROR | Json Format Incorrect |
|  | VD011 | Json Format Incorrect: 'domain' can not be null or empty | ERROR | Json Format Incorrect |
|  | VD012 | Json Format Incorrect: 'type' can not be null or empty | ERROR | Json Format Incorrect |
|  | VD013 | Json Format Incorrect: Attribute {} expected to be Json Object | ERROR | Json Format Incorrect: Attribute {} expected to be Json Object |
|  | VD014 | Incorrect attribute name: {} can not be null or empty | ERROR | Incorrect attribute name |
|  | VD015 | Incorrect attribute name: {} Only alphabets are allowed | ERROR | Incorrect attribute name |
|  | VD016 | Json Format Incorrect: In Attribute {} Expecting 'values' to be Json Array | ERROR | Json Format Incorrect: In Attribute {} Expecting 'values' to be Json Array |
|  | VD017 | Json Format Incorrect: In Attribute {} Expecting 'value' to be Json Object | ERROR | Json Format Incorrect: In Attribute {} Expecting 'value' to be Json Object |
|  | VD018 | Json Format Incorrect: Relationship {} expected to be Json Array | ERROR | Json Format Incorrect |
|  | VD019 | Json Format Incorrect: Relationship {} can not be empty | ERROR | Json Format Incorrect: Relationship {} can not be empty |
|  | VD020 | Json Format Incorrect: In Relationship {} array, Expecting each element to be Json Object | ERROR | Json Format Incorrect |
|  | VD021 | Json Format Incorrect: In Relationship {} Expecting 'Attributes' to be Json Object | ERROR | Json Format Incorrect |
|  | VD022 | Json Format Incorrect: In Attribute {} Expecting 'properties' as JsonObject | ERROR | Json Format Incorrect: In Attribute {} Expecting 'properties' as JsonObject |
|  | VD023 | Json Format Incorrect: In Attribute {} Expecting 'group' as JsonObject | ERROR | Json Format Incorrect: In Attribute {} Expecting 'group' as JsonObject |
|  | VD024 | Json Format Incorrect: In Relationship {} Expecting 'properties' as JsonObject | ERROR | Json Format Incorrect |
|  | VD025 | Json Format Incorrect: {} Construct is not allowed in Attribute {} | ERROR | Json Format Incorrect: {} Construct is not allowed in Attribute {} |
|  | VD026 | Json Format Incorrect: In Attribute {} group can not be null | ERROR | Json Format Incorrect: In Attribute {} group can not be null |
|  | VD027 | Json Format Incorrect: In Nested Attribute {}, Expecting each element in group to be Json Object | ERROR | Json Format Incorrect |
|  | VD028 | Json Format Incorrect: 'properties' in data should be defined at entity level | ERROR | Json Format Incorrect |
|  | VD029 | Json Format Incorrect: In data, Expecting 'attributes' to be Json Object | ERROR | Json Format Incorrect |
|  | VD030 | Json Format Incorrect: In data, Expecting 'relationships' to be Json Object | ERROR | Json Format Incorrect |
|  | VD031 | Json Format Incorrect: In data, Expecting 'contexts' to be Json Array | ERROR | Json Format Incorrect |
|  | VD032 | Json Format Incorrect: In data, {} Construct is not allowed | ERROR | Json Format Incorrect |
|  | VD033 | Json Format Incorrect: 'action' is required as String | ERROR | Json Format Incorrect |
|  | VD034 | Json Format Incorrect: 'properties' in context is required as Json Object | ERROR | Json Format Incorrect |
|  | VD035 | Json Format Incorrect: In context, Expecting 'attributes' to be Json Object | ERROR | Json Format Incorrect |
|  | VD036 | Json Format Incorrect: In context, Expecting 'relationships' to be Json Object | ERROR | Json Format Incorrect |
|  | VD037 | Json Format Incorrect: In contexts, Expecting 'context' to be Json Object | ERROR | Json Format Incorrect |
|  | VD038 | Json Format Incorrect: In contexts, {} Construct is not allowed | ERROR | Json Format Incorrect |
|  | VD039 | Json Format Incorrect: In params, {} Construct is not allowed | ERROR | Json Format Incorrect |
|  | VD040 | Json Format Incorrect: 'query' is required as JsonObject | ERROR | Json Format Incorrect |
|  | VD041 | Json Format Incorrect: 'fields' is required as JsonObject | ERROR | Json Format Incorrect |
|  | VD042 | Json Format Incorrect: 'sort' is required as JsonObject | ERROR | Json Format Incorrect |
|  | VD043 | Json Format Incorrect: 'options' is required as JsonObject | ERROR | Json Format Incorrect |
|  | VD044 | Json Format Incorrect: 'ids' is required as Json Array of Strings | ERROR | Json Format Incorrect |
|  | VD045 | Json Format Incorrect: 'filters' is required as Json Object | ERROR | Json Format Incorrect |
|  | VD046 | Json Format Incorrect: 'contexts' is required as Json Array | ERROR | Json Format Incorrect |
|  | VD047 | Json Format Incorrect: 'valueContexts' is required as Json Array | ERROR | Json Format Incorrect |
|  | VD048 | Json Format Incorrect: In filters, {} Construct is not allowed | ERROR | Json Format Incorrect |
|  | VD049 | Json Format Incorrect: In filters, 'attributesCriterion' is required as Json Array | ERROR | Json Format Incorrect |
|  | VD050 | Json Format Incorrect: In filters, 'relationshipsCriterion' is required as Json Array | ERROR | Json Format Incorrect |
|  | VD051 | Json Format Incorrect: In filters, 'typesCriterion' is required as Json Array | ERROR | Json Format Incorrect |
|  | VD052 | Json Format Incorrect: In filters, 'nonContextual' is required as Boolean | ERROR | Json Format Incorrect |
|  | VD053 | Json Format Incorrect: In fields, 'attributes' is required as Json Array of Strings | ERROR | Json Format Incorrect |
|  | VD054 | Json Format Incorrect: In fields, 'relationships' is required as Json Array of Strings | ERROR | Json Format Incorrect |
|  | VD055 | Json Format Incorrect: In fields, 'properties' is required as Json Array of Strings | ERROR | Json Format Incorrect |
|  | VD056 | Json Format Incorrect: In fields, 'relationshipAttributes' is required as Json Array of Strings | ERROR | Json Format Incorrect |
|  | VD057 | Json Format Incorrect: In fields, {} Construct is not allowed | ERROR | Json Format Incorrect |
|  | VD058 | Json Format Incorrect: In options, {} Construct is not allowed | ERROR | Json Format Incorrect |
|  | VD060 | Request is empty | ERROR | Request is empty |
|  | VD061 | Json Format Incorrect: In filters, 'keywordsCriterion' is required as Json Object | ERROR | Json Format Incorrect |
|  | VD062 | Json Format Incorrect: In Attribute {}, invalid 'locale' format | ERROR | Json Format Incorrect |
|  | VD070 | Json Format Incorrect: 'operation' can not be null or empty | ERROR | Json Format Incorrect |
|  | VD071 | Json Format Incorrect: 'direction' can not be null or empty | ERROR | Json Format Incorrect |
|  | VD072 | Json Format Incorrect: 'operation' is required as String | ERROR | Json Format Incorrect |
|  | VD073 | Json Format Incorrect: 'direction' is required as String | ERROR | Json Format Incorrect |
|  | VD074 | Json Format Incorrect: In Relationship {} Expecting 'relTo' as JsonObject | ERROR | Json Format Incorrect |
|  | VD075 | Json Format Incorrect: Expecting JsonArray/JsonPrimitive in Property Value | ERROR | Json Format Incorrect |
|  | VD077 | Json Format Incorrect: In contexts, 'context' is not found | ERROR | Json Format Incorrect |
|  | VD078 | Json Format Incorrect: In contexts, Expecting each element to be Json Object | ERROR | Json Format Incorrect |
|  | VD079 | Json Format Incorrect: In case of getcoalesce ID is mandatory | ERROR | Json Format Incorrect |
|  | VD080 | Json Format Incorrect: In case of getnearest 'typesCriterion' cannot have more than one value | ERROR | Json Format Incorrect |
|  | VD081 | Json Format Incorrect: In fields, 'variantPathTypesCriterion' is required as Json Array | ERROR | Json Format Incorrect |
|  | VD082 | Json Format Incorrect: Prepare Scroll and Scroll required to be Json Primitive | ERROR | Json Format Incorrect |
|  | Req001 | Required attribute | ERROR | Has no parameters |
|  | MinLen001 | Minimum length | ERROR | Has no parameters |
|  | MaxLen001 | Maximum length | ERROR | Has no parameters |
|  | AlVal001 | Allowed value | ERROR | Has no parameters |
|  | Prec001 | Precision | ERROR | Has no parameters |
|  | Range001 | Range from inclusive | ERROR | Has no parameters |
|  | Range002 | Range to inclusive | ERROR | Has no parameters |
|  | Range003 | Range from exclusive | ERROR | Has no parameters |
|  | Range004 | Range to exclusive | ERROR | Has no parameters |
|  | Range005 | Range to inclusive from exclusive | ERROR | Has no parameters |
|  | Range006 | Range to inclusive from inclusive | ERROR | Has no parameters |
|  | Range007 | Range to exclusive from exclusive | ERROR | Has no parameters |
|  | Range008 | Range to exclusive from inclusive | ERROR | Has no parameters |
|  | InvalidVal001 | Invalid value | ERROR | Has no parameters |
|  | PD001 | Permission Denied, action not authorized for request id {}, check auth models | ERROR | Requires authorization |
|  | PD002 | **API response message:** Permission Denied, action not authorized for request id {},Check the request for ownerEditPermission attribute or ownershipEditData value in header<br/> **Troubleshooting message:** Permission Denied, user does not have submit permission for entity type {}, cannot create {} entity | ERROR | **API response:** Requires authorization<br/> **Troubleshooting:** Requires authorization |
|  | PD003 | Permission Denied, user is not part of the allowed roles for the activity '{}' in workflow '{}' | ERROR | Requires authorization.<br/> **Note**: This error message code is used only for  troubleshooting and it is not part of any API responses. |
|  | E0844 | Failed to evaluate keyword '{}', as parameter at index '{}' can only have the following values: '{}' | ERROR | Error occurred, has 3 params.<br/> **Note**: This error message code is used  only for troubleshooting and it is not part of any API responses. |
|  | DI001 | Created client for Zookeeper | INFO | Created new instance of zookeeper client |
|  | DI002 | Created client for Kafka | INFO | Created new instance of kafka client |
|  | DE001 | Could not get response from Zookeeper - {} | ERROR | Cannot get stream with offset for specific topic from zookeeper |
|  | DE002 | Could not get response from Kafka | ERROR | Cannot get stream with offset for specific topic from kafka |
|  | MB001 | Building spout for topic={}, zkhosts={}, groupId={} | ERROR | Storm spout creation error. |
|  | MBDepViolation001 | Invalid selection based on the selection of the parent attribute | ERROR | Invalid attribute selection. |
|  | BDF9000001 | The global exit date must occur chronologically after both the global launch date and global relaunch date (if given). | ERROR | Has no parameters |
|  | BDF9000002 | The global exit date must occur chronologically after the global relaunch date. | ERROR | Has no parameters |
|  | BDF9000003 | The global relaunch date must occur chronologically after the global launch date. | ERROR | Has no parameters |
|  | BDF9000004 | The local exit date must occur chronologically after both the local launch date and local relaunch date (if given). | ERROR | Has no parameters |
|  | BDF9000005 | The local exit date must occur chronologically after both local launch date and local relaunch date. | ERROR | Has no parameters |
|  | BDF9000006 | The local relaunch date must occur chronologically after the local launch date. | ERROR | Has no parameters |
|  | BDF9000007 | Duplicate ranking value entered. Please ensure that all ranking values are greater than zero and are used only once. | ERROR | Has no parameters |
|  | BDF9000008 | Complex attribute INCI is invalid. | ERROR | Has no parameters |
|  | BDF9000009 | Youtube URL format not accepted. URL must be in the following format: https://www.youtube.com/embed/*videoID*. Please also remove any eventual extra text | ERROR | Has no parameters |