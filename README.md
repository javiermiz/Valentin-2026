# 💖 Valentín 2026

Una aplicación web interactiva y romántica sencilla para pedirle a esa persona especial que sea tu Valentín.

## 🚀 Cómo empezar

1.  **Instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 🎨 Personalización

Todo el contenido de la aplicación está diseñado para ser fácilmente modificable sin necesidad de tocar el código complejo.

### 📝 Cambiar Textos

Todos los textos de la aplicación (saludos, razones, preguntas, textos del ticket, etc.) se encuentran en un solo archivo:

📍 `src/data/steps.js`

Simplemente abre este archivo y edita los textos dentro de las comillas.

**Ejemplo:**

```javascript
export const STEPS = [
  {
    type: "greeting",
    title: "Hola mi amor", // Cambia esto
    content: "Eres lo mejor que me ha pasado...", // Cambia esto
  },
  // ...
];
```

También puedes cambiar los textos de la interfaz (botones, ticket de cena, fechas) en la sección `UI_TEXTS` al final del mismo archivo.

### 📸 Cambiar Fotos

Las fotos se encuentran en la carpeta `public/images/` y siguen una secuencia numerada para facilitar su reemplazo.

Para cambiar una foto:

1.  Ten tu nueva foto lista (formato `.jpg` recomendado).
2.  Renómbrala para que coincida con la que quieres reemplazar (ej. `photo-1.jpg`, `photo-2.jpg`, etc.).
3.  Reemplaza el archivo existente en `public/images/` con tu nueva foto.

**Secuencia de fotos:**

- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`
- `photo-4.jpg`
- `photo-5.jpg`
- `photo-6.jpg`

Si necesitas agregar más fotos o cambiar los nombres, puedes hacerlo editando también el archivo `src/data/steps.js` en la sección de pasos tipo `photo`.

## 🛠️ Tecnologías

- React
- Vite
- Tailwind CSS
