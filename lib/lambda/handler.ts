export async function handler(event: string, context: string) {
    console.log("Stage is: "+ process.env.stageName)
    return {
        body: "Hello from lambda\n" + "Lambda env stage: " + process.env.stageName,
        statusCode: 200
    }
}