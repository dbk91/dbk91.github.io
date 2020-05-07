const LanguageColors = {
  TypeScript: 'text-blue-400',
  JavaScript: 'text-yellow-400',
  HTML: 'text-red-500',
}

// TODO: Move this into one file
const safeLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default (props) => {
  return (
    <a
      href={props.homepage || props.html_url}
      {...safeLinkProps}
      className="group relative bg-gray-900 odd:bg-gray-800 w-full md:w-1/3 h-64 py-3 px-6"
    >
      <div className="absolute top-0 left-0 h-1 bg-blue-400 transition-width duration-200 ease-in-out w-0 group-hover:w-full" />
      <div className="flex justify-between">
        <h3 className="text-white text-2xl">{props.name}</h3>
        <h3 className={`text-white text-xl ${LanguageColors[props.language]}`}>{props.language}</h3>
      </div>
      <p className="project-description text-white opacity-50">{props.description}</p>
    </a>
  )
}
