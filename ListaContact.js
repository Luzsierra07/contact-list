//Crear lista de cotactos, datos predefinidos
let ListaContactos = [
    {
        id:1,
        nombre: "Maria",
        apellido: "Sierra",
        telefono: "3143988342",
        dirección: "cra 6 a",
        ciudad: "Bogotá"
    }, 
    {
        id:2,
        nombre: "Lina",
        apellido: "Meza",
        telefono: "3209890059",
        dirección: "cra 149",
        ciudad: "Bogotá"
    },
    {
        id:3,
        nombre: "Elvia",
        apellido: "Cordero",
        telefono: "3128649289",
        dirección: "calle 23",
        ciudad: "Sincelejo" 
    }
];
//crear una nueva función para agregar un nuevo contacto a la ista
function agregarContacto (
    id,
    nombre,
    apellido,
    telefono,
    ubicaciones,
){  const {dirección, ciudad} = ubicaciones; 
    ListaContactos.push({
        id: id,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ubicaciones : { dirección, ciudad}
    }
)              
} 

//función para borrar un contacto de la lista
function borrarContacto (id){
    let indice = ListaContactos.findIndex((contacto)=>contacto.id===id);
    if (indice !== -1){
        ListaContactos.splice(indice, 1);
    }
}
//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimirContactos(){
    console.log(ListaContactos);
}
//agregar contacto nuevo
agregarContacto(
    4,
    "Elvis",
    "Diaz",
    "3013740259",
    {dirección:"calle 22", ciudad:"Planeta Rica"},
)
 
//borrar contacto
borrarContacto(2);
//imprimir lista de contactos actualizada
imprimirContactos();