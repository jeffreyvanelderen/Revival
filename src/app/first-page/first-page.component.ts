import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-page',
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent implements OnInit {

  idSetViaPathParam?: string;
  queryParam?: string;

  // Inject ActivatedRoute to retrieve query parameters
  constructor(private route: ActivatedRoute) { }

  // Path param set via /first-page/:id
  @Input()
  set id(value: string) {
    console.log(`id`, value);
    this.idSetViaPathParam = value;
  };

  ngOnInit() {
    // Retrieve query parameter! url: http://localhost:4200/first-page/123?queryParam=hello
    this.route.queryParamMap.subscribe(params => {
      this.queryParam = params.get('queryParam') || "";
    });
  }

}
