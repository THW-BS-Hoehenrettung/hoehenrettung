<script lang="ts">
  import {setMap} from "./map";

  export let location: {
    latitude: number;
    longitude: number;
  };
  export let zoom: number = 16;
  export let markerMarkup: string = "";
  const {latitude, longitude} = location;
</script>

<figure
        class="h-full w-full"
        use:setMap={{ latitude, longitude, zoom, markerMarkup }}>
</figure>
