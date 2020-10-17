import JObject from "../lang/Object";

declare interface Principal {
    equals(another: JObject): boolean;
    getName(): string;
    hashCode(): number;
    implies(subject: string): boolean;
    toString(): string;
}

export default Principal;
