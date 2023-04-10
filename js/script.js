console.log("¡Descubriste nuestro secreto! Como premio, al reservar tu vuelo, con el código de descuento -S3CR3T0-. Obtené un 10% de descuento en tu vuelo!");

// Seteo de fecha de countdown.
const countDownDate = new Date("May 20, 2023 00:01:00").getTime();

// Actualizar el contador cada 1s.
const x = setInterval(function() {

  // Encontrar el day, hour y minute de ahora según el dispositivo del usuario.
const now = new Date().getTime();

  // Encotnrar la distancia entre hoy y el day, hours and minutes seteado.
const distance = countDownDate - now;

  // Calcular days, hours and minutes.
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Mostrar los days, hours and minutes en el HTML.
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;

  // Mensaje al terminar el countdown date.
if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    alert("Tripulación, próximos al despegue.");
}
}, 1000);
