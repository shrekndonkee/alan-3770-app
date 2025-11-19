import { handleAuth, sessionHooks } from "@kinde-oss/kinde-auth-sveltekit";
import type { RequestEvent } from "@sveltejs/kit";

export async function GET(requestEvent: RequestEvent) {
	// Decorate the request with session methods before handleAuth uses it
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	await sessionHooks({ event: requestEvent as any });
	return handleAuth(requestEvent);
}