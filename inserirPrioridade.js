class No {
    constructor(valor, prioridade) {
        this.valor = valor;
        this.prioridade = prioridade;
        this.proximo = null;
    }
}

class ListaPrioridade {
    constructor() {
        this.cabeca = null;
    }

    inserirComPrioridade(valor, prioridade) {
        const novoNo = new No(valor, prioridade);
        if (!this.cabeca || this.cabeca.prioridade < prioridade) {
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo && atual.proximo.prioridade >= prioridade) {
                atual = atual.proximo;
            }
            novoNo.proximo = atual.proximo;
            atual.proximo = novoNo;
        }
    }

    imprimirLista() {
        let atual = this.cabeca;
        while (atual) {
            console.log(`Valor: ${atual.valor}, Prioridade: ${atual.prioridade}`);
            atual = atual.proximo;
        }
    }
}

const lista = new ListaPrioridade();
lista.inserirComPrioridade('Elemento1', 2);
lista.inserirComPrioridade('Elemento2', 5);
lista.inserirComPrioridade('Elemento3', 3);
lista.imprimirLista();