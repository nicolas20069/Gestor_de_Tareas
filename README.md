# 📌 Gestor de Tareas

Aplicación web desarrollada con **Angular** para la gestión de tareas, con arquitectura modular, persistencia en `localStorage`, validaciones y un diseño futurista con SCSS.

---

## Características principales

- **Gestión de tareas**: agregar, marcar como completadas, desmarcar y eliminar.
- **Persistencia**: almacenamiento en `localStorage` para mantener datos incluso tras recargar la página.
- **Validaciones**: evita tareas vacías o con longitud incorrecta.
- **Arquitectura modular**: servicios inyectables y componentes standalone.
- **Angular Forms**: captura y validación de datos.
- **Pipe personalizado**: capitalización automática de descripciones.
- **Diseño futurista**: estilos SCSS con glassmorphism, gradientes y animaciones.
- **Notificaciones interactivas**: sistema de _toast_ para confirmar acciones (agregar, eliminar, actualizar).

---

## Tecnologías utilizadas

- **Angular 20.x**
- **TypeScript ~5.9**
- **SCSS** (estilos por componente y `src/styles.scss`)
- **Angular Router**
- **Angular Forms**
- **RxJS / Zone.js**
- **Angular CLI / @angular/build**
- **Karma + Jasmine** (tests)
- **Prettier** (formateo consistente)

---

## Estructura del proyecto

Gestor_de_Tareas/
├── src/
│ ├── app/
│ │ ├── inicio/ # Pantalla principal
│ │ ├── saludo/ # Componente de saludo
│ │ ├── acerca/ # Información del proyecto
│ │ ├── lista-tareas/ # Gestión de tareas
│ │ ├── navbar/ # Barra de navegación
│ │ ├── services/ # Servicios (ej. TaskStorageService)
│ │ └── capitalizar.pipe.ts # Pipe personalizado
│ ├── assets/ # Recursos estáticos
│ └── styles.scss # Estilos globales
├── angular.json # Configuración Angular
├── package.json # Dependencias y scripts
└── README.md # Documentación

---

## Requisitos previos

- **Node.js 18+** (recomendado: Node 18 o 20)
- **npm** (o pnpm/yarn)

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nicolas20069/Gestor_de_Tareas.git
cd Gestor_de_Tareas

# Instalar dependencias
npm install
```
---

## Desarrollo
# Iniciar servidor de desarrollo
npm start
# o
ng serve
- Abrir en navegador: http://localhost:4200/

## Build de producción
npm run build

## Tests
npm test

---

## Funcionalidades destacadas
- Inicio: pantalla principal impactante con tarjeta holográfica y animación de entrada.

- Saludo: componente interactivo con input y botón futurista.

- Acerca: información del proyecto con diseño glassmorphism.

- Lista de tareas: gestión completa con notificaciones tipo toast.

- Navbar: barra de navegación con gradiente futurista y menú móvil animado.

---

## Troubleshooting (Windows)
Si aparece el error EPERM: operation not permitted, rename '.angular/cache...':

1. Cierra procesos node activos:
Get-Process node | Stop-Process -Force

2. Borra ka caché de Angular
Remove-Item -LiteralPath ".angular/cache" -Recurse -Force

3. Reinicia el servidor con ng serve.

---

## Buenas prácticas
- Ignorar carpetas en .gitignore:
/node_modules/
/dist/
/.angular/

- Definir versión de Node en package.json (engines).

- Usar Prettier para formateo consistente.

- Considerar ESLint para reglas estáticas.

---

## Autor
Nicolas Melo Yandún
GitHub (github.com in Bing)

📊 Lenguajes
TypeScript, SCSS, HTML.