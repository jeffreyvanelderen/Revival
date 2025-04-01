import { Component, NgZone, OnInit } from '@angular/core';

/*
Third-party libraries commonly trigger unnecessary change detection cycles when their APIs are invoked within the Angular zone. 
This phenomenon particularly affects libraries that set up event listeners or initiate other tasks (such as timers, XHR requests, etc.). 
Avoid these extra cycles by calling library APIs outside the Angular zone:
*/
@Component({
  selector: 'app-performance-avoid-change-detection',
  imports: [],
  templateUrl: './performance-avoid-change-detection.component.html',
  styleUrl: './performance-avoid-change-detection.component.scss'
})
export class PerformanceAvoidChangeDetectionComponent implements OnInit {
  // Inject NGZone
  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    // Running functions via #runOutsideAngular allows you to escape Angular's zone and do work that doesn't trigger Angular change-detection 
    //  or is subject to Angular's error handling.
    // Any future tasks or microtasks scheduled from within this function will continue executing from outside of the Angular zone.
    this.ngZone.runOutsideAngular(
      () => setInterval(this.pollForUpdates, 500)
    );

    // Use #run to reenter the Angular zone and do work that updates the application model. -> for specifc stuff that does need change detection!
    /*
    private async createPlotly() {
      const plotly = await Plotly.newPlot('chart', data);
      plotly.on('plotly_click', (event: Plotly.PlotMouseEvent) => {
        this.ngZone.run(() => {
          this.plotlyClick.emit(event);
        });
      });
    }
    */
  }

  pollForUpdates() { }

}
