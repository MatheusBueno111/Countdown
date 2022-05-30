//colocando o dia no qual será o lançamento
const countDownDate = new Date('Nov 8, 2022 00:00:00').getTime();
console.log(countDownDate);

// setInterval chama a função em um intervalo de tempo especifico(em ms),nesse caso ta a cada 1 segundo
const x = setInterval(function () {
  // dia e hora de agora
  const now = new Date().getTime();

  // intervalo entre o lançamento e agora
  const intervalo = countDownDate - now;

  // calculando dias, horas, minutos e segundos
  const days = Math.floor(intervalo / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (intervalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((intervalo % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((intervalo % (1000 * 60)) / 1000);

  //formatando os horarios para ter zero, caso so tenha um digito
  const daysFormatted = days >= 10 ? days : '0' + days;
  const hoursFormatted = hours >= 10 ? hours : '0' + hours;
  const minutesFormatted = minutes >= 10 ? minutes : '0' + minutes;
  const secondsFormatted = seconds >= 10 ? seconds : '0' + seconds;

  // colocando o resultando no id=timer
  document.getElementById('days').innerHTML = daysFormatted + ' : ';
  document.getElementById('hours').innerHTML = hoursFormatted + ' : ';
  document.getElementById('minutes').innerHTML = minutesFormatted + ' : ';
  document.getElementById('seconds').innerHTML = secondsFormatted;

  // se o contador zerar, mostrar uma mensagem
  if (intervalo < 0) {
    clearInterval(x); //para a função setInterval
    document.getElementById('timer').innerHTML = 'EXPIRED';
  }
}, 1000);
