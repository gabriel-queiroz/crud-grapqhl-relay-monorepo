import 'styled-components'
import { MonorepoTheme } from '../theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MonorepoTheme {}
}
