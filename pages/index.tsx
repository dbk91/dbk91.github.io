import * as React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faCodepen, faLinkedin, faKeybase } from '@fortawesome/free-brands-svg-icons'

import Nav from '../components/nav'

const safeLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default (props) => {
  const { email } = props
  const emailUrl = React.useMemo(() => {
    return `mailto:${email}?subject=${encodeURIComponent('Reaching Out')}&body=${encodeURIComponent('Hello Daniel,')}`
  }, [email])

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
          <a href={process.env.KEYBASE_URL} {...safeLinkProps} className="square-link bg-indigo-600">
            <FontAwesomeIcon icon={faKeybase} size="2x" />
          </a>
          <a href={props.blog} className="square-link bg-green-600">
            <FontAwesomeIcon icon={faBlog} size="2x" />
          </a>
          {props.email && (
            <a href={emailUrl} className="square-link bg-yellow-600">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          )}
          <a href={process.env.CODEPEN_URL} {...safeLinkProps} className="square-link bg-purple-600">
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
          <a href={process.env.LINKEDIN_URL} {...safeLinkProps} className="square-link bg-blue-600">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={props.html_url} {...safeLinkProps} className="square-link bg-orange-500">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  )
 }

export async function getStaticProps() {
  const res = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USERNAME}`, {
    auth: {
      username: process.env.GITHUB_USERNAME,
      password: process.env.GITHUB_API_TOKEN,
    },
  })

  return {
    props: res.data,
  }
}
