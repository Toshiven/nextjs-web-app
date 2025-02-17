"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem("user");
        
        if (user) {
            router.push("/dashboard");
        } else {
            router.push("/auth");
        }
    }, []);
    return (
    <html>
        <body>
            
    <p>Redirecting...</p>
        </body>
    </html>

    ) 
}