// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    id: 126,
    email: 'foo@example.com',
    password: 'test1',
    name: "John",
    surname: 'Doe',
    dob: '11/05/1996',
    ppic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cMDkDMq-zbMno6Nj7EopJIRD3R1s_7Uv6g&usqp=CAU'
  },
]

export default function index(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    users.map(user => {
      if (user.email === email && user.password === password) {
        return res.status(200).json({ result: true, return: { id: user.id, email: user.email, name: user.name, surname: user.surname, profilePic: user.ppic, dob: user.dob } })
      } else {
        return res.status(400).json({ result: false, return: "wrong credetials" })
      }
    })
  }

}

export const getChargingStations = (req, res) => {

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

  return res.status(200).json({ result: true, return: chargingStations })

}

