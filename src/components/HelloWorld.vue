<!--
 * @Author: hu.yingxin hyx15942844018@163.com
 * @Date: 2023-07-02 21:55:11
 * @LastEditors: Jader
 * @LastEditTime: 2023-07-04 00:12:17
 * @FilePath: \vuecli\src\uicomponents\Clocks\Clocks.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
  <div>
    <div class="circle">
        <div class="circle-body">
            <ul>
                <li style="--i:1"><div><span>1</span></div></li>
                <li style="--i:2"><div><span>2</span></div></li>
                <li style="--i:3"><div><span>3</span></div></li>
                <li style="--i:4"><div><span>4</span></div></li>
                <li style="--i:5"><div><span>5</span></div></li>
                <li style="--i:6"><div><span>6</span></div></li>
                <li style="--i:7"><div><span>7</span></div></li>
                <li style="--i:8"><div><span>8</span></div></li>
                <li style="--i:9"><div><span>9</span></div></li>
                <li style="--i:10"><div><span>10</span></div></li>
                <li style="--i:11"><div><span>11</span></div></li>
                <li style="--i:12"><div><span>12</span></div></li>
            </ul>
        </div>
    </div>
    
    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  }
}
</script>


<style lang="less" scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.circle {
    // to do 
    position: relative;
    background-color: #333;
    margin-left: 200px;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    &::before {
        position: absolute;
        top: 0;
        height: 300px;
        height: 300px;
        // inset: 0;
        content: '';
        position: absolute;
        background: linear-gradient(#08ff12, #0791ff);
        z-index: 0;
        mix-blend-mode: multiply;
    }
}

.circle-body {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 2px #fff5, 0 0 0 20px #333, 0 0 0 22px #fff, 0 0 0 20px #fff, 0 0 200px #fff;
    ul{
      
      // transform: translateX(-20px);
      // margin-left: -20px;
      padding: 0;
    }
    ul>li {
        position: absolute;
        top: 30px;
        list-style: none;
        transform-origin: 0 120px;
        font-size: 2.5em;
        font-weight: 700;
        text-transform: uppercase;
        font-family: 黑体;
        transform: rotate(calc(30deg*var(--i)));
        width: 0;
        height: 0;
        div{
          span {
            display: inline-block;
            color: #fff;
            width: 40px;
            height: 40px;
            text-align: center;
            text-shadow: 0 0 15px #fff, 0 0 35px #fff, 0 0 75px #fff, 0 0 150px #fff;
            transform: translate(-50%, -50%) rotate(calc(-30deg*var(--i)));
          }
        }
        
    }
}
</style>
<style>
.circle-body::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 110px;
    border-radius: 2px;
    background: linear-gradient(0deg, transparent, #fff);
    transform-origin: bottom;
    animation:  60s steps(60) infinite turn;
}

.circle-body::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 90px;
    border-radius: 2px;
    background: linear-gradient(0deg, transparent, #fff);
    transform-origin: bottom;
    animation: turn 3600s steps(60) infinite;
}

@keyframes turn {

    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

