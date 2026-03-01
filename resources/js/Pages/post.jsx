import React from 'react'
import { LuHeart } from 'react-icons/lu'

const Post = ({ post }) => {
    return (
        <div className="card card-body rounded-3 my-3">
        <div className="post">
            <div className="post-image">
                {/* Display the post image dynamically */}
                <img src={`/storage/${post.image}`} alt="Post image" />            </div>
            <div className="post-details">
                <div className="row align-items-center mt-3">
                    <div className="col-md-6">
                        {/* Display user name and post time */}
                        <h4 className='h6'>{post.user.name} | <span className='text-muted'>{post.created_at}</span></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 className='h6 text-end'><LuHeart /></h4>
                    </div>
                </div>
                {/* Display post description */}
                <p className='text-muted small'>{post.description || "Lorem ipsum dolor sit amet."}</p>
            </div>
        </div>
    </div>
    )
}

export default Post
