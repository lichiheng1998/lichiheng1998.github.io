function importAll(r) {
  return r.keys().map(r);
}

const images = require.context('../images/', false, /\.(png|jpe?g|svg)$/);
const imagePath = (name) => images(name, true);

export default imagePath;
