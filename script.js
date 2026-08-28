document.getElementById('btnResolver').addEventListener('click', function () {
  document.getElementById('page1').classList.remove('active')
  const p2 = document.getElementById('page2')
  p2.classList.add('active')

  const step1 = document.getElementById('step1')
  const step2 = document.getElementById('step2')
  const step3 = document.getElementById('step3')
  const spinner = document.getElementById('spinner')
  const btnPagarWrap = document.getElementById('btnPagarWrap')

  requestAnimationFrame(() => {
    setTimeout(() => { step1.classList.add('visible') }, 50)
    spinner.classList.add('visible')
  })

  setTimeout(() => {
    step2.classList.add('visible')
  }, 3000)

  setTimeout(() => {
    spinner.classList.remove('visible')
    spinner.classList.add('hidden')
    step3.classList.add('visible')
    setTimeout(() => { btnPagarWrap.classList.add('visible') }, 300)
  }, 6000)
})

document.getElementById('btnPagarWrap').addEventListener('click', function () {
  window.location.href = 'https://pay.pagamento-online.app/checkout/fc1474a2-7f98-48ca-868f-a3ec889a3768'
})
