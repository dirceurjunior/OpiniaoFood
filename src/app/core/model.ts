export class Cliente {
   id: number;
   nomeRazaoSocial: string;
   nomeFantasia: string;
   cpfCnpj: string;
   rgInscricaoEstadual: string;
   pessoa = 'FISICA';
   situacao = 'ATIVO';
   dataCadastro: Date;
}

export class Categoria {
   id: number;
   descricao: string;
   // categoriaPai = new Categoria();
}

export class Unidade {
   id: number;
   abreviacao: string;
   descricao: string;
}

export class Mesa {
   id: number;
   numero: number;
}

export class Produto {
   id: number;
   nome: string;
   codigoBarras: string;
   caracteristica: string;
   situacao = 'ATIVO';
   ingrediente = 'false';
   adicional = 'false';
   valorUnitario: number;
   categoria = new Categoria();
   unidade = new Unidade();
   dataCadastro: Date;
   ingredientes: any[];
}

export class Venda {
   id: number;
   dataCriacao: Date;
   dataVenda: Date;
   valorTotalComDesconto: number;
   valorTotalSemDesconto: number;
   operacao = 'PEDIDO';
   tipoDesconto = 'PORCENTAGEM';
   valorDescontoVenda: number;
   observacao: string;
   mesa = new Mesa();
   cliente = new Cliente();
   itens = [];
}

export class Venda_Item {
   id: number;
   quantidade: number;
   valorUnitarioSemDesconto: number;
   // valorUnitarioComDesconto: number;
   produto = new Produto();
   // venda = new Pedido();
   adicionais = [];
}

export class Venda_Item_Adicional {
   id: number;
   quantidade: number;
   valorUnitario: number;
   produto = new Produto();
}





