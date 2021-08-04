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

const aStudent = {
  name: 'Paul',
  id: 'student#1',
}

export const students = [
  aStudent,
  {
    name: 'Gwen',
    id: 'student#2',
  },
  {
    name: 'Lucy',
    id: 'student#3',
  },
]
