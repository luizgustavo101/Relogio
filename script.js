setInterval(
  
  function () {
  let horas = document.getElementById("hora");
  let minutos = document.getElementById("minuto");
  let segundos = document.getElementById("segundo");

  let hora = new Date().getHours();
  let minuto = new Date().getMinutes();
  let segundo = new Date().getSeconds();

  if (hora < 10) {
    horas.innerHTML = "0" + hora;
  } else {
    horas.innerHTML = hora;
  }
  if (minuto < 10) {
    minutos.innerHTML = "0" + minuto;
  } else {
    minutos.innerHTML = minuto;
  }
  if (segundo < 10) {
    segundos.innerHTML = "0" + segundo;
  } else {
    segundos.innerHTML = segundo;
  }
}, 1000);
