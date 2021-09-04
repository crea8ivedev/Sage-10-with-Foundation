# README #

Welcome to the pre-configured sage(v9.0.9) starter theme using latest [foundation](https://get.foundation/sites.html) (v6.6.3) and [Typekit](https://github.com/typekit/webfontloader).

## Requirements ##
Make sure all dependencies have been installed before moving on:

* [WordPress](https://wordpress.org/) >= 5.4
* [PHP](https://secure.php.net/manual/en/install.php) >= 7.2.5 (with [php-mbstring](https://secure.php.net/manual/en/book.mbstring.php) enabled)
* [Composer](https://getcomposer.org/download/)
* [Node.js](http://nodejs.org/) >= 12.0.0
* [Yarn](https://yarnpkg.com/en/docs/install)

## Theme installation ##
To install this base theme using command-prompt/Git-Bash from your WordPress themes directory, goto ```wp-content/themes/``` and clone this repository with the help of,
>
> git clone git@bitbucket.org:crea8ivedev/sage9-foundation6.git
>
> OR
>
> git clone https://crea8ivedev@bitbucket.org/crea8ivedev/sage9-foundation6.git
>

Once cloned, rename the folder with your project name and go inside it using ```cd your-cloned-theme```.

## Steps for further installation actions ##
* Remove the `composer.lock` file from directory and run the `composer install` command inside current directory.
* Now run the `yarn install` command to add dependencies from `package.json` file.

## Build commands ##
* `yarn start` — Compile assets when file changes are made, start Browsersync session
* `yarn build` — Compile and optimize the files in your assets directory
* `yarn build:production` — Compile assets for production

## For `Typekit` webfonts ##
* Goto `\wp-content\themes\your-cloned-theme\resources\assets\scripts\routes`, open `common.js` file and update with required webfonts.

## Extra Usefull Links ##
* Sage v9.0.9
> - https://roots.io/sage/

* Foundation v6.6.3
> - https://get.foundation/sites.html

* Typekit Web-Font
> - https://wpvilla.in/sage-9-load-google-fonts/
> - https://github.com/typekit/webfontloader
