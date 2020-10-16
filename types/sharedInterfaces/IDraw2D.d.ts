import * as Java from "../java";
import * as Minecraft from "../minecraft";

import MethodWrapper from "../extensionBase/MethodWrapper";
import ItemStackHelper from "../helpers/ItemStackHelper";
import TextHelper from "../helpers/TextHelper";
import RenderCommon from "../sharedClasses/RenderCommon";

interface IDraw2D<T> {
    addImage(x: number, y: number, width: number, height: number, id: string, imageX: number, imageY: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number): RenderCommon.Image;
    addImage(x: number, y: number, width: number, height: number, id: string, imageX: number, imageY: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, rotation: number): RenderCommon.Image;
    addItem(x: number, y: number, Item: ItemStackHelper): RenderCommon.Item;
    addItem(x: number, y: number, Item: ItemStackHelper, overlay: boolean): RenderCommon.Item;
    addItem(x: number, y: number, Item: ItemStackHelper, overlay: boolean, scale: number, rotation: number): RenderCommon.Item;
    addItem(x: number, y: number, id: string): RenderCommon.Item;
    addItem(x: number, y: number, id: string, overlay: boolean): RenderCommon.Item;
    addItem(x: number, y: number, id: string, overlay: boolean, scale: number, rotation: number): RenderCommon.Item;
    addRect(x1: number, y1: number, x2: number, y2: number, color: number): RenderCommon.Rect;
    addRect(x1: number, y1: number, x2: number, y2: number, color: number, alpha: number): RenderCommon.Rect;
    addRect(x1: number, y1: number, x2: number, y2: number, color: number, alpha: number, rotation: number): RenderCommon.Rect;
    addText(text: string, x: number, y: number, color: number, shadow: boolean): RenderCommon.Text;
    addText(text: string, x: number, y: number, color: number, shadow: boolean, scale: number, rotation: number): RenderCommon.Text;
    addText(text: TextHelper, x: number, y: number, color: number, shadow: boolean): RenderCommon.Text;
    addText(text: TextHelper, x: number, y: number, color: number, shadow: boolean, scale: number, rotation: number): RenderCommon.Text;

    getWidth(): number;
    getHeight(): number;
    getImages(): RenderCommon.Image[];
    getItems(): RenderCommon.Item[];
    getRects(): RenderCommon.Rect[];
    getTexts(): RenderCommon.Text[];
    init(): void;
    removeImage(i: RenderCommon.Item): T;
    removeItem(i: RenderCommon.Item): T;
    removeRect(r: RenderCommon.Rect): T;
    removeText(t: RenderCommon.Text): T;
    render(matrixStack: Minecraft.MatrixStack): void;
    setOnFailInit(catchInit: MethodWrapper<string, Java.JObject, Java.JObject>): T;
    setOnInit(onInit: MethodWrapper<T, Java.JObject, Java.JObject>): T;
}

export default IDraw2D;
