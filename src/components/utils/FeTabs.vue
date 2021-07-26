<script>
export default {
  name: 'FeTabs',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  provide() {
    return {
      rootTabs: this,
    };
  },
  data() {
    return {
      panes: [],
      current: this.value,
    };
  },
  render() {
    const { current, handlerTabPaneClick } = this;
    return <div class="fe-tabs">
      <div class="fe-tabs__header">
        {
          this.panes.map((pane) => <div
            class={['fe-tabs__header--label', pane.name === current ? 'current' : '']}
            key={pane.name}
            on-click={() => handlerTabPaneClick(pane)}
          >
            {pane.label}
          </div>)
        }
      </div>
      <div>
        {this.$slots.default}
      </div>
    </div>;
  },
  methods: {
    calcPaneInstances() {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter((vnode) => vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'FeTabPane');
        const panes = paneSlots.map(({ componentInstance }) => componentInstance);
        this.panes = panes;
      } else {
        this.panes = [];
      }
    },
    handlerTabPaneClick(pane) {
      this.current = pane.name;
    },
  },
  mounted() {
    this.calcPaneInstances();
    if (!this.value) {
      this.current = this.panes[0] && this.panes[0].name;
    }
  },
  // updated() {
  //   this.calcPaneInstances();
  // },
};
</script>

<style lang="scss">
.fe-tabs {
  &__header {
    border: 1px solid #42b983;
    text-align: left;
    &--label {
      cursor: pointer;
      border-right: 1px solid #42b983;
      display: inline-block;
      width: 120px;
      padding: auto 12px;
      text-align: center;
      color: #42b983;
      &.current {
        color: white;
        background-color: #42b983;
      }
    }
  }
}
</style>
