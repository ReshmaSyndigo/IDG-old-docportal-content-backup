---
title: Build, Deploy, and Test Your Apps
sidebar: rdp_sidebar
permalink: sdk_build_and_test_apps.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %}

You can build, deploy, and test your apps using the Jenkins job details and Jenkins credentials provided by Riversand App Support Team.

**To build, deploy, and test your apps:**
1. Login to **Jenkins**.

**Result**: The **build requires parameters** page is displayed.

{% picture sdk-build-deploy-enable-1.png alt="Build, Deploy, and Test Your Apps" %}

{:start="2"}

2. Select **BuildOnly** from the **Type** drop-down list.

{% include callout.html content="**Notes:**
* You can build, deploy, and test only the given app repository.
* You have option to change the **AppRepoBranchName** locate to the latest code for which you want to generate the build. This field **AppRepoBranchName** displays Branch name from where you want to link your code for the App from App GIT repo.
* If you wish to change the repo name, you need to contact Riversand App Support Team.
" type="primary" %}

The following fields are read-only and you cannot modify them:

| Build Parameters | Description |
|-------- | --------------- | 
| RepoName | Displays the App GIT repo name. |
| AppRepoBranchName | Displays Branch name from where you want to link your code for your App from App GIT repo. |
| PodName | Displays the Pod on which this App is targeted. |
| TenantId | Displays the tenant on the pod ${PodName} where app is enabled. |
| DeploymentCodeBranch | Branch name from where code will be deployed. |

{:start="3"}

3.	Click **Build**.

**Result**: The build is generated after a successful deployment, and your App is ready for testing.
