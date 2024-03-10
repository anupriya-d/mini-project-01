async function findPokemon() {
  let findPokeName = document.getElementById("textInput").value.toLowerCase();
  console.log(findPokeName);
  let fpokeType = "normal";
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${findPokeName}`
    );
    const data = await response.json();
    const fpokemonName = data.name.toUpperCase();
    const fpokemonImgUrl = data.sprites.other["official-artwork"].front_default;
    const fpokemonId = data.id;
    const fXp = data.base_experience;
    fpokeType = data.types[0].type.name;
    const fpokeW = data.weight;
    const fpokeH = data.height;

    const fpokeStatV0 = data.stats[0].base_stat;
    const fpokeStatN0 = data.stats[0].stat.name;
    const fpokeStatV1 = data.stats[1].base_stat;
    const fpokeStatN1 = data.stats[1].stat.name;
    const fpokeStatV2 = data.stats[2].base_stat;
    const fpokeStatN2 = data.stats[2].stat.name;
    const fpokeStatV3 = data.stats[3].base_stat;
    const fpokeStatN3 = data.stats[3].stat.name;
    const fpokeStatV4 = data.stats[4].base_stat;
    const fpokeStatN4 = data.stats[4].stat.name;
    const fpokeStatV5 = data.stats[5].base_stat;
    const fpokeStatN5 = data.stats[5].stat.name;

    let baseStatArr = [
      fpokeStatV0,
      fpokeStatV1,
      fpokeStatV2,
      fpokeStatV3,
      fpokeStatV4,
      fpokeStatV5,
    ];

    let statNameArr = [
      fpokeStatN0,
      fpokeStatN1,
      fpokeStatN2,
      fpokeStatN3,
      fpokeStatN4,
      fpokeStatN5,
    ];

    plotStats(baseStatArr, statNameArr);
    console.log(baseStatArr, statNameArr);

    document.getElementById("f-pokemon-name").innerHTML = fpokemonName;
    document.getElementById("f-pokemon-img").src = fpokemonImgUrl;
    document.getElementById("f-id").innerHTML = `ID IS: ${fpokemonId}`;
    document.getElementById("f-xp").innerHTML = `BASE EXP: ${fXp}`;
    document.getElementById("f-type").innerHTML = `TYPE : ${fpokeType}`;
    document.getElementById("f-weight").innerHTML = `WEIGHT: ${fpokeW}`;
    document.getElementById("f-height").innerHTML = `HEIGHT:${fpokeH}`;

    document.getElementById("errMsg").innerHTML = '';
  } catch (error) {
    console.error("Erro fetching pokemon data:", error);
    document.getElementById("errMsg").innerHTML=`No Pokemon Found,Enter Correct Name !`;

  }

  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  document.querySelector(".f-poke-card").style.backgroundColor =
    colours[fpokeType];




    function plotStats(baseStatArr, statNameArr) {
        // Assume you have an HTML element with id 'echart-container' for ECharts
        var myChart = echarts.init(document.getElementById("echart-container"));
      
        var option = {
          // ... (ECharts options for plotting)
      
          xAxis: {
            type: "category",
            data: statNameArr,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: baseStatArr,
              type: "bar",
            },
          ],
        };
      
        // use setOption to update ECharts options
        myChart.setOption(option);
      }
}
