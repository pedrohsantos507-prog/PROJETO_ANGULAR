import { Component } from '@angular/core';
import { FormsModule } from '../../../../node_modules/@angular/forms/types/forms';
import { Item } from './item'

@Component({
  selector: 'app-lista-produtos',
  imports: [ FormsModule ],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  descricao_produto : string = 'valor'
  valor_unitario : number = 0.0
  listaItens : Item[] = []


  addItem(){
    //INSTANCIA DA CLASSE ITEM PASSANDO OS PARÂMETROS DO CONSTRUTOR
    //let item = new Item(this.descricao_produto, this.valor_unitario)
    
    //instancia da classe item (criando o objeto item)
    let item = new Item()
    item.idProduto = this.listaItens.length + 1
    item.descricaoProduto = this.descricao_produto
    item.valorUnitario = this.valor_unitario

    //adicionando objeto item ao array listaItens
    this.listaItens.push(item)
  
    //limpando as propriedades da classe
    this.descricao_produto = ''
    this.valor_unitario = 0.0
  }
  
}