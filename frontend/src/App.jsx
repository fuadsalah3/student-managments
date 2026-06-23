import { useState, useEffect, useCallback } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import SearchBar from './components/SearchBar';
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
} from './api/studentApi';

export default function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getAllStudents();
      setStudents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const handleSearch = useCallback(async (term) => {
    if (!term.trim()) {
      fetchAll();
      return;
    }
    try {
      const { data } = await searchStudents(term);
      setStudents(data);
    } catch (err) {
      console.error(err);
    }
  }, [fetchAll]);

  const handleCreate = async (formData) => {
    try {
      await createStudent(formData);
      fetchAll();
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to create student');
    }
  };

  const handleUpdate = async (formData) => {
    try {
      await updateStudent(editing._id, formData);
      setEditing(null);
      fetchAll();
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to update student');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this student?')) return;
    try {
      await deleteStudent(id);
      fetchAll();
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to delete student');
    }
  };

  const handleEdit = (student) => setEditing(student);

  return (
    <div className="min-h-screen bg-luxury-black">
      <header className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <svg className="w-7 h-7 text-luxury-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
            </svg>
            <h1 className="text-xl tracking-luxury-wide font-semibold text-luxury-text-primary m-0">
              Student Management System
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          <section className="glass-panel p-6 lg:w-80 w-full shrink-0 lg:sticky lg:top-8">
            <StudentForm
              onSubmit={editing ? handleUpdate : handleCreate}
              initialData={editing}
              onCancel={() => setEditing(null)}
            />
          </section>

          <section className="glass-panel p-6 flex-1 min-w-0">
            <SearchBar onSearch={handleSearch} />
            {loading ? (
              <p className="text-luxury-text-muted text-center tracking-luxury py-12 text-sm">
                Loading...
              </p>
            ) : (
              <StudentTable
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
