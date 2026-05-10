class funcinaria {
    private _nome: string
    private _salario: number
    private _cargo: string

    constructor(nomeFuncio: string, salario: number, cargoFuncio: string) {
        this._salario = salario > 3000 && salario < 20000 ? salario : 3001;
        this._nome = nomeFuncio;
        this._cargo = cargoFuncio;
    }

    get nome(): string {
        return this._nome
    }
    get salario(): number {
        return this._salario
    }
    get cargo(): string {
        return this._cargo
    }

    set salario(novo: number) {
        if (novo > 3000 && novo < 20000) {
            this._salario = novo;
        }
    }
}

class gerente {

    private _gF: funcinaria[] = []
    private nome: string

    constructor(nomeGe: string) {
        this.nome = nomeGe;
    }

    gerencia(...funcionarios: funcinaria[]): void {
        this._gF.push(...funcionarios);
    }

    mudarSalario(novoValor: number, ...funcionarias: funcinaria[]): void {
        for (let f of funcionarias) {
            f.salario = novoValor;
        }
    }

    liberarNomes(): string[] {
        return this._gF.map(f => f.nome);
    }

    liberarCargo(): string[] {
        return this._gF.map(f => f.cargo);
    }

    liberarSalario(): number[] {
        return this._gF.map(f => f.salario);
    }

    liberarRelatorio(): string[] {
        return this._gF.map(f => f.nome + " - " + f.cargo + " - " + f.salario);
    }
}


let f1 = new funcinaria("Carla", 3022, "Professora");
let f2 = new funcinaria("Ana", 4500, "Analista");
let f3 = new funcinaria("Beatriz", 4521, "Diretora de Cinema");
let f4 = new funcinaria("Julia", 4212, "Marketing");
let f5 = new funcinaria("Gaby", 5000, "Engenheira de Dados");


let g1 = new gerente("Novanta")

g1.gerencia(f1, f2, f3)

g1.mudarSalario(5000, f1, f2, f3)

console.log(g1.liberarRelatorio())





/*

1) Crie a classe Funcionaria. Ela deve ter atributos privados nome, 
salario e cargo, e um construtor para inicializar seus atributos 
(salário precisa ser maior que 3000 e menor que 20000). 
Crie um método do tipo 'get' (acessar) (retornar valor armazenado em atributo), 
outro para retornar o cargo e outro para retornar o salário. 
Crie também um método do tipo 'set' (alterar) para alterar salário 
(fazendo a verificação acima).

2) Instancie (construa objetos, armazene em variáveis) ao menos 5 funcionárias.

3) Crie uma classe Gerente, que possui apenas o método gerenciar(),
o qual gerencia as funcionárias: deve dar aumento para pelo menos 3 funcionárias,
e então deve imprimir, em uma única chamada de console.log(), um relatório que possui
o nome da funcionária, seguida de seu cargo e depois de seu salário atual.

4) Instancie a Gerente e chame o método gerenciar().

*/