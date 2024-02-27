---
title: Release Your Apps
sidebar: rdp_sidebar
permalink: sdk_build_deploy_and_enable_tenant_apps.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %}

You can release your Apps using the Jenkins Job Details and Jenkins credentials provided by Riversand App Support Team.

**To release your apps:**
1. Login to **Jenkins**.

**Result**: The **build requires parameters** page is displayed.

{% picture sdk-build-deploy-enable.png alt="Release Your Apps" %}

{:start="2"}

2. Select **Release** from the **Type** drop-down list.

{% include callout.html content="**Notes**:
* You can release tenant for the given app repository.
* You have the option to change the **AppRepoBranchName** locate to the latest code for which you want to generate the build. This field **AppRepoBranchName** displays the Branch name from where you want to link your code for the App from App GIT repo.
* If you wish to change the repo name, you need to contact Riversand App Support Team.
" type="primary" %}

The following fields are read-only and you cannot modify them:

| Build Parameters | Description |
|-------- | --------------- | 
| RepoName | Displays the App GIT repo name. |
| AppRepoBranchName | Displays Branch name from where you want to link your code for your App from App GIT repo. |
| PodName | Displays the Pod on which this App is targeted. |
| TenantId | Displays the tenant on the pod ${PodName} where the app is enabled. |
| DeploymentCodeBranch | Branch name from where code will be deployed. |

{:start="3"}

3.	Click **Build**.

**Result**: The build is released for your App.
