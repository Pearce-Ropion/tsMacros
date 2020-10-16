import * as Minecraft from "../minecraft";
import * as Java from "../java";

import ItemStackHelper from "../helpers/ItemStackHelper";
import TextHelper from "../helpers/TextHelper";

declare namespace RenderCommon {
    class Image extends Java.JObject {
        constructor(x: number, y: number, width: number, height: number, id: string, imageX: number, imageY: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, rotation: number);

        x: number;
        y: number;
        width: number;
        height: number;
        imageX: number;
        imageY: number;
        regionWidth: number;
        regionHeight: number;
        textureWidth: number;
        textureHeight: number;
        rotation: number;

        getImage(): string;
        render(matrixStack: Minecraft.MatrixStack): void;
        setImage(
            id: string,
            imageX: number,
            imageY: number,
            regionWidth: number,
            regionHeight: number,
            textureWidth: number,
            textureHeight: number,
        ): void;
        setPos(x: number, y: number, width: number, height: number): void;
        setRotation(rotation: number): void;
    }

    class Item extends Java.JObject {
        constructor(x: number, y: number, i: ItemStackHelper, overlay: boolean, scale: number, rotation: number);
        constructor(x: number, y: number, id: string, overlay: boolean, scale: number, rotation: number);

        item: Minecraft.ItemStack;
        x: number;
        y: number;
        scale: number;
        rotation: number;
        overlay: boolean;
        ovText: string;

        getItem(): ItemStackHelper;
        render(matrixStack: Minecraft.MatrixStack): void;
        setItem(i: ItemStackHelper): RenderCommon.Item;
        setItem(id: string, count: number): RenderCommon.Item;
        setOverlay(overlay: boolean): RenderCommon.Item;
        setOverlayText(ovText: string): RenderCommon.Item;
        setPos(x: number, y: number): RenderCommon.Item;
        setRotation(rotation: number): RenderCommon.Item;
        setScale(scale: number): RenderCommon.Item;
    }

    class Rect extends Java.JObject {
        constructor(x1: number, y1: number, x2: number, y2: number, color: number, rotation: number);
        constructor(x1: number, y1: number, x2: number, y2: number, color: number, alpha: number, rotation: number);

        x1: number;
        y1: number;
        x2: number;
        y2: number;
        color: number;
        rotation: number;

        render(matrixStack: Minecraft.MatrixStack): void;
        setAlpha(alpha: number): RenderCommon.Rect;
        setColor(color: number): RenderCommon.Rect;
        setCplor(color: number, alpha: number): RenderCommon.Rect;
        setPos(x1: number, y1: number, x2: number, y2: number): RenderCommon.Rect;
        setRotation(rotation: number): RenderCommon.Rect;
    }

    class Text extends Java.JObject {
        constructor(text: string, x: number, y: number, color: number, shadow: boolean, scale: number, rotation: number);
        constructor(text: TextHelper, x: number, y: number, color: number, shadow: boolean, scale: number, rotation: number);

        color: number;
        rotation: number;
        scale: number;
        shadow: boolean;
        text: Minecraft.TextText;
        width: number;
        x: number;
        y: number;

        getText(): TextHelper;
        getWidth(): number;
        render(matrixStack: Minecraft.MatrixStack): void;
        setPos(rotation: number): RenderCommon.Text;
        setRotation(scale: number): RenderCommon.Text;
        setText(text: string): RenderCommon.Text;
        setText(text: TextHelper): RenderCommon.Text;
    }
}

export default RenderCommon;
