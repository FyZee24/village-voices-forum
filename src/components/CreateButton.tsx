import { useState } from "react";
import { Plus, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreatePostForm } from "./CreatePostForm";
import { CreatePollForm } from "./CreatePollForm";

export function CreateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [createType, setCreateType] = useState<"post" | "poll" | null>(null);

  const handleCreateTypeSelect = (type: "post" | "poll") => {
    setCreateType(type);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCreateType(null);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-village-green to-village-warm hover:from-village-green/90 hover:to-village-warm/90 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="icon"
      >
        <Plus className="h-6 w-6 text-white" />
      </Button>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          {!createType ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-village-green">
                  What would you like to create?
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <Button
                  onClick={() => handleCreateTypeSelect("post")}
                  className="h-20 flex flex-col gap-2 bg-village-light hover:bg-village-green hover:text-white transition-all"
                  variant="outline"
                >
                  <FileText className="h-6 w-6" />
                  <span>Create Post</span>
                </Button>
                <Button
                  onClick={() => handleCreateTypeSelect("poll")}
                  className="h-20 flex flex-col gap-2 bg-village-light hover:bg-village-green hover:text-white transition-all"
                  variant="outline"
                >
                  <BarChart3 className="h-6 w-6" />
                  <span>Create Poll</span>
                </Button>
              </div>
            </>
          ) : createType === "post" ? (
            <CreatePostForm onClose={handleClose} />
          ) : (
            <CreatePollForm onClose={handleClose} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}