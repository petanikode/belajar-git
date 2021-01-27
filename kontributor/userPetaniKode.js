export default class User {
  static isAvailable = false
  static userId = ''
  static deviceToken = ''

  static async getUserFromStore() {
    LocalStorage.getItemWithKey(userStorageKey, (user) => {
      if (user) {
        User.setUser(user)
      }
    })
  }

  static getUser() {
    return {
      userId: User.userId,
    }
  }

  static setUser(user) {
    User.userId = user.userId
    User.isAvailable = true
  }

  static async storeUser(userData = null) {
    if (userData) {
      const user = {
        userId: userData.userId,
      }
      User.setUser(user)
      LocalStorage.setItemWithKeyAndValue(userStorageKey, user)
    }
  }

  static resetUser() {
    User.isAvailable = false
    User.id = ''
  }

  static async deleteUser() {
    LocalStorage.setItemWithKeyAndValue(userStorageKey, null)
    User.resetUser()
  }

  // Token Mgmt
  static async storeDeviceToken(token = null) {
    if (token) {
      User.setToken(token)
      LocalStorage.setItemWithKeyAndValue(deviceTokenKey, token)
    }
  }

  static async getDeviceTokenFromStorage() {
    LocalStorage.getItemWithKey(deviceTokenKey, (token) => {
      if (token) {
        User.setToken(token)
      }
    })
  }

  static getToken() {
     return User.deviceToken
  }

  static setToken(token) {
    User.deviceToken = token
  }
}
