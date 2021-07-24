import { ClienteService } from './shared/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from './shared/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  formulario = new FormGroup({});
  cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService) { }

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
    this.setCliente();
    this.clienteService.postCliente(this.cliente).subscribe(
      (resposta) => { this.cliente = resposta , this.mensagemSucesso(), this.resetaFormulario(); },
      (erro) => this.mensagemErro(erro)
    );
  }

  setCliente(): void {
    this.cliente.nome = this.formulario.controls.nome.value;
    this.cliente.telefone = this.formulario.controls.telefone.value;
    this.cliente.email = this.formulario.controls.email.value;
  }

  resetaFormulario(): void{
    this.formulario.reset();
  }

  mensagemSucesso(): void {
    this.toastr.info(`Cliente ${this.formulario.controls.nome.value} cadastrado com sucesso!`);
  }

  mensagemErro(erro: string): void {
    this.toastr.warning(erro);
  }




}
