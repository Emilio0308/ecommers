export const dateToDDMMYYYY = (oldFormat) => {
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }
    const newDate = new Date(oldFormat).toLocaleDateString("es-Es", options)
    return newDate
}