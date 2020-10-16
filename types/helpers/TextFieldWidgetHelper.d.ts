import * as Java from "../java";
import * as Minecraft from "../minecraft";

declare class TextFieldWidgetHelper extends Java.JObject {
    constructor(t: Minecraft.TextFieldWidget);

    getRaw(): Minecraft.TextFieldWidget;
    getText(): string;
    getWidth(): number;
    getX(): number;
    getY(): number;
    setEditable(edit: boolean): TextFieldWidgetHelper;
    setEditableColor(color: number): TextFieldWidgetHelper;
    setPos(x: number, y: number): void;
    setText(text: string): TextFieldWidgetHelper;
    setUneditableColor(color: number): TextFieldWidgetHelper;
    setWidth(width: number): TextFieldWidgetHelper;
}

export default TextFieldWidgetHelper;
