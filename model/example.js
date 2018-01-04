// 插入
;(async () => {
  const user = await User.create({
    firstName: 'zhang',
    lastName: 'chaohang',
  })
  console.log('created: ' + JSON.stringify(user))
})()

// 查询
;(async () => {
  const users = await User.findAll({
    where: {
      firstName: 'zhang'
    }
  })
  console.log('find ' + users)
})()

// 更新
;(async () => {
  const user = await User.findById(3)
  user.update({lastName: 'iii'})
})()

// 删除
;(async () => {
  const user = await User.findById(4)
  const r = user.destroy()
  console.log(r)
})()