window.Movie = {
  index () {
    return axios.get(`${baseURL}`)
  }, 
  show (id) {
    return axios.get(`${baseURL}/${id}`)
  }, 
  create (body) {
    return axios.post(`${baseURL}/`, body)
  },
  update (id, body) {
    return axios.put(`${baseURL}/${id}`, body)
  }, 
  destroy (id) {
    return axios.delete(`${baseURL}/${id}`)
  }
}