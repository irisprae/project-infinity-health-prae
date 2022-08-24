import { api } from "./api.js";

export const createActivity = async ({ title, activity, distance, date, duration, calories, heartrate, description }) => {
    return api.post('/activities/create', {
        title, 
        activity, 
        distance, 
        date, 
        duration, 
        calories, 
        heartrate, 
        description
    })
}

export const getActivity =  async () => {
    return api.get('/activities')
}

export const editActivity = async (_id ,{ title, activity, distance, date, duration, calories, heartrate, description }) => {
    return api.patch('/activities/'+_id,  {
        title, 
        activity, 
        distance, 
        date, 
        duration, 
        calories, 
        heartrate, 
        description
    })
}

export const deleteActivity =  async (id) => {
    return api.delete(`/activities/${id}`)
}



