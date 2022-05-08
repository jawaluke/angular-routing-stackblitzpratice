import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css'],
})
export class Com1Component implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  closeMe() {
    this.route.navigate([{ outlets: { coms: null } }]);
    this.route.navigate([{ outlets: { com4s: ['com4'] } }]);
  }
}
