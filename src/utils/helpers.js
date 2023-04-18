const calculateAge = (years) => {
  const startDate = new Date(years)
  const diffDate = new Date(new Date() - startDate)
  return diffDate.toISOString().slice(0, 4) - 1970
}

const reminderTransformation = (data) => {
  if (data?.length === 0) {
    return data
  }
  data.map((data) => {
    const { type, date } = data
    let years = 0
    if (type === 'recursion') {
      years = calculateAge(date)

      const targetDate = new Date(date)
      targetDate.setFullYear(targetDate.getFullYear() + (years + 1))
      data.date = targetDate
      data.years = years
    }
    return { ...date, years }
  })
  return data
}

const fileToBase64 = async (file) => {
  return new Promise((resolve) => {
    var reader = new FileReader()
    reader.onload = function (event) {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file)
  })
}

export { reminderTransformation, fileToBase64 }
