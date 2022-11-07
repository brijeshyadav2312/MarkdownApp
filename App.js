import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const [ text, setText ] = useState("# Markdown");
  return (
    <div className='main'>
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div className='texts'>
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default App;
