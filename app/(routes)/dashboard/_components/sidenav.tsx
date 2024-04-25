import { useUser } from "@auth0/nextjs-auth0/client";
import SideNavTopSection, { TEAM } from "./sidenavTopSection";
import SideNavBottomSection from "./sidenavBottomSection";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { FileListContext } from "@/app/_context/FilesListContext";

function SideNav() {
  const { user, error, isLoading }: any = useUser();
  const [activeTeam, setActiveTeam] = useState<TEAM | any>();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();
  const { fileList_, setFileList_ } = useContext(FileListContext);
  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);
  const onFileCreate = (fileName: string) => {
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteboard: "",
    })
      .then((resp) => {
        if (resp) {
          getFiles();
          toast("File created successfully");
        }
      })
      .catch((e) => toast("Error while creating file"));
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });

    setFileList_(result);
  };

  return (
    <div className=" h-screen fixed w-72 border p-6 flex flex-col ">
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeamInfo: TEAM) =>
            setActiveTeam(activeTeamInfo)
          }
        />
      </div>

      <div>
        <SideNavBottomSection onFileCreate={onFileCreate} />
      </div>
    </div>
  );
}

export default SideNav;
