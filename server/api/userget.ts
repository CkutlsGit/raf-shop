import axios from "axios"

export default defineEventHandler(async (event) => {
  const authToken = getRequestHeader(event, "Authorization")

  if (!authToken) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    })
  }

  try {
    const response = await axios.get(
      "https://tgshop.chasman.engineer/api/v1/users/@me",
      {
        headers: {
          Authorization: authToken,
        },
      }
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
})
