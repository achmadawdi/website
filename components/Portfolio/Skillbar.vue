<template>
  <div class="skills h-full w-max flex flex-wrap gap-x-2 items-center">
    <span class="skillbar bg-black text-white">Learning About</span>
    <span class="skillbar bg-yellow-300"
      ><fa-icon :icon="['fab', 'js']" /> Javascript</span
    >
    <span class="skillbar bg-green-300"
      ><fa-icon :icon="['fab', 'vuejs']" /> Vue</span
    >
    <span class="skillbar bg-blue-300"
      ><fa-icon :icon="['fab', 'react']" /> React</span
    >
    <span class="skillbar bg-yellow-100"
      ><fa-icon :icon="['fab', 'css3']" /> CSS</span
    >
    <span class="skillbar bg-pink-300"
      ><fa-icon :icon="['fab', 'sass']" /> Sass</span
    >
    <span class="skillbar bg-purple-300"
      ><fa-icon :icon="['fab', 'html5']" /> HTML5</span
    >
    <span class="skillbar bg-yellow-300"
      ><fa-icon :icon="['fab', 'java']" /> Java</span
    >
    <span class="skillbar bg-red-300"
      ><fa-icon :icon="['fab', 'php']" /> PHP</span
    >
    <span class="skillbar bg-yellow-200"
      ><fa-icon :icon="['fab', 'node']" /> NodeJs</span
    >
  </div>
</template>
<script>
export default {
  name: "Skillbar",
  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        this.scrollSkills();
      }, 1500);      
    });
  },
  methods: {
    scrollSkills() {
      const gsap = this.$gsap;
      const links = gsap.utils.toArray(".skillbar"),
        tl = horizontalLoop(links, {
          repeat: -1,
          speed: 1 * 0.5,
          reversed: false,
          paddingRight: parseFloat(
            gsap.getProperty(links[0], "paddingRight", "px")
          ),
        });

      let ts = 1;
      document
        .getElementsByClassName("skills")[0]
        .addEventListener("mouseenter", () => {
          ts = ts == -1 ? 1 : -1;
          gsap.to(tl, { timeScale: 0, overwrite: true });
        });
      document
        .getElementsByClassName("skills")[0]
        .addEventListener("mouseleave", () =>
          gsap.to(tl, { timeScale: ts, overwrite: true })
        );

      function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () =>
              tl.totalTime(tl.rawTime() + tl.duration() * 100),
          }),
          length = items.length,
          startX = items[0].offsetLeft,
          times = [],
          widths = [],
          xPercents = [],
          curIndex = 0,
          pixelsPerSecond = (config.speed || 1) * 100,
          snap =
            config.snap === false
              ? (v) => v
              : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
          totalWidth,
          curX,
          distanceToStart,
          distanceToLoop,
          item,
          i;
        gsap.set(items, {
          // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
          xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(
              gsap.getProperty(el, "width", "px")
            ));
            xPercents[i] = snap(
              (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
          },
        });
        gsap.set(items, { x: 0 });
        totalWidth =
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
          (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX;
          distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond,
            },
            0
          )
            .fromTo(
              item,
              {
                xPercent: snap(
                  ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                ),
              },
              {
                xPercent: xPercents[i],
                duration:
                  (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
              },
              distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
          vars = vars || {};
          Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length); // always go in the shortest direction
          let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
          if (time > tl.time() !== index > curIndex) {
            // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
          }
          curIndex = newIndex;
          vars.overwrite = true;
          return tl.tweenTo(time, vars);
        }
        tl.next = (vars) => toIndex(curIndex + 1, vars);
        tl.previous = (vars) => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        if (config.reversed) {
          tl.vars.onReverseComplete();
          tl.reverse();
        }
        return tl;
      }
    },
  },
};
</script>
