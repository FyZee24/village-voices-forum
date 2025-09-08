import { useState } from "react";
import { Image, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface CreatePostFormProps {
  onClose: () => void;
}

export function CreatePostForm({ onClose }: CreatePostFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in both title and content.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Post created!",
      description: "Your post has been shared with the community.",
    });
    
    onClose();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-village-green">Create a New Post</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        <div>
          <Label htmlFor="title" className="text-village-earth font-medium">
            Post Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's happening in the village?"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="content" className="text-village-earth font-medium">
            Content
          </Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts with the community..."
            className="mt-1 min-h-[100px] resize-none"
          />
        </div>

        <div>
          <Label htmlFor="location" className="text-village-earth font-medium">
            Location (Optional)
          </Label>
          <div className="relative mt-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-village-earth" />
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Tag a location"
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label className="text-village-earth font-medium">
            Attach Image (Optional)
          </Label>
          <div className="mt-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <Label
              htmlFor="image-upload"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md cursor-pointer hover:bg-village-light transition-colors"
            >
              <Image className="h-4 w-4" />
              {image ? image.name : "Choose image"}
            </Label>
            {image && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setImage(null)}
                className="ml-2"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-village-green hover:bg-village-green/90"
          >
            Share Post
          </Button>
        </div>
      </form>
    </>
  );
}