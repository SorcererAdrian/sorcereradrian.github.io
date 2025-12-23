import SwaggerUI from 'swagger-ui-react'

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
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      </div>
    </main>
  )
}
