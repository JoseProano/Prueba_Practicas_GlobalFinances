# Todo App - Laravel + React

Aplicación sencilla de gestión de tareas (To-Do) con Laravel como backend y React como frontend.

## Características

- Listar, crear, editar y eliminar tareas
- Marcar tareas como completadas
- Interfaz responsive con Bootstrap
- API RESTful con Laravel

## Requisitos

- PHP 8.2+
- Composer
- Node.js 18+
- PostgreSQL

## Instalación

### 1. Clonar repositorio
```bash
git clone https://github.com/JoseProano/Prueba_Practicas_GlobalFinances.git
cd Prueba_Practicas_GlobalFinances
```

### 2. Backend (Laravel)
```bash
cd todo-app
composer install
cp .env.example .env
```

Configurar `.env`:
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=todo_app
DB_USERNAME=postgres
DB_PASSWORD=tu_password
```

```bash
php artisan key:generate
php artisan migrate
```

### 3. Frontend (React)
```bash
cd ../todo-frontend
npm install
```

## Ejecutar aplicación

### Terminal 1 - Backend:
```bash
cd todo-app
php artisan serve
```
Backend: http://localhost:8000

### Terminal 2 - Frontend:
```bash
cd todo-frontend
npm start
```
Frontend: http://localhost:3000

## API Endpoints

- `GET /api/tasks` - Listar tareas
- `POST /api/tasks` - Crear tarea
- `PUT /api/tasks/{id}` - Actualizar tarea
- `DELETE /api/tasks/{id}` - Eliminar tarea

## Uso

1. Abre http://localhost:3000
2. Agrega nuevas tareas con título y descripción
3. Marca tareas como completadas con el checkbox
4. Elimina tareas con el botón de papelera

## Tecnologías

- **Backend:** Laravel 12, PostgreSQL
- **Frontend:** React 18, Bootstrap, Axios
