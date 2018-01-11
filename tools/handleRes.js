module.exports = (result, code, message) => {
  code = code || '0000'
  message = message || 'success'
  if (code === '0000') {
    return {
      code,
      success: true,
      message,
      data: result,
    }
  } else {
    return {
      code,
      success: false,
      message,
      data: result,
    }
  }
}
