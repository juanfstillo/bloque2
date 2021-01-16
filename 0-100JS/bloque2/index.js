//1 Armar una funcion para retornar el reverso de un string (prohibido usar funciones de javascript)
//2- Permitirle al usuario cargar 3 nombres y 3 notas de alumnos
    // a- Mostrar el alumno con MAYOR nota.
    // b- Mostrar el alumno con MENOR nota.
// Todo el codigo debe estar resuelto con arrow functions.

//-1
const reverseTradicional=(string) => {
    const stringReverseTraditional = [];
    //const stringReverseUnited= []
    for(let i = string.length-1;i>=0;i--){
        stringReverseTraditional.push(string[i]);
    }
    const stringReverseUnited = stringReverseTraditional.join("");
    return stringReverseUnited;
}
//-2

const cargarAlumnos=()=>{
    let alumnos = [];
    for (let i = 0; i < 3; i++) {
        let alumno = prompt("Ingrese el nombre del alumno");
        alumnos.push(alumno);
        
    }
    console.log(alumnos);
    return alumnos;
}

const cargarNotas=()=>{
    let notas = [];
    for (let i = 0; i < 3; i++) {
        let nota = parseInt(prompt(`Ingrese la nota para el alumno del alumno ${i+1}`));
        notas.push(nota);
        
    }
    console.log(notas);
    return notas;
}

const mostrarMayorNota=(notas,alumnos)=>{
    let notaMayor= 0;
    let alumnoMejorNota= "";
    for(let i = 0; i <notas.length;i++){
        if(notas[i]>notaMayor){
        notaMayor=notas[i];
        alumnoMejorNota= alumnos[i];
    }
}
console.log(notaMayor);
console.log(alumnoMejorNota);
return notaMayor,alumnoMejorNota;



}

const mostrarMenorNota=(notas,alumnos)=>{
    let notaMenor= notas[0];
    let alumnoMenorNota= "";
    for(let i = 0; i <notas.length;i++){
        if(notas[i]<notaMenor){
            notaMenor=notas[i];
            alumnoMenorNota= alumnos[i];
    }
}
console.log(notaMenor);
console.log(alumnoMenorNota);
return notaMenor,alumnoMenorNota;


}

