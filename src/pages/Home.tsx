import { PostCard } from "@/components/PostCard";

export default function Home() {
  // Mock data for demonstration
  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      title: "Community Garden Update",
      content: "Great news everyone! The community garden project is moving forward. We've secured the lot on Maple Street and are looking for volunteers to help with the initial setup. Join us this Saturday at 9 AM!",
      location: "Maple Street Community Garden",
      timestamp: "2 hours ago",
      likes: 12,
      comments: 5,
    },
    {
      id: 2,
      author: "Mike Rodriguez",
      title: "Lost Cat - Please Help!",
      content: "My cat Whiskers has been missing since yesterday evening. She's a gray tabby with white paws and very friendly. Last seen near the park. Please contact me if you've seen her!",
      location: "Village Park Area",
      timestamp: "4 hours ago",
      likes: 8,
      comments: 3,
    },
    {
      id: 3,
      author: "Emma Chen",
      title: "Local Business Recommendation",
      content: "Just wanted to share how amazing the new bakery on Main Street is! The owner, Mrs. Patterson, makes the most incredible sourdough bread. Perfect for supporting our local businesses!",
      location: "Main Street",
      timestamp: "1 day ago",
      likes: 23,
      comments: 12,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-village-green mb-2">Community Feed</h1>
        <p className="text-village-earth">Stay connected with what's happening in our village</p>
      </div>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            author={post.author}
            title={post.title}
            content={post.content}
            location={post.location}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  );
}