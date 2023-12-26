import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/interfaces/IUser";

const initialState : IUser = {
    StudentID: 0,
    Name: "",
    Surname: "",
    Gender: "",
    Nationality: "",
    Instagram: "",
    ImageURL: "",
    Fetched: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setStudentID: (state, action) => {
            state.StudentID = action.payload
        },
        setName: (state, action) => {
            state.Name = action.payload
        },
        setSurname: (state, action) => {
            state.Surname = action.payload
        },
        setGender: (state, action) => {
            state.Gender = action.payload
        },
        setNationality: (state, action) => {
            state.Nationality = action.payload
        },
        setInstagram: (state, action) => {
            state.Instagram = action.payload
        },
        setImageURL: (state, action) => {
            state.ImageURL = action.payload
        },
        setFetched: (state, action) => {
            state.Fetched = action.payload
        }
    }
})

export const {
    setStudentID,
    setName,
    setSurname,
    setGender,
    setNationality,
    setInstagram,
    setImageURL,
    setFetched
} = userSlice.actions

export default userSlice.reducer