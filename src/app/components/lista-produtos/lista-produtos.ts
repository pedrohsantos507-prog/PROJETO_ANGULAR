import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from './produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produto.css',
})
export class ListaProdutos {
  nomeProduto: string = '';
  precoProduto: number | null = null;
  listaProdutos: Produto[] = [];

  addProduto() {
    // Instancia um novo produto
    let produto = new Produto();

    produto.idProduto = this.listaProdutos.length + 1;
    produto.nomeProduto = this.nomeProduto;
    produto.precoProduto = this.precoProduto ?? 0;

    // Adiciona o produto à lista
    this.listaProdutos.push(produto);

    // Limpa os campos do formulário
    this.nomeProduto = '';
    this.precoProduto = null;
  }

  selecionarProduto(produto: Produto) {
    produto.selecionado = !produto.selecionado;
  }

  limparTudo() {
    this.listaProdutos = [];
  }
}