<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
      <router-link :to="{name: 'JobDetails', params:{id: job.id}}">
          <h2>{{job.title}}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            jobs: [
                {title:'UX designer', id:1, details:'sajsad'},
                {title:'Web Developer', id:2, details:'ejfajsad'},
                {title:'Vue Developer', id:3, details:'ghrtjsad'}
            ]
        }
    }
}
</script>

<style>

</style>