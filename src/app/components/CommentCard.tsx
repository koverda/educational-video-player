import React from 'react';
import { VideoComment } from '/src/app/common/types'

export interface CommentCardProps {
    comment: VideoComment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment-header">
                <span className="comment-user-id">{comment.user_id}</span>
                <span className="comment-created-at">{new Date(comment.created_at).toLocaleString()}</span>
            </div>
            <div className="comment-content">
                {comment.content}
            </div>
        </div>
    );
};

export default CommentCard;