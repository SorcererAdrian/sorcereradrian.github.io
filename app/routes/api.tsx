import type { Route } from './+types/api'
import { ApiReferenceReact } from '@scalar/api-reference-react'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'API' }]
}

export default function Home() {
  return (
    <ApiReferenceReact
      configuration={{
        url: 'https://petstore.swagger.io/v2/swagger.json',
        showDeveloperTools: 'never',
      }}
    />
  )
}
