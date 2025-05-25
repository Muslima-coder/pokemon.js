let elPokemonList = document.querySelector(".pokemon-list")
let elSearchInput = document.querySelector(".search-input")
let elModalWrapper = document.querySelector(".pokemons-modal")

//Pokemonlar 
function PokemonsFn (arr, list){
   list.innerHTML = null
   arr.forEach(item => {
    let elItem = document.createElement ("li")
   let typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  poison: "bg-purple-500",
  bug: "bg-lime-500",
  flying: "bg-sky-400",
  ground: "bg-yellow-700",
  psychic: "bg-pink-500",
  normal: "bg-gray-500",
  default: "bg-gray-400"
};

const typeBtns = item.type.map(type => {
  const color = typeColors[type.toLowerCase()] || typeColors.default;
  return `<button class="w-[70px] mt-[10px] py-[3px] px-[5px] rounded-md text-white text-[12px] ${color}">
    ${type.toUpperCase()}
  </button>`;
}).join("");


    elItem.innerHTML = `
    <div class="relative mt-[80px]">
    <img onclick="handleModalPokemons(${item.id})" class="absolute top-[-75px] left-0 right-0 mx-auto !w-[100px] transition-transform hover:scale-[1.2] duration-400" src="${item.img}" alt="photo"/>
    <div onclick="handleModalPokemons(${item.id})" class="bg-slate-200 text-center   rounded-[92px] w-[200px] h-[150px]">
    <p class="text-slate-700 pt-[45px]"> #<span>${(item.id)}</span> </p>
    <strong class="font-extrabold text-[20px]"> ${item.name}</strong>
    <div class="flex gap-[5px] justify-center"> ${typeBtns}</div>
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


//Modal
function handleModalPokemons(id){
  let findObj = pokemons.find(item => item.id == id)
     let typeColors = {
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    poison: "bg-purple-500",
    bug: "bg-lime-500",
    flying: "bg-sky-400",
    ground: "bg-yellow-700",
    psychic: "bg-pink-500",
    normal: "bg-gray-500",
    default: "bg-gray-400"
  };

  let typeBtns = findObj.type.map(type => {
    const color = typeColors[type.toLowerCase()] || typeColors.default;
    return `<button class="w-[70px] py-[3px] px-[5px] rounded-md text-white text-[12px] ${color}">
      ${type.toUpperCase()}
    </button>`;
  }).join("");

    let weaknessesBtns = findObj.weaknesses.map(weaknesses => {
    const color = typeColors[weaknesses.toLowerCase()] || typeColors.default;
    return `<button class=" py-[3px] px-[7px] rounded-md text-white text-[12px] ${color}">
      ${weaknesses.toUpperCase()}
    </button>`;
  }).join("");

  console.log(findObj)
    elModalWrapper.innerHTML = `
    <img class="w-[150px] absolute top-[-90px] right-0 left-0 mx-auto"  src="${findObj.img}" alt="photo" >
    <div class="flex justify-between p-[15px]">
    <p class=" px-5 py-2 rounded-md text-[14px] text-black font-medium bg-slate-200" > ${findObj.height}</p>
    <p class=" px-5 py-2 rounded-md text-[14px] text-black font-medium bg-slate-200" > ${findObj.weight}</p>
    </div>
    <p class="text-center text-slate-600 mb-[8px] "> #${findObj.id}</p>
    <p class="text-center font-semibold text-[20px] "> ${findObj.name}</p>
    <div class="flex justify-between ">
    <div class="ml-[25px] ">
    <p class="text-[15px] font-medium text-center ">Types</p>
    <div class=" flex  gap-5 mt-[8px]">${typeBtns}</span></div>
    </div>
    <div class="px-[15px] ">
    <p class="text-[15px] font-medium text-center "> Weaknesses</p>
    <div class=" flex flex-wrap justify-center  gap-1 mt-[8px]">${weaknessesBtns}</span></div>
    </div>
    </div>
    <div class="text-center mt-[10px]"><i class="font-medium  text-[15px] text-slate-400"> alalalalal</i></div>
    `
}