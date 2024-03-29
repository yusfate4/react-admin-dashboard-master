
// export const tokens = (mode) => ({
//   ...(mode === "dark"
//     ?
//     {
//         grey: {
//           100: "#e0e0e0",
//           200: "#c2c2c2",
//           300: "#a3a3a3",
//           400: "#858585",
//           500: "#666666",
//           600: "#525252",
//           700: "#3d3d3d",
//           800: "#292929",
//           900: "#141414",
//         },
//         primary: {
//           100: "#d0d1d5",
//           200: "#a1a4ab",
//           300: "#727681",
//           400: "#1F2A40",
//           500: "#141b2d",
//           600: "#101624",
//           700: "#0c101b",
//           800: "#080b12",
//           900: "#040509",
//         },
//         greenAccent: {
//           100: "#dbf5ee",
//           200: "#b7ebde",
//           300: "#94e2cd",
//           400: "#70d8bd",
//           500: "#4cceac",
//           600: "#3da58a",
//           700: "#2e7c67",
//           800: "#1e5245",
//           900: "#0f2922",
//         },
//         redAccent: {
//           100: "#f8dcdb",
//           200: "#f1b9b7",
//           300: "#e99592",
//           400: "#e2726e",
//           500: "#db4f4a",
//           600: "#af3f3b",
//           700: "#832f2c",
//           800: "#58201e",
//           900: "#2c100f",
//         },
//         blueAccent: {
//           100: "#e1e2fe",
//           200: "#c3c6fd",
//           300: "#a4a9fc",
//           400: "#868dfb",
//           500: "#6870fa",
//           600: "#535ac8",
//           700: "#3e4396",
//           800: "#2a2d64",
//           900: "#151632",
//         },
//       }
//     : {
//         grey: {
//           100: "#141414",
//           200: "#292929",
//           300: "#3d3d3d",
//           400: "#525252",
//           500: "#666666",
//           600: "#858585",
//           700: "#a3a3a3",
//           800: "#c2c2c2",
//           900: "#e0e0e0",
//         },
//         primary: {
//           100: "#040509",
//           200: "#080b12",
//           300: "#0c101b",
//           400: "#f2f0f0", // manually changed
//           500: "#141b2d",
//           600: "#1F2A40",
//           700: "#727681",
//           800: "#a1a4ab",
//           900: "#d0d1d5",
//         },
//         greenAccent: {
//           100: "#0f2922",
//           200: "#1e5245",
//           300: "#2e7c67",
//           400: "#3da58a",
//           500: "#4cceac",
//           600: "#70d8bd",
//           700: "#94e2cd",
//           800: "#b7ebde",
//           900: "#dbf5ee",
//         },
//         redAccent: {
//           100: "#2c100f",
//           200: "#58201e",
//           300: "#832f2c",
//           400: "#af3f3b",
//           500: "#db4f4a",
//           600: "#e2726e",
//           700: "#e99592",
//           800: "#f1b9b7",
//           900: "#f8dcdb",
//         },
//         blueAccent: {
//           100: "#151632",
//           200: "#2a2d64",
//           300: "#3e4396",
//           400: "#535ac8",
//           500: "#6870fa",
//           600: "#868dfb",
//           700: "#a4a9fc",
//           800: "#c3c6fd",
//           900: "#e1e2fe",
//         },
//       }),
// });


// new

// export const tokens = (mode) => ({
//     ...createContext(
//       mode === "dark"
//         ? {
//             grey: {
//               100: "#cddcdf",
//               200: "#9bb8bf",
//               300: "#6995a0",
//               400: "#377180",
//               500: "#054e60",
//               600: "#043e4d",
//               700: "#032f3a",
//               800: "#021f26",
//               900: "#011013",
//             },
  
//             primary: {
//               100: "#cce4ea",
//               200: "#99c9d5",
//               300: "#66afc0",
//               400: "#3394ab",
//               500: "#007996",
//               600: "#006178",
//               700: "#00495a",
//               800: "#00303c",
//               900: "#00181e",
//             },
  
//             greenAccent: {
//               100: "#d4eef5",
//               200: "#a8deeb",
//               300: "#7dcde1",
//               400: "#51bdd7",
//               500: "#26accd",
//               600: "#1e8aa4",
//               700: "#17677b",
//               800: "#0f4552",
//               900: "#082229",
//             },
  
//             redAccent:  {
//               100: "#e2f4f9",
//               200: "#c6e9f2",
//               300: "#a9dfec",
//               400: "#8dd4e5",
//               500: "#70c9df",
//               600: "#5aa1b2",
//               700: "#437986",
//               800: "#2d5059",
//               900: "#16282d",
//             },
  
//             blueAccent: {
//               100: "#effafc",
//               200: "#e0f4f9",
//               300: "#d0eff6",
//               400: "#c1e9f3",
//               500: "#b1e4f0",
//               600: "#8eb6c0",
//               700: "#6a8990",
//               800: "#475b60",
//               900: "#232e30",
//             },
//           }
//         : {
//             grey: {
//               100: "#011013",
//               200: "#021f26",
//               300: "#032f3a",
//               400: "#043e4d",
//               500: "#054e60",
//               600: "#377180",
//               700: "#6995a0",
//               800: "#9bb8bf",
//               900: "#cddcdf",
//             },
  
//             primary:  {
//               100: "#00181e",
//               200: "#00303c",
//               300: "#00495a",
//               400: "#006178",
//               500: "#007996",
//               600: "#3394ab",
//               700: "#66afc0",
//               800: "#99c9d5",
//               900: "#cce4ea",
//             },
  
//             greenAccent:  {
//               100: "#082229",
//               200: "#0f4552",
//               300: "#17677b",
//               400: "#1e8aa4",
//               500: "#26accd",
//               600: "#51bdd7",
//               700: "#7dcde1",
//               800: "#a8deeb",
//               900: "#d4eef5",
//             },
  
//             redAccent: {
//               100: "#16282d",
//               200: "#2d5059",
//               300: "#437986",
//               400: "#5aa1b2",
//               500: "#70c9df",
//               600: "#8dd4e5", 
//               700: "#a9dfec",
//               800: "#c6e9f2",
//               900: "#e2f4f9",
//             },
  
//             blueAccent:  {
//               100: "#232e30",
//               200: "#475b60",
//               300: "#6a8990",
//               400: "#8eb6c0",
//               500: "#b1e4f0",
//               600: "#c1e9f3",
//               700: "#d0eff6",
//               800: "#e0f4f9",
//               900: "#effafc",
//             },
//           }
//     ),
//   });