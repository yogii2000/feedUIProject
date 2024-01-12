import Image from "next/image"
import userImg from '../../../public/assets/photo.avif'
import { deletePost } from "../utils/api";
import { fetchPosts } from "../utils/api";
import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";

const PostCard = () => {
    const { data: posts, isLoading, isError, refetch } = useQuery('posts', fetchPosts, { staleTime: 30000 });
    const { mutate: removePost } = useMutation(deletePost, {
        onSuccess: () => {
            refetch()
            toast.success('Successfully removed');
        },
    });
    const handledeletepost = (id) => {
        removePost(id)
    }
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching data</p>;
    }

    return (
        <>
            {
                posts?.products?.map((cval, index) => {
                    return (
                        <div className="bg-white br-10 mb-2 py-3" key={index}>
                            <div className="row m-3">
                                <div className="col-lg-10 col-10">
                                    <div className="d-flex gap-2">
                                        <Image src={userImg} className="br-5" width={40} />
                                        <div>
                                            <h5 className="mb-0">Hardik Dhayan</h5>
                                            <p className="font12"> 2h ago</p>
                                        </div>
                                        <i className="bi bi-caret-right-fill"></i>
                                        <p className="font12">Posted in CAT 2021</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-2">
                                    <div className="d-flex justify-content-end ">
                                        <div className="dropdown ">
                                            <i className="bi bi-three-dots cursor-pointer" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuLink">
                                                <li onClick={() => { handledeletepost(cval.id) }}><p className="dropdown-item mb-0 p-1 cursor-pointer font12"  >Delete</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 fw-normal font14">{cval.title}</p>
                                <div className="col-lg-12 py-2">
                                    <img src={cval.thumbnail} className="img-fluid" style={{ minWidth: '100%' }} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-hand-thumbs-up-fill likeclr" ></i>
                                        <i className="bi bi-heart-fill heartclr"></i>
                                        <i className="bi bi-emoji-smile-fill smileclr"></i>
                                        <span className="font12 mx-2 fw-bold">432</span>
                                        <p className="mb-0 font12"><span className="fw-bold">13</span> comments </p>
                                        <i className="bi bi-dot"></i>
                                        <p className="mb-0 font12"><span className="fw-bold">53</span> following</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="row px-4 py-2">
                                <div className="col-lg-4 col-4">
                                    <div className="d-flex gap-1">
                                        <i className="bi bi-hand-thumbs-up iconbold cursor-pointer"></i>
                                        <p className="mb-0 font14 cursor-pointer">Like</p>
                                    </div>
                                </div>
                                <div className="col-lg-4  col-4">
                                    <div className="d-flex justify-content-center gap-1 ">
                                        <i className="bi bi-chat-dots iconbold cursor-pointer"></i>
                                        <p className="mb-0 font14 cursor-pointer">Comment</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="d-flex gap-1 justify-content-end ">
                                        <i className="bi bi-share iconbold cursor-pointer"> </i>
                                        <p className="mb-0 font14 cursor-pointer">Share</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="row mx-3 my-2">
                                <div className="col-lg-12">
                                    <div className="d-flex pos-relative align-items-center">
                                        <Image src={userImg} width={30} className="br-5 left-5 pos-absolute" />
                                        <input type="text " className="px-5 border-grey inputstyle col" placeholder="Add Comments" />
                                        <div className="pos-absolute d-flex gap-2 right-5">
                                            <i className="bi bi-image  "></i>
                                            <p className="mb-0 fw-normal cursor-pointer"> Post</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>

    )
}

export default PostCard