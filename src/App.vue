<template>
  <div class="container">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search...." />
      </div>

      <div class="weather-wrap">
        <div class="location-box">
          <div class="location">Almaty,KZ</div>
          <div class="date">Monday</div>
        </div>
      </div>

      <div class="weather-box">
        <div class="temp">9°c</div>
        <div class="weather">Rain</div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      apiKey: "94c4fe95f0b325f23bbee21adc86741b",
    };
  },
};
</script>

<style>
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
.container {
  background-image: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
.search-box {
  width: 100%;
  padding: 10px;
}
.search-bar {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 30px;
  padding: 20px;
  font-size: 20px;
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
