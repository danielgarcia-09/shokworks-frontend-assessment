## Módulo de Carrusel de Noticias - Descripción del Proyecto

Este repositorio contiene un módulo de una landing page desarrollado en **React con Vite** para la sección “What is the Specialty of us”. El objetivo es mostrar un carrusel de tarjetas de noticias dinámicas, consumiendo datos de una API externa, mientras se sigue fielmente un diseño de Adobe XD.

-----

### 🚀 Características Principales

  * **Diseño Fiel**: La interfaz de usuario sigue estrictamente las especificaciones de tipografía, tamaños, colores y espaciado del diseño original.
  * **Carrusel Dinámico**: Las tarjetas de noticias se presentan en un carrusel funcional y navegable que soporta la navegación con los botones de control.
  * **Consumo de API**: Los datos (imágenes, títulos y descripciones) se obtienen directamente de la **API gratuita de NewsAPI**.
  * **Estilos Puros**: Todos los estilos se crearon con **CSS puro**, sin el uso de frameworks, garantizando un control total sobre el diseño y las transiciones.
  * **Responsividad**: Se utilizaron **media queries** para asegurar que el módulo se adapte y se vea perfectamente en cualquier dispositivo, desde móviles hasta escritorios.

-----

### 🛠️ Tecnologías Utilizadas

  * **React**: Biblioteca principal de JavaScript para construir la interfaz de usuario.
  * **Vite**: Herramienta de construcción rápida para el entorno de desarrollo.
  * **CSS Puro**: Para la maquetación y los estilos, incluyendo el manejo de animaciones y transiciones.
  * **NewsAPI**: API utilizada para obtener los datos de las noticias.

-----

### 📦 Estructura del Proyecto

El proyecto sigue una estructura de carpetas clara y organizada para facilitar la navegación y el mantenimiento del código.

```
/proyecto
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── arrow-left.png
│   │   │   ├── arrow-right.png
│   │   └── ...
│   ├── vite.svg
│   └── ...
├── src/
│   ├── features/
│   │   ├── Carousel/
│   │   │   ├── components/
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── carousel-item.tsx
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   └── styles.css
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.ts
```

-----

### ⚙️ Instrucciones de Instalación y Ejecución Local

Para ejecutar este proyecto en tu entorno local con Vite, sigue estos sencillos pasos.

1.  **Clona el repositorio**:

    ```bash
    git clone [enlace-del-repositorio]
    cd [nombre-del-repositorio]
    ```

2.  **Instala las dependencias**:

    ```bash
    npm install
    ```

3.  **Configura tu API Key de NewsAPI**:

      * Crea una cuenta gratuita en [newsapi.org](https://newsapi.org/).
      * Una vez que obtengas tu clave, crea un archivo `.env` en la raíz del proyecto.
      * Agrega tu clave de la siguiente manera, utilizando el prefijo `VITE_`:
        ```env
        VITE_NEWS_API_KEY=tu_clave_aqui
        ```

4.  **Inicia el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

    El módulo estará disponible en tu navegador en `http://localhost:5173` (o el puerto que te indique Vite).

-----

### EJEMPLO DE USO
https://drive.google.com/file/d/13LsImtcKhVNbLEEhOyaHxnZQL9sbsbgk/view?usp=sharing