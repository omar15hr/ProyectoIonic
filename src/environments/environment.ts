// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Configuracion de firebase de OMAR
  firebaseConfig : {
    apiKey: "AIzaSyA98MVaoC3DalZ7dVK-VqoAsU_qvUsyyAc",
    authDomain: "pgy4121-001d.firebaseapp.com",
    projectId: "pgy4121-001d",
    storageBucket: "pgy4121-001d.appspot.com",
    messagingSenderId: "803987788519",
    appId: "1:803987788519:web:bd5e9a2496d75f4cf60842"
  },
  apiUrl:"https://dev.matiivilla.cl/duoc/location/"
};

/*export const environment = {
  production: false,
  // Configuracion de firebase de JUAN
  firebaseConfig : {
    apiKey: "AIzaSyBwswjMwat3iBRymVmm81yQwio8-GKtNEI",
    authDomain: "pgy4121-001d-sep.firebaseapp.com",
    projectId: "pgy4121-001d-sep",
    storageBucket: "pgy4121-001d-sep.appspot.com",
    messagingSenderId: "692501145529",
    appId: "1:692501145529:web:c2e3e706bfa1a0a9f97868"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
