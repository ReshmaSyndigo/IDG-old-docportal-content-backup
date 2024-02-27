---
title: Launch and Test the Sample app
sidebar: rdp_sidebar
permalink: analytics_build_test_app.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

Riversand allows the app developer to launch, test and deploy the sample app, built and hosted in git repository. In order to do this, the developer need to do the following steps:

### Configure Python Libraries

* The sample app 'Helloworld' app uses python. Make sure to have the python 3.6 installed.

* Users of Ubuntu may have different python versions installed based on the version of Ubuntu. It is recommended to install **pyenv** which allows the different versions of python to be installed and used. 

* All python job definitions require 'virtual environment' in the code directory. This virtual environment contains the dependent libraries that the batch job needs to operate. 

* In **requirements.txt** file, see the libraries (for say, pygelf and azure-cosmos) that needs to be installed into the virtual environment. 

<br>

### Build and Deploy

To build and deploy the the helloworld application, do the following:

* Run the **test-deploy.sh** script located in the base application directory. This script simply runs the following:

**${APPS_SDK_DIR}/code/batch/deployment/application/publish.sh rsbatch-east-test**

* Set the environment variable **BATCH_STORAGE_KEY** as part of running this script.

  **BATCH_STORAGE_KEY="XXXXXXXXXXXXXX" ./test-publish.sh**

* Get the storage key from the Analytics Infrastructure developers.

  This script will package up the deployment artifact and push into the batch system, which will be further available for testing.



