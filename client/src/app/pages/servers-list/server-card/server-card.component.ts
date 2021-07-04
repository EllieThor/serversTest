import { Component, Input, OnInit } from '@angular/core';
import { Server } from 'src/app/models/models';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css'],
})
export class ServerCardComponent implements OnInit {
  @Input() server: Server = new Server();
  constructor() {}

  ngOnInit(): void {}
}
