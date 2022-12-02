import ky from 'ky'

const api = ky.extend({
    prefixUrl: 'https://agrvai-sab.onrender.com',
    credentials: 'include',
    timeout: 10000
})

export default api