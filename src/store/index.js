import {createStore} from "vuex";
import {postModule} from "@/store/postModule";
import {likeModule} from "@/store/likeModule";

export default createStore({

    modules: {
        post: postModule,
        like: likeModule
    }
})
