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
//Actualizar Contacto
let ActualizarContacto = (modificacion) => {
    const { id, nombre, apellido, telefono, dirección, ciudad}= modificacion;
    let encontrado = ListaContactos.filter(contacto => contacto.id ===id);
    if (nombre && apellido && telefono && {dirección, ciudad}){
        encontrado.nombre = nombre;
        encontrado.apellido = apellido;
        encontrado.telefono = telefono;
        encontrado.dirección = dirección;
        encontrado.ciudad = ciudad
        console.log("Contacto editado");
    } else {
        console.log("id no existe");
    }
}
const contactoEditado = new agregarContacto( 
    3,
    "Elvia",
    "Cordero",
    "+34 633035514",
    {dirección:"calle Perez", ciudad:"España"}, )
ActualizarContacto(contactoEditado)
//borrar contacto
borrarContacto(2);
//imprimir lista de contactos actualizada
imprimirContactos();