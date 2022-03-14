
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

// E-mail valid check
export const isValidEmail = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return regex
}