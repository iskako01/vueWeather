<template>
  <div :class="+temp < 0 ? 'container-cold' : 'container-warm'">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search...."
          v-model="city"
        />
        <button class="btn" @click="searchCity">Search</button>
      </div>
      <div v-if="nameCity">
        <div class="weather-wrap">
          <div class="location-box">
            <div class="location">{{ nameCity }},{{ sysCity }}</div>
            <div class="date">{{ dateformat }}</div>
          </div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ temp }}°c</div>
          <div class="weather">{{ weather }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { fetchApiWeather } from "./api";
import moment from "moment";

export default {
  name: "App",
  components: {},
  data() {
    return {
      weatherData: {},
      city: "",
      nameCity: "",
      sysCity: "",
      temp: "",
      weather: "",
      date: new Date(),
    };
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.searchCity();
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.searchCity());
  },
  computed: {
    dateformat() {
      return moment(this.data).format("MMMM Do YYYY,h:mm:ss a");
    },
  },
  methods: {
    async searchCity() {
      console.log("enter");
      if (this.weatherData) {
        this.weatherData = await fetchApiWeather(this.city);
        this.temp = this.weatherData.main.temp;
        console.log(this.weatherData);
        this.weather = this.weatherData.weather[0].main;
        this.nameCity = this.weatherData.name;
        this.sysCity = this.weatherData.sys.country;
        this.city = "";
      } else {
        this.weatherData = "";
      }
    },
  },
};
</script>

<style>
#app {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  font-family: "montserrat", sans-serif;
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}
.container-cold {
  margin: 0 auto;
  width: 1024px;
  background-image: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
.container-warm {
  margin: 0 auto;
  width: 1024px;
  background-image: url("./assets/warm-bg.jpg");
  background-size: cover;
  /* background-position: bottom; */
  transition: 0.4s;
}
.search-box {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.btn {
  width: 100px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.btn:hover {
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
}
.search-bar {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 30px;
  padding: 20px;
  font-size: 20px;
  margin-right: 20px;
}
.weather-wrap {
}
.location-box {
}
.location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  padding-top: 10px;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.date {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  font-style: italic;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  padding: 7px;
}
.weather-box {
  text-align: center;
}
.temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 100px;
  font-weight: 600;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 20px;
}
.weather {
  padding: 10px 25px;
  color: #fff;
  font-size: 48px;
  font-weight: 600;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
