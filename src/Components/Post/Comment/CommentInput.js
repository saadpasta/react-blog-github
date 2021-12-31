import React, {useState} from "react";
// import SimpleMdeReact from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

import { CommentSubmitButton } from "../Comment";

const Editor = styled(MDEditor)`
  background-color: unset !important;
  box-shadow: unset !important; 
  color: ${(props) => props.theme.text};
  border: ${(props) => props.theme.text} solid 1px;
  border-radius: 10px;
  filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -o-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -ms-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -moz-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -webkit-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
`

export const CommentInput = ({updateComments}) => {
  const [value, setValue] = useState("");
  const userToken = localStorage.getItem('githubToken');

  return (
    userToken ?
    <> 
     <Editor value={value} onChange={setValue} height="120" visiableDragbar={false} preview={"edit"} />
     <CommentSubmitButton disabled={value === "" ? true : false} onClick={e => updateComments(e, value)}>
       submit
     </CommentSubmitButton>
    </>
    :   
    <> 
      <Editor value={value} onChange={setValue} height="120" visiableDragbar={false} preview={"edit"} blur/>
      <CommentSubmitButton disabled={true} blur>
        Submit
      </CommentSubmitButton>
    </>

  )

};