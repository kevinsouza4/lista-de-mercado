let lista = [];
let frutas = [];
let laticínios = [];
let congelados = [];
let guloseimas = [];
let comida = [];
let categoria = "";
let remover = "";

lista.push ('frutas', ' laticinios', ' congelados', ' ou guloseimas?')


let listadecompras = "sim";

while (listadecompras != "nao") {

    listadecompras = prompt `você deseja adicionar uma comida na sua lista de compras? digite sim ou nao`;

    if (listadecompras === "nao"){

     break;
        

    }
 
    comida = prompt `Qual comida você deseja inserir?`;
    categoria = prompt (`qual categoria o item inserido se encaixa? ${lista}`)
if (categoria === 'frutas') {
    frutas.push (comida);
} else if (categoria === 'laticinios'){
    laticínios.push(comida);
} else if (categoria === 'guloseimas'){
    guloseimas.push(comida);
} else if (categoria === 'congelados'){
    congelados.push(comida);
}
   
  let listafinal = `Lista de compras: 
  frutas: ${frutas}
  laticínios: ${laticínios}
  congelados: ${congelados}
  guloseimas: ${guloseimas}}`

  alert (listafinal)

  listadecompras = prompt `você deseja adicionar uma comida na sua lista de compras? digite sim ou nao ou se desejar remover digite 'remover'`;

if (listadecompras === 'remover') {

    let categoria2 = prompt (`de qual categoria deseja remover? ${lista}`)

    if (categoria2 === 'frutas') {

        remover = prompt `qual comida você deseja remover da lista?`

        var frutas2 = frutas.indexOf(remover)

        frutas.splice(frutas2, 1)

    } else if (categoria2 === 'laticinios'){

        remover = prompt `qual comida você deseja remover da lista?`

        var laticinios2 = laticínios.includes(remover)

        laticínios.splice(laticinios2, 1)

    } else if (categoria2 === 'guloseimas'){
        remover = prompt `qual comida você deseja remover da lista?`

        var guloseimas2 = guloseimas.includes(remover)

        guloseimas.splice(guloseimas2, 1)

    } else if (categoria2 === 'congelados'){
        remover = prompt `qual comida você deseja remover da lista?`

        var congelados2 = congelados.includes(remover)

        congelados.splice(congelados2, 1)
    }
   
    console.log(frutas)
    console.log(laticínios)
    console.log(guloseimas)
    console.log(congelados)
  
  listafinal = (`Lista de compras: 
  frutas: ${frutas}
  laticínios: ${laticínios}
  congelados: ${congelados}
  golosemas: ${guloseimas} `)
   
   alert (listafinal)
}

}



