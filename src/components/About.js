import React from 'react';

export default function About() {
  return (
    <div>
      <p>Hi I'm Joel and I like to ask interesting questions!</p>
      <p>503-901-6156</p>
      <p><a href="mailto:joel.gunz@gmail.com">joel.gunz@gmail.com</a></p>
      <a className="button"
        href="https://www.linkedin.com/in/joelgunz"
        rel="noopener noreferrer"
        target="_blank">LinkedIn
      </a>
      <a className="button"
        href="https://www.facebook.com/alfredhitchcockgeek"
        rel="noopener noreferrer"
        target="_blank">Facebook
      </a>
      <a className="button"
        href="https://www.instagram.com/jtgunz"
        rel="noopener noreferrer"
        target="_blank">Instagram
      </a>
      <a className="button"
        href="https://twitter.com/joelgunz" rel="noopener noreferrer"
        target="_blank">Twitter</a>
    </div>
  );
}