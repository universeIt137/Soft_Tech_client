import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";




const AddClient = () => {





    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const chairman_name = form.chairman_name.value;
        const chairmanSpeech = form.description.value;
        const youtubeVideos = form.youtubeVideos.value;

        const image = form.image.files[0];
        const selectedVideo = form.video.files[0];




        let chairmanImageUrl = ''
        if (!image?.name) {
            chairmanImageUrl = ''
        } else {
            chairmanImageUrl = await uploadImg(image);

        }

        let videoUrl = '';
        if (selectedVideo) {
            videoUrl = await uploadVide(selectedVideo);
        }



        setLoading(true);

        // Simulate form submission
        try {
            const data = { chairman_name, chairmanSpeech, chairmanImageUrl, youtubeVideos, videoUrl }

            console.log(data);
            axiosPublic.post(`/chairman`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Data has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } catch (error) {
            console.error("Error submitting form:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Add Client</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Upload Client's Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Client's Name</label>
                        <input type="text" name="chairman_name" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Company Name</label>
                        <input type="text" name="youtubeVideos" className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="">Address</label>
                        <input type="text" name="youtubeVideos" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    

                </div>

                

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>

            
        </div>
    );
};

export default AddClient;
