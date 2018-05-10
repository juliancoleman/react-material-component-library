const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
require("jsdom-global")();

configure({ adapter: new Adapter() });
