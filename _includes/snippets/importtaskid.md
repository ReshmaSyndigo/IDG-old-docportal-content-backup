You can import multiple entities into the application using an excel template. A batch task is submitted for importing all the data from the import data excel. Each batch task has a unique task Id that can be used for further troubleshooting. You can get the import job task Id from the user interface after submitting the import job.

See [Tasks Progress Summary](/{{site.data.rdp_links_version.APP}}/user_dash_batch_jobs.html){:target="_blank"} for more information on **Tasks Progress Summary** and **Task Details**.

**To get the import job task Id from UI**:

1. On the navigation menu, click **Home App**.

    **Result**: The **Home** page is displayed with "My To-Do’s, Batch Jobs and Saved Searches" dashlets.

{:start="2"}

2. In the **Batch Jobs** dashlet, select "Type" as "Entity data imports".

   **Result**: All jobs matching the matching the search criteria are displayed on the search results.

{:start="3"}

3. Choose your file from the resulted search and click the corresponding **View Details** link to view the job details.

{% picture task-details.png alt="App Task Details" %}

**Result**: The **Task Detail** page is displayed with the processing details and list of entities imported. Make a note of the task Id. You can use the task Id for viewing further details in Kibana logs or through RESTful APIs.