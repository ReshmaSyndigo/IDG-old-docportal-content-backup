---
title: List of Healthcheck APIs
sidebar: rdp_sidebar
permalink: api_troubleshooting_healthcheckAPI.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Healthcheck APIs helps you to monitor the functioning and health of the system.

{% include callout.html content="**Notes:** 
* The Healthcheck APIs do not require any authentication, header or payload and can be invoked by calling the URL directly using curl or on the browser.
* This API supports only JSON files.
* The timeout for Healthcheck API is 60 seconds.
" type="primary" %} 

The following are the list of Healthcheck APIs with sample responses: 

<div class="panel-group" id="accordion">
	<div class="panel panel-default">
	    <div class="panel-heading">
	        <h4 class="panel-title">
	            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">configurationservice/get</a>
	        </h4>
	    </div>
	    <div id="collapseOne" class="panel-collapse collapse noCrossRef">
	        <div class="panel-body">	
	        	<p><b>Technology Impacted</b>: 7075, Elastic Search</p>
	        	<p><b>Remediation</b>: Ensures that netty and elastic are healthy and can communicate with each other</p>
	        	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/configurationservice/get</p>
	        	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
		<pre><code>
		{
		  "status": "error",
		  "msg": "Failed to execute healthcheck path for the configurationservice/get service and verify result. Check configuration and contact administrator",
		  "detail": {
		    "request": {},
		    "response": {},
		    "stats": {
		      "timeTaken": -1,
		      "verificationTimeTaken": -1,
		      "noOfVerificationProbs": -1,
		      "verificationProbTotalWait": -1
		    }
		  }
		}
		</code></pre> 	        	
	        </div>
	    </div>
	</div> 
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">configurationservice/create</a>
		    </h4>
		</div>
		<div id="collapseTwo" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm ( 2 topologies - entityappservice, entitymanageservice) , Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check errors on kibana<br>* Verify lags on Kafka topics<br>* Check the two topologies<br>* Kafka health<br>* Zookeeper health</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/configurationservice/create</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "configurationservice/create call returned with success status.",
			  "detail": {
			    "request": {
			      "dataIndex": "config",
			      "configObject": {
			        "id": "healthcheckConfiguration_f3271170-aab0-11e8-97b7-5da5d4296b16_healthcheck",
			        "name": "Health check configuration - f3271170-aab0-11e8-97b7-5da5d4296b16",
			        "type": "apihealthcheckconfig",
			        "properties": {},
			        "data": {
			          "attributes": {
			            "externalName": {
			              "values": [
			                {
			                  "locale": "en-US",
			                  "source": "internal",
			                  "id": "a34e1439-98b2-43ef-b954-f017848a3893",
			                  "value": "Health check configuration f3271170-aab0-11e8-97b7-5da5d4296b16 created by health path"
			                }
			              ]
			            },
			            "timestamp": {
			              "values": [
			                {
			                  "source": "internal",
			                  "locale": "en-US",
			                  "value": "2018-08-28T10:56:00.519-0500"
			                }
			              ]
			            }
			          }
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "45774c9e-d2ce-49bb-bd8e-04e0d25490eb"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "message": "Entity has been submitted for create with entity Id : healthcheckConfiguration_f3271170-aab0-11e8-97b7-5da5d4296b16_healthcheck. Please check back after 1 min"
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 105.452839,
			      "verificationTimeTaken": 12.616215,
			      "noOfVerificationProbs": 2,
			      "verificationProbTotalWait": 2000
			    },
			    "cleanupResponse": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "f39cfa61-8288-48a7-96a6-bdf72fd13d34"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "message": "Entity has been submitted for update with entity Id : healthcheckConfiguration_f3271170-aab0-11e8-97b7-5da5d4296b16_healthcheck. Please check back after 1 min"
			        },
			        "totalRecords": 0
			      }
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
	    <div class="panel-heading">
	        <h4 class="panel-title">
	            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">entityappmodelservice/get</a>
	        </h4>
	    </div>
	    <div id="collapseThree" class="panel-collapse collapse noCrossRef">
	        <div class="panel-body">
	        	<p><b>Technology Impacted</b>: 7075, Elastic Search</p>
	        	<p><b>Remediation</b>: Ensures that netty and elastic are healthy and can communicate with each other</p>
	        	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/entityappmodelservice/get</p>
	        	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
		<pre><code>
		{
		  "status": "error",
		  "msg": "Failed to execute healthcheck path for the entityappmodelservice/get service and verify result. Check configuration and contact administrator",
		  "detail": {
		    "request": {},
		    "response": {},
		    "stats": {
		      "timeTaken": -1,
		      "verificationTimeTaken": -1,
		      "noOfVerificationProbs": -1,
		      "verificationProbTotalWait": -1
		    }
		  }
		}
		</code></pre> 	        	
	        </div>
	    </div>
	</div> 
	<div class="panel panel-default">
	    <div class="panel-heading">
	        <h4 class="panel-title">
	            <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">entityappmodelservice/getcomposite</a>
	        </h4>
	    </div>
	    <div id="collapseFour" class="panel-collapse collapse noCrossRef">
	        <div class="panel-body">
	        	<p><b>Technology Impacted</b>: 7075, Elastic Search</p>
	        	<p><b>Remediation</b>: Ensures that netty and elastic are healthy and can communicate with each other</p>
	        	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/entityappmodelservice/getcomposite</p>
	        	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
		<pre><code>
		{
		  "status": "error",
		  "msg": "Failed to execute healthcheck path for the entityappmodelservice/getcomposite service and verify result. Check configuration and contact administrator",
		  "detail": {
		    "request": {},
		    "response": {},
		    "stats": {
		      "timeTaken": -1,
		      "verificationTimeTaken": -1,
		      "noOfVerificationProbs": -1,
		      "verificationProbTotalWait": -1
		    }
		  }
		}
		</code></pre> 	        	
	        </div>
	    </div>
	</div>
	<div class="panel panel-default">
	        <div class="panel-heading">
	            <h4 class="panel-title">
	                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">entityappservice/get</a>
	            </h4>
	        </div>
	        <div id="collapseFive" class="panel-collapse collapse noCrossRef">
	            <div class="panel-body">
	            	<p><b>Technology Impacted</b>: 7075, Elastic Search</p>
	            	<p><b>Remediation</b>: Ensures that netty and elastic are healthy and can communicate with each other</p>
	            	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/entityappservice/get</p>
	            	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "error",
			  "msg": "Failed to execute healthcheck path for the entityappservice/get service and verify result. Check configuration and contact administrator",
			  "detail": {
			    "request": {},
			    "response": {},
			    "stats": {
			      "timeTaken": -1,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre> 	            	
	            </div>
	        </div>
	</div>
	<div class="panel panel-default">
	        <div class="panel-heading">
	            <h4 class="panel-title">
	                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">entityappservice/create</a>
	            </h4>
	        </div>
	        <div id="collapseSix" class="panel-collapse collapse noCrossRef">
	            <div class="panel-body">
	            	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (2 topologies - entityappservice, entitymanageservice), Kafka, Zookeeper</p>
	            	<p><b>Remediation</b>: <br/>* Check errors on kibana<br>* Verify lags on Kafka topics<br>* Check two topologies<br>* Kafka health<br>* Zookeeper health</p>
	            	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/entityappservice/create</p>
	            	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "entityappservice/create call returned with success status.",
			  "detail": {
			    "request": {
			      "dataIndex": "entityData",
			      "entity": {
			        "id": "healthcheckEntity_5d198640-aab0-11e8-97b7-5da5d4296b16_healthcheck",
			        "name": "Health check entity - 5d198640-aab0-11e8-97b7-5da5d4296b16",
			        "type": "healthcheck",
			        "properties": {},
			        "data": {
			          "attributes": {
			            "externalName": {
			              "values": [
			                {
			                  "locale": "en-US",
			                  "source": "internal",
			                  "id": "a34e1439-98b2-43ef-b954-f017848a3893",
			                  "value": "Health check entity 5d198640-aab0-11e8-97b7-5da5d4296b16 created by health path"
			                }
			              ]
			            },
			            "timestamp": {
			              "values": [
			                {
			                  "source": "internal",
			                  "locale": "en-US",
			                  "value": "2018-08-28T10:51:48.773-0500"
			                }
			              ]
			            }
			          }
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "43be34fd-3dd7-4c6c-a8f6-21fae8a47b2a"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "messages": [
			            {
			              "messageCode": "I0011",
			              "message": "Entity has been submitted for create with entity Id : healthcheckEntity_5d198640-aab0-11e8-97b7-5da5d4296b16_healthcheck. Please check back after 1 min",
			              "messageType": "success"
			            }
			          ]
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 3.92364,
			      "verificationTimeTaken": 12.567213,
			      "noOfVerificationProbs": 2,
			      "verificationProbTotalWait": 2000
			    },
			    "cleanupResponse": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "c69bc939-2717-4d2d-87aa-dabb0e64e71e"
			      },
			      "response": {
			        "status": "error",
			        "statusDetail": {
			          "messages": [
			            {
			              "message": "Permission Denied",
			              "messageCode": "PD001",
			              "messageType": "error"
			            }
			          ]
			        },
			        "totalRecords": 0
			      }
			    }
			  }
			}
			</code></pre>	            	
	            </div>
	        </div>
	</div> 
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">entityappservice/update</a>
		    </h4>
		</div>
		<div id="collapseSeven" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm ( 2 topologies - entityappservice, entitymanageservice) , Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check errors on kibana<br>* Verify lags on Kafka topics<br>* Check the two topologies<br>* Kafka health<br>* Zookeeper health</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/entityappservice/update</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "entityappservice/update call returned with success status",
			  "detail": {
			    "request": {
			      "dataIndex": "entityData",
			      "entity": {
			        "id": "healthcheckEntity1_healthcheck",
			        "name": "Health check entity - 1",
			        "type": "healthcheck",
			        "properties": {},
			        "data": {
			          "attributes": {
			            "externalName": {
			              "values": [
			                {
			                  "locale": "en-US",
			                  "source": "internal",
			                  "id": "a34e1439-98b2-43ef-b954-f017848a3893",
			                  "value": "Health check entity 1"
			                }
			              ]
			            },
			            "timestamp": {
			              "values": [
			                {
			                  "source": "internal",
			                  "locale": "en-US",
			                  "value": "2018-08-28T10:53:39.935-0500"
			                }
			              ]
			            }
			          }
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "0b76910f-df3a-4d08-ba0c-488a4dabb883"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "messages": [
			            {
			              "messageCode": "I0013",
			              "message": "Entity has been submitted for update with entity Id : healthcheckEntity1_healthcheck. Please check back after 1 min",
			              "messageType": "success"
			            }
			          ]
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 3.838969,
			      "verificationTimeTaken": 15.530665,
			      "noOfVerificationProbs": 2,
			      "verificationProbTotalWait": 2000
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseEight">matchservice/search</a>
		    </h4>
		</div>
		<div id="collapseEight" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search</p>
		    	<p><b>Remediation</b>: Ensures that netty and elastic are healthy and can communicate with each other</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/matchservice/search</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "All is well...! matchservice/search call returned with data.",
			  "detail": {
			    "request": {
			      "dataIndex": "entityData",
			      "entity": {
			        "type": "healthcheck",
			        "data": {
			          "attributes": {
			            "externalName": {
			              "values": [
			                {
			                  "value": "Health check entity",
			                  "source": "internal",
			                  "locale": "en-US"
			                }
			              ]
			            }
			          }
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "59cfd44d-654a-4b44-9550-40dfb8030687"
			      },
			      "response": {
			        "entities": "[ all the match entities - multiple records]",
			        "status": "success",
			        "totalRecords": 281
			      }
			    },
			    "stats": {
			      "timeTaken": 39.112472,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseNine">copservice/process</a>
		    </h4>
		</div>
		<div id="collapseNine" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 9095, Kafka</p>
		    	<p><b>Remediation</b>: Check 9095 netty Kafka, lag</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/copservice/process</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "All is well...! copservice/process call returned with data.",
			  "detail": {
			    "request": {
			      "dataIndex": "dataObjects",
			      "dataObject": {
			        "id": "ecee1950-80f5-11e8-be78-6b28aed9298a",
			        "dataObjectInfo": {
			          "dataObjectType": "entityjson"
			        },
			        "properties": {
			          "createdByService": "user interface",
			          "createdBy": "user",
			          "createdDate": "2016-07-16T18:33:52.412-07:00",
			          "filename": "",
			          "encoding": "Base64",
			          "service": "ENTITY_IMPORT",
			          "channel": "UI",
			          "format": "Excel",
			          "source": "internal",
			          "user": "system",
			          "subtype": "system",
			          "order": 10
			        },
			        "data": {
			          "blob": "BIG BLOB DATA"
			        }
			      }
			    },
			    "response": {
			      "dataObjectOperationResponse": {
			        "status": "success",
			        "statusDetail": {
			          "code": "RSC1002",
			          "message": "Binary object has been submitted for create with work automation id : 6e5a0bfd-ea63-47b4-937d-2ea063572366. Please check back after 10 mins.",
			          "messageType": "Info"
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 162.675292,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">copservice/downloadDataExcel</a>
		    </h4>
		</div>
		<div id="collapseTen" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/copservice/downloadDataExcel</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "All is well...! copservice/process call returned with data.",
			  "detail": {
			    "request": {
			      "dataIndex": "dataObjects",
			      "dataObject": {
			        "id": "ecee1950-80f5-11e8-be78-6b28aed9298a",
			        "dataObjectInfo": {
			          "dataObjectType": "entityjson"
			        },
			        "properties": {
			          "createdByService": "user interface",
			          "createdBy": "user",
			          "createdDate": "2016-07-16T18:33:52.412-07:00",
			          "filename": "",
			          "encoding": "Base64",
			          "service": "ENTITY_IMPORT",
			          "channel": "UI",
			          "format": "Excel",
			          "source": "internal",
			          "user": "system",
			          "subtype": "system",
			          "order": 10
			        },
			        "data": {
			          "blob": "BIG BLOB DATA"
			        }
			      }
			    },
			    "response": {
			      "dataObjectOperationResponse": {
			        "status": "success",
			        "statusDetail": {
			          "code": "RSC1002",
			          "message": "Binary object has been submitted for create with work automation id : 6e5a0bfd-ea63-47b4-937d-2ea063572366. Please check back after 10 mins.",
			          "messageType": "Info"
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 162.675292,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">copservice/downloadDataExcel</a>
		    </h4>
		</div>
		<div id="collapseEleven" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/copservice/downloadDataExcel</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "All is well...! copservice/process call returned with data.",
			  "detail": {
			    "request": {
			      "dataIndex": "dataObjects",
			      "dataObject": {
			        "id": "ecee1950-80f5-11e8-be78-6b28aed9298a",
			        "dataObjectInfo": {
			          "dataObjectType": "entityjson"
			        },
			        "properties": {
			          "createdByService": "user interface",
			          "createdBy": "user",
			          "createdDate": "2016-07-16T18:33:52.412-07:00",
			          "filename": "",
			          "encoding": "Base64",
			          "service": "ENTITY_IMPORT",
			          "channel": "UI",
			          "format": "Excel",
			          "source": "internal",
			          "user": "system",
			          "subtype": "system",
			          "order": 10
			        },
			        "data": {
			          "blob": "BIG BLOB DATA"
			        }
			      }
			    },
			    "response": {
			      "dataObjectOperationResponse": {
			        "status": "success",
			        "statusDetail": {
			          "code": "RSC1002",
			          "message": "Binary object has been submitted for create with work automation id : 6e5a0bfd-ea63-47b4-937d-2ea063572366. Please check back after 10 mins.",
			          "messageType": "Info"
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 162.675292,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve">binaryobjectservice/get</a>
		    </h4>
		</div>
		<div id="collapseTwelve" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/binaryobjectservice/get</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "All is well...! binaryobjectservice/get call returned with data.",
			  "detail": {
			    "request": {
			      "dataIndex": "binaryObject",
			      "params": {
			        "query": {
			          "contexts": [
			            {
			              "app": "app-system-healthcheck"
			            }
			          ],
			          "filters": {
			            "typesCriterion": [
			              "apihealthcheckbinaryobject"
			            ]
			          },
			          "id": "healthcheck_apihealthcheckbinaryobject"
			        },
			        "fields": {
			          "properties": [
			            "_ALL"
			          ]
			        },
			        "options": {
			          "maxRecords": 2000,
			          "includeRequest": false
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "params": {},
			        "requestId": "03ae3996-066f-45bc-b55b-143553fb7f42",
			        "maxRecords": 2000
			      },
			      "response": {
			        "binaryObjects": [
			          {
			            "id": "healthcheck_apihealthcheckbinaryobject",
			            "name": "healthcheckbinaryobject",
			            "type": "apihealthcheckbinaryobject",
			            "properties": {
			              "encoding": "Base64",
			              "createdService": "binaryObjectManageService",
			              "createdBy": "system_user",
			              "createdDate": "2018-08-27T05:47:01.619-0500",
			              "modifiedService": "binaryObjectManageService",
			              "modifiedBy": "system_user",
			              "modifiedDate": "2018-08-27T05:47:01.619-0500"
			            },
			            "data": {
			              "blob": "ew0KICAgImlkIjogIjEiLA"
			            }
			          }
			        ],
			        "status": "success",
			        "totalRecords": 1
			      }
			    },
			    "stats": {
			      "timeTaken": 69.84098,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div> 
	{% if site.build == "internal" %}
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThirteen">entitymodelservice/create</a>
		    </h4>
		</div>
		<div id="collapseThirteen" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/entitymodelservice/create</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "entitymodelservice/create call returned with success status.",
			  "detail": {
			    "request": {
			      "dataIndex": "entityModels",
			      "entityModel": {
			        "id": "healthcheckEntityModel-f354d0d0-aab3-11e8-97b7-5da5d4296b16_entityManageModel",
			        "name": "Health check entity model - f354d0d0-aab3-11e8-97b7-5da5d4296b16",
			        "type": "entityManageModel",
			        "domain": "generic",
			        "properties": {},
			        "data": {
			          "attributes": {
			            "externalName": {
			              "values": [
			                {
			                  "locale": "en-US",
			                  "source": "internal",
			                  "id": "a34e1439-98b2-43ef-b954-f017848a3893",
			                  "value": "Health check entity model f354d0d0-aab3-11e8-97b7-5da5d4296b16 created by health path"
			                }
			              ]
			            },
			            "timestamp": {
			              "values": [
			                {
			                  "source": "internal",
			                  "locale": "en-US",
			                  "value": "2018-08-28T11:17:29.309-0500"
			                }
			              ]
			            }
			          }
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "params": {},
			        "requestId": "03f4f895-75b2-4ead-a44f-d8ab7d1ceea8"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "message": "Entity has been submitted for create with entity Id : healthcheckEntityModel-f354d0d0-aab3-11e8-97b7-5da5d4296b16_entityManageModel. Please check back after 1 min"
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 106.982709,
			      "verificationTimeTaken": 17.119816,
			      "noOfVerificationProbs": 2,
			      "verificationProbTotalWait": 2000
			    },
			    "cleanupResponse": {
			      "request": {
			        "returnRequest": false,
			        "params": {},
			        "requestId": "cd886936-d82f-424e-89e7-4a3a4cc16281"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "message": "Entity has been submitted for delete with entity Id : healthcheckEntityModel-f354d0d0-aab3-11e8-97b7-5da5d4296b16_entityManageModel. Please check back after 1min"
			        },
			        "totalRecords": 0
			      }
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFourteen">entitymodelservice/update</a>
		    </h4>
		</div>
		<div id="collapseFourteen" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/entitymodelservice/update</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "entitymodelservice/update call returned with success status",
			  "detail": {
			    "request": {
			      "dataIndex": "entityModels",
			      "entityModel": {
			        "id": "healthcheck_entityManageModel",
			        "name": "Health check entity Manage Model- 1",
			        "type": "entityManageModel",
			        "properties": {},
			        "data": {
			          "attributes": {
			            "externalName": {
			              "values": [
			                {
			                  "locale": "en-US",
			                  "source": "internal",
			                  "id": "a34e1439-98b2-43ef-b954-f017848a3893",
			                  "value": "Health check entity manage model 1"
			                }
			              ]
			            },
			            "timestamp": {
			              "values": [
			                {
			                  "source": "internal",
			                  "locale": "en-US",
			                  "value": "2018-08-28T11:19:15.076-0500"
			                }
			              ]
			            }
			          }
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "params": {},
			        "requestId": "8ce3ee7c-17f8-44cd-984a-1c958da790ae"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "message": "Entity has been submitted for update with entity Id : healthcheck_entityManageModel. Please check back after 1 min"
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 7.500188,
			      "verificationTimeTaken": 10.550053,
			      "noOfVerificationProbs": 2,
			      "verificationProbTotalWait": 2000
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	{% endif %}
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFifteen">internal/configurationservice/get</a>
		    </h4>
		</div>
		<div id="collapseFifteen" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br/>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/internal/configurationservice/get</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "All is well...! internal/configurationservice/get call returned with data.",
			  "detail": {
			    "request": {
			      "dataIndex": "config",
			      "params": {
			        "query": {
			          "contexts": [
			            {
			              "app": "app-system-healthcheck"
			            }
			          ],
			          "filters": {
			            "typesCriterion": [
			              "apihealthcheckconfig"
			            ]
			          },
			          "id": "healthcheckglobalsettings_apihealthcheckconfig"
			        },
			        "fields": {
			          "attributes": [
			            "_ALL"
			          ]
			        },
			        "options": {
			          "maxRecords": 2000,
			          "includeRequest": false
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "4fa9bbaf-3b3d-4b61-bb12-91cb64814b16",
			        "maxRecords": 2000
			      },
			      "response": {
			        "configObjects": [
			          {
			            "id": "healthcheckglobalsettings_apihealthcheckconfig",
			            "name": "healthcheckglobalsettings",
			            "type": "apihealthcheckconfig",
			            "properties": {
			              "createdByService": "entityservice",
			              "createdBy": "system_user",
			              "createdService": "configurationManageService",
			              "createdDate": "2018-09-12T01:51:35.726-0500",
			              "modifiedService": "configurationManageService",
			              "modifiedBy": "system_user",
			              "modifiedDate": "2018-09-12T01:51:35.726-0500"
			            },
			            "data": {
			              "contexts": [
			                {
			                  "context": {
			                    "app": "app-system-healthcheck"
			                  },
			                  "jsonData": {
			                    "config": {
			                      "configKey1": {
			                        "configKey11": "configVal11",
			                        "configKey12": "configVal12"
			                      },
			                      "configKey2": "configVal2"
			                    }
			                  }
			                }
			              ]
			            }
			          }
			        ],
			        "status": "success",
			        "totalRecords": 1
			      }
			    },
			    "stats": {
			      "timeTaken": 8.019381,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSixteen">internal/entityappservice/get</a>
		    </h4>
		</div>
		<div id="collapseSixteen" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/internal/entityappservice/get</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "warning",
			  "msg": "internal/entityappservice/get call returned without any data. Check the system.",
			  "detail": {
			    "request": {
			      "dataIndex": "entityData",
			      "params": {
			        "query": {
			          "id": "healthcheckEntity1_healthcheck",
			          "filters": {
			            "typesCriterion": [
			              "healthcheck"
			            ]
			          }
			        },
			        "fields": {
			          "attributes": [
			            "_ALL"
			          ],
			          "relationships": [
			            "_ALL"
			          ]
			        },
			        "options": {
			          "maxRecords": 2000,
			          "includeRequest": false
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "5513cc68-5122-4c9b-a8f4-e6151def3fd4",
			        "maxRecords": 2000
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "messages": [
			            {
			              "message": "No objects found",
			              "messageCode": "I012",
			              "messageType": "info"
			            },
			            {
			              "messageCode": "VD058",
			              "message": "Json Format Incorrect: In options, includeRequest Construct is not allowed",
			              "messageType": "ERROR"
			            }
			          ]
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 13.045732,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSeventeen">internal/entityappmodelservice/get</a>
		    </h4>
		</div>
		<div id="collapseSeventeen" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/internal/entityappmodelservice/get</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "All is well...! internal/entityappmodelservice/get call returned with data.",
			  "detail": {
			    "request": {
			      "dataIndex": "entityModel",
			      "params": {
			        "query": {
			          "filters": {
			            "typesCriterion": [
			              "entityManageModel"
			            ]
			          },
			          "ids": [
			            "healthcheck_entityManageModel"
			          ]
			        },
			        "fields": {
			          "attributes": [
			            "_ALL"
			          ],
			          "relationships": [
			            "_ALL"
			          ]
			        },
			        "options": {
			          "maxRecords": 2000,
			          "includeRequest": false
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "params": {},
			        "requestId": "d958cece-47a4-4ba4-be79-6a3358858337"
			      },
			      "response": {
			        "entityModels": [
			          {
			            "id": "healthcheck_entityManageModel",
			            "name": "Health check entity Manage Model- 1",
			            "type": "entityManageModel",
			            "properties": {
			              "createdService": "entityManageModelService",
			              "createdBy": "system_user",
			              "createdDate": "2018-09-12T01:51:35.772-0500",
			              "modifiedService": "entityManageModelService",
			              "modifiedBy": "system_user",
			              "modifiedDate": "2018-09-12T01:59:10.527-0500"
			            },
			            "data": {
			              "attributes": {
			                "externalName": {
			                  "values": [
			                    {
			                      "locale": "en-US",
			                      "source": "internal",
			                      "id": "e6de3003-4ba6-40be-89c1-4d3a962e7c45",
			                      "value": "Health check entity manage model 1"
			                    }
			                  ],
			                  "properties": {
			                    "externalName": "External Name",
			                    "groupName": "Healthcheck Attributes",
			                    "dataType": "string"
			                  }
			                },
			                "timestamp": {
			                  "values": [
			                    {
			                      "source": "internal",
			                      "locale": "en-US",
			                      "id": "74b4f8e8-203e-4326-a7ac-be2b5e256f98",
			                      "value": "2018-09-12T06:59:10.488-0500"
			                    }
			                  ],
			                  "properties": {
			                    "externalName": "Timestamp",
			                    "groupName": "Healthcheck Attributes",
			                    "dataType": "datetime"
			                  }
			                }
			              }
			            }
			          }
			        ],
			        "status": "success",
			        "totalRecords": 1
			      }
			    },
			    "stats": {
			      "timeTaken": 7.87418,
			      "verificationTimeTaken": -1,
			      "noOfVerificationProbs": -1,
			      "verificationProbTotalWait": -1
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
    </div>
    <div class="panel panel-default">
		<div class="panel-heading">
		    <h4 class="panel-title">
		        <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseEighteen">internal/entityappservice/create</a>
		    </h4>
		</div>
		<div id="collapseEighteen" class="panel-collapse collapse noCrossRef">
		    <div class="panel-body">
		    	<p><b>Technology Impacted</b>: 7075, Elastic Search, storm (1 topologies), Kafka, Zookeeper</p>
		    	<p><b>Remediation</b>: <br>* Check 7075<br>* Check Elastic Search<br>* Check hadoop,hdfs/blob</p>
		    	<p><b>URL</b>: {TenantURL or ID}/data/healthcheck/internal/entityappservice/create</p>
		    	<p><b>Sample Response</b>: The following JSON demonstrates a sample response:</p>
			<pre><code>
			{
			  "status": "success",
			  "msg": "internal/entityappservice/create call returned with success status.",
			  "detail": {
			    "request": {
			      "dataIndex": "entityData",
			      "entity": {
			        "id": "healthcheckEntity_aff52c40-b666-11e8-9d84-c32ed9bdb314_healthcheck",
			        "name": "Health check entity - aff52c40-b666-11e8-9d84-c32ed9bdb314",
			        "type": "healthcheck",
			        "properties": {},
			        "data": {
			          "attributes": {
			            "externalName": {
			              "values": [
			                {
			                  "locale": "en-US",
			                  "source": "internal",
			                  "id": "a34e1439-98b2-43ef-b954-f017848a3893",
			                  "value": "Health check entity aff52c40-b666-11e8-9d84-c32ed9bdb314 created by health path"
			                }
			              ]
			            },
			            "timestamp": {
			              "values": [
			                {
			                  "source": "internal",
			                  "locale": "en-US",
			                  "value": "2018-09-12T08:34:38.980-0500"
			                }
			              ]
			            }
			          }
			        }
			      }
			    },
			    "response": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "05f53ba9-d8b8-4419-bd9f-b05ba477597f"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "messages": [
			            {
			              "messageCode": "I0011",
			              "message": "Entity has been submitted for create with entity Id : healthcheckEntity_aff52c40-b666-11e8-9d84-c32ed9bdb314_healthcheck. Please check back after 1 min",
			              "messageType": "success"
			            }
			          ]
			        },
			        "totalRecords": 0
			      }
			    },
			    "stats": {
			      "timeTaken": 4.85805,
			      "verificationTimeTaken": 38.737145,
			      "noOfVerificationProbs": 3,
			      "verificationProbTotalWait": 7000
			    },
			    "cleanupResponse": {
			      "request": {
			        "returnRequest": false,
			        "requestId": "5121559e-eb89-44e4-994e-c64438d3d959"
			      },
			      "response": {
			        "status": "success",
			        "statusDetail": {
			          "messages": [
			            {
			              "messageCode": "I0015",
			              "message": "Entity has been submitted for delete with entity Id : healthcheckEntity_aff52c40-b666-11e8-9d84-c32ed9bdb314_healthcheck. Please check back after 1min",
			              "messageType": "success"
			            }
			          ]
			        },
			        "totalRecords": 0
			      }
			    }
			  }
			}
			</code></pre>
		    </div>
		</div>
    </div>
</div>

## stats

This object provides statistical information of healthcheck API request. The following table lists the details of the stats object:

| Property | Description | 
|----------|-------------|
| timeTaken | Indicates the time taken to execute the request. | 
| verificationTimeTaken | Indicates the time taken for verification of healthcheck API. It is indicated in terms of seconds. |   
| noOfVerificationProbs | Indicates the total number of times the verification has taken place. | 
| verificationProbTotalWait | Indicates the waiting time set for verification of healthcheck API. It is indicated in terms of milliseconds. |

{% include callout.html content="**Note**: 
An error has occured if the value of all the above four parameters of the stats object indicate -1. 
" type="primary" %}