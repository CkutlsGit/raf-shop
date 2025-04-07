import axios from "axios"

export default defineEventHandler(async (event) => {
  try {
    const response = await axios.get(
      "https://shop.chasman.engineer/api/v1/banners"
    )

    return response.data
  } catch (error) {
    return error
  }
})
