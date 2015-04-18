Colos: a Jekyll theme
=====================

[![Build Status](https://travis-ci.org/ahaasler/colos.svg?branch=gh-pages)](https://travis-ci.org/ahaasler/colos)
[![Dependency Status](https://gemnasium.com/ahaasler/colos.svg)](https://gemnasium.com/ahaasler/colos)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/github/release/ahaasler/colos.svg?style=flat)](https://github.com/ahaasler/colos/releases/latest)

*Colos* is a minimal, multilingual theme for *[Jekyll](http://jekyllrb.com/ "Jekyll &bull; Simple, blog-aware, static sites")*.

You can find the live demo in http://colos.adrianhaasler.com, proudly hosted on *GitHub*.

> Update 2015/04/18: I found [Hexo](http://hexo.io/ "A fast, simple & powerful blog framework") and I really like it, so I'll give it a try. The development of this theme (for now) will continue in [hexo-theme-colos](https://github.com/ahaasler/hexo-theme-colos "A material design theme for Hexo").

Features
--------

- 100% compatible with *[GitHub Pages](https://pages.github.com/ "GitHub Pages")*.
- Multilingual support.

### To do

- Material design.
- Color everywhere!
- Different layouts.

Getting Started
---------------

### Prerequisites

1. Make sure you have *ruby-dev* installed (you may also need *ruby*, *rubygems* and/or *gem* if not automatically installed). `yum install -y ruby-devel`, `apt-get install -y ruby-dev` or the equivalent for your distro/package manager.

2. You will also need *bundler* to handle your gems: `gem install bundler`.

3. [Fork](https://github.com/ahaasler/colos/fork "Fork your own copy of ahaasler/colos to your account") the repo and clone it: `git clone git@github.com:username/colos.git` (use the SSH clone URL of your fork).

4. Install all necessary gems: `bundle install`.

### Build or serve your site

To build the site use the following command: `./script/build`. This will also validate the generated site, located inside the `_site` folder.

If you want to see how the site looks like use: `./script/serve`. Now go to `http://localhost:4000` in your browser. As long as the command is running you can edit your site and see the changes **live**.

Dependencies
------------

- *github-pages*: Contains *Jekyll* and its dependencies to work properly on *GitHub Pages*. Uses the version defined in https://pages.github.com/versions.json, which is the currently deployed.
- *html-proofer*: Validates the generated site. No version is specified in order to use the last version available.

License
-------

This theme is released under the [MIT License](http://opensource.org/licenses/MIT "The MIT License").

See [LICENSE](LICENSE "The MIT License").
