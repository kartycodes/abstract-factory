import { User, Kind, Entity } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
  { id: 105, name: 'Kartik'},
  { id: 106, name: 'Sandra' }
]

export const sampleData: Entity[] = [
  { id: 12345,
    name: "Person", 
    fields: [
      { id: 12, name:'Name', kind: Kind.String, required:true},
      { id: 123512312, name:'DateOfBirth', kind: Kind.Date, required: true},
      { id: 1231234, name:'Nationality', kind: Kind.Choice, required: true}],
    relations: []}
] 


