<script>
    import {themes} from './themes.js';

    let currentTheme = " ";

    function generateHandler() {
        currentTheme = themes[Math.floor(Math.random()*themes.length)]
    }

    function clearHandler() {
        currentTheme = " ";
    }
</script>

<div class="bg-green-900 font-serif rounded shadow-md w-96 grid justify-items-center">
    <button class="bg-gray-100 hover:bg-gray-300 text-green-900 rounded shadow-lg px-3 py-1 my-2" on:click={generateHandler}>
        Give me a Theme!
    </button>
    <p class="text-white text-xl">
        {currentTheme}
    </p>
    <button class="bg-gray-100 hover:bg-gray-300 text-green-900 rounded shadow-lg px-3 py-1 my-2" on:click={clearHandler}>
        Clear
    </button>
</div>

