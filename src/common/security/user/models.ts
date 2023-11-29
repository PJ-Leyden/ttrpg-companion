interface BaseUser {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    jwt?: string;
}

export interface UserState extends BaseUser {
    isLoggedIn: boolean;
}

export interface UserLoggedInPayload extends BaseUser {}
