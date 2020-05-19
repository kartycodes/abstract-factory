export interface Id {
    id: number
  }
  
export interface User extends Id {
    name: string
}

export enum Kind {
    String  = "String",
    Number  = "Number",
    Choice  = "Choice",
    Boolean = "Boolean",
    Date    = "Date"
}

export interface Field extends Id {
    id: number
    name: string
    kind: Kind
    required: boolean
}

export enum Cardinality {
    oneToOne = "One to One",
    oneToMany = "One to Many",
    manyToMany = "Many to Many"
}

export interface Relationship {
    from: string
    to: string
    cardinality: Cardinality
}

export interface Entity extends Id {
    name: string
    fields: Field[]
    relations: Relationship[]
}