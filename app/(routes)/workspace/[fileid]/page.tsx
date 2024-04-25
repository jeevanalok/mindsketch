"use client";
import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/Filelist";
import Whiteboard from "../_components/Whiteboard";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Workspace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE | any>();
  const convex = useConvex();
  useEffect(() => {
    params.fileid && getFileData();
  }, []);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: params.fileid,
    });
    setFileData(result);
  };
  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* layout */}

      {/* Document */}
      <div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <div className="h-screen overflow-x-scroll">
              <Editor
                onSaveTrigger={triggerSave}
                fileId={params.fileid}
                fileData={fileData}
              />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            {/* whiteboard */}
            <div className="h-screen">
              <Whiteboard
                onSaveTrigger={triggerSave}
                fileId={params.fileid}
                fileData={fileData}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default Workspace;
