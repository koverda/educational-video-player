'use client';

import VideoPlayer from '../../components/VideoPlayer';
import { useEffect, useRef, useState } from 'react';
import videojs from "video.js";

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
    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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

    return (
        <div className="p-4">
            {/*<h1 className="text-2xl font-bold mb-4">{video.title}</h1>*/}
            <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
            {/*<div className="mt-4">*/}
            {/*    <p><strong>Uploaded by:</strong> {video.user_id}</p>*/}
            {/*    <p><strong>Uploaded on:</strong> {new Date(video.created_at).toLocaleDateString()}</p>*/}
            {/*    <p><strong>Description:</strong> {video.description}</p>*/}
            {/*    <p><strong>Comments:</strong> {video.num_comments}</p>*/}
            {/*</div>*/}
        </div>
    );
};
