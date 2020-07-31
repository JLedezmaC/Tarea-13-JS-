const tareas = ['Práctica de Javascript.', 'Ir al supermercado.', 'Pasear a los perros.', 'Lavar los trastes.'];
const descripcion = ['tarea-1', 'tarea-2', 'tarea-3', 'tarea-4'];
const menu = document.getElementById('main-menu');

const listaMenu = document.createElement('ul');
menu.appendChild(listaMenu);

for(let i = 0; i<tareas.length; i++){
    let datos = document.createElement('li');
    listaMenu.appendChild(datos)

    let input = document.createElement('input');
    datos.appendChild(input);

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', descripcion[i]);

    label = document.createElement('label');
    datos.appendChild(label);

    label.setAttribute('for', descripcion[i])
    label.innerHTML = tareas[i];
}