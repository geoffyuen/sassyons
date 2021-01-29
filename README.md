# NPM Scripts Template for websites

Supports:

- ✅ Sass (src/scss/\*.scss) --> (./*.css)
	- ✅ cssnano
	- ✅ autoprefixer
- ✅ uglifyjs (src/js/*) --> (./main.min.js)
- ✅ image optimization (src/img/\*.{jpg,png,svg}) --> (./img/*)
- ✅ svg spritesheet generation (src/sprites/*.svg) --> (./img/sprites.svg)
- ✅ error notifcations (Not working on Windows)
- ✅ MacOS
- ✅ Windows 10 (Cmd, Git Bash, WSL2)
- ✅ Linux(?)



## How do?

`npm install` and then:

- `npm start` to watch file changes, build and refresh browser with Browsersync
- `npm watch` to just watch and compile, no Browsersync
- `npm run build` to build files once

## Notes:

- for testing, add a `div#sprites` in your body to see the sprites
- src directory contains all files that will be transformed: images, svg, js, scss
  - anything in `src` is not nessessary for production because they are all compiled to folders outside of src
- postcss, cssnano, autoprefixer settings are in `postcss.config.js`
- autoprefixer `browserslist` ranges are in `package.json`
- Sass: anything in `src/scss/*.scss` will be compiled to root
	- if scss file begins with _ then it will not be compiled - usefull for scss includes

svgo params: https://github.com/svg/svgo#what-it-can-do

## Sprites:

- save svgs in src/svgsprites
- each svg needs a viewBox attribute to be able to be resized with width and height attributes
- remove the fill attribute in the svg to use css fill property
- when setting width/height, the svg will fit inside proportionally (like css background-size: contain)
- use in your html:

```
<svg width="{{ your width }}" height="{{ your height }}">
	<title>Optional Title for accessibility</title>
	<use xlink:href="#svg-{{ filename (no extension) }}"></use>
</svg>
```


## Gotchas:

- ~~When saving an .scss file, onchange triggers at least 2-6 times for some reason~~ Cause was postcss and plugins. Now we're using temp files (src/css/*) to bypass - yuck
- if for some reason there are many Browsersyncs running, `ps` to see running bash tasks, `pkill node` and `pkill open`
- if you get caniuse-lite warnings try: `npx browserslist@latest --update-db`
- notifications don't work on Windows even though cli-error-notifier supports Windows 🤷‍♂️
- seems to crash every once in a while on Windows


## Todo:

- scss linting
- js linting
- execute `composer install` after `npm install` (or visa versa?)
- notifications when there's no error?


## Changes

- 2021-01-24
	- Window branch:
		- using & in Windows or wsl2 doesn't seem to work; npm-run-all fixes this; very strange...
		- using node-sass v5; older version won't run on Windows without Python; so dumb
	- Removing Gulp as the task running I had to add:
		- npm-run-all (cross-platform run commands)
		- onchange to watch changes
