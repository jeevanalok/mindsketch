"use client";
import { api } from "@/convex/_generated/api";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useConvex, useMutation, useQuery } from "convex/react";
import { useEffect } from "react";
import Header from "./_components/Header";
import Filelist from "./_components/Filelist";

function Dashboard() {
  const { user, error, isLoading }: any = useUser();
  const convex = useConvex();

  const getUser = useQuery(api.user.getUser, {
    email: user?.email,
  });

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, { email: user?.email });

    console.log(result);

    if (!result?.length) {
      createUser({
        name: user.name,
        email: user.email,
        image: user.picture,
      }).then((resp) => console.log(resp));
    }
  };

  const createUser = useMutation(api.user.createUser);
  useEffect(() => {
    if (error) {
      alert("Error");
    }
    if (user) {
      checkUser();
    }

    console.log(user);
  }, []);
  return (
    <div className="p-8">
      <Header />
      <Filelist />
    </div>
  );
}

export default withPageAuthRequired(Dashboard);
