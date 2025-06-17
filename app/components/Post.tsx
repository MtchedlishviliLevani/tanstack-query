import React from 'react'

const Post = ({ title, body, createdAt }: { title: string, body: string, createdAt: string }) => {
    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{body}</p>
            <div className="mt-4 text-sm text-gray-500">
                Posted on: {new Date(createdAt).toLocaleDateString()}
            </div>
        </div>
    )
}

export default Post