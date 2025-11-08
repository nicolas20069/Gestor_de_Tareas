# GestorTareas

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve

## GestorTareas

Pequeña aplicación de ejemplo para gestionar tareas utilizando Angular.

## Tecnologías principales
- Angular 20.x
- TypeScript (~5.9)
- SCSS (estilos por componente y `src/styles.scss`)
- Angular Router, Angular Forms
- RxJS, Zone.js
- Angular CLI / @angular/build
- Karma + Jasmine (tests)
- Prettier

## Requisitos
- Node.js 18+ (recomendado: Node 18 o 20)
- npm (o pnpm/yarn si prefieres)

### Instalación
Desde la raíz del proyecto:

```powershell
# instalar dependencias
npm install
```

### Desarrollo (server)
Inicia el servidor de desarrollo y abre http://localhost:4200/:

```powershell
npm start
# o
ng serve
```

### Build de producción

```powershell
npm run build
```

Los artefactos finales se generan en `dist/`.

### Tests

```powershell
npm test
```

## Estructura y puntos importantes
- `src/app` — componentes y servicios. Los componentes usan `standalone: true`.
- `src/styles.scss` — estilos globales.
- SCSS por componente (recomendado mantener modularidad).
- `angular.json` contiene la configuración de build/serve.

## Troubleshooting (Windows): error EPERM al renombrar `.angular\cache`
Si al ejecutar `ng serve` ves un error tipo:

```
EPERM: operation not permitted, rename '.angular\cache\...deps_temp_xxx' -> '.angular\cache\...deps'
```

Prueba estos pasos (PowerShell):

1. Asegúrate de que no haya procesos node que bloqueen archivos:

```powershell
# listar procesos node
Get-Process node -ErrorAction SilentlyContinue | Select-Object Id, ProcessName

# cerrar procesos node si los hay (cuidado: mata todos los node)
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```

2. Borra la caché de Angular:

```powershell
Remove-Item -LiteralPath ".angular\cache" -Recurse -Force -ErrorAction SilentlyContinue
```

3. Reinicia el servidor:

```powershell
ng serve
```

Si sigue ocurriendo:
- Ejecuta PowerShell como Administrador.
- Comprueba que un anti-virus o Windows Defender no esté bloqueando la carpeta; añade una exclusión temporal para la carpeta del proyecto.
- Usa Resource Monitor o Sysinternals Handle.exe para identificar el proceso que mantiene un handle en la carpeta.

## Recomendaciones y buenas prácticas
- Añade en `.gitignore`: `/.angular/`, `node_modules/`, `dist/`.
- Añade un fichero `engines` en `package.json` o en README indicando la versión de Node recomendada.
- Usa Prettier configurado en `package.json` para formateo consistente.
- Considera añadir ESLint para reglas estáticas.


