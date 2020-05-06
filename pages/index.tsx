import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Nav from '../components/nav'

export default (props) => { 
  return (
    <div className="sm:flex max-w-none md:container md:mx-auto">
      <div className="w-full sm:w-auto pt-4 pb-4 sm:p-0 flex sm:block items-center">
        <img className="w-48 h-48 shadow-lg sm:shadow-none rounded-full sm:rounded-none mx-auto sm:m-0" src={props.avatar_url} />
      </div>
      <div className="flex-grow flex flex-col bg-gray-900 text-center sm:text-left">
        <div className="flex-grow p-4">
          <h2 className="text-white text-3xl">{props.name}</h2>
          <p className="text-white text-xl opacity-50">{props.bio}</p>
        </div>
        <div className="flex justify-center sm:justify-end items-center bg-gray-700">
          {props.email && (
            <a href={`mailto:${props.email}`} className="h-16 w-16 bg-yellow-600 text-white flex justify-center items-center">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          )}
          <div className="h-16 w-16 bg-purple-600 text-white flex justify-center items-center">
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </div>
          <div className="h-16 w-16 bg-blue-600 text-white flex justify-center items-center">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
          <div className="h-16 w-16 bg-orange-500 text-white flex justify-center items-center">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </div>
        </div>
      </div>
    </div>
  )
 }

export async function getStaticProps() {
  const res = await axios.get('https://api.github.com/users/dbk91')

  return {
    props: res.data,
  }
}
