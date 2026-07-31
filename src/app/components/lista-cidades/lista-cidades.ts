import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cidade } from './Cidade';

@Component({
  selector: 'app-lista-cidades',
  imports: [FormsModule],
  templateUrl: './lista-cidades.html',
  styleUrl: './lista-cidades.css',
})
export class ListaCidade {
  nomeCidade: string = '';
  numeroEleitores: number | null = null;
  listaCidades: Cidade[] = [];

  addCidade() {
    //INSTANCIA DA CLASSE ITEM PASSANDO OS PARÂMETROS DO CONSTRUTOR
    //let item = new Item(this.descricao_produto, this.valor_unitario)

    //instancia da classe item (criando o objeto item)
    let cidade = new Cidade();

    cidade.idCidade = this.listaCidades.length + 1;
    cidade.nomeCidade = this.nomeCidade;
    cidade.numeroEleitores = this.numeroEleitores ?? 0;

    //adicionando objeto item ao array listaItens
    this.listaCidades.push(cidade);

    //limpando as propriedades da classe
    this.nomeCidade = '';
    this.numeroEleitores = null;
  }

  selecionarCidade(cidade: Cidade) {
    cidade.selecionado = !cidade.selecionado;
  }

  limparTudo() {
    this.listaCidades = [];
  }
}
