import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => onSearch(term), 300);
    return () => clearTimeout(timer);
  }, [term, onSearch]);

  return (
    <div className="relative">
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-text-muted pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
      <input
        className="input-field pl-10"
        type="text"
        placeholder="Search by name..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
}
