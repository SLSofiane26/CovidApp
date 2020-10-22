import React, { Fragment, memo, useEffect, useState } from 'react';
import CovidSearch from './CovidSearch';
import Pagination from './Pagination';
import Posts from './Posts';

let CovidPost = memo(function CovidPost(props) {
  let [posts, setPosts] = useState([]);
  let [currentPage, setcurrentPage] = useState(1);
  let [postsPerPage] = useState(11);

  useEffect(() => {
    setPosts(props.data);
  }, [props, setPosts]);

  let indexofLast = currentPage * postsPerPage;
  let indexofFirst = indexofLast - postsPerPage;
  let currentPost = posts.slice(indexofFirst, indexofLast);

  let paginateB = (number) => setcurrentPage(number);

  return (
    <Fragment>
      <CovidSearch />
      <Posts posts={currentPost} />
      <Pagination
        postPerpage={postsPerPage}
        total={posts.length}
        paginate={paginateB}
      />
    </Fragment>
  );
});

export default CovidPost;
