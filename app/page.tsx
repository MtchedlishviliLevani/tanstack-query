"use client";
import Form from "@/app/components/Form";
import Post from "@/app/components/Post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { fetchPosts, addPost } from "@/app/lib/client";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  // const [shouldFetch, setShoudFetch] = useState(false);
  const { data: posts, error, isLoading, isPending, isSuccess, status } = useQuery({
    // Uniquely identifies and caches the query.
    queryKey: ["posts"],
    // Async function that fetches the data.
    queryFn: fetchPosts,
    staleTime: 1000*30, // ✅ 5 minutes: considered "fresh", no refetch
    gcTime: 1000 *60*10, // ✅ 10 minutes: stays in memory when unused
    // refetchOnMount: true, // ✅ Don't refetch on remount
    // select:data=>data.filter((title)=>title.title==="Getting Started with Next.js"),
    // enebled
    // enabled: !false,
    // Defines how long the cached data is considered fresh (in milliseconds).
    //  After the staleTime expires, the query will refetch when it is used again.
    // staleTime:60000,
    // gcTime: 1000,
    // refetchInterval:5000
  });


  // Hook to get access to the query client instance
    const queryClient = useQueryClient();
    


  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: (newPost) => {
      setShowForm(false);
      setNewPost({ title: "", body: "" });
      console.log(newPost)
      // Invalidate and refetch posts
      // triggers re-fetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });


  function handleOnChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(newPost);
  };

  if (isLoading) return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center text-2xl font-semibold text-gray-700">Loading posts...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center text-2xl font-semibold text-red-600">Error loading posts</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog Posts</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-8 px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          {showForm ? "Cancel" : "Add New Post"}
        </button>

        {showForm && (
          <Form handleSubmit={handleSubmit} handleOnChange={handleOnChange} newPost={newPost} />

        )}
        <div className="space-y-6">
          {posts?.map(({ id, title, body, createdAt }) => (
            <div key={id}>
              <Post title={title} body={body} createdAt={createdAt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
