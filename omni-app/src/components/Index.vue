<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-4 gap-5 mx-5 my-5 px-5 py-5 border">
       
        <div 
            class="rounded shadow-lg font-Roboto" 
            v-for="item in items" 
            :key="item.title">
            <img :src="item.img" alt="">
            <div class="px-3 py-3 flex justify-between border-b ">
                <h2 class="text-[#18181B]-900 font-semibold ">{{item.title}}</h2>
                <span class="text-[#16A1EB]">{{item.list}}</span>
                
            </div>
            
            <div>
                <ul>
                    <li class="px-3 py-5 flex justify-between">
                        <p class="text-[#9EB2CC]">{{item.updatedTime}}</p>

                        <p class="text-[#001024]">{{item.description}} <br> <span class="text-[#9EB2CC]">{{item.subdescription}}</span></p>
                        
                        <p class="text-[#9EB2CC] px-4">{{item.date}}</p>
                        
                        <span class=" my-6 px-2 text-[#00B294] bg-[#CCF0EA] rounded-full">
                            {{item.task}}
                        </span>
                    </li>
                </ul>  
            </div>  
        </div>   
    </div>
    </div>      
</template>

<script>
export default{
    data() {
        return{

            items: [
                {
                    title: 'Resources', list: 'view all', description: 'Recently added resources name', date: '21.10.2020', 
                },
                {
                    img: '../assets/images/img1.png', title: 'Training',  list: 'view all',  updatedTime:'Last updated 21.07.2020'
                },
                {
                    img: '../assets/images/img2.png', title: 'Contact & Support', list: 'view all',  updatedTime: 'Last updated 21.07.2020'
                },
                {
                    title: 'Notifications',  list: 'view all'
                },
                {
                    title: 'Onboarding',  list: 'view all', description: 'Welcome to OMG Connect', subdescription: 'The djhadjhadfhadhf shsjvasgvhjASVGHJ shgvs', task: 'Complete'
                    
                }
            ]
        }
    }
}


</script>

