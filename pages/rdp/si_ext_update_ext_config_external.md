---
title: Update "Components" in Configuration File
sidebar: rdp_sidebar
permalink: si_ext_update_ext_config.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

Upload Extensions widget in UI allows you to upload JAR extension files multiple times. A JAR or Java Archive file is a bundle of JAVA class files where the class files consist of transform logic which is used to client specific logic based on the business requirement. To support this, custom jars are developed.

Upload Extension jar capability is applicable for all services, though it is currently used by connect and connectorService.

For a given service, you can upload many jar files, but each jar file is tied to a single artifact configuration file. Artifact configurations are used to map the channel from the connector profile with their respective classes. This configuration allows the platform to find the respective jar, the class when an import/export operation is called. The artifact specific configuration file contains the **jar** file for each data format. The **rsConnect** service contains configuration details specific to **Connector facet**. The **components** section in the **rsConnect** service contains details about the extractor, transform, and loader components. By default, certain out-of-the-box (OOTB) extractors, loaders, and transformers are already available in the section. 

Update the following values for custom extension:

| Property | Description |
|----------|------------|
| recordExtractors | Indicates the classname that contains logic to extract data from source file. |
| recordTransformers | Indicates the classname that contains logic to transform data from one format to another format. |
| recordLoaders | Indicates the classname that contains logic to load the data from the source file to destination format. |

<!-- **Sample artifactConfig file**

Download <a href="files/01-Configurations/artifactconfig-rsconnectservice.json" download>Sample artifactConfig JSON</a>. -->

Every time you upload a jar file, the system will consider it as the new version of the previously uploaded jar file. The latest version number jar file is identified by pom.xml, project/version element. When you are ready to upload/deploy, ensure that this version number is updated.

 **artifactConfig file**

 Each custom jar has its own configuration. The jar file has a manifest file (artifactconfig.json). A sample can be found in this [git repository](https://github.com/riversandtechnologies/addon-app-template/blob/dev/connectors/rshub-box/src/main/resources/artifactconfig.json).

It is mandatory to provide unique **artifactKey** value. It is recommended to use 'urn style prefix/suffix' string names along with the channel identifier. For example, "artifactKey": "com.acme-corp.bigcommerce-syndication".

Note that **recordExtractor/recordLoader** format type keys also have to be unique. It is recommended to have names like **recordExtractors/ACME_BIGCOMMERCE_EXTRACT**

 <!-- {% picture artifactfile.png alt="artifactConfig file location" %} -->

<!-- ### Update Version for Custom JAR

Each custom jar has its own configuration. When user uploads the jar from UI, the jar file has a manifest json file which has the below information.

<pre>
<code>
{
  "artifact": "venzee-hub-{version}.jar",
  "artifactKey": "USER FRIENDLY AND UNIQUE NAME; USED AS NAME AND ID BY ADMIN SERVICE. GIT WILL HAVE STATIC NAMES",
  "version": version,
  "components": {
      "recordExtractors": {
        "VENZEERESPONSE": {
            "className": "com.riversand.connectors.venzeehub.VenzeeInboundExtractor"
                    },
        "VENZEEWITHDRAWJSON": {
            "className": "com.riversand.connectors.venzeehub.VenzeeWithdrawExtractor"
                    }
                },
      "recordLoaders": {
        "VENZEEJSON": {
            "className": "com.riversand.connectors.venzeehub.VenzeeOutboundLoader"
                    },
        "VENZEEWITHDRAWJSON": {
            "className": "com.riversand.connectors.venzeehub.VenzeeWithdrawLoader"
                    }
                }
            }
        }
</code>
</pre>

The above information is retrieved along with the service information (retrieved from UI while uploading) and a configuration is created as shown below. 

The **artifactKey** in the configuration populates the **name** and **id** of the object before saving the data.

The following are the sample jar files that are split and manually updated.

**Venzeehub-syndication jar**

<pre>
<code>
{
    "id": "venzeehub-syndication_artifactConfig",
    "name": "venzeehub-syndication",
    "type": "artifactConfig",
    "properties": {
        "createdService": "configurationManageService",
        "createdBy": "_UNASSIGNED",
        "modifiedService": "configurationManageService",
        "modifiedBy": "_UNASSIGNED",
        "createdDate": "2020-02-24T06:14:59.787-0600",
        "modifiedDate": "2020-02-24T06:14:59.787-0600",
        "serviceName": "connectorService_importexport"

    },
    "data": {
        "jsonData": {
            "artifact": "venzee-hub-{version}.jar",
            "artifactKey": "USER FRIENDLY AND UNIQUE NAME; USED AS NAME AND ID BY ADMIN SERVICE. GIT WILL HAVE STATIC NAMES",
            "components": {
                "recordExtractors": {
                    "VENZEERESPONSE": {
                        "className": "com.riversand.connectors.venzeehub.VenzeeInboundExtractor"
                    },
                    "VENZEEWITHDRAWJSON": {
                        "className": "com.riversand.connectors.venzeehub.VenzeeWithdrawExtractor"
                    }
                },
                "recordLoaders": {
                    "VENZEEJSON": {
                        "className": "com.riversand.connectors.venzeehub.VenzeeOutboundLoader"
                    },
                    "VENZEEWITHDRAWJSON": {
                        "className": "com.riversand.connectors.venzeehub.VenzeeWithdrawLoader"
                    }
                }
            }
        }
    }
}
</code>
</pre>

**rshub-sftp config**

<pre>
<code>
{
    "id": "rshub-sftp_artifactConfig",
    "name": "rshub-sftp",
    "type": "artifactConfig",
    "properties": {
        "createdService": "configurationManageService",
        "createdBy": "_UNASSIGNED",
        "modifiedService": "configurationManageService",
        "modifiedBy": "_UNASSIGNED",
        "createdDate": "2020-02-24T06:14:59.787-0600",
        "modifiedDate": "2020-02-24T06:14:59.787-0600",
        "serviceName": "connectorService_importexport"
    },
    "data": {
        "jsonData": {
            "artifact": "rshub-sftp-version.jar",
            "artifactKey": "USER FRIENDLY AND UNIQUE NAME; USED AS NAME AND ID BY ADMIN SERVICE. GIT WILL HAVE STATIC NAMES",
            "components": {
                "recordExtractors": {
                    "SFTPDATA": {
                        "className": "com.riversand.connectors.rshub.SFTPExtractor"
                    }
                },
                "recordLoaders": {
                    "SFTPDATA": {                        
                        "className": "com.riversand.connectors.rshub.SFTPLoader"
                    }
                }
            }
        }
    }
 }
 </code>
 </pre> -->

 <br/>

{% include callout.html content="**Note:**
* The user must not upload the same version jar again, version number/patch number must be incremented.(eg: previous version 1.0.0 and new version should be 2.0.0).
* It is required to update the version information for the respective jars in the manifest file. If manifest file is missing in the jar, upload process will display error message.
* When a new jar file is uploaded, the previous jar files become inactive. Currently, the application does not consist of grooming job process, to remove the older jar files.
* If you are using the old configuration, you need to manually update the configuration to new one.
* The system does not maintain the history for migrated configurations.
* recordLoaders, recordExtractors, and recordTransformers is an array of format such as JSON and the corresponding className and jar file that implements the logic to support the format.
* Once you upload a new jar file, you must wait for 30 minutes to view the processing of the new jar. This is configurable at the pod level.
* Recommended jar size is up to 50MB.
" type="primary" %}

For more information on how to upload extension JARs, see [Upload Extensions](/{{site.data.rdp_links_version.ADM}}/sys_upload_extensions.html){:target="_blank"}.
