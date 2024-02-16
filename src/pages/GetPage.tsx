import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../store/configureStore.ts";
import {useEffect} from "react";
import {getPostsFetch} from "../slices/getSlice.ts";
import Post from "../component/Post.tsx";

function GetPage() {
    const posts = useSelector((state: RootState) => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsFetch())
    }, [dispatch]);
    console.log(posts,'posts')
    return (
        <div className={" bg-green-100"}>

            <p className={"font-thin text-center pt-5 underline underline-offset-[1rem] text-5xl"}>GET POSTS USING REDUX SAGA</p>
            <div className={" mt-16  flex flex-wrap "}>
                {
                    posts.map((p,index) => (
                        <div className={"w-1/3  my-2"}>
                            <div className={"m-2  bg-green-200 h-full rounded-2xl py-2  px-5 border-2 border-green-600 "}>
                                <Post key={index} userId={p.userId} id={p.id} title={p.title} body={p.body}/>

                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default GetPage;