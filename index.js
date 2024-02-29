import { postsArray } from './data-posts-array.js'

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

function getAboutMeArticle() {
    return `
    <h5>How I stay commited to learning</h5>
    <p>My current team leader once said that I come across as someone who is always eager to learn and explore new things.
    I believe these words describe my personality the most accurately.
    <br><br>
    Since I was a kid, I've always been into a bunch of stuff - drawing, sewing, crocheting, even messing around with clay. 
    As I got older, I got into physics, math, 3D design, and all sorts of other things. 
    I had several approaches to programming at different ages, but I never took it seriously because I was influenced by many stereotypes.
    <br><br>
    To wrap up, I've never felt the need for external motivation to learn because it's simply a part of who I am.
    </p>
    <h5>How I got into programming</h5>
    <p>Two years ago, I transitioned into a full-time role at an excellent company with a supportive team and a positive work culture. 
    However, outside of work hours, I found myself bored and struggling to find meaningful ways to invest my time into.
    <br><br>
    Afterwards, through a curious twist of fate, I crossed paths with someone at a coffee shop. 
    This individual shared their journey as a website architect, highlighting how despite lacking formal education, they were recognized as an expert and regularly invited to speak at seminars worldwide.
    <br><br>
    Their story inspired me, so I felt the need to give it a shot myself.
    </p>
    `
}

function render() {
    document.getElementById("posts-container").innerHTML += postsArray.map(getArticleHtml).join('')
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('about-me-article').innerHTML = getAboutMeArticle()
    for (let i = 0; i < 3; i++) {
        document.getElementById("recent-posts-container").innerHTML += getArticleHtml(postsArray[i])
    }
    getCurrentYear()
})

render()
getCurrentYear()