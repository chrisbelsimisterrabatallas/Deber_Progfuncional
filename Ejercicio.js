//Estimado estudiante. resuelva los siguientes problemas:
//1)Se pide crear la funciónnes que devuelvan aquellas palabras que NO tiene las misma vocal.
//const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
//const esperado = ["racecar", "oligopoly", "enano"];
const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
function vocal(array){
    var vocal = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    return array.split(" ",' ', '.').filter (data => {
        return vocal.indexOf(data.toLowerCase())!=-1;
    });
}
function getpalabras(array){
    const x = [];
    array.forEach(data =>{
        const y = vocal(data);
        for (i=1;i<=y.length-2;i++){
        if(y[0] != y[i])
        x.push(data)
        }
    })
    return x;
    }
    console.log("Esta son las palabras que NO tienen la misma vocal: ", getpalabras(entrada));

//2) Dado el siguiente vector array=[5,4,20,7,5,10]
//use map, para devolver  cada elemento del vector multiplicado por 10
//resultado esperado [50,40,200,70,50,100]
var array=[5,4,20,7,5,10];
var multiplicación = array.map(function(item) {
   return item * 10;
});
console.log("El resultado de la multiplicación es: ", multiplicación);

//3) Dada la siguiente matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]
//y usando únicamente map, devuelva cada elemento de la matriz multiplicado por 3
//resultado esperado = [[3, 6, 9], [12, 15, 18], [21, 24, 27] ]
const matriz1 = [1,2,3];
const matriz2 = [4,5,6];
const matriz3 = [7,8,9];
const  mat1 = matriz1.map(x => x*3);
const  mat2 = matriz2.map(y => y*3);
const  mat3 = matriz3.map(z => z*3); 

    console.log ("El resultado de la matrix de 3 es:", [mat1,mat2,mat3]);
//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720...

MatReducir = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
var integrado = MatReducir.reduce(function(y,z) {
    return y.concat(z);
});
var producto = integrado.reduce(function(y,z){
    return y * z;
});
console.log ("El array se reduce a:", producto);