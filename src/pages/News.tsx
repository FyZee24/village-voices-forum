export default function News() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-village-green mb-2">Village News</h1>
        <p className="text-village-earth">Latest updates and announcements</p>
      </div>
      
      <div className="text-center py-12">
        <p className="text-muted-foreground">No news articles available.</p>
        <p className="text-sm text-village-earth mt-2">Check back later for community updates!</p>
      </div>
    </div>
  );
}