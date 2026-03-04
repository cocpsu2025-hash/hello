import Image from 'next/image'
const URL = 'https://api.github.com/users/wwarodom'

export default async function FetchPage() {

    const response = await fetch(URL)
    const data = await response.json()
    console.log("Response: ", data)

    return (
        <div>
            <h1>Fetch</h1>
            {/* <div>{JSON.stringify(data)} </div> */}
            <div className="flex border bg-amber-100 p-4 rounded-lg justify-between items-center w-90">
                <div>
                    <div>
                        login:  {data.login}
                    </div>
                    <div>
                        location: {data.location}
                    </div>
                    <div>
                        blog: {data.blog}
                    </div>
                </div>
                <div>
                    <Image
                        className='rounded-full'
                        src={data.avatar_url} width={100} height={100} alt="github image" />

                </div>
            </div>


        </div>
    )
}
