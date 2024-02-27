---
title: Prepare to Deploy Connector App
sidebar: rdp_sidebar
permalink: deploy_connectorapp.html
folder: rdp
type: Description
---

The deployment and release management of Connector app will be integrated into Riversand build system. In order to submit the connector app into the RDP ecosystem, a Jenkins job will build, bundle, and store versioned bundles of the applications. These bundles are set of zip files that conform to a defined deployment template.

### Pre-requisites for Deployment

* It is important to use the valid SDK versions. Git workflows (integrated with Jenkins) automatically handles the **SNAPSHOT** and **RELEASE SDK** deployment. Currently, Git workflow integration to Jenkins is still a work in progress and SDKs will be manually deployed by connectors team. 

* Any Connector app uses two SDKs - **integration-extension** and **connectors-extension**.

  **pom.xml** file for dev/master branches in app repository should use the latest SNAPSHOT version of both integration and connector SDKs and must be updated after every release (say, 1.0.0-SNAPSHOT, 1.1.0-SNAPSHOT), as shown below:

{% picture snapshot-version.png alt="Snapshot Version of SDKs" %}

  Similarly, Release branches (Say, release-2020-r3-hf-dev) should use release version of the integration and connectors SDKs (Say, 1.0.0, 1.1.0), as shown below

{% picture release-version.png alt="Release Version of SDKs" %}

<br>

### Deployment Steps

To deploy the connector app, app developer must perform the following steps:

1. Request access to Jenkins Jobs

{:start="2"}

2. Login to [Jenkin Job link](https://jenkins-blaze.riversand-dataplatform.com/login?from=%2Fjob%2FApps%2Fjob%2FAppsBaseSetup%2F) and setup connector app base by running the Jenkins job when any connector app needs to be deployed for the first time on a new tenant. 

{% picture appbasesetup.png alt="Setup Connector App Base" %} 

{:start="3"}

3. In case of app changes to be deployed, login to [Jenkin Job link](https://jenkins-blaze.riversand-dataplatform.com/job/Apps/job/AppBuildAndDeployment/build?delay=0sec) run the Jenkin job which will perform complete operation from app build to deployment.

   a. Go to **Build with parameters** section and provide the following parameters:
   * **RepoName**: Connector app git repository name
   * **AppRepoBranchName**: Branch that needs to be deployed
   * **PodName**: Pod on which app will be enabled
   * **TenantId**: Tenant on the pod where app will be enabled

   b. Click **Build** to run the Jenkin Job.

{% picture appbuildanddeploy.png alt="Connector App Build and Deployment" %} 

{:start="4"}

4. When any connector app is ready for release, login to [Jenkin Job link](https://jenkins-blaze.riversand-dataplatform.com/job/Apps/job/BuildApp/build?delay=0sec). This Jenkin Job will build, bundle and release an app into release artifacts server.

   a. Go to **Build with parameters** section and provide the following parameters:
   * **RepoName**: Connector app git repository name
   * **BranchName**: Branch that needs to be deployed

   b. Click **Build** to run the Jenkin Job.

{% picture releaseappdeploy.png alt="Setup Release App" %} 

{:start="5"}

5. After running Jenkins Job for Release App, send a request to OPS team using the following Deployment Ticket Template:

   **Title**
   Please Deploy [CONNECTOR NAME] App on [TENANT ID]

   **Body**
   Include the following details:
   * App ID: [Example: app-gdsn]
   * App Version: [Example: 20.10.0]
     App Version can be found in version.properties of the App repository (Connector App versions follow year.month.patch format)
   * Repo Link: GitHub URL of the App repository
   * Branch Name: [Example: master]
   * Name of the branch from which the App needs to be deployed
   * Tenant ID
   * Pod

<br>

### View Deployment Status

 The app deployment runs through various steps and a successful deployment looks like the following:

{% picture deploy-success.png alt="Deployment Successful" %}  

The Jenkins Jobs may fail sometimes and is indicated as shown below:

{% picture deploy-failure.png alt="Deployment Failure" %}

In there is any failure during deployement, please raise an OPS ticket to find resolve the issue.

<br>

### Deployed Components

The Jenkins job will deploy the following components:

* **Configs**: The configs folder contains the following:
  * **addon-app-config**: This folder contains all the configurations ((such as, profiles, syndicationhubconfigs) that are directly deployed during an app build.
  * **default-model-config**: This folder contains reference configurations which need to be updated based on customer requirements.

* **Connectors**
  Each jar is deployed against one or more RDP services. The jar(s) in connectors folder will be deployed to appropriate services specified in the app/connectors/service-mappings.json file.

* **Resources** 
  If the connector app requires an eventhub/blob_container instance, then the configuration can be defined in resources folder. Accordingly, the Jenkins job will create the eventhub/blob_container automatically.

* **UI**: This folder contains UI components that are needed to be deployed as part of the app.

<br>

### Verify App Deployment

* Post deploying the connector app, verify whether the app is deployed by checking the version in [Plugins and Extensions](/{{site.data.rdp_links_version.ADM}}/sys_upload_extensions.html){:target="_blank"}.

* Also, you can verify the app in Postman using **configurationservice/get** API for **artifactConfig** type. For more details, refer [Configuration Services](api_configuration_service.html).

* You can also verify the deployed app using the **App Manager** in UI. For more details, refer [App Manager](/{{site.data.rdp_links_version.ADM}}/sys_app_manager.html){:target="_blank"} article. 
