import { http } from "@/lib/http";
import {LoginRequest, LoginResponse} from "@/types/auth"

export async function login(payload: LoginRequest): Promise<LoginResponse> {
    const result = await http.post<LoginResponse>("/User/login", payload);
    return result.data;
}


export function logout() {}
