"use client"
import PostCard from "../components/PostCard"
import { useQueryClient, useMutation } from 'react-query';
import { useState } from 'react';
import { useRef } from "react";
import { createPost } from '../utils/api';
import toast from "react-hot-toast";

export default function login() {
  const inputFile = useRef(null)
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('');
  const [image, setimage] = useState('');
  const [imageurl, setimageURL] = useState('')
  const [toggletab, setToggletab] = useState('D')
  const handletoggle = (val) => {
    setToggletab(val)
  }
  const { mutate: addPost } = useMutation(createPost, {
    onSuccess: () => {
      toast.success('Posted');
      queryClient.invalidateQueries('posts')
      setimage('')
      setimageURL('')
    },
  });

  const handleAddPost = () => {
    let thumbnail = imageurl
    addPost({ title, thumbnail });
  };
  const handleremoveimage = () => {
    setimage('')
    setimageURL('')
  }
  const handleimage = () => {
    // 👇️ open file input box on click of another element
    inputFile.current.click();
  };

  const handleinputimage = (e) => {
    setTitle('')
    setimage(e.target.files[0])
    setimageURL(URL.createObjectURL(e.target.files[0]))
  }


  return (
    <>
      <div className="row mt-3 mx-2 overflow-y" style={{ height: "87vh" }}>
        <div className="col-lg-12 col-12 br-10 " >
          <div className="row">
            <div className="col-lg-8">
              <div className="div bg-white mb-2 rounded-top ">
                <div className="border_bottom mt-3">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-6">
                      <div className={`d-flex py-3 ${toggletab === 'D' ? 'border_bottom_active' : ''} cursor-pointer gap-2 justify-content-center`} onClick={() => { handletoggle('D') }}>
                        <i className="bi bi-chat-right"></i>
                        <p className="mb-0">Discussion</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-6">
                      <div className={`d-flex gap-2 cursor-pointer ${toggletab === 'C' ? 'border_bottom_active' : ''} py-3 justify-content-center`} onClick={() => { handletoggle('C') }}>
                        <i className="bi bi-shield-plus"></i>
                        <p className="mb-0">Challenges</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 px-5 my-4">
                    <div className={`d-flex pos-relative ${imageurl ? 'justify-content-between' : ''} align-items-center`}>

                      {imageurl ? <>
                        <div className="div pos-relative">
                          <img src={imageurl} className="img-fluid" width={200} alt="" />
                          <i className="bi bi-x-lg pos-absolute px-1 crossbtn cursor-pointer" onClick={() => { handleremoveimage() }}></i>
                        </div>
                      </> : <>
                        <img src="/assets/photo.avif" width={30} alt="" className="pos-absolute br-5" />
                        <input type="text" placeholder="Add a new post" value={title} onChange={(e) => { setTitle(e.target.value) }} className="inputstyle ps-5" />
                      </>}

                      {title.length > 0 || imageurl ? <><p className="fw-500 post-btn br-5 px-3 py-1 font14 cursor-pointer" onClick={handleAddPost}>Post</p></> : ''}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="line"></div>
                    <div className="row mt-2">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <div className="d-flex gap-2 justify-content-center" onClick={() => { handleimage() }}>
                          <i className="bi bi-image iconbold cursor-pointer"></i>
                          <p className="fw-500 cursor-pointer font14">Photo/video</p>
                          <input type="file" ref={inputFile} onChange={(e) => { handleinputimage(e) }} className="d-none" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-4 mobilehidden">
                        <div className="d-flex gap-2 justify-content-center">
                          <i className="bi bi-pie-chart iconbold cursor-pointer"></i>
                          <p className="fw-500 cursor-pointer font14">Poll</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <div className="d-flex gap-2 justify-content-center">
                          <i className="bi bi-mic iconbold cursor-pointer"></i>
                          <p className="fw-500 cursor-pointer font14">Debate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PostCard />
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}
