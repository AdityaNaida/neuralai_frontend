// components/MarkdownRenderer.tsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

interface Props {
  content: string;
}

// Create a separate component for the code block with copy functionality
const CodeBlock: React.FC<{
  className?: string;
  children: React.ReactNode;
  inline?: boolean;
}> = ({ className, children, inline }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textContent = children?.toString() || "";
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return !inline ? (
    <div className="relative w-full">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-gray-200 px-2 py-1 text-xs rounded hover:bg-gray-300 z-10"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className={`${className} overflow-x-auto max-w-full`}>
        <code className="block">{children}</code>
      </pre>
    </div>
  ) : (
    <code className={`${className} break-words`}>{children}</code>
  );
};

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div className="w-full min-w-0 overflow-hidden">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code(props) {
            const { className, children } = props;
            // Check if it's an inline code element
            const inline = !className?.includes("language-");

            return (
              <CodeBlock className={className} inline={inline}>
                {children}
              </CodeBlock>
            );
          },
          // Handle other elements that might cause overflow
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full">{children}</table>
            </div>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt} className="max-w-full h-auto" />
          ),
          p: ({ children }) => <p className="break-words">{children}</p>,
        }}
        // className="prose prose-sm max-w-none break-words"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
