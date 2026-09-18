# 🎮 Nairoxstoreff - Tienda Gamer Free Fire

Aplicación web desarrollada en **Angular** con diseño moderno inspirada en **EuphoriaStore**, optimizada para la venta y recarga de cuentas y diamantes de **Free Fire**.

![Nairoxstoreff Preview](https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Características Principales

- 🎨 **Diseño Gamer Dark & Glassmorphism**:
  - Paleta oscura de alto impacto (`#030712`, `#0c1424`) con bordes neón cian y magenta.
  - Logotipo principal **NAIROX STORE FF** con efectos de brillo y partículas.
  - 4 Tarjetas de confianza en rejilla 2x2:
    - 💎 *Cuentas premium verificadas*
    - ⚡ *Entrega inmediata (1-3 min)*
    - 🛡️ *Cambio de datos al momento*
    - 📱 *Atención directa por WhatsApp*
  - Contador central dinámico: **527+ Cuentas Vendidas**.
  - Barra social con enlaces directos a **TikTok**, **Instagram** y badge de estado **🟢 En línea**.

- 🧭 **Navegación por Pestañas Interactivas (Pill Tabs)**:
  1. 🔥 **INFORMACIÓN**: Bienvenida a Nairoxstoreff, guía de compra en 3 pasos, métodos de pago aceptados (*Yape, Plin, Nequi, Daviplata, Mercado Pago, Binance USDT, PayPal, OXXO*), garantía anti-recuperación y acordeón FAQ interactivo.
  2. 📁 **DISPONIBLES**: Catálogo completo de cuentas Free Fire (Veteranas, Sakura S1, Hip Hop, Criminales, Armas Evolutivas Max) con buscador en tiempo real, filtros por región (*EE.UU., Sudamérica, Europa*) y visor lightbox de fotos.
  3. 💎 **DIAMANTES**: Sistema de recarga rápida por ID de jugador y paquetes de membresías con bono extra y checkout directo a WhatsApp.
  4. ⭐ **RESEÑAS**: Muro de testimonios de clientes con 5 estrellas, comprobantes de entrega y formulario interactivo para registrar nuevas opiniones.

- 🚀 **Herramientas y Widgets Flotantes**:
  - 🤖 **Chatbot Asistente Virtual**: Responde preguntas frecuentes al instante con botones rápidos.
  - 🎰 **Ruleta Gamer de Descuentos**: Con animación de giro y lanzamiento de confeti para ganar cupones promocionales.
  - 💬 **Botón de WhatsApp Flotante**: Enlace directo y dinámico con mensajes pre-redactados para cada cuenta o recarga seleccionada.
  - 🔔 **Notificaciones de Ventas en Vivo**: Toasts emergentes que muestran compras recientes para aumentar la confianza social.

---

## 🛠️ Tecnologías Utilizadas

- **Angular** (Standalone Components, Signals reactivos, nuevo Control Flow `@if`, `@for`, `@switch`)
- **Tailwind CSS** (Efectos de resplandor neón, temas oscuros y animaciones)
- **TypeScript**
- **Canvas-Confetti**

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Instalar dependencias** (si aún no lo has hecho):
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo local**:
   ```bash
   npm start
   # o bien:
   ng serve
   ```

3. **Abrir en el navegador**:
   Navega a [http://localhost:4200](http://localhost:4200) para ver la tienda en vivo.

4. **Generar compilación para producción**:
   ```bash
   npm run build
   ```
   Los archivos compilados listos para desplegar en Netlify, Vercel, Firebase o cualquier hosting se encontrarán en la carpeta `dist/nairoxstoreff/browser`.

---

## ⚙️ Personalización Rápida

Para cambiar el número de WhatsApp o los datos de redes sociales, edita el archivo:
📁 `src/app/services/store.service.ts`

```typescript
readonly storeName = 'Nairoxstoreff';
readonly whatsappNumber = '51999999999'; // Tu número de WhatsApp con código de país
readonly tiktokUrl = 'https://www.tiktok.com/@nairoxstoreff';
readonly instagramUrl = 'https://www.instagram.com/nairoxstoreff';
```

Para agregar o modificar cuentas del catálogo, edita:
📁 `src/app/data/accounts.data.ts`

Para ajustar precios o paquetes de diamantes, edita:
📁 `src/app/data/diamonds.data.ts`
