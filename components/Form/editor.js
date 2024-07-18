import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function EditorX(props) {
  const editorRef = useRef(null);
  const getData = (content, editor) => {
    props.onData({ [editor.id]: editorRef.current.getContent() });
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 200,
          menubar: false,
          plugins: [],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        id={props.name}
        onKeyUp={getData}
        {...props}
      />
    </>
  );
}
