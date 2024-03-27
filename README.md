# Juego de Adivinar el Número Secreto

Este script en JavaScript implementa un juego interactivo donde el usuario intenta adivinar un número secreto generado aleatoriamente entre un rango dado. Además, calcula y muestra estadísticas sobre los intentos de los usuarios, incluyendo el promedio de intentos para adivinar el número secreto.

## Funciones

El script contiene las siguientes funciones:

1. `getRandomNumber(min, max)`: Genera un número aleatorio entre `min` y `max` (ambos incluidos).

2. `playGame()`: Función principal del juego que inicia la interacción con el usuario. En esta función se genera un número secreto y se lleva a cabo el juego, donde el usuario tiene un número limitado de intentos para adivinar el número.

## Funcionalidad del Juego

El juego procede de la siguiente manera:

- Se muestra un mensaje de bienvenida al usuario.
- Se genera un número secreto dentro del rango especificado.
- El usuario tiene un máximo de 10 intentos para adivinar el número secreto.
- En cada intento, el usuario ingresa un número y recibe pistas sobre si el número secreto es mayor o menor.
- El juego termina cuando el usuario adivina el número secreto o se rinde.
- Se muestran mensajes de éxito o fracaso según el resultado del juego.

## Interacción con el Usuario

El script interactúa con el usuario mediante ventanas emergentes (`alert`) y solicitudes de entrada (`prompt`). El usuario puede ingresar un número para adivinar o la palabra "rendirse" para abandonar el juego.

## Estadísticas

Al final del juego, se muestra la cantidad total de intentos realizados por el usuario y el promedio de intentos de todos los usuarios que han jugado.

## Uso

Para jugar, simplemente ejecuta el script en un entorno que admita JavaScript, como un navegador web o una consola JavaScript.

¡Disfruta tratando de adivinar el número secreto y descubre si puedes superar el promedio de intentos!
