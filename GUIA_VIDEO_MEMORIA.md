# 📹 Guía para Video Memoria - Relatos de Papel

**⏱️ Duración: 10 minutos (contenido técnico) + Despliegue/Conclusiones (general)**

---

## 👥 Distribución por Miembro (10 minutos totales)

### 🎤 **GABRIEL: Enrutador y Componentes de Layout** (2 min)

**Introducción rápida (20 seg):**

- "Relatos de Papel" - Librería online con React + Vite

**Archivos de entrada:**
| Archivo | Función |
|---------|--------|
| `main.jsx` | Punto de entrada, monta React en el DOM |
| `App.jsx` | Componente raíz, renderiza `AppRouter` |

**Enrutador - `AppRouter.jsx` (1 min):**

- Usa `BrowserRouter`, `Routes`, `Route` de React Router
- Rutas anidadas con `MainLayout`
- Tabla de rutas:

| Ruta                  | Página                            |
| --------------------- | --------------------------------- |
| `/`                   | LandingPage                       |
| `/home`               | HomePage                          |
| `/book/:id`           | BookDetailPage                    |
| `/cart`               | CartPage                          |
| `/checkout`           | CheckoutPage (protegida)          |
| `/order-confirmation` | OrderConfirmationPage (protegida) |
| `*`                   | NotFoundPage (404)                |

**Rutas Protegidas - `ProtectedRoutes.jsx` (20 seg):**
| Componente | Protege | Condición |
|------------|---------|------------|
| `ProtectedCheckout` | `/checkout` | Solo si hay items en carrito |
| `ProtectedOrderConfirmation` | `/order-confirmation` | Solo si `orderCompleted` está en state |

**Componentes de Layout (40 seg):**
| Componente | Función |
|------------|---------|
| `MainLayout` | Envuelve páginas con Header/Footer |
| `Header` | Logo, buscador, icono carrito con badge |
| `Footer` | Pie de página |
| `ScrollToTop` | Scroll automático al cambiar de ruta |

---

### 🎤 **ROBINSON: Componentes de Features y Pages** (2 min)

**Componentes de Features (1 min):**

| Componente        | Ubicación            | Función                           |
| ----------------- | -------------------- | --------------------------------- |
| `BookCard`        | `features/books/`    | Tarjeta de libro con botón añadir |
| `CartItem`        | `features/cart/`     | Fila del carrito (+/-/eliminar)   |
| `OrderSummary`    | `features/cart/`     | Subtotal, envío, total            |
| `PaymentMethod`   | `features/checkout/` | Formulario tarjeta/PayPal         |
| `CheckoutSummary` | `features/checkout/` | Resumen y botón confirmar         |
| `Button`          | `components/ui/`     | Botón reutilizable con onClick    |

**7 Pages (1 min):**

- `LandingPage` - Bienvenida con countdown
- `HomePage` - Catálogo con grid de libros
- `BookDetailPage` - Detalle del libro
- `CartPage` - Carrito de compras
- `CheckoutPage` - Proceso de pago
- `OrderConfirmationPage` - Confirmación
- `NotFoundPage` - Error 404

**Total: 19 componentes** (incluye 2 rutas protegidas)

---

### 🎤 **GERARDO: Hooks de React y React Router** (2 min)

**Hooks de React (1 min):**
| Hook | Dónde se usa | Función |
|------|-------------|---------|
| `useState` | Header, BookCard, BookDetailPage, PaymentMethod | Manejar estado local |
| `useEffect` | ScrollToTop, useCountdown | Efectos secundarios |

**Hooks de React Router (1 min):**
| Hook | Dónde se usa | Función |
|------|-------------|---------|
| `useNavigate` | Header, LandingPage, BookCard, CheckoutSummary | Navegación programática |
| `useParams` | BookDetailPage | Obtener `:id` de URL |
| `useSearchParams` | HomePage | Query params (`?search=`) |
| `useLocation` | ScrollToTop | Detectar cambios de ruta |

---

### 🎤 **RONNY: Hooks Personalizados y Zustand** (2 min)

**🌟 Hook Personalizado: `useCountdown` (1 min)**

- **Archivo**: `src/hooks/useCountdown.js`
- **Propósito**: Contador regresivo que ejecuta callback al llegar a 0
- **Uso**: En `LandingPage` - redirige a `/home` en 5 segundos
- **Código clave**:
  ```javascript
  const useCountdown = (initialValue, onComplete) => {
    const [count, setCount] = useState(initialValue);
    useEffect(() => {
      if (count === 0) {
        onComplete?.();
        return;
      }
      const interval = setInterval(() => setCount((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }, [count, onComplete]);
    return count;
  };
  ```
- **Valor**: Encapsula lógica de temporizador, reutilizable

**🌟 Estado Global con Zustand: `useCartStore` (1 min)**

- **Archivo**: `src/store/useCartStore.js`
- **Librería**: Zustand (alternativa ligera a Redux)
- **Propósito**: Estado global del carrito con persistencia en localStorage

**Acciones del store:**
| Acción | Función |
|--------|---------|
| `addToCart(book)` | Añadir libro o incrementar cantidad |
| `removeFromCart(bookId)` | Eliminar libro del carrito |
| `decreaseQuantity(bookId)` | Reducir cantidad o eliminar si es 1 |
| `clearCart()` | Vaciar el carrito |
| `getTotalItems()` | Obtener total de items |
| `getCartTotal()` | Obtener precio total |

**Ventajas de Zustand:**

- Evita prop drilling
- Persistencia automática con `persist` middleware
- Datos se mantienen al recargar página

---

### 🎤 **KLEBER: Demo de Vistas y CSS** (2 min)

**Arrancar proyecto (20 seg):**

```bash
npm install && npm run dev
```

**Recorrido de vistas en navegador (1 min 20 seg):**

1. **LandingPage** `/` → Countdown animado, centrado con flexbox
2. **HomePage** `/home` → Grid responsive (1/2/3 columnas)
3. **BookDetailPage** `/book/1` → Detalle + toast al añadir
4. **CartPage** `/cart` → Lista de items + resumen
5. **CheckoutPage** `/checkout` → Formulario de pago
6. **OrderConfirmation** → Confirmación de pedido

**Estilos CSS destacables (20 seg):**

- **Tailwind CSS**: Clases utilitarias
- **Grid responsive**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Header sticky**: `sticky top-0 z-50`
- **Efectos hover**: `hover:scale-[1.02]`, `hover:shadow-lg`
- **Transiciones suaves**: `transition-all`

---

## � Despliegue en Vercel (General - fuera de los 10 min)

**Mostrar en grupo:**

1. Abrir URL del proyecto desplegado en Vercel
2. Navegar por las vistas principales
3. Demostrar funcionalidad del carrito (añadir, modificar, checkout)
4. Recargar página → carrito persiste gracias a Zustand + localStorage

---

## 📝 Conclusiones (General - fuera de los 10 min)

- ✅ Proyecto funcional con **React + Vite**
- ✅ Enrutamiento con **React Router** (7 rutas)
- ✅ Estado global con **Zustand** y persistencia
- ✅ **21 componentes/archivos JSX** organizados por features
- ✅ **2 hooks personalizados** (`useCountdown`, `useCartStore`)
- ✅ Desplegado exitosamente en **Vercel**

---

## 📊 Resumen de Distribución

| Miembro   | Tema                                 | Tiempo      |
| --------- | ------------------------------------ | ----------- |
| 1         | Enrutador + Componentes Layout       | 2 min       |
| 2         | Componentes Features + Pages         | 2 min       |
| 3         | Hooks React + React Router           | 2 min       |
| 4         | Hooks Personalizados + Zustand       | 2 min       |
| 5         | Demo Vistas + CSS                    | 2 min       |
| **Todos** | **Despliegue Vercel + Conclusiones** | **General** |

**Total contenido técnico: 10 minutos**

---

## ✅ Checklist de Preparación

- [ ] Código abierto en VSCode
- [ ] Proyecto corriendo en `localhost:5173`
- [ ] URL de Vercel lista para demo final
- [ ] Ensayar tiempos individualmente (máx 2 min c/u)
