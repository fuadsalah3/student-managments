export default function StudentTable({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <p className="text-luxury-text-muted text-center tracking-luxury py-12 text-sm">
        No students found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/[0.06]">
            <th className="text-left py-4 px-4 text-luxury-gold text-xs tracking-luxury-wide font-semibold uppercase">
              Full Name
            </th>
            <th className="text-left py-4 px-4 text-luxury-gold text-xs tracking-luxury-wide font-semibold uppercase">
              Age
            </th>
            <th className="text-left py-4 px-4 text-luxury-gold text-xs tracking-luxury-wide font-semibold uppercase">
              Department
            </th>
            <th className="text-left py-4 px-4 text-luxury-gold text-xs tracking-luxury-wide font-semibold uppercase">
              Email
            </th>
            <th className="text-left py-4 px-4 text-luxury-gold text-xs tracking-luxury-wide font-semibold uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr
              key={s._id}
              className="border-b border-white/[0.04] transition-all duration-200 hover:bg-luxury-gold/[0.02]"
            >
              <td className="py-4 px-4 text-sm tracking-luxury text-luxury-text-primary font-medium">
                {s.fullName}
              </td>
              <td className="py-4 px-4 text-sm tracking-luxury text-luxury-text-secondary">
                {s.age}
              </td>
              <td className="py-4 px-4 text-sm tracking-luxury text-luxury-text-secondary">
                {s.department}
              </td>
              <td className="py-4 px-4 text-sm tracking-luxury text-luxury-text-secondary">
                {s.email}
              </td>
              <td className="py-4 px-4">
                <div className="flex gap-2">
                  <button className="btn-edit" onClick={() => onEdit(s)}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={() => onDelete(s._id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
