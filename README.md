# Todo App - Laravel + React

Una aplicación sencilla de gestión de tareas (To-Do) construida con Laravel como backend y React como frontend.

## Características

- ✅ Listar todas las tareas
- ✅ Crear nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas
- ✅ Interfaz responsive con Bootstrap
- ✅ API RESTful con Laravel
- ✅ Frontend React con hooks

## Tecnologías Utilizadas

### Backend (Laravel)
- Laravel 12
- API RESTful
- SQLite/MySQL
- Eloquent ORM
- Validación de datos
- CORS configurado

### Frontend (React)
- React 18
- Hooks (useState, useEffect)
- Axios para peticiones HTTP
- Bootstrap para estilos
- Componentes funcionales

## Estructura del Proyecto

```
Prueba/
├── todo-app/          # Backend Laravel
│   ├── app/
│   │   ├── Http/Controllers/Api/
│   │   │   └── TaskController.php
│   │   └── Models/
│   │       └── Task.php
│   ├── database/
│   │   └── migrations/
│   │       └── create_tasks_table.php
│   ├── routes/
│   │   └── api.php
│   └── ...
├── todo-frontend/     # Frontend React
│   ├── src/
│   │   ├── TaskList.js
│   │   ├── App.js
│   │   └── ...
│   └── ...
└── README.md
```

## Instalación y Configuración

### Requisitos Previos
- PHP 8.2 o superior
- Composer
- Node.js 18 o superior
- npm
- Base de datos (SQLite/MySQL)

### Backend (Laravel)

1. **Instalar dependencias:**
   ```bash
   cd todo-app
   composer install
   ```

2. **Configurar el archivo de entorno:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Configurar la base de datos en `.env`:**
   ```env
   DB_CONNECTION=sqlite
   # O para MySQL:
   # DB_CONNECTION=mysql
   # DB_HOST=127.0.0.1
   # DB_PORT=3306
   # DB_DATABASE=todo_app
   # DB_USERNAME=root
   # DB_PASSWORD=
   ```

4. **Ejecutar las migraciones:**
   ```bash
   php artisan migrate
   ```

5. **Iniciar el servidor de desarrollo:**
   ```bash
   php artisan serve
   ```
   
   El backend estará disponible en: `http://localhost:8000`

### Frontend (React)

1. **Instalar dependencias:**
   ```bash
   cd todo-frontend
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```
   
   El frontend estará disponible en: `http://localhost:3000`

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| POST | `/api/tasks` | Crear una nueva tarea |
| GET | `/api/tasks/{id}` | Obtener una tarea específica |
| PUT | `/api/tasks/{id}` | Actualizar una tarea |
| DELETE | `/api/tasks/{id}` | Eliminar una tarea |

### Ejemplo de petición POST para crear una tarea:
```json
{
  "title": "Nueva tarea",
  "description": "Descripción de la tarea"
}
```

### Ejemplo de petición PUT para actualizar una tarea:
```json
{
  "title": "Título actualizado",
  "description": "Descripción actualizada",
  "completed": true
}
```

## Uso de la Aplicación

1. **Agregar una tarea:**
   - Completa el formulario con título y descripción
   - Haz clic en "Agregar Tarea"

2. **Marcar como completada:**
   - Haz clic en el checkbox junto a la tarea

3. **Eliminar una tarea:**
   - Haz clic en el icono de papelera (🗑️)
   - Confirma la eliminación

## Funcionalidades Implementadas

### Backend
- [x] Modelo Task con migración
- [x] Controlador API RESTful
- [x] Rutas API configuradas
- [x] Validación de datos
- [x] Manejo de errores
- [x] CORS configurado
- [x] Campos: id, title, description, completed, timestamps

### Frontend
- [x] Componente TaskList principal
- [x] Hook useState para manejar estado
- [x] Hook useEffect para cargar datos
- [x] Peticiones HTTP con axios
- [x] Interfaz responsive con Bootstrap
- [x] Formulario para crear tareas
- [x] Lista de tareas con checkboxes
- [x] Función de eliminar tareas
- [x] Manejo de estados de carga y errores

## Características Adicionales

- **Responsive Design**: La interfaz se adapta a diferentes tamaños de pantalla
- **Feedback Visual**: Estados de carga y mensajes de error
- **Confirmación de Eliminación**: Previene eliminaciones accidentales
- **Timestamps**: Muestra cuándo fue creada cada tarea
- **Estado Visual**: Las tareas completadas se muestran tachadas
- **Contador**: Muestra el número total de tareas

## Desarrollo

### Comandos Útiles

**Backend:**
```bash
# Limpiar caché
php artisan config:clear
php artisan cache:clear

# Crear migración
php artisan make:migration create_table_name

# Crear modelo
php artisan make:model ModelName

# Crear controlador
php artisan make:controller ControllerName
```

**Frontend:**
```bash
# Auditar dependencias
npm audit

# Construir para producción
npm run build

# Ejecutar tests
npm test
```

## Solución de Problemas

### Error de CORS
Si experimentas problemas de CORS, asegúrate de que:
1. El middleware de CORS esté configurado en `bootstrap/app.php`
2. El archivo `config/cors.php` tenga las configuraciones correctas

### Error de Base de Datos
Si hay problemas con SQLite:
1. Verifica que el archivo de base de datos exista
2. Considera cambiar a MySQL en el archivo `.env`

### Puerto en Uso
Si el puerto 3000 o 8000 está en uso:
```bash
# Para React
npm start -- --port 3001

# Para Laravel
php artisan serve --port=8001
```

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto es de uso educativo y está disponible bajo la licencia MIT.
