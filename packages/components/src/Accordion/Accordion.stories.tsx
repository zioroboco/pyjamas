import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Accordion, AccordionContent, AccordionTitle } from "./Accordion"

const strings = {
  title: `Accordion`,
  content:
    `The accordion is a graphical control element comprising a vertically ` +
    `stacked list of items, such as labels or thumbnails. Each item can be ` +
    `"expanded" or "collapsed" to reveal the content associated with that item.`
}

storiesOf("Accordion", module)
  .add("With default animation and colour", () => (
    <Accordion>
      <AccordionTitle>{strings.title}</AccordionTitle>
      <AccordionContent>{strings.content}</AccordionContent>
    </Accordion>
  ))
  .add("With slow animation", () => (
    <Accordion transition="slow">
      <AccordionTitle>{strings.title}</AccordionTitle>
      <AccordionContent>{strings.content}</AccordionContent>
    </Accordion>
  ))
  .add("With colour", () => (
    <Accordion>
      <AccordionTitle colour="negative">{strings.title}</AccordionTitle>
      <AccordionContent>{strings.content}</AccordionContent>
    </Accordion>
  ))
  .add("With a11y violation", () => (
    <Accordion>
      <AccordionTitle colour="positive">{strings.title}</AccordionTitle>
      <AccordionContent>{strings.content}</AccordionContent>
    </Accordion>
  ))
