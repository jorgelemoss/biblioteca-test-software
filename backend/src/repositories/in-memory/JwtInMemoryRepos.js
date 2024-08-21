/** Used only for @Tests (reference: JwtPrismaRepository.js) */

export class JwtInMemoryRepos {

    #refreshToken = ""

    removeToken() {
        const token = this.#refreshToken = ""

        return token
    }

    storeToken(refreshToken) {
        const token = this.#refreshToken = refreshToken

        return token
    }
}