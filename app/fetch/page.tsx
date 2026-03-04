
const URL = 'https://api.github.com/users/wwarodom'

export default async function FetchPage() {

  const response = await fetch(URL)
  const data = await response.json()
  console.log("Response: ", data)

  return (
    <div>FetchPage</div>
  )
}
