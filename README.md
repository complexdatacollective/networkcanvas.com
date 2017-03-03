## Network Canvas website

This is a Jekyll-based static site. It requires Ruby to build.

### Initial setup

* Install Ruby. You can use homebrew or another package manager as described
  [here](https://www.ruby-lang.org/en/documentation/installation/). If you use
  Ruby for other projects you may wish to install with [RVM](https://rvm.io/)
  instead.
* Install bundler:
```
gem install bundler
```
* Clone this repository and change to its directory:
```
git clone <url>
cd networkcanvas-web
```
* Install Jekyll and other dependencies from the Gemfile:
```
bundle install
```

### Building locally

To start a server for local development:

```
jekyll serve
```

The server will auto-rebuild whenever a file is changed.

To perform a one-time build:

```
jekyll build
```

The built HTML and assets are placed in the `_site` directory.


### Directory structure

This project uses a conventional [Jekyll directory
structure](http://jekyllrb.com/docs/structure/). Some important
files/directories:

* `_sass/_theme.scss` -- Main SASS file. Includes bootstrap variables,
  core bootstrap-sass files, and any custom styling.
* `_data` -- Contains YAML-formatted structured data that can be used in
  templates throughout the site.
* `_layouts` -- Base templates for pages. `default.html` is the most basic
  template, composing the HTML head, navigation header, and other common
  components. Other templates add pagetype-specific structure.


### Further reading and tips

The Jekyll docs are a great reference. Some useful pages and concepts:

* Page content is written in markdown, but pages can have their own structured
  data specified in [Front matter](http://jekyllrb.com/docs/frontmatter/). You
  can add arbitrary fields into front matter for use in templates, but for
  complex data it might be better to put it in the `_data` directory (see
  `team.yml`).
* Templates use [Liquid syntax](https://shopify.github.io/liquid/basics/introduction/).
  Jekyll has some of its own [filters and tags](http://jekyllrb.com/docs/templates/)
* [Variables](http://jekyllrb.com/docs/variables/) available in templates
