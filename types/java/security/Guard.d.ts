import JObject from "../lang/Object";

declare interface Guard {
    checkGuard(onject: JObject): void;
}

export default Guard;
