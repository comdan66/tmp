
$(function() {

  $('.banner2').each(function() {
    let $banner = $(this)

    let $prev = $banner.find('.prev')
    let $next = $banner.find('.next')
    let $input = $banner.find('input')

    let total = $banner.find('.box').length
    let MaxPage = Math.ceil(total / 6)

    let getPage = n => parseInt($banner.attr('p'), 10) + n
    let setPage = p => $input.val($banner.attr('p', p).attr('p'))

    $input.keyup(function() {
      let p = getPage(0)
      setPage(isNaN(p) || p > MaxPage || MaxPage < 1 ? 1 : p)
    })

    $prev.click(_ => {
      let p = getPage(-1)
      setPage(p < 1 ? MaxPage : p)
    })
    $next.click(_ => {
      let p = getPage(+1)
      setPage(p > MaxPage ? 1 : p)
    })

    $banner.find('.first').click(_ => setPage(1))
    $banner.find('.last').click(_ => setPage(MaxPage))

    $banner.find('.left').click(_ => $prev.click())
    $banner.find('.right').click(_ => $next.click())

    $banner.find('.page').text(MaxPage)
    setPage(1)
  })
})