import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  text: string | null = '';


  ngOnInit(): void {
    this.text = window.localStorage.getItem('text');
  }

  saveLocalText() {
    if (this.text && this.text != '') {      
      window.localStorage.setItem('text', this.text);
    }
  }
}
