import { Color, FontSize, Radius, BreakPoint, Spacing } from '../tokens'

export interface MonorepoTheme {
  fontSize: typeof FontSize
  radius: typeof Radius
  breakPoint: typeof BreakPoint
  spacing: typeof Spacing
  color: typeof Color
}
