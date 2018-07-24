# cra-gen

A command-line tool for generating components, reducers, containers easily using
templates. The structure is based on my own react-redux boilerplate available
[here](https://github.com/kkoomen/react-boilerplate).

# Installation

`npm install -g cra-gen`

# Getting started

Example usage:<br/>
`$ cra-gen <type> <name>`

# Available types:

- `component`: Generates a regular component extending the `React.Component` class.
- `component:stateless`: Generates a stateless component.
- `component:connected`: Generates a regular component connected to the redux store.
- `component:stateless:connected`: Generates a stateless component connected to
  the redux store.
- `container`: Generates a regular container extending the `React.Component` class.
- `container:stateless`: Generates a stateless container.
- `container:connected`: Generates a regular container connected to the redux store.
- `container:stateless:connected`: Generates a stateless container connected to
  the redux store.
- `reducer`: Generates a reducer.
- `scaffold`: Generates an all-in-one bundle containing a component, reducer and
  action. NOTE: It is not possible to specify `:stateless` or `:connected` here.
  If you really want to use that, you have to make a component using e.g. the
  sytnax: `$ cra-gen component:stateless`.

# Custom templates

You can use your own templates to overwrite the builtin templates by adding the
following files in `~/.config/cra-gen/templates/`:

```
~/.config/cra-gen/templates/
├── component
│   ├── component.connected.jsx
│   ├── component.jsx
│   ├── component.stateless.connected.jsx
│   └── component.stateless.jsx
├── container
│   ├── container.connected.jsx
│   ├── container.jsx
│   ├── container.stateless.connected.jsx
│   └── container.stateless.jsx
└── reducer
    └── reducer.js
```

Each file you add has the `%NAME%` variable available which is the name you pass
through when generating.

# Contributing

Help from the community is always welcome! If you have improvements, feel free
to fork this repository and submit a pull request!

# License
Copyright 2018 Kim Koomen.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
