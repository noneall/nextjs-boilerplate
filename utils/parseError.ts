/* parse Error object into plain JSON object */
export const parseError = (e: any) => {
    try {
        return JSON.parse(JSON.stringify(e, null, 4))
    } catch {
        return e
    }
}
