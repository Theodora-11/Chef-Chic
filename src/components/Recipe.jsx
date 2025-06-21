import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {
  return(

    <section className="result-ingredients">
      <h2 className="title-recipe">Chef Chic Recommends:</h2>
      <ReactMarkdown>{props.result}</ReactMarkdown>
    </section>
  )
}