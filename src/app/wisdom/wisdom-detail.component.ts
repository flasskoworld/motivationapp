import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WisdomService } from '../services/wisdom.service';

@Component({
  selector: 'ns-wisdom-detail',
  templateUrl: './wisdom-detail.component.html',
})
export class WisdomDetailComponent implements OnInit {
  wisdom: any = {};

  constructor(
    private route: ActivatedRoute,
    private wisdomService: WisdomService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.wisdom = this.wisdomService.getWisdomById(id);
  }
}