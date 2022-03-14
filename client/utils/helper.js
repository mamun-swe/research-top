
export const arraFromNumber = (number) => {
    const array = []

    for (let i = 0; i < parseInt(number); i++) {
        array.push(i)
    }

    return array
}

// Date to date
export const dateTodate = date => {
    const newDate = new Date(date)

    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    return `${day}.${month}.${year}`
}