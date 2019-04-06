import { css, jsx } from "@emotion/core"
import { colours, fonts } from "@pyjamas/tokens"
import * as React from "react"

export type Props = React.PropsWithChildren<{
  colour: keyof typeof colours
}>

const stylesheet = (props: Props) =>
  css({
    color: colours[props.colour],
    fontSize: fonts.size.big
  })

export const ExampleComponent: React.FunctionComponent<Props> = props => (
  <span css={stylesheet(props)}>{props.children}</span>
)
