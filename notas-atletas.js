let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

class Atleta {
    constructor (atleta){
        this.nome = atleta.nome
        this.notas = atleta.notas.sort((a, b) => b - a)
        //console.log(this.notas)
        this.notasValidas = this.notas.splice(1, 3)
        //console.log(this.notasValidas)
        }

    obterNome(){
        return `O nome do atleta é ${this.nome}`
    };

    obterPrimeiraNotaValida(){
        return `A sua maior nota valida foi ${this.notasValidas[0]}`
    };

    obterUltimaNotaValida(){
        return `A sua menor nota valida foi ${this.notasValidas[this.notasValidas.length -1]}`
    };

    obterMedia(){
        let soma = this.notasValidas.reduce((acc, num) => acc + num, 0)
        let qtdNotas = this.notasValidas.length

        return `A media das suas notas validas foi ${(soma/qtdNotas).toFixed(2)}`
    }
}



// for (let a = 0; a < atletas.length; a++) {
    //     let atleta = new Atleta(atletas[a])
    // console.log(atleta.obterNome())
    // console.log(atleta.obterPrimeiraNotaValida())
    // console.log(atleta.obterUltimaNotaValida())
    // console.log(atleta.obterMedia())
    //}
    
let resultado = ""

atletas.forEach(x => {
    let atleta = new Atleta(x)
    resultado += `${atleta.obterNome()}\n${atleta.obterPrimeiraNotaValida()}\n${atleta.obterUltimaNotaValida()}\n${atleta.obterMedia()}\n\n`
})

console.log(resultado)