<?php
namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        // Fetch posts with user information
        $posts = Post::with('user')->latest()->get();

        // Return to the Inertia 'Home' page with posts
        return inertia('Home', ['posts' => $posts]);
    }

    public function store(PostRequest $request)
    {
        // Handle file upload if image is provided
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('posts', 'public');
        }

        // Insert the new post into the database
        Post::create([
            'user_id' => auth()->id(),
            'image' => $imagePath ?? null,
            'description' => $request->description,
        ]);

        // Return back with success message
        return redirect()->back()->with('success', 'Post created successfully!');
    }
}
