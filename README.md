<div align="center">
<h1><a href="https://appwebtech-devops.herokuapp.com/">DevOps App</a></h1> 
  

<div align="center">
  <sub>Built by
  <a href="https://github.com/appwebtech">Joseph M Mwania</a>
    
  </a>
</div>
</sub>
</div>

<h3>Table of Contents</h3>

- [Introduction to](#introduction)
- [What the app should do](#what-the-app-should-do)
- [Technologies](#technologies)
  - [Javascript](#javascript)
  - [Figaro](#figaro)
    - [Why Figaro exists](#why-figaro-exists)
      - [How Figaro works](#how-figaro-works)
      - [Installation](#installation)
      - [Usage](#usage)
  - [Devise](#devise)
  - [Simple Form](#simple-form)
    - [Installation](#installation)
  - [jQuery-rails](#jquery-rails)
  - [Gravatar Image Tag](#gravatar-image-tag)
    - [Gravatar Image Tag Plugin](#gravatar-image-tag-plugin)
    - [Install as a Ruby Gem](#install-as-a-ruby-gem)
  - [jQuery-rails](#jquery-rails)
  - [Public Activity](#public-activity)
  - [Rails Froala WYSIWYG HTML Editor](#rails-froala-wysiwyg-html-editor)
- [Developer](#developer)
- [Contacts](#contacts)
- [License](#license)


# Introduction

What motivated me to create this app was due to requests I received from people like Jerome and his crew after they observed that the app I had created a few months ago ([Project App](https://appwebtech-projects-app.herokuapp.com/projects)) didn't quite resemble a Project Management Application. I went back and forth with them about the scalability of the mini-app and I promised to make this app, which will be followed by another application which I intend to do next month. 

// **off-topic**

As a [Mentor and Teaching Assistant (TA)](https://www.coursera.org/account/accomplishments/records/QUA3PRDS7F5T) in the [Ruby on Rails Web Development Specialization](https://www.coursera.org/specializations/ruby-on-rails) offered in the Coursera platform, I should reiterate that learning how to programme requires a lot of patience, curiosity, willingness to learn, research and excellent problem-solving skills. For instance if you write asking why Ruby is not working on your system and you have homebrew and rbenv, it means that you haven't researched enough. Such questions should be posted on Stackoverflow and FB forums. 

Learning to do that early is of paramount importance as you will be stuck whilst debugging and at times your application won't do what you really want it to do. It may as well work but your client may decide to turn it upside down making you recreate DB's and other disruptive "high order thinking" from him/her.

// **end of off-topic** 

In this project I used [Vue.JS](https://vuejs.org/) as a Frontend Framework just to change gears from Angular and React. It's great for building UI's and it integrates well with Ruby on Rails. 

I also used [Tachyons](http://tachyons.io/) which is a framework built around functional styles and keeps stuff consistent and scalable. For instance you can declare font-styles in css and tweak your stylesheet with different font sizes in media queries for responsiveness puporses. At first I ignored it but after trying it I became a fun of it. See an example below and checkout the cool spacing it offers in their [website](http://tachyons.io/) (for those who design blogs). You can actually install individual modules of your liking with node packages instead of keeping the whole library.

```
http://tachyons.io/docs/typography/font-style/
/*

   FONT STYLE
   Docs: http://tachyons.io/docs/typography/font-style/

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/

.i         { font-style: italic; }
.fs-normal { font-style: normal; }

@media (--breakpoint-not-small) {
  .i-ns       { font-style: italic; }
  .fs-normal-ns     { font-style: normal; }
}

@media (--breakpoint-medium) {
  .i-m       { font-style: italic; }
  .fs-normal-m     { font-style: normal; }
}

@media (--breakpoint-large) {
  .i-l       { font-style: italic; }
  .fs-normal-l     { font-style: normal; }
}

```


I tried to deploy the app and it does throw errors from the heroku servers. Funny thing is it compiles and deploys successfully if I use my paid account but fails with the other free accounts that I use for testing, debugging and prototyping. The main reason from the errors point to the app been compiled as a NodeJS app rather than a Rails app. This happened when I used npm to install webpack.

**Webpack Installation**
![22 webpack with npm](https://user-images.githubusercontent.com/13242902/38744001-8e03670a-3f38-11e8-868f-13f1e32354e3.png)
<hr>

**Deployment Failed with the free dynos account**
![screen shot 2018-03-16 at 11 51 40](https://user-images.githubusercontent.com/13242902/38743958-67e9ce56-3f38-11e8-845b-e2bd88b16d0a.png)
<hr>

**Successful deployment in my paid account. (I deleted the project as it's wasting valuable space)**
![22 successful deployment](https://user-images.githubusercontent.com/13242902/38744181-016c6ac0-3f39-11e8-8376-e7a577d9749c.png)
<hr>

I may come back to re-deploy but meanwhile, whoever feels like trying can fork the project and create a staging branch via git. 

# What the app should do 

Users should be able to register and create a project. Each user can create a team to work with and a project history will be displayed on the right hand side of the browser. The concepts of MVC in RoR development are quite intuitive and below are a few screen shots of how the app should look like; 

**Homepage** 
![1 app intro](https://user-images.githubusercontent.com/13242902/38743477-0da1e010-3f37-11e8-8712-70897596ab25.png)
<hr> 

**Sign-up (Confirming email)**
![9 mail catcher](https://user-images.githubusercontent.com/13242902/38743521-2d7c94d4-3f37-11e8-810c-8f0d58ca912d.png) 
<hr>

**ccount Activation**
![5 account confirmation ui](https://user-images.githubusercontent.com/13242902/38743690-a2095260-3f37-11e8-8b96-508f0a5e2cd9.png)
<hr>

**Password Encryption & Saving as a Hash Algorithm**
![6 password confirmed saved in db](https://user-images.githubusercontent.com/13242902/38743761-d24b0c84-3f37-11e8-868a-fd4cf3c1b8fc.png)
<hr>

**Account Successfully Created**
![14](https://user-images.githubusercontent.com/13242902/38743842-05fd3656-3f38-11e8-8826-e40788efcdef.png)
<hr>

**Create a new project**
![2 app intro](https://user-images.githubusercontent.com/13242902/38743647-8a49eacc-3f37-11e8-9c03-2d832815898c.png)
<hr>

**New Project Been created**
![17a](https://user-images.githubusercontent.com/13242902/38743879-262a5e22-3f38-11e8-85a0-4ec8433b3585.png)
<hr>

**Projects Page**
![23](https://user-images.githubusercontent.com/13242902/38744740-81d0dcb8-3f3a-11e8-92ab-634f39f751a6.png)
<hr>

# Technologies 

## Javascript 

You can see the **Webpacker** installation followed by **Vue** below; 

**Webpack Installation**
![1 - installing webpacker](https://user-images.githubusercontent.com/13242902/37174339-1c36de5e-230e-11e8-8ca3-cd287c27b8b6.png)

<hr>
**Vue Installation**
![2 - install vue](https://user-images.githubusercontent.com/13242902/37174344-2016cf3e-230e-11e8-8ca2-e2768ac34d81.png)
<hr>

Vue has it's own turbolinks and conflicts with the rails JS tag (rails 5.1.5 and previous versions);

```javascript
    <%= javascript_pack_tag  'DevOps App' %>
```

Although some warnings may be thrown, a successful installation will result with all dependencies installed successfully. The image has been truncated for obvious reasons.

**Vue turbolinks and resource installation**
![3 vue turbolinks resource](https://user-images.githubusercontent.com/13242902/37174631-04f8f064-230f-11e8-8b56-b2881d620884.png)
<hr>

If installation is successful, it's possible to run a separate developer server for Frontend design. Webpack will do that for us, not to confuse with **[Rails Webrick](https://github.com/ruby/webrick)**, a precursor of **[Puma](https://github.com/puma/puma)**. This server which will run in http://localhost:3035 is important as it will watch the view files. 

**See a successful installation below**
![15_webpack to watch js files](https://user-images.githubusercontent.com/13242902/37175316-13b094b6-2311-11e8-9f22-f2265edc7209.png)
<hr>

My approach was to mimic angular's two way data binding to update data in the DB and propagate dynamically to the UI resonating the power of MVC in software engineering.

There is a caveat: I tossed the vue.js file that is usually generated when you install webpacker, you can see it in the *config/webpack/loader/vue.js* path below. Usually I  really don't keep redundant file as that adds more code contravening rails refactoring and DRY principle.

**Webpack Installation**
![1 - installing webpacker](https://user-images.githubusercontent.com/13242902/37174339-1c36de5e-230e-11e8-8ca3-cd287c27b8b6.png)
<hr>

Later I ran into errors and webpack stopped compiling. You need to get that fixed if you want to watch your views. I added again the file but tossed the code (That is it's an empty file now which tricks webpack to compile). I can get that sorted by writting more code but it's time consuming.

**Error encountered after I tossed *hello_vue.js* file**
![16a](https://user-images.githubusercontent.com/13242902/37175899-c8cf9c1a-2312-11e8-8e01-996daf474fbd.png)
<hr>

**Error Sorted by running vue-resource via yarn. You can use NPM if you have Node**
![16b incase vue doesn t compile successfully](https://user-images.githubusercontent.com/13242902/37175983-f8fe4968-2312-11e8-9ef3-a1c5980beac8.png)
<hr>

## Figaro

# ![Figaro](https://raw.githubusercontent.com/laserlemon/figaro/1f6e709/doc/title.png)

Simple, Heroku-friendly Rails app configuration using `ENV` and a single YAML file

[![Gem Version](https://img.shields.io/gem/v/figaro.svg?style=flat-square)](http://badge.fury.io/rb/figaro)
[![Build Status](https://img.shields.io/travis/laserlemon/figaro/master.svg?style=flat-square)](https://travis-ci.org/laserlemon/figaro)
[![Code Climate](https://img.shields.io/codeclimate/github/laserlemon/figaro.svg?style=flat-square)](https://codeclimate.com/github/laserlemon/figaro)
[![Coverage Status](https://img.shields.io/codeclimate/coverage/github/laserlemon/figaro.svg?style=flat-square)](https://codeclimate.com/github/laserlemon/figaro)
[![Dependency Status](https://img.shields.io/gemnasium/laserlemon/figaro.svg?style=flat-square)](https://gemnasium.com/laserlemon/figaro)

**NOTE:** If you're using Figaro 0.7 or prior, please refer to the
[appropriate documentation](https://github.com/laserlemon/figaro/tree/0-stable#readme)
or [upgrade](#how-do-i-upgrade-to-figaro-10) to Figaro 1.0.

### Why Figaro exists

Figaro was written to make it easy to securely configure Rails applications.

Configuration values often include sensitive information. Figaro strives to be
secure by default by encouraging a convention that keeps configuration out of
Git.

### How Figaro works

Figaro is inspired by the [Twelve-Factor App](http://12factor.net) methodology,
which states:

> The twelve-factor app stores config in environment variables (often shortened to env vars or env). Env vars are easy to change between deploys without changing any code; unlike config files, there is little chance of them being checked into the code repo accidentally; and unlike custom config files, or other config mechanisms such as Java System Properties, they are a language- and OS-agnostic standard.

This is straightforward in production environments but local development
environments are often shared between multiple applications, requiring multiple
configurations.

Figaro parses a Git-ignored YAML file in your application and loads its values
into `ENV`.

## Bulma-rails

Integrates [Bulma](http://bulma.io/) with the rails asset pipeline.

A modern CSS framework based on Flexbox.

### Installation

Add this line to your application's Gemfile:

    gem "bulma-rails", "~> 0.6.2"

And then execute:

    $ bundle

### Usage

To import all assets in your Rails project, add the following line to your application.scss:
``` ruby
@import "bulma";
```

For information about customizing Bulma,
see: [http://bulma.io/documentation/overview/start/](http://bulma.io/documentation/overview/start/)

## Devise

![Devise Logo](https://raw.github.com/plataformatec/devise/master/devise.png)

By [Plataformatec](http://plataformatec.com.br/).

[![Build Status](https://api.travis-ci.org/plataformatec/devise.svg?branch=master)](http://travis-ci.org/plataformatec/devise)
[![Code Climate](https://codeclimate.com/github/plataformatec/devise.svg)](https://codeclimate.com/github/plataformatec/devise)

This README is [also available in a friendly navigable format](http://devise.plataformatec.com.br/).

Devise is a flexible authentication solution for Rails based on Warden. It:

* Is Rack based;
* Is a complete MVC solution based on Rails engines;
* Allows you to have multiple models signed in at the same time;
* Is based on a modularity concept: use only what you really need.

It's composed of 10 modules:

* [Database Authenticatable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/DatabaseAuthenticatable): hashes and stores a password in the database to validate the authenticity of a user while signing in. The authentication can be done both through POST requests or HTTP Basic Authentication.
* [Omniauthable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Omniauthable): adds OmniAuth (https://github.com/omniauth/omniauth) support.
* [Confirmable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Confirmable): sends emails with confirmation instructions and verifies whether an account is already confirmed during sign in.
* [Recoverable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Recoverable): resets the user password and sends reset instructions.
* [Registerable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Registerable): handles signing up users through a registration process, also allowing them to edit and destroy their account.
* [Rememberable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Rememberable): manages generating and clearing a token for remembering the user from a saved cookie.
* [Trackable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Trackable): tracks sign in count, timestamps and IP address.
* [Timeoutable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Timeoutable): expires sessions that have not been active in a specified period of time.
* [Validatable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Validatable): provides validations of email and password. It's optional and can be customized, so you're able to define your own validations.
* [Lockable](http://rubydoc.info/github/plataformatec/devise/master/Devise/Models/Lockable): locks an account after a specified number of failed sign-in attempts. Can unlock via email or after a specified time period.

## Simple Form

![Simple Form Logo](https://raw.github.com/plataformatec/simple_form/master/simple_form.png)

By [Plataformatec](http://plataformatec.com.br/).

Rails forms made easy.

**Simple Form** aims to be as flexible as possible while helping you with powerful components to create
your forms. The basic goal of **Simple Form** is to not touch your way of defining the layout, letting
you find the better design for your eyes. Most of the DSL was inherited from Formtastic,
which we are thankful for and should make you feel right at home.

INFO: This README is [also available in a friendly navigable format](http://simple-form.plataformatec.com.br/)
and refers to **Simple Form** 3.1. For older releases, check the related branch for your version.

### Installation

Add it to your Gemfile:

```ruby
gem 'simple_form'
```

Run the following command to install it:

```console
bundle install
```

Run the generator:

```console
rails generate simple_form:install
```

## jQuery-rails

jQuery! For Rails! So great.

This gem provides:

  * jQuery 1, 2 and 3
  * the jQuery UJS adapter
  * assert_select_jquery to test jQuery responses in Ruby tests

### Versions

Starting with v2.1, the jquery-rails gem follows these version guidelines
to provide more control over your app's jQuery version from your Gemfile:

```
patch version bump = updates to jquery-ujs, jquery-rails, and patch-level updates to jQuery
minor version bump = minor-level updates to jQuery
major version bump = major-level updates to jQuery and updates to Rails which may be backwards-incompatible
```

See [VERSIONS.md](VERSIONS.md) to see which versions of jquery-rails bundle which
versions of jQuery.

### Installation

The jquery and jquery-ujs files will be added to the asset pipeline and available for you to use. If they're not already in `app/assets/javascripts/application.js` by default, add these lines:

```js
//= require jquery
//= require jquery_ujs
```

If you are running Rails 5.1 and up, and if you have included `//= require rails-ujs`, then `jquery_ujs` is not needed anymore. You can just add:

```js
//= require jquery
```

If you want to use jQuery 2, you can require `jquery2` instead:

```js
//= require jquery2
//= require jquery_ujs
```

And if you want to use jQuery 3, you can require `jquery3`:

```js
//= require jquery3
//= require jquery_ujs
```

For jQuery UI, we recommend the [jquery-ui-rails](https://github.com/joliss/jquery-ui-rails) gem, as it includes the jquery-ui css and allows easier customization.

*As of v3.0, jquery-rails no longer includes jQuery UI. Use the
jquery-ui-rails gem above.*

## Gravatar Image Tag 

![Gravatar Logo](http://s.gravatar.com/images/logo.png)

### Gravatar Image Tag Plugin

Rails view helper for grabbing [Gravatar](http://en.gravatar.com/) images.  The goal here is to be configurable and have those configuration points documented!

### Install as a Ruby Gem

#### Rails 2

Include the following line in your Rails environment

```shell
config/environment
  config.gem 'gravatar_image_tag'
```

Then ensure the gem is installed by running the following rake task from the your application root.

```shell
rake gems:install
```

#### Rails 3 ~> 5

Include the following line in your Rails environment

```shell
 Gemfile
  gem 'gravatar_image_tag'
```
p. Then ensure the gem is installed by running the following command from the application root.

```shell
bundle install
```


## Public Activity 

[![Build Status](https://secure.travis-ci.org/pokonski/public_activity.png)](http://travis-ci.org/pokonski/public_activity) [![Dependency Status](https://gemnasium.com/pokonski/public_activity.png)](https://gemnasium.com/pokonski/public_activity) [![Code Climate](https://codeclimate.com/github/pokonski/public_activity.png)](https://codeclimate.com/github/pokonski/public_activity) [![Gem Version](https://badge.fury.io/rb/public_activity.png)](http://badge.fury.io/rb/public_activity)

`public_activity` provides easy activity tracking for your **ActiveRecord**, **Mongoid 3** and **MongoMapper** models
in Rails 3. Simply put: it records what has been changed or created and gives you the ability to present those
recorded activities to users - in a similar way to how GitHub does it.

## Rails Froala WYSIWYG HTML Editor

[![Travis](https://img.shields.io/travis/froala/wysiwyg-rails.svg)](http://travis-ci.org/froala/wysiwyg-rails)
[![Gem](https://img.shields.io/gem/v/wysiwyg-rails.svg)](https://rubygems.org/gems/wysiwyg-rails/versions/2.1.0)
[![Gem](https://img.shields.io/gem/dt/wysiwyg-rails.svg)](https://rubygems.org/gems/wysiwyg-rails/versions/2.1.0)
[![license](https://img.shields.io/github/license/froala/wysiwyg-rails.svg)](https://rubygems.org/gems/wysiwyg-rails/versions/2.1.0)

>wysiwyg-rails provides the [Froala WYSIWYG HTML Editor](https://froala.com/wysiwyg-editor) javascript and stylesheets as a Rails engine for use with the asset pipeline.

## Installation

Add this to your Gemfile:

```ruby
gem "wysiwyg-rails"
```

and run `bundle install`.

## Include in assets

In your `application.css.scss`, include the css file:

```css
/*
 @import "froala_editor.min";
 @import "froala_style.min";
 @import "font-awesome-sprockets";
 @import "font-awesome";
 */
```

### Rails 4

**As of 1.4.0 version, public_activity now supports both Rails 3.X and 4.0.**

# Developer

Joseph Mwania

# Contacts

[GitHub](https://github.com/appwebtech)

[Appwebtech](http://www.theappwebtech.com/)

[Twitter](https://twitter.com/appwebtech)

[Facebook](https://www.facebook.com/appwebtech/)

[Pinterest](https://it.pinterest.com/appwebtech/)

[Google +](https://plus.google.com/u/1/104000565731100573953)

[LinkedIn](https://www.linkedin.com/company/18389649/admin/updates/)

# License

Available as open source under [MIT License](https://opensource.org/licenses/MIT)




















