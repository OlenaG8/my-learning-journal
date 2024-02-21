import { postsArray } from './data.js'

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

render()