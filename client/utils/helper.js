
export const arraFromNumber = (number) => {
    const array = []

    for (let i = 0; i < parseInt(number); i++) {
        array.push(i)
    }

    return array
}