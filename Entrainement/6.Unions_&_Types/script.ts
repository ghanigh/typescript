let code : string | number | Function | boolean
code = 5

let array: (boolean | number | string )[] = []

const foo = (arg: number | string) => {
    return arg
}

type mixeNumberStr = number | string
type booleanOrObject = boolean |  object

const draft = (arg: mixeNumberStr, arg2: booleanOrObject) => {
    return ""
}

type element = {
    x: number,
    y: number;
    id: number | string,
    visible: boolean
}

let button: element = {
    x: 1,
    y: 99,
    id: "str",
    visible: true
}