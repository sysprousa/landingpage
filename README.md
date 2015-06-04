# Responsive Marketo Landing Page Template

Free download provided by [Etumos](http://etumos.com/?utm_source=template&utm_medium=premium+asset&utm_content=responsive+template+v2).

Link to the landing page is [here](http://pages.etumos.com/updated-responsive-marketo-landing-page-templates-v2.html?utm_source=template&utm_medium=premium+asset&utm_content=responsive+template+v2)

This documentation is meant for web developers. If you're looking for how to implement within Marketo and don't have much coding experience, check out the PDF that's attached to this package. 

If you can't find an answer in this document, feel free to send in any questions about this template to [eunthank+dev@etumos.com](mailto:eunthank+dev@etumos.com).

### What's Inside?

- A simple HTML landing page template, for reference (prefixed with "RAW" in this folder)
- The corresponding thank-you page template as well
- A modular SCSS structure for easy maintenance, with pre-built components to get you started fast
- Vanilla CSS file with a Table of Contents if SASS is not your thing

### Local Installation

You can easily open up any of the HTML files in your browser to see the page templates at any time. If you want to start working with the SASS and JS files to build out your own modifications, follow these steps:

- Ensure you have [Node.js](http://nodejs.org/) with npm installed
- Run `npm install -g grunt-cli` to install [Grunt](http://gruntjs.com/getting-started), which we use to build our styles
- Open Terminal and navigate to your working directory (the README you're currently reading should be located there)
- Type `npm install`
- Now you should be good to go! You can type commands like `grunt watch` to keep an eye on your SCSS files as you work on them, or you can type `grunt build` to compile production ready, minified versions of your CSS and JS at once

### Marketo Installation

Check the instructional PDF that's included! 

### Style Conventions

If you're only interested in the styles that reset and then override Marketo's existing styles, you can refer to `scss/_marketo-reset.scss` and `scss/_form-styles.scss`, respectively.

Otherwise, there are two main groupings of styles: base files and components. Here's what the folder looks like:

- scss
 - `base/`
 - `components/`
 - `_base.scss` *(importing all the base partials)*
 - `_components.scss` *(importing all the component partials)*
 - `_marketo-reset.scss` *(reset marketo form styles to a good baseline)*
 - `_form-styles.scss` *(overriding with custom form styles)*
 - `styles.scss` *(master import file)*

The `base/` folder contains SCSS files that are for variables, colors, the grid system, typography and other foundational aspects of the styles. Please tweak the settings for your needs, they are built to be flexible unless it says otherwise.

The `components/` folder contains custom-built pieces of functionality for this landing page template specifically. They may be useful to you out of the box, or they may serve as a good starting point for building your own custom pieces. It follows the [BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

