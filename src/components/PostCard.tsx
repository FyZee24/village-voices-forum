import { Heart, MessageCircle, Share, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  author: string;
  authorAvatar?: string;
  title: string;
  content: string;
  location?: string;
  timestamp: string;
  likes: number;
  comments: number;
  imageUrl?: string;
}

export function PostCard({
  author,
  authorAvatar,
  title,
  content,
  location,
  timestamp,
  likes,
  comments,
  imageUrl,
}: PostCardProps) {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={authorAvatar} alt={author} />
            <AvatarFallback className="bg-village-light text-village-green">
              {author.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-village-earth">{author}</h3>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{timestamp}</span>
            </div>
            {location && (
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3 text-village-warm" />
                <span className="text-xs text-village-warm">{location}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <h2 className="font-semibold text-lg text-village-green mb-2">{title}</h2>
        <p className="text-foreground mb-3 leading-relaxed">{content}</p>
        
        {imageUrl && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Post image" 
              className="w-full h-auto object-cover max-h-96"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-village-earth hover:text-village-accent">
              <Heart className="h-4 w-4 mr-1" />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-village-earth hover:text-village-green">
              <MessageCircle className="h-4 w-4 mr-1" />
              {comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-village-earth hover:text-village-warm">
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}