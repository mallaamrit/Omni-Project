<template>
<div class="grid grid-cols-4 ">
            <div  class="border-2 m-6 p-6 rounded-lg bg white w-72" v-for="item in items" :key="item.title">
                <img :src="item.img">
                <div class="border-b" >
                    <h1 class="font-bold inline border-b-1">{{item.title}} </h1> <span class="float-right inline-block text-blue-300">view all</span>
                    </div>
                    <p class="text-xs text-emerald-400">{{item.description}}</p> <span>{{item.updatedTime}}</span>  
            </div>
   </div>        
        
</template>

<script>
export default{
    name: 'Index',

    data() {
        return{

            items: [
                {
                    title: 'Resources', description: 'The djhadjhadfhadhf', 
                },
                {
                    img: '@/assets/images/img1.png', title: 'Training', description: 'The djhadjhadfhadhf', updatedTime:'Last Updated 21.07.2020'
                },
                {
                    img: '@/assets/images/img1.png', title: 'Contact & Support', description: 'The djhadjhadfhadhf', updatedTime: 'Last updated 21.07.2020'
                },
                {
                title: 'Notifications', description: 'The djhadjhadfhadhf', title1:[ {
                    icon: '',title3: 'Notification title here', para: 'asfhsjfskfh adfjksfj'
                }

                ] 
                },
                {
                    title: 'Onboarding', description: 'The djhadjhadfhadhf', 
                }
            ]
        }
    }
}

</script>

