<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*, *">
      <Button
        class="message"
        text="Bottom Sheet via Custom Plugin"
        col="0"
        row="0"
        @tap="showBottomSheet"
      />
      <Button
        class="message"
        text="Bottom Sheet via {N} Community Plugin"
        col="0"
        row="1"
        @tap="showBottomSheet2"
      />
    </GridLayout>
  </Page>
</template>

<script>
import BottomSheetContent from "./BottomSheetContent.vue";

export default {
  methods: {
    showBottomSheet() {
      this.$_showBottomSheet({
        component: BottomSheetContent,
      });
    },
    showBottomSheet2() {
      this.$showBottomSheet(BottomSheetContent, {});
    },
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
