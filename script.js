const videosList = []
const titleList = []
let page = 1
const isLoading = document.getElementById("loading")
const videoContainer = document.getElementById("videoList")
const loadMoreBtn = document.getElementById("loadMore")
const searchBar = document.getElementById("searchBar")

const createCard = (video) => {
  const cardTemplate = `<div class="group" id="{{id}}">
  <a href="https://www.youtube.com/@chaiaurcode" target="_blank"> 
    <img
        src="{{image}}"
        alt="{{videoThummbnail}}"
        class="w-full rounded-lg bg-gray-200 object-fit group-hover:opacity-75"
      />
      <h3 class="mt-4 text-xl font-normal text-gray-700 videoTitle max-w-full sm:max-w-[150px] md:max-w-[250px] lg:max-w-[400px]">
        {{title}}
      </h3>
      <h6 class="text-xs font-normal text-gray-700">{{channelName}}</h6>
    </a>

    <p class="mt-1 text-sm font-normal text-gray-900">
      {{description}}
    </p>
    <div class="card-actions justify-start mt-3">
      {{tagList}}
    </div>
</div>`

  const cardTemplateTags = `<button class="btn btn-xs">{{tag}}</button>`

  const card = cardTemplate
    .replace("{{id}}", video.videoId)
    .replace("{{image}}", video.thumbnails.maxres.url)
    .replace("{{videoThummbnail}}", video.title)
    .replace("{{title}}", String(video.title))
    .replace("{{channelName}}", String(video.channelTitle))
    // .replace("{{description}}", video.description)
    .replace(
      "{{description}}",
      ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            perferendis illo voluptate accusamus cum, laboriosam earum
            architecto quas minima soluta reiciendis porro tempore, quos velit?
          </p>`
    )
    .replace(
      "{{tagList}}",
      (video.tags || [])
        .map((tag) => {
          console.log(tag)
          return cardTemplateTags.replace("{{tag}}", tag)
        })
        .join("")
    )

  return card
}

const fetchVideo = async () => {
  const url = `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}&limit=10&query=javascript&sortBy=keep%2520one%253A%2520mostLiked%2520%257C%2520mostViewed%2520%257C%2520latest%2520%257C%2520oldest`
  const options = { method: "GET", headers: { accept: "application/json" } }
  try {
    const response = await fetch(url, options)
    const responseJson = await response.json()
    ;(responseJson?.data?.data || []).map((data) => {
      videosList.push({ ...data.items.snippet, ...data.items.statistics })
      titleList.push(data.items.snippet.title)
    })
    page++
  } catch (error) {
    console.error(error)
  }
}
function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
}

const loadMore = () => {
  fetchVideo().then(() => {
    searchBar.value = ""
    videosList.map((video) => {
      videoContainer.innerHTML += createCard(video)
    })
    //   hide the spinner after loading the data
    isLoading.style.display = "none"
  })
}

loadMoreBtn.addEventListener("click", loadMore)

searchBar.addEventListener("input", (e) => {
  const searchValue = e.target.value
  const filteredTitleList = titleList.filter((title) =>
    title.toLowerCase().includes(searchValue.toLowerCase())
  )
  const filteredVideos = videosList.filter((video) =>
    filteredTitleList.includes(video.title)
  )
  videoContainer.innerHTML = ""
  filteredVideos.map((video) => {
    videoContainer.innerHTML += createCard(video)
  })
})

window.addEventListener("load", async () => {
  await fetchVideo().then(() => {
    videosList.map((video) => {
      videoContainer.innerHTML += createCard(video)
    })
    //   hide the spinner after loading the data
    isLoading.style.display = "none"
  })
})
