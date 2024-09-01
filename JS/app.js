const sideBarBtn = document.querySelector('nav .SideListBtn')
const sidebar = document.querySelector(' .sidebar')
const cancelBtn = document.querySelector('.cancel')

const openSidebar = () => { 
    sidebar.classList.add('active')
}

sideBarBtn.addEventListener('click', openSidebar)


const closeSidebar = (event) => {

    const {target} = event
    if(target.classList.contains('sidebar') || target.classList.contains('cancel')){
        sidebar.classList.remove('active')
    }

    
}
cancelBtn.addEventListener('click',closeSidebar)

sidebar.addEventListener('click',closeSidebar)
