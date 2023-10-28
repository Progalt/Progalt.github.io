

function scrollToProjects()
{
    elements = document.getElementsByClassName("window")

    elements[0].scrollIntoView({
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