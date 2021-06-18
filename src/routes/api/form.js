export const post = (request) => {
    const formBody = JSON.parse(request.body)
    const email = formBody.email
    const password = formBody.password
    const duns = formBody.duns

    return {
        body: {
            email,
            password,
            duns,
        }
    }
}