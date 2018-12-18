# projeto-rfuteam

This repository contains the resources and source code of the Rfuteam website.

## Social Media

* **[Facebook](https://www.facebook.com/Rfuteam/)** 
* **[Instagram](https://www.instagram.com/rfuteam/)**

## Preview

* **[Live Preview (GitHub Pages)](https://wjuniori.github.io/projeto-rfuteam/)**
* **[Rfuteam Website](https://www.rfuteam.com.br/)**

## Status

[![dependencies Status](https://david-dm.org/wjuniori/projeto-rfuteam/status.svg)](https://david-dm.org/wjuniori/projeto-rfuteam)
[![devDependencies Status](https://david-dm.org/wjuniori/projeto-rfuteam/dev-status.svg)](https://david-dm.org/wjuniori/projeto-rfuteam?type=dev)

## Download

* Clone the repo: `git clone https://github.com/wjuniori/projeto-rfuteam.git`
* [Fork, Clone, or Download on GitHub](https://github.com/wjuniori/projeto-rfuteam)

## Usage

### Basic Usage

After downloading, simply edit the HTML, CSS and JS files included with the website in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

After downloading, run `npm install` and then run `gulp dev` which will open up a preview of the website in your default browser, watch for changes to core website files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

#### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp dev` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp prod` replaces keywords for production, browserSync opens the project in your default browser and live reloads when changes are made
- `gulp html` minifies the HTML files
- `gulp html:prod` replaces keywords for production and minifies the HTML files
- `gulp css` minifies the CSS files
- `gulp js` minifies the JS files
- `gulp img` compress image files
- `gulp vendor` copies dependencies from node_modules to the vendor directory
- `gulp video` copies video files from ./public/assets/video/ to the ./public/dist/video/ directory

You must have npm and Gulp installed globally on your machine in order to use these features.

## Bugs and Issues

Have a bug or an issue with this website? [Open a new issue](https://github.com/wjuniori/projeto-rfuteam/issues) here on GitHub.

## About

This repository was created by and is maintained by **[Washington Júnior](https://github.com/wjuniori/)**. To see more projects, visit [portfolio](https://wjuniori.github.io/).
