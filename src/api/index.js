import axios from "axios"

let serverIP = ""

const api = {
    setup(ipAddr){
        serverIP = ipAddr
    },
    config(){
        return axios.get(`http://${serverIP}:6789` + `/config`)
    },
    set(packageData){
        return axios.post(`http://${serverIP}:6789` + `/set`, packageData)
    },
}
export default api