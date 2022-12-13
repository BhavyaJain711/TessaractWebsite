import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <>
    <img style={{width:"150px",margin:"10px"}} src="images/logo.png" alt="logo" className="logo" />
    <div className="App">
      <Particles id="tsparticles"
      init={particlesInit}

        options={{
          fullScreen: {
    enable: true,
    zIndex: -1 // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
  },
          background: {
            color: "#000000"
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              "onhover":{
                "enable":true,
                "mode":"bubble"
                
              },
              resize: true,
            },"modes":{
                "bubble": {
                  "distance": 150,
                  "size": 8,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                
                
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            number: {
              density: {
                enable: true,
                area: 2000
              },
              limit: 0,
              value: 300
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05
              },
              value: 1
            },
            shape: {
              type: "star"
            },
            size: {
              randmon: {
                enable: true,
                minimumValue: 0.5,
                value: 1
              }
            }
          }
        }}
      />
    </div>
    </>
  );
}
