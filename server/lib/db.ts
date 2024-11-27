import mongoose from "mongoose";

const str = 'mongodb+srv://mjejeee:HzzfuAVZOsKMmElY@cluster0.xadtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const MONGODB_URI = process.env.MONGODB_URI ? str : '';

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cached = globalThis.mongoose;
const options: any = {
    useNewUrlParser: true,      // 
    useUnifiedTopology: true
};
//TODO: any check

if (!cached) {
    // Next.js의 경우 개발할 땐 파일을 저장할 때마다 자바스크립트 파일들이 재실행되기 때문에 MongoClient.connect가 동시에 여러 개 실행될 수 있다.
    // 이 경우 DB 입출력이 매우 느려지기 때문에, 이를 방지하기 위해 개발 중일 때 전역변수 global에 보관
    cached = globalThis.mongoose = {conn: null, promise: null};
}

async function connectToDatabase(params) {  // MongDB 연결 한번만 시도하고, 이미 연결되어 있으면 재사용
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.conn) {
        cached.promise = mongoose.connect( MONGODB_URI, options)
        .then((mongooseInstance) => mongooseInstance)
        .catch((error) => {
            console.log(`Error connecting to MongoDB : ${error}`);
            throw new Error('MongoDB connection Error');
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;
