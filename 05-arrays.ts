const numbers = [1, 2, 3, 4]

const anyA = [] // any[]
const strs: string[] = []
const strs2: Array<string> = []

strs.push('asv')

const cars: Car[] = []

cars.push({
    wheels: 4,
    brand: 'audi',
    type: 'Sedan',
    isNew: false,
})

const arrOfArr: string[][] = []

arrOfArr.push(['str1', 'str2'])

function printArr(arr: unknown[]): void {
    arr.forEach((el, index, arr) => {
        console.log()
    })
}
