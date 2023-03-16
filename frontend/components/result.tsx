interface ResultsProps {
  query: string
}

const Results: React.FC<ResultsProps> = (props) => {
  return (
    <>
      <div>
        Here are the results
        <div>Query: {props.query}</div>
      </div>
    </>
  )
}

export default Results
