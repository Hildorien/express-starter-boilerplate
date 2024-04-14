export default function getEnv(name: string): string {
    if (!process.env[name]) {
        throw new Error(`${name} is not present on environment variables.`);
    }

    // @ts-ignore
    return process.env[name];
}