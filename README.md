# lco-graphql
Learning GraphQL Basics

# Sample mutation
mutation{
  createCourse(input: {
    courseName: "JSbootcamp"
    price: 500
    stack: MOBILE
    teachingAssists: [
      {
        firstName: "Janaki"
        lastName: "Keerthi"
        experience: 2
      },
      {
        firstName: "John"
        lastName: "Doe"
        experience: 4
      }
    ]
  }){
    id,
    courseName,
    price
  }
}

# Sample Query
query{
  getCourse(id: "XXX"){
    id,
    courseName,
    teachingAssists{
      firstName,
      lastName,
      experience
    }
  }
}