<template>
    <div class="section grid grid-cols-1 h-screen flex items-center justify-center">
        <img class="h-auto max-w-full" src="images/background/markus-hero.jpg" alt="Marcous De Villa Hero Image">
    </div>
    <div
        class="section profsum gap-20 px-40 h-screen flex items-center align-center text-justify font-montserrat w-full h-full">
        <div class="w-1/2">
            <div class="h-1/2">
                <h1 class="mb-4 text-4xl font-extrabold"><span
                        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">PROFESSIONAL</span>
                    SUMMARY</h1>
            </div>
            <div class="h-1/2 text-lg">
                <p class="font-bold text-gray-700">A goal-oriented and responsible individual who graduated with a Bachelor
                    of Science degree in
                    Information Technology. A resilient leader with 2 years of experience in web development
                    using the Laravel framework. My known strengths include the ability to collaborate effectively
                    with others, adapt quickly to new situations, adhere to strict deadlines and deliverables, and
                    bring an energetic vibe to the workplace.</p>
            </div>
        </div>

        <div class="w-1/2">
            <div class="h-full text-lg">
                <p class="font-bold text-gray-700"> I am seeking the position of a junior web developer
                    to apply my knowledge in this field, contribute effectively, and further enhance my skills to
                    provide valuable assistance in web development. I am enthusiastic about expanding my skill
                    set and am eager to undergo any necessary training to excel in this role.</p>
            </div>
        </div>
    </div>
 
    <div class="section header-mini h-screen flex items-center align-center text-justify">

        <div class="w-1/2 grid h-screen place-items-center font-montserrat tracking-tighter">
            <div
                class="px-5 py-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" class="flex items-center justify-center">
                    <img class="rounded-t-lg w-4/5" src="images/background/acmcl-trans.png" alt="ACMCL College Logo" />
                </a>
                <div class="p-5">
                    <p class="mb-2 text-lg font-extrabold">TVL - Computer Programming</p>
                    <ul class="mb-7 max-w-md text-sm space-y-1 text-black list-disc list-inside text-sm">
                        <li>Ranked 2nd Overall in TVL Strand</li>
                        <li>Student Body Organization - Councilor</li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="w-1/2 grid h-screen place-items-center font-montserrat tracking-tighter">
            <div
                class="px-5 py-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" class="flex items-center justify-center">
                    <img class="rounded-t-lg w-4/5" src="images/background/minsu-trans.png"
                        alt="Mindoro State University Logo" />
                </a>
                <div class="p-5">
                    <p class="mb-2 text-lg font-extrabold">BS in Information Technology</p>
                    <ul class="max-w-md space-y-1 text-sm text-black list-disc list-inside text-sm">
                        <li>2021 - 2022 Typing Proficiency -
                            Champion</li>
                        <li>2022 Dean’s Lister</li>
                        <li>2023 Web Designing Contest -
                            Champion</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="section profsum gap-20 px-40 h-screen flex items-center align-center text-justify  w-full h-full">
        <div class="w-1/2">
            <div id="gallery" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="images/projects/brgydash.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="images/projects/brgycrud.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="images/projects/brgycrud2.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="images/projects/brgyreports.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button"
                    class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
        <div class="w-1/2 font-lexend">
            <h1 class="text-2xl mb-5 text-blue-900 font-extrabold text-center tracking-tighter">eBRGY: A Barangay Services Management System with SMS Notification</h1>
       <p>I collaborated with my team to create the eBRGY: A Barangay Services Management System with SMS Notification. Our primary goal was to streamline and modernize the traditional manual processes used by barangays and the DILG. Through this web-based system, we facilitated easier report consolidation, efficient data submission, and seamless data exchange among different barangays. The user-friendly interface further enhances the system's accessibility and usability.</p>
       <p class="text-gray-500 mt-2 text-center text-sm"><i>Developed using HTML, CSS Frameworks (Bootstrap, Tailwind), PHP (Laravel), MySQL.</i></p>   
    </div>
    </div>
    <div class="section profsum gap-20 px-40 h-screen flex items-center align-center text-justify w-full h-full">
        <div class="w-1/2 font-lexend tracking-tighter">
            <h1 class="text-2xl mb-5 text-blue-900 font-extrabold text-center">BFAR-SAAD Website</h1>
            <p>I spearheaded the development of the BFAR-SAAD Website, which serves as a valuable platform for SAAD to disseminate program-related information, updates, and event details. The website also plays a pivotal role in raising awareness about the program and outlining the ways in which it benefits its recipients. The system features a user-friendly homepage providing an insightful overview of the website, while its various sections encompass a wide array of informative content</p>
            <p class="text-gray-500 mt-2 text-center text-sm"><i>Developed using HTML, CSS Frameworks (Bootstrap, Tailwind), PHP (Laravel), and MySQL.</i></p>
        </div>
        <div class="w-1/2">
            
            <div id="gallery" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="images/projects/bfarhero.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="images/projects/bfarhome.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="images/projects/bfarpress.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="images/projects/bfarhome.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="images/projects/bfaradmin.png"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="">
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button"
                    class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
</div>


        <div
            class="section gap-20 px-40 h-screen flex items-center align-center text-justify font-montserrat w-full h-full">
            <div class="w-screen grid grid-rows-4 grid-flow-col gap-4">

                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/api.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">REST API</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/bootstrap.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">Bootstrap</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/communicationskills.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">Communication Skills</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/css.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">Cascading Style Sheet</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/github.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">GitHub</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/html.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">HTML</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/js.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">JavaScript</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/laravel.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">Laravel</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/mysql.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">MySQL</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/nodejs.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">Node.js</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/npm.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">NPM</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/php.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">PHP</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/tailwind.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">Tailwind</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/typingproficiency.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">Typing Proficiency (90 WPM)</p>
                </a>
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="icon rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="images/icon/vuejs.png" alt="">
                    <p class="px-5 font-normal text-gray-700 dark:text-gray-400">VueJS</p>
                </a>
            </div>
        </div>
        <!-- Scroll buttons -->
        <div class="scroll-buttons">
            <button class="scroll-button" @click="scrollToPreviousSection()">▲</button>
            <button class="scroll-button" @click="scrollToNextSection()">▼</button>
        </div>
</template>

<script>
export default {
    data() {
        return {
            sections: [],
            currentSectionIndex: 0,
        };
    },
    mounted() {
        this.sections = document.querySelectorAll('.section');
    },
    methods: {
        scrollToNextSection() {
            if (this.currentSectionIndex < this.sections.length - 1) {
                this.currentSectionIndex++;
                this.sections[this.currentSectionIndex].scrollIntoView({
                    behavior: 'smooth',
                });
            }
        },
        scrollToPreviousSection() {
            if (this.currentSectionIndex > 0) {
                this.currentSectionIndex--;
                this.sections[this.currentSectionIndex].scrollIntoView({
                    behavior: 'smooth',
                });
            }
        },
    },
};
</script>

<style>
.header-mini {
    background-image: url(images/background/bg5.jpg);
    background-repeat: no-repeat;
    background-size: 100% 80%;
    background-position: center;
}

.icon {
    width: 20%;
    margin-left: 10px;
}

.scroll-buttons {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-55%);
    z-index: 999;
    /* Ensure it's on top of other content */
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Style for each button (you can customize these) */
.scroll-button {
    background-color: gray;
    color: #fff;
    border: none;
    padding: 10px;
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
}</style>