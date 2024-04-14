export class HttpError extends Error {
    public readonly code: number;

    public constructor(message: string, code: number) {
        super(message);
        this.code = code;
    }
}
