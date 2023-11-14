'use client';

import Giscus from '@giscus/react';

export default function Comment() {
  return (
    <Giscus
      id='comments'
      repo='sebbys/dslayercontent'
      repoId='R_kgDOKeifnA'
      category='General'
      categoryId='DIC_kwDOKeifnM4Ca8cF'
      mapping='pathname'
      term='Welcome to @giscus/react component!'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='dark'
      lang='en'
      loading='lazy'
    />
  );
}
