import JObject from "../lang/Object";
import Serializable from "../io/Serializable";

declare abstract class SocketAddress extends JObject implements Serializable {
    constructor();
}

export default SocketAddress;
