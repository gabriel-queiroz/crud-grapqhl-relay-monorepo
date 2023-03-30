import { RequestParameters, Variables } from 'relay-runtime'

export const fetchGraphQL = async (
  request: RequestParameters,
  variables: Variables,
  headers = {}
) => {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify({
      query: request.text,
      variables
    })
  })

  return await response.json()
}
