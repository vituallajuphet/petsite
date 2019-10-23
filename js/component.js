
Vue.component("app-header", {
    template:`
    <header>
        <div class="wrapper">
            <div class="logo"><router-link to="/"><img src="img/main_logo.png" :alt="h_data.comname"></router-link></div>
            <div class="header_info">
                <h2>Please contact with us: <mark>{{h_data.phone}} </mark>
                <span>email us at:<a :href="'mailto:' + h_data.email"> {{h_data.email}}</a></span>
                </h2>     
            </div>
            <div class="clearfix"></div>
        </div>
    </header>
    `,
    props:{
        h_data :{
            type:Object,
            required: true
        }
    },
    data(){ 
        return{ 
            msg:"shithead"
        }
    }
})
Vue.component("app-nav", {
    template:`
    <nav>
        <div class="wrapper">
        <ul>
        <li><router-link :to="{name:'home'}" exact>Home</router-link></li>
        <li><router-link :to="{name:'about'}" exact>About Us</router-link></li>
        <li><router-link :to="{name:'services'}" exact>Services</router-link></li>
        <li><router-link :to="{name:'blog', params:{id:''}}" exact>Blog</router-link></li>
        <li><router-link :to="{name:'contact'}" exact>Contact Us</router-link></li>
       </ul>
        </div>
    </nav>
    `,
    data(){
        return{ 
            msg:"fuckesit"
        }
    }
})
Vue.component("app-blog", {
    template:`
    <div class="blog-cont" :class="{'isPage' : isBlogpage}">
    <div class="wrapper">
    <h2>Our Blog Post</h2> 
    <section v-for="bpost in blogdata">
        <figure><img :src="'./img/' + bpost.imgUrl" alt=""></figure>
        <h3>{{bpost.title}}</h3>
        <p>{{bpost.blogpost}}</p>
        <router-link :to="{path:'/blog/post/'+bpost.id }">Read More...</router-link>
    </section>

    <router-link v-if="!isBlogpage" class="blog_link" :to="{name:'blog'}">View Posts</router-link>
    
    </div>
    </div>
    `,
    data(){
        return{ 
            blogdata: blogData
        }
    },
    computed:{
        isBlogpage: function(){
            return (this.$route.name == 'blog') ? true : false 
        }
    }

})

Vue.component("app-post",{
    template:`
    <div class="b_posts">
       <h2>{{blog_post.title}}</h2>
       <p>{{blog_post.blogpost}}</p>
       <div class="cmt_sect">
        <strong class="c-header">Comments</strong>
       <ul>
       <li v-for="com in  blog_post.comments">
        <h5>{{com.name}}</h5>
         <p>{{com.comm}}</p>
       </li>
       </ul>
       </div>
        <div class="commentField" v-if="toComment">
         <textarea v-model="txtcomment" placeholder="Write you positive comments"></textarea>
         <a class="close_comm" @click="closeCommentField" href="javascript:;">x</a>
         <span class="is_writing" v-show="isWriting">someone is writing...</span>
         </div>
        <div class="btm_post">
            <div class="action_sect">
            <button>Like</button> 
            <button @click="willWriteComent">{{btnComment}}</button> 
            </div>
        </div>
    </div>     
    `,props:{
        postId:{
            type:String,
            required: true
        }
    },
    methods:{
        getPost :function(){
          let len = blogData.length
          for(i = 0; i < len;i++){
              if(blogData[i].id == this.postId ){
                  this.blog_post = blogData[i];
                  break;
              }
             
          }
        },
        willWriteComent : function(){
            this.toComment = true
            if(this.isWriting){
               this.toComment =false
               this.isWriting = false
               this.txtcomment =""
            }
        },
        closeCommentField:function(){
            this.toComment = false
            this.txtcomment =""
        }
    },
    data(){
        return {
          blog_post :{},
          toComment:false,
          txtcomment:"",
          isWriting:false,
          btnComment:"Comment"
        }
    },
    mounted(){
        this.getPost()
    },
    computed:{
        
    },
    watch :{
        txtcomment : function(nw, old){
            if(this.txtcomment != ""){
                this.isWriting = true;
                this.btnComment ="Save Comment"
            }else{
                this.isWriting = false;
                this.btnComment ="Comment"
            }

        }
    }

})

Vue.component("services_box",{
    template:`
    <div class="srv_list">
        <ul>
            <li v-for="c in count" >
              <router-link :to="{path:'/services/list/'+c}"><span>Services box</span></router-link>
            </li>
        </ul>
    </div>     
    `,
    data(){
        return {
            count: 4
        }
    }

})

Vue.component("app-footer", {
    template:`
    <footer>
    <div class="wrapper">
          <div class="social">
            <a href="https:www.facebook.com/" target="_blank"><img src="./img/fb.png"></a>
            <a href="https:www.twitter.com/" target="_blank"><img src="./img/twit.png"></a>
        </div>
        <div class="copyright">
            <span >All Rights reserved {{datas.copyright_year}}</span>
            <span class="com"><router-link :to="{name:'home'}">{{datas.comname}}</router-link></span>
            <span >{{datas.developer}}</span>
        </div>
        
    </div>
    </footer>
    `,
    data(){
        return{ 
            
        }
    },
    props:{
        datas:{
            required:true,
            type:Object
        }
    }
})

Vue.component("app-bottom", {
    template:`
    <div id="bottom">
        <div class="wrapper">
            <btm-content></btm-content>
            <div v-if="toBeDisplay" class="btm_res">
                <h5 class="msg">We will update this gallery section soon...</h5>
            </div>
        </div>
    </div>
    `,
    data(){
        return{ 
            hasGallery: false
        }
    },
    props:{
     
    },
    computed: {
        toBeDisplay:function(){
            return (this.$route.name == 'home' && !this.hasGallery) ? true : false
        }
    }
})
Vue.component("btm-content", {
    template:`
        <div class="btm_info">
            <h2>{{pageInfo.header}}</h2>
            <p>{{pageInfo.information}}</p>
        </div>
    `,
    data(){
        return{ 
            btm_info:btm_data,
            routePage: this.$route.name,
            pageInfo:{}
        }
    },
    props:{
       
    },
    methods:{
      updateBtmInfo:function(){
         let len =this.btm_info.length;
         for(i=0;i < len;i++){
             if(this.routePage == this.btm_info[i].name){
                this.pageInfo = this.btm_info[i];
                break;
             }
         }
         console.log(this.pageInfo)
      }
    },
    computed:{

    },
    watch :{
        '$route' (to, from){
            this.routePage = to.name
            this.updateBtmInfo()
        }
    },
    mounted(){
        this.updateBtmInfo()
    }
})

