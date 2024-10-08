import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { WisdomService } from '../services/wisdom.service';

@Component({
  selector: 'ns-wisdom-list',
  templateUrl: './wisdom-list.component.html',
})
export class WisdomListComponent implements OnInit {
  wisdomList: any[] = [];

  constructor(
    private wisdomService: WisdomService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this.wisdomList = this.wisdomService.getWisdomList();
  }

  onItemTap(item: any) {
    this.routerExtensions.navigate(['/wisdom', item.id]);
  }
}