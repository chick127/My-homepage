// 클릭 시 글씨 색상 변경
document.querySelector('.btn').addEventListener('mousedown', function () {
  this.querySelector('a').style.color = 'white'
})
document.querySelector('.btn').addEventListener('mouseup', function () {
  this.querySelector('a').style.color = 'black'
})

const tooltip = document.getElementById('tooltip')
const items = document.querySelectorAll('.prod-list li')

items.forEach((item) => {
  item.addEventListener('mouseenter', function () {
    const title = item.getAttribute('data-title')
    const detail = item.getAttribute('data-detail')

    tooltip.innerHTML = `<h3>${title}</h3><p>${detail}</p>`
    tooltip.style.display = 'block'

    const rect = item.getBoundingClientRect()
    tooltip.style.top = `${rect.top + window.scrollY}px`
    tooltip.style.left = `${rect.right + 10}px`
  })

  item.addEventListener('mouseleave', function () {
    tooltip.style.display = 'none'
  })
})
