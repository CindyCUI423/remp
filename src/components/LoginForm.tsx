'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, {useState} from "react";
import {login} from "@/apis/auth";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {AlertCircleIcon} from "lucide-react";


export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorAlert, setErrorAlert] = useState("");

    const router = useRouter();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const result = await login({email, password});
            const token = result?.token;
            localStorage.setItem("token", token);
            router.push("/");

        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            setErrorAlert(message);
            console.log(error)
        }
    }


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="justify-center">
                    <CardTitle className="text-6xl">Login to your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" placeholder="Enter your password" value={password} required onChange={e => setPassword(e.target.value)} />
                            </div>

                            {errorAlert && (
                                <Alert variant="destructive" className="bg-[#ffe4e4]">
                                    <AlertCircleIcon />
                                    <AlertTitle>{errorAlert}</AlertTitle>
                                </Alert>
                            )}

                            <div className="flex flex-col gap-3">
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                {/*<Button variant="outline" className="w-full">*/}
                                {/*    Login with Google*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
