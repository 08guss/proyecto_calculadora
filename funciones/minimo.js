// GRUPO 3
// Giuseppe Toscano ---> MINIMO
// Kevin Rodriguez ----> log(n)
// D-DS-6-1

export function minimo(v1,v2){
    // declaracion de variable del minimo
    let minimo;

    // condicional if para verificar los valores entrantes
    if (v1<v2){
        minimo = v1;
    } else {
        minimo = v2;
    }
    
    return minimo;

}