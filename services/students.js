const studentsReturn = students.slice();
students.map(async (student, index) => {
  students[index].classes = JSON.parse(
    JSON.stringify(
      await knex
        .select()
        .table("students_classes")
        .where("student_id", students.id)
    )
  );
  students[index].classes.forEach(async (e) => {
    const classes = JSON.parse(
      JSON.stringify(
        await knex.select().table("classes").where("id", e.classes_id)
      )
    );
    console.log(classes);
    studentsReturn[index].classes = classes;
  });
});
return studentsReturn;

async function getStudents() {
  const studentsReturn = students.slice();
  students.map(async (student, index) => {
    students[index].classes = JSON.parse(
      JSON.stringify(
        await knex
          .select()
          .table("students_classes")
          .where("student_id", students.id)
      )
    );
    students[index].classes.forEach(async (e) => {
      const classes = JSON.parse(
        JSON.stringify(
          await knex.select().table("classes").where("id", e.classes_id)
        )
      );
      console.log(classes);
      studentsReturn[index].classes = classes;
    });
  });
  return studentsReturn;
}
