import React from "react";
import Auth from "@/components/authentication/Auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import logo from "../../public/images/deep-ai.png";
import Image from "next/image";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex  justify-center items-center h-screen">
      <div className="flex-1 max-w-xl mx-auto">
        <div className="flex flex-col space-y-6 mb-6 items-center">
          <Image src={logo} alt="Alright logo" width={150} height={150} />
          <h1
            className="font-varino text-lg text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            sign in to dashboard
          </h1>
        </div>
        <Auth auhType="login" />
      </div>
    </div>
  );
};

export default LoginPage;
