export const counter = $state(
    { count: 0
     }
)

interface User {
    given_name?: string | null
    family_name?: string | null
    email?: string | null
    picture?: string | null
    id?: string | null
}

export const authState = $state({
    user: null as User | null,
    isAuthenticated: false
})

export function setAuthState(user: User | null, isAuthenticated: boolean) {
    authState.user = user
    authState.isAuthenticated = isAuthenticated
}
