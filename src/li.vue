<template>
    <li @click="inkDrop"><a><span class="ink" ref="ink"></span><slot>
        
    </slot></a></li>
</template>

<script>
export default {
  name: "Li",
  methods: {
    inkDrop(event) {
      //current spanTag in the
      var ink = (ink = this.$refs.ink);
      var target = event.currentTarget;
      var parent = target.parentElement;
      //against repeat click
      ink.classList.remove("animate");

      //set size of the ink drop effect background
      let height = ink.offsetHeight;
      let width = ink.offsetWidth;
      if (!width && !height) {
        let d = Math.max(parent.offsetWidth, parent.offsetWidth);
        ink.style.width = `${d}px`;
        ink.style.height = `${d}px`;
      }

      ///position relative to page - half of self height/width
      let x = event.pageX - parent.getBoundingClientRect().left - width / 2;
      let y = event.pageY - parent.getBoundingClientRect().top - height / 2;

      ink.style.top = `${y}px`;
      ink.style.left = `${x}px`;
      ink.classList.add("animate");
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  /*relative positioning for list items along with overflow hidden to contain the overflowing ripple*/
  position: relative;
  overflow: hidden;
  a {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 28px;
    position: relative;
    text-decoration: none;
    page-break-after: 10px 15px;
    display: block;
    cursor: pointer;
  }
}
.ink {
  display: block;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(47, 45, 44, 1) 15%,
    rgba(76, 74, 73, 1) 44%,
    rgba(193, 193, 192, 1) 75%
  );
  border-radius: 100%;
  transform: scale(0);

  /*animation effect*/
  &.animate {
    animation: ripple 0.8s linear;
  }
  @keyframes ripple {
    /*scale the element to 250% to safely cover 
    the entire UL and fade it out*/
    100% {
      opacity: 0;
      transform: scale(2.5);
    }
  }
}
</style>