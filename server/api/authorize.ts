import axios from "axios"

export default defineEventHandler(async (event) => {
  const { initData } = await readBody(event)

  if (initData) {
    try {
      const response = await axios.post(
        "https://tgshop.chasman.engineer/api/v1/auth/validate-init",
        {
          initData: initData,
        }
      )
      return response.data
    } catch (error) {
      return error
    }
  }
})
