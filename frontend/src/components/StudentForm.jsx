import { useState, useEffect } from 'react';

export default function StudentForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    department: '',
    email: '',
  });

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialData, age: String(initialData.age) });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, age: Number(form.age) });
    if (!initialData) {
      setForm({ fullName: '', age: '', department: '', email: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-lg tracking-luxury font-semibold text-luxury-text-primary m-0">
        {initialData ? 'Edit Student' : 'Register New Student'}
      </h2>
      <input
        className="input-field"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        required
      />
      <input
        className="input-field"
        name="age"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        required
        min="1"
      />
      <input
        className="input-field"
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />
      <input
        className="input-field"
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <div className="flex gap-3 mt-1">
        <button type="submit" className="btn-gold flex-1">
          {initialData ? 'Update' : 'Register'}
        </button>
        {initialData && (
          <button type="button" className="btn-ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
