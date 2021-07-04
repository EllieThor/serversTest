import { Injectable } from '@angular/core';
import { Server } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ServersServiceService {
  _servers: Array<Server> = [];
  constructor(public apiService: ApiService) {}

  async getAllServers(url: string) {
    this._servers = (await this.apiService.createGetService(
      url
    )) as Array<Server>;
    console.log('Server: ', this._servers);
  }
}
