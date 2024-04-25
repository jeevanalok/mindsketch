import React, { useEffect, useState } from "react";
import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export interface TEAM {
  createdBy: String;
  teamName: String;
  _id: String;
}

function SideNavTopSection({ user, setActiveTeamInfo }: any) {
  const menu = [
    { id: 1, name: "Create Team", path: "/teams/create", icon: Users },
    { id: 1, name: "Settings", path: "", icon: Settings },
  ];

  useEffect(() => {
    user && getTeamList();
  }, [user]);
  const convex = useConvex();
  const [teamList, setTeamList] = useState<TEAM[]>();
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  useEffect(() => {
    activeTeam && setActiveTeamInfo(activeTeam);
  }, [activeTeam]);
  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });

    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const router = useRouter();

  const onMenuClick = (item: any) => {
    router.push(item.path);
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-3 hover:bg-slate-200 rounded-lg p-2 cursor-pointer">
            <Image src={"/logo.svg"} alt="logo" width={60} height={60} />
            <h2 className="flex gap-2 items-center font-bold text-lg">
              {activeTeam?.teamName} <ChevronDown />
            </h2>
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7 p-4">
          {/* Team section */}
          <div>
            {teamList?.map((team, index) => (
              <h2
                key={index}
                onClick={() => setActiveTeam(team)}
                className={`p-2 hover:border-teal-400 hover:border  rounded-lg mb-1 cursor-pointer ${
                  activeTeam?._id == team._id && "bg-teal-600 text-white"
                }`}
              >
                {team.teamName}
              </h2>
            ))}
          </div>

          <Separator className="mt-2" />

          {/* menu options */}
          <div>
            {menu.map((item, index) => (
              <h2
                key={item.id}
                className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer"
                onClick={() => onMenuClick(item)}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </h2>
            ))}
          </div>
          <a href="/api/auth/logout">
            <h2 className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer">
              <LogOut className="h-4 w-4" /> Logout
            </h2>
          </a>

          <Separator className="mt-2" />
          {/* User Info Section */}
          {user && (
            <div className="mt-2 flex items-center gap-2">
              <Image
                src={user.picture}
                alt="user-img"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div>
                <h2 className="text-base font-bold">{user?.nickname}</h2>
                <h2 className="text-sm text-gray-500">{user?.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/* All file button */}
      <Button
        variant={"outline"}
        className="w-full justify-start font-bold gap-2 mt-8 bg-gray-100"
      >
        <LayoutGrid className="h-5 w-5" />
        All Files
      </Button>
    </div>
  );
}

export default SideNavTopSection;
