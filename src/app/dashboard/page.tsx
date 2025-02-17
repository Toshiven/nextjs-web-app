"use client"
import { Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function page() {
   const router = useRouter();

   useEffect(() => {
    const user = localStorage.getItem("user");
    if(!user) router.push("/auth/login");
   }, []);
  return (
  <div>
<Typography variant="h1">
  DASHBOARD 
  </Typography> 
  </div>

  )
    }
