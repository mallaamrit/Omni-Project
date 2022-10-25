<template>
    <div>
        <nav class="w-72 border-r-2 m-5 ">
            <div class="px-5 py-3 hover:bg-[#DCF1FC] cursor-pointer font-semibold text-lg font-Roboto" v-for="Li in Links"
                :key="Li.Li">
        
                <!-- <router-link :to="{ name: index}">{{Li}}</router-link>
                                <router-view/> -->
                <!-- <router-link :to="/resources">Resources</router-link> | -->
                <a href="#">{{Li}}</a>
            </div>
        </nav>
    </div>
        
       
</template>

<script>
export default {
    name: 'AsideNavBar',
    setup () {
        return {
            Links: ["Training", "Onboarding", "Resources", "Finance & Forecasting", "Contacts"]
        }
    }
}
</script>

