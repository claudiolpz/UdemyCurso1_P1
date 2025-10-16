export interface TypeJwtPayload {
    user: {
        _id: string
        name: string
        email: string
        handle: string
    }
    iat: number
    exp: number
}