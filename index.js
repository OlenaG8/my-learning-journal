import { postsArray } from './data.js'

function getCurrentYear() {
    const date = new Date()
    document.getElementById("copyright-date").innerHTML = `Copyright ©${date.getFullYear()}`
}

function getArticleHtml(post) {
    return `
    <article>
        <img class="article-img" src="${post.photo}" alt="Post thumbnail">
        <span class="article-info">${post.publishingDate}</span>
        <h2 class="article-title">${post.title}</h2>
        <p class="article-preview">${post.preview}</p>                
    </article>
    `
}

function render() {
    document.getElementById("posts-container").innerHTML += postsArray.map(getArticleHtml).join('')
}

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 3; i++) {
        document.getElementById("recent-posts-container").innerHTML += getArticleHtml(postsArray[i])
    }
})

render()
getCurrentYear()