import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastSearchService {
  broadcastSearchInput = new EventEmitter<string>();

  constructor() { }

  broadcastSearch(city:string){
    this.broadcastSearchInput.emit(city)
  }
}
