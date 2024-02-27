---
title: Build Analytics Facet Components
sidebar: rdp_sidebar
permalink: analytics_components.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

In the application infrastructure, App developers can build four types of functionality that will eventually be supported. Currently, only analytics components and UI components are supported.

This article describes about the components of Analytics facet and its usage in runtime environment.

#### test-publish.sh

This is a simple bash script that launches the application 'publish' script from Apps SDK. When launched, this script will copy the configuration files to the target 'storage account' for this batch instance, package up the application, and subsequently push it to the batch application repository.

The following bash script is a sample test-publish.sh

<pre>
<code>
#!/usr/bin/env bash

. ${APPS_SDK_DIR}/code/batch/deployment/application/publish.sh rsbatch-east-test
</code>
</pre>

<br>

#### application.json

This is a JSON configuration that identifies the application that is being built and its dependencies on other facets.

**Sample application.json**

<pre>
<code>
{
    "id": "helloworld",
    "description": "This is a sample application",
    "developer": "riversand",
    "sdkDependencies" :{
      "uiPluginSDK": "1.2.0"
      "analyticsSDK": "1.0.0" 
      "connectorsSDK": "1.1.0"
      "visualizationSDK": "1.3.0"
    }
}
</code>
</pre>

The following table describes the required parameters to identify the application and its dependencies:

| Property | Description |
|-----------|-------------|
| id | Unique identifier for the application |
| description | A brief description of the appication |
| developer | The name of the partner who developed this application |
| sdkDependencies | The target versions of the SDKs/facets that this application function with |

<br>

#### .vscode/settings.json

This JSON configuration is required when the system is using **pyenv**. However, **Python 3.7** is the default version on this system.

<pre>
<code>
{
    "python.pythonPath": "/home/XYZ/.pyenv/versions/3.6.10/bin/python"
}
</code>
</pre>

<br>

#### .vscode/launch.json

This JSON configuration is required to run or debug a simple app in VS Code. Here, you need to reference the path to the python support libraries, that are provided in the Apps SDK. This library supports task summary updates, external events, RDP log forwarding, and so on.

The following is a sample launch configuration created and added to the corresponding workspace:

<pre>
<code>
{
"version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Current File",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "env": {
                "PYTHONPATH": "${APPS_SDK_DIR}/code/batch/util/python"
            }
        }
    ]
}
</code>
</pre>

For more information, refer to [Debugging](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) section.

<br>

#### batch/job_defs

The 'batch' directory hosts the batch applications. 'Job definitions' directory is currently included. This directory hosts the jobs that is used to configure the batch application.

##### batch/job_defs/simple-job-py

This directory hosts the python job definitions that forms the batch application.

Sample **batch/job_defs/simple-job-py/job_def.json**:

<pre>
<code>
{
    "id": "simple-helloworld",
    "runtime": "python",
    "executable": "helloworld.py",
    "code_path": "code",
    "rdp_task_status": {
        "rdp_task_type": "Hello World",
        "file_stream_type": "autoappAzureBlobStore"
    },
    "config_properties": {
        "MY_CONFIG1": "config1",
        "MY_CONFIG2": "a-{TENANT}-b",
        "MY_CONFIG3": "{MY_CONFIG1}-{MY_CONFIG2}",
        "SAMPLE_SUB_STR": "config1"
    },
    "environment_variables": {
        "ENVIRONMENT1": "{{MY_CONFIG3}}"
    },
    "input_files": [
        {
            "source_storage": "tenant",
            "source_container": "helloworld-config",
            "file_pattern": "/input/*",
            "output_path": "input_files/"
        }
    ],
    "output_files": [
        {
            "destination_storage": "tenant",
            "destination_container": "helloworld-output",
            "file_pattern": "output/*",
            "output_path": "files"
        }
    ]
}
</code>
</pre>

This configuration file defines the batch job and how it executes:

| Property | Description |
|----------|--------------|
|  id  | Identifies the job definition. It should consist of characters[a-z and 0-9] |
| runtime | This is the runtime environment used to execute the batch job. There are three currently supported languages: python (uses the python 3.6 interpreter), java (uses the OpenJDK8) and node (uses node version 8.10). |
| executable | The name of the python_script_path or node_script_path or jar_name to execute. In general, this will be located in the root 'code_path' directory. |
| code_path |  The relative path from the job definition directory of the program files that form the execution code. This directory and all subdirectories are collected in executable package that runs on the batch instance. |
| rdp_task_status | Information about the task summary page that is displayed for the batch job. | 
| config_properties | Configuration settings that can be used as substitution strings either in setting environment variables when executing the job or, any resource files that are copied to the working directory of the job. |
| environment_variables | Contains list of the additional environment variables for executing the python application. |
| input_files | Identifies data files that should be downloaded to the local working directory prior to execution of batch job. The source of these files is batch storage, and different batch accounts can be specified to get the data from. This includes source_storage account, source_container, file_pattern and output_path. | 
| output_files | Defines which data files should be collected from the current working directory and the location in which output files should be sent. This includes destination_storage account, destination_container, file_pattern and output_path. |