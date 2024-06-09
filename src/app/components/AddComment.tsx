import React, { useState } from 'react';
import { createComment } from '/src/app/common/api';
import { USER_ID } from "../common/fakeauth";

interface AddCommentProps {
    videoId: string;
    onCommentAdded: () => void;
}

const AddComment: React.FC<AddCommentProps> = ({ videoId, onCommentAdded }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        console.log("comment submit")
        event.preventDefault();

        try {
            void await createComment({ video_id: videoId, user_id: USER_ID, content });
            onCommentAdded();
            setContent('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-md bg-white">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </label>
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add Comment
            </button>
        </form>
    );
};

export default AddComment;
