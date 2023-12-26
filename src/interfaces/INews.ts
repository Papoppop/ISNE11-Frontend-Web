export interface INews {
    id: number
    StudentID: number
    Title: string
    Content: string
    Catalogue: string
    MainImage: string
    Pinned: boolean
    createdAt: Date
    updatedAt: Date
    student: {
        Name: string
        Surname: string
        ImageURL: string
    }
}