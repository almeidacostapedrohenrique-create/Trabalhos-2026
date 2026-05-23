class Banco{
    private _clientes: Clientes[] = [];
    private _funcionarios : Funcionarios[] = [];

    public constructor(public readonly _local: string, private readonly _numbSerie: number){}

    get clientes() : string[]{
        return this._clientes.map(f => f.nome);
    }

    get funcionarios() : string[]{
        return this._funcionarios.map(f => f.nomeFuncio);
    }

    public newClientes(...clientes : Clientes[]) : void{
        this._clientes.push(...clientes);
    }

    public getNewFuncionario(...funcio : Funcionarios[]){

    }

}

class Funcionarios{
    public constructor(
        public readonly _nomeFuncio : string,
        private _salario: number, 
        private _dataDeEntrada: string
    ){
        if(!this.checkSalario(_salario)){
            console.log("Salario minimo definido para 3000")
            this._salario = 3000;
        }
    }    

    private checkSalario(valor:number) : boolean{
        if(valor <= 3000){
            return false
        }

        return true
    }

    get nomeFuncio() : string{
        return this._nomeFuncio;
    }

    get dataDeEntrada(): string{
        return this._dataDeEntrada;
    }

    public returnSalario(senha: string) : number | undefined{
        if(!this.checkAdmin(senha)){
            console.log("Error");
            return undefined
        }
        console.log("Sucess")
        return this._salario;
    }

    public newSalario(valor: number, senha: string){
        if(!this.checkAdmin(senha)){
            console.log(" Apenas admin pode mudar os salarios dos trabalhadores.")
        } else {
            this._salario = valor;
        }
    }

    private checkAdmin(senha: string): boolean{
        if(senha != "Hermenegildo zoroastra da silva sauro"){
            return false
        }
        return true
    }
}

class Clientes{
    public constructor(
        private _nome: string,
        private _dataDeEntrada: string
    ){}

    get nome() : string{
        return this._nome;
    }
}


const f1 : Funcionarios = new Funcionarios("Pedro", 10000, "2026-05-23");

f1.returnSalario("Hermenegildo zoroastra da silva sauro")
