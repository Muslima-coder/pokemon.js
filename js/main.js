let elPokemonList = document.querySelector(".pokemon-list")
let elSearchInput = document.querySelector(".search-input")

//Pokemonlar 
function PokemonsFn (arr, list){
   list.innerHTML = null
   arr.forEach(item => {
    let elItem = document.createElement ("li")

    elItem.innerHTML = `
    <div class="relative mt-[80px]">
    <img class="absolute top-[-35px] left-0 right-0 mx-auto !w-[70px] transition-transform hover:scale-[1.2] duration-400" src="${item.img}" alt="photo"/>
    <div class="bg-slate-200 text-center   rounded-[92px] w-[200px] h-[150px]">
    <p class="text-slate-700 pt-[45px]"> #<span>${parseInt(item.num)}</span> </p>
    <strong class="font-extrabold text-[20px]"> ${item.name}</strong>
    <div class="flex gap-[5px] justify-center">
    <button class="w-[70px] mt-[40px] border-[1px] duration-400 border-green-400 hover:bg-transparent  bg-green-400  py-[3px] px-[5px] rounded-md  hover:text-green-400  text-white"><span class=" text-[12px] text-center">GRASS</span></button>
    <button class="w-[70px] mt-[40px] border-[1px] duration-400  border-purple-700 hover:bg-transparent bg-purple-700 py-[3px] px-[5px] rounded-md hover:text-purple-700  text-white"><span class=" text-[12px] text-center">POISON</span></button>
    </div>
    </div>

    </div>
    `

     list.appendChild(elItem)
   })
}
PokemonsFn( pokemons, elPokemonList)

//Search 
function Search (value, currentValue){
 if(value == "name"){
   let filteredArr = pokemons.filter(item => item[`${value}`].toLowerCase().includes(currentValue.toLowerCase()))
 PokemonsFn(filteredArr, elPokemonList)
 }
 if(value == "num"){
   let filteredArr = pokemons.filter(item => item[`${value}`].includes(currentValue))
 PokemonsFn(filteredArr, elPokemonList)
 }
}
elSearchInput.addEventListener("input", (evt) => {
  let value = evt.target.value;
  let type = isNaN(value) ? "name" : "num"; 
  Search(type, value);
});


