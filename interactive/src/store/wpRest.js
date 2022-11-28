import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `https://wp.codemjohnson.com/wp-json`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
