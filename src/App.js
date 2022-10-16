import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "chennai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-gray-900 to-gray-600";
    if (weather.dt >= weather.sunset || weather.dt <= weather.sunrise)
      return "from-gray-900 to-gray-600";

    return "from-yellow-500 to-orange-700";
  };
  return (
    <>
      <div
        className={`mx-auto max-w-screen-md my-10 py-5 px-12 bg-gradient-to-br  h-fit shadow-xl rounded-2xl shadow-gray-400 ${formatBackground()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <div
              style={{
                backgroundImage: `url(https://source.unsplash.com/1200x800/?${weather.details})`,
              }}
              className="px-4 py-1 shadow-md shadow-gray-400 rounded-xl my-12"
            >
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} units={units} />
            </div>
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
      </div>
    </>
  );
}
export default App;
