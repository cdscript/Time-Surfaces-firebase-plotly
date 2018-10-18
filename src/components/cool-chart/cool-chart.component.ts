import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChartService } from "../../services/chart.service";
//import * as _ from "lodash";

@Component({
  selector: "cool-chart",
  templateUrl: "./cool-chart.component.html",
  styleUrls: ["./cool-chart.component.css"]
})
export class CoolChartComponent implements OnInit {
  @ViewChild("chart")
  el: ElementRef;

  constructor(private chartService: ChartService) {}
  ngOnInit() {
    this.chartService
      .getData("ambient")
      .valueChanges()
      //.take(1)
      .subscribe(data => {
        this.topoChart(data);
      });
  }

  topoChart(data) {
    //console.log(data);
    const element = this.el.nativeElement;
    const formattedData = [
      {
        z: data,
        type: "surface"
      }
    ];

    const layout = {
      title: "2015 Ambient Temp",

      autosize: false,
      //width: '100%',
      height: 400,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90
      }
    };

    Plotly.plot(element, formattedData, layout);
  }
}
