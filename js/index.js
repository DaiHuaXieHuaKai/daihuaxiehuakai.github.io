// JS only for the switch
$(function() {
    var lists = [{
            title: '实用网站收集',
            image: 'images/website.png',
            des: '这里收集了开发过程中遇到的实用网站和一些有趣的网站'
        },
        {
            title: '技术沙龙',
            image: 'images/1.jpg',
            des: '分享一些自己看到的技术文章，丰富自己的阅历。很多东西不一定要会但一定要有所了解。'
        },
        {
            title: '小方法合集',
            image: 'images/1.jpg',
            des: '添加一些自己平时用到的小方法，平时多收集练习，增加自己的小技巧能力。'
        }
    ]
    Vue.use(VueRouter)

    const Detail = {
        template: '<div>detial</div>'
    }
    const Home = {
        template: ``
    }
    const router = new VueRouter({
        routes: [{
            name: 'home',
            path: '/',
            component: Home
        }, {
            name: 'detail',
            path: '/detail',
            component: Detail
        }]
    })


    var app = new Vue({
        el: "#app",
        data: {
            isActive: true,
            title: '待花谢花开',
            lists: lists,
        },
        methods: {
            changeView: function(index) {
                if (index == 0) {
                    this.isActive = false;
                } else {
                    this.isActive = true;
                }
            },
            listDetail(item) {
                router.push('detail')
            }
        },
        router
    });




});