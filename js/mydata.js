console.clear()

var blogData  = [
    {id:1, 
     blogpost:"Vue JS is an opensource Javascript Framework. It was developed by 'Evan Yuo' a former developer from Google.", 
     title:"Vue JS", 
     imgUrl:"vue.png",
     comments:[
        {
            uid:1,
            cid:1,
            comm:"learn has no limitation, only our mind.",
            name:"Jupiter Vitualla"
        },
        {
            uid:2,
            cid:2,
            comm:"Yeah you are right jupiter.",
            name:"Jacob Reid"
        },
        {
            uid:3,
            cid:6,
            comm:"I think every should see this post.",
            name:"Joshua Baybayanon"
        }
     ]
    },
    {id:2, 
        blogpost:"Angular JS 7 is also Javascript Framework using TypeScript code. Developed by Google Inc.", 
        title:"Angular JS 7", 
        imgUrl:"angular.png",
        comments:[
           {
               uid:1,
               cid:3,
               comm:"Please dont say to someone they are weak if you dont really know him.",
               name:"Juphet Vitualla"
           },
           {
               uid:2,
               cid:4,
               comm:"I love angular it helps me a lot in our project..",
               name:"Joseph Reid"
           }
        ]
       },
       {id:3, 
        blogpost:"React JS is an opensource Javascript framework that mostly used by web developers today. Created by Facebook. ", 
        title:"React JS", 
        imgUrl:"react.png",
        comments:[
           {
               uid:1,
               cid:6,
               comm:"sample 3 comment 3",
               name:"juphet vitualla"
           },
           {
               uid:2,
               cid:4,
               comm:"sample 3 comment 3",
               name:"Jacob Vitualla"
           }
        ]
       }
]

var content_data = {
    home:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat fugit veniam, omnis ipsum, explicabo eum eius voluptas earum facilis molestiae dolor, nemo quo. Accusamus quis deleniti eius molestias dicta.",
    about: {
    main:"<strong>Pet Site </strong>uses Vue.Js Platform. <br><strong>Pet Site</strong>  was developed by a person who failed many times, downed by others several times, but they didn't know that this person is a deaf. Not physically deaf, but mentally deaf from the negative sayings of others to him. He believed that learnings has no end point. He never compare himself to someone better than him because he treat himself always as a beginner. So he encourages everyone to never stop learning, even you are PhD, Master, CEO, Professionals, Supervisor, Team Leader, Senior Developer, Top Performer of the month of May and even President...",
    mission:"Our mission is to teach everyone to not judging other people by its own appearance, doings, by his words, and even capacity.",
    vision:"Our Vision is to learn more and more and more even somebody said to you '<em>you are weak'</em>, '<em>you dont know javascript'</em>, <em>'you are slow'</em>  but still, we never stop learning despite of those negative words we heard from others.",
    lastline:"Genius people ask often even it is non sense to you, because they are curious of everything."
    },
    services:"Our services is to alter the mind set of a person who has a negative pratice, like  instead of encouraging others",
    blog:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat fugit veniam, omnis ipsum explicabo eum eius voluptas earum facilis molestiae dolor, nemo quo. Accusamus quis deleniti eius molestias dicta.",
    contact:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat fugit veniam, omnis ipsum}  explicabo eum eius voluptas earum facilis molestiae dolor, nemo quo. Accusamus quis deleniti eius molestias    dicta."
    }

var btm_data = [
    {
        name:'home',
        header:"Pet Site Gallery",
        information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur accusantium atque, dolores enim voluptatum itaque, sequi blanditiis tenetur a maiores sint qui quibusdam quia laudantium similique reprehenderit voluptate nemo!"
    },
    {
        name:'about',
        header:"Methods and Funtionalities",
        information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur accusantium atque, dolores enim voluptatum itaque, sequi blanditiis tenetur a maiores sint qui quibusdam quia laudantium similique reprehenderit voluptate nemo!"
    },
    {
        name:'services',
        header:"Sevices Bottom Section",
        information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur accusantium atque, dolores enim voluptatum itaque, sequi blanditiis tenetur a maiores sint qui quibusdam quia laudantium similique reprehenderit voluptate nemo!"
    }
]