"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CreateTeam() {
  const { user, error, isLoading }: any = useUser();
  const [teamname, setTeamname] = useState("");

  const createTeam = useMutation(api.teams.CreateTeam);
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamname,
      createdBy: user.email,
    }).then((resp) => {
      if (resp) {
        toast("Team created successfully!");
        router.push("/dashboard");
      }
    });
  };
  return (
    <div className="md:px-16 my-16 px-6 flex flex-col items-center md:block">
      <Image src="/logo.svg" alt="logo" width={200} height={200} />

      <div className="flex flex-col items-center mt-8">
        <h2 className="font-bold md:text-4xl text-2xl py-3">
          What should we call your team?
        </h2>

        <h3 className="text-gray-500">You can change this later</h3>
        <div className="mt-7 md:w-[40%] w-full">
          <label htmlFor="teamname" className="text-gray-500">
            Team Name
          </label>
          <Input
            placeholder="Team Name"
            id="teamname"
            className="mt-2"
            onChange={(e) => setTeamname(e.target.value)}
          />
        </div>
        <Button
          className="bg-blue-500 mt-9 md:w-[40%] w-full"
          disabled={teamname?.length == 0}
          onClick={createNewTeam}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
