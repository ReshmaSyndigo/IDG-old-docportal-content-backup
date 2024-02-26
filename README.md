# Setting up RDP-CMS (Content Management System) 
This document provides the instructions on how to install and setup the Riversand Data Platform (RDP) Content Management System (CMS) for documentation. RDP-CMS is using Jekyll, which is a simple, blog-aware, and static site generator. 

## Install GitHub and Create Git User Account
1. Go to Github.com and install GitHub. You can download and install Git for Windows.
2. Create Git user account.
3. Get access to "riversandtechnologies" private repository on GitHub. Example: https://github.com/riversandtechnologies
4. Sign into the repository and locate "dataplatform-sdk-docs" repository for documentation. Example: https://github.com/riversandtechnologies/dataplatform-sdk-docs 

## Install Markdown Files Editor
* Install Visual Studio Code or Sublime Text Editor on your local.

## Install Jekyll on Windows
For a fresh installation, you must download the Jekyll Documentation Theme source code and customize the documentation template as per your requirement.
For authors who wish to setup the environment for content development must clone the "dataplatform-sdk-docs" repository to their local directory. This repository has the Jekyll documentation theme template source code, which is customized for Riversand Data Platform documentation.

1. Create a local directory where you want to place the source code. Example: D:\RDP
2. Go to GitHub and locate "dataplatform-sdk-docs" repository. 
3. Select the branch to Master.
4. Go to Clone or Download drop-down list and copy the https clone url. 
5. Open a terminal on your local and browse to the newly created directory (D:\RDP) and type the following command:
git clone https://github.com/riversandtechnologies/dataplatform-sdk-docs.git
This successfully clones the Jekyll documentation theme source code to your local directory.

### Install Ruby
Jekyll is a Ruby-based program and needs Ruby to run.

1. Go to RubyInstaller for Windows. 
2. Under RubyInstallers, download and install the latest Ruby installers.
3. Double-click the downloaded file and proceed through the wizard to install it. Note that during installation, you must select all options when it prompts for choosing options.

### Install Ruby Development Kit
A few Jekyll extensions require you to natively build the code using the Ruby Development Kit. 

1. Go to RubyInstaller for Windows.
2. Under the Development Kit section, download the latest Ruby 2.0 and above options (either the 32-bit or 64-bit version).
3. Create a directory "RubyDevKit" on your local "C drive" and move your downloaded file into this folder.
4. Extract the compressed folder’s contents into the folder. Note that for the subsequent steps, for the issuing commands, you must be at the RubyDevKit location on your C drive and use Command Line Prompt unless otherwise mentioned.
5. Browse to the RubyDevKit location on your C drive using your Command Line Prompt. 
Type the command :  > ruby dk.rb init
Type the command :  > ruby dk.rb install

### Install the Jekyll Gems
At this stage, you must have installed Ruby and Rubygem on your machine. Now, use gem to install Jekyll by issuing the following command:
> gem install Jekyll

Here is the possible error that might be occurring when installing gems.
Error: Could not find a valid gem 'jekyll' (>= 0), here is why: Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
Solution: Type the following commands:

> gem sources --remove https://rubygems.org/
> gem sources -a http://rubygems.org/
> gem install jekyll

### Install Bundler

1. To install the gem bundler type the following command: 
> gem install bundler

2. To initialize the bundler and create a new Gemfile in the RubyDevKit location, type the following command:
> bundle init

3. Open the Gemfile in a text editor. Typically you can open the file from the Command Prompt by typing the filename, but because Gemfile doesn’t have a file extension, no program will automatically open it. You may need to use your File Explorer and browse to the directory, and then open the Gemfile in a text editor such as Notepad.
4. Remove the existing contents and then, paste in the following content:
source "https://rubygems.org"
gem 'wdm'
gem 'jekyll'
The wdm gem allows for the polling of the directory and rebuilding of the Jekyll site when you make changes. This gem is needed for Windows users, not Mac users.
5. Save and close the file.
6. Now install the bundle by issuing the following command: 
> bundle install

Bundle retrieves all the needed gems and gem dependencies and downloads them to your computer. At this time, Bundle also takes a snapshot of all the gems used in your project and creates a Gemfile.lock file to store this information.

After execution of this command, few dependency/version errors might be occurring. You need to type the command that is prompted.  
............
Using bundler 1.13.5
Gem::RemoteFetcher::FetchError: SSL_connect returned=1 errno=0 state=SSLv3 read
server certificate B: certificate verify failed
(https://rubygems.org/gems/addressable-2.4.0.gem)
An error occurred while installing addressable (2.4.0), and Bundler cannot
continue.
Make sure that `gem install addressable -v '2.4.0'` succeeds before bundling.
............
Solution: You need to type the command that is given at end of error displayed, starting with text “Make sure...”. 
Example: For the above mentioned error, type the following command:
> gem install addressable -v '2.4.0'

Once you fix it, another dependency error might be thrown, which is similar to above, could be with some other gem. Need to follow the same solution.
Here is the list of dependencies that may occur. You need to fix all of these dependencies: 
gem install wdm -v '0.1.1'
gem install addressable -v '2.5.0'
gem install colorator -v '1.1.0'
gem install ffi -v '1.9.14'
gem install forwardable-extended -v '2.6.0'
gem install sass -v '3.4.22'
gem install rb-fsevent -v '0.9.7'
gem install kramdown -v '1.12.0'
gem install liquid -v '3.0.6'
gem install mercenary -v '0.3.6'
gem install rouge -v '1.11.1'
gem install safe_yaml -v '1.0.4'
gem install bundler -v '1.13.6'
gem install rb-inotify -v '0.9.7'
gem install pathutil -v '0.14.0'
gem install jekyll-sass-converter -v '1.4.0'

### Git Clients for Windows
Although you can use the default command prompt with Windows, it’s recommended that you use Git Bash instead. The Git Bash client will allow you to run shell scripts and execute other Unix commands.

## Build Documentation 
You must serve the Jekyll Documentation theme to view the output.

1. In the Command Line Prompt, browse to the directory where you have downloaded the Source Code for Jekyll. Example: D:\RDP\dataplatform-sdk-docs
2. Type the following command: 
> jekyll serve

Error: The error that could be seen at this time in setup is:
............
definition.rb:179:in `rescue in specs': Your bundle is locked to i18n (0.7.0), but that version could not be found in any of the sources listed in your Gemfile. If you haven't changed sources, that means the author of i18n (0.7.0) has removed it. You'll need to update your bundle to a different version of i18n (0.7.0) that hasn't been removed in order to install. (Bundler::GemNotFound)
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/bundler-1.13.5/lib/bundler/definition.rb:173:in `specs'
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/bundler-1.13.5/lib/bundler/definition.rb:233:in `specs_for'
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/bundler-1.13.5/lib/bundler/definition.rb:222:in `requested_specs'
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/bundler-1.13.5/lib/bundler/runtime.rb:118:in `block in definition_method'
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/bundler-1.13.5/lib/bundler/runtime.rb:19:in `setup'
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/bundler-1.13.5/lib/bundler.rb:99:in `setup'
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/jekyll-3.3.0/lib/jekyll/plugin_manager.rb:36:in `require_from_bundler'
        from C:/Ruby_install_dir/lib/ruby/gems/2.3.0/gems/jekyll-3.3.0/exe/jekyll:9:in `<top (required)>'
        from C:/Ruby_install_dir/bin/jekyll:23:in `load'
        from C:/Ruby_install_dir/bin/jekyll:23:in `<main>'
............
Solution: Copy the Gemfile and Gemfile.lock file from your RubyDevKit directory which is present /c drive, to your current directory. (Your Source Code directory for Documentation theme for Jekyll)

3. Re-type the command:
> jekyll serve

4. From the output locate the local host server address and copy that address. Example: http://127.0.0.1:4005/dataplatform-sdk-docs/
5. Open any browser and paste the address to launch the documentation site, which is hosted locally.
6. If you make any changes in the source code and would like preview the output locally, need to build the server locally. Type the following command:
> Press Control C to select the option for terminating the job: say Yes 
> bundle exec jekyll serve

## Prepare Documentation
Quick start for authors:
* Create home page main menu and submenus (book titles) in _Data > topnav.yaml file
* Create sidebar ToC on left side of the home page for each book including topics and subtopics in _Data > _sidebars > rdp_sidebar.yaml
* Create markdown files for each topic under the directory "Pages". 
* See Getting started with the Documentation Theme for Jekyll at http://idratherbewriting.com/documentation-theme-jekyll/ for more information.

## Publish Documentation
### On the Review DocPortal for Review 
You can publish the running documentation for review purpose on the remote server (MahiRSPub at 192.168.1.169).

1. On your local, locate the output folder "_site". Example: D:\RDP\dataplatform-sdk-docs\_site 
2. Copy the entire output content.
3. Open the remote server using your Windows authentication.
4. Go to the review directory, for example E:\RDP-Review, and paste the output content.
5. Open the browser and paste the review docURL at http://mahirspub.riversand.com/rdp-review/

### On the Internal DocPortal for Internal Users
You can publish the reviewed documentation on internal docportal in the remote server (MahiRSPub at 192.168.1.169) for internal users.

1. On your local, locate the output folder "_site". Example: D:\RDP\dataplatform-sdk-docs\_site 
2. Copy the entire output content.
3. Open the remote desktop connection as an administrator and launch the remote server using your Windows authentication.
4. Go to the internal docportal directory, for example E:\RDP_Doc_Portal\sdkdocs1, and paste the output content.
5. Open the browser and paste the docURL at http://mahirspub.riversand.com/rdp/sdkdocs1/index.html

### On the External DocPortal for External Users
You can publish the released documentation on external docportal on the cloud server (MahiRSPub at 192.168.1.169) for external users.

1. On your local, locate the output folder "_site". Example: D:\RDP\dataplatform-sdk-docs\_site 
2. Copy the entire output content.
3. Open the remote desktop connection as an administrator and launch the cloud server using server address (162.254.26.37:5389) and user credential. 
4. Go to the exnternal docportal directory, for example C:\DocTeam\RDP_Doc_Portal\sdkdocs1 or C:\DocTeam\RDP_Doc_Portal\appdocs1, and paste the output content.
5. Open the browser and paste the docURL at http://docs.riversand.com/rdp/sdkdocs1/index.html
6. Enter the user credentails in the login page to access the documentation. 