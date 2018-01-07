export const state = () => ({
  sidebar: false,
  appState: false,
  userId: ''
});

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar;
  },
  setAppState (state, data) {
    state.appState = data;
  },
  setUserId (state, data) {
    state.userId = data;
  }
};
