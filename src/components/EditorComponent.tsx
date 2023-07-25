import React, { Component } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import { Grid } from "@mui/material";

const editorConfiguration = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "alignment:left",
      "alignment:center",
      "alignment:right",
      "alignment:justify",
      "-",
      "bulletedList",
      "numberedList",
      "|",
      "imageUpload",
      "imageInsert",
      "mediaEmbed",
      "link",
      "|",
      "indent",
      "outdent",
      "blockQuote",
    ],
  },
  shouldNotGroupWhenFull: true,
};

// Editor.defaultConfig = {
// 	toolbar: {
// 		items: [
// 			'bold',
// 			'italic',
// 			'underline',
// 			'strikethrough',
// 			'|',
// 			'alignment',
// 			'undo',
// 			'redo',
// 			'-',
// 			'bulletedList',
// 			'numberedList',
// 			'|',
// 			'imageUpload',
// 			'mediaEmbed',
// 			'link',
// 			'|',
// 			'indent',
// 			'outdent',
// 			'blockQuote'
// 		],
// 		shouldNotGroupWhenFull: true
// 	},
// 	language: 'en'
// };

const EditorComponent = () => {
  return (
    <div className="App">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <h2>Using CKEditor 5 from online builder in React</h2>
          <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor: any) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor: { getData: () => any }) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event: any, editor: any) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event: any, editor: any) => {
              console.log("Focus.", editor);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EditorComponent;
