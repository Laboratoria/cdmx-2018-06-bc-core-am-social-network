# *Social Media*

##  __DiabeTips__

### Documentación y desarrollo
________________________________________

*1. Definición de objetivos y estrategia*

En esta sección se definirán los resultados que busca el cliente, se propondrán las diferentes opciones que podrían ayudar a conseguir los objetivos y se buscará llegar a un acuerdo con el cliente, para ello es importante definir estrategias que definirán si se desarrollará un blog, sitio brochure, si interactúa con el usuario, etc.

* Objetivos del cliente: El cliente busca proyectos de emprendimiento para invertir que abarque cualquiera de los siguientes rubros:

  * Alimentación
  * Feminismo
  * Educación
  * Salud
  * Energías Renovables

El cliente busca una opción nueva, útil y que sea redituable y escalable. Es por eso, que se ofrece una aplicación para mujeres diabéticas (sector poblacional amplio y no atendido en México) con aras de poder monetizar vía cobro a los usuarios al compartir su perfil con su médico, por medio de alianzas con grupos farmacéuticos a los cuales se cobrará por promocionar sus productos y con los cuales se harán alianzas para ofrecer premios por retos que se lancen a la red social. Atendiendo a la propuesta del cliente, se incluirán retos grupales para poder hacer los retos más atractivos.

Como propuesta a largo plazo, se busca ofrecer la data recolectada al gobierno (sector salud y económico) para que puedan tener métricas reales y actualizadas para poder tomar acciones reales y continuas en contra de la enfermedad.  

* Objetivo de usuario: Las usuarias busca una red social para personas diabéticas que la ayude a mejorar su calidad de vida. Quiere poder compartir sus síntomas y recibir recomendaciones sobre ellas. Busca compartir su perfil con su médico. Recibir y dar recomendaciones diversas sobre su enfermedad y compartir su día a día con la comunidad.

* Objetivos técnicos:

  * Aprender a usar y manipular Firebase: DataBase, Local Storage, Autentification, etc.
  * Perfeccionar uso de DOM.
  * Buen manejo de DATA.
  * Diseño Mobile First.
  * Persistencia de datos.
  * Uso de Frameworks de JS.
  * Múltiples vistas.
  * Creación de test.
  * User Research: Benchmark, entrevistas, prototipos de vistas y testing con usuarios.
  * Evocar los esfuerzos a aportar valor para el usuario.

* 2. Desarrollo de contenidos*

El apartado debe definir el contenido del sitio, listar las páginas que es relevante tener, detallando información sobre su contenido, además es necesario redactar los textos para mostrarse.

*3. Propuesta de diseño*

USER RESEARCH: Se realizó un estudio demográfico sobre la cantidad de diabéticos en México, se determinaron algunas causas que justifican cifras tan alarmantes, y el por qué las medidas que toma el sector salud no están funcionando de la manera más eficiente posible. Además se incluyen datos específicos sobre la diabetes en mujeres.

Para consultar el documento completo, diríjase a:

see [Datos Demográficos] (https://docs.google.com/document/d/13jH3NyYmgFADmTpGEDxUVN7F2JLWEfQiwQ43yqM5xqw/edit#heading=h.t5gquk95zrh2)

Además, se realizó un benchmark sobre la competencia, y se pudo llegar a la conclusión que, en primer lugar, no existen aplicaciones evocadas a la salud de la mujer con diabetes, aun y pese a que es la principal causa de muerte en mujeres en México.

También se puede aseverar, que son nulas las posibilidades de encontrar una comunidad al unirse a los servicios de alguna aplicación existente. Las aplicaciones no cuentan con información o consejos de cuidad, se limitan al monitoreo de los pacientes, siendo pocas las aplicaciones que te permiten compartirlo con tu médico. El bencmark también dio pie a evocar los esfuerzos del equipo a trabajar en el Mobile First, ya que ninguna aplicación está diseñada para desktop.

Es posible ver en benchmark en la siguiente liga.

See [Benchmark]( https://docs.google.com/spreadsheets/d/1DH9sAcvOOLxwX8eb6oA_ime4SqQFxYf9KimJ_3eOV6E/edit#gid=1416652031)


BOCETOS: Es necesario presentar bocetos de la estructura de cada plantilla del sitio, realizar el diseño de mediana y alta fidelidad y finalmente presentar el diseño de la plataforma. Es propio presentar y testear las páginas, se sugiere el uso de invision para dar tour por cada pantalla en futuros proyectos.

    * Diseño de baja fidelidad  
    * Diseño de mediana fidelidad
    * Diseño de alta fidelidad
    * Diseño del sitio final

*4. Desarrollo y maquetación*

El desarrollo y maquetación del proyecto se realizó utilizando pequeños detalles de Bootstrap en su versión 4.0, la mayor parte del diseño se maqueto y desarrollo en Materialize versión 1.0.0-rc.2 por medio de su CDN, además se hace uso de estilos sencillos en CSS y se usan propiedades de la funcionalidad display (none y visibility) para cambiar de una vista a la otra.

*5. Dar revisión y capacitación*

Se da una asesoría al cliente sobre el uso y administración del sitio.

Se da explicación de uso de la página y donde se explican los detalles más importantes de la implementación. Se otorga un periodo de un mes al cliente para encontrar posibles fallas o dudas sobre el sistema, después de este periodo se podría requerir alguna gratificación por asesorías.

*6. Publicación en el servidor o URL definitiva*

Se entrega una liga en GitHub Pages y la liga del repositorio:

see [Repositorio] (https://github.com/SakuraBravo/cdmx-2018-06-bc-core-am-social-network)

see [GitHub Pages] (https://sakurabravo.github.io/cdmx-2018-06-bc-core-am-social-network/src/input.html)

*7. Documentación*

  * Tecnologías

Descripción de tecnologías, Frameworks, compiladores, gestores de tareas, librerías, su versión y cómo se usa.

   * Bootstrap V4.0: Uso por medio de CDN, su liga se incluye en la página de inicio: index.html en la línea. Su uso es para tener acceso a:.

   * Materialize V1.0.0-rc.2: Uso para estructura en HTML y estilos para vista de autentificación, botones, menú desplegable y hamburguesa, para generar el Templete String de los cards y sus estilos, para el HTML de la lista de alumnas y su estilo, además para generar los modales y su estilo.

   * Canva: Herramienta de diseño gráfico, montada como sitio web con la cual se diseña la composición de imágenes que se usa para la generación de los sketches de mediana y alta fidelidad.

   * Fetch: Es un objeto de JavaScript que proporciona un método para obtener la información de una URL, en el caso expuesto se usa para tener acceso a un objeto dentro de un archivo JSON que ha sido montado en un servidor web como API.

   * API: Application Programming Interface, es un conjunto de reglas –código- y especificaciones que las aplicaciones pueden seguir para comunicarse entre ellas.En este caso se usa la API de autenticación para Google, Facebook y de Firebase.

   * Unit Test con Mocha: Herramienta para elaborar test unitarios en JavaScript, que destaca por su sencillez de uso, por su flexibilidad y por ser adaptable a nuevas librerías que incrementan su poder, es parte de Node.js. En el proyecto se usan los test unitarios como medio de comprobar que la calidad de ejecución de las funciones es buena, que cumple con los mínimos requerimientos y que devuelven solo la información necesaria.

   * Firebase: Según su propia definición, Firebase es un conjunto de herramientas orientadas a la creación de aplicaciones de alta calidad, al crecimiento de los usuarios y a ganar más dinero.

La plataforma ofrece una suite de diferentes aplicaciones que nos harán más fácil el desarrollo de las aplicaciones. Ofrece: Base de datos en tiempo real (datos en formato JSON), autenticación (gestión de usuarios y su inicio de sesión), almacenamiento (estático y dinámico), cloud Functions (transforma el código del backend en piezas del mismo –funciones- creadas en NodeJS, además genera un URL que ejecuta el código pertinente). Laboratrio de Test para Android, Informe de fallos, Monitoreo de rendimiento, etc.   

   * Fraimer:

   * Organización

Boilerplate - Estructura de los ficheros.

8.	./
9.	├── .editorconfig
10.	├── .eslintrc
11.	├── .gitignore
12.	├── README.md

   * Layout
Disposición general de los bloques del sitio, sus módulos y los handles o hooks para llamarlos (rutas).

   * Autentificación: Basta con ir a la página del sitio para tener acceso a la vista de autentificación.

    * Home:
    * Perfil del usuario:
    * Comentarios:
    * Módulos

Nombre de cada módulo, sus parámetros, peculiaridades, de dónde obtiene los datos y como se transforman.

•	JavaScript

Disposición de los ficheros, alcance, uso y herramientas de gestión, listar librerías y sus extensiones.

•	CSS

•	HTML

Ficheros -explicación de nombramiento

•	Getting started

Explicar y comentar los procesos, comandos y procedimientos para poner el proyecto en marcha, compilar, gestionar dependencias, etc.

•	Como usuario: Acceder a la URL de GitHub

Pages, autentificar usuario, recorrer el sitio para encontrar la información necesaria, el flujo de trabajo obliga al usuario a ir de arriba hacia abajo y de izquierda a derecha accediendo a información cada vez más profunda.

•	Como desarrollador y/o UXD:

Acceder a la liga del repositorio, forkear y clonar el repositorio, abrir el repositorio local haciendo uso de un editor (VisualStudioCode, Atom, etc.) y realizar las modificaciones necesarias en los archivos tomando como base la explicación sobre ficheros, archivos y funciones especificados antes, guardar los cambios y visualizarlos desde la liga local ejecutando los archivos con extensión HTML desde la carpeta del usuario, ver los cambios ejecutados y realizar debugging o inspección de la ejecución de los programas gracias a los elementos de Google/ Firefox for Developments a los que se tendrá acceso desde las herramientas de “inspeccionar” del sitio.

Por último, subir cambios desde Git (gitbash) al repositorio y realizar un pull request desde GitHub, esperar a que el dueño del repositorio master apruebe o rechace el commit.

*8. Organización y distribución de tareas*

Issues: Ver issues en: see [Issues del equipo] (https://github.com/SakuraBravo/cdmx-2018-06-bc-core-am-social-network/issues)

Acuerdos de trabajo:

•	Miembro Nallely Bravo (NB) se especializa en UX.

•	Miembro Yocelin Garcia (YG) se especializa en Firebase.

•	Miembro Zareth Abarca (ZA) se especializa en CSS y Responsive.

•	Todos los miembros se comunican avances día a día y están al tanto de los requerimientos de su equipo.

•	Todos los miembros trabajan y están al tanto en todas las áreas y se encargan de que el resto del equipo aprenda las cosas que a cada miembro le son más fáciles.

•	Si es necesario suspenden las labores menos importantes para poder trabajar en las labores prioritarias de manera conjunta.

•	Los miembros están al tanto de los cambios del equipo y son responsables del GitHub colaborativo de actualizar y subir cambios usando la técnica de ramas.

•	Los Commits que se realizan en el espacio de Laboratoria se realizan desde la rama master tras hacer Peer Programming desde la PC que tiene la rama master (SakuraBravo).

•	Todos los miembros hacen UX Research de la siguiente manera:

  * Benchmark: Zareth Abarca

  * Análisis argumentativo de la elección de la red social (datos duros): Yocelin García

  * Target, argumentación del proyecto (negocio y usuario -> Brief): Nallely Bravo

  * Historias de usuario: Equipo.

  * Aplicación de encuestas de expertos:

    * Diseño de protocolo: Nallely Bravo.

    * Aplicación: Todas.

  * Aplicación de encuestas de pacientes:

    * Diseño de protocolo: Yocelin Garcia.

    * Aplicación: Todas. Las encuestas a pacientes se realizan a: Familiares y conocidos del equipo, miembros de grupos de Slack de Laboratoria y tres comunidades de FaceBook de Diabéticos: “Desde mi Diabetes”, “Mi Dulce Caminar” y “La cocina de Lucy”

* Todos los miembros hacen funcionalidad de JS de la siguiente manera:
  * Primer Sprint:
   * Validacion del Login: Zareth Abarca.
   * Autenticacion con Firebase y/o LocalStorage: Yocelin Garcia.
   * Sección de comentarios con capacidad de publicar en ella: Nallely Bravo.
   * Primer comentario: Nallely Bravo.
   * Nombre de usuario en DOM dinámicamente: Yocelin Garcia.
   * Estructura y visualización del DOM: Zarth Abarca.
  * Segundo Sprint:
   * Login con google y/o facebook y/o twitter y/o github: YG
   * Validación post. NB
   * Crear sus propios test y pasarlos (mínimo 3 test con 2 puntos cada uno): NB
   * Muro/timeline de la red social (cumpir mínimo 8 tareas): ZA.
   * Que los mensajes del muro continúen después de recargar la página y se vean desde cualquier dispositivo en línea (persistencia): YG
   * Ver el perfil del usuario: ZA
   * LogOut: YG

*9. Fechas importantes*

__Demo Sprint 1__

Miércoles 18 de Julio.

Nivel Requerido:

1.	UX Sketching de diseño ideal, documentado en README.
 * Mobile first + desktop
 * Benchmark
 * Análisis argumentativo de la elección de la red social.
 * Target, argumentación del proyecto (negocio y usuario)
 * Historias de usuario.
2.	Validación del Login
3.	Autenticación con Firebase y/o LocalStorage.
4.	Sección de comentarios con capacidad de publicar en ella.
5.	Lograr mi primer comentario.
6.	Hacker Edition: Lograr que se pinte en el muro el nombre del usuario que se registró (dinámicamente).
Nivel Alcanzado:
1.	UX Research Completo
2.	Validación de Login con Correo y contraseña.
3.	Hacer más de un comentario (sin persistencia en la base de datos).
4.	Nombre de usuario en DOM.
5.	Botón LogOut.
6.	Liga de GitHub Pages con avances presentada.

__Demo Sprint 2__

Miércoles 25 de julio

Nivel Requerido

1.	UX Sketching de diseño ideal, documentado en README.
 * Mobile first + desktop
 * Benchmark
 * Historias de usuario.
2.	Login con google y/o facebook y/o twitter y/o github.
3.	Validación post.
4.	Crear sus propios test y pasarlos (mínimo 3 test con 2 puntos cada uno)
5.	Muro/timeline de la red social (cumpir mínimo 8 tareas)
6.	Que los mensajes del muro continúen después de recargar la página y se vean desde cualquier dispositivo en línea (persistencia).
7.	Ver el perfil del usuario.
8.	Entrega de proyecto publicado en Github pages u otro.
9.	Hacker Edition: Lograr el botón funcional de logout.

Nivel alcanzado

__Demo Sprint 3__

Miércoles 3 de Agosto

Nivel esperado

Nivel Alcanzado

*10. Equipo y contacto:*

•	Nallely Bravo Rodríguez

Sus capacidades como UX Designer destacan, además tiene excelentes capacidades para programar en CSS, HTML y Javascript. Es capaz de usar Frameworks de CSS tales como: Bootstrap, hace uso de plataformas de maquetación tales como: Framer. Buen uso de GitHub colaborativo. Sus habilidades de UX Research son de reconocerse. Buen uso de Firebase.

Contacto de colaboradoras:

* Slack: Sakura Bravo.
 * see [GitHub] (https://github.com/SakuraBravo)
 * FaceBook: @Sakura Bravo
 * Gmail: sakura.bravo@gmail.com

•	Yocelin García

Habilidad de UX Research, además tiene excelentes capacidades para programar en CSS, HTML y JavaScript. Hace uso de GitHub colaborativo y presenta buena lógica de uso de Firebase.

Contacto:

 * Slack: YOCELIN GARCIA ROMERO
 * see [GitHub] (https://github.com/YocelinGR)
 * FaceBook: @Yocelin Garcia Romero
 * Correo: garcia_romero.y@hotmail.com

•	Zareth Abarca

Habilidad de UX Designer, además tiene excelentes capacidades para programar en CSS, HTML y JavaScript. Hace uso de GitHub colaborativo y presenta buena lógica de uso de Firebase. Hace buen uso de frameworks de CSS como Boostrap. Buena habilidad enla búsqueda y aplicación de datos.

Contacto:

* Slack: zareth
* see [GitHub] (https://github.com/zabarca)
* FaceBook: @
* Correo: zarethstark@gmail.com
