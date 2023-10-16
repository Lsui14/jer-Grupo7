# Death Spell
Juego desarrollado por GameNet (integrantes)

![logo_GameNet](https://github.com/Lsui14/jer-Grupo7/blob/7cdb6cb4aade57e0cdba2098bd5cba464702b21f/Im%C3%A1genes/logo_gamenet.png)
![Logo_juego](https://github.com/Lsui14/jer-Grupo7/blob/a1d9c343cac7df00d6a255fe5ccf064a5fb0d360/Im%C3%A1genes/Logo_juego_final.png)


## Descripción del juegos 
Death Spell es un juego de la compañía GameNet, el cual se puede clasificar con las siguientes características: 

- Plataforma: Ordenador (PC) 

- Modelo de negocio: Free to play sin anuncios, busca ser una experiencia gratuita sin micro pagos ni anuncios. 

 - Región: europea, es decir, PEGI 

- Audiencia: Para todas las edades, PEGI 3 

- Género: Lucha, acción 

- Temática: Medieval oscura 

- Propósito: Entretenimiento 

- Interacción: Síncrono por teclado 

En resumen, Death Spell es un juego en red multijugador tanto online como local con una interacción síncrona y de género de lucha y acción basado en la Edad Media oscura con un estilo visual Pixel Art, teniendo una paleta de colores fríos. Además, el propósito de Death Spell es el entretenimiento del cliente, por tanto, el modelo de negocio que aplica es el free to play sin tener necesidad de pagar por ningún elemento o beneficio del juego. 

Por otro lado, la cámara es frontal y se mantiene estática, como en un juego 2D típico. 

A la hora de decidirnos por este juego nos inspiramos principalmente en dos juegos conocidos. En primer lugar, la idea del juego y su arte pixelart están basadas en el juego indie Nidhogg, el cual consiste en un juego de lucha entre dos personas con espadas. 
## Mecánicas y dinámicas
En esta sección entraremos en detalles en las mecánicas de Death Spell. Se explicarán las bases del juego y se detallarán las acciones que podrán llevar a cabo ambos jugadores. 
### Jugabilidad
Death Spell consta de un nivel donde se enfrentarán los dos jugadores. Cada uno controlará un tipo de mago (uno de fuego y otro de hielo) y comenzará el combate. El mapa en el que se combatirá dispondrá de una gran plataforma para que los jugadores tengan cierta movilidad y posibilidades a la hora de esquivar y lanzar ataques. 

La batalla acabará en el momento que uno de los dos pierda todas sus vidas. La dificultad de Death Spell viene dada por la habilidad de cada jugador de combatir y esquivar ataques, debido a que es un juego de pelea. 

### Flujo de juego
Nuestro juego multijugador competitivo funcionará en partidas en las que solo pueden participar 2 jugadores, los cuales tendrán 3 vidas y verán al comienzo un menú de inicio con los botones de jugar, controles, créditos y ajustes. Tras configurar los ajustes y leer los controles, sí así lo desean, podrán comenzar a jugar.  

Ambos jugadores aparecerán en el escenario de combate 2D uno a cada lado del escenario. Una vez en sus posiciones, se dará un aviso de que el combate ha comenzado y podrán empezar a moverse y atacar. 

### Movimientos e interacciones
Los movimientos o controles serán los clásicos movimientos de los juegos de lucha, que son moverse a izquierda y derecha, saltar y atacar. 

Los botones asignados para estos movimientos son los siguientes: 

Local: 

Jugador 1: 

- D: Desplazamiento lateral derecho 

- A: Desplazamiento lateral izquierdo 

- W: Saltar 

- E: Atacar 

Jugador 2: 

- L: Desplazamiento lateral derecho 

- J: Desplazamiento lateral izquierdo 

- I: Saltar 

- O: Atacar 

En red/Online: 

Ambos jugadores: 

- D: Desplazamiento lateral derecho 

- A: Desplazamiento lateral izquierdo 

- W: Saltar 

- E: Atacar
### Arte
Para el arte, como la idea del juego era la de hacer un juego ambientado en el medievo, en el que los personajes jugables iban a ser magos, pensamos en un arte oscuro que recuerda al género de fantasía oscura conocido. Además, también nos inspiramos en otro juego muy conocido, hablamos del famoso juego español Blasphemous. 

![ImagenBlasphemous1](https://github.com/Lsui14/jer-Grupo7/blob/be539a7a950386871ccc82583ad7ae2cfe3fd6c5/Im%C3%A1genes/Juego%20de%20referencia_Blasphemous_1.png)
Imagen ingame de Blasphemous

![ImagenBlasphemous2](https://github.com/Lsui14/jer-Grupo7/blob/be539a7a950386871ccc82583ad7ae2cfe3fd6c5/Imágenes/Juego%20de%20referencia_Blasphemous_2.png)
Imagen de pelea contra el boss de Blasphemous 
### Personajes
Como hemos dicho ya, los personajes jugables son dos magos que se lanzarán hechizos. Como teníamos claro que nuestro juego tenía que ser en pixelart buscamos una serie de sprites gratuitos de uso libre que cuentan con varias animaciones. La animación de ataque fue modificada por nosotros para que el ataque fuese una bola de hielo o fuego que avanza hacia delante. Para el jugador 1, nos encargamos de cambiar los colores del sprite descargado para hacerlo distinguible de su rival.  

https://luizmelo.itch.io/wizard-pack (Link a la página de descarga de los sprites) 

![ImagenAtaqueJ1](https://github.com/Lsui14/jer-Grupo7/blob/be539a7a950386871ccc82583ad7ae2cfe3fd6c5/Im%C3%A1genes/Sprites%20ataque_J1.png)
![ImagenAtaqueJ2](https://github.com/Lsui14/jer-Grupo7/blob/be539a7a950386871ccc82583ad7ae2cfe3fd6c5/Im%C3%A1genes/Sprites%20ataque_J2.png)
Animación de ataque modificada de ambos jugadores 

![ImagenCorrerJ1](https://github.com/Lsui14/jer-Grupo7/blob/be539a7a950386871ccc82583ad7ae2cfe3fd6c5/Im%C3%A1genes/Sprites%20run_J1.png)
![ImagenCorrerJ2](https://github.com/Lsui14/jer-Grupo7/blob/be539a7a950386871ccc82583ad7ae2cfe3fd6c5/Im%C3%A1genes/Sprites%20run_J2%20(2).png)
Animación de correr de ambos jugadores 

### Elementos
Para los ataques de ambos jugadores creamos una bola de fuego pixel por pixel usando el programa Photoshop y para la bola de hielo modificamos los colores de la bola de fuego ya creada. 

![ImagenBolaSprite](https://github.com/Lsui14/jer-Grupo7/blob/be539a7a950386871ccc82583ad7ae2cfe3fd6c5/Im%C3%A1genes/Elemento%20bola%20fuego.png)
Sprite de la bola de fuego creada 
## Escenario
Para el escenario, se ha utilizado la IA de Bing de generación de imágenes (que utiliza DALLE); Con la que se creó una imagen en proporción 1:1, con la estética Pixelart deseada: “Un paisaje, con estética “PixelArt 2D”, que tenga una temática de fantasía; con motivos apocalípticos o de batalla final” 

En Photoshop, se adaptó a la proporción 16:9 de la pantalla y con las herramientas de dibujo se creó la plataforma; donde se realizará la actividad de los personajes en el juego. 
![Escenario](https://github.com/Lsui14/jer-Grupo7/blob/main/Im%C3%A1genes/Escenario.png)
