
$(function() {

  $('.show-box').each(function() {
    let $showBox = $(this)
    $showBox.attr('data-index', 1)
    $showBox.attr('data-page', 1)

    let unit = $showBox.data('unit')
    let $points = $showBox.find('.points')
    let $box = $showBox.find('.box-container .box')

    // 點點數量, 產生點點
    let pointsCount = Math.ceil($box.length / unit)
    for (let i = 0; i < pointsCount; i++) {
      $points.append($('<label />').click(function() {
        $showBox.attr('data-page', $(this).index() + 1);
      }))
    }

    // 左邊箭頭
    $showBox.find('.left').click(function() {
      let page = parseInt($showBox.attr('data-page'), 10) - 1
      $showBox.attr('data-page', page < 1 ? pointsCount : page);
    })
    // 右邊箭頭
    $showBox.find('.right').click(function() {
      let page = parseInt($showBox.attr('data-page'), 10) + 1
      $showBox.attr('data-page', page > pointsCount ? 1 : page);
    })

    // 點擊小框框
    $box.click(function() {
      $showBox.attr('data-index', $(this).index() + 1)
    })
  })
})