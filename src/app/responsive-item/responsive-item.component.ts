import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-item',
  imports: [],
  templateUrl: './responsive-item.component.html',
  styleUrl: './responsive-item.component.scss'
})
export class ResponsiveItemComponent implements OnInit {
  
  /*
    Using the BreakpointObserver from @angular/cdk/, we don't need to manually write media queries.
    https://blog.angular-university.io/angular-responsive-design/
  */
  constructor(private breakpointObserver: BreakpointObserver) {
    
  }

  ngOnInit(): void {
    // In reality you should subscribe only on the breakpoints which are needed for this component
    this.breakpointObserver.observe(Object.values(Breakpoints))
      .subscribe(({matches, breakpoints}) => {
        if (matches) {
          console.log(`Device matches the specified Breakpoints`, breakpoints);
        }
      })
  }

}
