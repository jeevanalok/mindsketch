"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/sidenav";
import { FileListContext } from "@/app/_context/FilesListContext";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { user, error, isLoading }: any = useUser();
  const [fileList_, setFileList_] = useState();
  const router = useRouter();
  const convex = useConvex();

  useEffect(() => {
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });

    if (!result?.length) {
      router.push("teams/create");
    }
  };

  return (
    <FileListContext.Provider value={{ fileList_, setFileList_ }}>
      <div className="grid grid-cols-4">
        <div className=" h-screen w-72 fixed">
          <SideNav />
        </div>
        <div className="col-span-4 ml-72">{children}</div>
      </div>
    </FileListContext.Provider>
  );
}

export default DashboardLayout;
