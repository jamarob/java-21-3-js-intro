export function renameMutable(students, oldName, newName) {
  const foundStudent = students.find(student => student.name === oldName)

  if (foundStudent) {
    foundStudent.name = newName
  }

  return students
}

export function renameImmutable(students, oldName, newName) {
  return students.map(student => {
    if (student.name === oldName) {
      return { ...student, name: newName }
    }
    return student
  })
}
