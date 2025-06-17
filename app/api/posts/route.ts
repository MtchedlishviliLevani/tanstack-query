import { NextResponse } from 'next/server';
import { readPosts,writePosts,Post } from '@/app/lib/server';
export async function GET() {
  try {
    // return html format
  //  return new NextResponse('<h1>Hi</h1>', { headers: { 'Content-Type': 'text/html' } })

  // plain text format
  //   return new NextResponse('This is plain text', {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'text/plain',
  //   },
  // });

    const posts = await readPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, body: postBody } = body;

    if (!title || !postBody) {
      return NextResponse.json(
        { error: 'Title and body are required' },
        { status: 400 }
      );
    }

    const posts = await readPosts();
    const newPost: Post = {
      id: posts.length + 1,
      title,
      body: postBody,
      createdAt: new Date().toISOString(),
    };

    await writePosts([...posts, newPost]);
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
} 