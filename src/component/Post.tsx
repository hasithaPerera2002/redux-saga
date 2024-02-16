import {PostInterface} from "../interfaces/postInterface.ts";

function Post(post:PostInterface) {
    return (
        <div className={"m-2"}>

            <div className={"text-3xl font-bold mb-4 truncate"}>{post.title}</div>
            <hr className={"border-black"}/>
            <div className={"mt-2"}>{post.body}</div>
        </div>
    );
}

export default Post;