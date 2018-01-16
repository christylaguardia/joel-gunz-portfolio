import React from 'react';

function Page(html) {
  // console.log('props in Project', props);
  // console.log('project in Project', project);
  // const path = props.match.params.name;
  // const project = projects.filter(item => item.path === path);
  
  return (
    <div>{html}</div>
  );
}

export default Page;