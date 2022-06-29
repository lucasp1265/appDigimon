import { Component, OnInit } from '@angular/core';
import { DigimonService } from './digimon.service';
import { IDigimon } from './IDigimon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit{
  title = 'appDigimon';
  niveis = ["Fresh","In Training","Rookie","Champion","Ultimate","Mega","Armor"];
  selected = "Fresh"
  nome = "";
  digimons: IDigimon[] = [];
  digimons2: IDigimon[] = [];
  digimomNome : any;
  constructor(public digimonService: DigimonService){
  }
  
  ngOnInit() {
    this.digimonService.obterTodos().subscribe(dados => this.digimons = dados);
  }

  obterTodosDigimons(){
    console.log(this.digimons);
  }

  procurarNivel(){
    this.digimonService.procuraPorNivel(this.selected).subscribe(dados => this.digimons2 = dados);
    this.digimonService.procuraPorNivel(this.selected).subscribe(dados => console.log(dados));
  }

  procuraNome(){
    this.digimonService.procuraPorNome(this.nome).subscribe(dados => this.digimomNome = dados);
    this.digimonService.procuraPorNome(this.nome).subscribe(dados => console.log(dados));
    this.nome = "";
  }
}


