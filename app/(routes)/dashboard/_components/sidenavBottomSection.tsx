import React, { useState } from "react";
import { Archive, Flag, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function SideNavBottomSection({ onFileCreate }: any) {
  const [fileInput, setFileInput] = useState("");
  const menuList = [
    { id: 1, name: "Getting Started", icon: Flag, path: "" },
    { id: 2, name: "Github ", icon: Github, path: "" },
    { id: 3, name: "Archive", icon: Archive, path: "" },
  ];
  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex gap-2 p-1 text-sm hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <menu.icon className="h-5 w-5" />
          {menu.name}
        </h2>
      ))}

      {/* new file  */}
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start mt-3">
            New File
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              <Input
                className="mt-3"
                placeholder="Enter file name"
                onChange={(e) => setFileInput(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                disabled={fileInput.length === 0}
                onClick={() => onFileCreate(fileInput)}
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SideNavBottomSection;
