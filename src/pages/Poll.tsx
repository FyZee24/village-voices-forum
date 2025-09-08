export default function Poll() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-village-green mb-2">Community Polls</h1>
        <p className="text-village-earth">Have your voice heard on village matters</p>
      </div>
      
      <div className="text-center py-12">
        <p className="text-muted-foreground">No active polls at the moment.</p>
        <p className="text-sm text-village-earth mt-2">Use the create button to start a new poll!</p>
      </div>
    </div>
  );
}