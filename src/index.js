import './scss/main.scss';


//

export const content = document.querySelector('#content')
export const main = document.querySelector('#main')
export const header = document.querySelector('#header')
export const tabs = document.querySelector('.tabs')
export const views = document.querySelector('.views')

export const returnBtn = document.querySelector('.returnBtn')
let visible = returnBtn.getAttribute('visible')

function returnBtnVisible() {
    if (visible === 'false') {
        returnBtn.style.display = 'none'
    } else {
        returnBtn.style.display = 'block'
    }
}

returnBtnVisible()


//

function Task(taskTabDate, taskTabTitle, href) {

    this.taskTabDate = taskTabDate
    this.taskTabTitle = taskTabTitle
    this.href = href
    const taskTab = document.createElement('div')
    taskTab.classList.add('tab')
    const taskView = document.createElement('div')
    taskView.classList.add('taskView')
    taskView.style.display = 'none'

    this.createTaskTab = function() {

        const tabType = document.createElement('h4')
        tabType.classList.add('tabType')
        tabType.innerText = 'design'
        taskTab.appendChild(tabType)
        
        const taskTabDate = document.createElement('h4')
        taskTabDate.classList.add("tabDate")
        taskTabDate.innerText = this.taskTabDate
        taskTab.appendChild(taskTabDate)

        const taskTabTitle = document.createElement('a')
        taskTabTitle.href = 'cannondaleBike.html'
        taskTabTitle.target = 'blank'
        taskTabTitle.classList.add("tabTitle")
        taskTabTitle.innerText = this.taskTabTitle
        taskTab.appendChild(taskTabTitle)

        const githubLink = document.createElement('a')
        githubLink.classList.add('github-wrapper')
        githubLink.href = this.href
        githubLink.target = 'blank'
        taskTab.appendChild(githubLink)

        const github = document.createElement('img')
        github.classList.add('tabImg')
        github.src = '/src/images/git-img-light.png'
        githubLink.appendChild(github)

        return taskTab

    }
    
    this.appendTask = function(tab) {
        tabs.prepend(tab)

    }

}

export function Welcome(tabTitle, blogPost) {

    this.tabTitle = tabTitle
    this.blogPost = blogPost

    const blogTab = document.createElement('div')
    blogTab.classList.add('tab')
    const blogView = document.createElement('div')
    blogView.classList.add('taskView')
    blogView.style.display = 'none'

    blogTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('tabTitle')) {
            blogView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

    })

    this.createWelcomeTab = function() {

        const pinnedImg = document.createElement('img')
        pinnedImg.src = '/src/images/pinned.png'
        pinnedImg.style.height = '12px'
        blogTab.appendChild(pinnedImg)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("tabTitle")
        blogTabTitle.innerText = this.tabTitle
        blogTab.appendChild(blogTabTitle)

        return blogTab

    }

    this.createWelcomeView = function() {

        const blogViewHeader = document.createElement('div')
        blogViewHeader.classList.add('lessonViewHeader', 'tab')
        blogView.appendChild(blogViewHeader)

        const pinnedImg = document.createElement('img')
        pinnedImg.src = '/src/images/pinned.png'
        pinnedImg.style.height = '12px'
        blogViewHeader.appendChild(pinnedImg)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("tabTitle")
        blogTabTitle.innerText = this.tabTitle
        blogViewHeader.appendChild(blogTabTitle)

        const blogPost = document.createElement('h4');
        blogPost.classList.add('learningPost')
        blogPost.innerText = this.blogPost
        blogView.appendChild(blogPost)

        return blogView

    }

    this.appendWelcome = function(tab, view) {
        tabs.prepend(tab)
        views.appendChild(view)
    }

}

// POST IMPORTS

const cannondaleTab = new Task('05.11.23', 'cannondale bikes', 'https://github.com/darkmodeaaronemaildevelopment/cannondale-html-email')
cannondaleTab.appendTask(cannondaleTab.createTaskTab())

//

const welcomePost = "hi there, \n\n welcome to my email development designs repository! \n\n this is a place where i show html email designs i have created." 
const welcome = new Welcome('welcome', welcomePost)
welcome.appendWelcome(welcome.createWelcomeTab(), welcome.createWelcomeView())

const lessonViews = document.querySelectorAll('.lessonView')
const taskViews = document.querySelectorAll('.taskView')

returnBtn.addEventListener('click', () => {
    visible = 'false'
    tabs.style.display = 'block'

    lessonViews.forEach(lesson => {
        lesson.style.display = 'none'
    })
    taskViews.forEach(view => {
        view.style.display = 'none'
    })
    returnBtnVisible()
})

export {Task}
