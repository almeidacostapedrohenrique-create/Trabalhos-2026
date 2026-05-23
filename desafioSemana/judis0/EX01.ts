class Mat{
    private static listFatorada : number[] = [] ;

    private static fat(valor: number, i : number): void{
        if(valor == 1){
            return
        }
        else if(valor % i == 0){
            Mat.listFatorada.push(i);
            return this.fat(valor/i, i);
        } else{
            return this.fat(valor, i+1)
        }
    }

    public static fatorar (valor: number) : void {
        this.fat(valor, 2);
        console.log(Mat.listFatorada);
    }

    private  static checkPrimo(valor: number) : boolean{
        for(let i = 2; i < valor; i++){
            if(valor % i == 0){
                return false
            }
        }

        return true
    }

    public static respPrimo(valor : number){
        if(this.checkPrimo(valor)){
            console.log(`${valor} é primo`);
        } else{
            console.log(`${valor} não é primo`);
        }
    }
}

