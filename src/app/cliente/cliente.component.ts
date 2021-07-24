import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  formulario = new FormGroup({});

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.criaFormulario();
  }

  criaFormulario(): void{
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  salvar(): void {
    this.mensagemSucesso();
    this.reset();
  }

  reset(): void{
    this.formulario.reset();
  }

  mensagemSucesso(): void {
    this.toastr.info(`Cliente ${this.formulario.controls.nome.value} cadastrado com sucesso!`);
  }

}
