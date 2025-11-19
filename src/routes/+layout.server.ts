import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
  // Check if user is authenticated (verifies access token validity)
  const isAuthenticated = await kindeAuthClient.isAuthenticated(
    request as unknown as SessionManager
  );

  let user = null;
  if (isAuthenticated) {
    // Retrieve session data (user profile)
    user = await kindeAuthClient.getUser(request as unknown as SessionManager);
    // Example output: { given_name: 'Dave', id: 'kp_12345678910', email: 'dave@smith.com', ... }
  }

  console.log('Layout load - isAuthenticated:', isAuthenticated, 'user:', user);

  return {
    isAuthenticated,
    user
  };
}