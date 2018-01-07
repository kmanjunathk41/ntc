export default function ({store, redirect, error}) {
  if (!store.state.appState) {
    return redirect('/');
  }
}
