

function scrollToProjects()
{
    const element = document.getElementById("projectsbox")

    element.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToPosts()
{
    const element = document.getElementById("postbox")

    element.scrollIntoView({
        behavior: 'smooth'
    })
}

function scrollToAbout()
{
    const element = document.getElementById("detailed-about")

    element.scrollIntoView({
        behavior: 'smooth'
    })
}

var titleText = "Hi, I'm Henry. "
var titleTextEmphasis = "Henry"

var typeSpeed = 80
var typeProgress = 0

var cursorSpan = "<span class=\"cursor\"></span>"


function insertIntoString(base, index, str) {
    newStr = base.slice(0, index) + str + base.slice(index)
    return newStr
}

function typeTitle() 
{

    if (typeProgress < titleText.length) 
    {
        var elem = document.getElementById("mainTitle")

        if (typeProgress >= titleText.indexOf(titleTextEmphasis))
        {
            var elem = document.getElementById("name")
        }

        elem.innerHTML = insertIntoString(elem.innerHTML, typeProgress, titleText.charAt(typeProgress))

        typeProgress++

        setTimeout(typeTitle, typeSpeed)
    }
    else 
    {
        //var elem = document.getElementById("mainTitle")
        //elem.innerHTML += cursorSpan
    }
}

window.onload = function() {
    var elem = document.getElementById("mainTitle")
    elem.innerHTML += cursorSpan
    typeTitle()
}