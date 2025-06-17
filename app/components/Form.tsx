import React from 'react'

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  newPost: {
    title: string;
    body: string;
  };
}

const Form = ({ handleSubmit, handleOnChange, newPost }: FormProps) => {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleOnChange}
            className="w-full text-black outline-none px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter post title"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="body"
            name="body"
            value={newPost.body}
            onChange={handleOnChange}
            className="w-full px-4 outline-none text-black py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
            placeholder="Write your post content here..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          Publish Post
        </button>
      </form>
    </div>
  )
}

export default Form
