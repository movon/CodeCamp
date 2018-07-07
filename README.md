# Code Camp

A website written in rust + vue for spreading code around the world

## vue-rocket

> A Vue.js + Rocket project

### Build Setup for Production

``` bash
# cd to the Vue portion of the project
cd vue

# install dependencies
yarn install

# build for production with minification
yarn run build

cd ..

# Rocket requires the nightly version
rustup override set nightly

cargo run

```

### Build Setup for Development

``` bash

# In one terminal window, do:
cd vue
yarn install
yarn run dev

> Your application is running here: http://localhost:8080

# In another terminal window, do:
cargo run

> 🚀  Rocket has launched from http://localhost:8000

# From vue, make axios calls / requests to http://localhost:8000
# From your browser, navigate to http://localhost:8080

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

For easier work with webstorm (+rust plugin) and jest testing use:
    - Settings -> Languages & Frameworks webpack: change configuration file location to build/webpack.base.conf.js
    - https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000357324-Get-rid-of-Unresolved-function-method-variable-warning-in-Jest-test-files

