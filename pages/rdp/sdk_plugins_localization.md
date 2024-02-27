---
title: Plugin Localization
sidebar: rdp_sidebar
permalink: sdk_plugins_localization.html
type: HowTo
folder: rdp
---

{% include snippets/disclaimer_internal.md %}

For plugins localization, the messages are translated as per the UIL (User Interaction Locale) across application. These messages are termed as **Custom Messages**. With the ability to use the Riversand UI in other locales, there is a need for configurators to setup their tenant specific or custom messages in supported locales.

The application allows you to add custom messages for supported locales. In order to get the template, download the message configuration file. Add the custom message details (Message codes, Messages, and Translations). The translated custom message and code must be added under tenant in respective locale message configuration.

{% include callout.html content="**Note**: The message codes should have prefix of cm (custom message) or prefix of their respective customer name/tenant name.

" type="primary" %} 

Consider that you wish to add a custom message for **Romanian (ro-RO)** locale in the **Recent Activity** widget.

**To consume the message codes using locale message manager utility methods**

1. Translate all the custom messages to required locales as per the business requirement.

{:start="2"}

2. Download the message configuration file, add the custom message details such as Message codes, Messages, and Translations for the locales, and import the details to the system. The translated messages and codes is consumed in 2 scenarios:

**Scenario 1:** Localize the message codes of the created component. The message codes that is to be localized is passed in the localize function.

* Import **RufElement** which includes the "localize()" function. 
  
{% picture localize-function.png alt="Localize Function" %}

Different types of usage of localize function are shown below: 

* Usage-1: this.localize(code);
* Usage-2: this.localize(code, key1, value1, key2, value2... etc);
* Usage-3: this.localize(code, [key1, value1, key2, value2... etc]);
* Usage-4: this.localize(code, {key1:value1, key2:value2... etc});

**Scenario 2:** To localize the messages which are part of the configuration data, perform these:

* In ui-platform-elements, a new function "localizeConfigData()" is available in localization-manager. Import **LocalizationManager** in your plugin.

{% picture localization-manager.png alt="LocalizationManager" %}

All the available message strings are translated as per the application locale.

* After successfully importing LocalizationManager, "onConfigSuccess" message appears. Call the "localizeConfigData()" function and pass the config response as parameter.

{% picture onconfig-success.png alt="Config Success" %}

* Import the **RufElement** which includes the "localize()" function. The message codes which is to be localized is passed in the localize function.

