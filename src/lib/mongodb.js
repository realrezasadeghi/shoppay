import {MongoClient} from "mongodb"

if (!process.env.MONGODB_URI_LOCAL) {
    throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_MONGODB_URI_LOCAL"')
}

const uri = process.env.MONGODB_URI_LOCAL
const options = {}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

export default clientPromise
