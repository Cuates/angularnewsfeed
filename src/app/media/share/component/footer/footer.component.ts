import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Retrieve the full current year
  fullYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }
}
