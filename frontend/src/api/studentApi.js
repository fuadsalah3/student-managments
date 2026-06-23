import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getAllStudents = () => api.get('/students');

export const createStudent = (data) => api.post('/students', data);

export const updateStudent = (id, data) => api.put(`/students/${id}`, data);

export const deleteStudent = (id) => api.delete(`/students/${id}`);

export const searchStudents = (name) => api.get('/students/search', { params: { name } });
