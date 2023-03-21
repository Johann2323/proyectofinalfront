import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadDetectionService {

  public pageReloaded = false;
  constructor() { }
}
