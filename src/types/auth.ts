
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: string;
        userName: string;
        email: string;
        role: string;
        agentName: string | null;
    };
    listingCaseIds: string[];
}

