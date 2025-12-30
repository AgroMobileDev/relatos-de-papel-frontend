# 📘 Guía de Desarrollo - Relatos de Papel

> Documento técnico oficial del proyecto. Referencia para todo el equipo.

---

## 📂 Estructura de Carpetas

```
src/
├── assets/                    # Imágenes (logo.png)
├── components/
│   └── layout/                # Componentes de layout
│       ├── Header.jsx         # Header con buscador y carrito
│       ├── Footer.jsx         # Pie de página
│       ├── MainLayout.jsx     # Layout principal con Outlet
│       └── ScrollToTop.jsx    # Resetea scroll al cambiar ruta
├── data/
│   └── books.mock.js          # 30 libros con category, isBestSeller
├── features/
│   ├── books/
│   │   └── BookCard.jsx       # Tarjeta de libro para el catálogo
│   ├── cart/
│   │   ├── CartItem.jsx       # Item del carrito con controles +/-
│   │   └── OrderSummary.jsx   # Resumen en página de carrito
│   └── checkout/
│       ├── PaymentMethod.jsx  # Selector Tarjeta/PayPal
│       └── CheckoutSummary.jsx # Resumen final + confirmar
├── hooks/
│   └── useCountdown.js        # Custom hook para countdown
├── pages/
│   ├── LandingPage.jsx        # Splash con countdown 5s
│   ├── HomePage.jsx           # Catálogo con búsqueda
│   ├── BookDetailPage.jsx     # Detalle del libro
│   ├── CartPage.jsx           # Vista del carrito
│   ├── CheckoutPage.jsx       # Método de pago
│   ├── OrderConfirmationPage.jsx # Confirmación de compra
│   └── NotFoundPage.jsx       # Página 404
├── routes/
│   └── AppRouter.jsx          # Configuración de rutas
├── store/
│   └── useCartStore.js        # Estado global del carrito (Zustand)
├── services/                  # API calls (futuro)
├── utils/                     # Helpers (futuro)
├── index.css                  # Variables CSS + Tailwind
└── main.jsx                   # Entry point
```

---

## 🗺️ Rutas de la Aplicación

| Ruta                  | Página                | Descripción                                 |
| --------------------- | --------------------- | ------------------------------------------- |
| `/`                   | LandingPage           | Splash screen, redirige a /home en 5s       |
| `/home`               | HomePage              | Catálogo de libros con buscador             |
| `/book/:id`           | BookDetailPage        | Detalle + añadir al carrito                 |
| `/cart`               | CartPage              | Lista de items + resumen + proceder al pago |
| `/checkout`           | CheckoutPage          | Método de pago + confirmar                  |
| `/order-confirmation` | OrderConfirmationPage | Mensaje de gracias                          |
| `*`                   | NotFoundPage          | Página 404                                  |

---

## 🧩 Componentes (16 total)

### Layout (4)

| Componente    | Archivo                             | Descripción                         |
| ------------- | ----------------------------------- | ----------------------------------- |
| `Header`      | `components/layout/Header.jsx`      | Logo + buscador + carrito con badge |
| `Footer`      | `components/layout/Footer.jsx`      | Pie de página                       |
| `MainLayout`  | `components/layout/MainLayout.jsx`  | Header + Outlet + Footer            |
| `ScrollToTop` | `components/layout/ScrollToTop.jsx` | Resetea scroll al cambiar de ruta   |

### Features (5)

| Componente        | Archivo                                 | Descripción                                 |
| ----------------- | --------------------------------------- | ------------------------------------------- |
| `BookCard`        | `features/books/BookCard.jsx`           | Tarjeta con imagen, título, precio, botón   |
| `CartItem`        | `features/cart/CartItem.jsx`            | Fila del carrito con +/- y eliminar         |
| `OrderSummary`    | `features/cart/OrderSummary.jsx`        | Subtotal + Total + botón "Proceder al pago" |
| `PaymentMethod`   | `features/checkout/PaymentMethod.jsx`   | Tabs Tarjeta/PayPal + formulario            |
| `CheckoutSummary` | `features/checkout/CheckoutSummary.jsx` | Total + botón "Confirmar y pagar"           |

### Pages (7)

| Componente              | Archivo                           | Hooks usados              |
| ----------------------- | --------------------------------- | ------------------------- |
| `LandingPage`           | `pages/LandingPage.jsx`           | useCountdown, useNavigate |
| `HomePage`              | `pages/HomePage.jsx`              | useSearchParams           |
| `BookDetailPage`        | `pages/BookDetailPage.jsx`        | useState, useParams       |
| `CartPage`              | `pages/CartPage.jsx`              | useCartStore              |
| `CheckoutPage`          | `pages/CheckoutPage.jsx`          | useCartStore              |
| `OrderConfirmationPage` | `pages/OrderConfirmationPage.jsx` | useState                  |
| `NotFoundPage`          | `pages/NotFoundPage.jsx`          | Link                      |

---

## 🎣 Custom Hooks

### `useCountdown` - `hooks/useCountdown.js`

```javascript
// Parámetros
initialValue; // Número inicial del contador
onComplete; // Callback al llegar a 0

// Retorna
count; // Valor actual del contador
```

**Uso:**

```javascript
const countdown = useCountdown(5, () => navigate("/home"));
```

---

## 🛒 Store (Zustand)

### `useCartStore` - `store/useCartStore.js`

```javascript
// Estado
cart: []; // Array de items { id, title, author, price, image, quantity, ... }

// Acciones
addToCart(book); // Añade libro o incrementa cantidad
decreaseQuantity(id); // Decrementa o elimina si quantity = 0
removeFromCart(id); // Elimina item del carrito
clearCart(); // Vacía el carrito
getTotalItems(); // Retorna cantidad total de items
getCartTotal(); // Retorna suma de precios
```

**Persistencia:** Usa `persist` middleware con localStorage.

---

## 📊 Datos Mock

### `books.mock.js`

30 libros con los campos:

- `id`, `title`, `author`, `isbn`, `price`, `image`, `stock`, `description`
- `category` (Clásico, Ciencia Ficción, Fantasía, Romance, Terror, Misterio, etc.)
- `isBestSeller` (true/false)

---

## 🎨 Estilos

### Tailwind CSS + Variables personalizadas

Ver `DESIGN_SYSTEM.md` para colores y tipografía.

| Variable     | Color   | Uso              |
| ------------ | ------- | ---------------- |
| `primary`    | #4F46E5 | Botones, enlaces |
| `text-main`  | #0F172A | Títulos          |
| `text-body`  | #475569 | Párrafos         |
| `background` | #F8FAFC | Fondo página     |
| `surface`    | #FFFFFF | Cards            |

---

## 📏 Convenciones

### Naming

- Componentes: `PascalCase.jsx`
- Hooks/Stores: `useCamelCase.js`
- Funciones: `camelCase()`

### Commits (inglés)

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
```

### Orden de imports

1. React / librerías
2. Componentes
3. Stores / Hooks
4. Utils / Data

---

## 🔗 Flujo de la Aplicación

```
┌─────────────┐
│ LandingPage │ ─────5s────▶ ┌──────────┐
└─────────────┘               │ HomePage │
                              │ /home    │
                              └────┬─────┘
                                   │ clic libro
                                   ▼
                           ┌──────────────┐
                           │BookDetailPage│
                           │ /book/:id    │
                           └──────┬───────┘
                                  │ añadir al carrito
                                  ▼
                           ┌──────────┐
                           │ CartPage │ ◀── clic 🛒 Header
                           │ /cart    │
                           └────┬─────┘
                                │ Proceder al pago
                                ▼
                         ┌──────────────┐
                         │ CheckoutPage │
                         │ /checkout    │
                         └──────┬───────┘
                                │ Confirmar y pagar
                                ▼
                   ┌───────────────────────┐
                   │OrderConfirmationPage  │
                   │ /order-confirmation   │
                   └───────────────────────┘
```

---

_Para colores y tipografía ver `DESIGN_SYSTEM.md`_
_Para requisitos académicos ver `ACTIVIDAD_1_GUIA.md`_
