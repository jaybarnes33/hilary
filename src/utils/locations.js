import docxTables from "docx-tables"

export const locations = () => {
  return docxTables({
    file: "./src/Location.docx"
  })
    .then(([data]) => {
      const locationData = Object.values(data)
        .map(row =>
          row.map(col => {
            return col.data
          })
        )
        .slice(1)
        .map(([key, value]) => {
          if (!key) {
            key = "Spintex Community Hospital" // Key was missing for some reason 🤔
          }

          return [
            key.split("\n")[0],
            value
              .split("\n")[0]
              .split(",")
              .map(coord => +coord.trim())
          ]
        })

      return Object.fromEntries(locationData)
    })
    .catch(error => {
      console.error(error)
    })
}
