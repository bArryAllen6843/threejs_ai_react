import { proxy } from "valtio";

// whatever is defined in here will be utilized in the entire application
const state = proxy({
    // are we currently in the home page
    intro: true,
    color: '#EFBD48',
    // are we currently displaying logo on our shirt
    isLogoTexture: true,
    isFullTexture: false,
    // default values for logo and texture
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;