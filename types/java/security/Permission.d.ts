import Serializable from "../io/Serializable";
import JObject from "../lang/Object";
import Guard from "./Guard";
import PermissionCollection from "./PermissionCollections";

declare class Permission extends JObject implements Guard, Serializable {
    constructor(name: string);

    checkGuard(object: JObject): void;
    equals(obj: JObject): boolean;
    getActions(): string;
    getName(): string;
    hashCode(): number;
    implies(permission: Permission): boolean;
    newPermissionCollection(): PermissionCollection;
    toString(): string;
}

export default Permission;