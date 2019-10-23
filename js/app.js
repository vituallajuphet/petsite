const home ={
    template:`<div class="content">
    <h1 class="h1_title">Welcome to <span>Pet Site</span></h1>
    <p>${content_data.home}</p>
    </div>`,
    props:{
       maindata:{
           type:Object
       }
    },
    data (){
        return {
          title: "shit"
        }
    }
}
const about ={
    template:`<div class="content">
    <h1 class="h1_title">About Us Page</h1>
    <p>${content_data.about.main}</p>

    <h3>Our Mission</h3>
    <p>${content_data.about.mission}</p>

    <h3>Our Vision</h3>
    <p>${content_data.about.vision}</p>
    </div>`
}
const services ={
    template:`<div class="content">
    <h1 class="h1_title">Services Page</h1>
    <p>${content_data.services}</p>
    <services_box></services_box>
    </div>`
}
const Blog ={
    template:`<div class="content">
    <h1 class="h1_title">Blog Page</h1>
    <app-blog></app-blog>
    </div>`
}
const Contact ={
    template:`<div class="content"> 
    <h1 class="h1_title">Contact Page</h1>
    <button>submit</button
    ></div>`
}
const blogpost ={
    template:`<div class="content"> 
    <h1 class="h1_title">Blog Post Page</h1>    

    <app-post :postId="id"></app-post>

    </div>`,
    methods:{

    },
    data(){
        return {
            id: this.$route.params.id
        }
    },
    created (){
     
    },
    mounted(){
        
    }

}
const servicelistpost ={
    template:`<div class="content"> 
    <h1 class="h1_title">Services list Page</h1>
    </div>`
}
const routes = [
    {path: '/', name:'home', component: home},
    {path: '/about-us', name:'about', component: about},
    {path: '/services', name:'services', component: services},
    {path: '/blog/', name:'blog', component: Blog},
    {path: '/contact-us', name:'contact', component: Contact},
    {path: '/blog/post/:id', name:'blogpost', component: blogpost},
    {path: '/services/list/:id', name:'servicelist', component: servicelistpost}
]
const router = new VueRouter({
    hash:false,
    routes:routes,
    
})
var app = new Vue({
    el:"#app",
    data :{
       header_data :{
        title:"Petsite",
        comname:"Pet Site",
        phone:"123-456-7890",
        email:"opet@shithead.com"
       },
       footer_data:{
           copyright_year:2019,
           
           developer:"Juphet Vitualla",
           comname:"Pet Site"
       }
    },
    router,
    methods: {
    
    },
    computed:{

    },
    mounted(){

    },
    created(){

    }
})