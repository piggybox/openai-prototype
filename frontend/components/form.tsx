interface FormProps {
  prompt: string
  setPrompt: any
  onSubmit: any
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <div>
      <p>Tell me what you want to know</p>
      <input
        type="text"
        placeholder="question?"
        onChange={(e) => props.setPrompt(e.currentTarget.value)}
        value={props.prompt}
        size="100"
      />
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  )
}

export default Form
