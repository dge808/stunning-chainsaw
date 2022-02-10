import axios from 'axios'

export async function getDogs(baseUrl = 'http://localhost:3001') {
  const response = await axios.request({
    method: 'GET',
    url: `${baseUrl}/dogs`,
    headers: { Accept: 'application/json' },
  })

  return response.data
}
