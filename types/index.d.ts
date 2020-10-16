import FChat from "./functions/FChat";
import FConsumer from "./functions/FConsumer";
import FGlobalVars from "./functions/FGlobalVars";
import FKeyBind from "./functions/FKeyBind";

declare global {
    var globalvars: FGlobalVars;
    var chat: FChat;
    var keybind: FKeyBind;
    var consumer: FConsumer;
}

