// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDQlsZGdicEe44xvNTZuzjJ2jtti6t8KKw",
    authDomain: "emplyeeregister.firebaseapp.com",
    databaseURL: "https://emplyeeregister.firebaseio.com",
    projectId: "emplyeeregister",
    storageBucket: "emplyeeregister.appspot.com",
    messagingSenderId: "996528092147"
  }
};
