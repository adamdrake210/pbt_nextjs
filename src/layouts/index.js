import React from 'react';

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    return (
      <div>
        <h1>{frontMatter.title}</h1>
        {content}
        <p>{frontMatter.slug}</p>
        <p>{frontMatter.slug}</p>
      </div>
    );
  };
}
