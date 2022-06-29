import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IDigimon } from './IDigimon';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private httpClient : HttpClient) { }

  obterTodos(){
    return this.httpClient.get<IDigimon[]>(`${API_PATH}`);
  }
  
  procuraPorNivel(nivel : string){
    return this.httpClient.get<IDigimon[]>(`${API_PATH}/level/${nivel}`);
  }

  procuraPorNome(nome: string){
    return this.httpClient.get<IDigimon>(`${API_PATH}/name/${nome}`);
  }
}
