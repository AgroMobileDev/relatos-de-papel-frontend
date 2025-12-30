# 📘 Guía de Desarrollo - Relatos de Papel

> Documento técnico oficial. Todo código debe seguir estos lineamientos.

---

## 📂 Estructura de Carpetas

```
src/
├── assets/              # Imágenes, iconos
├── components/
│   ├── layout/          # Navbar, Footer, MainLayout
│   └── ui/              # Button, Badge, Loader, EmptyState
├── data/                # books.mock.js
├── features/
│   ├── books/           # BookCard, BookList, SearchBar
│   ├── cart/            # CartDrawer, CartItem
│   └── checkout/        # OrderSummary
├── hooks/               # Custom hooks adicionales
├── pages/               # LandingPage, HomePage, BookDetailPage, CheckoutPage, NotFoundPage
├── routes/              # AppRouter.jsx
├── store/               # Zustand stores (useCartStore, useSearchStore)
├── services/            # API calls (futuro)
└── utils/               # Helpers (formatCurrency, etc.)
```

---

## 🧩 Componentes (18 total)

### Layout

| Componente   | Ubicación            |
| ------------ | -------------------- |
| `MainLayout` | `components/layout/` |
| `Navbar`     | `components/layout/` |
| `Footer`     | `components/layout/` |

### UI Reutilizables

| Componente   | Ubicación        |
| ------------ | ---------------- |
| `Button`     | `components/ui/` |
| `Badge`      | `components/ui/` |
| `Loader`     | `components/ui/` |
| `EmptyState` | `components/ui/` |

### Features

| Componente     | Ubicación            |
| -------------- | -------------------- |
| `SearchBar`    | `features/books/`    |
| `BookList`     | `features/books/`    |
| `BookCard`     | `features/books/`    |
| `CartDrawer`   | `features/cart/`     |
| `CartItem`     | `features/cart/`     |
| `OrderSummary` | `features/checkout/` |

### Pages

| Componente       | Ruta        |
| ---------------- | ----------- |
| `LandingPage`    | `/`         |
| `HomePage`       | `/home`     |
| `BookDetailPage` | `/book/:id` |
| `CheckoutPage`   | `/checkout` |
| `NotFoundPage`   | `*`         |

---

## 🎣 Stores (Zustand)

### `useCartStore` - `store/useCartStore.js`

```javascript
// Funciones disponibles
addToCart(book, format);
removeFromCart(cartId);
decreaseQuantity(cartId);
clearCart();
getTotalItems();
getCartTotal(); // { subtotal, discountAmount, total }
applyCoupon(code);
```

### `useSearchStore` - `store/useSearchStore.js`

```javascript
// Funciones disponibles
query; // string
setQuery(text);
filteredBooks; // computed
```

---

## 📏 Convenciones de Código

### Naming

| Tipo         | Formato                     | Ejemplo            |
| ------------ | --------------------------- | ------------------ |
| Componentes  | PascalCase                  | `BookCard.jsx`     |
| Hooks/Stores | camelCase con prefijo `use` | `useCartStore.js`  |
| Funciones    | camelCase                   | `formatCurrency()` |
| Constantes   | UPPER_SNAKE                 | `API_URL`          |

### Commits (en inglés)

```
feat: add shopping cart functionality
fix: resolve price calculation bug
docs: update README
style: format code with prettier
refactor: extract validation logic
```

### Imports (orden)

1. React / librerías externas
2. Componentes
3. Stores / Hooks
4. Utils / Data
5. Estilos

---

## ⚠️ Adaptación de Código

Si recibes código de otros miembros:

1. Renombrar archivos según estructura definida
2. Mover a carpeta correcta
3. Actualizar imports
4. Asegurar naming conventions
5. Verificar que use los stores de Zustand definidos

---

_Estilos y colores: ver `DESIGN_SYSTEM.md`_
