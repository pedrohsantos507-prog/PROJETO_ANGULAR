import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './Item';

@Component({
  selector: 'app-lista-produtos',
  imports: [FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  descricao_produto: string = '';
  valor_unitario: number | null = null;
  listaItens: Item[] = [];

  addItem() {
    //INSTANCIA DA CLASSE ITEM PASSANDO OS PARÂMETROS DO CONSTRUTOR
    //let item = new Item(this.descricao_produto, this.valor_unitario)

    //instancia da classe item (criando o objeto item)
    let item = new Item();
    item.idProduto = this.listaItens.length + 1;
    item.descricaoProduto = this.descricao_produto;
    item.valorUnitario = this.valor_unitario ?? 0;

    //adicionando objeto item ao array listaItens
    this.listaItens.push(item);

    //limpando as propriedades da classe
    this.descricao_produto = '';
    this.valor_unitario = null;
  }

  selecionarItem(item: Item) {
    item.selecionado = !item.selecionado;
  }

  limparTudo() {
    this.listaItens = [];
  }
}
