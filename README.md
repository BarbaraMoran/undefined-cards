## Team project. Undefined business card generator (JS, SASS, HTML, Scrum)

<a target="_blank" href="https://barbaramoran.github.io/undefined-cards/"><img src="https://i.ibb.co/XYD598d/undefined.jpg"/></a>

---

**Nombre del equipo - Undefined :**

Este es el proyecto del módulo 02 de Adalab. El proyecto consiste en el desarrollo de una aplicación web que nos permite crear una tarjeta de visita personalizada. En la página web podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información. El objetivo principal es mostrar las capacidades y habilidades de las integrantes del equipo, al mismo tiempo que poder usar para crear nuestras propias tarjetas de visita profesionales. Este producto ofrece una forma dinámica e interactiva de conocer nuestras capacidades como programadoras, y por tanto facilita la interacción entre recruiters y candidatas.

Demo Para ver el resultado del desarrollo de la página web puedes visitar el siguiente enlace: https://barbaramoran.github.io/undefined-cards/

**Tecnologías empleadas**

Nuestra página está maquetada en HTML5 y CSS3. Además, nos hemos servido del preprocesador SASS y de Gulp. Con la utilización de estas tecnologías hemos conseguido automatizar tareas, trabajar con un código más ordenado y limpio, a la vez que optimizado para que nuestra web cargue rápidamente. Con respecto al control de versiones, hemos creado diferentes ramas según la funcionalidad de cada una, solventando los conflictos con soltura.

El desarrollo del ejercicio se ha llevado a cabo utilizando el Starter Kit de Adalab, creado en node y gulp. Se trata de una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas. Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local, además de otras herramientas como Gulp, que nos ayuda en la automatización de tareas.

JavaScript (manipulación del DOM, eventos y manejo de estructuras de datos complejas), peticiones al servidor y almacenamiento de datos en local.

Para iniciarlo necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con el Starter Kit que incluye.
Este repo tiene incluído el Starter Kit creado en **node y gulp**. ¿Y qué es un Starter kit? Pues es una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas**.

Incluye un motor de plantillas HTML, el preprocesador SASS, un servidor local y muchas cosas más. El Kit nos ayuda a trabajar más cómodamente, nos automatiza tareas.

Hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto.
- La carpeta `src/`: son los ficheros de la página web, como HTML, CSS, JS...
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de `src/`, los procesa y los genera dentro de `public/` y `docs/`.

## Guía de inicio rápido

> **NOTA:** Instalar previamente [Node JS](https://nodejs.org/) para trabajar con este repo:

### Pasos a seguir para arrancar el proyecto desde tu ordenador:

1. No clonar este repo (porque no podrás añadir commits), descargarlo.
1. Crear un repo nuevo y añadir los archivos descargados.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que lo abras** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra la página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
  - Convierte los ficheros SASS en CSS.
  - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

### Pasos para publicar el proyecto en GitHub Pages:

Para generar la página para producción ejecuta el comando:

```bash
npm run docs
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.

```bash
git add -A
git commit -m "commit message"
git push
```

1. Entra en la pestaña `settings` de tu repo.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.

Además, los comandos:

```bash
npm run push-docs
```

o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón.

## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:

![Gulp flow](./gulp-flow.png)

## `gulpfile.js` y `config.json`

Nuestro **gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.

## Estructura de carpetas

La estructura de carpetas tiene esta pinta:

```
src
 ├
 ├─ images
 |
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |
 ├─ scss
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 |  └─ styles
 |
 └─ html
    └─ index
    └─ design-card
    └─ partials
```

## Funcionamiento de la web

Búsqueda Se escribe en el input vacío creado para la búsqueda y al hacer click con el ratón sobre Search, la aplicación se conectará al API abierto de TVMaze para búsqueda de series. Obtenemos como respuesta un listado de elementos filtrados según lo que hayamos escrito en el input.

Favoritos Una vez aparecen los resultados de búsqueda, podremos indicar cuáles son nuestras series favoritas. Para hacer una serie favorita hacemos click sobre ella. Esta serie seleccionada cambiará su color de fondo y, además, se añadirá al listado de la izquierda donde veremos todas nuestras series marcadas como favoritas.

Almacenamiento local Hay que almacenar el listado de favoritos en el localStorage, de esta forma, al recargar la página, el listado de favoritos se mantiene como estaba.

### Gracias por visitar nuestro proyecto, será genial recibir feedback para mejorarlo!
