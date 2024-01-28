interface Name {
    firstName: String,
    middleNames: String,
    lastName: String
}

export const enum Grade {
    AStar, A, B, C, D, E, U
}

interface Subject {
    name: String,
    grade: Grade,
    attained: Boolean,
    board: String
}

export interface Profile {
    name: Name,
    school: String,
    subjects: Subject[],
    rating: Number
}