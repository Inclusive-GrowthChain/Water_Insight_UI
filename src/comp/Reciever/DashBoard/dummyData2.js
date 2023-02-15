import { months } from './constants';

const dummyData2 = [
  {
    id: "1",
    title: "Turbidity",
    data: {
      labels: months,
      datasets: [{
        data: [0.2, 0.6, 0.4, 0.3, 0.5, 0.8, 0.4, 0.2, 0.6, 0.4, 0.3, 0.5],
        borderRadius: 20,
        maxBarThickness: 6,
        borderWidth: 0,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        backgroundColor: "rgba(91, 216, 213, 1)",
      }],
    },
  },
  {
    id: "2",
    title: "PH",
    data: {
      labels: months,
      datasets: [{
        data: [10, 60, 20, 40, 50, 60, 30, 10, 60, 20, 40, 50],
        borderRadius: 20,
        maxBarThickness: 6,
        borderWidth: 0,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        backgroundColor: "rgba(27, 89, 248, 0.8)",
      }],
    },
  },
  {
    id: "3",
    title: "Salinity",
    data: {
      labels: months,
      datasets: [{
        data: [0.4, 0.9, 0.1, 0.5, 0.3, 0.7, 0.2, 0.4, 0.9, 0.1, 0.5, 0.3],
        borderRadius: 20,
        maxBarThickness: 6,
        borderWidth: 0,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        backgroundColor: "#2D9B5FCC",
      }],
    },
  },
  {
    id: "4",
    title: "DO",
    data: {
      labels: months,
      datasets: [{
        data: [10, 30, 60, 20, 60, 30, 40, 10, 30, 60, 20, 60],
        borderRadius: 20,
        maxBarThickness: 6,
        borderWidth: 0,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        backgroundColor: "#F81B6BCC",
      }],
    },
  },
  {
    id: "5",
    title: "Chlorophyll",
    data: {
      labels: months,
      datasets: [{
        data: [0.1, 0.2, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1],
        borderRadius: 20,
        maxBarThickness: 6,
        borderWidth: 0,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        backgroundColor: "#FFB536",
      }],
    },
  },
]

export default dummyData2