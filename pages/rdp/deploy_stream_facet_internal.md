---
title: Prepare to Deploy Add-on Stream Processing Facet
sidebar: rdp_sidebar
permalink: deploy_stream_facet.html
folder: rdp
type: Description
---

The deployment and release management of Add-on streaming topology will be integrated into the Riversand build system. In order to submit the streaming topology into the RDP ecosystem, a Jenkins job will build, bundle, and store versioned bundles of the applications. These bundles are a set of zip files that conform to a defined deployment template.

### Pre-requisites for Deployment

The app developer should add the dependency, dataplatform-streaming-framework in the module’s **pom.xml** file for dev/master branches in app repository. The SDK is part of riversand-sdk-registry.

### Deployment Steps

To deploy the Add-on stream processing app, the app developer must perform the following steps:

1. Request access to Jenkins Jobs

{:start="2"}

2. Login to [Jenkin Job link](https://jenkins-blaze.riversand-dataplatform.com/login?from=%2Fjob%2FApps%2Fjob%2FAppsBaseSetup%2F) and set up stream processing app base by running the Jenkins job when any stream processing app needs to be deployed for the first time on a new POD. 

{% picture appbasesetup.png alt="Setup Stream Processing App Base" %} 

{:start="3"}

3. In case of app changes to be deployed, login to [Jenkin Job link](https://jenkins-blaze.riversand-dataplatform.com/job/Apps/job/AppBuildAndDeployment/build?delay=0sec) run the Jenkin job which will perform the complete operation from app build to deployment.

   a. Go to **Build with parameters** section and provide the following parameters:
   * **RepoName**: Stream processing app git repository name
   * **AppRepoBranchName**: Branch that needs to be deployed
   * **PodName**: Pod on which app will be enabled
   * **TenantId**: Tenant on the pod where the app will be enabled

   b. Click **Build** to run the Jenkin Job.

{% picture appbuildanddeploy.png alt="Stream processing App Build and Deployment" %} 

{:start="4"}

4. When any stream processing app is ready for release, login to [Jenkin Job link](https://jenkins-blaze.riversand-dataplatform.com/job/Apps/job/BuildApp/build?delay=0sec). This Jenkin Job will build, bundle and release the app into release artifacts server.

   a. Go to **Build with parameters** section and provide the following parameters:
   * **RepoName**: Stream processing app git repository name
   * **BranchName**: Branch that needs to be deployed

   b. Click **Build** to run the Jenkin Job.

{:start="5"}

5. After running Jenkins Job for Release App, send a request to the Support team using the following Deployment Ticket Template:

   **Title**
   Please Deploy [CONNECTOR NAME] App on [TENANT ID]

   **Body**
   Include the following details:
   * App ID: [Example: app-greeter]
   * App Version: [Example: 20.10.0]
     App Version can be found in version.properties of the App repository 
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

In there is any failure during deployment, please raise a ticket to the Support team to resolve the issue.

<br>

### Verify App Deployment

* Post deploying the Add-on stream processing app, verify whether the app is deployed by checking the version in [Plugins and Extensions](/{{site.data.rdp_links_version.ADM}}/sys_upload_extensions.html){:target="_blank"}.

* Also, you can verify the app in Postman using **configurationservice/get** API for **artifactConfig** type. For more details, refer [Configuration Services](api_configuration_service.html).

* You can also verify the deployed app using the **App Manager** in UI. For more details, refer [App Manager](/{{site.data.rdp_links_version.ADM}}/sys_app_manager.html){:target="_blank"} article. 
