import NSBottomSheetPlugin from "@nativescript-community/ui-material-bottomsheet/vue";
import { install as BottomSheetPluginInstall } from "@nativescript-community/ui-material-bottomsheet";

const BottomSheetPlugin = {
  install(Vue) {
    const localVueInstance = Vue;

    BottomSheetPluginInstall();
    localVueInstance.use(NSBottomSheetPlugin);
    
    // expose function via mixin
    localVueInstance.mixin({
      methods: {
        $_showBottomSheet(args) {
          this.$showBottomSheet(args.component, args);
        },
      },
    });
  },
};

export default BottomSheetPlugin;
