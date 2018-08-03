# Creando una Red Social

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo, debe seleccionarse
el tema de interes y desglosarlo, para crear una interacción entre público segmentado.


## Introducción

Una emprendedora nos ha encargado crear una red social. No nos da mucho detalle
sobre qué tipo de red social quiere, sólo nos dice que creemos la mejor que
podamos, y que luego la convenzamos de lanzarla al mercado. Nos da ciertos temas
en los que le gustaría invertir:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables

Hoy en dia las redes sociales se han convertido en parte de la vida cotidiana, lamentablemente el uso 
inadecuado de las plataformas hace creer al público que no son funcionales, partiendo de esta idea erronea,
nos dimos a la tarea de impulsar esta plataforma teniendo público cautivo, con el principal objetivo
poder concientizar a las personas sobre acciones que debemos llevar a diario.

Es asi como el equipo de trabajo decidio fusionar tres categorias para enfocarlo a un tipo de público,
se selecciono "Alimentación", "Educación" y "Salud".

El cual en este primera fase se denomino "Soy mamá", una red social para la interaccion entre madres, de niños 
de entre O a 12 años.


## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir un sitio web
[_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
con más de una vista (página), y en el que podamos leer y escribir datos.

Algunos objetivos específicos:

* Entender las necesidades de los usuarios para los que crearás el producto y
  que ayudarás a resolver.
Madres que tienen experiencia que ofrecer y madres en apuros que busvan un tip, para 
cualquier situación, desde una pequeña roncha hasta recomenaciones de productos o
metologías.

* Poner en juego tu creatividad para generar ideas que lleven a una solución
  original y valiosa del problema.
Buscamos la diaria interacción entre madres, es asi como brindaremos un ranking en
dondes mostraremos a las madres con mayor participaciones que agreguen valor, buscando 
asi que sean premiadas por marcas patrocinadoras. Nos hemos dado a la tarea de buscar 
y enmedio de todo no encontramos una red social que solucione de manera eficaz la 
comunicación entre madres.

### General

Comenzando con la tarea de busqueda logramos obtener los siguientes datos respecto al benchmark:

Tomando como base a cuatro de las principales redes sosciales, Facebook, Pinterest, Instagram y Snapchat.

* Redes sociales
![GitHub Facebook](https://github.com/gloryarz/cdmx-2018-06-bc-core-am-social-network/blob/master/src/images/1.jpg)


![GitHub Pinterest](https://github.com/gloryarz/cdmx-2018-06-bc-core-am-social-network/blob/master/src/images/2.jpg)


![GitHub Instagram](https://github.com/gloryarz/cdmx-2018-06-bc-core-am-social-network/blob/master/src/images/3.jpg)


![GitHub Snapchat](https://github.com/gloryarz/cdmx-2018-06-bc-core-am-social-network/blob/master/src/images/4.jpg)


Evaluando cada una de las redes se acordo en el primer sprint presentar la pantalla Log In
en colores solidos, y con acciones a realizar precisas.

Respecto al contenido a mostrar, evaluamos páginas que son competencia e inspiración. Nos encontramos 
con que no hay una red social para madres, pero si blogs y páginas web con este contenido.

[BBtips](http://www.bbtipsmexico.com.mx/)

[BBmundo](https://www.bbmundo.com/)

[GuíaInfantil](https://www.guiainfantil.com/)

[SerPadres](http://serpadres.com/)

* Historias de usuario

HISTORIAS DE USUARIO EN UNA RED SOCIAL PARA MAMAS
1. Como usuario quiero poder crear mi propio perfil de acuerdo a mis necesidades e intereses.
2. Como usuario necesito poder darle me gusta a las publicaciones que mas me son de utilidad.
3. Como usuario necesito un espacio para publicar mis servicios que serviran de ayuda a las mamás para el desarrollo de sus hijos.
4. Como usuario quiero poder encontrar contenido informativo de utilidad sobre las etapas de mi hijo.
5. Como usuario necesito un grupo social donde pueda conocer mamás que tienen las mismas dudas hacerca de nuestros hijos.
6. Como usuario requiero una red social para expresar mis experiencias y conocimiento en la crianza de mis hijos.
7. Como usuario necesito un sitio donde encuentre productos y servicios que necesite en el instante y saber cuales son los mejores en el mercado.
8. Como usuario necesito los comentarios de un experto o madres que han tenido las mismas experiencias que yo y me puedan dar un consejo.

### Responsive, UI y comportamiento

Nuestra red social es completamente responsive, y tienes los principios first mobile, esta diseñado especificamente para usuarios que tienen un alto uso de redes sociales y apps, por medio de un smartphone. Pero no descartamos el uso de nuestra red social por medio de un ordenador.

Nuestra red social ofrece las siguientes funciones:

  - Al apretar el botón de publicar, valida que exista contenido en el input.
  - Publica post sin un limite restringido.
  - El usuario puede dar "Bee" (like) a una publicación.
  - El usuario puede eliminar un post/publicación específico.
  - Al darle click en el botón *editar*, el usuario puede cambiar el texto que contiene la publicación..
  - Nuestra interfaz permite editar al usuario sus propios post y **NO** los post de los demás usuarios.
  - Al darle `guardar` debe regresaa de vuelta a la forma que tenia antes la publicación
    a un texto normal pero con la información editada.
  - Al recargar la página permite poder ver los textos editados y publicaciones
    anteriores (persistencia).


#### Otras consideraciones

  - La aplicación **NO** permite hacer publicaciones vacías de ningún tipo.
  - El usuario puede agregar, editar y eliminar contenido de la red
    social.
  - Al editar contenido, el contenido editado se verá automáticamente,
    inmediatamente después de guardar.
  - Al recargar la página se deben poder ver los contenidos editados.


### Implementación y documentacíon.

  - Materialize V1.0.0-rc.2: Uso para estructura en HTML y estilos para vista de autentificación, botones, menú     desplegable y hamburguesa, para generar el Templete String de los cards y sus estilos, para el HTML de la lista de alumnas y su estilo, además para generar los modales y su estilo.

  - Canva: Herramienta de diseño gráfico, montada como sitio web con la cual se diseña la composición de imágenes que se usa para la generación de los sketches de mediana y alta fidelidad.

  - Mockflow: Herramienta para diseñadores web y desarrolladores que permite crear wiframes en la nube, con la cual se diseño el prototipo de alta fidelidad.

  - Firebase: una plataforma para el desarrollo de aplicaciones web y aplicaciones móviles desarrollada, con la cual se realizo el LogIn, el almacenamiento de post y usuarios.

  - Cloud firestore: base de datos insignia de Firebase para la programación de apps para dispositivos móviles.


### Organización y colaboradoras.

* Gloria Rivera

* Aura Melisa Bernardino

* Nayely Estefania Molina 



### UX - BeeMom

Se presenta el benchmark principal de redes sociales en el aparatado de **General**, con el cual nos comparamos con las redes sociales principales, y las cuales podrian presentar su contenido de una forma similar a la nuestra.
Se hace un benchmark de facebook, Pinterest, Intagram y Snapchat, con el cúal se decide el inicio de sesión con colores básicos.

* Hacer un _benchamark_ de las principales redes sociales.
* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un  prototipo de alta fidelidad.
* Testear el prototipo con usuarios.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de testing con el producto en HTML.

### Entregables

#### 1) Definición del producto

En el `README.md` cómo conociste el mercado de las redes sociales, cómo
descubriste las necesidades de los usuarios, cómo llegaste  la definición final
de tu producto. Es importante que detalles:

* Cuáles son los elementos básicos que tiene una red social
* Quiénes son los principales usuarios de producto
* Qué problema resuelve el producto para estos usuarios
* Cuáles son los objetivos de estos usuarios en relación con el producto
* Cuáles son las principales funcionalidades del producto y cuál es su prioridad
* Cómo verificaste que el producto les está resolviendo sus problemas
* Cómo te asegurarás que estos usuarios usen este producto

Para poder llegar a estas definiciones te recomendamos ver: benchmarks,
entrevistas con usuarios y tests de usabilidad.


## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Definición del producto.
* [ ] Benchamark de las principales redes sociales.
* [ ] Resumen de entrevistas con usuarios.
* [ ] Link/screenshots prototipo de alta fidelidad.
* [ ] Conclusiones de pruebas del prototipo con usuarios.
* [ ] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Tests unitarios cubren un mínimo del 70% de statements, functions, lines,
  y branches.
* [ ] Pasa tests (y linters) (`yarn test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_.
* [ ] Permite publicar nuevos posts.
* [ ] Permite eliminar posts.
* [ ] Pide confirmación antes de borrar posts.
* [ ] Permite editar posts (in place).
* [ ] Permite filtrar posts por público/amigos.
* [ ] Permite marcar posts como _gustados_ (like).
