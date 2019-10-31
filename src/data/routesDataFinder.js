import * as FileSystem from "expo-file-system";
const hours = [3, 6, 8, 10, 12, 14, 16, 17, 18, 19, 20, 22, 23, 24];

export default routesDataFinder = async hour => {
  for (let i = hour; i <= 24; i++) {
    const available = hours.includes(i);
    if (available) {
      const stringHour = (hour < 10 ? "0" : "") + i;
      return JSON.parse(
        await FileSystem.readAsStringAsync(
          `${FileSystem.documentDirectory}routesData_${stringHour}.json`
        )
      );
    }
  }
};
