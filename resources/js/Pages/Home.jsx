import React from 'react'
import Createpost from './Createpost'
import Post from './post'
import FlashMessage from './FlashMessage'

function Home({ posts }) {
  return (
    <>

<div className="container my-3 pb-10 pt-10">
      <div className="row justify-content-center">
        <FlashMessage />
        <div className="col-md-7">
          <div className="card card-body rounded-3 shadow-sm create-post">
            <Createpost />
          </div>

          <div className="posts">
            {/* Map over the posts and display each one */}
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home