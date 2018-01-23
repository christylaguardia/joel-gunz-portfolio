import React from 'react';

function Page({ page }) {
  const { title, body } = page;

  return (
    <div>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  );
}

export default Page;