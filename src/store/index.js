import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loginuser:'',
      cartlist:[],
      booklist:[],
      personlist:[],
      NoticInfo:[],
      bookserach:[],
      SerachInfo:[],
      id:'',
      address:'192.168.161.183',



  },
  mutations: {

      setBookSerach(state,obj){
          state.bookserach = [];
          state.bookserach=obj;
      },
      setId(state,obj){
          state.id=obj;
      },
      setSerachInfo(state,obj){
          state.SerachInfo = [];
          state.SerachInfo=obj;
      },

      setNoticInfo(state,obj){
          state.setNoticInfo = [];
          state.setNoticInfo=obj;
      },

      setLoginUser(state,obj){
        state.loginuser=obj;
      },
      setBookList(state,obj){
          state.booklist = [];
          state.booklist = obj;
      },
      setpersonList(state,obj){
          state.personlist = [];
          state.personlist = obj;
      },
      addCart(state,obj){
          var prod=null;
          prod=state.cartlist.find((item)=>{
              return(item.id==obj.id);
          })
          if (prod!=undefined)
              prod.count++;
          else
              state.cartlist.push(obj);
      },
      modifyCartCount(state,obj){
          var count = parseInt(state.cartlist[obj.index].count);
          count = count + obj.num;
          if (count>=1)
              state.cartlist[obj.index].count=count;
          else
              state.cartlist[obj.index].count = 1;
      },
      deleteCart(state,index){
          state.cartlist.splice(index,1);
      }
  },
  actions: {
  },
  modules: {
  }
})
