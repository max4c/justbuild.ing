export default function FounderCard({ name, position, description, link }) {
  return (
    <div className="bg-dark-lighter p-5 rounded-lg shadow-md relative hover:translate-y-[-4px] hover:bg-dark-light transition-all">
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-hidden="true"></a>
      <h3 className="text-xl font-medium text-white mb-2 flex items-center">
        {name}
        <span className="text-gray-400 ml-2 text-sm">↗</span>
      </h3>
      <p className="text-gray-300 text-sm">{position}</p>
      <div className="text-gray-400 text-sm mt-3">
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <p key={index} className="mt-2">• {item}</p>
          ))
        ) : (
          <p>• {description}</p>
        )}
      </div>
    </div>
  )
}
