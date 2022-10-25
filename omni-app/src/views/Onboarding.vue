<template>
    <div class="flex rounded overflow-hidden shadow-lg m-10">
        <!-- <div class="grid gap-8 font-Roboto"> -->
            <AsideNavBar />
            <!-- <div>
                <div>
                    <table class="w-full border">
                        <thead class="border-b">
                            <tr>
                                <th class="px-6 py-4">
                                    #
                                </th>
                                <th class="px-6 py-4">
                                    First
                                </th>
                                <th class="px-6 py-4">
                                    Last
                                </th>
                                <th class="px-6 py-4">
                                    Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-6 py-4">
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    Amrit
                                </td>

                                <td class="px-6 py-4">Malla</td>

                                <td class="px-6 py-4">
                                    Homebush
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            -->

            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <a href="#" className="group inline-flex">
                                                Name
                                                <span
                                                    className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <a href="#" className="group inline-flex">
                                                Title
                                                <span
                                                    className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <a href="#" className="group inline-flex">
                                                Email
                                                <span
                                                    className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                    <ChevronDownIcon
                                                        className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                                        aria-hidden="true" />
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <a href="#" className="group inline-flex">
                                                Role
                                                <span
                                                    className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                    <ChevronDownIcon
                                                        className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                                        aria-hidden="true" />
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                   
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">person.title</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">person.email</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">person.role</td>
                                        
                                    </tr>
                              
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                    </div>
                
        

        </div>
 
</template>


<script>
import AsideNavBar from '../components/AsideNavBar.vue'
export default {
    components: { AsideNavBar },
}

</script>


