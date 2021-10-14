import {
  TOOGLE_LEFT_SIDE_BAR,
  TOOGLE_RIGHT_SIDE_BAR
} from './MUTATION_TYPES'

export default {

  UPDATE_AUTH (state, auth) {
    state.auth = auth
  },

  UPDATE_USER (state, user) {
    state.user = user
    for (var i = 0; i < state.user.groups.length; i++) {
      if (state.user.groups[i].groupId === 1) {
        state.user.isAdmin = true
      } else if (state.user.groups[i].groupId === 2) {
        state.user.isUser = true
      } else if (state.user.groups[i].groupId === 3) {
        state.user.isManager = true
      }
    }
  },
  UPDATE_USER_PHOTO (state, photo) {
    state.user.photo = photo
  },

  [TOOGLE_LEFT_SIDE_BAR] (state) {
    state.app.showLeftSideBar = !state.app.showLeftSideBar
  },

  [TOOGLE_RIGHT_SIDE_BAR] (state) {
    state.app.showRightSideBar = !state.app.showRightSideBar
  },

  /**
   * Clear each property, one by one, so reactivity still works.
   *
   * (ie. clear out state.auth.isLoggedIn so Navbar component automatically reacts to logged out state,
   * and the Navbar menu adjusts accordingly)
   *
   * TODO: use a common import of default state to reset these values with.
   */
  CLEAR_ALL_DATA (state) {
    // Auth
    state.auth.isLoggedIn = false
    state.auth.accessToken = null
    state.auth.refreshToken = null
    state.auth.effectiveTime = null
    state.auth.expiresTime = null

    // User
    state.user.username = ''
    state.user.fullName = ''
    state.user.photo = ''
    state.user.staffId = 0
    state.user.groups = []
    state.user.departments = []
    state.user.isAdmin = false
    state.user.isManager = false
    state.user.isUser = false
  }
}
