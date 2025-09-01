export default function ProfileCard({ name, email, id, avatarUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
      <img
        src={avatarUrl}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border border-gray-200"
      />
      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-xs text-gray-500">ID: {id}</p>
      </div>
    </div>
  )
}

