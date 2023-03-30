import NextAuth from 'next-auth'
import clientPromise from "@/lib/mongodb";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: "/signin"
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.JWT_SECRET
})
