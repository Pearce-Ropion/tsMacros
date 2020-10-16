export interface Global {
    item: Item;
    util: Util;
    entity: Entity;
    client: Client;
    block: Block;
}

export type ItemStack = object;
export interface Item {
    itemStack: ItemStack;
}

export interface Util {
    math: Math;
}

export type TextText = object;
export interface Text {
    text: TextText;
}

export type LivingEntity = object;
export interface Entity {
    livingEntity: LivingEntity;
    effect: Effect;
}

export type StatusEffectInstance = object;
export interface Effect {
    statusEffectInstance: StatusEffectInstance;
}

export type PlayerEntity = object;
export type PlayerAbilities = object;
export interface Player {
    playerEntity: PlayerEntity;
    playerAbilities: PlayerAbilities;
}

export type BlockPos = object;
export interface Math {
    blockPos: BlockPos;
}

export type BlockState = object;
export type BlockEntity = object;
export interface Block {
    blockState: BlockState;
    entity: BlockEntity;
}

export interface Client {
    gui: ClientGUI;
    network: Network;
    minecraftClient: MinecraftClient;
}

export type MatrixStack = object;

export interface ClientUtilMath {
    matrixStack: MatrixStack;
}

export interface ClientUtil {
    math: ClientUtilMath;
}

export type MinecraftClient = object;

export type ClientPlayerEntity = object;
export interface Network {
    clientPlayerEntity: ClientPlayerEntity;
}

export declare class DrawableHelper {
    constructor();
}

export interface ClientGUI {
    screen: IngameGUI;
    drawableHelper: DrawableHelper;
}

export type HandledScreen = object;
export interface IngameGUI {
    handledScreen: HandledScreen;
}
