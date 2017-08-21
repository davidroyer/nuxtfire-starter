# NuxtFire Starter

> Nuxt.js, Firebase Hosting, & Firebase Functions project


Setup new Firebase project in the Firebase console.
Get your Firebase Project ID
Set that ID in the .firebaserc file
Run build-firebase

Run yarn api
You should get a url that looks like, http://localhost:5000/nuxtfire-starter/us-central1/api
Go to the proxy option in your nuxt config and use this url for the target


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
# service worker is disabled in dev
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
