import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentos = {
    id : 1,
    conteudo: "Show de bola",
    autoria: "DEV",
    modelo : ""
  }

  constructor() { }

  ngOnInit(): void {}

  CriarPensamentoComponent(){
    alert("Show de bola rapeize!");
  }

  CancelarComponent(){
    alert("Cancelado com sucesso!");
  }

}
