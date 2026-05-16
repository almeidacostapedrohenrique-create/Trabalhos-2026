class Fatorar{
    private listFatorada : number[] = []

    private fat(valor: number, i : number): void{
        if(valor == 1){
            return
        }
        else if(valor % i == 0){
            this.listFatorada.push(i);
            return this.fat(valor/i, i);
        } else{
            return this.fat(valor, i+1)
        }
    }
    public fatorar (valor: number) : void {
        this.fat(valor, 2);
        console.log(this.listFatorada);
    }

    private checkPrimo(valor: number) : boolean{
        for(let i = 2; i < valor; i++){
            if(valor % i == 0){
                return false
            }
        }

        return true
    }

    public respPrimo(valor : number){
        if(this.checkPrimo(valor)){
            console.log(`${valor} é primo`);
        } else{
            console.log(`${valor} não é primo`);
        }
    }
}

const math : Fatorar = new Fatorar();

math.fatorar(45);
