# 📘 Guía del Proyecto - Relatos de Papel

> **Documento para presentación del equipo.** Usar para la reunión y el video explicativo.

---

## 🚀 Inicio Rápido

```bash
npm install    # Instalar dependencias
npm run dev    # Iniciar servidor de desarrollo
```

---

## 📂 Estructura del Proyecto

```
src/
├── assets/                 → Logo de la tienda
├── components/layout/      → Componentes de estructura (Header, Footer, etc.)
├── data/                   → Datos mock (30 libros)
├── features/               → Componentes por funcionalidad
│   ├── books/              → BookCard
│   ├── cart/               → CartItem, OrderSummary
│   └── checkout/           → PaymentMethod, CheckoutSummary
├── hooks/                  → Custom hooks (useCountdown)
├── pages/                  → Páginas de la aplicación
├── routes/                 → Configuración de rutas
└── store/                  → Estado global (Zustand)
```

---

## 🗺️ Rutas y Páginas

| Ruta                  | Página                | Descripción rápida                         |
| --------------------- | --------------------- | ------------------------------------------ |
| `/`                   | LandingPage           | Splash con countdown 5s → redirige a /home |
| `/home`               | HomePage              | Catálogo de libros + buscador              |
| `/book/:id`           | BookDetailPage        | Detalle del libro + añadir al carrito      |
| `/cart`               | CartPage              | Carrito con cantidad +/- y eliminar        |
| `/checkout`           | CheckoutPage          | Resumen + método de pago + confirmar       |
| `/order-confirmation` | OrderConfirmationPage | ¡Gracias por tu compra!                    |

---

## 📄 Detalle de Cada Página

### 1️⃣ LandingPage (`/`)

**Archivo:** `src/pages/LandingPage.jsx`

| Elemento           | Descripción                                                        |
| ------------------ | ------------------------------------------------------------------ |
| **Función**        | Pantalla de bienvenida con countdown                               |
| **Hooks usados**   | `useNavigate`, `useCountdown` (custom hook)                        |
| **Comportamiento** | Redirige a `/home` en 5 segundos o al hacer clic en "Entrar ahora" |

---

### 2️⃣ HomePage (`/home`)

**Archivo:** `src/pages/HomePage.jsx`

| Elemento           | Descripción                                            |
| ------------------ | ------------------------------------------------------ |
| **Función**        | Catálogo de libros con filtro de búsqueda              |
| **Hooks usados**   | `useSearchParams`                                      |
| **Componentes**    | `BookCard` (uno por cada libro)                        |
| **Comportamiento** | Filtra libros por título usando query param `?search=` |

---

### 3️⃣ BookDetailPage (`/book/:id`)

**Archivo:** `src/pages/BookDetailPage.jsx`

| Elemento           | Descripción                                              |
| ------------------ | -------------------------------------------------------- |
| **Función**        | Muestra detalles de un libro y permite añadir al carrito |
| **Hooks usados**   | `useState`, `useParams`, `useCartStore`                  |
| **Comportamiento** | Muestra toast de confirmación al añadir                  |

---

### 4️⃣ CartPage (`/cart`)

**Archivo:** `src/pages/CartPage.jsx`

| Elemento           | Descripción                                                  |
| ------------------ | ------------------------------------------------------------ |
| **Función**        | Lista de libros en el carrito                                |
| **Hooks usados**   | `useCartStore`                                               |
| **Componentes**    | `CartItem` (uno por libro), `OrderSummary`                   |
| **Comportamiento** | Permite modificar cantidad (+/-), eliminar, proceder al pago |

---

### 5️⃣ CheckoutPage (`/checkout`)

**Archivo:** `src/pages/CheckoutPage.jsx`

| Elemento           | Descripción                                                 |
| ------------------ | ----------------------------------------------------------- |
| **Función**        | Resumen del pedido + selección de pago                      |
| **Hooks usados**   | `useCartStore`                                              |
| **Componentes**    | `PaymentMethod`, `CheckoutSummary`                          |
| **Comportamiento** | Muestra lista de libros + total + botón "Confirmar y Pagar" |

---

### 6️⃣ OrderConfirmationPage (`/order-confirmation`)

**Archivo:** `src/pages/OrderConfirmationPage.jsx`

| Elemento           | Descripción                                  |
| ------------------ | -------------------------------------------- |
| **Función**        | Mensaje de agradecimiento                    |
| **Hooks usados**   | `useState` (para número de pedido aleatorio) |
| **Comportamiento** | Muestra confirmación con número de pedido    |

---

## 🧩 Componentes Clave

### Layout (en `components/layout/`)

| Componente    | Función                                   |
| ------------- | ----------------------------------------- |
| `Header`      | Logo + buscador + ícono carrito con badge |
| `Footer`      | Derechos de autor                         |
| `MainLayout`  | Envuelve páginas con Header y Footer      |
| `ScrollToTop` | Resetea scroll al cambiar de página       |

### Features (en `features/`)

| Componente        | Función                                                 |
| ----------------- | ------------------------------------------------------- |
| `BookCard`        | Tarjeta de libro (imagen, título, precio, botón añadir) |
| `CartItem`        | Fila del carrito con controles +/- y eliminar           |
| `OrderSummary`    | Subtotal + Total + botón "Proceder al pago"             |
| `PaymentMethod`   | Selector Tarjeta/PayPal con formulario                  |
| `CheckoutSummary` | Total final + botón "Confirmar y Pagar"                 |

---

## 🎣 Hooks Utilizados

### Hooks de React

| Hook              | Uso                                         |
| ----------------- | ------------------------------------------- |
| `useState`        | Estado local (toast, búsqueda, formularios) |
| `useEffect`       | Countdown en useCountdown                   |
| `useNavigate`     | Navegación programática                     |
| `useParams`       | Obtener `:id` de la URL                     |
| `useSearchParams` | Leer query params (`?search=`)              |

### Custom Hook

| Hook           | Archivo                 | Uso                            |
| -------------- | ----------------------- | ------------------------------ |
| `useCountdown` | `hooks/useCountdown.js` | Countdown de 5s en LandingPage |

### Store (Zustand)

| Hook           | Archivo                 | Uso                                          |
| -------------- | ----------------------- | -------------------------------------------- |
| `useCartStore` | `store/useCartStore.js` | Manejo del carrito (añadir, eliminar, total) |

---

## 🛒 Estado del Carrito (Zustand)

```javascript
// Estado
cart: []; // Array de libros con quantity

// Acciones
addToCart(book); // Añade o incrementa cantidad
decreaseQuantity(id); // Decrementa o elimina si llega a 0
removeFromCart(id); // Elimina del carrito
clearCart(); // Vacía todo el carrito
getTotalItems(); // Cantidad total de items
getCartTotal(); // Suma total de precios
```

**Persistencia:** Usa `localStorage` (el carrito se mantiene al recargar)

---

## � Flujo de la Aplicación

```
Landing (5s) → Home → BookDetail → Cart → Checkout → Confirmación
      ↓         ↓          ↓
   Logo      Búsqueda   Añadir
   Countdown  Libros    al carrito
```

---

## ✅ Criterios de Evaluación Cumplidos

| Criterio             | Peso | Estado            |
| -------------------- | ---- | ----------------- |
| 10+ Componentes      | 5%   | ✅ 16 componentes |
| useState + useEffect | 5%   | ✅                |
| Custom Hook          | 10%  | ✅ useCountdown   |
| React Router         | 10%  | ✅ 7 rutas        |
| CSS (Tailwind)       | 10%  | ✅                |
| Vistas               | 45%  | ✅                |
| Video                | 10%  | Pendiente         |
| Vercel               | 5%   | Pendiente         |

---

## � Para el Video

1. Abrir el proyecto y mostrar `npm run dev`
2. Navegar por las rutas explicando cada página
3. Mostrar código de `LandingPage` → explicar `useCountdown`
4. Mostrar código de `CartPage` → explicar `useCartStore`
5. Demostrar flujo completo: añadir libros → checkout → confirmación
