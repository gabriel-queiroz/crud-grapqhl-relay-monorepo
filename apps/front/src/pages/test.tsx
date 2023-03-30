import React, { Suspense } from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { testQuery } from './__generated__/testQuery.graphql'
const AppQuery = graphql`
  query testQuery {
    users {
      totalPages
    }
  }
`

export const Test = () => {
  const data = useLazyLoadQuery<testQuery>(AppQuery, {})
  console.log(data.users?.totalPages)

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <h2>here</h2>
    </Suspense>
  )
}
