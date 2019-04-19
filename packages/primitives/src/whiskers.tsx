import { colours } from "@pyjamas/tokens"
import { Component, h, Prop } from "@stencil/core"

@Component({ tag: "pjs-whiskers" })
export class Whiskers {
  @Prop() colour?: "positive" | "negative"
  render() {
    return <span style={{ color: colours[this.colour!] }}>=^.^=</span>
  }
}
