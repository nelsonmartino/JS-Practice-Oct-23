<div style="text-align:center">
    <img width="260" height="100" src="https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png"/>
</div>

<h1 align="center">
💪 TIP JSON to Form 💪
</h1>

## **🔎 Consigna**

- En esta TIP debes realizar una app en Next, las configuraciones que ejecutes
  quedan a libre eleccion ( Typescript, ESlint, tailwind, etc ).
- Debes mapear un JSON, si revisas en esta carpeta encontraras dicho JSON como
  data.json.
- La aplicacion debe leer ese JSON y generar automaticamente un formulario al
  estilo google Forms.
- La aplicacion debe tener minimo 2 rutas, una en la que se renderice el
  formulario y otra ruta en la que se van a poder renderizar todas las
  respuestas que se han ido registrando.
- Para esto, deberas vincular una base de datos en la nube, te recomendamos
  Firebase, aunque puedes usar Amazon cloud tambien.
- Una vez se complete el formulario, si todo salio de manera exitosa, deben
  limpiarse los campos, renderizar un modal con el mensaje de 'Data sent
  successfully' mas un boton de redireccion a la ruta donde se renderizan los
  resultados del formulario, actualizados en ese momento.

## **📝 Instrucciones para utilizar Firebase**

1. Si no tienes cuenta en _firebase console_, registrate
   [Firebase Console](https://console.firebase.google.com/).
2. Crea un proyecto en el panel de Firebase.
3. Una vez creado, vas a estar en el overview del proyecto, donde veras algunas
   fetures.
4. Te sugerimos utilizar **Firestore**, que brinda una base de datos agil y en
   la nube.
5. Vamos a describirte el paso a paso a continuacion, sin embargo, te dejamos la
   documentacion para que ahondes mas al respecto:
   [Primeros pasos con Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart?hl=es-419).
6. Una vez en _Cloud Firestore_, da click en _create Database_ en la parte
   superior derecha.
7. Te saltara un letrero de configuracion, selecciona: _start in production
   mode_.
8. Luego, selecciona _nam5 (United States)_.
9. Perfecto! Ya tienes una base de datos en Firebase!.
10. Ahora, en la terminal de windows (power shell) escribe
    `npm install -g firebase-tools`.
11. Luego ejecuta desde la terminar `firebase login`. Esto abrira el navegador.
12. Ingresa las credenciales de firebase para el login.
13. Excelente! Crea una carpeta e inicializa un proyecto en Next.
14. Para esto, ejecuta el comando `npx create-next-app 'my-app'`, ( las
    configuraciones del rpoyecto son a tu elección ).
15. En el directorio de tu proyecto, instala Firebase: `npm install firebase`.
16. Vamos a configurar Firestore en nuestra app.
17. Para esto, creamos un archivo llamado firebaseConfig.js:
18. De nuevo, te vamos a guiar paso a paso, pero si gustas explorar un poco mas,
    aca te dejamos la documentacion oficial:
    [Agrega Firebase al proyecto de JavaScript](https://firebase.google.com/docs/web/setup?hl=es-419).
19. Te mostraremos el siguiente snippet para que te hagas una idea de lo que
    debe contener:

```javascript
// firebaseConfig.js
// Importamos initializeApp de firebase
import { initializeApp } from "firebase/app";

// Configuramos las credenciales de Firebase
// Esto lo haras accediendo a la base de datos recien creada en firebase, ya lo explicaremos mas adelante

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // Si habilitaste Google Analytics en tu proyecto de Firebase, el objeto de configuración contiene el campo measurementId
  measurementId: "G-MEASUREMENT_ID",
};

// Creamos la instancia
const app = initializeApp(firebaseConfig);
```

27. Para extraer el objeto firebaseConfig, ve a _Firebase_.
28. Ingresa a las configuraciones de tu proyecto y en la seccion _General_,
    encontraras una seccion denominada **'Mis apps'**.
29. Como vamos a vincular un proyecto web, selecciona el simbolo de </>.
30. Ingresa un nombre para tu proyecto, selecciona configurar Hosting y dale
    click en registrar app.
31. Recien ahi es que te saldran las configuraciones que necesitas pegar en el
    objeto firebaseConfig de tu proyecto.
32. Si sigues las instrucciones, veras que esos comandos ya son familiares, y
    si, en efecto, ya estamos logueados en firebase, ahora nos resta lo demas:
33. En la terminal del proyecto, escribe `firebase init` para inicializar el
    proyecto.
34. Escribe Y + Enter para acceder a las configuraciones.
35. Con las teclas de arriba y abajo, puedes desplazarte para buscar Firestore,
    una vez alli, oprimes espacio para seleccionar, luego Enter.
36. Te desplazas con las flechas hasta `Use an existing project`, luego oprime
    Enter.
37. Automáticamente buscara entre los proyectos existentes vinculados a tu
    cuenta, selecciona el que creaste para esta app y da Enter
38. Te saldra _"What file should be used for Firestore Rules?"_ a lo que vas a
    dar Enter para que seleccione por defecto las reglas de Firestore.
39. Luego te saldra _"What file should be used for Firestore indexes?"_ a lo que
    das Enter nuevamente.
40. Perfecto! Ahora escribimos `firebase deploy` para levantar nuestro proyecto.
41. Esperamos a que nos devuelva la url en la terminal y dando ctrl + click,
    podemos acceder a ella
42. Genial! Terminaste de vincular Firebase!

¡Listo! Ahora sin mas, utiliza Next, DOM y todas las herramientas que creas
necesarias para solucionar la consigna. 😎

¡¡¡Muchos éxitos!!!✨🚀
