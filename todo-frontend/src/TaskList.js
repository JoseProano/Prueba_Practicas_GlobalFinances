import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = 'http://localhost:8000/api';

  // Cargar tareas al montar el componente
  useEffect(() => {
    loadTasks();
  }, []);

  // Función para cargar todas las tareas
  const loadTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Error al cargar las tareas');
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para crear una nueva tarea
  const createTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim() || !newTask.description.trim()) {
      setError('Por favor, completa todos los campos');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/tasks`, newTask);
      setTasks([response.data, ...tasks]);
      setNewTask({ title: '', description: '' });
      setError('');
    } catch (err) {
      setError('Error al crear la tarea');
      console.error('Error creating task:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para marcar tarea como completada/no completada
  const toggleTask = async (id, currentStatus) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${id}`, {
        completed: !currentStatus
      });
      setTasks(tasks.map(task => 
        task.id === id ? response.data : task
      ));
    } catch (err) {
      setError('Error al actualizar la tarea');
      console.error('Error updating task:', err);
    }
  };

  // Función para eliminar una tarea
  const deleteTask = async (id) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Error al eliminar la tarea');
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="text-center mb-4">Lista de Tareas</h1>
          
          {/* Formulario para nueva tarea */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>Agregar Nueva Tarea</h5>
            </div>
            <div className="card-body">
              <form onSubmit={createTask}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    placeholder="Título de la tarea"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descripción</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={newTask.description}
                    onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                    placeholder="Descripción de la tarea"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Creando...' : 'Agregar Tarea'}
                </button>
              </form>
            </div>
          </div>

          {/* Mostrar errores */}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Lista de tareas */}
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5>Tareas</h5>
              <span className="badge bg-secondary">{tasks.length}</span>
            </div>
            <div className="card-body">
              {loading && tasks.length === 0 ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              ) : tasks.length === 0 ? (
                <p className="text-center text-muted">No hay tareas aún. ¡Agrega tu primera tarea!</p>
              ) : (
                <div className="list-group list-group-flush">
                  {tasks.map(task => (
                    <div key={task.id} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center mb-2">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              checked={task.completed}
                              onChange={() => toggleTask(task.id, task.completed)}
                            />
                            <h6 className={`mb-0 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                              {task.title}
                            </h6>
                          </div>
                          <p className={`mb-2 ${task.completed ? 'text-muted' : ''}`}>
                            {task.description}
                          </p>
                          <small className="text-muted">
                            Creado: {new Date(task.created_at).toLocaleDateString()}
                            {task.completed && (
                              <span className="badge bg-success ms-2">Completada</span>
                            )}
                          </small>
                        </div>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => deleteTask(task.id)}
                          title="Eliminar tarea"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
