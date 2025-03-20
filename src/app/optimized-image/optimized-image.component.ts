import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimized-image',
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image.component.html',
  styleUrl: './optimized-image.component.scss'
})
export class OptimizedImageComponent {

  imageUrl = "https://cdn.butternutbox.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBemJySFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--daa2c54e83871b14995b41ac59fc194ef5b49b25/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFsSURhUUtwQVE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--cb9a857d4e8b027779cb0aa9c2b18b90d430ff4a/oliver-Bf2yJ99JMT0-unsplash.jpg"

  /*
    Replace 'src' on image to '[ngSrc]' - ALSO ADD WIDTH + HEIGHT (or use fill attribute to fill to parent dimensions)
  */

    /*
    You can also proriotize specific images (like the background image) using the priority attribute
    */
}
