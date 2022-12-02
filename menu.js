class FlexibleMenu {
  static nav = document.querySelector('.responsive-nav')
  static items = document.querySelectorAll('.responsive-nav li')
  static nav = document.querySelector('.responsive-nav ul')
  static navWidth = document.querySelector('.responsive-nav ul').offsetWidth

  constructor(options) {
    this.el = options.el
    this.moreText = options.moreText ? options.moreText : 'More'
    this.openPopup = options.openPopup

    // Init
    this.init()
    window.addEventListener('resize',
      this.debounce(() => window.location.reload(), 100)
    )
  }

  // Debounce
  debounce(callback, delay) {
    let timeout
    return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        callback(...args)
      }, delay)
    }
  }

  // Init
  init() {

    // Creating more button
    if (!document.querySelector('.responsive-nav__more')) {
      const moreLi = document.createElement('li')
      if (!this.openPopup) {
        moreLi.setAttribute('class', 'responsive-nav__more')
      } else {
        moreLi.setAttribute('class', 'responsive-nav__more openOnClick')
      }
      moreLi.setAttribute('style', 'position: absolute; right: 0; top: 0;')
      moreLi.innerHTML = `
        <a href="#">${this.moreText}</a>
        <ul class="responsive-nav__popup"></ul>
      `
      FlexibleMenu.nav.append(moreLi)
    }
    
    let htmlMain
    const more = document.querySelector('.responsive-nav__more')
    const moreWidth = more.offsetWidth + 20
    const popup = document.querySelector('.responsive-nav__popup')

    // Define a nav width
    FlexibleMenu.navWidth += moreWidth
    
    // Hide more and show only one time when there is not enough space for the menu
    more.style.display = 'none'

    if (FlexibleMenu.navWidth > window.innerWidth) {
      more.style.display = 'block'

      // widthToBe
      let widthToBe = window.innerWidth - moreWidth

      // countNavsWidth
      let countNavsWidth = 0

      // Recreating popup items forwards
      FlexibleMenu.items.forEach(el => {
        countNavsWidth += el.offsetWidth
        let link = el.children[0].getAttribute('href')
        if (countNavsWidth > widthToBe) {
          if (FlexibleMenu.nav.contains(el)) {
            let newItem = document.createElement('li')
            newItem.innerHTML = `
            <a href="${link}">${el.innerText}</a>
            `
            popup.append(newItem)
            el.remove()
          }
        }
      })

      if (this.openPopup) {
        document.querySelector('.responsive-nav__more a').addEventListener('click', this.clickOnNav)
        // document.body.addEventListener('click', e => {
        //   console.log(e)
        //   let div = e.target.parentElement.parentElement
        //   if (!div.classList.contains('responsive-nav__popup')) {
        //     div.parentElement.classList.remove('opened')
        //   }
        // })
      }
    }
  }

  // clickOnNav
  clickOnNav(e) {
    let parent = e.target.parentElement
    if (!parent.classList.contains('opened')) {
      parent.classList.add('opened')
    } else {
      parent.classList.remove('opened')
    }
  }

}
