import * as Java from "../java";

import MethodWrapper from "../extensionBase/MethodWrapper";
import ButtonWidgetHelper from "../helpers/ButtonWidgetHelper";
import ItemStackHelper from "../helpers/ItemStackHelper";
import TextFieldWidgetHelper from "../helpers/TextFieldWidgetHelper";
import PositionCommon from "../sharedClasses/PositionCommon";
import RenderCommon from "../sharedClasses/RenderCommon";
import IDraw2D from "./IDraw2D";

interface IScreen extends IDraw2D<IScreen> {
    addButton(x: number, y: number, width: number, height: number, text: string, callback: MethodWrapper<ButtonWidgetHelper, IScreen, Java.JObject>)
    addItem(x: number, y: number, item: ItemStackHelper): RenderCommon.Item;
    addItem(x: number, y: number, item: ItemStackHelper, overlay: boolean): RenderCommon.Item;
    addItem(x: number, y: number, item: ItemStackHelper, overlay: boolean, scale: number, rotation: number): RenderCommon.Item;
    addItem(x: number, y: number, id: string): RenderCommon.Item;
    addItem(x: number, y: number, id: string, overlay: boolean): RenderCommon.Item;
    addItem(x: number, y: number, id: string, overlay: boolean, scale: number, rotation: number): RenderCommon.Item;
    addRect(x1: number, y1: number, x2: number, y2: number, color: number): RenderCommon.Rect;
    addRect(x1: number, y1: number, x2: number, y2: number, color: number, alpha: number): RenderCommon.Rect;
    addRect(x1: number, y1: number, x2: number, y2: number, color: number, alpha: number, rotation: number): RenderCommon.Rect;
    addTextInput(x: number, y: number, width: number, height: number, message: string, onChange: MethodWrapper<string, IScreen, Java.JObject>): TextFieldWidgetHelper;

    close(): void;
    getButtonWidgets(): ButtonWidgetHelper[];
    getScreenClassName(): string;
    getTextFields(): TextFieldWidgetHelper[];
    getTitleText(): string;

    /**
     * Calls the screen's init function re-loading it
     */
    reloadScreen(): IScreen;
    removeButton(btn: ButtonWidgetHelper): IScreen;
    removeItem(i: RenderCommon.Item): IScreen;
    removeRect(t: RenderCommon.Rect): IScreen;
    removeTextInput(inp: TextFieldWidgetHelper): IScreen;

    setOnClose(onClose: MethodWrapper<IScreen, Java.JObject, Java.JObject>): IScreen;
    setOnKeyPressed(onKeyPressed: MethodWrapper<number, number, Java.JObject>): IScreen;
    setOnMouseDown(onMouseDown: MethodWrapper<PositionCommon.Pos2D, number, Java.JObject>): IScreen;
    setOnMouseDrag(onMouseDrag: MethodWrapper<PositionCommon.Vec2D, number, Java.JObject>): IScreen;
    setOnMouseup(onMouseup: MethodWrapper<PositionCommon.Pos2D, number, Java.JObject>): IScreen;
    setOnScroll(onScroll: MethodWrapper<PositionCommon.Pos2D, number, Java.JObject>): IScreen;
}

export default IScreen;
