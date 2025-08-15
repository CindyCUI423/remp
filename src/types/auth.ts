
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    data: {
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

}

