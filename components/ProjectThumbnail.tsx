enum LanguageColors {
  TypeScript = 'text-blue-400',
  JavaScript = 'text-yellow-400',
  HTML = 'text-red-500',
}

export default (props) => {
  return (
    <div className="bg-gray-900 odd:bg-gray-800 w-full md:w-1/3 h-64 py-3 px-6">
      <div className="flex justify-between">
        <h3 className="text-white text-2xl">{props.name}</h3>
        <h3 className={`text-white text-xl ${LanguageColors[props.language]}`}>{props.language}</h3>
      </div>
      <p className="project-description text-white opacity-50">{props.description}</p>
    </div>
  )
}
