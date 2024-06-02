// Selecciona todos los elementos con la clase 'ripple' y los guarda en la constante 'buttons'.
const buttons = document.querySelectorAll('.ripple');

// Para cada botón en la lista 'buttons', se agrega un evento de click.
buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // Obtiene las coordenadas X e Y del evento de click en relación con la página.
    const x = e.pageX;
    const y = e.pageY;

    // Obtiene las coordenadas X e Y del botón en relación con su contenedor más cercano.
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Calcula las coordenadas X e Y del clic dentro del botón.
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Crea un nuevo elemento 'span' y le añade la clase 'circle'.
    const circle = document.createElement('span');
    circle.classList.add('circle');

    // Define las propiedades CSS 'top' y 'left' del 'span' recién creado.
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    // Añade el 'span' (círculo) al botón como hijo.
    this.appendChild(circle);

    // Después de 500 milisegundos, se elimina el 'span' (círculo) del DOM.
    setTimeout(() => circle.remove(), 500);
  });
});

