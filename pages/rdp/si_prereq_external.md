---
title: Setup Pre-requisites for Developing Custom Extension (Integration and Connector)
sidebar: rdp_sidebar
permalink: si_prereq.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_preview.md %}

To extend the application, Riversand SDK allows you to develop an Add-On App with Integration and Connector capabilities. This section describes the tools that are required to be installed in the environment to code, compile, and to develop your App.

In order to develop custom extension for integration and connectors, you need to set up the following development environment.

### Prerequisites to build the Connectors project

1. Install Ubuntu 18+ Operating System. Note that, other Linux based OS types might work but are not tested.

{:start="2"}

2. Install the [Java Platform 1.8 (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

{:start="3"}

3. Ensure the 'JAVA_HOME' environment variable points to your JDK installation.

   * Start a bash shell. This is the default shell used by the Terminal application.
   * Run the command: **env / grep JAVA**. 
   * You should see a line starting with: **JAVA_HOME**.
   * If not, add it to your **.bashrc** file as follows:
     * Edit the **.bashrc** file using this command: **vi ~/.bashrc**.
     * Move to the end of the file with the arrow keys and press the "a" key (which puts vi into append mode); start a new line after the comment: # User specific aliases and functions.
     * Enter the text: **export JAVA_HOME=** (append with the appropriate path to your java installation).
     * Add another line: **export PATH=$PATH:$JAVA_HOME/bin**.
     * Press the **Esc** key, followed by :wq (which writes your changes and quits vi).
     * Reload the **.bashrc** file: **source ~/.bashrc**. 

{:start="4"}

4. Install [Apache Maven](https://maven.apache.org/install.html).

{:start="5"}

5. Add the Maven 'bin' directory to your 'PATH' environment variable. 

   See the above example of updating the path by editing the **.bashrc** file. 
   For example, your **.bashrc** file might now contain 
   **export PATH=$PATH:$JAVA_HOME/bin:/opt/apache-maven-{VERSION}/bin**

<br>

### Building the Project

Once you get access to **addon-app-template** git repository, the following steps are required to build and compile the connector sample facet.

On the solution maven project:

{:start="1"}

1. Refer **connectors/settings.xml** to access the connector sample facet.

   * Add your git username and access token (can be generated at this [Git location](https://github.com/settings/tokens) in **Personal Access Token** section).
   * Copy the **settings.xml** to **~/.m2**.

{:start="2"}

2. Change directory to the solution project:

   **cd ~/git/addon-app-template/connectors** 

{:start="3"}

3. Clean up all directories using this command: **mvn clean**.

{:start="4"}

4. Compile the projects using this command: **mvn compile**.

{:start="5"}

5. Package the jars according to each individual settings in each module level project using this command: **mvn package**. 

{:start="6"}

6. To get the package without running tests, run this command: **mvn package -DskipTests**.