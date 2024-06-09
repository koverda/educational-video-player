'use client';

import VideoPlayer from '../../components/VideoPlayer';
import { useEffect, useRef, useState } from 'react';
import videojs from "video.js";
import { getUserVideos, getVideoComments } from "../../common/api";
import VideoCard from "../../components/VideoCard";
import { VideoComment } from "../../common/types";
import CommentList from "../../components/CommentList";
import AddComment from "../../components/AddComment";
import { USER_ID } from "../../common/fakeauth";

interface Video {
    id: string;
    created_at: string;
    video_url: string;
    user_id: string;
    description: string;
    title: string;
    num_comments: number;
}

export default function Page({ params }: { params: { id: string } }) {
    const [videos, setVideos] = useState<Video[]>([]);
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    const [videoComments, setVideoComments] = useState<VideoComment[]>([]);

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2],
        sources: [{
            src: currentVideo?.video_url,
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    const handleCommentAdded = async () => {
        const videoComments = await getVideoComments(params.id);
        setVideoComments(videoComments);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const userVideos = await getUserVideos(USER_ID);
                setVideos(userVideos);
                const selectedVideo = userVideos.find(video => video.id === params.id);
                setCurrentVideo(selectedVideo || null);
                const videoComments = await getVideoComments(selectedVideo.id);
                setVideoComments(videoComments);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
            }
        }
        fetchData();
    }, [params.id]);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 mb-4">
            <div className="lg:col-span-3">
                {currentVideo && (
                    <>
                        <h1 className="text-2xl font-bold mb-4">{currentVideo.title}</h1>
                        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
                        <div className="mt-4">
                            <p><strong>Uploaded by:</strong> {currentVideo.user_id}</p>
                            <p><strong>Uploaded on:</strong> {new Date(currentVideo.created_at).toLocaleDateString()}</p>
                            <p><strong>Description:</strong> {currentVideo.description}</p>
                        </div>
                    </>
                )}
                <div className="space-y-4 mt-4">
                    <h2>Comments - {videoComments.length}</h2>
                    <AddComment videoId={currentVideo?.id} onCommentAdded={handleCommentAdded} />
                    <CommentList videoComments={videoComments}/>
                </div>
            </div>
            <div className="lg:col-span-1">
                <h2 className="text-xl font-bold mb-4">Other Videos</h2>
                <div className="space-y-4">
                    {videos.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
};
