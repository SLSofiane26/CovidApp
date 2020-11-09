import React, { Fragment, memo } from 'react';
import PostsBis from './PostsBis';
import Styled from '../../Style.module.css';

let Posts = memo(function Posts(props) {
  let postBis = [Styled.postBis];
  return (
    <Fragment>
      <div className={Styled.ContainerPostBis}>
        <div className={postBis.join(' ')}>
          <PostsBis data={props.posts} />
        </div>
      </div>
    </Fragment>
  );
});

export default Posts;
