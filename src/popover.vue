<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
        :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
  name: "GrowPopover",
  data() {
    return { visible: false };
  },
  created() {},
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.show);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.close);
    }
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "left", "right", "bottom"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.show);
    } else {
      this.$refs.popover.removeEventListener("mouseenter", this.open);
      this.$refs.popover.removeEventListener("mouseleave", this.close);
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      const height2 = contentWrapper.getBoundingClientRect().height;
      let { width, height, left, top } = triggerWrapper.getBoundingClientRect();
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    show(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>

<style lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      border-bottom: none;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      border-bottom: none;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>
