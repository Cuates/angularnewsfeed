import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // Initialize parameters
  title = 'About';

  // Add the ability to change title
  constructor(private titleService:Title) { }

  ngOnInit(): void {
    // Set title on page
    this.titleService.setTitle(this.title);
  }
}
