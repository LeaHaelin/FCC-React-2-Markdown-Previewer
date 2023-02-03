import React from 'react'

export const Editor = ({ inputText, setInputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className="editor" >
            <h2 className="editor__header box-header">Editor</h2>
            <textarea className='editor__input' id='editor' name="editor" cols="30" rows="40" value={inputText} onChange={inputTextHandler} ></textarea>
        </div>
    )
}
