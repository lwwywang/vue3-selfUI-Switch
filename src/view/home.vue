<template>
    <div>
        <!--animation-container-->
        <div class="animation-container">
            <div class="back-mountain"></div>
            <div class="front-mountain"></div>
        </div>
        <!--animation-container end-->

        <div class="topnavAndBanner">
            <topnav />
            <div class="banner">
                <h1>山雪-UI框架</h1>
                <h2>一个基于Vue3.0的UI框架</h2>
                <p class="actions">
                    <a href="https://github.com/lwwywang/VUE3-SelfUI">Github地址</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>

        <div class="features">
            <ul>
                <li>
                    <svg>
                        <use xlink:href="#icon-Vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-TS"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写（非严格检查）</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-lights"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>

        </div>
    </div>
</template>

<script lang="ts">
import topnav from "../components/topnav.vue"
export default {
    components: { topnav }
}
</script>
<style lang="scss" scoped>
$green: #87d6d9;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
    background: linear-gradient(145deg, #c4dedf 0%, #9cb6b8 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}

.animation-container {
    overflow: hidden;
}



.back-mountain,
.front-mountain {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -100;
}

.back-mountain {
    background: url(/src/assets/back-mountain.png) center bottom repeat-x;
    -webkit-animation: mountain 150s linear infinite;
    animation: mountain 150s linear infinite;

    @media (max-height: 640px) {
        .back-mountain {
            -webkit-background-size: 753px 240px;
            background-size: 753px 240px;
        }
    }

    @media (max-height: 496px) {
        .back-mountain {
            -webkit-background-size: 475px 180px;
            background-size: 475px 180px;
        }
    }

    @media (max-height: 400px) {
        .back-mountain {
            -webkit-background-size: 471px 150px;
            background-size: 471px 150px;
        }
    }
}

.front-mountain {
    background: url(/src/assets/front-mountain.png) center bottom repeat-x;
    -webkit-animation: mountain 100s linear infinite;
    animation: mountain 100s linear infinite;

    @media (max-height: 640px) {
        .front-mountain {
            -webkit-background-size: 660px 250px;
            background-size: 660px 250px;
        }
    }

    @media (max-height: 496px) {
        .front-mountain {
            -webkit-background-size: 501px 190px;
            background-size: 501px 190px;
        }
    }

    @media (max-height: 400px) {
        .front-mountain {
            -webkit-background-size: 422px 160px;
            background-size: 422px 160px;
        }
    }
}

@keyframes mountain {
    from {
        background-position: center bottom;
    }

    to {
        background-position: -300em bottom;
    }
}


.features {
    margin: 64px auto;
    padding: 0 16px;

    @media (min-width: 800px) {
        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width: 1200px) {
        width: 1200px;

        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text;
            }
        }
    }
}

.banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: $green;
            color: white;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>