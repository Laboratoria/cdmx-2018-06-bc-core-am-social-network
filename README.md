# SHERO
_Un proyecto creado por **Lex Hernández** y **Andrea García**_

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo, en una ronda de financiamiento con inversionistas, se presentó una red social para químicos en la que los usuarios podían publicar artículos sobre sus investigaciones, comentar en los artículos de sus colegas, y filtrar artículos de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo más comentado.

## Introducción

Una emprendedora nos ha encargado crear una red social. No nos da mucho detalle sobre qué tipo de red social quiere, sólo nos dice que creemos la mejor que podamos, y que luego la convenzamos de lanzarla al mercado. Nos da ciertos temas en los que le gustaría invertir:

* Alimentación
* _**Feminismo**_
* Educación
* Salud
* Energías Renovables

Nosotras decidimos abordar el tema de **Feminismo**, ya que consideramos que este sector es muy atacado en redes sociales existentes (Facebook, Twitter, etc.) al simplemente dar su opinión, o al buscar ayuda médica, psicológica o legal.

Sólo en México, hasta mayo del 2018, [han sido asesinadas 1,165 mujeres](https://www.google.com/maps/d/viewer?mid=174IjBzP-fl_6wpRHg5pkGSj2egE&ll=22.9523095953723%2C-101.4161826021728&z=5). Es una cifra fuerte, habla de una ola de violencia contra la mujer,  y claramente ninguna de nosotras está exenta de sufrir un ataque violento, desde un inapropiado "cumplido", tocamientos en el transporte público, hasta violaciones y asesinatos.

Existen diversas redes de apoyo dentro de las ya conocidas plataformas de redes sociales, lamentablemente el machismo que se tiene muy arraigado en la cultura mexicana es un obstáculo para poder dar y recibir ayuda de manera oportuna. Existen grupos cerrados a _únicamente mujeres_, pero incluso en estos espacios donde debería existir "seguridad" se han infiltrado hombres (con perfiles falsos, haciéndose pasar por mujeres) para agredir de diversas formas a las compañeras.

Nuestra red social (**SHEro**) propone a esta comunidad un espacio libre de violencia, donde pueden estar seguras que nadie va a agredirlas por pedir ayuda, o dar su opinión.

Adicional a esto, tendrán una sección de compra/venta para poder ofrecer o conseguir productos dentro de la misma comunidad, apoyando así a sus compañeras. 

## Ideación del producto

### Eleccion de la red social base

Este proyecto esta basado en _Facebook_, ya que creemos que es la red social más común actualmente, entonces decidimos usarla como base para que así nuestras usuarias tengan un panorama más familiar al acceder a **SHEro**.

### ¿Por qué "SHEro"?

La elección del nombre esta basada en la palabra _Hero_ (héroe), en inglés por los alcances que se tienen en mente para este proyecto. Se modificó esta palabra por _Shero_, adicionando la _S_ al inicio por la pronunciación de "ella" en inglés (_she_). La estilización de las tres primeras letras mayúsculas se para resaltar a nuestras usuarias: ellas.

Se decidió _SHEro_ y no _SHEroes_ porque ésta última palabra, ademas de más larga, no terminó de convencernos a nosotras, ni a las encuestadas.

### ¿Por qué elegir SHEro por encima de otras redes sociales?

**SHEro** está pensado para la comunidad feminista. Las encuestas realizadas revelaron que la mayoría no se sienten seguras expresando sus opiniones en otras plataformas, e incluso han recibido amenazas y agresiones. Es por eso que creemos ser la aternativa ideal a nuestra competencia, en relacion a la comunidad en la cual queremos generar la satisfacción de no volver a ser víctimas de agresión.

### ¿Qué puedes hacer en SHEro? Historia de usuaria

Como lo hemos mencionado antes, **SHEro** es una plataforma orientada a mujeres, feministas, que busquen apoyar, compar, vender o debatir acerca de diversos temas con otras mujeres con la misma ideología político-social. A continuación, te presentaremos la funcionalidad de **SHEro** a través de una dinámica llamada "_Historias de usuario_":

* Yo, como una **feminista**, puedo registrarme en una nueva red social para conectarme con otras personas con ideales como yo.
  - Yo, como usuaria registrada en esta red social puedo loguearme con mi correo para empezar a usar esta red.
  - ~~Yo, como usuaria registrada en esta red social, puedo poder loguearme con mi cuenta facebook o google para empezar a usar esta red.~~

* Yo, como usuaria logueada en esta red social, puedo postear un mensaje en mi muro para que otras personas puedan ver lo que pienso.

* Yo, como usuaria logueada puedo ver los posts publicos de otras usuarias aunque no sean mis amigas.

* ~~Yo, como usuaria logueada puedo cerrar mi sesión cuando yo lo decida.~~

## Uso e instalación

### Usuario habitual

Para poder usar **SHEro** únicamente requieres de un _dispositivo_ (computadora, smartphone, tablet) con _conexión a internet_, y un _navegador web_ (Chrome, Firefox, Internet Explorer, etc.).

Debes acceder a esta [liga](https://lexhernandez.github.io/cdmx-2018-06-bc-core-am-social-network/src/) y _registrarte_ con cualquier método (correo electrónico, Facebook o Google+). A partir de ahora, eres miembro de la comunidad **SHEro**,  ya puedes publicar contenido, usar la red de apoyo, acceder a los productos de compra/venta y ver tu perfil.

### Desarrollador

Si quieres contribuir a la mejora de **SHEro**, es necesario que cumplas ciertos requerimientos:

* Tener un editor de texto, como [Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/), o el de tu preferencia.
* Para ejecutar los comandos a continuación necesitarás una _UNIX Shell_, que es un programa que interpreta líneas de comando (command-line interpreter) así como tener [git](https://git-scm.com/book/es/v1/Empezando-Instalando-Git) instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente _git_ también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win).
* Tener instalado [Node.js](https://nodejs.org/en/) para poder ejecutar las pruebas unitarias.

Teniendo listo lo anterior, debes seguir estos pasos:

* Primero, debes _forkear_ este repositorio.
* _Clona_ **tu** repositorio a tu computadora (copia local).
* Instala las dependencias del proyecto con el comando _npm install_ en tu terminal. 
* Si todo ha ido bien, deberías poder ejecutar las pruebas unitarias (unit tests) con el comando _npm test_, también desde la terminal. Esto debe hacerse **DENTRO** de la carpeta donde está tu clon del proyecto.
* ¡Listo! Ya puedes empezar a codear.

Cuando tengas una propuesta de mejora a nuestro producto, te agradeceríamos mucho que nos hagas un _pull request_ contándonos detalladamente en qué consiste tu propuesta.

### Contáctanos

* [Lex Hernández](https://facebook.com/TheHackerCat)

* [Andrea García](https://facebook.com/AnndyGrs)
