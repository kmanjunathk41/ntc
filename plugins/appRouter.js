export default ({app}) => {
  // console.log(app);
  app.router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (to.path === '/') {
      app.store.commit('setAppState', false);
    } /* else app.store.commit("changeAppState",true); */
    next();
    /* console.log("beforeEach");
        if(!app.store.state.userId && to.path !== "/"){
            console.log("***** 1");
            app.store.commit("changeAppState",false);
            next({
                path: "/"
            });
        }else if(to.path === "/"){
            console.log("***** 2");
            app.store.commit("changeAppState",false);
            next();
        }else {
            console.log("***** 3");
            app.store.commit("changeAppState",true);
            next();
        } */
  });
};
