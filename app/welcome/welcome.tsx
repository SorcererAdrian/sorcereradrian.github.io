// import SwaggerUI from 'swagger-ui-react'

import { Link } from 'react-router'
import logoLight from './logo-light.svg'

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <div className="w-125 max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:block"
            />
          </div>
        </header>
        <a className="text-black" href="/subpage/">
          Go to Subpage
        </a>
        <Link to="/api" className="text-black">
          API
        </Link>
        {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
      </div>
    </main>
  )
}
