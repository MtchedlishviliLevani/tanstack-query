interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}
export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch("/api/posts");
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("There is something wrong while fetching posts");
    return [];
  }
}

// POST request (adding a new post)
export async function addPost(postData: { title: string; body: string }): Promise<Post | undefined> {
  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) throw new Error("Failed to post");
    return await response.json();
  } catch (error) {
    console.error("There was an error creating the post");
  }
}