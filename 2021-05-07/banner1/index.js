
$(function() {

  $('.banner1').each(function() {
    let $banner = $(this)

    let $bottom = $banner.find('.bottom').empty()

    let total = $banner.find('.box').length
    let MaxPage = Math.ceil(total / 3)

    let getPage = n => parseInt($banner.attr('p'), 10) + n
    let setPage = p => $banner.attr('p', p)

    $banner.find('.left').click(_ => {
      let p = getPage(-1)
      setPage(p < 1 ? MaxPage : p)
    })
    $banner.find('.right').click(_ => {
      let p = getPage(+1)
      setPage(p > MaxPage ? 1 : p)
    })

    for (let i = 0; i < MaxPage; i++)
      $bottom.append($('<label />').click(function() {
        setPage($(this).index() + 1)
      }))

    setPage(1)
  })
})