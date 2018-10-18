# Time-Surfaces-firebase-plotly

This is built from watching the example given by a very talented developer @AngularFirebase:

https://angularfirebase.com/lessons/realtime-charts-with-plot-ly/


# For this example, perform the following tasks first 
- 1 You will need to run, npm install

- 2 You will need to replace the config object variable in the ./src/app.module.ts file

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

