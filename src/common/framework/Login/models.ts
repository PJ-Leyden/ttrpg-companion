export interface IUserLoginForm {
	username: string;
	password: string;
}

export const initialUserLoginForm: IUserLoginForm = {
	username: "",
	password: "",
};

export interface IUserSignupForm {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	reTypePassword: string;
}

export const initialUserSignupForm: IUserSignupForm = {
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	password: "",
	reTypePassword: "",
};
