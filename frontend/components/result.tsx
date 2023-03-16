interface ResultsProps {
  query: string
}

const Results: React.FC<ResultsProps> = (props) => {
  return (
    <>
      <div>
        <div className={" flex justify-between my-2 mb-6 text-sm"}></div>
        Here are the results
        <div className="bg-blue-200 p-1 text-blue-700 px-3 text-sm rounded-md">
          Query: {props.query}
        </div>
      </div>
    </>
  )
}

export default Results
