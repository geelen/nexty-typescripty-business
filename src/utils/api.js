export const getRandomBackground = async () => {
  const response = await fetch('https://api.unsplash.com/photos/random', {
    headers: {
      'Authorization': 'Client-ID 82f8e4797dece60020f2cc66f5c51af06dbd28c6eaf956ba88cc75b209f925bf'
    }
  })
  const json = await response.json()
 console.log(json)
  return { background: json.urls.regular, color: json.color }
}
