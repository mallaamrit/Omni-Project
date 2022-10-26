<template>
    <div class=" rounded overflow-hidden shadow-lg m-5 border font-roboto">
       
       
            <div class="flex">
                <AsideNavBar />
                <div class="flex">
                    <div class="w-96 m-5 p-4 border">
                        <contactForm />
                    </div>
                    <div class="m-5 p-4 border">
                        <h1 class="text-lg font-bold">Frequently asked questions</h1>
                        <div>
                           
                                <div>
                                    <p class="m-4">Title</p> 
                                    
                                        <div class="flex m-4">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                                                <div class="flex justify-evenly mx-4 px-4 ">
                                                    <div class="mx-2">
                                                        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M7 8.027v5.333m4-5.333v5.333M1 4.47h16m-1 0-.867 10.79c-.035.449-.26.87-.63 1.177-.37.307-.858.478-1.365.478H4.862c-.506 0-.993-.17-1.363-.477a1.708 1.708 0 0 1-.632-1.174L2 4.476l14-.005Zm-4 0V1.805a.804.804 0 0 0-.077-.34.89.89 0 0 0-.217-.289 1.017 1.017 0 0 0-.324-.192 1.11 1.11 0 0 0-.383-.068H7c-.265 0-.519.094-.706.26A.842.842 0 0 0 6 1.805V4.47h6Z"
                                                                stroke="#9EB3CC" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    
                                                    <div class="mx-2">
                                                        <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.12 1.41a1.687 1.687 0 1 1 2.386 2.386L3.952 11.35l-3.18.795.795-3.18L9.12 1.41Z" stroke="#9EB3CC"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    
                                                    
                                                    
                                                </div>
                                            
                                        </div>
                                    
                                </div>
                                
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>


</template>


<script>
import AsideNavBar from '../components/AsideNavBar.vue'
import ContactForm from '../components/ContactForm.vue'
export default {
    components: { AsideNavBar, ContactForm },
}

</script>


