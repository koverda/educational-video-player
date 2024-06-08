import React from 'react';
import { VideoCardProps } from "../common/types";

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    return (
        <div className="border p-4 mb-4">
            <img
                src={video.video_url}
                alt={video.title}
                className="w-full"
            />
            <h2 className="text-lg font-bold mt-2">{video.title}</h2>
            <p>{video.user_id}</p>
            <p>{new Date(video.created_at).toLocaleDateString()}</p>
            <p>{video.num_comments}</p>
        </div>
    );
};

export default VideoCard;