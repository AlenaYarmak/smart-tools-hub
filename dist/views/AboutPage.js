"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Image_1 = __importDefault(require("react-bootstrap/Image"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const about_png_1 = __importDefault(require("../assets/img/about.png"));
const Triangles_png_1 = __importDefault(require("../assets/img/Triangles.png"));
const Grid_png_1 = __importDefault(require("../assets/img/Grid.png"));
const Contact_1 = __importDefault(require("../components/Contact"));
const getCSSVariable_1 = __importDefault(require("../utils/getCSSVariable"));
const AboutPage = () => {
    const [gradientPosition, setGradientPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = (0, react_1.useState)(false);
    const [position, setPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const logoColor = (0, getCSSVariable_1.default)('--secondary-color');
    const mainColor = (0, getCSSVariable_1.default)('--main-color');
    const hoverTitleColor = (0, getCSSVariable_1.default)('--button-color');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = () => {
        navigate('/download');
    };
    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setGradientPosition({ x, y });
        const container = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - container.left;
        const mouseY = event.clientY - container.top;
        const oppositeX = (container.width / 2 - mouseX) * 0.03;
        const oppositeY = (container.height / 2 - mouseY) * 0.03;
        setPosition({ x: oppositeX, y: oppositeY });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'header__container', children: (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsx)("div", { className: 'logo', children: (0, jsx_runtime_1.jsxs)("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '80', height: '80', viewBox: '0 0 15800 11000', children: [(0, jsx_runtime_1.jsx)("path", { fill: logoColor, d: 'M13147 6720c-554,2411 -2713,4208 -5291,4208 -2573,0 -4728,-1790 -5287,-4192l867 0c526,1910 2275,3313 4352,3313 2083,0 3836,-1411 4357,-3330l1004 0z' }), (0, jsx_runtime_1.jsx)("path", { fill: logoColor, d: 'M7856 49c2559,0 4704,1770 5278,4153l-1027 0c-563,-1852 -2283,-3200 -4319,-3200 -2042,0 -3767,1356 -4324,3216l-889 0c568,-2391 2717,-4169 5282,-4169z' }), (0, jsx_runtime_1.jsx)("path", { fill: logoColor, d: 'M10696 6710c-32,96 -67,190 -107,282 -191,439 -456,803 -793,1094 -337,289 -701,489 -1093,601 -392,110 -1072,166 -2040,166l-1710 0 0 -2142 1415 0 0 883 659 0c650,0 1121,-68 1414,-204 291,-135 530,-362 715,-679l1540 0z' }), (0, jsx_runtime_1.jsx)("path", { fill: logoColor, d: 'M6368 3283l0 941 -1415 0 0 -2191 1684 0c1086,0 1892,123 2421,368 527,245 963,642 1304,1195 117,188 213,387 290,597l-1559 0c-89,-137 -196,-261 -320,-373 -399,-358 -1041,-537 -1924,-537l-482 0z' }), (0, jsx_runtime_1.jsx)("path", { fill: logoColor, d: 'M65 4517l440 0c284,0 494,35 632,106 138,70 251,185 341,344 89,159 134,344 134,556 0,151 -25,289 -75,416 -50,126 -119,231 -207,315 -88,83 -183,141 -285,173 -102,32 -280,48 -533,48l-447 0 0 -1957zm370 360l0 1235 172 0c170,0 293,-20 369,-59 77,-39 139,-105 188,-197 48,-92 73,-206 73,-341 0,-208 -58,-369 -173,-483 -104,-103 -272,-154 -502,-154l-126 0zm2451 -409c276,0 513,100 712,301 199,200 298,445 298,733 0,286 -98,527 -294,725 -196,198 -434,297 -713,297 -293,0 -536,-102 -730,-305 -194,-203 -291,-444 -291,-724 0,-187 45,-359 135,-516 90,-157 214,-281 372,-373 158,-92 328,-138 511,-138zm-5 365c-180,0 -331,63 -453,189 -123,126 -184,286 -184,480 0,216 77,387 231,513 120,99 257,148 413,148 175,0 325,-64 448,-192 124,-128 185,-285 185,-472 0,-186 -62,-344 -187,-473 -124,-129 -275,-193 -453,-193zm1220 -316l364 0 283 1249 348 -1249 308 0 355 1249 283 -1249 364 0 -443 1957 -355 0 -360 -1265 -353 1265 -350 0 -444 -1957zm2596 0l352 0 841 1288 0 -1288 370 0 0 1957 -355 0 -838 -1284 0 1284 -370 0 0 -1957zm2005 0l370 0 0 1602 546 0 0 354 -916 0 0 -1957zm2119 -49c276,0 513,100 712,301 199,200 298,445 298,733 0,286 -98,527 -294,725 -196,198 -434,297 -713,297 -293,0 -536,-102 -730,-305 -194,-203 -291,-444 -291,-724 0,-187 45,-359 135,-516 90,-157 214,-281 372,-373 158,-92 328,-138 511,-138zm-5 365c-180,0 -331,63 -453,189 -123,126 -184,286 -184,480 0,216 77,387 231,513 120,99 257,148 413,148 175,0 325,-64 448,-192 124,-128 185,-285 185,-472 0,-186 -62,-344 -187,-473 -124,-129 -275,-193 -453,-193zm1965 -316l374 0 751 1957 -386 0 -152 -403 -800 0 -156 403 -386 0 756 -1957zm188 520l-265 674 528 0 -263 -674zm1229 -520l440 0c284,0 494,35 632,106 138,70 251,185 341,344 89,159 134,344 134,556 0,151 -25,289 -75,416 -50,126 -119,231 -207,315 -88,83 -183,141 -285,173 -102,32 -280,48 -533,48l-447 0 0 -1957zm370 360l0 1235 172 0c170,0 293,-20 369,-59 77,-39 139,-105 188,-197 48,-92 73,-206 73,-341 0,-208 -58,-369 -173,-483 -104,-103 -272,-154 -502,-154l-126 0z' })] }) }) }) }), (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsxs)("div", { className: 'about d-flex justify-content-between', children: [(0, jsx_runtime_1.jsxs)("div", { onMouseMove: handleMouseMove, className: 'about__content', children: [(0, jsx_runtime_1.jsx)("h2", { className: 'about__title', onMouseMove: handleMouseMove, onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false), style: {
                                        position: 'relative',
                                        display: 'inline-block',
                                        color: isHovering ? 'transparent' : mainColor,
                                        backgroundImage: isHovering
                                            ? `radial-gradient(circle 150px at ${gradientPosition.x}px ${gradientPosition.y}px, ${hoverTitleColor}, ${mainColor})`
                                            : 'none',
                                        WebkitBackgroundClip: isHovering ? 'text' : 'unset',
                                        transition: 'background-position 0.1s ease',
                                        backgroundClip: isHovering ? 'text' : 'unset',
                                        cursor: 'context-menu'
                                    }, children: "An important tool for your business" }), (0, jsx_runtime_1.jsx)("p", { className: 'about__description', children: "An accessible tool for generating data with the possibility of further downloading." }), (0, jsx_runtime_1.jsxs)("ul", { className: 'about__list', children: [(0, jsx_runtime_1.jsx)("li", { className: 'about__list-item', children: "No download limits" }), (0, jsx_runtime_1.jsx)("li", { className: 'about__list-item', children: "Different formats available" }), (0, jsx_runtime_1.jsx)("li", { className: 'about__list-item', children: "Ability to independently form the order of data" })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleClick, className: 'about__button', variant: 'primary', size: 'lg', children: "Discover the tool" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'about__photoes', children: [(0, jsx_runtime_1.jsx)(Image_1.default, { className: 'about__photo', src: about_png_1.default }), (0, jsx_runtime_1.jsx)(Image_1.default, { style: {
                                        transform: `translate(${position.x}px, ${position.y}px) rotate(-30deg)`,
                                        transition: 'transform 0.1s ease'
                                    }, className: 'about__triangle', src: Triangles_png_1.default }), (0, jsx_runtime_1.jsx)(Image_1.default, { style: {
                                        transform: `translate(${-position.x}px, ${-position.y}px) rotate(-30deg)`,
                                        transition: 'transform 0.1s ease'
                                    }, className: 'about__grid', src: Grid_png_1.default })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: 'contact__wrapper', children: (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsx)(Contact_1.default, {}) }) })] }));
};
exports.default = AboutPage;
