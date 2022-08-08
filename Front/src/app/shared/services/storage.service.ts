/*
Desarrollador: Jhoel Aicardi
Fecha: 28/10/2019
Descripción: Servicio creado para almacenar información en SessionStorage
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: any;

  constructor() {
    this.storage = sessionStorage;
  }

  public retrieve(key: string): any {
    const item = this.storage.getItem(key);

    if (item && item !== 'undefined') {
      return JSON.parse(this.storage.getItem(key));
    }
    return;
  }

  public store(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string) {
    this.storage.removeItem(key);
  }

  public removeAll() {
    this.storage.clear();
  }
}
