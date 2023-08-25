function decimalToTime(decimalNumber: number) {
    const totalSeconds = Math.floor(decimalNumber * 3600); // Convert to total seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    // Format the time components
    const formattedTime = `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  
    return formattedTime;
  }
 
  
export default decimalToTime  
//   const decimalNumber = 2.75; // Example decimal number representing 2 hours and 45 minutes
//   const formattedTime = decimalToTime(decimalNumber);
//   console.log(formattedTime); // Output: "02h 45m 00s"