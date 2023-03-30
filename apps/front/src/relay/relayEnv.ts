import { fetchGraphQL } from './fetchGraphql'
import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables
} from 'relay-runtime'

const fetchRelay = (request: RequestParameters, variables: Variables) => {
  return fetchGraphQL(request, variables)
}

const env = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})

export default env
