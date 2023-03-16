import React from "react"
import Form from "./form"
import Results from "./result"

const Prototype: React.FC = () => {
  const [prompt, setPrompt] = React.useState("")
  const [query, setQuery] = React.useState("")
  const [hasResult, setHasResult] = React.useState(false)

  const END_POINT = "http://127.0.0.1:8000/query"
  const onSubmit = () => {
    console.log("submitting: " + prompt)
    fetch(`${END_POINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult)
  }

  const onResult = (data: any) => {
    setQuery(data.query)
    setHasResult(true)
  }

  let resultElement = null
  if (hasResult) {
    resultElement = <Results query={query}></Results>
  }

  const formElement = (
    <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} />
  )

  return (
    <>
      <h1>Prototype</h1>
      <div>--------</div>
      {formElement}
      <div>-------</div>
      {resultElement}
    </>
  )
}

export default Prototype
