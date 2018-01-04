module.exports = (result) => {
  if (result) {
    return {
      code: '0000',
      success: true,
      message: 'success',
      data: result,
    }
  } else {
    return {
      code: '0000',
      success: true,
      message: 'success',
    }
  }
}
