'use client';

import VideoCard from "./components/VideoCard";
import { getUserVideos } from "./common/api"
import { useEffect, useState } from "react";
import { Video } from "./common/types";

const HomePage = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const userVideos = await getUserVideos('string'); // todo: use username
                setVideos(userVideos);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div>Welcome to the Educational Video Player</div>
            <div className="grid grid-cols-1 gap-4 mt-4">
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </main>
    );
}

export default HomePage;