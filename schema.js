import { buildSchema } from 'graphql';

const schema = buildSchema(`

    type Course {
        id : ID
        courseName : String
        category :  String
        price : Int
        stack : Stack
        teachingAssists : [TeachingAssist]
    }

    type TeachingAssist {
        firstName : String
        lastName : String
        experience : Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHERS
    }

    type Query {
        getCourse(id : ID) : Course

    }
    input CourseInput {
        id : ID
        courseName : String!
        category :  String
        price : Int!
        stack : Stack
        teachingAssists : [TeachingAssistInput]!
    }

    input TeachingAssistInput {
        firstName : String
        lastName : String
        experience : Int
    }

    type Mutation {
        createCourse(input : CourseInput) : Course
    }

`)

export default schema;