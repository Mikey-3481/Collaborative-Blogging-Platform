import { useRef, useEffect } from "react";
import Quill from "quill";

function useQuillEditor(selector, options) {
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill(selector, options);
    }
  }, [selector, options]);

  return quillRef;
}

export default useQuillEditor;
