// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombreAmigo = document.getElementById('amigo').value;

    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

    // Actualizar la lista visible
    actualizarLista();
}

// Función para actualizar la lista visible de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = amigos[i];
        // Agregar el elemento a la lista
        lista.appendChild(li);
    }
}

// Función para seleccionar aleatoriamente un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('La lista está vacía.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    // Vaciar el array de amigos
    amigos = [];

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

    // Limpiar la lista visible
    actualizarLista();

    // Limpiar el resultado
    document.getElementById('resultado').innerHTML = '';
}