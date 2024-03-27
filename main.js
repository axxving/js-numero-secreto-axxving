// Función para generar un número aleatorio entre min y max (ambos incluidos)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Función principal del juego
  function playGame() {
    const minNumber = 1; // Número mínimo permitido
    const maxNumber = 100; // Número máximo permitido
    const secretNumber = getRandomNumber(minNumber, maxNumber); // Generar número secreto
    let attempts = 0; // Contador de intentos del usuario
    let totalAttempts = 0; // Total de intentos de todos los usuarios
    let averageAttempts = 0; // Promedio de intentos
  
    const maxAttempts = 10; // Número máximo de intentos permitidos
  
    alert("¡Bienvenido al juego de adivinar el número secreto!");
  
    // Bucle mientras el usuario no haya alcanzado el límite de intentos
    while (attempts < maxAttempts) {
      let remainingAttempts = maxAttempts - attempts;
      let userDecision = prompt(
        `Intenta adivinar el número secreto (entre 1 y 100).\nTe quedan ${remainingAttempts} intentos.\n\nEscribe "rendirse" para abandonar el juego.`
      );
  
      // Si el usuario decide rendirse, mostrar el número secreto y salir del bucle
      if (userDecision.toLowerCase() === "rendirse") {
        alert(`¡Te has rendido! El número secreto era ${secretNumber}.`);
        totalAttempts += attempts; // Agregar los intentos de este usuario al total
        break; // Salir del bucle
      }
  
      // Convertir la entrada del usuario a un número entero
      let guess = parseInt(userDecision);
  
      // Verificar si la entrada del usuario es un número válido dentro del rango
      if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        alert("Por favor, introduce un número válido entre 1 y 100.");
        continue; // Continuar con la siguiente iteración del bucle
      }
  
      attempts++; // Incrementar el contador de intentos
  
      // Verificar si el número ingresado es igual al número secreto
      if (guess === secretNumber) {
        alert(
          `¡Felicidades! ¡Adivinaste el número secreto ${secretNumber} en ${attempts} intentos!`
        );
        totalAttempts += attempts; // Agregar los intentos de este usuario al total
        break; // Salir del bucle
      } else if (guess < secretNumber) {
        alert("El número secreto es mayor que tu intento.");
      } else {
        alert("El número secreto es menor que tu intento.");
      }
    }
  
    // Si el usuario agotó todos los intentos sin adivinar el número secreto
    if (attempts === maxAttempts) {
      alert(
        `¡Lo siento, has agotado tus ${maxAttempts} intentos! El número secreto era ${secretNumber}.`
      );
      totalAttempts += maxAttempts; // Agregar el número máximo de intentos al total
    }
  
    // Calcular el promedio de intentos
    averageAttempts = totalAttempts / (attempts > 0 ? attempts : maxAttempts);
  
    // Mostrar la cantidad total de intentos realizados y el promedio de intentos
    alert(
      `Has jugado ${attempts} veces.\nEl número promedio de intentos para adivinar el número secreto es: ${averageAttempts.toFixed(
        2
      )}`
    );
  }
  
  // Llamar a la función principal para iniciar el juego
  playGame();
  