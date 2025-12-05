const pairs: [string, string][] = [
    ['key', 'value'],
    ['key2', 'value2'],
]

const data: [number, boolean, string] = [1, true, 'loadash']

// csv
const doc: [string, string, number, Date][] = []

// doc.push(1) // error
doc.push(['Anatoliy', 'Uvarov', 12, new Date(1985, 4, 8)])
