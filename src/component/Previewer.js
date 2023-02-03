import React from 'react'

export const Previewer = ({ inputText, setInputText, marked }) => {
  const markdown = marked(inputText, { break: true });

  return (
    <div className="previewer" >
      <h2 className="previewer__header  box-header">Previewer</h2>
      <div className="previewer__text" id='preview' dangerouslySetInnerHTML={{ __html: markdown }} ></div>
    </div>
  )
}
