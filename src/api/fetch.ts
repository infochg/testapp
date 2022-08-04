interface FetchDataProps {
  link: string
  method: string
  headers?: object
  onSuccess: (a: any) => void
  onError: (a: any) => void
  showLoader?: (a: boolean) => void
  args?: object
}

const fetchData = async ({
  link,
  method,
  headers,
  onSuccess,
  onError,
  showLoader,
  args,
}: FetchDataProps) => {
  try {
    const requestHeaders: HeadersInit = new Headers()
    if (method !== 'GET') {
      requestHeaders.set('Content-Type', 'application/json')
    }

    if (headers) {
      Object.keys(headers).map((item: string) => requestHeaders.set(item, headers[item]))
    }

    if (showLoader) {
      showLoader(true)
    }

    const resData = await fetch(`${link}`, {
      method,
      headers: requestHeaders,
      body: method !== 'GET' && args ? JSON.stringify({ ...args }) : null,
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      }

      return null
    })

    if (resData === null || resData.status === 'failed') {
      if (showLoader) {
        showLoader(false)
      }

      if (resData) {
        // eslint-disable-next-line no-console
        console.log(resData.message)
        onError(resData.message)
      } else {
        onError('Something is wrong, please try later.')
      }
    } else if (onSuccess) {
      if (showLoader) {
        showLoader(false)
      }

      onSuccess(resData)
    }

    return null
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log(error)

    if (showLoader) {
      showLoader(false)
    }

    onError(error || 'Something is wrong, please try later.')
  }

  return null
}

export default fetchData
