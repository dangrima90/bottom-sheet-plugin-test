import NSBottomSheetPlugin from "@nativescript-community/ui-material-bottomsheet/vue";
import { install as BottomSheetPluginInstall } from "@nativescript-community/ui-material-bottomsheet";

const BottomSheetPlugin = {
  install(Vue) {
    const localVueInstance = Vue;

    localVueInstance.prototype.$myBottomSheet = {};
    const bottomSheetPlugin = Vue.prototype.$myBottomSheet;

    BottomSheetPluginInstall();
    localVueInstance.use(NSBottomSheetPlugin);

    bottomSheetPlugin.show = function (args) {
      console.log("show bottom sheet");
      console.log(
        "show bottom sheet function",
        localVueInstance.prototype.$showBottomSheet
      );
      console.log("component", args.component);

      return localVueInstance.prototype
        .$showBottomSheet(args.component, args)
        .then(() => {
          console.log("then callback bottom sheet");
        })
        .catch((e) => {
          console.log("error...");
          console.log(e);
        });
    };
  },
};

export default BottomSheetPlugin;
