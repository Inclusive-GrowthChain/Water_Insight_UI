import getRandom from "../../helper/getRandom";

const dummy = [
  {
    id: getRandom(100, 999),
    testName: "Hussain Sagar",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(-0.2, 0, 1),
    lakeName: "Hussain Sagar",
    salinity: getRandom(1, 1.4, 1),
    chlorophyll: getRandom(-0.1, 0.1, 1),
    ph: getRandom(6.5, 8.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 900,
    percentage: "90%",
    eColi: getRandom(10, 200),
    date: "12-01-23",
    status: "Normal",
  },
  {
    id: getRandom(100, 999),
    testName: "Osman Sagar",
    type: "Other",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0, 0.2, 1),
    lakeName: "Osman Sagar",
    salinity: getRandom(1, 1, 1),
    chlorophyll: getRandom(0.1, 0.5, 1),
    ph: getRandom(4, 6.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 500,
    percentage: "50%",
    eColi: getRandom(10, 200),
    date: "13-01-23",
    status: "Warning",
  },
  {
    id: getRandom(100, 999),
    testName: "Durgam Cheruvu",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0.2, 0.5, 1),
    lakeName: "Durgam Cheruvu",
    salinity: getRandom(-1, 0, 1),
    chlorophyll: getRandom(0.5, 1, 1),
    ph: getRandom(11, 14, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 200,
    percentage: "20%",
    eColi: getRandom(10, 200),
    date: "14-01-23",
    status: "Danger",
  },
  {
    id: getRandom(100, 999),
    testName: "Hussain Sagar",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(-0.2, 0, 1),
    lakeName: "Hussain Sagar",
    salinity: getRandom(1, 1.4, 1),
    chlorophyll: getRandom(-0.1, 0.1, 1),
    ph: getRandom(6.5, 8.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 900,
    percentage: "90%",
    eColi: getRandom(10, 200),
    date: "12-01-23",
    status: "Normal",
  },
  {
    id: getRandom(100, 999),
    testName: "Osman Sagar",
    type: "Other",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0, 0.2, 1),
    lakeName: "Osman Sagar",
    salinity: getRandom(1, 1, 1),
    chlorophyll: getRandom(0.1, 0.5, 1),
    ph: getRandom(4, 6.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 500,
    percentage: "50%",
    eColi: getRandom(10, 200),
    date: "13-01-23",
    status: "Warning",
  },
  {
    id: getRandom(100, 999),
    testName: "Durgam Cheruvu",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0.2, 0.5, 1),
    lakeName: "Durgam Cheruvu",
    salinity: getRandom(-1, 0, 1),
    chlorophyll: getRandom(0.5, 1, 1),
    ph: getRandom(11, 14, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 200,
    percentage: "20%",
    eColi: getRandom(10, 200),
    date: "14-01-23",
    status: "Danger",
  },
  {
    id: getRandom(100, 999),
    testName: "Hussain Sagar",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(-0.2, 0, 1),
    lakeName: "Hussain Sagar",
    salinity: getRandom(1, 1.4, 1),
    chlorophyll: getRandom(-0.1, 0.1, 1),
    ph: getRandom(6.5, 8.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 900,
    percentage: "90%",
    eColi: getRandom(10, 200),
    date: "12-01-23",
    status: "Normal",
  },
  {
    id: getRandom(100, 999),
    testName: "Osman Sagar",
    type: "Other",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0, 0.2, 1),
    lakeName: "Osman Sagar",
    salinity: getRandom(1, 1, 1),
    chlorophyll: getRandom(0.1, 0.5, 1),
    ph: getRandom(4, 6.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 500,
    percentage: "50%",
    eColi: getRandom(10, 200),
    date: "13-01-23",
    status: "Warning",
  },
  {
    id: getRandom(100, 999),
    testName: "Durgam Cheruvu",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0.2, 0.5, 1),
    lakeName: "Durgam Cheruvu",
    salinity: getRandom(-1, 0, 1),
    chlorophyll: getRandom(0.5, 1, 1),
    ph: getRandom(11, 14, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 200,
    percentage: "20%",
    eColi: getRandom(10, 200),
    date: "14-01-23",
    status: "Danger",
  },
  {
    id: getRandom(100, 999),
    testName: "Hussain Sagar",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(-0.2, 0, 1),
    lakeName: "Hussain Sagar",
    salinity: getRandom(1, 1.4, 1),
    chlorophyll: getRandom(-0.1, 0.1, 1),
    ph: getRandom(6.5, 8.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 900,
    percentage: "90%",
    eColi: getRandom(10, 200),
    date: "12-01-23",
    status: "Normal",
  },
  {
    id: getRandom(100, 999),
    testName: "Osman Sagar",
    type: "Other",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0, 0.2, 1),
    lakeName: "Osman Sagar",
    salinity: getRandom(1, 1, 1),
    chlorophyll: getRandom(0.1, 0.5, 1),
    ph: getRandom(4, 6.5, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 500,
    percentage: "50%",
    eColi: getRandom(10, 200),
    date: "13-01-23",
    status: "Warning",
  },
  {
    id: getRandom(100, 999),
    testName: "Durgam Cheruvu",
    type: "Lake",
    deviceId: getRandom(10, 200),
    kd: getRandom(10, 200),
    turbidity: getRandom(0.2, 0.5, 1),
    lakeName: "Durgam Cheruvu",
    salinity: getRandom(-1, 0, 1),
    chlorophyll: getRandom(0.5, 1, 1),
    ph: getRandom(11, 14, 1),
    secchiDepth: getRandom(10, 200),
    startedValue: 1000,
    endedValue: 200,
    percentage: "20%",
    eColi: getRandom(10, 200),
    date: "14-01-23",
    status: "Danger",
  },
]

export default dummy