var array;
function arraymulti(){
        array=[{user:"Wilder", cod:"190363", doc:"12345", tipouser:"profe"},
               {user:"natalia", cod:"192128", doc:"25896", tipouser:"estudiante"},
               {user:"juan", cod:"192101", doc:"48855", tipouser:"estudiante"}
            ]
    let fecha=new Date();
    console.log(fecha.getHours());
            // console.log(array);
}
function compara(){
    var nombre=$("#nombre").val();
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].user){
            console.log("el nombre SI EXISTE")
        }
        else{
            console.log("el nombre NO EXISTE")
        }
    }
}