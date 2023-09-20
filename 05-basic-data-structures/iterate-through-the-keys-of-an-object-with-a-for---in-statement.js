const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let onlineCount = 0

  for (let user in allUsers) {
    if (allUsers[user].online) onlineCount++
  }

  return onlineCount
  // Only change code above this line
}

console.log(countOnline(users));