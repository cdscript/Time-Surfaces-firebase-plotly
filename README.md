# Time-Surfaces-firebase-plotly

This is built from watching the example given by a very talented developer @AngularFirebase:

https://angularfirebase.com/lessons/realtime-charts-with-plot-ly/


# For this example you will need to do the following first 
- 1 You will need to perform a: npm install before
-2 You will need to replace the config object variable in the app.module.ts file

https://firebase.google.com/


const config = {
  apiKey: "XXXXXXXX",
  authDomain: "XXXXXXXX",
  databaseURL: "XXXXXXXX",
  projectId: "XXXXXXXX",
  storageBucket: "XXXXXXXX",
  messagingSenderId: "XXXXXXXX"
};

replace with:

const config = {
  apiKey: "<--Your Firebase config-->",
  authDomain:"<--Your Firebase config-->",
  databaseURL:"<--Your Firebase config-->",
  projectId:"<--Your Firebase config-->",
  storageBucket: "<--Your Firebase config-->",
  messagingSenderId:"<--Your Firebase config-->"
};

