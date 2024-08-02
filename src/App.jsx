import Markdown from "react-markdown";
import './markdown.css';

function App() {
  const markdown = '# Hi, *Pluto*!'
  return (
    <>
      <div className="p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
      </div>
      <div className="markdown-content">
        <Markdown>{markdown}</Markdown>
      </div>
      <div>test</div>
    </>
  )
}

export default App