import React from "react"

const Prototype: React.FC = () => {
  const [prompt, setPrompt] = React.useState("")

  const END_POINT = "http://127.0.0.1:8000/snippet_and_keywords"
  const onSubmit = () => {
    console.log("submitting: " + prompt)
    fetch(`${END_POINT}?prompt=${prompt}`).then(console.log)
  }

  return (
    <>
      <h1>Prototype</h1>
      <p>Tell me what you need</p>
      <input
        type="text"
        placeholder="question?"
        onChange={(e) => setPrompt(e.currentTarget.value)}
        value={prompt}
      />
      <button onClick={onSubmit}>Submit</button>
    </>
  )
}

export default Prototype
