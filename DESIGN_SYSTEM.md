# 🎨 Design System - Relatos de Papel

> Paleta de colores y tipografía oficial. Usar Tailwind CSS v4.

---

## 🎨 Colores

### Brand

| Nombre            | Hex       | Uso                          |
| ----------------- | --------- | ---------------------------- |
| **Primary**       | `#4F46E5` | Botones, enlaces, destacados |
| **Primary Light** | `#818CF8` | Hover states                 |
| **Primary Dark**  | `#312E81` | Encabezados                  |
| **Accent**        | `#F59E0B` | Precios, badges, CTAs        |

### Neutros (Slate)

| Nombre     | Hex       | Uso               |
| ---------- | --------- | ----------------- |
| Canvas     | `#F8FAFC` | Fondo página      |
| Surface    | `#FFFFFF` | Cards, modales    |
| Text Main  | `#0F172A` | Títulos           |
| Text Body  | `#475569` | Párrafos          |
| Text Muted | `#94A3B8` | Placeholders      |
| Border     | `#E2E8F0` | Líneas divisorias |

### Feedback

| Estado  | Hex       |
| ------- | --------- |
| Success | `#10B981` |
| Error   | `#F43F5E` |
| Warning | `#F59E0B` |

---

## 🔤 Tipografía

**Font Principal**: [Inter](https://fonts.google.com/specimen/Inter)

| Uso         | Clase Tailwind               |
| ----------- | ---------------------------- |
| Headings    | `font-bold text-slate-900`   |
| Body        | `font-normal text-slate-600` |
| Small/Muted | `text-sm text-slate-400`     |

---

## 🛠 Configuración (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", sans-serif;
  --color-primary: #4f46e5;
  --color-primary-light: #818cf8;
  --color-primary-dark: #312e81;
  --color-accent: #f59e0b;
  --color-surface: #ffffff;
  --color-background: #f8fafc;
}
```

---

## 💡 Ejemplos

**Botón Primary:**

```jsx
<button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg">
  Comprar
</button>
```

**Card:**

```jsx
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
  <h3 className="text-slate-900 font-bold">Título</h3>
  <p className="text-slate-600">Descripción</p>
  <span className="text-primary font-bold">$12.99</span>
</div>
```
