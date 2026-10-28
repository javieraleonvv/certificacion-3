# Hug Express

Hug Express es una plataforma web interactiva diseñada para conectar a las personas a través del envío de abrazos virtuales a amigos y familiares, acortando distancias mediante una interfaz sencilla, accesible e interactiva.

---

## Autora

* **Javiera** - Desarrollo de HTML, CSS y JavaScript

---

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica del sitio web (navegación, tarjetas de perfiles y secciones laterales).
* **CSS3:** Estilizado visual modular y responsive (`static/css/style.css`), incluyendo variables CSS, Grid Layout, Flexbox y media queries adaptadas a distintos dispositivos.
* **JavaScript (Vanilla JS):** Lógica e interacción dinámicas (`static/js/script.js`), manipulando el DOM para contadores en tiempo real e interacciones con el usuario.

---

## Funcionalidades Principales

* **Información Dinámica:** Alerta informativa interactiva vinculada al enlace "¿Cómo funciona?".
* **Contador de Abrazos en Tiempo Real:** Incremento dinámico de abrazos para cada perfil mediante la lectura de atributos `data-id`.
* **Tarjetas de Amigos Adaptables:** Perfiles de personajes literarios con sus citas, fecha de inicio de amistad e interacción con botones personalizados.
* **Diseño Responsivo:** Maquetación CSS adaptada para pantallas móviles, tabletas y computadoras de escritorio.
* **Gestión de Consentimiento de Cookies:** Eliminación dinámica de la sección de cookies del DOM al hacer clic en "Aceptar".

---

## Estructura del Proyecto

```text
├── index.html
└── static/
    ├── css/
    │   └── style.css
    ├── images/
    │   ├── home.png
    │   ├── logo.png
    │   ├── horacio.png
    │   ├── aureliano.png
    │   └── ricardo.png
    └── js/
        └── script.js