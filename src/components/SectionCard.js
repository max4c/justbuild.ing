export default function SectionCard({ title, children, className = "" }) {
  return (
    <div className={`bg-dark-light p-6 md:p-8 rounded-lg shadow-md mb-8 ${className}`}>
      {title && <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>}
      {children}
    </div>
  )
}
