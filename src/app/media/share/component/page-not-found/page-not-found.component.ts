import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  // Initialize parameters
  title = 'Page Not Found';

  // Add the ability to change title
  constructor(private titleService:Title, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Set title on page
    this.titleService.setTitle(this.title);

    // Clear the URL with no hardcode and will not re-load the page
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {},
      replaceUrl: true,
    });
  }
}
