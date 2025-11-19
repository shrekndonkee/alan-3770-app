import { sessionHooks, type Handler } from "@kinde-oss/kinde-auth-sveltekit"; 

export const handle: Handler = async ({ event, resolve }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	await sessionHooks({ event: event as any });
	
	const response = await resolve(event);
	return response;
};