# Sassyons

Tachyons CSS in pure Sass. Totally customizable.

## Quick Start

Edit the $sassyons map in __config.scss. Run in your favourite Sass compiler!  
or use npm:   

#### Install dependencies:

```
npm install
```

#### Build once

```
npm run css
```

#### Build and compile when files are saved

```
npm run watch
```

#### Build and watch and see changes in browser

```
npm start
```

## Customizing

Create any number of variations in any number of media-queries. For example, Tachyons has f1-f7 for font-sizes. You can have any number of font-sizes with Sassyons. Just add a new entry in the font_sizes section in the `__config.scss`.

Before:

```
font_sizes: (
    1: 4em,
    2: 3em,
    3: 2em,
    4: 1.5em,
    5: 1.125em,
    6: .8em,
),
```

Add a 7th class that's 28px in font-size:

```
font_sizes: (
    1: 4em,
    2: 3em,
    3: 2em,
    4: 1.5em,
    5: 1.125em,
    6: .8em,
    7: 28px,
),
```

You don't even need to use a number for your `.f` class. 

```
font_sizes: (
    1: 4em,
    2: 3em,
    3: 2em,
    4: 1.5em,
    5: 1.125em,
    6: .8em,
    "-headline": 3rem,
),
```

The resulting css rule will be:

```
.f-headline { font-size: 3rem }
```