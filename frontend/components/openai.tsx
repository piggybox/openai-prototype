import React from "react"

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
    resultElement = (
      <div>
        Here are the results
        <div>Query: {query}</div>
      </div>
    )
  }

  return (
    <>
      <h1>Prototype</h1>
      <div>--------</div>
      <p>Tell me what you want to know</p>
      <input
        type="text"
        placeholder="question?"
        onChange={(e) => setPrompt(e.currentTarget.value)}
        value={prompt}
        size="100"
      />
      <button onClick={onSubmit}>Submit</button>
      <div>-------</div>
      {resultElement}
    </>
  )
}

export default Prototype
