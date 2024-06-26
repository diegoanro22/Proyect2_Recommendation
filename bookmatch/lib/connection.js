import neo4j from "neo4j-driver"

const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env

let cachedDriver = null;

const connectToNeo4j = async () => {
    console.log("d")
    if(!NEO4J_URI || !NEO4J_USERNAME || !NEO4J_PASSWORD) throw new Error("Missing Neo4j credentials");

    if (cachedDriver) {
        console.log('Using cached Neo4j driver');
        return cachedDriver;
    }
    const driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));

    cachedDriver = driver;
    const serverInfo = await driver.getServerInfo()
    console.log('Connection established')
    console.log(serverInfo)
    return driver;
}

export default connectToNeo4j;