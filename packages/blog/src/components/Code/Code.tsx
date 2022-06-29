import React, { useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css';

type Props = {
  children: JSX.Element;
  language: string;
}

export default function Code({ children, language }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}