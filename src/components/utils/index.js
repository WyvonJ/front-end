import FeTabs from './FeTabs.vue';
import FeTabPane from './FeTabPane.vue';
import FeButton from './FeButton.vue';

const components = [FeTabs, FeTabPane, FeButton];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

export default install;
