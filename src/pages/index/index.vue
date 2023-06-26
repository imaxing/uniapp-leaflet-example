<template>
  <szlx-map
    ref="map"
    custom-class="w-screen h-screen"
    :vue-marker-fields="markerFields"
    :center="center"
    :zoom.sync="zoom"
    :layers="['http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}']"
    @ready="onMapReady"
  />
</template>

<script>
import SzlxMap from '@szlx/map'
export default {
  components: { SzlxMap },
  data: () => ({
    zoom: 10,
    center: [39.909757, 116.398115],
    markerFields: [
      {
        className: 'w-[28px] h-[28px] transition-all origin-center mb-[5px] rounded-full object-cover',
        activeClass: 'shadow-debug',
        tag: 'img',
        name: 'icon'
      },
      {
        className:
          'w-[100px] text-center text-[12px] transition-all px-[8px] py-[2px]  bg-[#f8f8f8] rounded-full text-[#494D56]',
        activeClass: 'text-[#fff] bg-[#494D56]',
        tag: 'div',
        name: 'title'
      }
    ]
  }),
  methods: {
    async onMapReady() {
      const points = [
        [116.174955, 40.012911],
        [116.380949, 40.050766],
        [116.021356, 39.917715],
        [116.66934, 39.878148],
        [116.399011, 39.750569],
        [116.400384, 39.909815]
      ]

      await this.$refs.map.createMarkers({
        name: 'mp-markers',
        focus: true,
        waiting: 1000,
        borderWidth: 8,
        markers: points.map((point, index) => ({
          title: `标记-${index}`,
          latitude: point[1],
          longitude: point[0],
          icon: 'https://p.ipic.vip/z50rib.jpg',
          id: index
        }))
      })
    }
  }
}
</script>
