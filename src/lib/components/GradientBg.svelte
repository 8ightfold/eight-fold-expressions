<script lang="ts">
  import { makeCssUrl } from "$util/url";
  type Pos = { x: number; y:number; };

  export let href  = `/images/space-bg.gif`;
  export let opacity = 100;
  export let position = "top left";
  export let invert = false;
  export let slide = true;
  export let slideSpeed: Pos = { x: 10, y: 5 };
  export let light = "red";
  export let dark  = "magenta";
  export let width = 2;
  export let gap   = 3;

  $: cssurl = makeCssUrl(href);
  $: style = `
  filter:
    invert(${invert ? 100 : 0}%)
    opacity(${opacity}%);
  background:
    repeating-radial-gradient(
      circle at ${position},
      ${light},
      ${dark}  ${width}px,
      ${dark}  ${width + gap}px,
      ${light} ${width + gap * 2}px
    ), ${cssurl};
  `;
  $: style_slide = `
    animation-duration:${slideSpeed.y}s,${slideSpeed.x}s;
  `;
</script>

<div id="bg" class:slide={slide} style="{style}{style_slide}" />

<style lang="scss">
  .slide {
    animation: 
      slide-y 5s linear infinite,
      slide-x 10s linear infinite;
    animation-composition: add;
  }

  #bg {
    animation-composition: add;
    background-blend-mode: color-dodge;
    filter: contrast(1);
    
    position: fixed;
    z-index: -11;
    width: 100%;
    height: 100%;
    height: 100vh;
    background-size: contain;
    opacity: 100%;
    left: 0px;
    top: 0px;
    bottom: 0;
  }

  @keyframes slide-x {
    from { background-position: left; }
    to { background-position: right; }
  }
  @keyframes slide-y {
    from { background-position: bottom; }
    to { background-position: top; }
  }
</style>
