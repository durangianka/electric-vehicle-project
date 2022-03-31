
const chargingStations = [
  {
    title: "Revees Station",
    postCode: "W1K 2QD",
    slots: 10,
    available: 7,
    busy: 3,
    lat: 51.509938,
    lon: -0.152364
  },
  {
    title: "Bridgeway Station",
    postCode: "NW1 1QS",
    slots: 4,
    available: 4,
    busy: 0,
    lat: 51.532672,
    lon: -0.134228
  },
  {
    title: "Grayland Station",
    postCode: "WC1N 2AL",
    slots: 7,
    available: 2,
    busy: 5,
    lat: 51.526574,
    lon: -0.118447
  },
  {
    title: "Warner Station",
    postCode: "EC1R 3DJ",
    slots: 5,
    available: 2,
    busy: 3,
    lat: 51.52308,
    lon: -0.109178
  },
  {
    title: "Chiswell Station",
    postCode: "EC1Y 4AG",
    slots: 10,
    available: 7,
    busy: 3,
    lat: 51.520223,
    lon: -0.090683
  },
]


export default function getChargingStations(req, res) {

  return res.status(200).json({ result: true, return: chargingStations })

}