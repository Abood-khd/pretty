'use client'; // Add this line at the top

import React from 'react';
import { remark } from 'remark';
import html from 'remark-html';

const MarkdownRenderer = ({ content }) => {
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    const transformMarkdown = async () => {
      const processedContent = await remark().use(html).process(content);
      setMarkdown(processedContent.toString());
    };

    transformMarkdown();
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default MarkdownRenderer;