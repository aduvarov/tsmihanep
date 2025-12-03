function sum(a: number, b: number): number {
    return a + b
}

const sum2 = (a: number, b: number): number => {
    return a + b
}

const sum3 = function (a: number, b: number): number {
    return a + b
}

sum(2, 4)

function log(name: string, userId?: string) {
    console.log('Hello ', name, 'with ID: ', userId || 'anonym')
}

function crash(): never {
    throw new Error('crash')
}

function average(...nums: number[]) {
    const sum = nums.reduce((cur, total) => total + cur, 0)
    return sum / nums.length
}
