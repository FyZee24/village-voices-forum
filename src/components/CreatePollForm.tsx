import { useState } from "react";
import { MapPin, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface CreatePollFormProps {
  onClose: () => void;
}

export function CreatePollForm({ onClose }: CreatePollFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const { toast } = useToast();

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, ""]);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast({
        title: "Missing title",
        description: "Please provide a title for your poll.",
        variant: "destructive",
      });
      return;
    }

    const validOptions = options.filter(opt => opt.trim());
    if (validOptions.length < 2) {
      toast({
        title: "Not enough options",
        description: "Please provide at least 2 poll options.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Poll created!",
      description: "Your poll is now live for the community to vote.",
    });
    
    onClose();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-village-green">Create a New Poll</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        <div>
          <Label htmlFor="poll-title" className="text-village-earth font-medium">
            Poll Question
          </Label>
          <Input
            id="poll-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What would you like to ask the community?"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="poll-description" className="text-village-earth font-medium">
            Description (Optional)
          </Label>
          <Textarea
            id="poll-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide more context for your poll..."
            className="mt-1 min-h-[80px] resize-none"
          />
        </div>

        <div>
          <Label className="text-village-earth font-medium">
            Poll Options
          </Label>
          <div className="space-y-2 mt-1">
            {options.map((option, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="flex-1"
                />
                {options.length > 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeOption(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {options.length < 6 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addOption}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Option
              </Button>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="poll-location" className="text-village-earth font-medium">
            Location (Optional)
          </Label>
          <div className="relative mt-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-village-earth" />
            <Input
              id="poll-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Tag a location"
              className="pl-10"
            />
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
            Create Poll
          </Button>
        </div>
      </form>
    </>
  );
}