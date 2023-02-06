import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    currentCity: '',
    weatherReports: [],
    weatherInformationIsShown: true,
    locationNames: []
  }),
  getters: {
    dataIsPresent () {
      return this.weatherReports.length === 0
    }
  },
  actions: {
    setCityName (value) {
      this.currentCity = value
    },
    toggleWeatherTab () {
      this.weatherInformationIsShown = !this.weatherInformationIsShown
    },
    addWeatherReport (report) {
      this.weatherReports.push(report)
    },
    deleteReport (city) {
      const index = this.weatherReports.findIndex((elem) => elem.city === city)
      this.weatherReports.splice(index, 1)
      this.locationNames.splice(city)
      this.setLocalStorageData()
    },
    getWeatherReport (city) {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=56ab990607da4d858f3103156230102&q=${city}&aqi=no`
        )
        .then((res) => {
          const { humidity, condition, temp_c, wind_kph, vis_km } =
            res.data.current
          const { name } = res.data.location
          this.setCityName(res.data.location.name)
          this.addWeatherReport({
            city: name,
            humidity,
            wind_kph,
            temp_c,
            image: condition.icon,
            text: condition.text,
            visibility: vis_km
          })
          this.locationNames.push(name)
          this.locationNames = [...new Set(this.locationNames)]
          this.setLocalStorageData()
        })
    },
    getInitialWeatherData (pos) {
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      axios
        .get(geoApiUrl)
        .then((res) => {
          this.setCityName(res.data.city)
        })
        .then(() => {
          this.getWeatherReport(this.currentCity)
        })
    },
    setLocalStorageData () {
      localStorage.setItem('locationNames', JSON.stringify(this.locationNames))
    }
  }
})
