import { colours, transitions } from "@pyjamas/tokens"
import * as React from "react"

type Component<T = {}> = React.FunctionComponent<React.PropsWithChildren<T>>

const rig = function<P>(node: React.ReactNode, props: P) {
  return React.cloneElement(node as React.ReactElement<P>, props)
}

export const Accordion: Component<{
  transition?: keyof typeof transitions
}> = props => {
  const [expanded, setExpanded] = React.useState(false)
  const [title, content] = React.Children.toArray(props.children)
  const riggedTitle = rig(title, {
    toggle: () => setExpanded(!expanded)
  })
  const riggedContent = rig(content, {
    visible: expanded,
    transition: props.transition
  })
  return <div>{[riggedTitle, riggedContent]}</div>
}

export const AccordionTitle: Component<{
  toggle?: () => void
  colour?: keyof typeof colours
}> = props => {
  const colour = {
    color: props.colour ? colours[props.colour] : undefined
  }
  return (
    <h1 style={colour} onClick={props.toggle}>
      {props.children}
    </h1>
  )
}

export const AccordionContent: Component<{
  visible?: boolean
  transition?: keyof typeof transitions
}> = props => {
  const transition = {
    transition: props.transition
      ? transitions[props.transition]
      : transitions.fast
  }
  const visible = (expanded = false) => ({ opacity: expanded ? 1 : 0 })
  return (
    <p style={{ ...transition, ...visible(props.visible) }}>{props.children}</p>
  )
}
