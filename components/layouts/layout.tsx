type Person = { person_age: number,
               person_name: string,
               person_alive: boolean };


type SnakeToCamelCase<S extends string|number|symbol> = S extends `${infer T}_${infer U}` ? `${T}${Capitalize<SnakeToCamelCase<U>>}` : S

type SnakeToCamelCaseObject<T extends {}> = {
  [Property in keyof T as SnakeToCamelCase<keyof T>]: T[Property]
}

type T2 = SnakeToCamelCaseObject<Person>

type T1 = SnakeToCamelCase<"hola_mundo">
