# motolog

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build

Run `grunt` for building and `grunt serve` for preview.

Run `grunt build` to generate `dist` folder which is used in production

## Development

Run `sails generate api <apiName>` to generate scaffolding for a new API

Run `yo angular:route myroute` to generate controller and view, and configure route. Make sure to fix the route for angular-ui-router

## Testing

Running `grunt test` will run the unit tests with karma.

## New machine setup

* **Sails.js:** `npm install -g sails`
* **Grunt:** `npm install -g grunt-cli`
* **Frontend:** `npm install -g grunt bower yo generator-karma generator-angular`
* **Compass:** `http://rubyinstaller.org/downloads/ gem install compass`
* **Bower:** `Bower install`

## New machine gotchas

WARNING: Could not find ssh-agent: Add "$env:path += ";" + (Get-Item "Env:ProgramFiles(x86)").Value + "\Git\bin"" to "Microsoft.Powershell_profile.ps1" then restart profile with ". $profile"
