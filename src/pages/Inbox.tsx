export default function Inbox() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-village-green mb-2">Inbox</h1>
        <p className="text-village-earth">Your private messages and notifications</p>
      </div>
      
      <div className="text-center py-12">
        <p className="text-muted-foreground">Your inbox is empty.</p>
        <p className="text-sm text-village-earth mt-2">New messages will appear here!</p>
      </div>
    </div>
  );
}