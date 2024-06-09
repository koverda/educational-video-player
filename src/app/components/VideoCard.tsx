import React from 'react';
import { Video } from "../common/types";
import Link from "next/link";
import Image from 'next/image'
import { getRandomInt, timeAgo } from "../common/util";

export interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    const randId = getRandomInt(1, 50);

    return (
        <Link href={`/videos/${video.id}`} passHref>

            <div className="p-4 mb-4">
                <Image
                    src={`https://picsum.photos/id/${randId}/300/172`}
                    width={300}
                    height={172}
                    alt={video.title}
                    className="w-full rounded-xl"
                />
                <h2 className="text-lg font-bold mt-2">{video.title}</h2>
                <p>{video.user_id}</p>
                <p>{timeAgo(new Date(video.created_at))}</p>
                <p>{video.num_comments}</p>
            </div>
        </Link>
    );
};

export default VideoCard;