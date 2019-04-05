import { colours, fonts } from "@pyjamas/tokens"
import * as React from "react"

export type Props = React.PropsWithChildren<{
  colour: keyof typeof colours
}>

export const ExampleElement: React.FunctionComponent<Props> = props => (
  <span style={{ color: colours[props.colour], fontSize: fonts.size.big }}>
    {props.children}
  </span>
)
