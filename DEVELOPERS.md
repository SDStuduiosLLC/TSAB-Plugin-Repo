# TSAB Developers Notice

Yes, it's long, but please read it. It contains important information that could affect your submition of new, or existing plugins. Also, read the "legal bit", especially the [Developer ToS](#developer-tos) as it contains information which could negatively affect your plugin.

---

### Creating A Plugin
When creating a plugin, design and program it in TypeScript, then compile it to JavaScript. This helps keep TSAB typesafe.

You can access the template by going to [/plugins/@sdstudios/templatePlugin.js](/plugins/@sdstudios/templatePlugin.js) or by running ```tsab plugin-install @sdstudios/pluginTemplate```. 
> Running the TSAB command, will also prompt the CLI to download and install the required dependancies to create a plugin, including our custom modules.

Your plugin should follow the naming scheme `@github-username/plugin-name.js`. Make sure the GitHub username is the one of the user creating the pull request, unless you are submitting on behalf of a GitHub organisation, in that case, make sure to highlight this in your pull request, it may cause your plugin to be denied for [impersonation](#2-impersonation) if it's not under your name or an organisation you are part of names.

---

### Submitting A Plugin

#### Initial Submition
When submitting a plugin to the repo for initial launch, make sure to fill out the `pluginData` area with up to date and accurate information.

If you do use extra NPM packages, it may take us longer to review and verify your plugins.

No matter if you use extra packages or not, if you hear nothing from us in your pull request after two weeks, feel free to ping us or email us at [tsab@sd-studios.ml](mailto:tsab@sd-studios.ml) and we'll try and get back to you ASAP.

#### Updating A Plugin
When updating your plugin, make sure to update the `version` feild in the `pluginData` area so the CLI tool knows a new update is ready to be downloaded.

#### Deleting A Plugin
Due to the open source nature of the TSAB plugin repo, we cannot specifically delete your plugin, but we can add a marker to signal to the CLI that the plugin is depracated and is no longer being maintained.

---

### The Legal Stuff
First of all, I'm not a lawyer, and I'm not hiring one to write this, so it is not perfect, but it's staying. Though, if any lawyer is reading this, feel free to make it, ya know, correct.

#### Licence Infringements
If someone has infringed upon your codes licence, please email us at [tsab@sd-studios.ml](mailto:tsab@sd-studios.ml) with the following information;

* Link to infringing plugin
* Username(s) of the users infringing on your licence
* Link to your open source code
* Your username on the platform where your code is hosted

If we find the code to be infringing, we will flag it on our backend, to signal the TSAB CLI to delete the plugin when it next attempts to update the plugin.

We cannot outright delete the code though, due to the open source nature of the TSAB plugin repo.

#### Developer ToS
By submitting your code to the TSAB Open Source Plugin Repository, you hereby agree to these terms, as well as GitHub, Discord and any other services ToS that you use or access from within your code, and used during the development and maintainance cycle.

##### 1. Code Safety and Security
When submitting a plugin for launch, or updating it, you confirm that your code is a safe as possible, does not use out of date packages (where applicable, e.g. using an old package as new ones are broken. If this happens, please note this in your pull request.)

If your code is found to _unintentionally_ contain dangerous or outdated code, we will deny the merge and ask you to fix the code. If your code is found to have _intentional_ malicious code, your pull request itself will be; denied, closed, branch deleted, and you will be given one more "strike" before you are blacklisted for either 30 or 90 days from submitting new plugins or updating existing ones.

##### 2. Impersonation
When submitting a plugin, you may only submit one under your name, or an GitHub organasation you are part of name. If you attempt to submit a plugin under someone elses name, attempting to appear like someone elses name, or impersonating SDStudios or a SDStudios employee, your submition will be denied and deleted.
