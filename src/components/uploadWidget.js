const cloudinary = require("cloudinary-react");

cloudinary.config({
  cloud_name: "ftchr",
  api_key: "473538252916358",
  api_secret: "DZFuFdfpmiaUg57U_vGvSEyWAJ4",
});

console.log(cloudinary.url("sample"));

//upload image widget
// function showUploadWidget() {
//   cloudinary.openUploadWidget(
//     {
//       cloudName: "<cloud name>",
//       uploadPreset: "<upload preset>",
//       sources: ["url", "camera", "local"],
//       googleApiKey: "<image_search_google_api_key>",
//       showAdvancedOptions: true,
//       cropping: true,
//       multiple: false,
//       defaultSource: "local",
//       styles: {
//         palette: {
//           window: "#10173a",
//           sourceBg: "#20304b",
//           windowBorder: "#7171D0",
//           tabIcon: "#79F7FF",
//           inactiveTabIcon: "#8E9FBF",
//           menuIcons: "#CCE8FF",
//           link: "#72F1FF",
//           action: "#5333FF",
//           inProgress: "#00ffcc",
//           complete: "#33ff00",
//           error: "#cc3333",
//           textDark: "#000000",
//           textLight: "#ffffff",
//         },
//         fonts: {
//           default: null,
//           "'IBM Plex Sans', sans-serif": {
//             url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
//             active: true,
//           },
//         },
//       },
//     },
//     (err, info) => {
//       if (!err) {
//         console.log("Upload Widget event - ", info);
//       }
//     }
//   );
// }
