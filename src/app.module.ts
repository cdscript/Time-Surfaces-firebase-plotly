import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { MatListModule } from "@angular/material/list";
//import { MatSelectModule } from "@angular/material/select";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { DocPipe } from "./doc.pipe";

import { ChartService } from "./services/chart.service";
import { CoolChartComponent } from "./components/cool-chart/cool-chart.component";

/*
const config = {
  apiKey: "XXXXXXXX",
  authDomain: "XXXXXXXX",
  databaseURL: "XXXXXXXX",
  projectId: "XXXXXXXX",
  storageBucket: "XXXXXXXX",
  messagingSenderId: "XXXXXXXX"
};


*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // MatListModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [AppComponent, DocPipe, CoolChartComponent],
  bootstrap: [AppComponent],
  providers: [ChartService]
})
export class AppModule {}
