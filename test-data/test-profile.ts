import { Profile, Grade } from "@/types/Profile";

const JohnDoe: Profile = {
    name: {
        firstName: "John",
        middleNames: "Jameson",
        lastName: "Doe"
    },
    school: "The Ecclesbourne School",
    subjects: [
        {
            name: "Mathematics",
            grade: Grade.AStar,
            attained: false,
            board: "AQA"
        },
        {
            name: "Further Mathematics",
            grade: Grade.A,
            attained: false,
            board: "AQA"
        },
        {
            name: "Physics",
            grade: Grade.AStar,
            attained: false,
            board: "Edexcel"
        },
        {
            name: "Computer Science",
            grade: Grade.AStar,
            attained: false,
            board: "AQA"
        }
    ],
    rating: 100
}

export default JohnDoe;