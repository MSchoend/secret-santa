<script>
  import "./app.css"
  import ThemeGenerator from "./lib/ThemeGenerator.svelte"

  let year = 2023
</script>

<main class="grid justify-items-center">
  <div class="bg-red-600 rounded shadow-md py-2 px-5 my-5">
    <h1 class="font-bold font-serif text-white text-3xl">Secret Santa {year}</h1>
  </div>
  <div>
    <ThemeGenerator/>
  </div>
</main>