<template>
  <div class="test">
    <h1>Vehicles List</h1>
    <p>{{ isLoading }}</p>
    <p>{{ vehicles }}</p>
  </div>
</template>

<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory'
const VehiclesRepo = RepositoryFactory.get('vehicles')

export default {
  name: "test",
  data () {
    return {
      isLoading: false,
      vehicles: [],
    };
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const { data } = await VehiclesRepo.get()
      this.isLoading = false
      this.vehicles = data;
    }
  },
}
</script>

<style>

</style>
