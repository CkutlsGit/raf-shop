import axios from 'axios'

export default defineEventHandler(async (event) => {
  let data
  const { initData } = await readBody(event)

  try {
    const response = await axios.post('https://shop.chasman.engineer/api/v1/auth/validate-init', {
      initData: initData
    })
    data = response
  }
  catch (error) {
    console.error(error)
  }
  finally {
    console.log(data)
  }

  return 'Работает'
})
