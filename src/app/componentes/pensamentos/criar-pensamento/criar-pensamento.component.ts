import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentos: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo : ""
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  CriarPensamentoComponent(){
    this.service.criar(this.pensamentos).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  CancelarComponent(){
    this.router.navigate(['/listarPensamento'])
  }

}
