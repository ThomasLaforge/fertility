import { Tile } from "./Tile";
import { ValleyTile } from "./ValleyTile";

export enum Resource {
    Alabaster = 0,
    Bovines = 1,
    PapyrusFlower = 2,
    Grapes = 3,
    Joker = 4
}

export enum God {
    Ra = 0, //Yellow
    Osiris = 1, //Orange
    Isis = 2, //Blue
    Nephthys = 3, //Green
    Amun = 4, //Grey
    Anubis = 5, //Purple
    Joker = 6
}

export enum RewardType {
    God = 0,
    PV = 1,
    PVFormula = 2,
    Corn = 3,
    ResourceChoice = 4
}

export interface PVFormula {
    resource: Resource,
    multiplicator: number
}

export interface IReward {
    type: RewardType,
    value: number | PVFormula | God | Resource[]
}

export enum MapFieldType {
    Empty = 0,
    CornField = 1,
    Resource = 2,
    PotentialStart = 3,
    Lake = 4
}

export interface Field {

}

export enum Symbol {
    Pyramid,
    Sphynx,
    Obelisk,
    Temple
}

export enum Rotation {
    Initial,
    Left,
    Reverse,
    Right
}

export enum Orientation {
    Initial,
    Reverse
}

export interface IPosition {
    x: number,
    y: number
}

export interface IPlay {
    pos: IPosition,
    tile: Tile | ValleyTile
}